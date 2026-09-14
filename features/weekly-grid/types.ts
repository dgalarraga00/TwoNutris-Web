/**
 * A resolved, ready-to-submit main+salad pairing (spec: credit-packs "every
 * MEAL line requires a paired side-salad"). `DishSlot`/`SaladPicker` only
 * ever produce a `DraftLine` once BOTH the main and its companion salad are
 * resolved — there is no way to add a main to a day's draft without a
 * salad, by construction, not by a submit-time check.
 *
 * Design-refinement pass (per-unit salad choice, user-confirmed, not a
 * guess): the SAME `menuDishId` can now appear in MULTIPLE draft lines for
 * one day — one per distinct salad the customer paired it with (e.g. 2
 * units with Ensalada A, 1 unit with Ensalada B). `id`
 * (`${menuDishId}-${saladDishId}`) is the real per-day uniqueness key, not
 * `menuDishId` alone. `quantity` is the unit count for that exact
 * main+salad pairing. Verified against the real backend
 * (`orders/api/serializers.py::OrderCreateSerializer.validate_lines()`,
 * `Plataforma_TW/backend`, lines 123-128): it only checks the lines list
 * isn't empty — no uniqueness/duplicate-dish constraint exists, so multiple
 * lines sharing `dish`/`dish_portion` with different `side_salad_dish`
 * values are already valid, unmodified backend behavior.
 */
export interface DraftLine {
  id: string;
  menuDishId: number;
  dishId: number;
  dishPortionId: number;
  dishName: string;
  saladDishId: number;
  saladPortionId: number;
  saladName: string;
  quantity: number;
}

/** Input shape for adding/incrementing a line — `id` is derived inside
 * `useDayDraft.addLine`, `quantity` always starts at 1 or increments by 1
 * via that same dedupe logic. */
export type NewDraftLine = Omit<DraftLine, "id" | "quantity">;

/** The real per-day uniqueness key for a `DraftLine` — same main dish +
 * same salad collapses into one line's `quantity`; a different salad for
 * the same main dish is a separate line. */
export const draftLineId = (menuDishId: number, saladDishId: number): string =>
  `${menuDishId}-${saladDishId}`;
