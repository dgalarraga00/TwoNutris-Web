import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TwoNutris Corporativo | Beneficios de alimentación para tu equipo",
  description:
    "Planes corporativos de alimentación para empresas en Quito. Menú variado, facturación centralizada, asesor dedicado y descuentos por volumen. Sin contratos de permanencia.",
  openGraph: {
    title: "TwoNutris Corporativo | Beneficios de alimentación para tu equipo",
    description:
      "Planes corporativos de alimentación para empresas en Quito. Menú variado, facturación centralizada y descuentos por volumen.",
    url: "https://www.twonutris.com/empresas",
  },
  alternates: {
    canonical: "https://www.twonutris.com/empresas",
  },
};

export default function EmpresasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
