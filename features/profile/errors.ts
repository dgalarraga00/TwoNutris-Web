import { ApiError, isCode } from "@/lib/http/errors";

/**
 * Error-message resolution for F11's "cambiar mi plan" submit flow
 * (`POST /api/packs/{id}/portion-size`, `POST /api/packs/{id}/receipt`).
 * Real codes confirmed by reading `config/api.py::DOMAIN_STATUS` and
 * `payments/services.py` directly:
 *
 * - `portion_change_already_pending` (409) — `request_portion_change()`'s
 *   own guard: a second request on the same pack before the first one's
 *   receipt is confirmed by an admin.
 * - `portion_downgrade_not_allowed` (422) — `resolve_portion_change_charge()`
 *   rejecting a rank decrease; unreachable from THIS component in practice
 *   (it only ever lists ranks `>= current`, per `resolveVisiblePortionOptions()`),
 *   kept here defensively in case the visible-options list and the server's
 *   own guard ever drift.
 * - `invalid_receipt_file` (422) — from `attach_receipt()`, same as F9.
 * - Any other `ApiError` falls through to `error.detail`, already a
 *   customer-facing Spanish string for every domain exception (same
 *   fallback convention as `features/checkout/errors.ts`/
 *   `features/weekly-grid/errors.ts`).
 */
export function portionChangeErrorMessage(error: unknown): string {
  if (isCode(error, "portion_change_already_pending")) {
    return "Ya tienes un cambio de plan pendiente de confirmación.";
  }
  if (isCode(error, "portion_downgrade_not_allowed")) {
    return "No puedes bajar de plan mientras tengas créditos disponibles.";
  }
  if (error instanceof ApiError) {
    return error.detail;
  }
  return "No pudimos procesar tu solicitud. Intenta de nuevo.";
}

/**
 * `PATCH /api/orders/{id}` -> `cancel_order()` guard chain (backend, read
 * directly this session): `order_already_cancelled` (409) is the one real
 * domain code — `config/api.py::DOMAIN_STATUS` maps `OrderAlreadyCancelled`
 * to it. Every other `ApiError`'s `detail` is already a precise
 * customer-facing Spanish string (same passthrough convention as
 * `weeklyGridErrorMessage`).
 */
export function cancelOrderErrorMessage(error: unknown): string {
  if (isCode(error, "order_already_cancelled")) {
    return "Este pedido ya fue cancelado.";
  }
  if (error instanceof ApiError) {
    return error.detail;
  }
  return "No pudimos cancelar tu pedido. Intenta de nuevo.";
}

/**
 * `PATCH /api/me/addresses/{id}` (feedback-round-1: address editing).
 * `AddressDetailView` (backend, read directly this session) is a plain
 * `generics.UpdateAPIView` with no domain exception codes of its own — just
 * DRF field validation (malformed `zone`/`street`/etc., already a
 * customer-facing Spanish string via `error.detail`) or a 404 when the id
 * isn't one of `request.user`'s own addresses. Same passthrough convention
 * as `cancelOrderErrorMessage`.
 */
export function updateAddressErrorMessage(error: unknown): string {
  if (error instanceof ApiError) {
    return error.detail;
  }
  return "No pudimos guardar tu dirección. Intenta de nuevo.";
}
