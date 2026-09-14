import { AppShell } from "@/components/AppShell";
import { ProfileScreen } from "@/features/profile/ProfileScreen";

/**
 * `/perfil` — F11, task 6.4. Ungrouped route, matching F6-F10's own
 * established convention; `middleware.ts` already gates this exact path
 * via its own `/perfil/:path*` matcher entry (added forward-looking by F2).
 * Wrapped in `AppShell` (design D9, order-flow-wizard Phase 2), mirroring
 * `/semana`'s own mount.
 */
export default function PerfilPage() {
  return (
    <AppShell>
      <main className="min-h-screen bg-cream px-4 py-8 md:px-8 md:py-10">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-ibrand text-3xl text-leaf md:text-4xl">Tu perfil</h1>
          <ProfileScreen />
        </div>
      </main>
    </AppShell>
  );
}
