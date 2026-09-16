"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { BrandedScreen } from "@/components/BrandedScreen";
import { Button } from "@/components/ui/Button";
import { activityMultiplierFor } from "@/lib/nutrition/activity";
import { requiresNutritionConsult } from "@/lib/nutrition/guards";
import { bmr, tdee } from "@/lib/nutrition/mifflin";
import { usePurchaseDraftStore } from "@/stores/purchaseDraftStore";
import { ActivityStep } from "./steps/ActivityStep";
import { BodyDataStep } from "./steps/BodyDataStep";
import { GoalStep } from "./steps/GoalStep";
import { HealthDeclarationStep } from "./steps/HealthDeclarationStep";
import { ResultsStep } from "./steps/ResultsStep";
import { SkippedSummary } from "./steps/SkippedSummary";
import {
  INITIAL_CALCULATOR_FORM_STATE,
  SKIPPED_DEFAULT_GOAL,
  type CalculatorFormState,
} from "./types";

const STEPS = ["goal", "body", "activity", "health", "results"] as const;
type StepId = (typeof STEPS)[number];

const isStepComplete = (step: StepId, form: CalculatorFormState): boolean => {
  switch (step) {
    case "goal":
      return form.goal !== null;
    case "body":
      return (
        form.sex !== null &&
        form.weightKg.trim() !== "" &&
        form.heightCm.trim() !== "" &&
        form.age.trim() !== ""
      );
    case "activity":
      return form.activityLevel !== null;
    case "health":
      return !requiresNutritionConsult(form);
    case "results":
      return true;
  }
};

/**
 * 100% client-side, no backend calls (obs #332 point 4). Orchestrates the
 * 5-step funnel: goal → sex+body data → activity level → health declaration
 * (can short-circuit to `<WhatsAppExitCta/>` via `HealthDeclarationStep`) →
 * results. "Omitir por ahora" on the goal step short-circuits everything to
 * `<SkippedSummary/>` instead (no body data means no TDEE to show). Kept
 * under the ~150-line cap by delegating each step's markup to `./steps/*`.
 */
export function CalculatorWizard() {
  const [stepIndex, setStepIndex] = useState(0);
  const [form, setForm] = useState<CalculatorFormState>(INITIAL_CALCULATOR_FORM_STATE);

  const step = STEPS[stepIndex];
  const isHealthStepTripped = step === "health" && requiresNutritionConsult(form);

  const patch = (fields: Partial<CalculatorFormState>) =>
    setForm((prev) => ({ ...prev, ...fields }));

  const tdeeKcal = useMemo(() => {
    if (form.sex === null || form.activityLevel === null) return null;
    const weightKg = Number(form.weightKg);
    const heightCm = Number(form.heightCm);
    const age = Number(form.age);
    if (![weightKg, heightCm, age].every(Number.isFinite)) return null;
    const bmrValue = bmr({ sex: form.sex, weightKg, heightCm, age });
    return tdee(bmrValue, activityMultiplierFor(form.activityLevel));
  }, [form.sex, form.activityLevel, form.weightKg, form.heightCm, form.age]);

  const goNext = () => setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

  const handleSkip = () => {
    patch({ goal: SKIPPED_DEFAULT_GOAL, skipped: true });
    // No body data to persist — MEDIUM's server-side fallback (no profile
    // at all) is already correct for a skipped calculator, so only `goal`
    // needs to reach the shared draft, matching resolvePortionSize()'s own
    // "no goal -> MEDIUM" behavior.
    usePurchaseDraftStore.getState().setGoal(SKIPPED_DEFAULT_GOAL);
  };

  // Bug fix (found during F9): push the REAL body data into the shared
  // purchase draft once a genuine (non-skipped) result is computed, so
  // `RegisterForm` can later create a real `NutritionProfile` — without
  // this, an individual customer's previewed LOW/HIGH tier silently
  // resolved to MEDIUM server-side at actual purchase time (obs #351-era
  // gap; see this store's own docstring). `sex` is deliberately excluded.
  useEffect(() => {
    if (step !== "results" || form.goal === null || form.activityLevel === null) return;
    usePurchaseDraftStore.getState().setCalculatorResult({
      goal: form.goal,
      weightKg: form.weightKg,
      heightCm: form.heightCm,
      age: form.age,
      activityLevel: form.activityLevel,
    });
  }, [step, form.goal, form.weightKg, form.heightCm, form.age, form.activityLevel]);

  if (form.skipped) {
    return (
      <BrandedScreen>
        <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 p-4">
          <Image src="/icons/logo.png" alt="TwoNutris" width={140} height={47} className="mx-auto" priority />
          <SkippedSummary />
        </div>
      </BrandedScreen>
    );
  }

  return (
    <BrandedScreen>
      <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-6 p-4">
        <Image src="/icons/logo.png" alt="TwoNutris" width={140} height={47} className="mx-auto" priority />
        <div className="flex items-center gap-2" role="progressbar" aria-valuenow={stepIndex + 1} aria-valuemin={1} aria-valuemax={STEPS.length}>
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-leaf/10">
          <div
            className="h-full rounded-full bg-amber transition-all"
            style={{ width: `${((stepIndex + 1) / STEPS.length) * 100}%` }}
          />
        </div>
        <span className="whitespace-nowrap font-poppins text-xs text-leaf/50">
          {stepIndex + 1}/{STEPS.length}
        </span>
      </div>

      {step === "goal" && (
        <GoalStep value={form.goal} onSelect={(goal) => patch({ goal })} onSkip={handleSkip} />
      )}
      {step === "body" && <BodyDataStep value={form} onChange={patch} />}
      {step === "activity" && (
        <ActivityStep
          value={form.activityLevel}
          onSelect={(activityLevel) => patch({ activityLevel })}
        />
      )}
      {step === "health" && <HealthDeclarationStep value={form} onChange={patch} />}
      {step === "results" && form.goal !== null && tdeeKcal !== null && (
        <ResultsStep goal={form.goal} tdeeKcal={tdeeKcal} />
      )}

      {!isHealthStepTripped && step !== "results" && (
        <div className="flex justify-between">
          <Button
            variant="ghost"
            onClick={goBack}
            disabled={stepIndex === 0}
            className="disabled:opacity-0"
          >
            Atrás
          </Button>
          <Button onClick={goNext} disabled={!isStepComplete(step, form)}>
            {step === "health" ? "Calcular" : "Siguiente"}
          </Button>
        </div>
      )}
      </div>
    </BrandedScreen>
  );
}
