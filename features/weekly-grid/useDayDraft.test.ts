// @vitest-environment jsdom
import { afterEach, describe, expect, it } from "vitest";
import { act, cleanup, renderHook } from "@testing-library/react";
import { useDayDraft } from "./useDayDraft";
import type { NewDraftLine } from "./types";

const line = (overrides: Partial<NewDraftLine> = {}): NewDraftLine => ({
  menuDishId: 1,
  dishId: 1,
  dishPortionId: 601,
  dishName: "Pollo a la griega",
  saladDishId: 3,
  saladPortionId: 602,
  saladName: "Citricos y Hojas",
  ...overrides,
});

/**
 * Live-feedback fix (feedback-round-2) regression coverage for
 * `totalQuantity` — the aggregate `BalanceSummary`'s running-total display
 * depends on (sum of every draft line's `quantity`, across EVERY day, not
 * just one).
 */
describe("useDayDraft — totalQuantity aggregate", () => {
  afterEach(() => {
    cleanup();
  });

  it("starts at 0 with no draft lines", () => {
    const { result } = renderHook(() => useDayDraft());
    expect(result.current.totalQuantity).toBe(0);
  });

  it("sums quantities across multiple lines on the SAME day", () => {
    const { result } = renderHook(() => useDayDraft());

    act(() => result.current.addLine("2026-09-15", line()));
    act(() => result.current.addLine("2026-09-15", line())); // same id -> quantity 2
    act(() => result.current.addLine("2026-09-15", line({ saladDishId: 4, saladPortionId: 603 })));

    expect(result.current.totalQuantity).toBe(3);
  });

  it("sums quantities across MULTIPLE days, not just the most recently touched one", () => {
    const { result } = renderHook(() => useDayDraft());

    act(() => result.current.addLine("2026-09-15", line()));
    act(() => result.current.addLine("2026-09-16", line({ menuDishId: 2, dishId: 2 })));
    act(() => result.current.setQuantity("2026-09-16", "2-3", 4));

    expect(result.current.totalQuantity).toBe(5);
  });

  it("drops back down when a line is removed or its quantity zeroed", () => {
    const { result } = renderHook(() => useDayDraft());

    act(() => result.current.addLine("2026-09-15", line()));
    act(() => result.current.setQuantity("2026-09-15", "1-3", 5));
    expect(result.current.totalQuantity).toBe(5);

    act(() => result.current.setQuantity("2026-09-15", "1-3", 0));
    expect(result.current.totalQuantity).toBe(0);
  });

  it("recalculates after clearDay, excluding the cleared day only", () => {
    const { result } = renderHook(() => useDayDraft());

    act(() => result.current.addLine("2026-09-15", line()));
    act(() => result.current.addLine("2026-09-16", line({ menuDishId: 2, dishId: 2 })));
    expect(result.current.totalQuantity).toBe(2);

    act(() => result.current.clearDay("2026-09-15"));
    expect(result.current.totalQuantity).toBe(1);
  });
});
