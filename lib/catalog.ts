export type DishType = "VEGETARIANO" | "LOW_CARB" | "NORMAL";

export const BASE_PRICE = 6.75;
export const PREMIUM_PRICE = 7.75;
export const MIN_ORDER = 20;

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
  extendedNutrition?: {
    servingSize?: number;
    servingUnit?: string;
    fatSaturated?: number;
    fatTrans?: number;
    cholesterol?: number;
    sodium?: number;
    fiber?: number;
    sugarTotal?: number;
    sugarAdded?: number;
  };
}
