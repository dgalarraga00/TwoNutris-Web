"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BrandedScreen } from "@/components/BrandedScreen";
import { Button } from "@/components/ui/Button";
import { useMe } from "@/lib/api/me";
import {
  usePurchaseDraftPortionSize,
  usePurchaseDraftStore,
} from "@/stores/purchaseDraftStore";
import {
  SNACK_QUANTITY_OPTIONS,
  computeBagTotal,
  formatCents,
  type SnackQuantity,
} from "@/lib/pricing/bagPricing";
import { PriceBreakdown } from "./PriceBreakdown";

/**
 * Upsells screen (F7, task 5.5). Double-protein toggle defaults OFF with
 * ZERO exceptions — including a HIGH-tier draft, the case the spec calls
 * out by name — this component never pre-checks it under any condition.
 *
 * GROUP customers cannot enable double-protein at all: the control is
 * HIDDEN entirely (not disabled/greyed-out) when `customerKind === "group"`.
 * This is defense-in-depth UI-level omission only — the real enforcement is
 * the backend's `DoubleProteinNotAvailableForGroup` guard, plus the store's
 * own `setDoubleProtein()` guard (see `stores/purchaseDraftStore.ts`).
 *
 * Funnel navigation: "Siguiente" continues to `/registro` for a brand-new
 * visitor (spec: account MUST NOT be requested before this step) — but a
 * CUSTOMER WHO ALREADY HAS AN ACCOUNT and reached this screen (e.g. buying
 * an extra/renewal pack while logged in) must go straight to `/checkout`
 * instead, never back through account creation. `useMe()` (already the
 * app's one established way to detect auth state, per `AppShell`) tells us
 * which case this is — bug fix, live-feedback: this previously hardcoded
 * `/registro` unconditionally.
 */
export function UpsellsScreen() {
  const router = useRouter();
  const { data: me } = useMe();
  const customerKind = usePurchaseDraftStore((state) => state.customerKind);
  const doubleProtein = usePurchaseDraftStore((state) => state.doubleProtein);
  const setDoubleProtein = usePurchaseDraftStore((state) => state.setDoubleProtein);
  const snackQuantity = usePurchaseDraftStore((state) => state.snackQuantity);
  const setSnackQuantity = usePurchaseDraftStore((state) => state.setSnackQuantity);
  const portionSize = usePurchaseDraftPortionSize();

  const breakdown = computeBagTotal({ portionSize, doubleProtein, snackQuantity });

  return (
    <BrandedScreen>
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 p-4 md:p-6">
        <Image src="/icons/logo.png" alt="TwoNutris" width={140} height={47} className="mx-auto" priority />
        <h1 className="font-ibrand text-2xl text-leaf md:text-3xl">Complementos</h1>

      {customerKind === "individual" && (
        <div className="rounded-2xl border border-leaf/10 bg-white p-4">
          <label className="flex items-center justify-between">
            <span className="font-poppins text-sm font-medium text-leaf">
              Doble proteína (+{formatCents(2500)})
            </span>
            <input
              type="checkbox"
              checked={doubleProtein}
              onChange={(event) => setDoubleProtein(event.target.checked)}
              className="h-4 w-4 accent-leaf"
            />
          </label>
          <p className="mt-2 font-poppins text-xs text-leaf/60">
            Duplica la porción de proteína (mismo tipo del plato, +120g) en
            cada uno de tus pedidos mientras dure esta bolsa de créditos —
            no se elige plato por plato, es un ajuste único para toda la
            bolsa.
          </p>
        </div>
      )}

      <fieldset className="rounded-2xl border border-leaf/10 bg-white p-4">
        <legend className="px-1 font-poppins text-sm font-medium text-leaf">Snacks</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {SNACK_QUANTITY_OPTIONS.map((quantity) => (
            <SnackOption
              key={quantity}
              quantity={quantity}
              selected={snackQuantity === quantity}
              onSelect={setSnackQuantity}
            />
          ))}
        </div>
      </fieldset>

      <PriceBreakdown breakdown={breakdown} />

        <Button onClick={() => router.push(me ? "/checkout" : "/registro")}>Siguiente</Button>
      </div>
    </BrandedScreen>
  );
}

function SnackOption({
  quantity,
  selected,
  onSelect,
}: {
  quantity: SnackQuantity;
  selected: boolean;
  onSelect: (quantity: SnackQuantity) => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(quantity)}
      className={`rounded-full border-2 px-4 py-1.5 font-poppins text-sm font-medium ${
        selected
          ? "border-leaf bg-leaf text-cream"
          : "border-leaf/20 text-leaf/70"
      }`}
    >
      {quantity === 0 ? "Ninguno" : `${quantity} créditos`}
    </button>
  );
}
