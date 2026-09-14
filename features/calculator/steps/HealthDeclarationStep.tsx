"use client";

import { WhatsAppExitCta } from "@/components/WhatsAppExitCta";
import { requiresNutritionConsult } from "@/lib/nutrition/guards";
import type { CalculatorFormState } from "../types";

type HealthFields = Pick<
  CalculatorFormState,
  "pregnant" | "lactating" | "hasRelevantPathology"
>;

export interface HealthDeclarationStepProps {
  value: HealthFields;
  onChange: (patch: Partial<HealthFields>) => void;
}

const DECLARATIONS: readonly { key: keyof HealthFields; label: string }[] = [
  { key: "pregnant", label: "Estoy embarazada" },
  { key: "lactating", label: "Estoy en periodo de lactancia" },
  {
    key: "hasRelevantPathology",
    label:
      "Tengo una condición médica relevante (por ejemplo diabetes, enfermedad renal o un trastorno alimenticio)",
  },
];

/**
 * Step 4: the mandatory exit gate (spec: a declared pregnancy/lactation/
 * pathology exits the automatic flow entirely and offers a direct
 * nutrition-consult lead-capture instead). Short-circuits to
 * `<WhatsAppExitCta/>` the instant any flag becomes true — no extra click
 * needed to "continue" past it.
 */
export function HealthDeclarationStep({ value, onChange }: HealthDeclarationStepProps) {
  if (requiresNutritionConsult(value)) {
    return (
      <WhatsAppExitCta message="Por tu situación, te recomendamos hablar directo con nuestro equipo de nutrición antes de continuar con el cálculo automático." />
    );
  }

  return (
    <fieldset className="flex flex-col gap-3">
      <legend className="mb-2 font-ibrand text-lg text-leaf">
        Antes de calcular, cuéntanos
      </legend>
      {DECLARATIONS.map((item) => (
        <label key={item.key} className="flex items-start gap-3 font-poppins text-sm text-leaf/80">
          <input
            type="checkbox"
            checked={value[item.key]}
            onChange={(e) =>
              onChange({ [item.key]: e.target.checked } as Partial<HealthFields>)
            }
            className="mt-1 accent-leaf"
          />
          {item.label}
        </label>
      ))}
    </fieldset>
  );
}
