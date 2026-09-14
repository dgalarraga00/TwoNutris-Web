import { ApiError, isCode } from "@/lib/http/errors";

/**
 * Real, confirmed error-code surface for `POST /api/orders` (backend:
 * `orders/services.py::create_order()`'s guard chain + `config/api.py::
 * DOMAIN_STATUS`, read directly this session — this is the flow F9's own
 * apply-progress explicitly said its 5-code list actually belongs to, not
 * the coupon/pack-purchase flow it originally conflated it with):
 *
 * - `cutoff_passed` — `MenuDay.cutoff_at` already passed (422).
 * - `zone_not_covered` — the address's zone is inactive (422).
 * - `insufficient_credits` — `InsufficientCredits.__str__()` already names
 *   the wallet and the exact needed/available counts in Spanish.
 * - `capacity_exhausted` / `quota_exhausted` — a day/dish sold out between
 *   render and submit (409); see `isCapacityRaceError` below.
 *
 * Every one of these domain exceptions' `__str__` is already a precise,
 * customer-facing Spanish message, so — matching this repo's own
 * established convention (`features/checkout/errors.ts`) — this is a
 * `detail` passthrough, not a re-mapping.
 */
export function weeklyGridErrorMessage(error: unknown): string {
  if (error instanceof ApiError) {
    return error.detail;
  }
  return "No pudimos enviar tu pedido. Intenta de nuevo.";
}

/** Task 6.2: the grid's own `is_sold_out` is a page-load-time HINT that can
 * go stale by submit time — these two codes mean someone else bought the
 * last slot in between, and the caller MUST inline-refetch the week's menu
 * rather than just showing a generic error. */
export const isCapacityRaceError = (error: unknown): boolean =>
  isCode(error, "capacity_exhausted") || isCode(error, "quota_exhausted");
