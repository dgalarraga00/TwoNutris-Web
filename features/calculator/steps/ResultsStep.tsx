"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { GOAL_OPTIONS, type Goal } from "../types";

export interface ResultsStepProps {
  goal: Goal;
  tdeeKcal: number;
}

/**
 * Step 5: results. Shows ONLY the TDEE (maintenance-calorie) estimate,
 * labeled as informative/non-prescriptive per spec. Deliberately does NOT
 * compute or display a goal-adjusted target number — no per-goal
 * deficit/surplus kcal value has ever been defined by the business for this
 * project; `goal` is shown as context only.
 *
 * Funnel navigation (final integration unit): the "Continuar" button here
 * is the wizard's only continuation trigger on this step — added here
 * rather than in `CalculatorWizard.tsx` itself to stay under that file's
 * ~150-line SRP cap, since this step already owns its own render tree and
 * `CalculatorWizard` renders no footer buttons on the results step at all.
 */
export function ResultsStep({ goal, tdeeKcal }: ResultsStepProps) {
  const router = useRouter();
  const goalLabel = GOAL_OPTIONS.find((option) => option.value === goal)?.label ?? goal;

  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border border-leaf/10 bg-white p-6 text-center">
      <h2 className="font-ibrand text-lg text-leaf">
        Tu requerimiento calórico estimado
      </h2>
      <p className="font-ibrand text-4xl text-leaf">{Math.round(tdeeKcal)} kcal/día</p>
      <p className="font-poppins text-sm text-leaf/70">Objetivo: {goalLabel}</p>
      <p className="font-poppins text-xs text-leaf/50">
        Este resultado es solo una estimación informativa, no un diagnóstico ni una
        prescripción médica o nutricional. Para un plan personalizado, consulta con
        nuestro equipo de nutrición.
      </p>
      <Button onClick={() => router.push("/bolsa")}>Continuar</Button>
    </div>
  );
}
