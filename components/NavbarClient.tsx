"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nuestro Menú", href: "/menu" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
];

interface AuthUser {
  email: string;
  name: string | null;
}

function useAuthUser(): AuthUser | null {
  const [user, setUser] = useState<AuthUser | null>(null);

  useEffect(() => {
    const supabase = createClient();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        setUser({
          email: session.user.email ?? "",
          name:
            session.user.user_metadata?.full_name ??
            session.user.user_metadata?.name ??
            null,
        });
      } else {
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return user;
}

function useCartCount(): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function readCount() {
      try {
        const saved = localStorage.getItem("tw_cart");
        if (!saved) return setCount(0);
        const items: { quantity: number }[] = JSON.parse(saved);
        setCount(items.reduce((sum, i) => sum + i.quantity, 0));
      } catch {
        setCount(0);
      }
    }

    readCount();

    const handler = () => readCount();
    window.addEventListener("storage", handler);
    return () => window.removeEventListener("storage", handler);
  }, []);

  return count;
}

export function NavbarClient() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = useAuthUser();
  const cartCount = useCartCount();

  const displayName = user?.name ?? user?.email ?? null;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: "#FFFBE4",
        boxShadow:
          "0 1px 0 rgba(20, 68, 0, 0.08), 0 4px 16px rgba(20, 68, 0, 0.06)",
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* ── Logo ──────────────────────────────────────────── */}
        <a href="/" className="flex items-center flex-shrink-0 group">
          <Image
            src="/icons/logo.png"
            alt="twonutris"
            width={148}
            height={48}
            className="transition-opacity duration-300 group-hover:opacity-80 mix-blend-multiply"
            priority
          />
        </a>

        {/* ── Nav Links (desktop) ───────────────────────────── */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-base transition-all duration-200 relative group no-underline font-ibrand"
                style={{ color: "#144400", opacity: 0.9 }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "1")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.opacity = "0.9")
                }
              >
                {label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "#FFB000" }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* ── Right side: auth + CTA + hamburger ───────────── */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              {/* Nombre → dashboard */}
              <a
                href="/dashboard/pedidos"
                className="hidden md:flex items-center gap-2 text-sm font-semibold no-underline font-ibrand px-3 py-2 rounded-xl transition-colors hover:bg-[rgba(20,68,0,0.06)]"
                style={{ color: "#144400" }}
              >
                <span
                  className="flex items-center justify-center w-7 h-7 rounded-full text-xs font-bold flex-shrink-0"
                  style={{ backgroundColor: "#144400", color: "#FFFBE4" }}
                >
                  {(displayName?.[0] ?? "U").toUpperCase()}
                </span>
                <span className="max-w-[120px] truncate">{displayName}</span>
              </a>

              {/* Carrito → checkout */}
              <a
                href="/checkout"
                className="hidden md:flex items-center gap-1.5 relative px-3 py-2 rounded-xl transition-colors hover:bg-[rgba(20,68,0,0.06)] no-underline"
                style={{ color: "#144400" }}
                aria-label={`Carrito con ${cartCount} items`}
              >
                <ShoppingCart size={20} strokeWidth={2} />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-[10px] font-bold flex items-center justify-center"
                    style={{ backgroundColor: "#FFB000", color: "#144400" }}
                  >
                    {cartCount}
                  </span>
                )}
              </a>
            </>
          ) : (
            <>
              {/* Iniciar sesión */}
              <a
                href="/login"
                className="hidden md:flex items-center text-sm font-semibold no-underline font-ibrand px-4 py-2.5 rounded-full border transition-colors"
                style={{ color: "#144400", borderColor: "rgba(20,68,0,0.2)" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "#144400")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(20,68,0,0.2)")
                }
              >
                Iniciar sesión
              </a>

              {/* Pedir ahora */}
              <a
                href="/pedir"
                className="animate-cta-wiggle hidden md:flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-full cursor-pointer no-underline font-ibrand"
                style={{
                  backgroundColor: "#FFB000",
                  color: "#144400",
                  boxShadow: "0 4px 16px rgba(255, 176, 0, 0.35)",
                }}
              >
                Pedir ahora
              </a>
            </>
          )}

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg border-0 cursor-pointer bg-transparent"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Abrir menú"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-0.5 rounded-full transition-all duration-300"
                style={{ backgroundColor: "#144400" }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ─────────────────────────────────────── */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? "360px" : "0",
          backgroundColor: "rgba(255, 251, 228, 0.97)",
          backdropFilter: "blur(16px)",
        }}
      >
        <ul className="flex flex-col list-none m-0 p-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="block px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 no-underline font-ibrand"
                style={{ color: "#144400" }}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}

          {user ? (
            <>
              <li>
                <a
                  href="/dashboard/pedidos"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold no-underline font-ibrand"
                  style={{ color: "#144400" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <span
                    className="flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold flex-shrink-0"
                    style={{ backgroundColor: "#144400", color: "#FFFBE4" }}
                  >
                    {(displayName?.[0] ?? "U").toUpperCase()}
                  </span>
                  {displayName}
                </a>
              </li>
              <li>
                <a
                  href="/checkout"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold no-underline font-ibrand"
                  style={{ color: "#144400" }}
                  onClick={() => setMobileOpen(false)}
                >
                  <ShoppingCart size={16} />
                  Carrito{cartCount > 0 ? ` (${cartCount})` : ""}
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="mt-2">
                <a
                  href="/login"
                  className="block w-full py-3 rounded-full text-sm font-bold text-center no-underline font-ibrand border"
                  style={{ color: "#144400", borderColor: "rgba(20,68,0,0.3)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Iniciar sesión
                </a>
              </li>
              <li className="mt-1">
                <a
                  href="/pedir"
                  className="block w-full py-3 rounded-full text-sm font-bold text-center no-underline font-ibrand"
                  style={{ backgroundColor: "#FFB000", color: "#144400" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Pedir ahora
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
}
