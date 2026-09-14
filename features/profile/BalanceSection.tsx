"use client";

import { AsyncBoundary } from "@/components/AsyncBoundary";
import { Button } from "@/components/ui/Button";
import { useBalance } from "@/lib/api/balance";

/**
 * F11 task 6.4: balance split by wallet, NEVER pooled (spec:
 * customer-profile-web "Balance/deliveries/history/addresses"). Empty state
 * is specifically "zero balance in BOTH wallets -> purchase CTA, NOT an
 * error state" (spec scenario "Zero balance both wallets (empty)") — routed
 * through `AsyncBoundary`'s `isEmpty` predicate, not its error branch, same
 * as F6's own precedent for a domain-specific "nothing to show" state that
 * is not a network failure.
 *
 * Design-refinement pass: each wallet is now its own stat chip (real
 * hierarchy — a large bold number, a small label) instead of one flat
 * `role="status"` sentence. The exact text nodes `Créditos de plato: N` /
 * `Créditos de snack: N` are preserved verbatim (existing tests query them)
 * — only the surrounding presentation changed.
 */
export function BalanceSection() {
  const { isPending, isError, error, data, refetch } = useBalance();

  return (
    <AsyncBoundary
      isPending={isPending}
      isError={isError}
      error={error}
      data={data}
      refetch={refetch}
      isEmpty={(balance) => balance.meal.available === 0 && balance.snack.available === 0}
      emptyFallback={
        <div role="status" className="flex flex-col items-start gap-3 font-poppins text-sm text-leaf/70">
          <p>No tienes créditos disponibles todavía.</p>
          <Button href="/bolsa" size="sm">
            Comprar un paquete
          </Button>
        </div>
      }
    >
      {(balance) => (
        <div role="status" className="flex flex-wrap gap-4">
          <div className="flex min-w-[160px] flex-1 flex-col justify-center gap-0.5 rounded-xl bg-leaf-light/25 px-4 py-3.5">
            <span className="font-poppins text-base font-bold text-leaf">
              Créditos de plato: {balance.meal.available}
            </span>
            <span className="font-poppins text-xs text-leaf/60">Disponibles esta semana</span>
          </div>
          <div className="flex min-w-[160px] flex-1 flex-col justify-center gap-0.5 rounded-xl bg-amber/15 px-4 py-3.5">
            <span className="font-poppins text-base font-bold text-leaf">
              Créditos de snack: {balance.snack.available}
            </span>
            <span className="font-poppins text-xs text-leaf/60">Disponibles esta semana</span>
          </div>
        </div>
      )}
    </AsyncBoundary>
  );
}
