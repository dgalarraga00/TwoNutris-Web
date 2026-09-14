// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AppNav } from "./AppNav";
import { getAccessToken, setAccessToken } from "@/lib/http/tokenStore";

const { routerPushMock, usePathnameMock } = vi.hoisted(() => ({
  routerPushMock: vi.fn(),
  usePathnameMock: vi.fn(() => "/semana"),
}));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: routerPushMock }),
  usePathname: usePathnameMock,
}));

describe("AppNav — authenticated persistent nav (final integration unit)", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    routerPushMock.mockClear();
    usePathnameMock.mockReturnValue("/semana");
    setAccessToken("valid-access-token");
    fetchMock = vi.fn().mockResolvedValue(new Response("{}", { status: 200 }));
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("renders links to /semana and /perfil, highlighting the current page", () => {
    render(<AppNav />);

    expect(screen.getByRole("link", { name: "Tu semana" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "Tu perfil" })).not.toHaveAttribute("aria-current");
  });

  it("logs out: calls /api/session/logout, clears the access token, and redirects to /entrar", async () => {
    const user = userEvent.setup();
    render(<AppNav />);

    await user.click(screen.getByRole("button", { name: "Cerrar sesión" }));

    await waitFor(() => expect(routerPushMock).toHaveBeenCalledWith("/entrar"));
    expect(getAccessToken()).toBeNull();
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/session/logout",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("still redirects to /entrar even if the logout network call fails", async () => {
    fetchMock.mockRejectedValue(new Error("offline"));
    const user = userEvent.setup();
    render(<AppNav />);

    await user.click(screen.getByRole("button", { name: "Cerrar sesión" }));

    await waitFor(() => expect(routerPushMock).toHaveBeenCalledWith("/entrar"));
    expect(getAccessToken()).toBeNull();
  });
});
