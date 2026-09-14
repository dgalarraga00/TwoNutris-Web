import { describe, expect, it } from "vitest";
import { bmr, tdee } from "./mifflin";
import { activityMultiplierFor } from "./activity";

describe("bmr", () => {
  it("computes the Mifflin-St Jeor BMR for a male reference case", () => {
    // Hand-checked: 10*70 + 6.25*175 - 5*30 + 5 = 700 + 1093.75 - 150 + 5
    const result = bmr({ sex: "male", weightKg: 70, heightCm: 175, age: 30 });
    expect(result).toBeCloseTo(1648.75, 5);
  });

  it("computes the Mifflin-St Jeor BMR for a female reference case", () => {
    // Hand-checked: 10*60 + 6.25*165 - 5*25 - 161 = 600 + 1031.25 - 125 - 161
    const result = bmr({ sex: "female", weightKg: 60, heightCm: 165, age: 25 });
    expect(result).toBeCloseTo(1345.25, 5);
  });

  it("the male/female formulas differ by exactly 166 (the +5 / -161 offset)", () => {
    const shared = { weightKg: 65, heightCm: 170, age: 40 };
    const male = bmr({ sex: "male", ...shared });
    const female = bmr({ sex: "female", ...shared });
    expect(male - female).toBeCloseTo(166, 5);
  });
});

describe("tdee", () => {
  it("multiplies BMR by the activity multiplier", () => {
    const bmrValue = bmr({ sex: "male", weightKg: 70, heightCm: 175, age: 30 });
    const result = tdee(bmrValue, activityMultiplierFor("moderate"));
    // 1648.75 * 1.55 = 2555.5625
    expect(result).toBeCloseTo(2555.5625, 5);
  });

  it("returns exactly BMR when the multiplier is 1", () => {
    expect(tdee(1500, 1)).toBe(1500);
  });
});
