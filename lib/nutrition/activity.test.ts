import { describe, expect, it } from "vitest";
import { ACTIVITY_LEVEL_OPTIONS, activityMultiplierFor } from "./activity";

describe("ACTIVITY_LEVEL_OPTIONS", () => {
  it("has exactly the 5 values/order/labels from customers/choices.py::ActivityLevel", () => {
    expect(ACTIVITY_LEVEL_OPTIONS.map((o) => o.value)).toEqual([
      "sedentary",
      "light",
      "moderate",
      "active",
      "very_active",
    ]);
    expect(ACTIVITY_LEVEL_OPTIONS.map((o) => o.label)).toEqual([
      "Sedentario",
      "Actividad ligera",
      "Actividad moderada",
      "Activo",
      "Muy activo",
    ]);
  });
});

describe("activityMultiplierFor", () => {
  it.each([
    ["sedentary", 1.2],
    ["light", 1.375],
    ["moderate", 1.55],
    ["active", 1.725],
    ["very_active", 1.9],
  ] as const)("maps %s to the fixed multiplier %d", (level, expected) => {
    expect(activityMultiplierFor(level)).toBe(expected);
  });
});
