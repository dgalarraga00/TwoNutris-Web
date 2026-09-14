import { ApiError } from "@/lib/http/errors";

/**
 * Error-message resolution for F9 checkout submission.
 *
 * The corrected, REAL error-code surface for this unit's 3 actual
 * endpoints (verified by reading `config/api.py::DOMAIN_STATUS` and every
 * exception-raising call path reachable from `purchase_pack()`/
 * `attach_receipt()`/`create_address()` directly — NOT the tasks artifact's
 * original 9-code list, which conflates the unrelated daily-order-creation
 * flow (`cutoff_passed`/`zone_not_covered`/`insufficient_credits`/
 * `capacity_exhausted`/`quota_exhausted` — all `orders/services.py::
 * create_order()`-only, a LATER unit, F10's weekly grid, never reachable
 * from `POST /api/packs`):
 *
 * - `coupon_invalid` / `coupon_expired` / `coupon_exhausted` /
 *   `coupon_not_applicable_to_portion` / `coupon_first_purchase_only` —
 *   from `preview_coupon()` (coupon disclosure) AND `redeem_coupon()`
 *   (the purchase call itself, if the coupon somehow changes state between
 *   preview and submit). `coupon_not_applicable_to_snack_pack` is real in
 *   `DOMAIN_STATUS` but UNREACHABLE from this specific flow — this
 *   checkout always sends `pack_type: "meal"` with a resolved
 *   `portion_size`, so `portion_size` is never `null` here.
 * - `cross_range_purchase_blocked` — real, reachable: a returning customer
 *   who still holds an ACTIVE MEAL batch of a different portion size and
 *   starts a brand-new checkout is rejected by `assert_no_cross_range_
 *   purchase()` inside `purchase_pack()`.
 * - `pack_tier_not_available_for_group` — present in `DOMAIN_STATUS` and
 *   defensively checked by `assert_pack_tier_allowed()`, but PRACTICALLY
 *   UNREACHABLE from this flow: `resolve_meal_pack_tier()` always resolves
 *   GROUP customers to MEDIUM before that guard ever runs, so a GROUP
 *   customer can never reach HIGH here to trip it. No dedicated UI/test for
 *   this one — it falls through to the generic `ApiError.detail` fallback
 *   below, exactly like any other never-observed code would.
 * - `invalid_receipt_file` — from `attach_receipt()` (the receipt-upload
 *   step): wrong content-type or over the 10 MB size allowlist.
 * - Any other `ApiError` (a generic DRF 400 field-validation error on
 *   `POST /api/me/addresses`, `payment_not_pending`, `not_found`, etc.)
 *   falls through to `error.detail`, which the backend already returns as
 *   a customer-facing Spanish string for every domain exception (confirmed
 *   by reading every exception class's own `__str__` — they are already
 *   Spanish, no client-side re-mapping needed on top of `code`-driven
 *   detection).
 */
export function checkoutErrorMessage(error: unknown): string {
  if (error instanceof ApiError) {
    return error.detail;
  }
  return "No pudimos completar tu compra. Intenta de nuevo.";
}
