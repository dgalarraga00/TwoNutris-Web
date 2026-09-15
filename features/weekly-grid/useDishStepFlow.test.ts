// @vitest-environment jsdom
import { describe, expect, it, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useDishStepFlow, type DishStepFlowApi } from "./useDishStepFlow";
import type { RenderHookResult } from "@testing-library/react";
import { draftLineId, type DraftLine } from "./types";
import type { MenuDishCardDto } from "@/lib/api/menu";

const portion = (id: number) => ({
  id,
  size: "medium" as const,
  serving_size: 350,
  serving_unit: "g" as const,
  calories: 400,
  protein_g: 30,
  carbs_g: 30,
  fiber_g: 3,
  sugars_g: 5,
  added_sugars_g: 0,
  fat_g: 15,
  saturated_fat_g: 5,
  trans_fat_g: 0,
  cholesterol_mg: 80,
  sodium_mg: 400,
});

const dish = (id: number, name: string) => ({
  id,
  name,
  description: "",
  kind: "main" as const,
  allergens: [],
  dietary_tags: [],
  allergen_disclaimer: "",
  nutrition_notes: "",
  cover_image_url: null,
});

const MAIN: MenuDishCardDto = { menu_dish_id: 301, dish: dish(1, "Pollo a la griega"), portion: portion(601), is_sold_out: false };
const SALAD_A: MenuDishCardDto = { menu_dish_id: 401, dish: dish(3, "Citricos y Hojas"), portion: portion(602), is_sold_out: false };
const SALAD_B: MenuDishCardDto = { menu_dish_id: 402, dish: dish(4, "Verde y Fresca"), portion: portion(603), is_sold_out: false };
const SALADS = [SALAD_A, SALAD_B];

/** Builds a `DraftLine` for `MAIN` paired with `SALAD_A`/`SALAD_B` — cuts
 * the repeated composite-id line literal every test would otherwise need. */
function makeLine(saladDishId: 3 | 4, quantity: number): DraftLine {
  const salad = saladDishId === 3 ? SALAD_A : SALAD_B;
  return {
    id: draftLineId(301, saladDishId),
    menuDishId: 301,
    dishId: 1,
    dishPortionId: 601,
    dishName: "Pollo a la griega",
    saladDishId,
    saladPortionId: salad.portion!.id,
    saladName: salad.dish.name,
    quantity,
  };
}

function callbacks() {
  return { onAdd: vi.fn(), onSetQuantity: vi.fn(), onRemoveLine: vi.fn() };
}

/** Walks the salad step for every staged unit, assigning `saladIds[i]` in
 * order and advancing after each pick — mirrors exactly what the drawer's
 * footer CTA does per unit. Reads `result.current` fresh on every
 * iteration (never a captured snapshot) since each `act()` re-renders the
 * hook with a brand-new API closure. */
function fillSaladSteps(result: RenderHookResult<DishStepFlowApi, unknown>["result"], saladIds: number[]): void {
  for (const saladDishId of saladIds) {
    act(() => result.current.selectSaladForUnit(saladDishId));
    act(() => result.current.advanceSaladStep());
  }
}

describe("useDishStepFlow", () => {
  it("seeds staging from existing lines when the drawer opens — one unit per quantity, preserving each line's salad", () => {
    const existingLines = [makeLine(3, 2), makeLine(4, 1)];
    const { result } = renderHook(() =>
      useDishStepFlow({ open: true, main: MAIN, salads: SALADS, existingLines, ...callbacks() }),
    );

    expect(result.current.state.quantity).toBe(3);
    expect(result.current.state.unitSalads).toEqual([3, 3, 4]);
    expect(result.current.state.step).toBe(1);
  });

  it("defaults staging to quantity 1, zero-salad units when there are no existing lines (fresh Agregar)", () => {
    const { result } = renderHook(() =>
      useDishStepFlow({ open: true, main: MAIN, salads: SALADS, existingLines: [], ...callbacks() }),
    );

    expect(result.current.state.quantity).toBe(1);
    expect(result.current.state.unitSalads).toEqual([]);
  });

  it("re-seeds from existingLines every time `open` flips true again, discarding stale staging", () => {
    const cb = callbacks();
    const { result, rerender } = renderHook(
      ({ open, lines }: { open: boolean; lines: DraftLine[] }) =>
        useDishStepFlow({ open, main: MAIN, salads: SALADS, existingLines: lines, ...cb }),
      { initialProps: { open: true, lines: [] as DraftLine[] } },
    );

    act(() => result.current.setQuantity(5));
    expect(result.current.state.quantity).toBe(5);

    // Close, then re-open with one real committed line — staging must
    // reflect the fresh existingLines, not the abandoned quantity=5 edit.
    rerender({ open: false, lines: [] });
    rerender({ open: true, lines: [makeLine(3, 1)] });

    expect(result.current.state.quantity).toBe(1);
    expect(result.current.state.unitSalads).toEqual([3]);
  });

  it("confirm() regroups unitSalads by salad into composite-id lines — new groups call onAdd then onSetQuantity when >1", () => {
    const cb = callbacks();
    const { result } = renderHook(() =>
      useDishStepFlow({ open: true, main: MAIN, salads: SALADS, existingLines: [], ...cb }),
    );

    act(() => {
      result.current.setQuantity(3);
      result.current.confirmQuantity();
    });
    fillSaladSteps(result, [3, 3, 4]);

    expect(result.current.state.step).toBe(3);
    expect(result.current.state.unitSalads).toEqual([3, 3, 4]);

    act(() => result.current.confirm());

    expect(cb.onAdd).toHaveBeenCalledWith({
      menuDishId: 301, dishId: 1, dishPortionId: 601, dishName: "Pollo a la griega",
      saladDishId: 3, saladPortionId: 602, saladName: "Citricos y Hojas",
    });
    expect(cb.onSetQuantity).toHaveBeenCalledWith(draftLineId(301, 3), 2);
    expect(cb.onAdd).toHaveBeenCalledWith({
      menuDishId: 301, dishId: 1, dishPortionId: 601, dishName: "Pollo a la griega",
      saladDishId: 4, saladPortionId: 603, saladName: "Verde y Fresca",
    });
    expect(cb.onRemoveLine).not.toHaveBeenCalled();
  });

  it("confirm() reuses onSetQuantity (not onAdd) for a group that already has a matching composite-id line", () => {
    const cb = callbacks();
    const { result } = renderHook(() =>
      useDishStepFlow({ open: true, main: MAIN, salads: SALADS, existingLines: [makeLine(3, 2)], ...cb }),
    );

    // Bump the seeded group from 2 to 3 units of the SAME salad.
    act(() => result.current.incrementGroup(3));
    act(() => result.current.confirm());

    expect(cb.onAdd).not.toHaveBeenCalled();
    expect(cb.onSetQuantity).toHaveBeenCalledWith(draftLineId(301, 3), 3);
    expect(cb.onRemoveLine).not.toHaveBeenCalled();
  });

  it("confirm() removes an existing line whose salad group was fully removed from staging", () => {
    const cb = callbacks();
    const existingLines = [makeLine(3, 1), makeLine(4, 1)];
    const { result } = renderHook(() =>
      useDishStepFlow({ open: true, main: MAIN, salads: SALADS, existingLines, ...cb }),
    );

    act(() => result.current.removeGroup(4));
    act(() => result.current.confirm());

    expect(cb.onRemoveLine).toHaveBeenCalledWith(draftLineId(301, 4));
    expect(cb.onRemoveLine).toHaveBeenCalledTimes(1);
    expect(cb.onAdd).not.toHaveBeenCalled();
    expect(cb.onSetQuantity).not.toHaveBeenCalled();
  });

  it("decrementGroup removes exactly one unit of that salad, never touching a different salad's group", () => {
    const { result } = renderHook(() =>
      useDishStepFlow({ open: true, main: MAIN, salads: SALADS, existingLines: [], ...callbacks() }),
    );

    act(() => {
      result.current.setQuantity(3);
      result.current.confirmQuantity();
    });
    fillSaladSteps(result, [3, 3, 4]);

    act(() => result.current.decrementGroup(3));

    expect(result.current.state.unitSalads.filter((id) => id === 3)).toHaveLength(1);
    expect(result.current.state.unitSalads.filter((id) => id === 4)).toHaveLength(1);
  });

  it("goBack from review returns to the salad step at the last unit; goBack from the salad step returns to quantity", () => {
    const { result } = renderHook(() =>
      useDishStepFlow({ open: true, main: MAIN, salads: SALADS, existingLines: [], ...callbacks() }),
    );

    act(() => {
      result.current.setQuantity(2);
      result.current.confirmQuantity();
    });
    expect(result.current.state.step).toBe(2);

    fillSaladSteps(result, [3, 3]);
    expect(result.current.state.step).toBe(3);

    act(() => result.current.goBack());
    expect(result.current.state.step).toBe(2);
    expect(result.current.unitIndex).toBe(1);

    act(() => result.current.goBack());
    expect(result.current.state.step).toBe(1);
  });
});
