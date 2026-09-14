/**
 * Module-scoped holder for the current JWT access token.
 *
 * This is deliberately NOT React state and NOT localStorage/sessionStorage:
 * the access token lives only in memory for the lifetime of the page, so an
 * XSS payload cannot read it from storage and a page reload always starts
 * from zero (the refresh cookie re-establishes a fresh token on demand).
 *
 * Pure TypeScript — nothing here imports React or Next.js. Only
 * `refreshCoordinator` and `httpClient` should import this module; feature
 * code and components must never read or write the token directly.
 */

let accessToken: string | null = null;

export const setAccessToken = (token: string): void => {
  accessToken = token;
};

export const getAccessToken = (): string | null => accessToken;

export const clearAccessToken = (): void => {
  accessToken = null;
};
