"use client";

import { AsyncBoundary } from "@/components/AsyncBoundary";
import { useBalance } from "@/lib/api/balance";

/**
 * Always-visible remaining-credits display (prompt: "Show `GET /api/me/
 * balance`'s `meal.available`/`snack.available` prominently"; spec:
 * customer-profile-web "Balance split by wallet ... never pooled"). The two
 * wallets are always rendered as two separate numbers, never summed.
 */
export function BalanceSummary() {
  const { isPending, isError, error, data, refetch } = useBalance();

  return (
    <AsyncBoundary isPending={isPending} isError={isError} error={error} data={data} refetch={refetch}>
      {(balance) => (
        <div
          role="status"
          className="flex gap-6 rounded-2xl border border-leaf/10 bg-white p-3 font-poppins text-sm font-medium text-leaf"
        >
          <span>Créditos de plato: {balance.meal.available}</span>
          <span>Créditos de snack: {balance.snack.available}</span>
        </div>
      )}
    </AsyncBoundary>
  );
}
