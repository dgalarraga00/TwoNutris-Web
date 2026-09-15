"use client";

import { AsyncBoundary } from "@/components/AsyncBoundary";
import { Alert } from "@/components/ui/Alert";
import { useBalance } from "@/lib/api/balance";

interface BalanceSummaryProps {
  /**
   * Live-feedback fix (feedback-round-2): sum of every draft line's
   * `quantity` across ALL days currently held in `useDayDraft`, before any
   * day is submitted (`useDayDraft`'s `totalQuantity`). Every draft line
   * today is a MEAL credit. Confirmed safe even without this: `orders/
   * services.py::consume_fifo()` still rejects any over-budget day
   * server-side (422 `insufficient_credits`), inside one atomic transaction
   * — this prop only adds an earlier, week-wide UI signal so the customer
   * does not discover the problem one day-submission at a time.
   */
  draftedMealQuantity: number;
  /**
   * Always 0 today — the weekly grid has no snack-ordering surface yet
   * (design's credit-packs notes). Kept as its own prop rather than
   * hardcoded, so a real snack draft total can be wired in later with no
   * `BalanceSummary` API change. The two wallets stay fully independent per
   * this project's established rule — never pooled, never a combined
   * number — including in this running-total display.
   */
  draftedSnackQuantity?: number;
}

/**
 * Always-visible remaining-credits display (prompt: "Show `GET /api/me/
 * balance`'s `meal.available`/`snack.available` prominently"; spec:
 * customer-profile-web "Balance split by wallet ... never pooled"). The two
 * wallets are always rendered as two separate numbers, never summed.
 *
 * Live-feedback fix (feedback-round-2): now also renders a running total —
 * "Llevas X de Y créditos ... disponibles esta semana" — comparing what the
 * customer has DRAFTED so far this week against each wallet's balance, with
 * an `Alert variant="warning"` when drafted exceeds available. Non-blocking
 * by design (per-day submission is still the real enforcement point, and a
 * customer legitimately mid-renewal may plan ahead of their current
 * balance) — this is a visibility fix, not a new restriction.
 */
export function BalanceSummary({ draftedMealQuantity, draftedSnackQuantity = 0 }: BalanceSummaryProps) {
  const { isPending, isError, error, data, refetch } = useBalance();

  return (
    <AsyncBoundary isPending={isPending} isError={isError} error={error} data={data} refetch={refetch}>
      {(balance) => {
        const mealOverBudget = draftedMealQuantity > balance.meal.available;
        const snackOverBudget = draftedSnackQuantity > balance.snack.available;

        return (
          <div className="flex flex-col gap-2">
            <div
              role="status"
              className="flex gap-6 rounded-2xl border border-leaf/10 bg-white p-3 font-poppins text-sm font-medium text-leaf"
            >
              <span>Créditos de plato: {balance.meal.available}</span>
              <span>Créditos de snack: {balance.snack.available}</span>
            </div>

            <p
              className={`font-poppins text-xs font-semibold ${mealOverBudget ? "text-red-700" : "text-leaf/70"}`}
            >
              Llevas {draftedMealQuantity} de {balance.meal.available} créditos de plato disponibles esta
              semana.
            </p>
            {mealOverBudget && (
              <Alert variant="warning">
                Tienes más platos en tus borradores ({draftedMealQuantity}) que créditos de plato
                disponibles ({balance.meal.available}). Podrás enviar cada día hasta agotar tu saldo; el
                resto quedará pendiente hasta que renueves tu paquete.
              </Alert>
            )}

            {draftedSnackQuantity > 0 && (
              <>
                <p
                  className={`font-poppins text-xs font-semibold ${snackOverBudget ? "text-red-700" : "text-leaf/70"}`}
                >
                  Llevas {draftedSnackQuantity} de {balance.snack.available} créditos de snack disponibles
                  esta semana.
                </p>
                {snackOverBudget && (
                  <Alert variant="warning">
                    Tienes más snacks en tus borradores ({draftedSnackQuantity}) que créditos de snack
                    disponibles ({balance.snack.available}).
                  </Alert>
                )}
              </>
            )}
          </div>
        );
      }}
    </AsyncBoundary>
  );
}
