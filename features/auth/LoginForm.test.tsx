// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";
import { getAccessToken, clearAccessToken } from "@/lib/http/tokenStore";

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

describe("LoginForm", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    cleanup();
    clearAccessToken();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("logs in successfully and sets the access token", async () => {
    fetchMock.mockResolvedValueOnce(jsonResponse(200, { accessToken: "access-token-xyz" }));

    const user = userEvent.setup();
    render(<LoginForm />);
    await user.type(screen.getByLabelText("Correo electrónico"), "ana@test.com");
    await user.type(screen.getByLabelText("Contraseña"), "hunter22");
    await user.click(screen.getByRole("button", { name: "Iniciar sesión" }));

    expect(await screen.findByRole("status")).toHaveTextContent("¡Bienvenido de nuevo!");
    expect(getAccessToken()).toBe("access-token-xyz");
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/session/login",
      expect.objectContaining({
        method: "POST",
        body: JSON.stringify({ email: "ana@test.com", password: "hunter22" }),
      }),
    );
  });

  it("renders the invalid_credentials error and does not set an access token", async () => {
    fetchMock.mockResolvedValueOnce(
      jsonResponse(401, { code: "invalid_credentials", detail: "No active account found with the given credentials" }),
    );

    const user = userEvent.setup();
    render(<LoginForm />);
    await user.type(screen.getByLabelText("Correo electrónico"), "ana@test.com");
    await user.type(screen.getByLabelText("Contraseña"), "wrong-password");
    await user.click(screen.getByRole("button", { name: "Iniciar sesión" }));

    expect(await screen.findByRole("alert")).toHaveTextContent("Correo o contraseña incorrectos.");
    expect(getAccessToken()).toBeNull();
  });

  it("requires an email and password before submitting (client-side validation)", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    await user.click(screen.getByRole("button", { name: "Iniciar sesión" }));

    expect(await screen.findByText("Ingresa un correo electrónico válido.")).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
