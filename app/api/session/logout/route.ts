import { NextResponse } from "next/server";
import { REFRESH_COOKIE_NAME, REFRESH_COOKIE_PATH } from "../shared";

/**
 * Clears the `tw_refresh` httpOnly cookie. Does not call Django: this backend
 * has no server-side logout/blacklist endpoint (stock SimpleJWT with
 * `ROTATE_REFRESH_TOKENS=False` and no blacklist app installed), so logout is
 * purely a client-side + cookie token discard. The client also calls
 * `tokenStore.clearAccessToken()` separately to drop the in-memory access
 * token; this handler only owns the httpOnly cookie half.
 */
export async function POST(): Promise<NextResponse> {
  const response = NextResponse.json({}, { status: 200 });
  response.cookies.delete({ name: REFRESH_COOKIE_NAME, path: REFRESH_COOKIE_PATH });
  return response;
}
