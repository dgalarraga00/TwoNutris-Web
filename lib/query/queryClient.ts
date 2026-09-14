import { QueryClient } from "@tanstack/react-query";
import { ApiError } from "@/lib/http/errors";

/**
 * Shared TanStack Query client for the whole app.
 *
 * Retry policy: `ApiError` (F1's `lib/http/httpClient.ts`) means the Django
 * backend answered with a real domain error (e.g. `insufficient_credits`,
 * `cutoff_passed`, `menu_week_not_published`) — retrying is pointless, the
 * answer won't change. Anything else (network failure, timeout, a 5xx that
 * never reached `httpClient`'s JSON parsing) is transient and worth one
 * retry with backoff. `mutate` calls default to zero retries regardless —
 * an unintended double-submit (e.g. placing an order twice) is worse than a
 * user pressing "retry" themselves.
 */
const isRetriableError = (error: unknown): boolean => {
  if (error instanceof ApiError) {
    return error.status >= 500;
  }
  return true;
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      gcTime: 5 * 60_000,
      retry: (failureCount, error) =>
        failureCount < 2 && isRetriableError(error),
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
});
