/**
 * Mifflin-St Jeor BMR/TDEE math — zero React/DOM dependencies, fully
 * unit-testable in isolation.
 *
 * Scope note (per explicit product-scope instruction for this unit): this
 * module computes and exposes only the TDEE (maintenance-calorie) estimate.
 * No per-goal calorie deficit/surplus adjustment (e.g. "-500 kcal for weight
 * loss") is computed here — no such number has ever been defined anywhere in
 * this project's specs/design/business decisions. The customer's `goal` is
 * shown as context by the results screen, never used to adjust this number.
 *
 * `sex` is asked ONLY by the calculator UI and is used exclusively as an
 * input to this formula — it is never sent to the backend or persisted
 * (obs #332 point 4).
 */

export type Sex = "male" | "female";

export interface BmrInput {
  sex: Sex;
  weightKg: number;
  heightCm: number;
  age: number;
}

/**
 * Mifflin-St Jeor basal metabolic rate, in kcal/day.
 *
 * Male:   10 * weightKg + 6.25 * heightCm - 5 * age + 5
 * Female: 10 * weightKg + 6.25 * heightCm - 5 * age - 161
 */
export const bmr = ({ sex, weightKg, heightCm, age }: BmrInput): number => {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return sex === "male" ? base + 5 : base - 161;
};

/** Total Daily Energy Expenditure (maintenance calories) = BMR * activity multiplier. */
export const tdee = (bmrValue: number, activityMultiplier: number): number =>
  bmrValue * activityMultiplier;
