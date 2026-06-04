import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const secret = request.headers.get("authorization")?.replace("Bearer ", "");
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const nowUtc = new Date();
  const guayaquil = new Date(nowUtc.toLocaleString("en-US", { timeZone: "America/Guayaquil" }));

  const todayStart = new Date(guayaquil);
  todayStart.setHours(0, 0, 0, 0);

  const todayEnd = new Date(guayaquil);
  todayEnd.setHours(23, 59, 59, 999);

  const menuToPublish = await prisma.weeklyMenu.findFirst({
    where: {
      status: "DRAFT",
      weekStart: { gte: todayStart, lte: todayEnd },
    },
  });

  if (!menuToPublish) {
    return NextResponse.json({ skipped: true, reason: "No hay menú DRAFT para hoy" });
  }

  await prisma.$transaction([
    prisma.weeklyMenu.updateMany({
      where: { status: "PUBLISHED" },
      data: { status: "ARCHIVED" },
    }),
    prisma.weeklyMenu.update({
      where: { id: menuToPublish.id },
      data: { status: "PUBLISHED" },
    }),
  ]);

  return NextResponse.json({ published: menuToPublish.id });
}
