"use client";

import { useState } from "react";
import type { MenuDayDto } from "@/lib/api/menu";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { useCutoffCountdown } from "./useCutoffCountdown";
import { formatDayLabel } from "./dateLabels";
import { DishSlot } from "./DishSlot";
import { DishStepDrawer } from "./DishStepDrawer";
import type { DraftLine, NewDraftLine } from "./types";

interface DayColumnProps {
  day: MenuDayDto;
  lines: DraftLine[];
  onAddLine: (line: NewDraftLine) => void;
  onSetQuantity: (lineId: string, quantity: number) => void;
  onRemoveLine: (lineId: string) => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  submitError: string | null;
}

/**
 * One weekday's ROW (design-refinement pass: days render as ROWS stacked
 * down the page now, not side-by-side columns — `WeekGrid` stacks these
 * vertically; a "row" is itself a horizontal-at-desktop/stacked-at-phone
 * dish grid, not a single-line layout). 3 visual states beyond the
 * mandatory 4 query states (those belong to `WeekGrid`'s own
 * `<AsyncBoundary>` around the whole week): open / `is_closed` / past-
 * cutoff — `is_past_cutoff` combines the DTO's own page-load-time value
 * with `useCutoffCountdown`'s live tick, since a cutoff can pass while the
 * page stays open, the same staleness concern as `is_sold_out`.
 */
export function DayColumn({
  day,
  lines,
  onAddLine,
  onSetQuantity,
  onRemoveLine,
  onSubmit,
  isSubmitting,
  submitError,
}: DayColumnProps) {
  const countdown = useCutoffCountdown(day.cutoff_at);
  const isPastCutoff = day.is_past_cutoff || countdown.isPastCutoff;
  const dayLabel = formatDayLabel(day.date);
  const totalQuantity = lines.reduce((sum, line) => sum + line.quantity, 0);
  const availableSalads = day.salads.filter((salad) => !salad.is_sold_out && salad.portion !== null);

  // `activeDishId` is deliberately never reset to `null` on close (only
  // ever overwritten by the NEXT dish opened) so `DishStepDrawer` stays
  // mounted through Vaul's own close animation instead of unmounting mid-
  // transition; `drawerOpen` alone drives the actual open/closed state.
  const [activeDishId, setActiveDishId] = useState<number | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeMain = day.mains.find((main) => main.menu_dish_id === activeDishId) ?? null;

  if (day.is_closed) {
    return (
      <section aria-label={dayLabel} className="rounded-2xl border border-leaf/10 bg-white p-4">
        <h3 className="font-ibrand text-xl text-leaf">{dayLabel}</h3>
        <p role="status" className="mt-1 font-poppins text-sm text-leaf/50">
          Día no laborable — no se cocina.
        </p>
      </section>
    );
  }

  return (
    <section
      aria-label={dayLabel}
      className="flex flex-col gap-4 rounded-2xl border border-leaf/10 bg-white p-4 md:p-6"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-ibrand text-xl text-leaf md:text-2xl">{dayLabel}</h3>
        <p className="font-poppins text-xs text-leaf/50">Corte: {countdown.formattedCutoff}</p>
      </div>

      {isPastCutoff ? (
        <Alert variant="warning" role="status">
          Corte cerrado para este día.
        </Alert>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {day.mains.map((main) => (
            <DishSlot
              key={main.menu_dish_id}
              main={main}
              availableSalads={availableSalads}
              lines={lines.filter((line) => line.menuDishId === main.menu_dish_id)}
              disabled={isPastCutoff}
              onOpenDrawer={() => {
                setActiveDishId(main.menu_dish_id);
                setDrawerOpen(true);
              }}
            />
          ))}
        </ul>
      )}

      {!isPastCutoff && totalQuantity > 0 && (
        <Button onClick={onSubmit} disabled={isSubmitting} size="sm" className="self-start">
          {isSubmitting ? "Enviando..." : `Confirmar pedido (${totalQuantity})`}
        </Button>
      )}

      {submitError && <Alert variant="error">{submitError}</Alert>}

      {activeMain && (
        <DishStepDrawer
          open={drawerOpen}
          onOpenChange={setDrawerOpen}
          main={activeMain}
          salads={availableSalads}
          existingLines={lines.filter((line) => line.menuDishId === activeMain.menu_dish_id)}
          disabled={isPastCutoff}
          onAdd={onAddLine}
          onSetQuantity={onSetQuantity}
          onRemoveLine={onRemoveLine}
        />
      )}
    </section>
  );
}
