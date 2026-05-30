import { prisma } from "@/lib/prisma";
import { WeeklyMenuStatus } from "@/lib/generated/prisma";
import { WeeklyMenuClient } from "./WeeklyMenuClient";

export const metadata = {
  title: "Menú semanal | Admin TwoNutris",
};

export default async function MenuSemanalPage() {
  const currentMenu = await prisma.weeklyMenu.findFirst({
    where: { status: WeeklyMenuStatus.DRAFT },
    include: {
      items: {
        include: { dish: true },
        orderBy: { position: "asc" },
      },
    },
    orderBy: { createdAt: "desc" },
  }) ?? await prisma.weeklyMenu.findFirst({
    where: { status: WeeklyMenuStatus.PUBLISHED },
    include: {
      items: {
        include: { dish: true },
        orderBy: { position: "asc" },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  const allActiveDishes = await prisma.dishTemplate.findMany({
    where: { isActive: true },
    orderBy: { name: "asc" },
  });

  return <WeeklyMenuClient currentMenu={currentMenu} allDishes={allActiveDishes} />;
}
