import { AppNav } from "@/components/AppNav";
import { WeekGrid } from "@/features/weekly-grid/WeekGrid";

/**
 * `/semana` — the weekly grid (F10, task 6.1). Ungrouped route, matching
 * F6-F9's own established convention (no `(app)` route group folder exists
 * yet; `middleware.ts` already gates this exact path via its own
 * `/semana/:path*` matcher entry). `<AppNav/>` (final integration unit) is
 * mounted here and on `/perfil` only — the two authenticated, non-linear
 * screens reachable after the funnel completes.
 */
export default function SemanaPage() {
  return (
    <main className="min-h-screen bg-cream px-4 py-8 md:px-8 md:py-10">
      <div className="mx-auto max-w-6xl">
        <AppNav />
        <h1 className="mb-8 mt-6 font-ibrand text-3xl text-leaf md:text-4xl">Tu semana</h1>
        <WeekGrid />
      </div>
    </main>
  );
}
