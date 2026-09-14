import type { Metadata } from "next";
import { CustomerKindStep } from "@/features/onboarding/CustomerKindStep";

export const metadata: Metadata = {
  title: "Empezar | TwoNutris",
};

/**
 * The funnel's real first step — matches F6/F7's ungrouped-folder convention
 * (no `(public)` route group exists in this repo yet).
 */
export default function EmpezarPage() {
  return <CustomerKindStep />;
}
