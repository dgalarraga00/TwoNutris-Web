"use client";

import { useRouter } from "next/navigation";
import { usePurchaseDraftStore } from "@/stores/purchaseDraftStore";
import type { CustomerKind } from "@/lib/pricing/bagPricing";

/**
 * The real "¿para ti o para tu equipo?" funnel entry point — the gap flagged
 * in F7's risk report (`features/bag/CustomerKindToggle.tsx` was a
 * placeholder stand-in for exactly this screen, built because no earlier
 * unit had this yet). Sets `purchaseDraftStore.customerKind`, which
 * `usePurchaseDraftPortionSize()` and the GROUP double-protein guard both
 * already key off of — no other wiring needed for this choice to take
 * effect downstream.
 *
 * Funnel navigation (final integration unit): individual → `/calculadora`,
 * group → `/bolsa` directly (GROUP skips the calculator entirely, per spec).
 * Navigation is based on the SAME value just written to the store, not a
 * stale read, so a fast double-click can never route on the wrong choice.
 */
interface CustomerKindCard {
  value: CustomerKind;
  label: string;
  description: string;
}

const CARDS: readonly CustomerKindCard[] = [
  {
    value: "individual",
    label: "Individual",
    description:
      "Un plan hecho a tu medida: usá la calculadora para que tu porción y precio se ajusten a tu objetivo.",
  },
  {
    value: "group",
    label: "Familia / Equipo",
    description:
      "Comidas para todo tu grupo: porción y precio estándar para todos, sin calculadora.",
  },
];

export function CustomerKindStep() {
  const router = useRouter();
  const customerKind = usePurchaseDraftStore((state) => state.customerKind);
  const setCustomerKind = usePurchaseDraftStore((state) => state.setCustomerKind);

  const handleSelect = (kind: CustomerKind): void => {
    setCustomerKind(kind);
    router.push(kind === "individual" ? "/calculadora" : "/bolsa");
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-6 bg-cream p-4">
      <h1 className="text-center text-3xl font-ibrand text-leaf md:text-4xl">
        ¿Para quién es tu plan?
      </h1>

      <div role="radiogroup" aria-label="Tipo de cliente" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CARDS.map((card) => (
          <button
            key={card.value}
            type="button"
            role="radio"
            aria-checked={customerKind === card.value}
            onClick={() => handleSelect(card.value)}
            className={`flex flex-col items-center gap-2 rounded-3xl border-2 p-6 text-center transition ${
              customerKind === card.value
                ? "border-leaf bg-leaf-light/40"
                : "border-leaf/10 bg-white hover:border-leaf/30"
            }`}
          >
            <span className="font-ibrand text-lg text-leaf">{card.label}</span>
            <span className="font-poppins text-xs text-leaf/70">{card.description}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
