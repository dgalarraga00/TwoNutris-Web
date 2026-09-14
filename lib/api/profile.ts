import { httpClient } from "@/lib/http/httpClient";
import type { ActivityLevel } from "@/lib/nutrition/activity";
import type { Goal } from "@/features/calculator/types";

/** Mirrors `lib/api/auth.ts::AUTH_API_BASE_URL` — each API-surface file in
 * this codebase keeps its own copy of this constant by convention. */
export const PROFILE_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

export interface CreateNutritionProfileInput {
  goal: Goal;
  weight_kg: number;
  height_cm: number;
  age: number;
  activity_level: ActivityLevel;
}

/**
 * POST /api/me/profile — creates the customer's real `NutritionProfile` so
 * `orders/services.py::resolve_meal_pack_tier()` resolves the ACTUAL
 * LOW/MEDIUM/HIGH tier at pack-purchase time, matching what the 100%
 * client-side calculator previewed (bug fix found during F9 — see
 * `stores/purchaseDraftStore.ts`'s own docstring for the full context).
 * Authenticated via `httpClient` (Bearer token from `tokenStore`,
 * transparent refresh-on-401 per F1). Never called for GROUP customers
 * (no profile by design) or a skipped calculator (no body data to send).
 */
export async function createNutritionProfile(input: CreateNutritionProfileInput): Promise<void> {
  await httpClient(`${PROFILE_API_BASE_URL}/api/me/profile`, {
    method: "POST",
    body: JSON.stringify(input),
  });
}
