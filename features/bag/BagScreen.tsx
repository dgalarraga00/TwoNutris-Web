"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  usePurchaseDraftPortionSize,
  usePurchaseDraftStore,
} from "@/stores/purchaseDraftStore";
import { MEAL_BAG_BASE_PRICE_CENTS, PORTION_SIZE_LABEL, formatCents } from "@/lib/pricing/bagPricing";
import { CustomerKindToggle } from "./CustomerKindToggle";
import { CouponDisclosure } from "./CouponDisclosure";

/**
 * Bag screen (F7, task 5.5): shows the resolved LOW/MEDIUM/HIGH tier and its
 * price. This is purely INFORMATIONAL for individual customers — the tier
 * is derived from their calculator goal, never a free-pick UI (confirmed
 * decision) — and always MEDIUM for group, also not choosable.
 *
 * `CouponDisclosure` is rendered here unwired (`onValidate` left
 * `undefined`) — see that component's own docstring for why
 * `POST /api/coupons/validate` cannot be called from this pre-account
 * screen.
 *
 * Funnel navigation (final integration unit): "Siguiente" continues to
 * `/complementos` — this screen has no form to submit, so it's a plain
 * navigation action, not a submit handler.
 */
export function BagScreen() {
  const router = useRouter();
  const customerKind = usePurchaseDraftStore((state) => state.customerKind);
  const portionSize = usePurchaseDraftPortionSize();
  const bagPriceCents = MEAL_BAG_BASE_PRICE_CENTS[portionSize];

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 bg-cream p-4 md:p-6">
      <h1 className="font-ibrand text-2xl text-leaf md:text-3xl">Tu bolsa</h1>

      {/*
        TODO(gap): stand-in for the real "¿para ti o para tu equipo?"
        landing-page choice — the spec's actual first funnel step, not yet
        built by any earlier unit. See apply-progress risk report.
      */}
      <CustomerKindToggle />

      <Card>
        <p className="font-poppins text-sm text-leaf/60">
          {customerKind === "group"
            ? "Tu equipo siempre recibe la porción Media."
            : "Según tu objetivo, tu porción es:"}
        </p>
        <p className="mt-1 font-ibrand text-lg text-leaf">
          {PORTION_SIZE_LABEL[portionSize]}
        </p>
        <p className="mt-2 font-ibrand text-2xl text-leaf">
          {formatCents(bagPriceCents)}
        </p>
      </Card>

      <CouponDisclosure />

      <Button onClick={() => router.push("/complementos")}>Siguiente</Button>
    </div>
  );
}
