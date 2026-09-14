import { NextResponse } from "next/server";

/**
 * Shared constants/helpers for the `app/api/session/*` route handlers.
 *
 * These three route handlers are the ONLY place in the app allowed to talk
 * to Django's `/api/auth/*` endpoints and the only place that ever reads or
 * writes the `tw_refresh` httpOnly cookie (design obs #338 §E). They carry
 * no business data of their own — just token custody — so this shared file
 * stays intentionally tiny.
 */

/** Server-only base URL for the Django API. Never exposed to the client bundle
 * (no `NEXT_PUBLIC_` prefix) because these route handlers run server-side only. */
export const DJANGO_API_URL = process.env.DJANGO_API_URL ?? "http://127.0.0.1:8000";

export const REFRESH_COOKIE_NAME = "tw_refresh";

/**
 * Bug fix (found during first real browser test): originally scoped to
 * `/api/session` on the theory that the cookie should only ever reach
 * these three route handlers — but `middleware.ts` reads THIS SAME cookie
 * on every navigation to a protected route (`/checkout`, `/semana`,
 * `/perfil`, `/planes`), and a browser only attaches a cookie to requests
 * whose path matches its own `Path` attribute. Scoping it to `/api/session`
 * meant the browser silently withheld it from every page navigation, so
 * `middleware.ts` always saw "no cookie" and bounced an already-logged-in
 * customer straight back to `/entrar` — confirmed live: register+login
 * succeeded (access token set, "¡Bienvenido de nuevo!" shown), yet
 * navigating to `/checkout` immediately redirected to
 * `/entrar?next=%2Fcheckout`. `Path=/` is required for the cookie to be
 * visible to the middleware at all; `httpOnly` already prevents any
 * client-side script from reading it, which was the actual security
 * property this scoping was trying to protect — narrowing `Path` bought no
 * additional safety, only broke the feature.
 */
export const REFRESH_COOKIE_PATH = "/";

export const REFRESH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: true,
  sameSite: "lax" as const,
  path: REFRESH_COOKIE_PATH,
  maxAge: 60 * 60 * 24 * 7,
};

interface DjangoErrorBody {
  detail?: unknown;
  [key: string]: unknown;
}

/**
 * Best-effort extraction of a human-readable message from a DRF error body.
 * SimpleJWT's `TokenObtainPairView`/`TokenRefreshView` return `{"detail": "..."}`
 * on failure; a validation error on `/api/auth/login` (e.g. missing password)
 * instead returns field-keyed arrays like `{"password": ["This field is required."]}`.
 */
export const extractDjangoDetail = (body: unknown, fallback: string): string => {
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

/** Shapes a failed Django auth call into F1's `errors.ts::ApiError` wire format `{code, detail}`. */
export const authErrorResponse = (status: number, body: unknown): NextResponse => {
  const code = status === 401 ? "invalid_credentials" : "auth_request_failed";
  return NextResponse.json(
    { code, detail: extractDjangoDetail(body, "Authentication request failed.") },
    { status },
  );
};
