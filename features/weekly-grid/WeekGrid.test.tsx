// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeekGrid } from "./WeekGrid";

// jsdom has no Pointer Events capture API; Vaul's drag-to-dismiss handling
// calls `setPointerCapture`/`releasePointerCapture` on every press inside
// the drawer, so DishStepDrawer interactions throw without this stub (same
// per-file-polyfill convention as AppShell.test.tsx's `matchMedia` mock).
if (typeof Element !== "undefined" && !Element.prototype.setPointerCapture) {
  Element.prototype.setPointerCapture = () => {};
  Element.prototype.releasePointerCapture = () => {};
  Element.prototype.hasPointerCapture = () => false;
}

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

const balanceResponse = () =>
  jsonResponse(200, {
    meal: { available: 5, batches: [] },
    snack: { available: 2, batches: [] },
  });

const addressesResponse = () =>
  jsonResponse(200, [
    {
      id: 1,
      zone: 1,
      label: "Casa",
      street: "Calle 1",
      reference: "",
      is_default: true,
      created_at: "2026-09-01T00:00:00Z",
    },
  ]);

const emptyOrdersResponse = () => jsonResponse(200, []);

function weekFixture({ mainSoldOut = false }: { mainSoldOut?: boolean } = {}) {
  return {
    start_date: "2026-09-14",
    end_date: "2026-09-18",
    published_at: "2026-09-10T12:00:00Z",
    days: [
      {
        date: "2026-09-15",
        is_closed: false,
        cutoff_at: "2099-01-01T00:00:00Z",
        is_past_cutoff: false,
        total_capacity: 40,
        mains: [
          {
            menu_dish_id: 301,
            dish: {
              id: 1,
              name: "Pollo a la griega",
              description: "",
              kind: "main",
              allergens: [],
              dietary_tags: [],
              allergen_disclaimer: "",
              nutrition_notes: "",
              cover_image_url: null,
            },
            portion: mainSoldOut
              ? null
              : {
                  id: 601,
                  size: "medium",
                  serving_size: "350.0",
                  serving_unit: "g",
                  calories: "432.0",
                  protein_g: "28.0",
                  carbs_g: "35.0",
                  fiber_g: "3.0",
                  sugars_g: "5.0",
                  added_sugars_g: "0.0",
                  fat_g: "20.0",
                  saturated_fat_g: "6.5",
                  trans_fat_g: "0.0",
                  cholesterol_mg: "85.0",
                  sodium_mg: "410.0",
                },
            is_sold_out: mainSoldOut,
          },
        ],
        salads: [
          {
            menu_dish_id: 401,
            dish: {
              id: 3,
              name: "Citricos y Hojas",
              description: "",
              kind: "salad",
              allergens: [],
              dietary_tags: [],
              allergen_disclaimer: "",
              nutrition_notes: "",
              cover_image_url: null,
            },
            portion: {
              id: 602,
              size: "medium",
              serving_size: "150.0",
              serving_unit: "g",
              calories: "45.0",
              protein_g: "1.0",
              carbs_g: "9.0",
              fiber_g: "2.0",
              sugars_g: "6.0",
              added_sugars_g: "0.0",
              fat_g: "0.0",
              saturated_fat_g: "0.0",
              trans_fat_g: "0.0",
              cholesterol_mg: "0.0",
              sodium_mg: "20.0",
            },
            is_sold_out: false,
          },
          {
            menu_dish_id: 402,
            dish: {
              id: 4,
              name: "Verde y Fresca",
              description: "",
              kind: "salad",
              allergens: [],
              dietary_tags: [],
              allergen_disclaimer: "",
              nutrition_notes: "",
              cover_image_url: null,
            },
            portion: {
              id: 603,
              size: "medium",
              serving_size: "150.0",
              serving_unit: "g",
              calories: "40.0",
              protein_g: "1.0",
              carbs_g: "8.0",
              fiber_g: "2.0",
              sugars_g: "5.0",
              added_sugars_g: "0.0",
              fat_g: "0.0",
              saturated_fat_g: "0.0",
              trans_fat_g: "0.0",
              cholesterol_mg: "0.0",
              sodium_mg: "18.0",
            },
            is_sold_out: false,
          },
        ],
      },
    ],
  };
}

function renderWeekGrid() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <WeekGrid />
    </QueryClientProvider>,
  );
}

describe("WeekGrid", () => {
  let fetchMock: ReturnType<typeof vi.fn>;
  let menuCallCount: number;

  beforeEach(() => {
    menuCallCount = 0;
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("shows both wallets' remaining credits prominently, never pooled", async () => {
    fetchMock.mockImplementation(async (input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/menu/current")) return jsonResponse(200, weekFixture());
      if (url.includes("/api/me/balance")) return balanceResponse();
      if (url.includes("/api/me/addresses")) return addressesResponse();
      if (url.includes("/api/me/orders")) return emptyOrdersResponse();
      throw new Error(`Unexpected fetch: ${url}`);
    });

    renderWeekGrid();

    expect(await screen.findByText("Créditos de plato: 5")).toBeInTheDocument();
    expect(screen.getByText("Créditos de snack: 2")).toBeInTheDocument();
  });

  it("never lets a meal line exist without a resolved salad — the step drawer gates the add behind quantity -> salad -> review", async () => {
    fetchMock.mockImplementation(async (input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/menu/current")) return jsonResponse(200, weekFixture());
      if (url.includes("/api/me/balance")) return balanceResponse();
      if (url.includes("/api/me/addresses")) return addressesResponse();
      if (url.includes("/api/me/orders")) return emptyOrdersResponse();
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const user = userEvent.setup();
    renderWeekGrid();

    await user.click(
      await screen.findByRole("button", { name: "Agregar Pollo a la griega al pedido" }),
    );

    // Step 1 of 3: quantity only — no salad picker yet, no staged line has
    // been committed to the day's draft (design D2: staged locally, only
    // regrouped into `useDayDraft` at step 3).
    expect(screen.getByText(/Paso 1 de 3/)).toBeInTheDocument();
    expect(
      screen.queryByRole("group", { name: "Elegí tu ensalada de acompañamiento" }),
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Confirmar pedido/ })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Siguiente" }));

    // Step 2 of 3: two salads exist in the fixture — the picker gates it,
    // and still no committed line, no submit button.
    expect(screen.getByText("Unidad 1 de 1")).toBeInTheDocument();
    const picker = screen.getByRole("group", { name: "Elegí tu ensalada de acompañamiento" });
    expect(screen.queryByRole("button", { name: /Confirmar pedido/ })).not.toBeInTheDocument();

    await user.click(within(picker).getByRole("button", { name: "Citricos y Hojas" }));
    await user.click(screen.getByRole("button", { name: "Revisar" }));

    // Step 3 of 3: review shows the resolved line; only "Confirmar" regroups
    // it into the day's draft and closes the drawer.
    expect(
      screen.getByRole("group", { name: "Cantidad de Pollo a la griega" }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Confirmar (1)" }));

    expect(await screen.findByRole("button", { name: "Confirmar pedido (1)" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Editar Pollo a la griega" })).toBeInTheDocument();
  });

  it("supports a quantity stepper and per-unit salad choice for the same dish, regrouping on every confirm", async () => {
    fetchMock.mockImplementation(async (input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/menu/current")) return jsonResponse(200, weekFixture());
      if (url.includes("/api/me/balance")) return balanceResponse();
      if (url.includes("/api/me/addresses")) return addressesResponse();
      if (url.includes("/api/me/orders")) return emptyOrdersResponse();
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const user = userEvent.setup();
    renderWeekGrid();

    // Round 1: quantity 2, both units the SAME salad -> one line, qty 2.
    await user.click(
      await screen.findByRole("button", { name: "Agregar Pollo a la griega al pedido" }),
    );
    await user.click(screen.getByRole("button", { name: "2" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Citricos y Hojas" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Citricos y Hojas" }));
    await user.click(screen.getByRole("button", { name: "Revisar" }));
    await user.click(screen.getByRole("button", { name: "Confirmar (2)" }));

    expect(await screen.findByRole("button", { name: "Confirmar pedido (2)" })).toBeInTheDocument();

    // Round 2: re-opening seeds staging from the existing line (spec:
    // step-back editing is free) — bump to 3 and give the new unit a
    // DIFFERENT salad -> two composite-id lines survive, 2 + 1.
    await user.click(screen.getByRole("button", { name: "Editar Pollo a la griega" }));
    await user.click(screen.getByRole("button", { name: "Agregar una unidad" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    // Units 1-2 were already seeded as Citricos; step through them.
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Verde y Fresca" }));
    await user.click(screen.getByRole("button", { name: "Revisar" }));

    expect(screen.getByText("con Citricos y Hojas")).toBeInTheDocument();
    expect(screen.getByText("con Verde y Fresca")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Confirmar (3)" }));

    expect(await screen.findByRole("button", { name: "Confirmar pedido (3)" })).toBeInTheDocument();

    // Round 3: decrementing ONLY the Citricos group's stepper in review
    // (2 -> 1) must not touch the separate Verde line.
    await user.click(screen.getByRole("button", { name: "Editar Pollo a la griega" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Revisar" }));

    const citricosRow = screen.getByText("con Citricos y Hojas").closest("li")!;
    await user.click(
      within(citricosRow).getByRole("button", { name: "Quitar una unidad de Pollo a la griega" }),
    );
    expect(screen.getByText("con Verde y Fresca")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Confirmar (2)" }));

    expect(await screen.findByRole("button", { name: "Confirmar pedido (2)" })).toBeInTheDocument();
  });

  it("submits the salad-paired line, then handles a capacity-race by refetching the week and surfacing the real backend message", async () => {
    fetchMock.mockImplementation(async (input: RequestInfo | URL) => {
      const url = input.toString();
      if (url.includes("/api/menu/current")) {
        menuCallCount += 1;
        return jsonResponse(200, weekFixture({ mainSoldOut: menuCallCount > 1 }));
      }
      if (url.includes("/api/me/balance")) return balanceResponse();
      if (url.includes("/api/me/addresses")) return addressesResponse();
      if (url.includes("/api/me/orders")) return emptyOrdersResponse();
      if (url.includes("/api/orders")) {
        return jsonResponse(409, {
          detail: "Se agotó el cupo de «Pollo a la griega» para este día.",
          code: "quota_exhausted",
        });
      }
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const user = userEvent.setup();
    renderWeekGrid();

    await user.click(
      await screen.findByRole("button", { name: "Agregar Pollo a la griega al pedido" }),
    );
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Citricos y Hojas" }));
    await user.click(screen.getByRole("button", { name: "Revisar" }));
    await user.click(screen.getByRole("button", { name: "Confirmar (1)" }));
    await user.click(await screen.findByRole("button", { name: "Confirmar pedido (1)" }));

    const orderCall = await waitFor(() =>
      fetchMock.mock.calls.find(([input]) => input.toString().includes("/api/orders")),
    );
    const orderBody = JSON.parse((orderCall?.[1] as RequestInit).body as string);
    expect(orderBody).toMatchObject({
      address: 1,
      delivery_date: "2026-09-15",
      lines: [
        {
          dish: 1,
          dish_portion: 601,
          quantity: 1,
          credit_type: "meal",
          side_salad_dish: 3,
          side_salad_portion: 602,
        },
      ],
    });

    expect(
      await screen.findByText("Se agotó el cupo de «Pollo a la griega» para este día."),
    ).toBeInTheDocument();

    // Inline refetch happened (task 6.2) — the menu endpoint was called
    // again after the 409, not just once at page load.
    await waitFor(() => expect(menuCallCount).toBeGreaterThanOrEqual(2));

    // The re-synced UI now reflects the real, current sold-out status
    // instead of trusting the stale page-load hint forever.
    expect(
      await screen.findByRole("button", { name: "Agregar Pollo a la griega al pedido" }),
    ).toBeDisabled();
  });

  it("submits one OrderLineRequest-shaped object per DraftLine, quantity included, when 2 salad-split lines exist", async () => {
    fetchMock.mockImplementation(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = input.toString();
      if (url.includes("/api/menu/current")) return jsonResponse(200, weekFixture());
      if (url.includes("/api/me/balance")) return balanceResponse();
      if (url.includes("/api/me/addresses")) return addressesResponse();
      if (url.includes("/api/me/orders")) return emptyOrdersResponse();
      if (url.includes("/api/orders") && init?.method === "POST") {
        return jsonResponse(201, { id: 900 });
      }
      throw new Error(`Unexpected fetch: ${url}`);
    });

    const user = userEvent.setup();
    renderWeekGrid();

    await user.click(
      await screen.findByRole("button", { name: "Agregar Pollo a la griega al pedido" }),
    );
    await user.click(screen.getByRole("button", { name: "3" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Citricos y Hojas" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Citricos y Hojas" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Verde y Fresca" }));
    await user.click(screen.getByRole("button", { name: "Revisar" }));
    await user.click(screen.getByRole("button", { name: "Confirmar (3)" }));

    await user.click(await screen.findByRole("button", { name: "Confirmar pedido (3)" }));

    const orderCall = await waitFor(() =>
      fetchMock.mock.calls.find(
        ([input, init]) =>
          input.toString().includes("/api/orders") && (init as RequestInit)?.method === "POST",
      ),
    );
    const orderBody = JSON.parse((orderCall?.[1] as RequestInit).body as string);
    expect(orderBody.lines).toEqual([
      {
        dish: 1,
        dish_portion: 601,
        quantity: 2,
        credit_type: "meal",
        side_salad_dish: 3,
        side_salad_portion: 602,
      },
      {
        dish: 1,
        dish_portion: 601,
        quantity: 1,
        credit_type: "meal",
        side_salad_dish: 4,
        side_salad_portion: 603,
      },
    ]);
  });
});
