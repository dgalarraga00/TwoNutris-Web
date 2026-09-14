import type { Metadata } from "next";
import { Suspense } from "react";
import { LoginScreen } from "@/features/auth/LoginScreen";

export const metadata: Metadata = {
  title: "Iniciar sesión | TwoNutris",
};

/**
 * `middleware.ts` (F2) already redirects unauthenticated visitors of a
 * JWT-gated route to `/entrar?next=...` — this is that exact route.
 * Ungrouped folder, matching `/menu`/`/empezar`/`/bolsa`/`/complementos`'s
 * own precedent (no `(public)` route group exists in this repo yet).
 * `LoginScreen` is a client wrapper (needs `useRouter`/`useSearchParams`)
 * so this page can stay a Server Component and keep exporting `metadata`.
 * `useSearchParams()` requires a `<Suspense>` boundary for Next.js to
 * statically prerender this route — without it, `npm run build` fails.
 */
export default function EntrarPage() {
  return (
    <Suspense>
      <LoginScreen />
    </Suspense>
  );
}
