// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PortionOptionList } from "./PortionOptionList";

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const mealPackFixture = (overrides: Record<string, unknown> = {}) => ({
  id: 42,
  code: "PACK-42",
  pack_type: "meal",
  portion_size: "medium",
  status: "active",
  credits_total: 20,
  remaining_credits: 8,
  base_price: "120.00",
  snack_quantity: 0,
  snacks_amount: "0.00",
  double_protein: false,
  double_protein_amount: "0.00",
  coupon: null,
  subtotal: "120.00",
  tax: "18.00",
  total: "138.00",
  created_at: "2026-09-01T00:00:00Z",
  ...overrides,
});

const paymentFixture = (overrides: Record<string, unknown> = {}) => ({
  id: 9,
  credit_pack: 42,
  amount: "0.75",
  status: "pending",
  method: "transfer",
  receipt_url: null,
  source_bank: null,
  transfer_date: null,
  created_at: "2026-09-13T00:00:00Z",
  updated_at: "2026-09-13T00:00:00Z",
  ...overrides,
});

function renderList() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <PortionOptionList />
    </QueryClientProvider>,
  );
}

const fillAndSubmitReceipt = async (user: ReturnType<typeof userEvent.setup>): Promise<void> => {
  await user.type(screen.getByLabelText("Banco de origen"), "Banco Pichincha");
  fireEvent.change(screen.getByLabelText("Fecha de la transferencia"), {
    target: { value: "2026-09-13" },
  });
  const receipt = new File(["fake-bytes"], "comprobante.jpg", { type: "image/jpeg" });
  await user.upload(screen.getByLabelText("Comprobante de transferencia"), receipt);
  await user.click(screen.getByRole("button", { name: "Confirmar cambio" }));
};

describe("PortionOptionList", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("hides ranks below the current MEDIUM tier while credits remain, then requests+uploads a receipt for HIGH", async () => {
    fetchMock.mockImplementation(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = input.toString();
      const method = init?.method ?? "GET";
      if (url.includes("/api/me/packs")) return jsonResponse(200, [mealPackFixture()]);
      if (url.includes("/api/packs/42/portion-size") && method === "POST") {
        return jsonResponse(201, paymentFixture());
      }
      if (url.includes("/api/packs/42/receipt") && method === "POST") {
        return jsonResponse(200, paymentFixture({ status: "pending" }));
      }
      throw new Error(`Unexpected fetch: ${url} ${method}`);
    });

    const user = userEvent.setup();
    renderList();

    // MEDIUM's own current pack: LOW must be absent, MEDIUM/HIGH present.
    expect(await screen.findByRole("button", { name: "Porción Alta" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Porción Media" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Porción Baja" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Porción Alta" }));

    const changeCall = await screen.findByLabelText("Banco de origen");
    expect(changeCall).toBeInTheDocument();

    const portionSizeCall = fetchMock.mock.calls.find(([reqInput]) =>
      reqInput.toString().includes("/api/packs/42/portion-size"),
    );
    const body = JSON.parse((portionSizeCall?.[1] as RequestInit).body as string);
    expect(body).toMatchObject({ new_portion_size: "high" });

    await fillAndSubmitReceipt(user);

    expect(
      await screen.findByText(
        "¡Listo! Recibimos tu comprobante — tu cambio de plan está en revisión.",
      ),
    ).toBeInTheDocument();
  });

  it("shows all 3 ranks as /bolsa purchase links once the pack's credits reach zero", async () => {
    fetchMock.mockImplementation(async (input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/me/packs")) {
        return jsonResponse(200, [mealPackFixture({ remaining_credits: 0 })]);
      }
      throw new Error(`Unexpected fetch: ${url}`);
    });

    renderList();

    expect(await screen.findByRole("link", { name: /Porción Baja/ })).toHaveAttribute(
      "href",
      "/bolsa",
    );
    expect(screen.getByRole("link", { name: /Porción Media/ })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Porción Alta/ })).toBeInTheDocument();
    // No "change" action buttons in this mode.
    expect(screen.queryByRole("button", { name: "Porción Alta" })).not.toBeInTheDocument();
  });

  it("renders the real portion_change_already_pending message on a 409", async () => {
    fetchMock.mockImplementation(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = input.toString();
      const method = init?.method ?? "GET";
      if (url.includes("/api/me/packs")) return jsonResponse(200, [mealPackFixture()]);
      if (url.includes("/api/packs/42/portion-size") && method === "POST") {
        return jsonResponse(409, {
          detail: "El paquete «PACK-42» ya tiene un cambio de plan pendiente de confirmación.",
          code: "portion_change_already_pending",
        });
      }
      throw new Error(`Unexpected fetch: ${url} ${method}`);
    });

    const user = userEvent.setup();
    renderList();

    await user.click(await screen.findByRole("button", { name: "Porción Alta" }));

    expect(
      await screen.findByText("Ya tienes un cambio de plan pendiente de confirmación."),
    ).toBeInTheDocument();
    // Stays on the option list — no receipt form was opened.
    expect(screen.queryByLabelText("Banco de origen")).not.toBeInTheDocument();
  });
});
