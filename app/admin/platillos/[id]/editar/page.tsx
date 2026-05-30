import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { DishForm } from "../../DishForm";

export const metadata = {
  title: "Editar platillo | Admin TwoNutris",
};

export default async function EditarPlatilloPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const dish = await prisma.dishTemplate.findUnique({ where: { id } });

  if (!dish) notFound();

  return <DishForm dish={dish} />;
}
