"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
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
 * Funnel navigation (final integration unit): "Siguiente" continues to
 * `/registro` — the first screen that requests an account (spec: account
 * MUST NOT be requested before this step).
 */
export function UpsellsScreen() {
  const router = useRouter();
  const customerKind = usePurchaseDraftStore((state) => state.customerKind);
  const doubleProtein = usePurchaseDraftStore((state) => state.doubleProtein);
  const setDoubleProtein = usePurchaseDraftStore((state) => state.setDoubleProtein);
  const snackQuantity = usePurchaseDraftStore((state) => state.snackQuantity);
  const setSnackQuantity = usePurchaseDraftStore((state) => state.setSnackQuantity);
  const portionSize = usePurchaseDraftPortionSize();

  const breakdown = computeBagTotal({ portionSize, doubleProtein, snackQuantity });

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 bg-cream p-4 md:p-6">
      <h1 className="font-ibrand text-2xl text-leaf md:text-3xl">Complementos</h1>

      {customerKind === "individual" && (
        <label className="flex items-center justify-between rounded-2xl border border-leaf/10 bg-white p-4">
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

      <Button onClick={() => router.push("/registro")}>Siguiente</Button>
    </div>
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
