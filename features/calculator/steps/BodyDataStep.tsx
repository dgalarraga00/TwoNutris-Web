"use client";

import { TextField } from "@/components/ui/TextField";
import type { Sex } from "@/lib/nutrition/mifflin";
import type { CalculatorFormState } from "../types";

type BodyDataFields = Pick<CalculatorFormState, "sex" | "weightKg" | "heightCm" | "age">;

export interface BodyDataStepProps {
  value: BodyDataFields;
  onChange: (patch: Partial<BodyDataFields>) => void;
}

const SEX_OPTIONS: readonly { value: Sex; label: string }[] = [
  { value: "female", label: "Mujer" },
  { value: "male", label: "Hombre" },
];

/**
 * Step 2: sex + body data. `sex` is required by the Mifflin-St Jeor formula
 * but is asked ONLY here — never sent to the backend or persisted.
 */
export function BodyDataStep({ value, onChange }: BodyDataStepProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-ibrand text-lg text-leaf">Tus datos</h2>

      <fieldset className="flex gap-3">
        <legend className="mb-1 font-poppins text-sm text-leaf/60">Sexo</legend>
        {SEX_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            aria-pressed={value.sex === option.value}
            onClick={() => onChange({ sex: option.value })}
            className={`flex-1 rounded-xl border-2 px-4 py-2 font-poppins text-sm font-medium ${
              value.sex === option.value
                ? "border-leaf bg-leaf-light/40 text-leaf-dark"
                : "border-leaf/10 bg-white text-leaf/80"
            }`}
          >
            {option.label}
          </button>
        ))}
      </fieldset>

      <TextField
        label="Peso (kg)"
        id="calculator-weight-kg"
        type="number"
        inputMode="decimal"
        min={0}
        value={value.weightKg}
        onChange={(e) => onChange({ weightKg: e.target.value })}
      />

      <TextField
        label="Estatura (cm)"
        id="calculator-height-cm"
        type="number"
        inputMode="decimal"
        min={0}
        value={value.heightCm}
        onChange={(e) => onChange({ heightCm: e.target.value })}
      />

      <TextField
        label="Edad"
        id="calculator-age"
        type="number"
        inputMode="numeric"
        min={0}
        value={value.age}
        onChange={(e) => onChange({ age: e.target.value })}
      />
    </div>
  );
}
