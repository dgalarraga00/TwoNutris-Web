/**
 * Activity-level → Mifflin-St Jeor multiplier table.
 *
 * Fixed by business decision (obs #332 point 5), matching the backend's own
 * `customers/choices.py::ActivityLevel` enum exactly — same 5 values, same
 * order, same Spanish labels. This calculator never sends `activity_level`
 * to the backend (it runs before login/account creation, see obs #332 point
 * 4), but the values/shape are kept identical so a future authenticated
 * screen (F11 profile/plan-change) can reuse this same union without a
 * translation layer.
 */
export type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very_active";

export interface ActivityLevelOption {
  value: ActivityLevel;
  label: string;
  multiplier: number;
}

export const ACTIVITY_LEVEL_OPTIONS: readonly ActivityLevelOption[] = [
  { value: "sedentary", label: "Sedentario", multiplier: 1.2 },
  { value: "light", label: "Actividad ligera", multiplier: 1.375 },
  { value: "moderate", label: "Actividad moderada", multiplier: 1.55 },
  { value: "active", label: "Activo", multiplier: 1.725 },
  { value: "very_active", label: "Muy activo", multiplier: 1.9 },
];

const MULTIPLIER_BY_ACTIVITY_LEVEL: Record<ActivityLevel, number> =
  Object.fromEntries(
    ACTIVITY_LEVEL_OPTIONS.map((option) => [option.value, option.multiplier]),
  ) as Record<ActivityLevel, number>;

/** Looks up the fixed multiplier for a given activity level. */
export const activityMultiplierFor = (level: ActivityLevel): number =>
  MULTIPLIER_BY_ACTIVITY_LEVEL[level];
