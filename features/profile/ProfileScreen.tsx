"use client";

import { Avatar } from "@/components/Avatar";
import { Card } from "@/components/ui/Card";
import { useMe } from "@/lib/api/me";
import { BalanceSection } from "./BalanceSection";
import { DeliveryHistorySection } from "./DeliveryHistorySection";
import { AddressesSection } from "./AddressesSection";
import { PortionOptionList } from "./PortionOptionList";

/**
 * F11 orchestrator (tasks 6.4-6.5), design-refinement pass: `/perfil` —
 * wallet balance, plan-change list, saved addresses, delivery/order
 * history. Each section owns its own query + 4-state rendering via
 * `AsyncBoundary`; this component is pure composition, no data-fetching of
 * its own. Sectioned with real `Card` primitives + generous `gap-8` between
 * sections (previously a flat stack of plain headings) — pure presentation,
 * zero change to any section's own data/business logic.
 */
export function ProfileScreen() {
  // `account-avatar` spec: the avatar MUST also appear on the "Mi cuenta"
  // screen. Same `useMe()` + fallback-name convention `AppShell`'s
  // `AccountMenu` already established — not re-derived differently here.
  const { data: me } = useMe();
  const displayName = me?.first_name?.trim() || me?.email || "Mi cuenta";

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8">
      <div className="flex items-center gap-4">
        <Avatar seed={me?.email ?? "mi-cuenta"} size={64} title={displayName} />
        <div className="flex min-w-0 flex-col">
          <h1 className="font-ibrand truncate text-2xl text-leaf">{displayName}</h1>
          {me?.email && <p className="truncate text-sm text-leaf/70">{me.email}</p>}
        </div>
      </div>

      <Card padding="lg" className="flex flex-col gap-4">
        <h2 className="font-ibrand text-xl text-leaf">Tu saldo</h2>
        <BalanceSection />
      </Card>

      <Card padding="lg">
        <PortionOptionList />
      </Card>

      <Card padding="lg" className="flex flex-col gap-4">
        <h2 className="font-ibrand text-xl text-leaf">Tus direcciones</h2>
        <AddressesSection />
      </Card>

      <Card padding="lg" className="flex flex-col gap-4">
        <h2 className="font-ibrand text-xl text-leaf">Historial de pedidos</h2>
        <DeliveryHistorySection />
      </Card>
    </div>
  );
}
