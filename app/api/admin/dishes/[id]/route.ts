import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/lib/generated/prisma";
import { createClient } from "@/utils/supabase/server";
import { isAdmin } from "@/utils/admin";
import { dishUpdateSchema } from "@/lib/schemas/dish";

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
  const parsed = dishUpdateSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Datos inválidos" },
      { status: 400 }
    );
  }

  try {
    const dish = await prisma.dishTemplate.update({
      where: { id },
      data: parsed.data,
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
