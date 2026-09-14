import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { httpClient } from "./httpClient";
import { clearAccessToken, getAccessToken, setAccessToken } from "./tokenStore";
import { ApiError } from "./errors";

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const authHeaderOf = (init: RequestInit | undefined): string | null => {
  const headers = init?.headers;
  return headers instanceof Headers ? headers.get("Authorization") : null;
};

describe("httpClient", () => {
  let fetchMock: ReturnType<typeof vi.fn>;
  let refreshCallCount: number;

  beforeEach(() => {
    refreshCallCount = 0;
    clearAccessToken();
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("attaches the current access token to outgoing requests", async () => {
    setAccessToken("valid-token");
    fetchMock.mockResolvedValueOnce(jsonResponse(200, { ok: true }));

    await httpClient("/api/me");

    expect(authHeaderOf(fetchMock.mock.calls[0]?.[1])).toBe("Bearer valid-token");
  });

  it("REQUIRED: N concurrent 401s trigger exactly 1 refresh call, and each request is retried once", async () => {
    setAccessToken("stale-token");
    fetchMock.mockImplementation(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      if (url === "/api/session/refresh") {
        refreshCallCount += 1;
        return jsonResponse(200, { accessToken: "fresh-token" });
      }
      if (authHeaderOf(init) === "Bearer fresh-token") {
        return jsonResponse(200, { data: url });
      }
      return jsonResponse(401, { detail: "Unauthorized", code: "token_not_valid" });
    });

    const responses = await Promise.all([
      httpClient("/api/protected/1"),
      httpClient("/api/protected/2"),
      httpClient("/api/protected/3"),
      httpClient("/api/protected/4"),
      httpClient("/api/protected/5"),
    ]);

    expect(refreshCallCount).toBe(1);
    responses.forEach((response) => expect(response.status).toBe(200));
    expect(getAccessToken()).toBe("fresh-token");
  });

  it("hard-logs-out (clears the token store) when the refresh call itself fails", async () => {
    setAccessToken("stale-token");
    fetchMock.mockImplementation(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (url === "/api/session/refresh") {
        return jsonResponse(401, { detail: "invalid refresh", code: "refresh_invalid" });
      }
      return jsonResponse(401, { detail: "Unauthorized", code: "token_not_valid" });
    });

    await expect(httpClient("/api/protected")).rejects.toBeInstanceOf(ApiError);
    expect(getAccessToken()).toBeNull();
  });

  it("hard-logs-out when the retried request also comes back 401 (second 401)", async () => {
    setAccessToken("stale-token");
    fetchMock.mockImplementation(async (input: RequestInfo | URL) => {
      const url = String(input);
      if (url === "/api/session/refresh") {
        return jsonResponse(200, { accessToken: "still-rejected-token" });
      }
      return jsonResponse(401, { detail: "Unauthorized", code: "token_not_valid" });
    });

    await expect(httpClient("/api/protected")).rejects.toBeInstanceOf(ApiError);
    expect(getAccessToken()).toBeNull();
  });

  it("throws ApiError carrying the backend's {detail, code} shape on a non-401 error", async () => {
    setAccessToken("valid-token");
    fetchMock.mockResolvedValueOnce(
      jsonResponse(422, { detail: "El portion no puede bajar de nivel", code: "portion_downgrade_not_allowed" }),
    );

    const error = await httpClient("/api/packs/1/portion-size").catch((caught: unknown) => caught);

    expect(error).toBeInstanceOf(ApiError);
    expect((error as ApiError).status).toBe(422);
    expect((error as ApiError).code).toBe("portion_downgrade_not_allowed");
  });
});
