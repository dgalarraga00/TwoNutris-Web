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

export const metadata: Metadata = {
  title: "twonutris",
  description:
    "Comida real, cocinada a fuego lento, lista para devorar toda la semana. Cero estrés.",
  icons: {
    icon: "/icons/Isotipo.png",
    apple: "/icons/Isotipo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${poppins.variable} ${ibrand.variable}`}>
      <body
        className="grain font-poppins antialiased"
        style={{ backgroundColor: "#FFFBE4" }}
      >
        {children}
      </body>
    </html>
  );
}
