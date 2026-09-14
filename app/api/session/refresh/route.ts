import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { DJANGO_API_URL, REFRESH_COOKIE_NAME, REFRESH_COOKIE_PATH } from "../shared";

/**
 * Proxies Django's `POST /api/auth/refresh` (stock SimpleJWT `TokenRefreshView`).
 *
 * This is the exact endpoint `lib/http/refreshCoordinator.ts::requestRefresh()`
 * calls (via the internal `/api/session/refresh` path, not Django's external
 * `/api/auth/refresh`). The httpOnly `tw_refresh` cookie is read here
 * server-side only — it is never sent to client-side JS. Response shape
 * (`{accessToken: string}`) must match `refreshCoordinator.ts`'s
 * `isRefreshResponse` type guard exactly.
 *
 * `ROTATE_REFRESH_TOKENS=False` server-side: Django reuses the same refresh
 * token across calls, so the cookie is never rewritten on success here.
 */

interface DjangoRefreshResponse {
  access: string;
}

const isDjangoRefreshResponse = (value: unknown): value is DjangoRefreshResponse =>
  typeof value === "object" &&
  value !== null &&
  typeof (value as { access?: unknown }).access === "string";

export async function POST(): Promise<NextResponse> {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get(REFRESH_COOKIE_NAME)?.value;

  if (refreshToken === undefined) {
    return NextResponse.json(
      { code: "no_refresh_token", detail: "No session to refresh." },
      { status: 401 },
    );
  }

  const djangoResponse = await fetch(`${DJANGO_API_URL}/api/auth/refresh`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: refreshToken }),
  });

  const data: unknown = await djangoResponse.json().catch(() => null);

  if (!djangoResponse.ok || !isDjangoRefreshResponse(data)) {
    const response = NextResponse.json(
      { code: "refresh_failed", detail: "Session expired. Please log in again." },
      { status: 401 },
    );
    response.cookies.delete({ name: REFRESH_COOKIE_NAME, path: REFRESH_COOKIE_PATH });
    return response;
  }

  return NextResponse.json({ accessToken: data.access }, { status: 200 });
}
