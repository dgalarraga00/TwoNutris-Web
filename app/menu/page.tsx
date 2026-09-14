"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { MenuWeekPreview } from "@/components/MenuWeekPreview";

/* ── Helpers ────────────────────────────────────────────────────── */
function getWeekRange(): string {
  const tz = "America/Guayaquil";
  const now = new Date();

  // Extraemos Y/M/D + weekday en la TZ de Guayaquil para que SSR (UTC en Vercel)
  // y cliente (UTC-5) produzcan exactamente el mismo string y evitemos hydration mismatch.
  const dtf = new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
  });
  const parts = dtf.formatToParts(now);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const year = Number(get("year"));
  const month = Number(get("month"));
  const day = Number(get("day"));
  const weekday = get("weekday").toLowerCase(); // sun,mon,tue,wed,thu,fri,sat

  // Mapeamos al día de semana JS (0=Sun..6=Sat) sin depender de la TZ local del runtime.
  const weekdayMap: Record<string, number> = {
    sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6,
  };
  const dow = weekdayMap[weekday] ?? 0;

  // Reconstruimos un Date "ancla" usando UTC (sin TZ shift) para hacer aritmética estable.
  // Lo importante es que monday/saturday sean determinísticos respecto a la fecha de Guayaquil.
  const base = new Date(Date.UTC(year, month - 1, day));
  const diffToMonday = dow === 0 ? -6 : 1 - dow;
  const monday = new Date(base);
  monday.setUTCDate(base.getUTCDate() + diffToMonday);
  const saturday = new Date(monday);
  saturday.setUTCDate(monday.getUTCDate() + 5);

  // Formateamos en español usando UTC para que coincida con la fecha ya proyectada en Guayaquil.
  const fmt = new Intl.DateTimeFormat("es-EC", {
    timeZone: "UTC",
    day: "numeric",
    month: "long",
  });
  return `${fmt.format(monday)} — ${fmt.format(saturday)}`;
}

/* ── Página ─────────────────────────────────────────────────────── */
export default function MenuPage() {
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const weekRange = getWeekRange();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://home.twonutris.net/" },
              { "@type": "ListItem", position: 2, name: "Menú", item: "https://home.twonutris.net/menu" },
            ],
          }),
        }}
      />
      <Navbar />

      <main className="bg-white min-h-screen">

        {/* Header */}
        <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-4 text-center">
          <h1
            className="text-5xl md:text-6xl leading-tight mb-4 font-ibrand"
            style={{ color: "#144400" }}
          >
            Nuestro Menú
          </h1>
        </div>

        {/* Franja semana */}
        <div className="max-w-[1200px] mx-auto px-6 pb-8">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-base font-bold whitespace-nowrap font-poppins text-gray-900">
              Menú de la semana
            </span>
            <div className="flex-1 bg-gray-200 h-px" />
          </div>
          <p className="text-sm font-poppins text-gray-700">
            <strong>Platos disponibles solo esta semana.</strong>{" "}
            ¡Nueva carta cada sábado! &nbsp;·&nbsp; {weekRange}
          </p>
        </div>

        {/* Menú real (tabs + grid + modal), datos de GET /api/menu/current */}
        <div className="max-w-[1200px] mx-auto px-6 pb-24">
          <MenuWeekPreview />
        </div>

      </main>

      <Footer onManageCookies={() => setCookiesOpen(true)} />
      <CookieBanner open={cookiesOpen} onClose={() => setCookiesOpen(false)} />
    </>
  );
}
