import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { WeeklyMenuStatus } from "@/lib/generated/prisma";

export const revalidate = 300;

export interface PublicDish {
  id: string;
  name: string;
  image: string | null;
  calories: number | null;
  macros: {
    protein: number | null;
    carbs: number | null;
    fat: number | null;
  };
  allergens: string[];
  category: string;
  price: number;
  ingredients: string | null;
}

export interface PublicWeeklyMenu {
  id: string;
  weekStart: string;
  weekEnd: string;
  dishes: PublicDish[];
}

export async function GET() {
  const menu = await prisma.weeklyMenu.findFirst({
    where: { status: WeeklyMenuStatus.PUBLISHED },
    include: {
      items: {
        include: { dish: true },
        orderBy: { position: "asc" },
      },
    },
    orderBy: { weekStart: "desc" },
  });

  if (!menu) {
    return NextResponse.json(null);
  }

  const result: PublicWeeklyMenu = {
    id: menu.id,
    weekStart: menu.weekStart.toISOString(),
    weekEnd: menu.weekEnd.toISOString(),
    dishes: menu.items.map(({ dish }) => ({
      id: dish.id,
      name: dish.name,
      image: dish.image ?? null,
      calories: dish.calories ?? null,
      macros: {
        protein: dish.protein ?? null,
        carbs: dish.carbs ?? null,
        fat: dish.fat ?? null,
      },
      allergens: dish.allergens,
      category: dish.category,
      price: dish.price,
      ingredients: dish.ingredients ?? dish.description,
    })),
  };

  return NextResponse.json(result);
}
