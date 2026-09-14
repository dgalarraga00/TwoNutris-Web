"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

/**
 * Shown when the customer clicks "Omitir por ahora" on the goal step,
 * instead of the normal body/activity/health/results sequence — there is no
 * body data to compute a TDEE from. `goal` defaults to `SKIPPED_DEFAULT_GOAL`
 * ("improve_health"), which resolves to the MEDIUM/$120 tier via the same
 * fallback the real backend already uses for "no profile yet" — not a new
 * business rule invented here.
 *
 * Funnel navigation (final integration unit): the skip path continues to
 * `/bolsa` exactly like the completed-calculation path (`ResultsStep`) —
 * downstream code never needs to know which path the customer took.
 */
export function SkippedSummary() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border border-leaf/10 bg-white p-6 text-center">
      <h2 className="font-ibrand text-lg text-leaf">Vas a empezar con el plan Medio</h2>
      <p className="font-poppins text-sm text-leaf/70">
        Es el plan más elegido y te sirve para cualquier objetivo. Podés completar la
        calculadora en cualquier momento desde tu perfil para recibir una recomendación
        más ajustada a vos.
      </p>
      <Button onClick={() => router.push("/bolsa")}>Continuar</Button>
    </div>
  );
}
