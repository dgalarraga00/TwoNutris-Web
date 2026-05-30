import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createClient } from "@/utils/supabase/server";
import { isAdmin } from "@/utils/admin";
import { WeeklyMenuStatus } from "@/lib/generated/prisma";

export async function GET() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!isAdmin(user?.email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const draft = await prisma.weeklyMenu.findFirst({
    where: { status: WeeklyMenuStatus.DRAFT },
    include: {
      items: {
        include: { dish: true },
        orderBy: { position: "asc" },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  if (draft) {
    return NextResponse.json(draft);
  }

  const published = await prisma.weeklyMenu.findFirst({
    where: { status: WeeklyMenuStatus.PUBLISHED },
    include: {
      items: {
        include: { dish: true },
        orderBy: { position: "asc" },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(published ?? null);
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!isAdmin(user?.email)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { weekStart, weekEnd, dishIds } = body as {
      weekStart: string;
      weekEnd: string;
      dishIds: string[];
    };

    const existingDraft = await prisma.weeklyMenu.findFirst({
      where: { status: WeeklyMenuStatus.DRAFT },
      orderBy: { createdAt: "desc" },
    });

    let menu;

    if (existingDraft) {
      await prisma.$transaction(async (tx) => {
        await tx.weeklyMenuItem.deleteMany({
          where: { menuId: existingDraft.id },
        });

        menu = await tx.weeklyMenu.update({
          where: { id: existingDraft.id },
          data: {
            weekStart: new Date(weekStart),
            weekEnd: new Date(weekEnd),
            items: {
              create: dishIds.map((dishId, position) => ({
                dishId,
                position,
              })),
            },
          },
          include: {
            items: {
              include: { dish: true },
              orderBy: { position: "asc" },
            },
          },
        });
      });
    } else {
      menu = await prisma.weeklyMenu.create({
        data: {
          weekStart: new Date(weekStart),
          weekEnd: new Date(weekEnd),
          status: WeeklyMenuStatus.DRAFT,
          items: {
            create: dishIds.map((dishId, position) => ({
              dishId,
              position,
            })),
          },
        },
        include: {
          items: {
            include: { dish: true },
            orderBy: { position: "asc" },
          },
        },
      });
    }

    return NextResponse.json(menu);
  } catch (err) {
    console.error("[weekly-menu POST]", err);
    return NextResponse.json({ error: "Error al guardar el menú" }, { status: 500 });
  }
}
