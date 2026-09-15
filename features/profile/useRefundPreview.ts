"use client";

import { useCutoffCountdown } from "@/features/weekly-grid/useCutoffCountdown";
import type { OrderDto } from "@/lib/api/orders";

/**
 * Design D6 (orchestrator-approved supersession, post-design resolution
 * #1): refund preview is BACKEND-sourced via `OrderDto.cutoff_at`
 * (`OrderSerializer.cutoff_at`), not a client-side 3-branch guess. The
 * `"unknown"` branch from the original design is gone — `cutoff_at` is
 * always resolvable once an order exists, so this type is exhaustively
 * two-way.
 */
export type RefundPreview =
  | { kind: "refund"; mealCredits: number }
  | { kind: "none"; reason: "past_cutoff" };

/**
 * Reuses `useCutoffCountdown` verbatim (same hook `features/weekly-grid/
 * DayColumn.tsx` already ticks against `MenuDay.cutoff_at`) for the live
 * "vs. now" comparison against `Order.cutoff_at` — same technique, no
 * reinvented timer/SSR-safety logic.
 *
 * MEAL-credit accounting mirrors `orders/services.py::cancel_order()`
 * EXACTLY (read directly this session, not guessed): credits refunded =
 * `sum(quantity)` over items with a non-null `menu_dish`. Salad-companion
 * items (`menu_dish: null`) never consumed a credit and are excluded here
 * too — a preview that counted them would overstate the real refund.
 */
export function useRefundPreview(order: OrderDto): RefundPreview {
  const { isPastCutoff } = useCutoffCountdown(order.cutoff_at);

  if (isPastCutoff) {
    return { kind: "none", reason: "past_cutoff" };
  }

  const mealCredits = order.items.reduce(
    (total, item) => total + (item.menu_dish !== null ? item.quantity : 0),
    0,
  );

  return { kind: "refund", mealCredits };
}
