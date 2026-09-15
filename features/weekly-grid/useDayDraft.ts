"use client";

import { useCallback, useMemo, useState } from "react";
import { draftLineId, type DraftLine, type NewDraftLine } from "./types";

export interface DayDraftApi {
  linesFor: (date: string) => DraftLine[];
  addLine: (date: string, line: NewDraftLine) => void;
  removeLine: (date: string, lineId: string) => void;
  setQuantity: (date: string, lineId: string, quantity: number) => void;
  setLinesFor: (date: string, lines: DraftLine[]) => void;
  clearDay: (date: string) => void;
  /**
   * Live-feedback fix (feedback-round-2): the sum of every draft line's
   * `quantity` across EVERY day currently held in state, before any day is
   * submitted. Every `DraftLine` today represents a MEAL credit (see
   * `types.ts` — a salad is a paired side, never its own credit-consuming
   * line), so this is directly comparable to the wallet's `meal.available`.
   * `WeekGrid` feeds this to `BalanceSummary` so the customer sees a running
   * total instead of only discovering an over-budget day one submission at
   * a time (`InsufficientCredits`/422, still the real server-side
   * enforcement point — this is a UI signal, not a new guard).
   */
  totalQuantity: number;
}

/**
 * Per-day, in-memory-only order-draft state (spec: weekly-grid) — what the
 * customer is building for ONE day before submitting. Deliberately NOT
 * persisted anywhere and NOT the same concern as `stores/
 * purchaseDraftStore.ts` (that one is the pre-account funnel bag, scoped to
 * `sessionStorage`; this one resets on every page load, by design).
 *
 * Implemented as a single hook instance, keyed by `MenuDay.date`, rather
 * than one `useState` per day — a variable-length loop of hook calls (one
 * per fetched day) would violate the Rules of Hooks. `WeekGrid` owns one
 * instance and passes each day's slice down to its own `DayColumn`.
 *
 * Design-refinement pass: `addLine` now dedupes by the composite `id`
 * (`menuDishId`+`saladDishId`), NOT `menuDishId` alone — a second call with
 * the SAME salad increments that line's `quantity`; a different salad for
 * the same dish creates a new, separate line (per-unit salad choice,
 * user-confirmed). `setQuantity` is the stepper's `-`/direct-edit mutator;
 * dropping to 0 removes the line entirely, same end state as `removeLine`.
 */
export function useDayDraft(): DayDraftApi {
  const [byDate, setByDate] = useState<Record<string, DraftLine[]>>({});

  const linesFor = useCallback((date: string) => byDate[date] ?? [], [byDate]);

  const addLine = useCallback((date: string, line: NewDraftLine) => {
    const id = draftLineId(line.menuDishId, line.saladDishId);
    setByDate((prev) => {
      const existing = prev[date] ?? [];
      const matchIndex = existing.findIndex((entry) => entry.id === id);
      if (matchIndex === -1) {
        return { ...prev, [date]: [...existing, { ...line, id, quantity: 1 }] };
      }
      const updated = [...existing];
      const current = updated[matchIndex]!;
      updated[matchIndex] = { ...current, quantity: current.quantity + 1 };
      return { ...prev, [date]: updated };
    });
  }, []);

  const removeLine = useCallback((date: string, lineId: string) => {
    setByDate((prev) => ({
      ...prev,
      [date]: (prev[date] ?? []).filter((entry) => entry.id !== lineId),
    }));
  }, []);

  const setQuantity = useCallback((date: string, lineId: string, quantity: number) => {
    setByDate((prev) => {
      const existing = prev[date] ?? [];
      if (quantity <= 0) {
        return { ...prev, [date]: existing.filter((entry) => entry.id !== lineId) };
      }
      return {
        ...prev,
        [date]: existing.map((entry) => (entry.id === lineId ? { ...entry, quantity } : entry)),
      };
    });
  }, []);

  const setLinesFor = useCallback((date: string, lines: DraftLine[]) => {
    setByDate((prev) => ({ ...prev, [date]: lines }));
  }, []);

  const clearDay = useCallback((date: string) => {
    setByDate((prev) => ({ ...prev, [date]: [] }));
  }, []);

  const totalQuantity = useMemo(
    () => Object.values(byDate).reduce((sum, lines) => sum + lines.reduce((s, l) => s + l.quantity, 0), 0),
    [byDate],
  );

  return { linesFor, addLine, removeLine, setQuantity, setLinesFor, clearDay, totalQuantity };
}
