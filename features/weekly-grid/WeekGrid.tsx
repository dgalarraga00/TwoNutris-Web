"use client";

import { useState } from "react";
import { AsyncBoundary } from "@/components/AsyncBoundary";
import { createOrder, useInvalidateOrdersAndBalance } from "@/lib/api/orders";
import { useWeekMenu } from "./useWeekMenu";
import { useDayDraft } from "./useDayDraft";
import { useRepeatLastWeek, type RepeatProposal } from "./useRepeatLastWeek";
import { BalanceSummary } from "./BalanceSummary";
import { AddressSelector } from "./AddressSelector";
import { DayColumn } from "./DayColumn";
import { RepeatLastWeekPanel } from "./RepeatLastWeekPanel";
import { isCapacityRaceError, weeklyGridErrorMessage } from "./errors";
import type { DraftLine } from "./types";

/**
 * Task 6.1 orchestrator: fetches the current week, owns the per-day draft
 * state and the address selection, and submits one `Order` per day. Task
 * 6.2 (capacity race) and 6.3 (repeat last week) both live here because
 * both need write access to the shared draft/week-query state that
 * `DayColumn` alone does not own.
 */
export function WeekGrid() {
  const weekQuery = useWeekMenu();
  const draft = useDayDraft();
  const repeatLastWeek = useRepeatLastWeek(weekQuery.data ?? null);
  const invalidateOrdersAndBalance = useInvalidateOrdersAndBalance();

  const [addressId, setAddressId] = useState<number | null>(null);
  const [submittingDate, setSubmittingDate] = useState<string | null>(null);
  const [dayErrors, setDayErrors] = useState<Record<string, string>>({});

  const submitDay = async (date: string): Promise<void> => {
    if (addressId === null) {
      setDayErrors((prev) => ({ ...prev, [date]: "Selecciona una dirección de entrega primero." }));
      return;
    }
    const lines = draft.linesFor(date);
    if (lines.length === 0) return;

    setSubmittingDate(date);
    setDayErrors((prev) => ({ ...prev, [date]: "" }));
    try {
      await createOrder({
        address: addressId,
        delivery_date: date,
        lines: lines.map((line) => ({
          dish: line.dishId,
          dish_portion: line.dishPortionId,
          quantity: line.quantity,
          credit_type: "meal",
          side_salad_dish: line.saladDishId,
          side_salad_portion: line.saladPortionId,
        })),
      });
      draft.clearDay(date);
      invalidateOrdersAndBalance();
    } catch (error) {
      // Task 6.2: the page-load `is_sold_out` hint can go stale by submit
      // time — re-sync with a real refetch (not just showing text) and drop
      // any draft line whose dish the fresh data now reports as sold out,
      // so the UI never keeps offering a "Quitar" toggle for a dish that
      // can no longer actually be ordered.
      if (isCapacityRaceError(error)) {
        const fresh = await weekQuery.refetch();
        const freshDay = fresh.data?.days.find((candidate) => candidate.date === date);
        if (freshDay) {
          const stillValid = draft
            .linesFor(date)
            .filter((line) =>
              freshDay.mains.some(
                (main) => main.menu_dish_id === line.menuDishId && !main.is_sold_out,
              ),
            );
          draft.setLinesFor(date, stillValid);
        }
      }
      setDayErrors((prev) => ({ ...prev, [date]: weeklyGridErrorMessage(error) }));
    } finally {
      setSubmittingDate(null);
    }
  };

  const applyRepeatProposals = (proposals: RepeatProposal[]): void => {
    const linesByDate = new Map<string, DraftLine[]>();
    for (const proposal of proposals) {
      if (proposal.status !== "available" || !proposal.line) continue;
      const current = linesByDate.get(proposal.date) ?? draft.linesFor(proposal.date);
      const withoutDuplicate = current.filter(
        (line) => line.menuDishId !== proposal.line!.menuDishId,
      );
      linesByDate.set(proposal.date, [...withoutDuplicate, proposal.line]);
    }
    for (const [date, lines] of linesByDate) {
      draft.setLinesFor(date, lines);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <BalanceSummary draftedMealQuantity={draft.totalQuantity} />

      <AsyncBoundary
        isPending={weekQuery.isPending}
        isError={weekQuery.isError}
        error={weekQuery.error}
        data={weekQuery.data}
        refetch={weekQuery.refetch}
        isEmpty={(week) => week === null}
        emptyFallback={
          <p role="status" className="font-poppins text-sm text-leaf/60">
            Aún no hay un menú publicado para esta semana.
          </p>
        }
      >
        {(week) => {
          if (!week) return null;
          return (
            <>
              <AddressSelector selectedId={addressId} onSelect={setAddressId} />
              <RepeatLastWeekPanel
                isPending={repeatLastWeek.isPending}
                isError={repeatLastWeek.isError}
                error={repeatLastWeek.error}
                proposals={repeatLastWeek.proposals}
                refetch={repeatLastWeek.refetch}
                onApply={applyRepeatProposals}
              />
              <div className="flex flex-col gap-6">
                {week.days.map((day) => (
                  <DayColumn
                    key={day.date}
                    day={day}
                    lines={draft.linesFor(day.date)}
                    onAddLine={(line) => draft.addLine(day.date, line)}
                    onSetQuantity={(lineId, quantity) => draft.setQuantity(day.date, lineId, quantity)}
                    onRemoveLine={(lineId) => draft.removeLine(day.date, lineId)}
                    onSubmit={() => void submitDay(day.date)}
                    isSubmitting={submittingDate === day.date}
                    submitError={dayErrors[day.date] || null}
                  />
                ))}
              </div>
            </>
          );
        }}
      </AsyncBoundary>
    </div>
  );
}
