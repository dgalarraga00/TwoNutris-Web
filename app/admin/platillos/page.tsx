import { prisma } from "@/lib/prisma";
import { DishLibraryClient } from "./DishLibraryClient";

export const metadata = {
  title: "Platillos | Admin TwoNutris",
};

export default async function PlatillosPage() {
  const dishes = await prisma.dishTemplate.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <DishLibraryClient dishes={dishes} />;
}
