// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AddressesSection } from "./AddressesSection";
import { clearAccessToken, setAccessToken } from "@/lib/http/tokenStore";

// jsdom has no Pointer Events capture API; Vaul's drag-to-dismiss handling
// calls `setPointerCapture`/`releasePointerCapture` on every press inside
// the drawer (same per-file-polyfill convention as CancelOrderDrawer.test.tsx).
if (typeof Element !== "undefined" && !Element.prototype.setPointerCapture) {
  Element.prototype.setPointerCapture = () => {};
  Element.prototype.releasePointerCapture = () => {};
  Element.prototype.hasPointerCapture = () => false;
}

const toastSuccessMock = vi.fn();
vi.mock("sonner", () => ({
  toast: { success: (...args: unknown[]) => toastSuccessMock(...args), error: vi.fn() },
}));

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), { status, headers: { "Content-Type": "application/json" } });

const addressesResponse = (): Response =>
  jsonResponse(200, [
    {
      id: 1,
      zone: 7,
      label: "Casa",
      street: "Av. Siempre Viva 123",
      reference: "Junto al parque",
      is_default: true,
      created_at: "2026-09-01T00:00:00Z",
    },
  ]);

const zonesResponse = (): Response =>
  jsonResponse(200, [
    { id: 7, name: "Zona Norte", description: "" },
    { id: 8, name: "Zona Sur", description: "" },
  ]);

function renderSection() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <AddressesSection />
    </QueryClientProvider>,
  );
}

describe("AddressesSection — live-feedback fix (feedback-round-1): address editing", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    setAccessToken("valid-access-token");
    toastSuccessMock.mockReset();
  });

  afterEach(() => {
    cleanup();
    clearAccessToken();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("opens the edit drawer prefilled with the address's own values, saves via PATCH, toasts, and closes", async () => {
    fetchMock = vi.fn().mockImplementation(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = input.toString();
      const method = init?.method ?? "GET";
      if (url.includes("/api/zones")) return zonesResponse();
      if (url.includes("/api/me/addresses/1") && method === "PATCH") {
        return jsonResponse(200, {
          id: 1,
          zone: 8,
          label: "Oficina",
          street: "Av. Siempre Viva 123",
          reference: "Junto al parque",
          is_default: true,
          created_at: "2026-09-01T00:00:00Z",
        });
      }
      if (url.includes("/api/me/addresses")) return addressesResponse();
      throw new Error(`Unexpected fetch: ${url}`);
    });
    vi.stubGlobal("fetch", fetchMock);

    const user = userEvent.setup();
    renderSection();

    await user.click(await screen.findByRole("button", { name: "Editar" }));

    const labelInput = await screen.findByLabelText("Nombre de la dirección");
    expect(labelInput).toHaveValue("Casa");
    expect(screen.getByLabelText("Dirección")).toHaveValue("Av. Siempre Viva 123");

    await user.clear(labelInput);
    await user.type(labelInput, "Oficina");
    await user.selectOptions(screen.getByLabelText("Zona"), "8");
    await user.click(screen.getByRole("button", { name: "Guardar cambios" }));

    await waitFor(() =>
      expect(fetchMock).toHaveBeenCalledWith(
        expect.stringContaining("/api/me/addresses/1"),
        expect.objectContaining({ method: "PATCH" }),
      ),
    );

    const patchCall = fetchMock.mock.calls.find(
      ([reqInput, reqInit]) =>
        reqInput.toString().includes("/api/me/addresses/1") &&
        (reqInit as RequestInit | undefined)?.method === "PATCH",
    );
    const body = JSON.parse((patchCall?.[1] as RequestInit).body as string);
    expect(body).toMatchObject({ zone: 8, label: "Oficina", street: "Av. Siempre Viva 123" });

    expect(toastSuccessMock).toHaveBeenCalledWith("Dirección actualizada.");
    await waitFor(() =>
      expect(screen.queryByRole("button", { name: "Guardar cambios" })).not.toBeInTheDocument(),
    );
  });
});
