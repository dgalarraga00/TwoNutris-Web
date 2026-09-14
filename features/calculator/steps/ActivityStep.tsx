"use client";

import { ACTIVITY_LEVEL_OPTIONS, type ActivityLevel } from "@/lib/nutrition/activity";

export interface ActivityStepProps {
  value: ActivityLevel | null;
  onSelect: (level: ActivityLevel) => void;
}

/** Step 3: activity level — the fixed 5-value table matching the backend enum. */
export function ActivityStep({ value, onSelect }: ActivityStepProps) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-2 font-ibrand text-lg text-leaf">
        ¿Qué tan activo eres?
      </legend>
      {ACTIVITY_LEVEL_OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          aria-pressed={value === option.value}
          onClick={() => onSelect(option.value)}
          className={`rounded-xl border-2 px-4 py-3 text-left font-poppins text-sm font-medium ${
            value === option.value
              ? "border-leaf bg-leaf-light/40 text-leaf-dark"
              : "border-leaf/10 bg-white text-leaf/80 hover:border-leaf/30"
          }`}
        >
          {option.label}
        </button>
      ))}
    </fieldset>
  );
}
