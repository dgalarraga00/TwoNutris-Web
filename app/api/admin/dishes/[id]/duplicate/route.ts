import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { isAdmin } from "@/utils/admin";

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!isAdmin(user?.email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const original = await prisma.dishTemplate.findUnique({ where: { id } });

    if (!original) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const copy = await prisma.dishTemplate.create({
      data: {
        name: `${original.name} (copia)`,
        description: original.description,
        image: original.image,
        category: original.category,
        price: original.price,
        calories: original.calories,
        protein: original.protein,
        carbs: original.carbs,
        fat: original.fat,
        ingredients: original.ingredients,
        allergens: original.allergens,
        servingSize: original.servingSize,
        servingUnit: original.servingUnit,
        fatSaturated: original.fatSaturated,
        fatTrans: original.fatTrans,
        cholesterol: original.cholesterol,
        sodium: original.sodium,
        fiber: original.fiber,
        sugarTotal: original.sugarTotal,
        sugarAdded: original.sugarAdded,
        isActive: false,
      },
    });

    return NextResponse.json(copy, { status: 201 });
  } catch (err) {
    console.error("[dishes duplicate POST]", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
