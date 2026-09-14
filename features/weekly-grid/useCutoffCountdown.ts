"use client";

import { useEffect, useState } from "react";

const GUAYAQUIL_TZ = "America/Guayaquil";

/**
 * `cutoff_at` is a real UTC instant (e.g. `"2026-09-14T18:00:00Z"`), unlike
 * `MenuDay.date`'s plain calendar date (see `dateLabels.ts`) — it must be
 * displayed converted to `America/Guayaquil`, reusing the exact
 * `Intl.DateTimeFormat({ timeZone })` technique `app/menu/page.tsx::
 * getWeekRange()` established for this repo (design/launch instruction:
 * reuse that technique, don't reinvent timezone handling).
 *
 * The formatted label is a pure function of `cutoffAtIso` alone, so it is
 * SSR-safe (identical on server and client). The live countdown itself is
 * NOT — "now" legitimately differs between server-render time and
 * client-hydration time — so `remainingMs`/the live `isPastCutoff` start as
 * `null`/`false` and only become real once mounted client-side (one tick
 * per second), the standard hydration-safe pattern for a live timer.
 */
const cutoffFormatter = new Intl.DateTimeFormat("es-EC", {
  timeZone: GUAYAQUIL_TZ,
  weekday: "short",
  day: "numeric",
  month: "long",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export interface CutoffCountdown {
  /** e.g. "lun, 14 de septiembre, 13:00" in America/Guayaquil — SSR-safe. */
  formattedCutoff: string;
  /** `null` until mounted client-side (avoids a hydration mismatch). */
  remainingMs: number | null;
  /** Live, tick-driven refinement of the DTO's own `is_past_cutoff` (which
   * can go stale while the page stays open — same staleness concern as
   * `is_sold_out`). `false` until mounted, matching `remainingMs`. */
  isPastCutoff: boolean;
}

export function useCutoffCountdown(cutoffAtIso: string): CutoffCountdown {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const cutoffMs = new Date(cutoffAtIso).getTime();
  const formattedCutoff = cutoffFormatter.format(new Date(cutoffAtIso));

  if (now === null) {
    return { formattedCutoff, remainingMs: null, isPastCutoff: false };
  }

  return {
    formattedCutoff,
    remainingMs: Math.max(0, cutoffMs - now),
    isPastCutoff: now >= cutoffMs,
  };
}
