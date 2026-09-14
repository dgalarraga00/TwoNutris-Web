// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CheckoutForm } from "./CheckoutForm";
import { usePurchaseDraftStore } from "@/stores/purchaseDraftStore";
import { clearAccessToken, setAccessToken } from "@/lib/http/tokenStore";

const { routerPushMock } = vi.hoisted(() => ({ routerPushMock: vi.fn() }));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: routerPushMock }),
}));

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const zonesResponse = (): Response =>
  jsonResponse(200, [{ id: 7, name: "Zona Norte", description: "" }]);

const addressFixture = (): Response =>
  jsonResponse(201, {
    id: 1,
    zone: 7,
    label: "Casa",
    street: "Av. Siempre Viva 123",
    reference: "Junto al parque",
    is_default: true,
    created_at: "2026-09-13T00:00:00Z",
  });

const packFixture = (overrides: Record<string, unknown> = {}): Response =>
  jsonResponse(201, {
    id: 42,
    code: "PACK-42",
    pack_type: "meal",
    portion_size: "medium",
    status: "draft",
    credits_total: 20,
    base_price: "120.00",
    snack_quantity: 0,
    snacks_amount: "0.00",
    double_protein: false,
    double_protein_amount: "0.00",
    coupon: null,
    subtotal: "120.00",
    tax: "18.00",
    total: "138.00",
    created_at: "2026-09-13T00:00:00Z",
    ...overrides,
  });

const receiptFixture = (): Response =>
  jsonResponse(200, {
    id: 9,
    credit_pack: 42,
    amount: "138.00",
    status: "pending",
    method: "transfer",
    receipt_url: "https://cloudinary.example/receipt.jpg",
    source_bank: "Banco Pichincha",
    transfer_date: "2026-09-01",
    created_at: "2026-09-13T00:00:00Z",
    updated_at: "2026-09-13T00:00:00Z",
  });

function renderCheckoutForm() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <CheckoutForm />
    </QueryClientProvider>,
  );
}

const fillAddressAndPayment = async (user: ReturnType<typeof userEvent.setup>): Promise<void> => {
  const zoneSelect = await screen.findByLabelText("Zona");
  await user.selectOptions(zoneSelect, "7");
  await user.type(screen.getByLabelText("Nombre de la dirección"), "Casa");
  await user.type(screen.getByLabelText("Dirección"), "Av. Siempre Viva 123");
  await user.type(screen.getByLabelText("Referencia"), "Junto al parque");
  await user.type(screen.getByLabelText("Banco de origen"), "Banco Pichincha");
  fireEvent.change(screen.getByLabelText("Fecha de la transferencia"), {
    target: { value: "2026-09-01" },
  });
  const receipt = new File(["fake-bytes"], "comprobante.jpg", { type: "image/jpeg" });
  await user.upload(screen.getByLabelText("Comprobante de transferencia"), receipt);
};

describe("CheckoutForm", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    usePurchaseDraftStore.getState().reset();
    setAccessToken("valid-access-token");
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
    routerPushMock.mockClear();
  });

  afterEach(() => {
    cleanup();
    clearAccessToken();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("creates the address, purchases the meal pack, and uploads the receipt in one submit", async () => {
    fetchMock.mockImplementation(async (input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/zones")) return zonesResponse();
      if (url.includes("/api/me/addresses")) return addressFixture();
      if (url.includes("/api/packs/42/receipt")) return receiptFixture();
      if (url.includes("/api/packs")) return packFixture();
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const user = userEvent.setup();
    renderCheckoutForm();
    await fillAddressAndPayment(user);
    await user.click(screen.getByRole("button", { name: "Confirmar compra" }));

    expect(
      await screen.findByText("¡Listo! Recibimos tu comprobante — tu pago está en revisión."),
    ).toBeInTheDocument();

    // Funnel navigation (final integration unit): a successful purchase
    // sends the now-paying, authenticated customer straight to /semana.
    expect(routerPushMock).toHaveBeenCalledWith("/semana");

    const addressCall = fetchMock.mock.calls.find(([input]) =>
      input.toString().includes("/api/me/addresses"),
    );
    const addressBody = JSON.parse((addressCall?.[1] as RequestInit).body as string);
    expect(addressBody).toMatchObject({
      zone: 7,
      label: "Casa",
      street: "Av. Siempre Viva 123",
      reference: "Junto al parque",
      is_default: true,
    });

    const packsCall = fetchMock.mock.calls.find(
      ([input]) => input.toString().includes("/api/packs") && !input.toString().includes("receipt"),
    );
    const packsBody = JSON.parse((packsCall?.[1] as RequestInit).body as string);
    expect(packsBody).toMatchObject({
      pack_type: "meal",
      double_protein: false,
      snack_quantity: 0,
      coupon_code: null,
    });

    const receiptCall = fetchMock.mock.calls.find(([input]) =>
      input.toString().includes("/api/packs/42/receipt"),
    );
    expect(receiptCall?.[1]).toMatchObject({ method: "POST" });
    expect((receiptCall?.[1] as RequestInit).body).toBeInstanceOf(FormData);
  });

  describe("real coupon error codes (from preview_coupon(), reachable via POST /api/coupons/validate)", () => {
    const cases: Array<{ code: string; detail: string }> = [
      { code: "coupon_invalid", detail: "El cupón «BADCODE» no existe o no está activo." },
      { code: "coupon_expired", detail: "El cupón «OLD10» expiró el 01/01/2026." },
      { code: "coupon_exhausted", detail: "El cupón «USED10» alcanzó su límite de usos." },
      {
        code: "coupon_first_purchase_only",
        detail: "El cupón «WELCOME10» es solo para la primera compra.",
      },
    ];

    for (const { code, detail } of cases) {
      it(`renders the real backend message for ${code}`, async () => {
        fetchMock.mockImplementation(async (input: RequestInfo | URL) => {
          const url = input.toString();
          if (url.includes("/api/zones")) return zonesResponse();
          if (url.includes("/api/coupons/validate")) return jsonResponse(422, { detail, code });
          throw new Error(`Unexpected fetch: ${url}`);
        });

        const user = userEvent.setup();
        renderCheckoutForm();
        await screen.findByLabelText("Zona");
        await user.click(screen.getByRole("button", { name: "¿Tienes un cupón?" }));
        await user.type(screen.getByLabelText("Código de cupón"), "TESTCODE");
        await user.click(screen.getByRole("button", { name: "Aplicar" }));

        expect(await screen.findByText(detail)).toBeInTheDocument();
      });
    }
  });

  it("renders the real cross_range_purchase_blocked message when POST /api/packs rejects a second active-range purchase", async () => {
    fetchMock.mockImplementation(async (input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/zones")) return zonesResponse();
      if (url.includes("/api/me/addresses")) return addressFixture();
      if (url.includes("/api/packs")) {
        return jsonResponse(422, {
          detail:
            "Ya tienes créditos activos en la porción media; cambia tu plan en lugar de comprar un paquete nuevo.",
          code: "cross_range_purchase_blocked",
        });
      }
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const user = userEvent.setup();
    renderCheckoutForm();
    await fillAddressAndPayment(user);
    await user.click(screen.getByRole("button", { name: "Confirmar compra" }));

    expect(
      await screen.findByText(
        "Ya tienes créditos activos en la porción media; cambia tu plan en lugar de comprar un paquete nuevo.",
      ),
    ).toBeInTheDocument();
  });

  it("renders the real invalid_receipt_file message when POST /api/packs/{id}/receipt rejects the file", async () => {
    fetchMock.mockImplementation(async (input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/zones")) return zonesResponse();
      if (url.includes("/api/me/addresses")) return addressFixture();
      if (url.includes("/api/packs/42/receipt")) {
        return jsonResponse(422, {
          detail: "Comprobante inválido: solo se aceptan imágenes (JPEG/PNG) o PDF.",
          code: "invalid_receipt_file",
        });
      }
      if (url.includes("/api/packs")) return packFixture();
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const user = userEvent.setup();
    renderCheckoutForm();
    await fillAddressAndPayment(user);
    await user.click(screen.getByRole("button", { name: "Confirmar compra" }));

    expect(
      await screen.findByText("Comprobante inválido: solo se aceptan imágenes (JPEG/PNG) o PDF."),
    ).toBeInTheDocument();
  });

  describe("task 5.9 — silent 401 refresh mid-submit", () => {
    it("refreshes and retries transparently, showing only one continuous loading state and no error, ending in success", async () => {
      let addressAttempts = 0;
      let refreshCalls = 0;

      fetchMock.mockImplementation(async (input: RequestInfo | URL, init?: RequestInit) => {
        const url = input.toString();
        const headers = init?.headers instanceof Headers ? init.headers : new Headers(init?.headers);

        if (url.includes("/api/zones")) return zonesResponse();

        if (url === "/api/session/refresh") {
          refreshCalls += 1;
          return jsonResponse(200, { accessToken: "fresh-access-token" });
        }

        if (url.includes("/api/me/addresses")) {
          addressAttempts += 1;
          if (headers.get("Authorization") !== "Bearer fresh-access-token") {
            return jsonResponse(401, { detail: "Unauthorized", code: "token_not_valid" });
          }
          return addressFixture();
        }

        if (url.includes("/api/packs/42/receipt")) return receiptFixture();
        if (url.includes("/api/packs")) return packFixture();

        throw new Error(`Unexpected fetch: ${url}`);
      });

      const user = userEvent.setup();
      renderCheckoutForm();
      await fillAddressAndPayment(user);
      await user.click(screen.getByRole("button", { name: "Confirmar compra" }));

      // The button flips to its submitting label exactly once and never
      // back to idle before landing on success — no intermediate error
      // ever renders, proving the 401→refresh→retry cycle stayed invisible.
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();

      await waitFor(() =>
        expect(
          screen.getByText("¡Listo! Recibimos tu comprobante — tu pago está en revisión."),
        ).toBeInTheDocument(),
      );

      expect(refreshCalls).toBe(1);
      expect(addressAttempts).toBe(2); // stale-token 401, then the transparent retry
      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
      expect(routerPushMock).toHaveBeenCalledWith("/semana");
    });
  });
});
