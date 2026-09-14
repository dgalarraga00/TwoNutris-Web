import { describe, expect, it } from "vitest";
import {
  computeBagTotal,
  formatCents,
  resolvePortionSize,
} from "./bagPricing";

describe("resolvePortionSize", () => {
  it("maps individual goals to the same tiers as resolve_meal_pack_tier()", () => {
    expect(resolvePortionSize("individual", "gain_muscle")).toBe("high");
    expect(resolvePortionSize("individual", "lose_weight")).toBe("low");
    expect(resolvePortionSize("individual", "improve_health")).toBe("medium");
    expect(resolvePortionSize("individual", null)).toBe("medium");
  });

  it("always resolves GROUP to MEDIUM regardless of any goal value", () => {
    expect(resolvePortionSize("group", "gain_muscle")).toBe("medium");
    expect(resolvePortionSize("group", "lose_weight")).toBe("medium");
    expect(resolvePortionSize("group", null)).toBe("medium");
  });
});

describe("computeBagTotal — worked examples mirroring orders/pricing.py::compute_totals()", () => {
  it("MEDIUM bag + double protein, no snacks: base=120, dp=25 -> subtotal 145.00 / tax 21.75 / total 166.75", () => {
    const result = computeBagTotal({
      portionSize: "medium",
      doubleProtein: true,
      snackQuantity: 0,
    });

    expect(result.bagPriceCents).toBe(12000);
    expect(result.doubleProteinCents).toBe(2500);
    expect(result.snacksCents).toBe(0);
    expect(result.subtotalCents).toBe(14500);
    expect(result.taxCents).toBe(2175);
    expect(result.totalCents).toBe(16675);
    expect(formatCents(result.totalCents)).toBe("$166.75");
  });

  it("no bag, 10-credit snack bundle only: snacks=20 -> subtotal 20.00 / tax 3.00 / total 23.00 (add-on-only math check)", () => {
    // This uses computeBagTotal's own add-on math in isolation (no real
    // "$0 bag" product exists) purely to reproduce the backend's own
    // documented worked example verbatim as a cross-check.
    const snacksOnly = computeBagTotal({
      portionSize: "low",
      doubleProtein: false,
      snackQuantity: 10,
    });
    // subtract the bag price back out to isolate the add-on-only figures
    const subtotalWithoutBag = snacksOnly.subtotalCents - snacksOnly.bagPriceCents;
    const taxOnAddOnsOnly = Math.round(subtotalWithoutBag * 0.15);

    expect(subtotalWithoutBag).toBe(2000);
    expect(taxOnAddOnsOnly).toBe(300);
  });

  it("LOW bag, no add-ons: base=120 -> subtotal 120.00 / tax 18.00 / total 138.00", () => {
    const result = computeBagTotal({
      portionSize: "low",
      doubleProtein: false,
      snackQuantity: 0,
    });

    expect(result.subtotalCents).toBe(12000);
    expect(result.taxCents).toBe(1800);
    expect(result.totalCents).toBe(13800);
  });

  it("HIGH bag + double protein + 20-credit snacks: base=135, dp=25, snacks=40", () => {
    const result = computeBagTotal({
      portionSize: "high",
      doubleProtein: true,
      snackQuantity: 20,
    });

    expect(result.bagPriceCents).toBe(13500);
    expect(result.doubleProteinCents).toBe(2500);
    expect(result.snacksCents).toBe(4000);
    expect(result.subtotalCents).toBe(20000);
    expect(result.taxCents).toBe(3000);
    expect(result.totalCents).toBe(23000);
    expect(formatCents(result.totalCents)).toBe("$230.00");
  });
});

describe("formatCents", () => {
  it("formats whole and fractional cents as a 2-decimal dollar string", () => {
    expect(formatCents(12000)).toBe("$120.00");
    expect(formatCents(1)).toBe("$0.01");
    expect(formatCents(0)).toBe("$0.00");
  });
});
