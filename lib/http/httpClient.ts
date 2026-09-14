import { getAccessToken, clearAccessToken } from "./tokenStore";
import { getFreshAccessToken } from "./refreshCoordinator";
import { ApiError } from "./errors";

/**
 * `fetch` wrapper that owns the JWT auth lifecycle so no other module has
 * to: attaches the current access token, refreshes exactly once on a 401
 * (via the single-flight `refreshCoordinator`), retries the original
 * request exactly once with the new token, and hard-logs-out (clears the
 * token store) on a second 401 — whether the refresh call itself failed or
 * the retried request also came back unauthorized. There is no
 * session/cookie logic here: that boundary is F2's route handlers.
 */

interface HttpClientOptions extends RequestInit {
  /** Skip attaching the access token and skip the 401→refresh→retry flow entirely. */
  skipAuth?: boolean;
}

interface ParsedErrorBody {
  code: string;
  detail: string;
}

const buildHeaders = (init: RequestInit | undefined, token: string | null): Headers => {
  const headers = new Headers(init?.headers);
  if (token !== null && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  if (typeof init?.body === "string" && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  return headers;
};

const parseErrorBody = async (response: Response): Promise<ParsedErrorBody> => {
  try {
    const data: unknown = await response.json();
    const record = data as { code?: unknown; detail?: unknown };
    return {
      code: typeof record?.code === "string" ? record.code : "unknown_error",
      detail: typeof record?.detail === "string" ? record.detail : response.statusText,
    };
  } catch {
    return { code: "unknown_error", detail: response.statusText };
  }
};

const throwAsApiError = async (response: Response): Promise<never> => {
  const { code, detail } = await parseErrorBody(response);
  throw new ApiError(response.status, code, detail);
};

const performFetch = (input: RequestInfo | URL, options: HttpClientOptions): Promise<Response> => {
  const token = options.skipAuth === true ? null : getAccessToken();
  const headers = buildHeaders(options, token);
  return fetch(input, { ...options, headers });
};

/** Runs one authenticated request, transparently handling a single 401→refresh→retry cycle. */
export const httpClient = async (
  input: RequestInfo | URL,
  options: HttpClientOptions = {},
): Promise<Response> => {
  const firstResponse = await performFetch(input, options);

  if (firstResponse.status !== 401 || options.skipAuth === true) {
    if (!firstResponse.ok) {
      return throwAsApiError(firstResponse);
    }
    return firstResponse;
  }

  try {
    await getFreshAccessToken();
  } catch {
    clearAccessToken();
    return throwAsApiError(firstResponse);
  }

  const retryResponse = await performFetch(input, options);

  if (retryResponse.status === 401) {
    clearAccessToken();
  }

  if (!retryResponse.ok) {
    return throwAsApiError(retryResponse);
  }

  return retryResponse;
};
