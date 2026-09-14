import { ALL_PORTION_SIZES, PORTION_RANK, type PortionSize } from "@/lib/pricing/bagPricing";

/**
 * Pure rank-hiding logic for "cambiar mi plan" (F11, task 6.5; spec:
 * customer-profile-web "Plan-change list hides lower-rank options
 * (permanent, no exceptions)"; obs #334/#336). Extracted as a standalone,
 * zero-React function — same convention as `lib/pricing/bagPricing.ts`'s
 * own `resolvePortionSize()`/`computeBagTotal()` — so the rank rule can be
 * unit-tested directly without mounting a component or mocking
 * TanStack Query.
 *
 * `remainingCredits <= 0` returns EVERY rank (spec: "Balance reaches zero
 * -> LOW becomes available as a normal new-pack purchase") — this is
 * deliberately the same threshold `resolve_portion_change_charge()` uses
 * server-side (`NoCreditsToChangePlan` at exactly zero), never a
 * client-invented cutoff.
 */
export function resolveVisiblePortionOptions(
  currentPortionSize: PortionSize,
  remainingCredits: number,
): PortionSize[] {
  if (remainingCredits <= 0) {
    return [...ALL_PORTION_SIZES];
  }
  return ALL_PORTION_SIZES.filter(
    (size) => PORTION_RANK[size] >= PORTION_RANK[currentPortionSize],
  );
}
