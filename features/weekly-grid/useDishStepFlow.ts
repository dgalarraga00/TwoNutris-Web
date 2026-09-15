"use client";

import { useEffect, useState } from "react";
import type { MenuDishCardDto } from "@/lib/api/menu";
import { draftLineId, type DraftLine, type NewDraftLine } from "./types";

/** Interfaces §DishStepFlowState (design). `unitSalads[i]` is the salad
 * chosen for unit `i`; its length is the working total quantity once step 1
 * is confirmed — `null` entries are units still waiting for a salad. */
export interface DishStepFlowState {
  step: 1 | 2 | 3;
  quantity: number;
  unitSalads: (number | null)[];
}

interface UseDishStepFlowParams {
  /** Reseeds staging from `existingLines` every time this flips true — a
   * fresh open, or re-opening an already in-progress dish, never starts
   * from stale state left over from a previous session with the drawer. */
  open: boolean;
  main: MenuDishCardDto;
  salads: MenuDishCardDto[];
  existingLines: DraftLine[];
  onAdd: (line: NewDraftLine) => void;
  onSetQuantity: (lineId: string, quantity: number) => void;
  onRemoveLine: (lineId: string) => void;
}

export interface DishStepFlowApi {
  state: DishStepFlowState;
  unitIndex: number;
  isCurrentUnitAssigned: boolean;
  isLastUnit: boolean;
  setQuantity: (quantity: number) => void;
  confirmQuantity: () => void;
  selectSaladForUnit: (saladDishId: number) => void;
  advanceSaladStep: () => void;
  incrementGroup: (saladDishId: number) => void;
  decrementGroup: (saladDishId: number) => void;
  removeGroup: (saladDishId: number) => void;
  goBack: () => void;
  confirm: () => void;
}

/** Flattens this main's existing per-day draft lines back into one staging
 * entry per unit (spec: re-opening seeds staging back from existing lines,
 * so step-back editing is free — design D2). */
function seedFromExistingLines(existingLines: DraftLine[]): (number | null)[] {
  const units: (number | null)[] = [];
  for (const line of existingLines) {
    for (let i = 0; i < line.quantity; i += 1) {
      units.push(line.saladDishId);
    }
  }
  return units;
}

function initialState(existingLines: DraftLine[]): DishStepFlowState {
  const unitSalads = seedFromExistingLines(existingLines);
  return { step: 1, quantity: unitSalads.length || 1, unitSalads };
}

/**
 * Owns the drawer's LOCAL staging state only. Confirm regroups
 * `unitSalads` by salad into `useDayDraft`'s existing composite-`id`
 * lines, applied through the three callbacks the day already exposes
 * (`onAdd`/`onSetQuantity`/`onRemoveLine`) — zero changes to
 * `useDayDraft.ts` or `types.ts` (design D2). `draftLineId` is imported
 * read-only from `types.ts` purely to compute a group's id without
 * depending on `onAdd`'s (void) return value.
 */
export function useDishStepFlow({
  open,
  main,
  salads,
  existingLines,
  onAdd,
  onSetQuantity,
  onRemoveLine,
}: UseDishStepFlowParams): DishStepFlowApi {
  const [state, setState] = useState<DishStepFlowState>(() => initialState(existingLines));
  const [unitIndex, setUnitIndex] = useState(0);

  useEffect(() => {
    if (!open) return;
    setState(initialState(existingLines));
    setUnitIndex(0);
    // Reseeding must key off `open` flipping true, not every render — the
    // caller's `existingLines` array is a fresh identity on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const setQuantity = (quantity: number): void => {
    setState((prev) => ({ ...prev, quantity: Math.max(1, quantity) }));
  };

  const confirmQuantity = (): void => {
    setState((prev) => {
      const next = prev.unitSalads.slice(0, prev.quantity);
      while (next.length < prev.quantity) next.push(null);
      return { ...prev, unitSalads: next, step: 2 };
    });
    setUnitIndex(0);
  };

  const selectSaladForUnit = (saladDishId: number): void => {
    setState((prev) => {
      const next = [...prev.unitSalads];
      next[unitIndex] = saladDishId;
      return { ...prev, unitSalads: next };
    });
  };

  const isLastUnit = unitIndex >= state.unitSalads.length - 1;

  const advanceSaladStep = (): void => {
    if (isLastUnit) {
      setState((prev) => ({ ...prev, step: 3 }));
      return;
    }
    setUnitIndex((prev) => prev + 1);
  };

  const incrementGroup = (saladDishId: number): void => {
    setState((prev) => ({ ...prev, unitSalads: [...prev.unitSalads, saladDishId] }));
  };

  const decrementGroup = (saladDishId: number): void => {
    setState((prev) => {
      const index = prev.unitSalads.lastIndexOf(saladDishId);
      if (index === -1) return prev;
      const next = [...prev.unitSalads];
      next.splice(index, 1);
      return { ...prev, unitSalads: next };
    });
  };

  const removeGroup = (saladDishId: number): void => {
    setState((prev) => ({
      ...prev,
      unitSalads: prev.unitSalads.filter((id) => id !== saladDishId),
    }));
  };

  const goBack = (): void => {
    setState((prev) => {
      if (prev.step === 3) return { ...prev, step: 2 };
      if (prev.step === 2) return { ...prev, step: 1 };
      return prev;
    });
    if (state.step === 3) {
      setUnitIndex(Math.max(0, state.unitSalads.length - 1));
    }
  };

  const confirm = (): void => {
    const counts = new Map<number, number>();
    for (const saladDishId of state.unitSalads) {
      if (saladDishId === null) continue;
      counts.set(saladDishId, (counts.get(saladDishId) ?? 0) + 1);
    }

    const existingBySaladId = new Map(existingLines.map((line) => [line.saladDishId, line]));

    for (const [saladDishId, quantity] of counts) {
      const existing = existingBySaladId.get(saladDishId);
      if (existing) {
        if (existing.quantity !== quantity) onSetQuantity(existing.id, quantity);
        continue;
      }
      const salad = salads.find((s) => s.dish.id === saladDishId);
      if (!main.portion || !salad?.portion) continue;
      onAdd({
        menuDishId: main.menu_dish_id,
        dishId: main.dish.id,
        dishPortionId: main.portion.id,
        dishName: main.dish.name,
        saladDishId,
        saladPortionId: salad.portion.id,
        saladName: salad.dish.name,
      });
      if (quantity > 1) {
        onSetQuantity(draftLineId(main.menu_dish_id, saladDishId), quantity);
      }
    }

    for (const line of existingLines) {
      if (!counts.has(line.saladDishId)) onRemoveLine(line.id);
    }
  };

  return {
    state,
    unitIndex,
    isCurrentUnitAssigned: state.unitSalads[unitIndex] != null,
    isLastUnit,
    setQuantity,
    confirmQuantity,
    selectSaladForUnit,
    advanceSaladStep,
    incrementGroup,
    decrementGroup,
    removeGroup,
    goBack,
    confirm,
  };
}
