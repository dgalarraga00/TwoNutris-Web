"use client";

import { usePurchaseDraftStore } from "@/stores/purchaseDraftStore";
import type { CustomerKind } from "@/lib/pricing/bagPricing";

const OPTIONS: readonly { value: CustomerKind; label: string }[] = [
  { value: "individual", label: "Para mí" },
  { value: "group", label: "Para mi equipo" },
];

/**
 * GAP PLACEHOLDER, not a real landing screen (flagged in apply-progress
 * risks): the spec's actual first funnel step — "¿para ti o para tu
 * equipo?" — has never been built by any earlier unit (F0-F6). This toggle
 * exists only so the GROUP path is reachable/testable from this bag screen
 * ahead of that real entry point. It intentionally does nothing more than
 * flip `customerKind` on the shared draft store.
 */
export function CustomerKindToggle() {
  const customerKind = usePurchaseDraftStore((state) => state.customerKind);
  const setCustomerKind = usePurchaseDraftStore((state) => state.setCustomerKind);

  return (
    <div
      role="radiogroup"
      aria-label="Tipo de cliente"
      className="inline-flex gap-1 rounded-full bg-leaf/5 p-1 font-poppins text-sm"
    >
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={customerKind === option.value}
          onClick={() => setCustomerKind(option.value)}
          className={`rounded-full px-4 py-1.5 font-medium transition ${
            customerKind === option.value
              ? "bg-white text-leaf shadow"
              : "text-leaf/50"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
