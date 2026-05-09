import { getPrincipalDishes } from "@/lib/catalog";
import { CatalogClient } from "./CatalogClient";

export const metadata = {
  title: "Pedí tu menú | TwoNutris",
  description:
    "Elegí los platos de la semana y recibí tu box saludable en Quito.",
};

export default function PedirPage() {
  const dishes = getPrincipalDishes();
  return <CatalogClient dishes={dishes} />;
}
