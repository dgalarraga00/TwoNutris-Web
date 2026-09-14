// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RegisterForm } from "./RegisterForm";
import { usePurchaseDraftStore } from "@/stores/purchaseDraftStore";
import { getAccessToken, clearAccessToken } from "@/lib/http/tokenStore";

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const fillCommonFields = async (user: ReturnType<typeof userEvent.setup>): Promise<void> => {
  await user.type(screen.getByLabelText("Nombre"), "Ana");
  await user.type(screen.getByLabelText("Apellido"), "Pérez");
  await user.type(screen.getByLabelText("Correo electrónico"), "ana@test.com");
  await user.type(screen.getByLabelText("Teléfono"), "0991234567");
  await user.type(screen.getByLabelText("Contraseña"), "hunter22");
};

describe("RegisterForm", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    usePurchaseDraftStore.getState().reset();
  });

  afterEach(() => {
    cleanup();
    clearAccessToken();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("registers then auto-logs-in, ending authenticated with a success state", async () => {
    fetchMock.mockImplementation((input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/auth/register")) {
        return Promise.resolve(
          jsonResponse(201, {
            id: 1,
            email: "ana@test.com",
            kind: "individual",
            phone: "0991234567",
            first_name: "Ana",
            last_name: "Pérez",
          }),
        );
      }
      if (url.includes("/api/session/login")) {
        return Promise.resolve(jsonResponse(200, { accessToken: "access-token-abc" }));
      }
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const user = userEvent.setup();
    render(<RegisterForm />);
    await fillCommonFields(user);
    await user.click(screen.getByRole("button", { name: "Crear cuenta" }));

    expect(await screen.findByRole("status")).toHaveTextContent(
      "¡Cuenta creada! Ya iniciaste sesión.",
    );
    expect(getAccessToken()).toBe("access-token-abc");

    const registerCall = fetchMock.mock.calls.find(([input]) =>
      input.toString().includes("/api/auth/register"),
    );
    const registerBody = JSON.parse((registerCall?.[1] as RequestInit).body as string);
    expect(registerBody).toMatchObject({
      email: "ana@test.com",
      password: "hunter22",
      phone: "0991234567",
      first_name: "Ana",
      last_name: "Pérez",
      kind: "individual",
    });
  });

  it("sends the customer's already-made GROUP choice silently, with no kind field in the form", async () => {
    usePurchaseDraftStore.getState().setCustomerKind("group");
    fetchMock.mockImplementation((input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/auth/register")) {
        return Promise.resolve(jsonResponse(201, { id: 2 }));
      }
      return Promise.resolve(jsonResponse(200, { accessToken: "access-token-group" }));
    });

    const user = userEvent.setup();
    render(<RegisterForm />);

    expect(screen.queryByLabelText(/tipo de cliente/i)).not.toBeInTheDocument();

    await fillCommonFields(user);
    await user.click(screen.getByRole("button", { name: "Crear cuenta" }));

    await waitFor(() => expect(getAccessToken()).toBe("access-token-group"));

    const registerCall = fetchMock.mock.calls.find(([input]) =>
      input.toString().includes("/api/auth/register"),
    );
    const registerBody = JSON.parse((registerCall?.[1] as RequestInit).body as string);
    expect(registerBody.kind).toBe("group");
  });

  it("creates a real NutritionProfile after register when the calculator ran (bug fix, found during F9)", async () => {
    usePurchaseDraftStore.getState().setCalculatorResult({
      goal: "gain_muscle",
      weightKg: "80",
      heightCm: "180",
      age: "30",
      activityLevel: "active",
    });
    fetchMock.mockImplementation((input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/auth/register")) return Promise.resolve(jsonResponse(201, {}));
      if (url.includes("/api/session/login")) {
        return Promise.resolve(jsonResponse(200, { accessToken: "tok" }));
      }
      if (url.includes("/api/me/profile")) return Promise.resolve(jsonResponse(201, {}));
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const user = userEvent.setup();
    render(<RegisterForm />);
    await fillCommonFields(user);
    await user.click(screen.getByRole("button", { name: "Crear cuenta" }));

    await screen.findByRole("status");
    const profileCall = fetchMock.mock.calls.find(([input]) =>
      input.toString().includes("/api/me/profile"),
    );
    expect(profileCall).toBeDefined();
    const profileBody = JSON.parse((profileCall?.[1] as RequestInit).body as string);
    expect(profileBody).toEqual({
      goal: "gain_muscle",
      weight_kg: 80,
      height_cm: 180,
      age: 30,
      activity_level: "active",
    });
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("does NOT call POST /api/me/profile when the calculator was skipped (no body data)", async () => {
    usePurchaseDraftStore.getState().setGoal("improve_health");
    fetchMock.mockImplementation((input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/auth/register")) return Promise.resolve(jsonResponse(201, {}));
      return Promise.resolve(jsonResponse(200, { accessToken: "tok" }));
    });

    const user = userEvent.setup();
    render(<RegisterForm />);
    await fillCommonFields(user);
    await user.click(screen.getByRole("button", { name: "Crear cuenta" }));

    await screen.findByRole("status");
    expect(
      fetchMock.mock.calls.some(([input]) => input.toString().includes("/api/me/profile")),
    ).toBe(false);
  });

  it("shows a soft warning (not an error) if profile creation fails, without blocking the account", async () => {
    usePurchaseDraftStore.getState().setCalculatorResult({
      goal: "lose_weight",
      weightKg: "60",
      heightCm: "165",
      age: "25",
      activityLevel: "moderate",
    });
    fetchMock.mockImplementation((input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/auth/register")) return Promise.resolve(jsonResponse(201, {}));
      if (url.includes("/api/session/login")) {
        return Promise.resolve(jsonResponse(200, { accessToken: "tok" }));
      }
      if (url.includes("/api/me/profile")) {
        return Promise.resolve(jsonResponse(500, { code: "server_error", detail: "boom" }));
      }
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const user = userEvent.setup();
    render(<RegisterForm />);
    await fillCommonFields(user);
    await user.click(screen.getByRole("button", { name: "Crear cuenta" }));

    await screen.findByRole("status");
    expect(await screen.findByText(/Vas a recibir el plan Medio por ahora/)).toBeInTheDocument();
    expect(getAccessToken()).toBe("tok");
  });

  it("renders the real duplicate-email error from the backend and does not call login", async () => {
    fetchMock.mockResolvedValueOnce(
      jsonResponse(400, { email: ["Ya existe una cuenta con este correo electrónico."] }),
    );

    const user = userEvent.setup();
    render(<RegisterForm />);
    await fillCommonFields(user);
    await user.click(screen.getByRole("button", { name: "Crear cuenta" }));

    expect(await screen.findByText("Ya existe una cuenta con este correo electrónico.")).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(getAccessToken()).toBeNull();
  });

  it("blocks submission client-side (zod) when the password is under 8 characters, with no fetch call", async () => {
    const user = userEvent.setup();
    render(<RegisterForm />);
    await user.type(screen.getByLabelText("Nombre"), "Ana");
    await user.type(screen.getByLabelText("Apellido"), "Pérez");
    await user.type(screen.getByLabelText("Correo electrónico"), "ana@test.com");
    await user.type(screen.getByLabelText("Teléfono"), "0991234567");
    await user.type(screen.getByLabelText("Contraseña"), "short1");
    await user.click(screen.getByRole("button", { name: "Crear cuenta" }));

    expect(
      await screen.findByText("La contraseña debe tener al menos 8 caracteres."),
    ).toBeInTheDocument();
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("renders a server-side password-too-short error when the backend rejects it", async () => {
    fetchMock.mockResolvedValueOnce(
      jsonResponse(400, { password: ["Ensure this field has at least 8 characters."] }),
    );

    const user = userEvent.setup();
    render(<RegisterForm />);
    await fillCommonFields(user);
    await user.click(screen.getByRole("button", { name: "Crear cuenta" }));

    expect(
      await screen.findByText("Ensure this field has at least 8 characters."),
    ).toBeInTheDocument();
  });
});
