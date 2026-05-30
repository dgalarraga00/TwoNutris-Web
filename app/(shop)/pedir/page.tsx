import { prisma } from "@/lib/prisma";
import { CatalogClient } from "./CatalogClient";
import { WeeklyMenuStatus, DishTemplateCategory } from "@/lib/generated/prisma";
import type { CatalogDish } from "@/lib/catalog";

export const metadata = {
  title: "Pedí tu menú | TwoNutris",
  description:
    "Elegí los platos de la semana y recibí tu box saludable en Quito.",
};

const CAT_MAP: Record<DishTemplateCategory, "NORMAL" | "LOW_CARB" | "VEGETARIANO"> = {
  CLASICO: "NORMAL",
  LOW_CARB: "LOW_CARB",
  VEGETARIANO: "VEGETARIANO",
  PREMIUM: "NORMAL",
};

export default async function PedirPage() {
  const publishedMenu = await prisma.weeklyMenu.findFirst({
    where: { status: WeeklyMenuStatus.PUBLISHED },
    include: { items: { include: { dish: true }, orderBy: { position: "asc" } } },
    orderBy: { createdAt: "desc" },
  });

  let dishes: CatalogDish[];

  if (publishedMenu && publishedMenu.items.length > 0) {
    dishes = publishedMenu.items.map(({ dish }) => ({
      id: dish.id,
      name: dish.name,
      image: dish.image ?? "/images/placeholder.jpg",
      calories: dish.calories ?? 0,
      macros: { protein: dish.protein ?? 0, carbs: dish.carbs ?? 0, fat: dish.fat ?? 0 },
      allergens: dish.allergens,
      ingredients: dish.ingredients ?? dish.description,
      type: CAT_MAP[dish.category],
      price: dish.price,
      extendedNutrition: {
        servingSize: dish.servingSize ?? undefined,
        servingUnit: dish.servingUnit ?? undefined,
        fatSaturated: dish.fatSaturated ?? undefined,
        fatTrans: dish.fatTrans ?? undefined,
        cholesterol: dish.cholesterol ?? undefined,
        sodium: dish.sodium ?? undefined,
        fiber: dish.fiber ?? undefined,
        sugarTotal: dish.sugarTotal ?? undefined,
        sugarAdded: dish.sugarAdded ?? undefined,
      },
    }));
  } else {
    dishes = [];
  }

  return <CatalogClient dishes={dishes} />;
}
