import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conoce cómo TwoNutris recopila, usa y protege tu información personal. Comprometidos con tu privacidad.",
  alternates: {
    canonical: "https://www.twonutris.com/privacidad",
  },
};

interface PrivacyItem {
  subtitle: string | null;
  text: string;
  highlight?: boolean;
}

interface PrivacySection {
  num: string;
  title: string;
  items: PrivacyItem[];
}

const SECTIONS: PrivacySection[] = [
  {
    num: "1",
    title: "Responsable",
    items: [
      {
        subtitle: null,
        text: "TwoNutris, con domicilio en Quito, Ecuador. Contacto: info@twonutris.net",
      },
    ],
  },
  {
    num: "2",
    title: "Datos que Recopilamos",
    items: [
      {
        subtitle: "Datos Identificativos",
        text: "Nombre, dirección, teléfono, email.",
      },
      {
        subtitle: "Datos Transaccionales",
        text: "Historial de pedidos y pagos.",
      },
      {
        subtitle: "Importante",
        text: "TwoNutris no recopila ni procesa datos sensibles de salud (como alergias o historiales médicos). La gestión de restricciones alimentarias se realiza mediante la lectura del etiquetado por parte del usuario.",
        highlight: true,
      },
    ],
  },
  {
    num: "3",
    title: "Finalidad",
    items: [
      {
        subtitle: null,
        text: "Gestionar el servicio de entrega de alimentos, procesar cobros y atender consultas vía WhatsApp.",
      },
    ],
  },
  {
    num: "4",
    title: "Cesión de Datos",
    items: [
      {
        subtitle: null,
        text: "No vendemos tus datos. Solo compartimos dirección y teléfono con nuestros repartidores para la entrega y con pasarelas de pago seguras (PayPhone) para el cobro.",
      },
    ],
  },
  {
    num: "5",
    title: "Tus Derechos",
    items: [
      {
        subtitle: null,
        text: "Puedes acceder, rectificar o eliminar tus datos solicitándolo a info@twonutris.net",
      },
    ],
  },
  {
    num: "6",
    title: "Uso de Cookies",
    items: [
      {
        subtitle: null,
        text: "Utilizamos cookies necesarias para el funcionamiento de la web, así como cookies analíticas y de marketing para mejorar tu experiencia de usuario. Puedes gestionar tus preferencias en cualquier momento desde nuestro banner de cookies.",
      },
    ],
  },
];

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">

        {/* Header */}
        <div style={{ backgroundColor: "#FFFBE4" }} className="pt-24 pb-12">
          <div className="max-w-[780px] mx-auto px-6">
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4 font-poppins"
              style={{ color: "#FFB000" }}
            >
              Versión oficial · Junio 2026
            </p>
            <h1
              className="text-4xl md:text-5xl leading-tight mb-4 font-ibrand"
              style={{ color: "#144400" }}
            >
              Política de Privacidad
            </h1>
            <p
              className="text-base leading-relaxed font-poppins text-gray-700"
            >
              En twonutris nos tomamos tu privacidad en serio. A continuación te explicamos qué datos recopilamos, para qué los usamos y cuáles son tus derechos.
            </p>
          </div>
        </div>

        {/* Contenido */}
        <div className="max-w-[780px] mx-auto px-6 py-16">
          <div className="flex flex-col gap-12">
            {SECTIONS.map(({ num, title, items }) => (
              <div key={num}>
                <div className="flex items-start gap-4 mb-6">
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full text-sm font-black font-ibrand"
                    style={{ backgroundColor: "#FFB000", color: "#144400" }}
                  >
                    {num}
                  </span>
                  <h2
                    className="text-xl font-bold pt-1 font-poppins"
                    style={{ color: "#144400" }}
                  >
                    {title}
                  </h2>
                </div>

                <div className="flex flex-col gap-4 pl-[52px]">
                  {items.map(({ subtitle, text, highlight }, i) => (
                    <div
                      key={i}
                      className={highlight ? "p-4 rounded-2xl border-l-[3px]" : ""}
                      style={highlight ? { backgroundColor: "#FFFBE4", borderLeftColor: "#FFB000" } : {}}
                    >
                      {subtitle && (
                        <p
                          className="text-sm font-bold mb-1 font-poppins"
                          style={{ color: "#144400" }}
                        >
                          {subtitle}
                        </p>
                      )}
                      <p
                        className="text-sm leading-relaxed font-poppins text-gray-700"
                      >
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pl-[52px] h-px bg-gray-100" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-16 p-8 rounded-3xl text-center"
            style={{ backgroundColor: "#FFFBE4" }}
          >
            <p
              className="text-lg font-bold mb-2 font-ibrand"
              style={{ color: "#144400" }}
            >
              ¿Tienes preguntas sobre nuestra política de privacidad?
            </p>
            <p
              className="text-sm mb-6 font-poppins text-gray-700"
            >
              Escríbenos y respondemos a la brevedad.
            </p>
            <a
              href="mailto:info@twonutris.net"
              className="inline-flex items-center px-7 py-3 rounded-full text-sm font-bold transition-all duration-200 hover:scale-[1.03] font-poppins no-underline"
              style={{ backgroundColor: "#FFB000", color: "#144400" }}
            >
              Contactar a TwoNutris
            </a>
          </div>
        </div>

      </main>
    </>
  );
}
