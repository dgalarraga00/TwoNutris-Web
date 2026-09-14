import type { ReactNode } from "react";
import { ApiError } from "@/lib/http/errors";

/** The pieces of a TanStack `useQuery(...)` result this component needs. */
export interface AsyncBoundaryProps<TData> {
  isPending: boolean;
  isError: boolean;
  error?: unknown;
  data: TData | undefined;
  refetch: () => void;
  /** True when `data` loaded successfully but represents "nothing to show". */
  isEmpty?: (data: TData) => boolean;
  loadingFallback?: ReactNode;
  emptyFallback?: ReactNode;
  /** Render-prop: receives the loaded, non-empty `data`. */
  children: (data: TData) => ReactNode;
}

const DefaultLoadingFallback = () => (
  <div role="status" className="flex items-center justify-center p-8">
    <span className="sr-only">Cargando…</span>
    <span
      aria-hidden="true"
      className="h-6 w-6 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
  </div>
);

const errorDetail = (error: unknown): string =>
  error instanceof ApiError
    ? error.detail
    : "Ocurrió un error inesperado. Intenta de nuevo.";

const ErrorState = ({
  error,
  refetch,
}: {
  error: unknown;
  refetch: () => void;
}) => (
  <div role="alert" className="flex flex-col items-center gap-3 p-8 text-center">
    <p>{errorDetail(error)}</p>
    <button type="button" onClick={refetch}>
      Reintentar
    </button>
  </div>
);

const DefaultEmptyFallback = () => (
  <div className="p-8 text-center text-sm text-muted-foreground">
    No hay nada que mostrar.
  </div>
);

/**
 * Maps a TanStack Query result onto the app's 4 mandatory UI states —
 * Loading / Error+retry / Empty / Success — so features never hand-branch
 * on `isPending`/`isError` themselves.
 */
export const AsyncBoundary = <TData,>({
  isPending,
  isError,
  error,
  data,
  refetch,
  isEmpty,
  loadingFallback,
  emptyFallback,
  children,
}: AsyncBoundaryProps<TData>) => {
  if (isPending) {
    return <>{loadingFallback ?? <DefaultLoadingFallback />}</>;
  }

  if (isError) {
    return <ErrorState error={error} refetch={refetch} />;
  }

  if (data !== undefined && isEmpty?.(data)) {
    return <>{emptyFallback ?? <DefaultEmptyFallback />}</>;
  }

  return <>{children(data as TData)}</>;
};
