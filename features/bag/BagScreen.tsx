"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  usePurchaseDraftPortionSize,
  usePurchaseDraftStore,
} from "@/stores/purchaseDraftStore";
import { MEAL_BAG_BASE_PRICE_CENTS, PORTION_SIZE_LABEL, formatCents } from "@/lib/pricing/bagPricing";
import { CouponDisclosure } from "./CouponDisclosure";

/**
 * Bag screen (F7, task 5.5): shows the resolved LOW/MEDIUM/HIGH tier and its
 * price. This is purely INFORMATIONAL — the customer already chose
 * individual/group at `/empezar` (`CustomerKindStep`), and for an
 * individual the tier is derived from their calculator goal — never a
 * free-pick UI here. Bug fix (live feedback): this screen used to also
 * render `CustomerKindToggle`, a placeholder built before `/empezar`
 * existed to make the group path reachable/testable; it let the customer
 * re-answer "¿para ti o para tu equipo?" a second time and silently
 * overwrite the real choice already made, with no relation to the
 * calculator path they may have already completed. Removed along with the
 * now-dead `CustomerKindToggle.tsx`.
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
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 p-4 md:p-6">
      <h1 className="font-ibrand text-2xl text-leaf md:text-3xl">Tu bolsa</h1>

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
