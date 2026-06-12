import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestra Historia | Conoce a Cami y David",
  description:
    "Conoce la historia detrás de TwoNutris. Somos Cami y David, y creemos que comer bien no debería ser complicado. Más de 30.000 comidas entregadas en Quito.",
  openGraph: {
    title: "Nuestra Historia | Conoce a Cami y David - TwoNutris",
    description:
      "Conoce la historia detrás de TwoNutris. Somos Cami y David, y creemos que comer bien no debería ser complicado.",
    url: "https://www.twonutris.com/sobre-nosotros",
  },
  alternates: {
    canonical: "https://www.twonutris.com/sobre-nosotros",
  },
};

export default function SobreNosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
