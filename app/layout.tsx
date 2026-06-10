import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

const ibrand = localFont({
  src: "../public/fonts/ibrand _fonts/Ibrand-Regular.woff2",
  variable: "--font-ibrand",
  display: "swap",
});

const BASE_URL = "https://home.twonutris.net";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "TwoNutris | Alimentación a tu medida",
    template: "%s | TwoNutris",
  },
  description:
    "Comida real, cocinada a fuego lento, lista para devorar toda la semana. Meal prep saludable con delivery en Quito. Cero estrés.",
  keywords: [
    "comida saludable",
    "meal prep Quito",
    "delivery de comida",
    "planes nutricionales",
    "TwoNutris",
    "comida a domicilio Quito",
  ],
  authors: [{ name: "TwoNutris" }],
  creator: "TwoNutris",
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: BASE_URL,
    siteName: "TwoNutris",
    title: "TwoNutris | Alimentación a tu medida",
    description:
      "Comida real, cocinada a fuego lento, lista para devorar toda la semana. Meal prep saludable con delivery en Quito.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TwoNutris | Alimentación a tu medida",
    description:
      "Comida real, cocinada a fuego lento, lista para devorar toda la semana. Meal prep saludable con delivery en Quito.",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "TwoNutris",
  url: "https://home.twonutris.net",
  description:
    "Comida real, cocinada a fuego lento, con delivery semanal en Quito. Meal prep saludable sin estrés.",
  image: "https://home.twonutris.net/icons/Imagotipo.png",
  servesCuisine: "Saludable, Meal Prep",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Quito",
    addressRegion: "Pichincha",
    addressCountry: "EC",
  },
  areaServed: [
    "Quito Norte",
    "Quito Centro",
    "Quito Sur",
    "Cumbayá",
    "Tumbaco",
    "Valle de los Chillos",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Menú Semanal TwoNutris",
    url: "https://home.twonutris.net/menu",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+593983392007",
    availableLanguage: "Spanish",
  },
  sameAs: ["https://www.instagram.com/twonutris"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-EC" className={`${poppins.variable} ${ibrand.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="grain font-poppins antialiased"
        style={{ backgroundColor: "#FFFBE4" }}
      >
        {children}
      </body>
    </html>
  );
}
