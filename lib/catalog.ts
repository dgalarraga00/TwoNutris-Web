import { weeklyMenu } from "@/data/menu";

export type DishType = "VEGETARIANO" | "LOW_CARB" | "NORMAL";

export const BASE_PRICE = 6.75;
export const PREMIUM_PRICE = 7.75;
export const MIN_ORDER = 20;

// Actualizá estos IDs cuando cambie el menú semanal
const DISH_TYPE_MAP: Record<string, DishType> = {
  "lun-p1": "NORMAL",       // Pollo al chilindrón con arroz
  "lun-p2": "NORMAL",       // Chuleta de cerdo a la naranja
  "lun-p3": "VEGETARIANO",  // Guiso de frejol con arroz
  "mar-p1": "LOW_CARB",     // Pollo al grill con quinoa
  "mar-p2": "NORMAL",       // Milanesa de carne con espinaca
  "mar-p3": "VEGETARIANO",  // Olla murciana
  "mie-p1": "LOW_CARB",     // Pollo en salsa brava con puré
  "mie-p2": "NORMAL",       // Albóndigas en salsa chop suey
  "mie-p3": "VEGETARIANO",  // Fusilli al pesto con carve
  "jue-p1": "NORMAL",       // Pollo en salsa yakarta
  "jue-p2": "LOW_CARB",     // Lomo relleno en su salsa
  "jue-p3": "LOW_CARB",     // Guiso veggie de lentejas
  "vie-p1": "NORMAL",       // Croquetas de pollo
  "vie-p2": "NORMAL",       // Gulash de carne
  "vie-p3": "LOW_CARB",     // Lasaña de espinaca con queso
};

// IDs de platos especiales ($7.75) — marcá los que correspondan
const PREMIUM_IDS = new Set<string>([]);

export interface CatalogDish {
  id: string;
  name: string;
  image: string;
  calories: number;
  macros: { protein: number; carbs: number; fat: number };
  allergens: string[];
  ingredients: string;
  type: DishType;
  price: number;
}

export function getPrincipalDishes(): CatalogDish[] {
  return weeklyMenu
    .filter((d) => d.category === "principal")
    .map((d) => ({
      id: d.id,
      name: d.name,
      image: d.image,
      calories: d.calories,
      macros: d.macros,
      allergens: d.allergens,
      ingredients: d.ingredients,
      type: DISH_TYPE_MAP[d.id] ?? "NORMAL",
      price: PREMIUM_IDS.has(d.id) ? PREMIUM_PRICE : BASE_PRICE,
    }));
}
