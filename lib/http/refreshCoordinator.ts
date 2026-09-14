import { setAccessToken } from "./tokenStore";

/**
 * Single-flight access-token refresh.
 *
 * `httpClient` may have many requests in the air at once (e.g. a weekly grid
 * firing several queries in parallel). If each one saw a 401 and refreshed
 * independently, N concurrent callers would trigger N refresh calls against
 * `/api/session/refresh` — burning the rotating refresh token N times over
 * and racing each other. Instead, ALL callers share the same in-flight
 * promise: the first caller starts the real request, every other caller
 * awaits that same promise, and the module-level slot is cleared once it
 * settles so the next 401 (later in time) can trigger a fresh refresh.
 */

interface RefreshResponse {
  accessToken: string;
}

let inFlightRefresh: Promise<string> | null = null;

const isRefreshResponse = (value: unknown): value is RefreshResponse =>
  typeof value === "object" &&
  value !== null &&
  typeof (value as { accessToken?: unknown }).accessToken === "string";

const requestRefresh = async (): Promise<string> => {
  // Route handler owned by F2 (app/api/session/refresh/route.ts). It reads
  // the httpOnly `tw_refresh` cookie server-side and proxies Django's
  // `/api/auth/refresh`; this module never sees the refresh cookie itself.
  const response = await fetch("/api/session/refresh", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`refresh_failed_${response.status}`);
  }

  const data: unknown = await response.json();
  if (!isRefreshResponse(data)) {
    throw new Error("refresh_response_malformed");
  }

  setAccessToken(data.accessToken);
  return data.accessToken;
};

/** Returns a fresh access token, sharing one in-flight request across N concurrent callers. */
export const getFreshAccessToken = (): Promise<string> => {
  inFlightRefresh ??= requestRefresh().finally(() => {
    inFlightRefresh = null;
  });
  return inFlightRefresh;
};
