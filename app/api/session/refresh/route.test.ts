import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "./route";
import { REFRESH_COOKIE_NAME } from "../shared";

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const mockCookieStore = vi.fn();

vi.mock("next/headers", () => ({
  cookies: () => mockCookieStore(),
}));

describe("POST /api/session/refresh", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    mockCookieStore.mockReset();
  });

  it("reads the httpOnly tw_refresh cookie server-side and proxies Django with {refresh}", async () => {
    mockCookieStore.mockResolvedValue({
      get: (name: string) => (name === REFRESH_COOKIE_NAME ? { value: "cookie-refresh-token" } : undefined),
    });
    fetchMock.mockResolvedValueOnce(jsonResponse(200, { access: "new-access-token" }));

    const response = await POST();
    const data: unknown = await response.json();

    expect(response.status).toBe(200);
    // Exact shape refreshCoordinator.ts::isRefreshResponse expects.
    expect(data).toEqual({ accessToken: "new-access-token" });
    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining("/api/auth/refresh"),
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ refresh: "cookie-refresh-token" }),
      }),
    );
  });

  it("returns 401 without calling Django when no tw_refresh cookie is present", async () => {
    mockCookieStore.mockResolvedValue({ get: () => undefined });

    const response = await POST();

    expect(response.status).toBe(401);
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("clears the cookie and returns 401 when the refresh token is expired/invalid", async () => {
    mockCookieStore.mockResolvedValue({
      get: (name: string) => (name === REFRESH_COOKIE_NAME ? { value: "expired-token" } : undefined),
    });
    fetchMock.mockResolvedValueOnce(jsonResponse(401, { detail: "Token is invalid or expired" }));

    const response = await POST();

    expect(response.status).toBe(401);
    const cookie = response.cookies.get(REFRESH_COOKIE_NAME);
    // A `.delete()` call serializes as maxAge 0 / expired Set-Cookie.
    expect(cookie?.value).toBe("");
  });
});
