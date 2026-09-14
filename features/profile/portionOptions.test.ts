import { describe, expect, it } from "vitest";
import { resolveVisiblePortionOptions } from "./portionOptions";

describe("resolveVisiblePortionOptions", () => {
  it("HIGH-tier pack with credits hides MEDIUM and LOW", () => {
    expect(resolveVisiblePortionOptions("high", 8)).toEqual(["high"]);
  });

  it("MEDIUM-tier pack with credits hides LOW only", () => {
    expect(resolveVisiblePortionOptions("medium", 8)).toEqual(["medium", "high"]);
  });

  it("LOW-tier pack with credits shows every rank (nothing below LOW)", () => {
    expect(resolveVisiblePortionOptions("low", 8)).toEqual(["low", "medium", "high"]);
  });

  it("a zero-credit pack shows all 3 ranks regardless of current tier", () => {
    expect(resolveVisiblePortionOptions("high", 0)).toEqual(["low", "medium", "high"]);
  });

  it("a negative remaining value (defensive) also shows all 3 ranks", () => {
    expect(resolveVisiblePortionOptions("medium", -1)).toEqual(["low", "medium", "high"]);
  });
});
