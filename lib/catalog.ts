export type DishType = "NORMAL" | "VEGETARIANO" | "PREMIUM";

export const MIN_ORDER = 20;
export const DELIVERY_FEE = 3;

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
