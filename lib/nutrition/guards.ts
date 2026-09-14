/**
 * The calculator's mandatory "exit the automatic flow" guard (spec: a
 * declared pregnancy/lactation/pathology exits the automatic flow entirely
 * and offers a direct nutrition-consult lead-capture instead, per
 * `sdd/phase-3b-react-client/explore` obs #328). Pure function, zero
 * React/DOM dependencies, fully unit-testable — the wizard step calls this
 * on every change to decide whether to short-circuit to `<WhatsAppExitCta/>`.
 */
export interface NutritionConsultGuardInput {
  pregnant: boolean;
  lactating: boolean;
  hasRelevantPathology: boolean;
}

export const requiresNutritionConsult = ({
  pregnant,
  lactating,
  hasRelevantPathology,
}: NutritionConsultGuardInput): boolean =>
  pregnant || lactating || hasRelevantPathology;
