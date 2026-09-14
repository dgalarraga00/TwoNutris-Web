import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";
import { BagScreen } from "@/features/bag/BagScreen";

export const metadata: Metadata = {
  title: "Tu bolsa | TwoNutris",
};

/**
 * Ungrouped route (`app/bolsa`), matching the same convention F6 already
 * established for `/menu` — the design doc's `(public)/bolsa` route group
 * does not exist as a folder in this repo yet (see `middleware.ts`'s own
 * forward-reference note); the URL is identical either way since route
 * groups never affect the path.
 *
 * Wrapped in `AppShell` (design D9, order-flow-wizard Phase 2) — `/bolsa`
 * is the public pre-account funnel bag, so `AppShell`'s `useMe()` 401 path
 * degrades the account menu to a plain "Entrar" trigger here (orchestrator
 * resolution #2 in the design).
 */
export default function BolsaPage() {
  return (
    <AppShell>
      <BagScreen />
    </AppShell>
  );
}
