import { AppShell } from "@/components/AppShell";
import { WeekGrid } from "@/features/weekly-grid/WeekGrid";

/**
 * `/semana` — the weekly grid (F10, task 6.1). Ungrouped route, matching
 * F6-F9's own established convention (no `(app)` route group folder exists
 * yet; `middleware.ts` already gates this exact path via its own
 * `/semana/:path*` matcher entry). Wrapped in `AppShell` (design D9,
 * order-flow-wizard Phase 2) — replaces the old bare `<AppNav/>` mount.
 */
export default function SemanaPage() {
  return (
    <AppShell>
      <main className="min-h-screen bg-cream px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-8 font-ibrand text-3xl text-leaf md:text-4xl">Tu semana</h1>
          <WeekGrid />
        </div>
      </main>
    </AppShell>
  );
}
