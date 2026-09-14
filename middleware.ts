import { NextResponse, type NextRequest } from "next/server";
import { REFRESH_COOKIE_NAME } from "./app/api/session/shared";

/**
 * Lightweight, cookie-PRESENCE-only gate for JWT-gated routes (design obs
 * #338 §A/§E, `(app)` route group). This is a UX redirect only — it never
 * validates the cookie's content or calls Django (Edge runtime has no
 * access to the JWT secret, and even if it did, presence-checking is by
 * design not the real security boundary). The real boundary is every API
 * call still requiring a valid access token via `httpClient`, which
 * transparently refreshes or hard-logs-out on a rejected token.
 *
 * FORWARD REFERENCE: as of this unit (F2), the `app/(app)/` and
 * `app/(public)/` route groups named in the design do not exist yet as
 * folders — only ungrouped segments (`app/menu`, `app/empresas`, etc.) and
 * `app/api` exist. Route groups like `(app)` do not appear in the URL, so
 * the matcher below targets the exact URL paths the design names as living
 * under `(app)/` (`semana`, `checkout`, `perfil`, `planes`) rather than the
 * folder name itself. When those segments are created under `app/(app)/...`
 * in a later frontend unit, no change to this matcher is required — the
 * route group is purely an organizational folder and does not affect the
 * URL or this config.
 */
export const config = {
  matcher: ["/semana/:path*", "/checkout/:path*", "/perfil/:path*", "/planes/:path*"],
};

export function middleware(request: NextRequest): NextResponse {
  const hasRefreshCookie = request.cookies.has(REFRESH_COOKIE_NAME);

  if (hasRefreshCookie) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/entrar", request.url);
  loginUrl.searchParams.set("next", request.nextUrl.pathname + request.nextUrl.search);
  return NextResponse.redirect(loginUrl);
}
