import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/lib/http/httpClient";
import { isCode } from "@/lib/http/errors";
import { createQueryKeys } from "@/lib/query/keys";

/**
 * Zod schemas for `GET /api/menu/current` (backend: `menu/api/serializers.py`,
 * design obs #338 §C). Validated at the network boundary — if Django's shape
 * ever drifts, parsing fails loudly here instead of silently rendering
 * garbage downstream.
 *
 * `z.coerce.number()` is used for every numeric field, not `z.number()`,
 * because DRF's `DecimalField` serializes as a JSON STRING by default
 * (`COERCE_DECIMAL_TO_STRING` — confirmed by reading the backend's
 * `config/settings.py`: `REST_FRAMEWORK` does not override it, so DRF's
 * built-in `True` default applies). `IntegerField`/`BooleanField` values
 * serialize as native JSON types, but `z.coerce.number()` accepts both
 * without extra branching, so it is used uniformly for every numeric field.
 */

const decimalNumber = z.coerce.number();

export const dishPortionNutritionDtoSchema = z.object({
  id: z.coerce.number(),
  size: z.enum(["low", "medium", "high"]),
  serving_size: decimalNumber,
  serving_unit: z.enum(["g", "ml"]),
  calories: decimalNumber,
  protein_g: decimalNumber,
  carbs_g: decimalNumber,
  fiber_g: decimalNumber,
  sugars_g: decimalNumber,
  added_sugars_g: decimalNumber,
  fat_g: decimalNumber,
  saturated_fat_g: decimalNumber,
  trans_fat_g: decimalNumber,
  cholesterol_mg: decimalNumber,
  sodium_mg: decimalNumber,
});
export type DishPortionNutritionDto = z.infer<typeof dishPortionNutritionDtoSchema>;

/**
 * `allergens`/`dietary_tags` are kept as `string[]` (raw backend codes, e.g.
 * `"peanut"`, `"dairy"`, `"gluten"`) rather than a closed zod enum. The
 * backend's `catalog/choices.py::Allergen` enum can grow independently of
 * this client, and — more importantly — these raw codes do NOT match
 * `DishModal.tsx`'s Spanish `ALLERGEN_MAP` display keys at all (see
 * `menuAdapter.ts` and apply-progress risks for the full write-up). Locking
 * this down to a closed union would make every future backend allergen
 * addition a hard parse failure here for no safety benefit.
 */
export const dishCardDtoSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  description: z.string(),
  kind: z.enum(["main", "salad", "snack"]),
  allergens: z.array(z.string()),
  dietary_tags: z.array(z.string()),
  allergen_disclaimer: z.string(),
  nutrition_notes: z.string(),
  cover_image_url: z.string().nullable(),
});
export type DishCardDto = z.infer<typeof dishCardDtoSchema>;

export const menuDishCardDtoSchema = z.object({
  menu_dish_id: z.coerce.number(),
  dish: dishCardDtoSchema,
  portion: dishPortionNutritionDtoSchema.nullable(),
  is_sold_out: z.boolean(),
});
export type MenuDishCardDto = z.infer<typeof menuDishCardDtoSchema>;

export const menuDayDtoSchema = z.object({
  date: z.string(),
  is_closed: z.boolean(),
  cutoff_at: z.string(),
  is_past_cutoff: z.boolean(),
  total_capacity: decimalNumber,
  mains: z.array(menuDishCardDtoSchema),
  salads: z.array(menuDishCardDtoSchema),
});
export type MenuDayDto = z.infer<typeof menuDayDtoSchema>;

export const menuWeekDtoSchema = z.object({
  start_date: z.string(),
  end_date: z.string(),
  published_at: z.string(),
  days: z.array(menuDayDtoSchema),
});
export type MenuWeekDto = z.infer<typeof menuWeekDtoSchema>;

/**
 * Browser-side base URL for the Django API (design obs #338 §F: two base
 * URLs, not one — this is the `NEXT_PUBLIC_*` one; the server-only
 * `DJANGO_API_URL` used by `app/api/session/*` is a separate constant on
 * purpose). Falls back to the same local-dev default F2 already uses.
 */
export const MENU_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

export const menuKeys = {
  ...createQueryKeys("menu"),
  current: () => [...menuKeys.all, "current"] as const,
};

/** Fetches and validates the currently published menu week. `skipAuth: true`
 * — the endpoint is `AllowAny` and anonymous visitors must be able to browse
 * it (design obs #338 §C).
 *
 * Returns `null` when B2 answers 404 with `code: "menu_week_not_published"`
 * (no published week exists) — this is a normal, successful "empty" domain
 * result for the menu-preview screen (F6), not a query error, so it is
 * translated here rather than left to throw. Every other failure (network
 * error, 5xx, any other error code) still throws `ApiError` and is left for
 * the caller/`<AsyncBoundary>` to surface as the real Error state. */
export async function getCurrentMenuWeek(): Promise<MenuWeekDto | null> {
  try {
    const response = await httpClient(`${MENU_API_BASE_URL}/api/menu/current`, {
      skipAuth: true,
    });
    const data: unknown = await response.json();
    return menuWeekDtoSchema.parse(data);
  } catch (error) {
    if (isCode(error, "menu_week_not_published")) {
      return null;
    }
    throw error;
  }
}

/** TanStack Query hook wrapping {@link getCurrentMenuWeek} for the menu
 * preview screen (F6) and any later screen needing the current week
 * (weekly grid, F10). `data === null` is the Empty state; a thrown/`isError`
 * result is any other real fetch/server failure. */
export function useCurrentMenuWeek() {
  return useQuery({
    queryKey: menuKeys.current(),
    queryFn: getCurrentMenuWeek,
  });
}
