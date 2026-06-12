import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/generated/prisma";
import { createClient } from "@/utils/supabase/server";
import { isAdmin } from "@/utils/admin";

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!isAdmin(user?.email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const body = await request.json();

  try {
    const dish = await prisma.dishTemplate.update({
      where: { id },
      data: {
        ...(body.name !== undefined && { name: body.name }),
        ...(body.description !== undefined && { description: body.description }),
        ...(body.category !== undefined && { category: body.category }),
        ...(body.price !== undefined && { price: body.price }),
        ...(body.calories !== undefined && { calories: body.calories }),
        ...(body.protein !== undefined && { protein: body.protein }),
        ...(body.carbs !== undefined && { carbs: body.carbs }),
        ...(body.fat !== undefined && { fat: body.fat }),
        ...(body.ingredients !== undefined && { ingredients: body.ingredients }),
        ...(body.allergens !== undefined && { allergens: body.allergens }),
        ...(body.servingSize !== undefined && { servingSize: body.servingSize }),
        ...(body.servingUnit !== undefined && { servingUnit: body.servingUnit }),
        ...(body.fatSaturated !== undefined && { fatSaturated: body.fatSaturated }),
        ...(body.fatTrans !== undefined && { fatTrans: body.fatTrans }),
        ...(body.cholesterol !== undefined && { cholesterol: body.cholesterol }),
        ...(body.sodium !== undefined && { sodium: body.sodium }),
        ...(body.fiber !== undefined && { fiber: body.fiber }),
        ...(body.sugarTotal !== undefined && { sugarTotal: body.sugarTotal }),
        ...(body.sugarAdded !== undefined && { sugarAdded: body.sugarAdded }),
        ...(body.image !== undefined && { image: body.image }),
        ...(body.isActive !== undefined && { isActive: body.isActive }),
      },
    });

    return NextResponse.json(dish);
  } catch (err) {
    console.error("[dishes PATCH]", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

export async function DELETE(
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
    await prisma.dishTemplate.delete({ where: { id } });

    return NextResponse.json({ success: true });
  } catch (err) {
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
      // FK: el plato está referenciado por uno o más menús semanales
      if (err.code === "P2003") {
        return NextResponse.json(
          { error: "No se puede eliminar: el plato está en uno o más menús semanales. Desactívalo en su lugar." },
          { status: 409 }
        );
      }
      // Registro inexistente
      if (err.code === "P2025") {
        return NextResponse.json({ error: "Plato no encontrado" }, { status: 404 });
      }
    }
    console.error("[dishes DELETE]", err);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
