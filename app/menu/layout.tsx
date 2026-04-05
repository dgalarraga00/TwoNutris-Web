import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menú Semanal | Platos saludables y variados",
  description:
    "Explorá el menú semanal de TwoNutris. Platos variados, con macros visibles, sin conservantes y listos para calentar. Delivery en Quito.",
  openGraph: {
    title: "Menú Semanal | Platos saludables y variados - TwoNutris",
    description:
      "Explorá el menú semanal de TwoNutris. Platos variados, con macros visibles, sin conservantes y listos para calentar.",
    url: "https://home.twonutris.net/menu",
  },
  alternates: {
    canonical: "https://home.twonutris.net/menu",
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
