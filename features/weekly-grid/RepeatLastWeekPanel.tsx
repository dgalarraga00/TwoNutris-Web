"use client";

import { AsyncBoundary } from "@/components/AsyncBoundary";
import { Button } from "@/components/ui/Button";
import type { RepeatProposal } from "./useRepeatLastWeek";

interface RepeatLastWeekPanelProps {
  isPending: boolean;
  isError: boolean;
  error: unknown;
  proposals: RepeatProposal[];
  refetch: () => void;
  onApply: (proposals: RepeatProposal[]) => void;
}

/**
 * Task 6.3 — shows last week's proposed re-selection. Available dishes are
 * applied directly; a sold-out or no-longer-offered dish is listed with an
 * explicit "elígelo de nuevo" flag so the customer reselects manually,
 * never silently dropped and never silently re-added (spec: weekly-grid
 * "Repeat with a now-sold-out dish").
 */
export function RepeatLastWeekPanel({
  isPending,
  isError,
  error,
  proposals,
  refetch,
  onApply,
}: RepeatLastWeekPanelProps) {
  return (
    <details className="rounded-2xl border border-leaf/10 bg-white p-3">
      <summary className="cursor-pointer font-poppins text-sm font-medium text-leaf">
        Repetir la semana pasada
      </summary>
      <AsyncBoundary
        isPending={isPending}
        isError={isError}
        error={error}
        data={proposals}
        refetch={refetch}
        isEmpty={(items) => items.length === 0}
        emptyFallback={
          <p role="status" className="mt-2 font-poppins text-sm text-leaf/50">
            No hay un pedido anterior para repetir.
          </p>
        }
      >
        {(items) => (
          <div className="mt-2 flex flex-col gap-2 font-poppins text-sm text-leaf">
            <ul className="flex flex-col gap-1">
              {items.map((item, index) => (
                <li key={`${item.date}-${item.dishName}-${index}`}>
                  {item.dishName}{" "}
                  {item.status === "available" && (
                    <span className="text-leaf-check">— disponible</span>
                  )}
                  {item.status === "sold_out" && (
                    <span className="font-medium text-amber-700">— se agotó, elígelo de nuevo</span>
                  )}
                  {item.status === "not_offered" && (
                    <span className="font-medium text-amber-700">
                      — ya no está en el menú, elígelo de nuevo
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <Button variant="secondary" size="sm" onClick={() => onApply(items)}>
              Repetir disponibles
            </Button>
          </div>
        )}
      </AsyncBoundary>
    </details>
  );
}
