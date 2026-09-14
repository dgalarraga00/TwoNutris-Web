/**
 * Typed error for every non-2xx response coming back from the Django API.
 *
 * The backend's `config/api.py` exception handler always responds with
 * `{"detail": "...", "code": "..."}` for domain errors (e.g. `cutoff_passed`,
 * `zone_not_covered`, `insufficient_credits`, `portion_downgrade_not_allowed`,
 * `portion_change_already_pending`, `menu_week_not_published`). `code` is a
 * growing, open-ended set owned by the backend, so it is kept as `string`
 * here rather than a closed union — callers narrow with `isCode()` instead
 * of exhaustive switch statements.
 */
export class ApiError extends Error {
  readonly status: number;
  readonly code: string;
  readonly detail: string;

  constructor(status: number, code: string, detail: string) {
    super(detail);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
    this.detail = detail;
  }
}

/** Type-guard: narrows `unknown` (e.g. a caught error) to "is this ApiError with this code". */
export const isCode = (error: unknown, code: string): error is ApiError =>
  error instanceof ApiError && error.code === code;
