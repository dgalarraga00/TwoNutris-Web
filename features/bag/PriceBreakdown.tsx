import { Card } from "@/components/ui/Card";
import { formatCents, type BagPriceBreakdown } from "@/lib/pricing/bagPricing";

export interface PriceBreakdownProps {
  breakdown: BagPriceBreakdown;
}

/**
 * Pure presentational running-total display. Extracted out of
 * `UpsellsScreen` to keep that screen under the ~150-line cap.
 *
 * Purely client-side arithmetic (see `lib/pricing/bagPricing.ts`), so there
 * is no loading/error/empty state for the total itself — it is always
 * instantly derivable from the current draft plus (F9+) an already-resolved
 * coupon preview. The 4 mandatory UI states for the coupon CALL ITSELF are
 * `CouponDisclosure`'s concern, not this component's — this component only
 * ever renders a settled `breakdown`.
 *
 * `discountCents` (F9): rendered as a removable-looking negative row right
 * under "Bolsa" whenever a coupon discount is applied (0 in F7's bag/
 * upsells screens, which never pass a discount).
 */
export function PriceBreakdown({ breakdown }: PriceBreakdownProps) {
  return (
    <Card padding="sm" className="font-poppins text-sm">
      <dl className="flex flex-col gap-1">
        <Row label="Bolsa" cents={breakdown.bagPriceCents} />
        {breakdown.discountCents > 0 && (
          <div className="flex justify-between text-leaf-check">
            <dt>Descuento</dt>
            <dd>-{formatCents(breakdown.discountCents)}</dd>
          </div>
        )}
        {breakdown.doubleProteinCents > 0 && (
          <Row label="Doble proteína" cents={breakdown.doubleProteinCents} />
        )}
        {breakdown.snacksCents > 0 && <Row label="Snacks" cents={breakdown.snacksCents} />}
        <Row label="IVA (15%)" cents={breakdown.taxCents} />
        <div className="mt-2 flex justify-between border-t border-leaf/10 pt-2 text-base font-semibold text-leaf">
          <dt>Total</dt>
          <dd>{formatCents(breakdown.totalCents)}</dd>
        </div>
      </dl>
    </Card>
  );
}

function Row({ label, cents }: { label: string; cents: number }) {
  return (
    <div className="flex justify-between text-leaf/60">
      <dt>{label}</dt>
      <dd>{formatCents(cents)}</dd>
    </div>
  );
}
