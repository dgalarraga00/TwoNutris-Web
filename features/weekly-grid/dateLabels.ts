/**
 * `MenuDay.date` is a plain `"YYYY-MM-DD"` calendar date (no time, no
 * offset) — formatting it always in `timeZone: "UTC"` after parsing as UTC
 * midnight is deterministic across server and client regardless of the
 * runtime's local timezone, the same technique `app/menu/page.tsx::
 * getWeekRange()` already uses for its own already-resolved calendar dates.
 * This is intentionally NOT the same technique `useCutoffCountdown` uses for
 * `cutoff_at` (a real instant with its own timezone, needing
 * `America/Guayaquil` to display correctly) — a plain date has no instant to
 * convert, so `UTC` is the correct, mismatch-free choice here.
 */
const dayLabelFormatter = new Intl.DateTimeFormat("es-EC", {
  timeZone: "UTC",
  weekday: "long",
  day: "numeric",
  month: "short",
});

export function formatDayLabel(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return dayLabelFormatter.format(date);
}
