"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nuestro Menú", href: "/menu" },
  { label: "Planes", href: "/#planes" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-cream"
      style={{
        boxShadow: "0 1px 0 rgba(20, 68, 0, 0.08), 0 4px 16px rgba(20, 68, 0, 0.06)",
      }}
    >
      <nav className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* ── Logo ──────────────────────────────────────────── */}
        <Link href="/" className="flex items-center flex-shrink-0 group">
          <Image
            src="/icons/logo.png"
            alt="twonutris"
            width={148}
            height={48}
            className="transition-opacity duration-300 group-hover:opacity-80 mix-blend-multiply"
            priority
          />
        </Link>

        {/* ── Nav Links (desktop) ───────────────────────────── */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-base transition-all duration-200 relative group no-underline font-ibrand opacity-90 hover:opacity-100 focus-visible:opacity-100 text-leaf"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-full bg-amber" />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── CTA + Hamburger ──────────────────────────────── */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.twonutris.net/registrate"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-cta-wiggle hidden md:flex items-center gap-2 text-sm font-bold px-6 py-3 rounded-full cursor-pointer no-underline font-ibrand bg-amber text-leaf"
            style={{
              boxShadow: "0 4px 16px rgba(255, 176, 0, 0.35)",
            }}
          >
            Pedir ahora
          </a>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg border-0 cursor-pointer bg-transparent"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-5 h-0.5 rounded-full transition-all duration-300 bg-leaf"
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ─────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className="md:hidden overflow-hidden transition-all duration-300 backdrop-blur-[16px]"
        style={{
          maxHeight: mobileOpen ? "300px" : "0",
          backgroundColor: "rgba(255, 251, 228, 0.97)",
        }}
      >
        <ul className="flex flex-col list-none m-0 p-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="block px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 no-underline font-ibrand text-leaf"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <a
              href="https://www.twonutris.net/registrate"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 rounded-full text-sm font-bold text-center no-underline font-ibrand bg-amber text-leaf"
            >
              Pedir ahora
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
