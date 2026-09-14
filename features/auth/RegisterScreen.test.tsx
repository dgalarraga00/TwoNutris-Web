// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RegisterScreen } from "./RegisterScreen";
import { usePurchaseDraftStore } from "@/stores/purchaseDraftStore";
import { clearAccessToken } from "@/lib/http/tokenStore";

const { routerPushMock } = vi.hoisted(() => ({ routerPushMock: vi.fn() }));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: routerPushMock }),
}));

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

describe("RegisterScreen — funnel navigation (final integration unit)", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    usePurchaseDraftStore.getState().reset();
    routerPushMock.mockClear();
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    cleanup();
    clearAccessToken();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("navigates to /checkout once register+auto-login succeeds", async () => {
    fetchMock.mockImplementation((input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/auth/register")) return Promise.resolve(jsonResponse(201, {}));
      if (url.includes("/api/session/login")) {
        return Promise.resolve(jsonResponse(200, { accessToken: "tok" }));
      }
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const user = userEvent.setup();
    render(<RegisterScreen />);
    await user.type(screen.getByLabelText("Nombre"), "Ana");
    await user.type(screen.getByLabelText("Apellido"), "Pérez");
    await user.type(screen.getByLabelText("Correo electrónico"), "ana@test.com");
    await user.type(screen.getByLabelText("Teléfono"), "0991234567");
    await user.type(screen.getByLabelText("Contraseña"), "hunter22");
    await user.click(screen.getByRole("button", { name: "Crear cuenta" }));

    await screen.findByRole("status");
    expect(routerPushMock).toHaveBeenCalledWith("/checkout");
  });

  it("renders the '¿Ya tienes cuenta?' cross-link to /entrar", () => {
    render(<RegisterScreen />);
    expect(screen.getByRole("link", { name: "Inicia sesión" })).toHaveAttribute(
      "href",
      "/entrar",
    );
  });
});
