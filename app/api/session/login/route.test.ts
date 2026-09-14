import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "./route";
import { REFRESH_COOKIE_NAME } from "../shared";

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const loginRequest = (body: unknown): Request =>
  new Request("http://localhost/api/session/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

describe("POST /api/session/login", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("proxies Django and returns only the access token in the JSON body", async () => {
    fetchMock.mockResolvedValueOnce(
      jsonResponse(200, { access: "access-token-123", refresh: "refresh-token-456" }),
    );

    const response = await POST(loginRequest({ email: "user@test.com", password: "hunter22" }));
    const data: unknown = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({ accessToken: "access-token-123" });
    expect(JSON.stringify(data)).not.toContain("refresh-token-456");

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining("/api/auth/login"),
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ email: "user@test.com", password: "hunter22" }),
      }),
    );
  });

  it("sets the tw_refresh cookie with the exact httpOnly/secure/sameSite/path/maxAge attributes", async () => {
    fetchMock.mockResolvedValueOnce(
      jsonResponse(200, { access: "access-token-123", refresh: "refresh-token-456" }),
    );

    const response = await POST(loginRequest({ email: "user@test.com", password: "hunter22" }));
    const cookie = response.cookies.get(REFRESH_COOKIE_NAME);

    expect(cookie).toBeDefined();
    expect(cookie?.value).toBe("refresh-token-456");
    expect(cookie?.httpOnly).toBe(true);
    expect(cookie?.secure).toBe(true);
    expect(cookie?.sameSite).toBe("lax");
    // Path="/" (bug fix — see shared.ts::REFRESH_COOKIE_PATH docstring):
    // middleware.ts must see this cookie on every page navigation, not just
    // requests to /api/session/*.
    expect(cookie?.path).toBe("/");
    expect(cookie?.maxAge).toBe(60 * 60 * 24 * 7);
  });

  it("propagates a 401 from Django as {code: invalid_credentials, detail} with no cookie set", async () => {
    fetchMock.mockResolvedValueOnce(
      jsonResponse(401, { detail: "No active account found with the given credentials" }),
    );

    const response = await POST(loginRequest({ email: "user@test.com", password: "wrong" }));
    const data: unknown = await response.json();

    expect(response.status).toBe(401);
    expect(data).toEqual({
      code: "invalid_credentials",
      detail: "No active account found with the given credentials",
    });
    expect(response.headers.get("set-cookie")).toBeNull();
  });

  it("returns 400 without calling Django when the request body is missing password", async () => {
    const response = await POST(loginRequest({ email: "user@test.com" }));
    const data: unknown = await response.json();

    expect(response.status).toBe(400);
    expect(data).toMatchObject({ code: "invalid_request" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("returns 400 without calling Django when the request body is not valid JSON", async () => {
    const malformedRequest = new Request("http://localhost/api/session/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{not json",
    });

    const response = await POST(malformedRequest);

    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
