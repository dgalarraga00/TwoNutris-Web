/**
 * Realistic `GET /api/menu/current` wire-format fixture (raw JSON, matching
 * what Django's `MenuWeekSerializer` actually sends — see `menuAdapter.ts`
 * and `lib/api/menu.ts` for why numeric decimal fields are strings, not
 * numbers: DRF's `COERCE_DECIMAL_TO_STRING` default, confirmed by reading
 * `Plataforma_TW/backend/config/settings.py` this run).
 *
 * Established for this unit (F4) and reused by later units (F6 menu preview,
 * F10 weekly grid) per task 4.10 — not consumed by anything else yet.
 */
export const currentMenuWeekFixture = {
  start_date: "2026-09-14",
  end_date: "2026-09-18",
  published_at: "2026-09-10T12:00:00Z",
  days: [
    {
      date: "2026-09-15",
      is_closed: false,
      cutoff_at: "2026-09-14T18:00:00Z",
      is_past_cutoff: false,
      total_capacity: 40,
      mains: [
        {
          menu_dish_id: 101,
          dish: {
            id: 1,
            name: "Pollo a la griega",
            description: "Pechuga de pollo marinada al estilo mediterráneo.",
            kind: "main",
            allergens: ["dairy"],
            dietary_tags: [],
            allergen_disclaimer:
              "Este plato puede contener trazas de otros alérgenos.",
            nutrition_notes: "Bajo en carbohidratos.",
            cover_image_url:
              "https://res.cloudinary.com/twonutris/image/upload/pollo-griega.jpg",
          },
          portion: {
            id: 501,
            size: "medium",
            serving_size: "350.0",
            serving_unit: "g",
            calories: "432.0",
            protein_g: "28.0",
            carbs_g: "35.0",
            fiber_g: "3.0",
            sugars_g: "5.0",
            added_sugars_g: "0.0",
            fat_g: "20.0",
            saturated_fat_g: "6.5",
            trans_fat_g: "0.0",
            cholesterol_mg: "85.0",
            sodium_mg: "410.0",
          },
          is_sold_out: false,
        },
        {
          menu_dish_id: 102,
          dish: {
            id: 2,
            name: "Guiso veggie de lentejas con arroz",
            description: "Lentejas estofadas con vegetales.",
            kind: "main",
            allergens: ["peanut"],
            dietary_tags: ["vegetarian"],
            allergen_disclaimer: "",
            nutrition_notes: "",
            cover_image_url: null,
          },
          portion: null,
          is_sold_out: true,
        },
      ],
      salads: [
        {
          menu_dish_id: 201,
          dish: {
            id: 3,
            name: "Citricos y Hojas",
            description: "Lechuga crespa, rábano, apio y mandarina.",
            kind: "salad",
            allergens: [],
            dietary_tags: ["vegan", "gluten_free"],
            allergen_disclaimer: "",
            nutrition_notes: "",
            cover_image_url:
              "https://res.cloudinary.com/twonutris/image/upload/citricos.jpg",
          },
          portion: {
            id: 502,
            size: "medium",
            serving_size: "150.0",
            serving_unit: "g",
            calories: "45.0",
            protein_g: "1.0",
            carbs_g: "9.0",
            fiber_g: "2.0",
            sugars_g: "6.0",
            added_sugars_g: "0.0",
            fat_g: "0.0",
            saturated_fat_g: "0.0",
            trans_fat_g: "0.0",
            cholesterol_mg: "0.0",
            sodium_mg: "20.0",
          },
          is_sold_out: false,
        },
      ],
    },
  ],
};
