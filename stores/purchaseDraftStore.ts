import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { ActivityLevel } from "@/lib/nutrition/activity";
import type { Goal } from "@/features/calculator/types";
import {
  resolvePortionSize,
  type CustomerKind,
  type PortionSize,
  type SnackQuantity,
} from "@/lib/pricing/bagPricing";

/**
 * Pre-account purchase draft (F7). Backed by `sessionStorage`, NOT
 * `localStorage` — this draft is intentionally scoped to one browser
 * session/tab and must not survive across sessions indefinitely (spec: F7
 * bag/upsells).
 *
 * Deliberately does NOT include `sex` anywhere (obs #332 point 4): `sex` is
 * asked only inside `CalculatorWizard`'s own component tree, is
 * memory-only, and is discarded once that wizard unmounts — it must never
 * reach this or any other persisted store.
 *
 * `portionSize` is NOT stored as its own field — it is fully derived from
 * `customerKind` + `goal` via `resolvePortionSize()` (single source of
 * truth, same mapping the backend uses), so it can never drift out of sync
 * with those two persisted fields. Use the `usePurchaseDraftPortionSize()`
 * selector hook below to read it.
 *
 * `weightKg`/`heightCm`/`age`/`activityLevel` (bug fix, found during F9):
 * the calculator (F5) computes its estimate 100% client-side and never
 * sent this body data anywhere, including here — meaning no
 * `NutritionProfile` ever got created, so `POST /api/packs` always fell
 * back to MEDIUM server-side regardless of what an individual customer's
 * calculator previewed (a real tier/price mismatch bug, not the
 * intentional "sex never persisted" pattern). These 4 fields now flow
 * from `CalculatorWizard` into this store via `setCalculatorResult()`, so
 * `RegisterForm` can create the real profile right after account
 * creation. `sex` is the ONLY calculator input that still never reaches
 * this store — that omission remains deliberate (obs #332 point 4).
 */
export interface PurchaseDraftState {
  customerKind: CustomerKind;
  goal: Goal | null;
  weightKg: string | null;
  heightCm: string | null;
  age: string | null;
  activityLevel: ActivityLevel | null;
  doubleProtein: boolean;
  snackQuantity: SnackQuantity;
  couponCode: string | null;
  setCustomerKind: (kind: CustomerKind) => void;
  setGoal: (goal: Goal | null) => void;
  /** Called once by `CalculatorWizard` when it reaches a real (non-skipped)
   * result — carries the body data a `NutritionProfile` needs. */
  setCalculatorResult: (data: {
    goal: Goal;
    weightKg: string;
    heightCm: string;
    age: string;
    activityLevel: ActivityLevel;
  }) => void;
  /**
   * Defense-in-depth guard (alongside the backend's own
   * `DoubleProteinNotAvailableForGroup` rejection): while
   * `customerKind === "group"`, this setter silently coerces to `false`
   * instead of throwing — a stale toggle click racing a customer-kind
   * switch should never crash the render tree, it should just not "stick".
   * A dev-only console warning surfaces the ignored attempt for debugging.
   */
  setDoubleProtein: (value: boolean) => void;
  setSnackQuantity: (quantity: SnackQuantity) => void;
  setCouponCode: (code: string | null) => void;
  reset: () => void;
}

const INITIAL_DRAFT = {
  customerKind: "individual" as CustomerKind,
  goal: null as Goal | null,
  weightKg: null as string | null,
  heightCm: null as string | null,
  age: null as string | null,
  activityLevel: null as ActivityLevel | null,
  doubleProtein: false,
  snackQuantity: 0 as SnackQuantity,
  couponCode: null as string | null,
};

export const usePurchaseDraftStore = create<PurchaseDraftState>()(
  persist(
    (set) => ({
      ...INITIAL_DRAFT,

      setCustomerKind: (kind) =>
        set((state) => ({
          customerKind: kind,
          // Switching TO group force-clears any previously-set individual
          // double-protein selection, so the guard below never needs to
          // "catch" a value that was set before the switch happened.
          doubleProtein: kind === "group" ? false : state.doubleProtein,
        })),

      setGoal: (goal) => set({ goal }),

      setCalculatorResult: ({ goal, weightKg, heightCm, age, activityLevel }) =>
        set({ goal, weightKg, heightCm, age, activityLevel }),

      setDoubleProtein: (value) =>
        set((state) => {
          if (state.customerKind === "group" && value) {
            if (process.env.NODE_ENV !== "production") {
              // eslint-disable-next-line no-console
              console.warn(
                "[purchaseDraftStore] Ignored setDoubleProtein(true) while customerKind is \"group\" — GROUP can never enable double protein (backend: DoubleProteinNotAvailableForGroup).",
              );
            }
            return { doubleProtein: false };
          }
          return { doubleProtein: value };
        }),

      setSnackQuantity: (quantity) => set({ snackQuantity: quantity }),
      setCouponCode: (code) => set({ couponCode: code }),
      reset: () => set({ ...INITIAL_DRAFT }),
    }),
    {
      name: "tw-purchase-draft",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({
        customerKind: state.customerKind,
        goal: state.goal,
        weightKg: state.weightKg,
        heightCm: state.heightCm,
        age: state.age,
        activityLevel: state.activityLevel,
        doubleProtein: state.doubleProtein,
        snackQuantity: state.snackQuantity,
        couponCode: state.couponCode,
      }),
    },
  ),
);

/** Derived selector: the resolved LOW/MEDIUM/HIGH tier for the current draft. */
export function usePurchaseDraftPortionSize(): PortionSize {
  const customerKind = usePurchaseDraftStore((state) => state.customerKind);
  const goal = usePurchaseDraftStore((state) => state.goal);
  return resolvePortionSize(customerKind, goal);
}
