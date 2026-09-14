"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logoutCustomer } from "@/lib/api/auth";
import { clearAccessToken } from "@/lib/http/tokenStore";
import { queryClient } from "@/lib/query/queryClient";

const LINKS = [
  { label: "Tu semana", href: "/semana" },
  { label: "Tu perfil", href: "/perfil" },
];

/**
 * Funnel navigation (final integration unit): persistent nav shown ONLY on
 * `/semana` and `/perfil` — the authenticated, non-linear part of the app
 * (mounted directly in each of those two `page.tsx` files, not in the root
 * layout, since every other route is pre-account).
 *
 * Logout mirrors `httpClient`'s own hard-logout sequence on a rejected
 * refresh (design obs #338 §E): clear the httpOnly refresh cookie via the
 * existing `/api/session/logout` route, drop the in-memory access token,
 * clear the TanStack Query cache so no stale authenticated data lingers,
 * then redirect to `/entrar`. The cookie-clear call is best-effort — a
 * customer must always be able to leave the authenticated area even if that
 * network call fails.
 */
export function AppNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async (): Promise<void> => {
    setLoggingOut(true);
    try {
      await logoutCustomer();
    } catch {
      // Best-effort: still log the customer out locally even if the
      // cookie-clear call itself fails (e.g. offline).
    } finally {
      clearAccessToken();
      queryClient.clear();
      router.push("/entrar");
    }
  };

  return (
    <nav className="mb-6 flex items-center justify-between rounded-full border border-leaf/10 bg-white px-5 py-3 font-poppins text-sm">
      <div className="flex gap-5">
        {LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
            className={
              pathname === href
                ? "font-ibrand font-bold text-leaf"
                : "text-leaf/50 hover:text-leaf"
            }
          >
            {label}
          </Link>
        ))}
      </div>
      <button
        type="button"
        onClick={() => void handleLogout()}
        disabled={loggingOut}
        className="text-leaf/50 underline underline-offset-2 hover:text-leaf disabled:opacity-50"
      >
        {loggingOut ? "Cerrando sesión..." : "Cerrar sesión"}
      </button>
    </nav>
  );
}
