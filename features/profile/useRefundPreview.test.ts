// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook, cleanup } from "@testing-library/react";
import { useRefundPreview } from "./useRefundPreview";
import type { OrderDto } from "@/lib/api/orders";

function orderFixture(overrides: Partial<OrderDto> = {}): OrderDto {
  return {
    id: 501,
    status: "placed",
    delivery_date: "2026-09-15",
    cutoff_at: "2026-09-14T18:00:00Z",
    created_at: "2026-09-10T00:00:00Z",
    items: [
      { id: 1, dish: 10, dish_portion: 1, menu_dish: 301, quantity: 2, snapshot_name: "Bowl" },
      { id: 2, dish: 11, dish_portion: 1, menu_dish: null, quantity: 2, snapshot_name: "Ensalada" },
    ],
    ...overrides,
  } as OrderDto;
}

describe("useRefundPreview", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("returns kind:refund with MEAL-only credit accounting before cutoff", () => {
    vi.setSystemTime(new Date("2026-09-14T17:00:00Z"));
    const order = orderFixture();

    const { result } = renderHook(() => useRefundPreview(order));

    // 2 MEAL-credit units (menu_dish=301) + 2 salad-companion units
    // (menu_dish=null) that never consumed a credit — must total 2, not 4.
    expect(result.current).toEqual({ kind: "refund", mealCredits: 2 });
  });

  it("returns kind:none reason:past_cutoff once now crosses cutoff_at", () => {
    vi.setSystemTime(new Date("2026-09-14T18:00:01Z"));
    const order = orderFixture();

    const { result } = renderHook(() => useRefundPreview(order));

    expect(result.current).toEqual({ kind: "none", reason: "past_cutoff" });
  });
});
