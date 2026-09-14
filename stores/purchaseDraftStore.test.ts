// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from "vitest";
import { usePurchaseDraftStore } from "./purchaseDraftStore";

beforeEach(() => {
  sessionStorage.clear();
  usePurchaseDraftStore.getState().reset();
});

describe("purchaseDraftStore — defaults", () => {
  it("defaults customerKind to individual, doubleProtein to false, snackQuantity to 0", () => {
    const state = usePurchaseDraftStore.getState();
    expect(state.customerKind).toBe("individual");
    expect(state.goal).toBeNull();
    expect(state.doubleProtein).toBe(false);
    expect(state.snackQuantity).toBe(0);
    expect(state.couponCode).toBeNull();
  });

  it("never exposes a `sex` field on the store's state", () => {
    const state = usePurchaseDraftStore.getState();
    expect(state).not.toHaveProperty("sex");
  });
});

describe("purchaseDraftStore — GROUP double-protein guard (defense-in-depth)", () => {
  it("does not let setDoubleProtein(true) stick while customerKind is group", () => {
    usePurchaseDraftStore.getState().setCustomerKind("group");
    usePurchaseDraftStore.getState().setDoubleProtein(true);

    expect(usePurchaseDraftStore.getState().doubleProtein).toBe(false);
  });

  it("still allows setDoubleProtein(true) for an individual customer", () => {
    usePurchaseDraftStore.getState().setCustomerKind("individual");
    usePurchaseDraftStore.getState().setDoubleProtein(true);

    expect(usePurchaseDraftStore.getState().doubleProtein).toBe(true);
  });

  it("force-clears a previously-true doubleProtein when switching to group", () => {
    usePurchaseDraftStore.getState().setCustomerKind("individual");
    usePurchaseDraftStore.getState().setDoubleProtein(true);
    expect(usePurchaseDraftStore.getState().doubleProtein).toBe(true);

    usePurchaseDraftStore.getState().setCustomerKind("group");
    expect(usePurchaseDraftStore.getState().doubleProtein).toBe(false);
  });

  it("allows doubleProtein=true again after switching back to individual", () => {
    usePurchaseDraftStore.getState().setCustomerKind("group");
    usePurchaseDraftStore.getState().setDoubleProtein(true);
    expect(usePurchaseDraftStore.getState().doubleProtein).toBe(false);

    usePurchaseDraftStore.getState().setCustomerKind("individual");
    usePurchaseDraftStore.getState().setDoubleProtein(true);
    expect(usePurchaseDraftStore.getState().doubleProtein).toBe(true);
  });
});

describe("purchaseDraftStore — setCalculatorResult (bug fix, found during F9)", () => {
  it("stores goal + body data together so RegisterForm can create a real NutritionProfile", () => {
    usePurchaseDraftStore.getState().setCalculatorResult({
      goal: "gain_muscle",
      weightKg: "80",
      heightCm: "180",
      age: "30",
      activityLevel: "active",
    });

    const state = usePurchaseDraftStore.getState();
    expect(state.goal).toBe("gain_muscle");
    expect(state.weightKg).toBe("80");
    expect(state.heightCm).toBe("180");
    expect(state.age).toBe("30");
    expect(state.activityLevel).toBe("active");
  });

  it("leaves body data null when only setGoal() is called (the skip path)", () => {
    usePurchaseDraftStore.getState().setGoal("improve_health");

    const state = usePurchaseDraftStore.getState();
    expect(state.goal).toBe("improve_health");
    expect(state.weightKg).toBeNull();
    expect(state.activityLevel).toBeNull();
  });
});

describe("purchaseDraftStore — other setters", () => {
  it("updates goal, snackQuantity, and couponCode independently", () => {
    usePurchaseDraftStore.getState().setGoal("gain_muscle");
    usePurchaseDraftStore.getState().setSnackQuantity(10);
    usePurchaseDraftStore.getState().setCouponCode("VERANO10");

    const state = usePurchaseDraftStore.getState();
    expect(state.goal).toBe("gain_muscle");
    expect(state.snackQuantity).toBe(10);
    expect(state.couponCode).toBe("VERANO10");
  });

  it("reset() restores every field to its initial default", () => {
    usePurchaseDraftStore.getState().setCustomerKind("group");
    usePurchaseDraftStore.getState().setGoal("lose_weight");
    usePurchaseDraftStore.getState().setSnackQuantity(20);
    usePurchaseDraftStore.getState().setCouponCode("X");

    usePurchaseDraftStore.getState().reset();

    const state = usePurchaseDraftStore.getState();
    expect(state.customerKind).toBe("individual");
    expect(state.goal).toBeNull();
    expect(state.doubleProtein).toBe(false);
    expect(state.snackQuantity).toBe(0);
    expect(state.couponCode).toBeNull();
  });
});
