"use client";

import { GOAL_OPTIONS, type Goal } from "../types";

export interface GoalStepProps {
  value: Goal | null;
  onSelect: (goal: Goal) => void;
  onSkip: () => void;
}

/** Step 1: goal selection — determines the results screen's displayed range/context.
 * Shows a contextual hint under the selected option, and an "Omitir por ahora"
 * escape hatch for a customer who doesn't want to fill out the calculator. */
export function GoalStep({ value, onSelect, onSkip }: GoalStepProps) {
  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-2 font-ibrand text-lg text-leaf">
        ¿Cuál es tu objetivo?
      </legend>
      {GOAL_OPTIONS.map((option) => (
        <div key={option.value} className="flex flex-col gap-1.5">
          <button
            type="button"
            onClick={() => onSelect(option.value)}
            aria-pressed={value === option.value}
            className={`rounded-xl border-2 px-4 py-3 text-left font-poppins text-sm font-medium transition ${
              value === option.value
                ? "border-leaf bg-leaf-light/40 text-leaf-dark"
                : "border-leaf/10 bg-white text-leaf/80 hover:border-leaf/30"
            }`}
          >
            {option.label}
          </button>
          {value === option.value && (
            <p className="px-1 font-poppins text-xs text-leaf/60">{option.hint}</p>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={onSkip}
        className="mt-2 self-center font-poppins text-xs text-leaf/40 underline underline-offset-2 hover:text-leaf/70"
      >
        Omitir por ahora
      </button>
    </fieldset>
  );
}
