import { NextResponse } from "next/server";
import {
  DJANGO_API_URL,
  REFRESH_COOKIE_NAME,
  REFRESH_COOKIE_OPTIONS,
  authErrorResponse,
} from "../shared";

/**
 * Proxies Django's `POST /api/auth/login` (stock SimpleJWT `TokenObtainPairView`).
 *
 * The refresh token never reaches the browser as JS-readable data: it is set
 * as an httpOnly cookie here. Only the access token is returned in the JSON
 * body, which the client's `tokenStore.setAccessToken()` picks up and holds
 * in memory (F1) — never in cookies or storage.
 */

interface LoginRequestBody {
  email: string;
  password: string;
}

interface DjangoLoginResponse {
  access: string;
  refresh: string;
}

const isLoginRequestBody = (value: unknown): value is LoginRequestBody =>
  typeof value === "object" &&
  value !== null &&
  typeof (value as { email?: unknown }).email === "string" &&
  typeof (value as { password?: unknown }).password === "string";

const isDjangoLoginResponse = (value: unknown): value is DjangoLoginResponse =>
  typeof value === "object" &&
  value !== null &&
  typeof (value as { access?: unknown }).access === "string" &&
  typeof (value as { refresh?: unknown }).refresh === "string";

export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { code: "invalid_request", detail: "Request body must be valid JSON." },
      { status: 400 },
    );
  }

  if (!isLoginRequestBody(body)) {
    return NextResponse.json(
      { code: "invalid_request", detail: "email and password are required." },
      { status: 400 },
    );
  }

  const djangoResponse = await fetch(`${DJANGO_API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: body.email, password: body.password }),
  });

  const data: unknown = await djangoResponse.json().catch(() => null);

  if (!djangoResponse.ok || !isDjangoLoginResponse(data)) {
    return authErrorResponse(djangoResponse.status, data);
  }

  const response = NextResponse.json({ accessToken: data.access }, { status: 200 });
  response.cookies.set(REFRESH_COOKIE_NAME, data.refresh, REFRESH_COOKIE_OPTIONS);
  return response;
}
