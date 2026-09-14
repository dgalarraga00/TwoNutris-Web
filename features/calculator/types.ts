import type { ActivityLevel } from "@/lib/nutrition/activity";
import type { Sex } from "@/lib/nutrition/mifflin";

/**
 * Same `goal` values/shape as the real backend `NutritionProfile.goal`
 * field (obs #332 point 4) — this screen runs before login/account
 * creation and never calls `GET/POST /api/me/profile`, but keeping the
 * union identical avoids a translation layer if a later unit reuses it.
 */
export type Goal = "lose_weight" | "improve_health" | "gain_muscle";

export interface GoalOption {
  value: Goal;
  label: string;
  /** Shown under the option once selected — purely informative, no numbers implied. */
  hint: string;
}

export const GOAL_OPTIONS: readonly GoalOption[] = [
  {
    value: "lose_weight",
    label: "Bajar de peso",
    hint: "Este objetivo funciona mejor acompañado de actividad física regular.",
  },
  {
    value: "improve_health",
    label: "Mejorar mi salud",
    hint: "Un buen punto de partida si querés comer mejor sin un objetivo específico de peso.",
  },
  {
    value: "gain_muscle",
    label: "Ganar músculo",
    hint: "Recordá que para este objetivo es clave complementar con entrenamiento de fuerza regular.",
  },
];

/** The default `goal` used when the customer skips the calculator entirely —
 * resolves to the MEDIUM/$120 tier via the same goal→tier fallback every
 * other "no profile yet" case already uses (orders/services.py::
 * resolve_meal_pack_tier()). Not a new business rule, just reusing the
 * existing default. */
export const SKIPPED_DEFAULT_GOAL: Goal = "improve_health";

/**
 * The wizard's in-memory form state. `sex` is asked ONLY here and is never
 * sent to the backend or persisted anywhere (obs #332 point 4) — it lives
 * only in this component tree's state and is discarded once the wizard
 * unmounts. Numeric fields are kept as raw strings while editing so the
 * input can be empty/partial; `CalculatorWizard` parses them for the actual
 * BMR/TDEE computation.
 */
export interface CalculatorFormState {
  goal: Goal | null;
  sex: Sex | null;
  weightKg: string;
  heightCm: string;
  age: string;
  activityLevel: ActivityLevel | null;
  pregnant: boolean;
  lactating: boolean;
  hasRelevantPathology: boolean;
  /** True once the customer clicks "Omitir por ahora" on the goal step. */
  skipped: boolean;
}

export const INITIAL_CALCULATOR_FORM_STATE: CalculatorFormState = {
  goal: null,
  sex: null,
  weightKg: "",
  heightCm: "",
  age: "",
  activityLevel: null,
  pregnant: false,
  lactating: false,
  hasRelevantPathology: false,
  skipped: false,
};
