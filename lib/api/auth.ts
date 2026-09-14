import { ApiError } from "@/lib/http/errors";
import { httpClient } from "@/lib/http/httpClient";
import type { CustomerKind } from "@/lib/pricing/bagPricing";

/**
 * Browser-side base URL for Django's `/api/auth/*` endpoints (design obs
 * #338 §F: two base URLs, not one — mirrors `lib/api/menu.ts`'s own
 * `MENU_API_BASE_URL` constant/fallback exactly). `POST /api/auth/register`
 * is called directly against Django from client code — unlike
 * login/refresh/logout, which are proxied through `app/api/session/*`
 * specifically to protect the httpOnly refresh-token cookie — because
 * registration returns no tokens at all, so there is nothing to protect.
 * Not extracted into a shared cross-file module: each API-surface file in
 * this codebase already keeps its own copy of this constant by convention.
 */
export const AUTH_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

export interface RegisterInput {
  email: string;
  password: string;
  kind: CustomerKind;
  phone: string;
  first_name: string;
  last_name: string;
}

interface DjangoErrorBody {
  detail?: unknown;
  [key: string]: unknown;
}

/**
 * Replicated from `app/api/session/shared.ts::extractDjangoDetail()` rather
 * than imported: that module pulls in `next/server` and is scoped to
 * server-only route handlers. `POST /api/auth/register` is called directly
 * against Django (not proxied), so its error body is DRF's raw shape —
 * `{"detail": "..."}` for framework-level errors, or field-keyed arrays like
 * `{"email": ["Ya existe una cuenta con este correo electrónico."]}` for
 * serializer validation errors (duplicate email, password too short, etc.)
 * — never the normalized `{code, detail}` shape the Next.js route handlers
 * produce. `httpClient`'s own error parsing expects that normalized shape,
 * so it is deliberately NOT used for this call (see {@link registerCustomer}).
 */
const extractDjangoErrorDetail = (body: unknown, fallback: string): string => {
  if (typeof body === "object" && body !== null) {
    const record = body as DjangoErrorBody;
    if (typeof record.detail === "string") {
      return record.detail;
    }
    for (const value of Object.values(record)) {
      if (Array.isArray(value) && typeof value[0] === "string") {
        return value[0];
      }
    }
  }
  return fallback;
};

/**
 * `POST /api/auth/register` — anonymous, returns the created customer but
 * NO tokens. Callers must immediately call {@link loginCustomer} with the
 * same credentials to end up authenticated.
 */
export async function registerCustomer(input: RegisterInput): Promise<void> {
  const response = await fetch(`${AUTH_API_BASE_URL}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    const data: unknown = await response.json().catch(() => null);
    throw new ApiError(
      response.status,
      "register_failed",
      extractDjangoErrorDetail(data, "No pudimos crear tu cuenta."),
    );
  }
}

export interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginSuccessBody {
  accessToken: string;
}

const isLoginSuccessBody = (value: unknown): value is LoginSuccessBody =>
  typeof value === "object" &&
  value !== null &&
  typeof (value as { accessToken?: unknown }).accessToken === "string";

/**
 * Calls the EXISTING `/api/session/login` Next.js route handler (F2) —
 * never Django's `/api/auth/login` directly from client code, so the
 * refresh cookie stays server-set/httpOnly. That route already normalizes
 * every failure into `{code, detail}` (`authErrorResponse()`), which matches
 * `httpClient`'s own error parsing exactly, so — unlike
 * {@link registerCustomer} above — `httpClient` IS used here.
 */
export async function loginCustomer(credentials: LoginCredentials): Promise<string> {
  const response = await httpClient("/api/session/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    skipAuth: true,
  });
  const data: unknown = await response.json();
  if (!isLoginSuccessBody(data)) {
    throw new ApiError(500, "invalid_response", "Respuesta de inicio de sesión inválida.");
  }
  return data.accessToken;
}

/**
 * Calls the EXISTING `/api/session/logout` route handler (F2) to clear the
 * httpOnly `tw_refresh` cookie — that handler's own docstring confirms it
 * owns only the cookie half of logout. Callers (see `components/AppNav.tsx`)
 * must separately call `tokenStore.clearAccessToken()` to drop the
 * in-memory access token, mirroring `httpClient`'s own hard-logout sequence
 * on a rejected refresh. `skipAuth: true` because logging out must succeed
 * even with an already-expired/missing access token.
 */
export async function logoutCustomer(): Promise<void> {
  await httpClient("/api/session/logout", { method: "POST", skipAuth: true });
}
