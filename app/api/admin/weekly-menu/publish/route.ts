import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { isAdmin } from "@/utils/admin";
import { WeeklyMenuStatus } from "@/lib/generated/prisma";

export async function POST() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!isAdmin(user?.email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const draft = await prisma.weeklyMenu.findFirst({
      where: { status: WeeklyMenuStatus.DRAFT },
      orderBy: { createdAt: "desc" },
    });

    if (!draft) {
      return NextResponse.json({ error: "No hay borrador para publicar" }, { status: 400 });
    }

    const published = await prisma.$transaction(async (tx) => {
      await tx.weeklyMenu.updateMany({
        where: { status: WeeklyMenuStatus.PUBLISHED },
        data: { status: WeeklyMenuStatus.ARCHIVED },
      });
      return tx.weeklyMenu.update({
        where: { id: draft.id },
        data: { status: WeeklyMenuStatus.PUBLISHED },
        include: {
          items: {
            include: { dish: true },
            orderBy: { position: "asc" },
          },
        },
      });
    });

    return NextResponse.json(published);
  } catch (err) {
    console.error("[weekly-menu publish POST]", err);
    return NextResponse.json({ error: "Error al publicar el menú" }, { status: 500 });
  }
}
