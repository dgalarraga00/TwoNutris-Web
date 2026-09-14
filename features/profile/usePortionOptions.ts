"use client";

import { useMyPacks, type PackDto } from "@/lib/api/packs";
import type { PortionSize } from "@/lib/pricing/bagPricing";
import { resolveVisiblePortionOptions } from "./portionOptions";

export interface UsePortionOptionsResult {
  isPending: boolean;
  isError: boolean;
  error: unknown;
  /** The customer's current ACTIVE meal pack, or `null` when none exists
   * (no packs at all, or only a SNACK pack) — falls back to the same
   * `"new-purchase"` mode as a zero-credit pack. */
  currentPack: PackDto | null;
  visibleOptions: PortionSize[];
  /** `"change"` only while an active meal pack exists AND still has
   * remaining credit; `"new-purchase"` otherwise (spec: "Balance reaches
   * zero -> LOW becomes available as a normal new-pack purchase, not an
   * in-place change"). */
  mode: "change" | "new-purchase";
  refetch: () => void;
}

/**
 * Phase 3B gap-fill (F11, task 6.5). Feeds `PortionOptionList` the visible
 * rank options for the customer's current ACTIVE meal pack, per the
 * FINALIZED rank rule (obs #334/#336): hide every rank at-or-below the
 * current one while the pack still has remaining credit; once it reaches
 * zero, every rank becomes selectable again as a normal new-pack purchase
 * (`/bolsa` — NOT this hook's/component's job to build that flow).
 *
 * Uses `PackDto.remaining_credits` — THIS pack's own remaining MEAL balance
 * (backend `pack_meal_balance()`), added to `CreditPackSerializer`
 * specifically to close the gap this hook used to only approximate via the
 * pooled wallet-level `GET /api/me/balance` number (see obs #357/git
 * history for the prior approximation and why it could drift when a
 * customer holds two same-range MEAL packs at once, rule 3/7) — no longer
 * needed now that the real per-pack number exists.
 */
export function usePortionOptions(): UsePortionOptionsResult {
  const packsQuery = useMyPacks();

  const isPending = packsQuery.isPending;
  const isError = packsQuery.isError;
  const error = packsQuery.error;

  const currentPack =
    isPending || isError ? null : findCurrentActiveMealPack(packsQuery.data ?? []);

  const remainingMealCredits = currentPack?.remaining_credits ?? 0;

  const mode: "change" | "new-purchase" =
    currentPack !== null && remainingMealCredits > 0 ? "change" : "new-purchase";

  const visibleOptions = resolveVisiblePortionOptions(
    (currentPack?.portion_size as PortionSize | null) ?? "medium",
    mode === "change" ? remainingMealCredits : 0,
  );

  return {
    isPending,
    isError,
    error,
    currentPack,
    visibleOptions,
    mode,
    refetch: () => {
      void packsQuery.refetch();
    },
  };
}

function findCurrentActiveMealPack(packs: PackDto[]): PackDto | null {
  const mealPacks = packs.filter(
    (pack) => pack.pack_type === "meal" && pack.status === "active",
  );
  if (mealPacks.length === 0) return null;
  // `GET /api/me/packs` is already ordered `-created_at` server-side
  // (`MyPacksListView.get_queryset()`), so `[0]` is already the latest;
  // this sort is defensive, not load-bearing.
  return [...mealPacks].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  )[0]!;
}
