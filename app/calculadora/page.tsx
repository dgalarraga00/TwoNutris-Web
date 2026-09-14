import type { Metadata } from "next";
import { CalculatorWizard } from "@/features/calculator/CalculatorWizard";

export const metadata: Metadata = {
  title: "Calculadora | TwoNutris",
};

/**
 * Funnel navigation (final integration unit): `CalculatorWizard` (F5) had no
 * route of its own until now — `/empezar`'s individual branch navigates
 * here. GROUP customers never reach this route (they go straight to
 * `/bolsa` from `/empezar`). Ungrouped folder, matching every other
 * funnel screen's own established convention (no `(public)` route group
 * exists in this repo yet).
 */
export default function CalculadoraPage() {
  return <CalculatorWizard />;
}
