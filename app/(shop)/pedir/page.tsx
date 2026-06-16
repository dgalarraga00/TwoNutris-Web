import { Suspense } from "react";
import { prisma } from "@/lib/prisma";
import { CatalogClient } from "./CatalogClient";
import { WeeklyMenuStatus, DishTemplateCategory } from "@/lib/generated/prisma";
import type { CatalogDish } from "@/lib/catalog";
import { isBeforeLaunch } from "@/lib/launch";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata = {
  title: "Pide tu menú | TwoNutris",
  description:
    "Elige los platos de la semana y recibe tu box saludable en Quito.",
};

// El gate de lanzamiento y el menú publicado se evalúan por request.
export const dynamic = "force-dynamic";

const CAT_MAP: Record<DishTemplateCategory, "NORMAL" | "VEGETARIANO" | "PREMIUM"> = {
  CLASICO: "NORMAL",
  LOW_CARB: "NORMAL",
  VEGETARIANO: "VEGETARIANO",
  PREMIUM: "PREMIUM",
};

async function CatalogData() {
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
      ...(
        dish.servingSize != null || dish.fatSaturated != null || dish.fatTrans != null ||
        dish.cholesterol != null || dish.sodium != null || dish.fiber != null ||
        dish.sugarTotal != null || dish.sugarAdded != null
          ? {
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
            }
          : {}
      ),
    }));
  } else {
    dishes = [];
  }

  return <CatalogClient dishes={dishes} />;
}

export default function PedirPage() {
  // Antes del lanzamiento, el menú no se renderiza ni se envía al cliente.
  if (isBeforeLaunch()) {
    return <ComingSoon />;
  }

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-[50vh] text-base font-poppins text-[#144400]">
          Cargando menú...
        </div>
      }
    >
      <CatalogData />
    </Suspense>
  );
}
