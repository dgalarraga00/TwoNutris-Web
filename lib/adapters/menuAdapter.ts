import type { MenuItem } from "@/data/menu";
import type { MenuDishCardDto } from "@/lib/api/menu";
import { allergenLabel } from "@/lib/adapters/allergenLabels";

/**
 * No dedicated placeholder asset exists yet in `public/images/` for a dish
 * with no cover photo (checked: only marketing photos — `plate-2.png`,
 * `plate-3.png`, `hero-plate.png`, team photos — no generic "no image" tile).
 * `plate-2.png` is used here as the closest visual fit (a generic plate
 * illustration already shipped in the bundle). This is a documented
 * stand-in, not a final design decision — flagged in apply-progress/risks
 * as a follow-up for whoever owns marketing assets.
 */
const FALLBACK_DISH_IMAGE = "/images/plate-2.png";

/**
 * `MenuDaySerializer` only ever nests `main`/`salad` dishes into its
 * `mains`/`salads` arrays (backend `menu/api/serializers.py`), so a `"snack"`
 * `dish.kind` never actually reaches this function through the real
 * `GET /api/menu/current` response today. It is still a valid value in the
 * DTO's type (mirrors `catalog/choices.py::DishKind`), and `MenuItem.category`
 * has no snack-equivalent value at all, so it is mapped to `"principal"`
 * defensively rather than thrown on — a documented gap, not an invented one.
 */
const CATEGORY_BY_KIND: Record<MenuDishCardDto["dish"]["kind"], MenuItem["category"]> = {
  main: "principal",
  salad: "ensalada",
  snack: "principal",
};

/**
 * Live-feedback fix (feedback-round-2): `allergen_disclaimer` is no longer
 * folded into this joined string. It is legal/safety text that deserves its
 * own visually-distinct warning box (`DishModal`'s new `Alert` variant=
 * "warning" section, fed directly from the DTO) instead of being buried as
 * plain text at the tail of a long ingredients paragraph — still NEVER
 * dropped, just surfaced in its rightful place. See `DishModal.tsx`.
 */
const composeIngredients = (dish: MenuDishCardDto["dish"]): string =>
  [dish.description, dish.nutrition_notes]
    .map((part) => part.trim())
    .filter((part) => part.length > 0)
    .join("\n\n");

/**
 * Reconciles B2's real `MenuDishCardDto` into the flat, static `MenuItem`
 * shape `DishModal` already renders (design obs #338 §B: thin adapter,
 * `DishModal` stays untouched).
 *
 * Deliberate field-reconciliation decisions — see apply-progress / return
 * envelope risks for the full product-facing write-up:
 *
 * - `id`: `String(dto.menu_dish_id)` — presentation-only (React keys, etc.).
 *   The REAL identifiers an order needs (`dto.menu_dish_id`, `dto.portion?.id`)
 *   live on the DTO itself, which callers keep in the query cache; they are
 *   NOT reconstructable from this function's `MenuItem` output, and callers
 *   placing an order must read them from the DTO, never from a `MenuItem`.
 * - `day`: always `null`. This function receives a single `MenuDishCardDto`,
 *   which carries no date/day-of-week context — that lives one level up, on
 *   the parent `MenuDayResponse`. The weekly-grid unit (F10) already renders
 *   per-day columns, so day association is the caller's responsibility, not
 *   this adapter's; guessing a `DayKey` here would be worse than omitting it.
 * - `image`: `dto.dish.cover_image_url ?? FALLBACK_DISH_IMAGE` — the real
 *   field is nullable (no Cloudinary cover image), `MenuItem.image` is not.
 * - `calories` / `macros`: zeroed when `dto.portion` is `null`. Per B2's
 *   fallback chain (requested → MEDIUM → lowest rank present), `portion` is
 *   only ever `null` when a dish has ZERO `DishPortion` rows at all — a
 *   data-integrity edge case, not a normal state. The dish still renders
 *   (name/image/allergens/ingredients are always complete); silently
 *   skipping the dish would hide a real catalog problem from the customer
 *   instead of surfacing it. `NutritionFactsPanel`, fed from the DTO
 *   directly, shows its own "empty" state for this exact case instead of
 *   this adapter faking non-zero numbers.
 * - `ingredients`: `description` + `nutrition_notes` joined with blank lines
 *   (`DishModal` renders this field with `whitespace-pre-line`, so blank
 *   lines become visible paragraph breaks). `allergen_disclaimer` is
 *   deliberately NOT part of this field (feedback-round-2) — `DishModal`
 *   reads it straight off the DTO for its own dedicated warning box instead.
 * - `allergens`: mapped through `allergenLabel()` (`lib/adapters/
 *   allergenLabels.ts`) from the DTO's raw backend codes (e.g. `"peanut"`)
 *   to the Spanish labels `DishModal`'s `ALLERGEN_MAP` keys on (e.g.
 *   `"Maní"`) — DRF serializes the code, never the model's `.label`, so this
 *   translation step is required. The backend's `Allergen` enum (`catalog/
 *   choices.py`) was expanded from 7 to 16 values (fish, sulfites, spicy,
 *   celery, mustard, sesame, corn, legumes, coconut added) to cover every
 *   allergen the frontend's dish-card design already accounts for — real
 *   dishes are expected to use all of them, confirmed by the user, not
 *   leftover content from the old site.
 */
export function toMenuItem(dto: MenuDishCardDto): MenuItem {
  return {
    id: String(dto.menu_dish_id),
    name: dto.dish.name,
    image: dto.dish.cover_image_url ?? FALLBACK_DISH_IMAGE,
    calories: dto.portion?.calories ?? 0,
    macros: {
      protein: dto.portion?.protein_g ?? 0,
      carbs: dto.portion?.carbs_g ?? 0,
      fat: dto.portion?.fat_g ?? 0,
    },
    allergens: dto.dish.allergens.map(allergenLabel),
    ingredients: composeIngredients(dto.dish),
    category: CATEGORY_BY_KIND[dto.dish.kind],
    day: null,
  };
}
