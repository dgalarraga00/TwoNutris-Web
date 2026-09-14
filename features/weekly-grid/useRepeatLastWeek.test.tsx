// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook, waitFor, cleanup } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { useRepeatLastWeek } from "./useRepeatLastWeek";
import type { MenuWeekDto } from "@/lib/api/menu";

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

function wrapper({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

const currentWeek: MenuWeekDto = {
  start_date: "2026-09-14",
  end_date: "2026-09-18",
  published_at: "2026-09-10T12:00:00Z",
  days: [
    {
      date: "2026-09-15",
      is_closed: false,
      cutoff_at: "2026-09-14T18:00:00Z",
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
          portion: {
            id: 601,
            size: "medium",
            serving_size: 350,
            serving_unit: "g",
            calories: 432,
            protein_g: 28,
            carbs_g: 35,
            fiber_g: 3,
            sugars_g: 5,
            added_sugars_g: 0,
            fat_g: 20,
            saturated_fat_g: 6.5,
            trans_fat_g: 0,
            cholesterol_mg: 85,
            sodium_mg: 410,
          },
          is_sold_out: false,
        },
        {
          // Real, confirmed gap this test exercises: same dish id (2) as
          // last week's order, but sold out THIS week.
          menu_dish_id: 302,
          dish: {
            id: 2,
            name: "Guiso veggie de lentejas con arroz",
            description: "",
            kind: "main",
            allergens: [],
            dietary_tags: [],
            allergen_disclaimer: "",
            nutrition_notes: "",
            cover_image_url: null,
          },
          portion: null,
          is_sold_out: true,
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
            serving_size: 150,
            serving_unit: "g",
            calories: 45,
            protein_g: 1,
            carbs_g: 9,
            fiber_g: 2,
            sugars_g: 6,
            added_sugars_g: 0,
            fat_g: 0,
            saturated_fat_g: 0,
            trans_fat_g: 0,
            cholesterol_mg: 0,
            sodium_mg: 20,
          },
          is_sold_out: false,
        },
      ],
    },
  ],
};

const lastWeekOrdersResponse = [
  {
    id: 1,
    status: "confirmed",
    delivery_date: "2026-09-08",
    items: [
      { id: 10, dish: 1, dish_portion: 501, menu_dish: 101, quantity: 1, snapshot_name: "Pollo a la griega" },
      // Auto-created salad companion — `menu_dish: null`, must be skipped.
      { id: 11, dish: 3, dish_portion: 502, menu_dish: null, quantity: 1, snapshot_name: "Citricos y Hojas" },
    ],
    created_at: "2026-09-08T00:00:00Z",
  },
  {
    id: 2,
    status: "confirmed",
    delivery_date: "2026-09-09",
    items: [
      { id: 12, dish: 2, dish_portion: 503, menu_dish: 102, quantity: 1, snapshot_name: "Guiso veggie de lentejas con arroz" },
    ],
    created_at: "2026-09-09T00:00:00Z",
  },
  {
    id: 3,
    status: "confirmed",
    delivery_date: "2026-09-10",
    items: [
      { id: 13, dish: 99, dish_portion: 999, menu_dish: 103, quantity: 1, snapshot_name: "Plato descontinuado" },
    ],
    created_at: "2026-09-10T00:00:00Z",
  },
];

describe("useRepeatLastWeek", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn().mockImplementation(async (input: RequestInfo | URL) => {
      if (input.toString().includes("/api/me/orders")) {
        return jsonResponse(200, lastWeekOrdersResponse);
      }
      throw new Error(`Unexpected fetch: ${input.toString()}`);
    });
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("flags a now-sold-out dish and a no-longer-offered dish for reselection, carrying the still-available one over", async () => {
    const { result } = renderHook(() => useRepeatLastWeek(currentWeek), { wrapper });

    await waitFor(() => expect(result.current.isPending).toBe(false));
    await waitFor(() => expect(result.current.proposals.length).toBeGreaterThan(0));

    // The salad companion item (menu_dish: null) must never surface as its
    // own proposal — only the 3 MEAL main lines do.
    expect(result.current.proposals).toHaveLength(3);

    const available = result.current.proposals.find((p) => p.dishName === "Pollo a la griega");
    expect(available?.status).toBe("available");
    expect(available?.line).toMatchObject({
      dishId: 1,
      dishPortionId: 601,
      saladDishId: 3,
      saladPortionId: 602,
    });

    const soldOut = result.current.proposals.find(
      (p) => p.dishName === "Guiso veggie de lentejas con arroz",
    );
    expect(soldOut?.status).toBe("sold_out");
    expect(soldOut?.line).toBeNull();

    const notOffered = result.current.proposals.find((p) => p.dishName === "Plato descontinuado");
    expect(notOffered?.status).toBe("not_offered");
    expect(notOffered?.line).toBeNull();
  });

  it("returns no proposals when there is no current week yet", async () => {
    const { result } = renderHook(() => useRepeatLastWeek(null), { wrapper });
    await waitFor(() => expect(result.current.isPending).toBe(false));
    expect(result.current.proposals).toEqual([]);
  });
});
