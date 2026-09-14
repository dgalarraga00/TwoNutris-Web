import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

/**
 * `vi.resetModules()` + dynamic `import()` per test gives each test a
 * pristine module-level `inFlightRefresh` slot in `refreshCoordinator` and
 * a pristine `accessToken` slot in `tokenStore`, since both are plain
 * module-scoped singletons (by design — see tokenStore.ts).
 */
describe("refreshCoordinator", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.resetModules();
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("shares exactly one in-flight request across N concurrent callers", async () => {
    fetchMock.mockImplementation(
      () =>
        new Promise<Response>((resolve) => {
          setTimeout(
            () => resolve(new Response(JSON.stringify({ accessToken: "fresh-token" }), { status: 200 })),
            10,
          );
        }),
    );

    const { getFreshAccessToken } = await import("./refreshCoordinator");
    const { getAccessToken } = await import("./tokenStore");

    const results = await Promise.all(
      Array.from({ length: 5 }, () => getFreshAccessToken()),
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/session/refresh",
      expect.objectContaining({ method: "POST", credentials: "include" }),
    );
    results.forEach((token) => expect(token).toBe("fresh-token"));
    expect(getAccessToken()).toBe("fresh-token");
  });

  it("clears the in-flight slot after settling, so a later call starts a genuinely new refresh", async () => {
    fetchMock
      .mockResolvedValueOnce(new Response(JSON.stringify({ accessToken: "token-1" }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ accessToken: "token-2" }), { status: 200 }));

    const { getFreshAccessToken } = await import("./refreshCoordinator");

    const first = await getFreshAccessToken();
    const second = await getFreshAccessToken();

    expect(first).toBe("token-1");
    expect(second).toBe("token-2");
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("rejects every waiter when the refresh call fails, without leaking a stuck slot", async () => {
    fetchMock.mockResolvedValueOnce(new Response(null, { status: 401 }));

    const { getFreshAccessToken } = await import("./refreshCoordinator");

    await expect(
      Promise.all([getFreshAccessToken(), getFreshAccessToken(), getFreshAccessToken()]),
    ).rejects.toThrow("refresh_failed_401");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
