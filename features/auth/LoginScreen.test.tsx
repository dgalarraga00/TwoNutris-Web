// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginScreen } from "./LoginScreen";
import { clearAccessToken } from "@/lib/http/tokenStore";

const { routerPushMock, searchParamsMock } = vi.hoisted(() => ({
  routerPushMock: vi.fn(),
  searchParamsMock: new URLSearchParams(),
}));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: routerPushMock }),
  useSearchParams: () => searchParamsMock,
}));

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

describe("LoginScreen — funnel navigation (final integration unit)", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    routerPushMock.mockClear();
    for (const key of [...searchParamsMock.keys()]) searchParamsMock.delete(key);
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    cleanup();
    clearAccessToken();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("navigates to /checkout once login succeeds", async () => {
    fetchMock.mockResolvedValue(jsonResponse(200, { accessToken: "tok" }));

    const user = userEvent.setup();
    render(<LoginScreen />);
    await user.type(screen.getByLabelText("Correo electrónico"), "ana@test.com");
    await user.type(screen.getByLabelText("Contraseña"), "hunter22");
    await user.click(screen.getByRole("button", { name: "Iniciar sesión" }));

    await screen.findByRole("status");
    expect(routerPushMock).toHaveBeenCalledWith("/checkout");
  });

  it("honors middleware's ?next= param instead of always going to /checkout (returning-customer bounce)", async () => {
    searchParamsMock.set("next", "/semana");
    fetchMock.mockResolvedValue(jsonResponse(200, { accessToken: "tok" }));

    const user = userEvent.setup();
    render(<LoginScreen />);
    await user.type(screen.getByLabelText("Correo electrónico"), "ana@test.com");
    await user.type(screen.getByLabelText("Contraseña"), "hunter22");
    await user.click(screen.getByRole("button", { name: "Iniciar sesión" }));

    await screen.findByRole("status");
    expect(routerPushMock).toHaveBeenCalledWith("/semana");
  });

  it("renders the '¿No tienes cuenta?' cross-link to /registro", () => {
    render(<LoginScreen />);
    expect(screen.getByRole("link", { name: "Regístrate" })).toHaveAttribute(
      "href",
      "/registro",
    );
  });
});
