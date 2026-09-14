import type { Goal } from "@/features/calculator/types";

/**
 * Client-side mirror of the REAL backend pricing constants and math
 * (`backend/orders/pricing.py::compute_totals()`, `orders/services.py`'s
 * goal→tier mapping — both read directly this session). No endpoint exposes
 * these pre-account (F7 runs before login), so they are replicated here as
 * known, published business constants, NOT invented numbers:
 *
 * - MEAL bag base price: LOW=$120, MEDIUM=$120, HIGH=$135 (LOW/MEDIUM being
 *   identical is a real, deliberate business rule, not a bug).
 * - Double protein: $25 flat, pack-level, purchase-time opt-in only.
 * - Snacks: $2/unit, sold only in bundles of 5/10/20 credits.
 * - IVA: 15%, applied to the post-discount subtotal INCLUDING both add-ons —
 *   this file has no coupon/discount wiring (see `CouponDisclosure`), so the
 *   "post-discount subtotal" here is simply bagPrice + addOns (discount=0).
 *
 * All money is tracked in integer CENTS to avoid floating-point drift,
 * matching `Decimal`'s exactness on the backend; `formatCents()` is the only
 * place a cents value becomes a display string.
 */

export type PortionSize = "low" | "medium" | "high";
export type CustomerKind = "individual" | "group";
export type SnackQuantity = 0 | 5 | 10 | 20;

export const MEAL_BAG_BASE_PRICE_CENTS: Readonly<Record<PortionSize, number>> = {
  low: 12000,
  medium: 12000,
  high: 13500,
};

export const PORTION_SIZE_LABEL: Readonly<Record<PortionSize, string>> = {
  low: "Porción Baja",
  medium: "Porción Media",
  high: "Porción Alta",
};

/**
 * Client-side mirror of `backend/catalog/portions.py::PORTION_RANK` (read
 * directly this session, F11 task 6.5). `payments/services.py::resolve_
 * portion_change_charge()` compares this RANK, never `base_price`, to
 * decide whether a plan change is a downgrade — MEDIUM and LOW cost the
 * same $120, so a price comparison alone would miss that MEDIUM→LOW is
 * still a downgrade (obs #334.1). Every rank at-or-below the current one
 * is hidden from "cambiar mi plan" while the pack still has remaining
 * credit (obs #336.1) — see `features/profile/usePortionOptions.ts`.
 */
export const PORTION_RANK: Readonly<Record<PortionSize, number>> = {
  low: 0,
  medium: 1,
  high: 2,
};

export const ALL_PORTION_SIZES: readonly PortionSize[] = ["low", "medium", "high"];

export const DOUBLE_PROTEIN_PRICE_CENTS = 2500;
export const SNACK_UNIT_PRICE_CENTS = 200;
export const SNACK_QUANTITY_OPTIONS: readonly SnackQuantity[] = [0, 5, 10, 20];
export const IVA_RATE = 0.15;

/**
 * Same goal→tier mapping as `orders/services.py::resolve_meal_pack_tier()`/
 * `portion_size_for_goal()` (obs #332 point 6, design §C "single source of
 * truth"). GROUP customers are ALWAYS MEDIUM, no HIGH ever — they have no
 * goal at all in the real system, so `goal` is ignored entirely for group.
 */
export function resolvePortionSize(customerKind: CustomerKind, goal: Goal | null): PortionSize {
  if (customerKind === "group") return "medium";

  switch (goal) {
    case "gain_muscle":
      return "high";
    case "lose_weight":
      return "low";
    case "improve_health":
    default:
      return "medium";
  }
}

export interface BagPriceBreakdown {
  bagPriceCents: number;
  /** Coupon discount against `bagPriceCents` ONLY (F9+). Always 0 when no
   * coupon is applied — F7's bag/upsells screens never pass this. */
  discountCents: number;
  doubleProteinCents: number;
  snacksCents: number;
  /** (bagPrice - discount) + both add-ons, BEFORE tax. */
  subtotalCents: number;
  taxCents: number;
  totalCents: number;
}

export interface ComputeBagTotalInput {
  portionSize: PortionSize;
  doubleProtein: boolean;
  snackQuantity: SnackQuantity;
  /**
   * Coupon discount in cents against the bag's base price ONLY — mirrors
   * `orders/pricing.py::coupon_discount()`'s own rule ("never sees
   * double_protein_amount/snacks_amount"). Defaults to 0 (F7 has no live
   * coupon call; F9's checkout screen is the first real caller, via
   * {@link computeCouponDiscountCents}).
   */
  discountCents?: number;
}

/**
 * Byte-for-byte the same ordering as `compute_totals()`: the coupon
 * discount reduces the base price FIRST, add-ons join the discounted base
 * BEFORE tax, and IVA is the only tax computation, applied once to the full
 * subtotal (design Decision 7's STEP 1 → STEP 2 → STEP 3 ordering).
 */
export function computeBagTotal({
  portionSize,
  doubleProtein,
  snackQuantity,
  discountCents = 0,
}: ComputeBagTotalInput): BagPriceBreakdown {
  const bagPriceCents = MEAL_BAG_BASE_PRICE_CENTS[portionSize];
  const discountedBaseCents = Math.max(0, bagPriceCents - discountCents);
  const doubleProteinCents = doubleProtein ? DOUBLE_PROTEIN_PRICE_CENTS : 0;
  const snacksCents = snackQuantity * SNACK_UNIT_PRICE_CENTS;
  const subtotalCents = discountedBaseCents + doubleProteinCents + snacksCents;
  // Math.round() rounds .5 away from zero for positive inputs, matching the
  // backend's `ROUND_HALF_UP` for every value this function ever produces.
  const taxCents = Math.round(subtotalCents * IVA_RATE);
  const totalCents = subtotalCents + taxCents;

  return {
    bagPriceCents,
    discountCents,
    doubleProteinCents,
    snacksCents,
    subtotalCents,
    taxCents,
    totalCents,
  };
}

/**
 * Client-side mirror of `orders/pricing.py::coupon_discount()` (read
 * directly this session): percent-off is computed against `basePriceCents`
 * only and rounded half-up to the cent; fixed-amount-off is used as-is;
 * `extra_credits` coupons pass both `null` and correctly yield 0 (they
 * never alter price — the bonus credits are granted server-side at
 * `open_batches()` time instead). The result is capped at `basePriceCents`
 * either way, matching the backend's own `min(raw, base_price)`.
 */
export function computeCouponDiscountCents(
  basePriceCents: number,
  { percentOff, amountOff }: { percentOff: number | null; amountOff: number | null },
): number {
  let raw = 0;
  if (percentOff !== null) {
    raw = Math.round((basePriceCents * percentOff) / 100);
  } else if (amountOff !== null) {
    raw = Math.round(amountOff * 100);
  }
  return Math.min(raw, basePriceCents);
}

export function formatCents(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}
