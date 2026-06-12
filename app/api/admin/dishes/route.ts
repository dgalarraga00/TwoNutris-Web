import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { isAdmin } from "@/utils/admin";
import { dishCreateSchema } from "@/lib/schemas/dish";

export async function GET() {
  const supabase = await createClient();

  const [{ data: { user } }, dishes] = await Promise.all([
    supabase.auth.getUser(),
    prisma.dishTemplate.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  if (!isAdmin(user?.email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(dishes);
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!isAdmin(user?.email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const parsed = dishCreateSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Datos inválidos" },
        { status: 400 }
      );
    }
    const body = parsed.data;

    const dish = await prisma.dishTemplate.create({
      data: {
        name: body.name,
        description: body.description,
        category: body.category,
        price: body.price ?? 6.75,
        calories: body.calories ?? null,
        protein: body.protein ?? null,
        carbs: body.carbs ?? null,
        fat: body.fat ?? null,
        ingredients: body.ingredients ?? null,
        allergens: body.allergens ?? [],
        servingSize: body.servingSize ?? null,
        servingUnit: body.servingUnit ?? null,
        fatSaturated: body.fatSaturated ?? null,
        fatTrans: body.fatTrans ?? null,
        cholesterol: body.cholesterol ?? null,
        sodium: body.sodium ?? null,
        fiber: body.fiber ?? null,
        sugarTotal: body.sugarTotal ?? null,
        sugarAdded: body.sugarAdded ?? null,
        image: body.image ?? null,
        isActive: body.isActive ?? true,
      },
    });

    return NextResponse.json(dish, { status: 201 });
  } catch (err) {
    console.error("[dishes POST]", err);
    return NextResponse.json({ error: "Error al crear el plato" }, { status: 500 });
  }
}
