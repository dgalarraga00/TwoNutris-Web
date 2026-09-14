import { describe, expect, it } from "vitest";
import { requiresNutritionConsult } from "./guards";

describe("requiresNutritionConsult", () => {
  it("returns false when none of the flags are declared", () => {
    expect(
      requiresNutritionConsult({
        pregnant: false,
        lactating: false,
        hasRelevantPathology: false,
      }),
    ).toBe(false);
  });

  it.each([
    ["pregnant", { pregnant: true, lactating: false, hasRelevantPathology: false }],
    ["lactating", { pregnant: false, lactating: true, hasRelevantPathology: false }],
    [
      "hasRelevantPathology",
      { pregnant: false, lactating: false, hasRelevantPathology: true },
    ],
  ] as const)("returns true when %s is declared", (_name, input) => {
    expect(requiresNutritionConsult(input)).toBe(true);
  });

  it("returns true when more than one flag is declared", () => {
    expect(
      requiresNutritionConsult({
        pregnant: true,
        lactating: true,
        hasRelevantPathology: false,
      }),
    ).toBe(true);
  });
});
