"use client";

import { useMemo } from "react";
import { useMyOrders } from "@/lib/api/orders";
import type { MenuDishCardDto, MenuWeekDto } from "@/lib/api/menu";
import { draftLineId, type DraftLine } from "./types";

export type RepeatProposalStatus = "available" | "sold_out" | "not_offered";

export interface RepeatProposal {
  /** The CURRENT week's date this proposal targets (same weekday match as
   * the original order, resolved by matching `dish.id`, not the original
   * `menu_dish` id — that id is week-specific and will differ). */
  date: string;
  dishName: string;
  status: RepeatProposalStatus;
  /** Present only when `status === "available"` — the ready-to-apply line,
   * already re-paired with a currently-available salad for that day. */
  line: DraftLine | null;
}

function addDays(isoDate: string, days: number): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

/**
 * Task 6.3: re-proposes last week's MEAL selections onto the current week,
 * per weekday. "Last week" = the 7-day window immediately before the
 * current week's own `start_date` (this repo's own Mon-Sat week convention,
 * see `app/menu/page.tsx::getWeekRange()`).
 *
 * A previously-ordered dish that no longer appears in the current week's
 * menu at all, OR that is now `is_sold_out`, is flagged for reselection
 * (`sold_out`/`not_offered`) rather than silently dropped or silently
 * re-added (spec: weekly-grid "Repeat with a now-sold-out dish"). Only
 * items with `menu_dish !== null` are considered — both the auto-created
 * salad companion AND any (currently out-of-scope) snack line share
 * `menu_dish: null`, so this naturally reconstructs MEAL main selections
 * only, which is exactly what this grid manages.
 */
export function useRepeatLastWeek(currentWeek: MenuWeekDto | null) {
  const ordersQuery = useMyOrders();

  const proposals = useMemo<RepeatProposal[]>(() => {
    if (!currentWeek || !ordersQuery.data) return [];

    const lastWeekStart = addDays(currentWeek.start_date, -7);
    const lastWeekEnd = addDays(currentWeek.start_date, -1);
    const lastWeekOrders = ordersQuery.data.filter(
      (order) => order.delivery_date >= lastWeekStart && order.delivery_date <= lastWeekEnd,
    );

    const currentMainByDishId = new Map<number, { date: string; main: MenuDishCardDto }>();
    for (const day of currentWeek.days) {
      for (const main of day.mains) {
        currentMainByDishId.set(main.dish.id, { date: day.date, main });
      }
    }

    const results: RepeatProposal[] = [];
    for (const order of lastWeekOrders) {
      for (const item of order.items) {
        if (item.menu_dish === null) continue;

        const match = currentMainByDishId.get(item.dish);
        if (!match) {
          results.push({
            date: order.delivery_date,
            dishName: item.snapshot_name,
            status: "not_offered",
            line: null,
          });
          continue;
        }

        if (match.main.is_sold_out || match.main.portion === null) {
          results.push({
            date: match.date,
            dishName: item.snapshot_name,
            status: "sold_out",
            line: null,
          });
          continue;
        }

        const salad = currentWeek.days
          .find((day) => day.date === match.date)
          ?.salads.find((candidate) => !candidate.is_sold_out && candidate.portion !== null);

        if (!salad || salad.portion === null) {
          results.push({
            date: match.date,
            dishName: item.snapshot_name,
            status: "sold_out",
            line: null,
          });
          continue;
        }

        results.push({
          date: match.date,
          dishName: item.snapshot_name,
          status: "available",
          line: {
            id: draftLineId(match.main.menu_dish_id, salad.dish.id),
            menuDishId: match.main.menu_dish_id,
            dishId: match.main.dish.id,
            dishPortionId: match.main.portion.id,
            dishName: match.main.dish.name,
            saladDishId: salad.dish.id,
            saladPortionId: salad.portion.id,
            saladName: salad.dish.name,
            quantity: 1,
          },
        });
      }
    }
    return results;
  }, [currentWeek, ordersQuery.data]);

  return { ...ordersQuery, proposals };
}
