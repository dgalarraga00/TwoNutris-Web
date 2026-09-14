/**
 * Backend `catalog.choices.Allergen` code -> the exact Spanish label
 * `DishModal.tsx`'s `ALLERGEN_MAP` keys on. DRF serializes the raw code
 * (`"peanut"`), never the model's `.label` (`"Maní"`) — see
 * `menuAdapter.ts`'s docstring for why this mapping exists at all.
 *
 * Kept in sync by hand with `backend/catalog/choices.py::Allergen` — the
 * backend is the source of truth for which codes exist; this file only
 * translates them for display. An unmapped code (e.g. a future backend
 * addition not yet mirrored here) falls back to the raw code itself,
 * matching `DishModal`'s own graceful-degradation behavior.
 */
const ALLERGEN_LABEL_BY_CODE: Record<string, string> = {
  peanut: "Maní",
  dairy: "Lácteos",
  gluten: "Gluten",
  shellfish: "Mariscos",
  egg: "Huevo",
  soy: "Soya",
  tree_nuts: "Frutos secos",
  fish: "Pescado",
  sulfites: "Sulfitos",
  spicy: "Picante",
  celery: "Apio",
  mustard: "Mostaza",
  sesame: "Sésamo",
  corn: "Maíz",
  legumes: "Leguminosas",
  coconut: "Coco",
};

export const allergenLabel = (code: string): string => ALLERGEN_LABEL_BY_CODE[code] ?? code;
