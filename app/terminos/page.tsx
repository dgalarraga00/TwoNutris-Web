import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";

interface TermsItem {
  subtitle: string;
  text: string;
}

interface TermsSection {
  num: string;
  title: string;
  items: TermsItem[];
}

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Leé los términos y condiciones del servicio de TwoNutris. Todo lo que necesitás saber sobre el uso de la plataforma.",
  alternates: {
    canonical: "https://www.twonutris.com/terminos",
  },
};

const SECTIONS: TermsSection[] = [
  {
    num: "1",
    title: "Modelo de Pedidos y Cierre Semanal (Cut-off)",
    items: [
      {
        subtitle: "Ciclo de Pedidos",
        text: "TwoNutris opera bajo un modelo de menús rotativos semanales. Los pedidos se agrupan y producen en bloques exactos para garantizar frescura y cero desperdicio.",
      },
      {
        subtitle: "Corte Estricto (Miércoles 23:59)",
        text: "La ventana para ordenar, modificar o cancelar un pedido para la semana en curso se cierra irrevocablemente el día miércoles a las 23:59.",
      },
      {
        subtitle: "Asignación de Entregas",
        text: "Todo pedido ingresado y pagado entre el jueves (00:00) y el miércoles (23:59) será preparado y entregado el domingo inmediatamente posterior. Los pedidos ingresados a partir del jueves siguiente a las 00:01 corresponderán a la semana entrante y serán entregados el domingo de esa semana.",
      },
    ],
  },
  {
    num: "2",
    title: "Logística de Entrega (Exclusiva los días Domingo)",
    items: [
      {
        subtitle: "Cobertura y Costo",
        text: "El costo de delivery es de $3 por pedido dentro de nuestras zonas de cobertura en Quito. Zonas periféricas pueden tener un costo diferenciado indicado al momento del pago.",
      },
      {
        subtitle: "Día Único de Reparto",
        text: "Las entregas se realizan exclusivamente los días domingo. Las rutas son dinámicas y se organizan para optimizar la cadena de frío.",
      },
      {
        subtitle: "Protocolo de Recepción",
        text: "El cliente debe asegurar que haya una persona o un lugar seguro (recepción/garita) para recibir el pedido completo de su semana.",
      },
      {
        subtitle: "Política de Entrega Fallida",
        text: "Si el motorizado llega al punto y no hay quien reciba, no hay recepción habilitada, o el cliente no contesta el teléfono tras 5 minutos de espera, el pedido retornará a base. Por seguridad alimentaria, no se reprogramarán entregas para días posteriores y el pedido se dará por perdido sin derecho a reembolso.",
      },
    ],
  },
  {
    num: "3",
    title: "Conservación y Seguridad Alimentaria (Responsabilidad del Cliente)",
    items: [
      {
        subtitle: "Refrigeración Inmediata",
        text: "Al recibir los alimentos para toda la semana, es obligación estricta y exclusiva del cliente refrigerar todos los empaques inmediatamente.",
      },
      {
        subtitle: "Frescura sin Conservantes",
        text: "Nuestra comida es fresca y cocinada sin conservantes industriales agresivos. TwoNutris no responde por la descomposición del alimento debida a cortes de luz en el domicilio del cliente, rupturas de la cadena de frío posterior a la entrega, o un almacenamiento negligente.",
      },
      {
        subtitle: "Empaques",
        text: "Utilizamos envases eco-friendly aptos para microondas, diseñados para mantener la integridad del alimento en refrigeración durante los días estipulados del menú.",
      },
    ],
  },
  {
    num: "4",
    title: "Cambios de Dirección y Cancelaciones",
    items: [
      {
        subtitle: "Cambios de Dirección",
        text: "Si el cliente necesita recibir su comida del domingo en una ubicación diferente a la registrada en la web, debe solicitarlo vía WhatsApp estrictamente antes del cierre semanal (miércoles 23:59). No se aceptarán cambios de ruta de último minuto durante el fin de semana de producción y despacho.",
      },
      {
        subtitle: "Cancelaciones",
        text: "Se aceptan cancelaciones con reembolso o reprogramación únicamente antes del cierre del miércoles a las 23:59. Una vez que el sistema hace el corte e inicia el proceso de compra de ingredientes (jueves), no se realizarán devoluciones parciales ni totales.",
      },
      {
        subtitle: "Subjetividad Gastronómica",
        text: `No se aceptarán devoluciones ni reclamos basados en gustos personales (ej. "no me gustó el aderezo", "tenía mucha sal para mi gusto").`,
      },
    ],
  },
  {
    num: "5",
    title: "Pagos y Facturación Electrónica",
    items: [
      {
        subtitle: "Pasarela Segura",
        text: "Todos los pagos se procesan de forma encriptada y segura a través de PayPhone. TwoNutris no almacena datos de tarjetas de crédito.",
      },
      {
        subtitle: "Facturación",
        text: "La plataforma emite automáticamente la factura electrónica avalada por el SRI utilizando los datos fiscales (Cédula/RUC o Consumidor Final) ingresados por el cliente en el formulario de pago. Es responsabilidad del cliente ingresar correctamente esta información antes de pagar.",
      },
    ],
  },
  {
    num: "6",
    title: "Salud y Alérgenos",
    items: [
      {
        subtitle: "Responsabilidad de Verificación",
        text: "TwoNutris no solicita ni almacena historiales clínicos ni listas de alergias. Es responsabilidad exclusiva del cliente leer los ingredientes de cada plato en la web antes de realizar su compra.",
      },
      {
        subtitle: "Declaración de Trazas",
        text: "En nuestras instalaciones se procesan diariamente: gluten, lácteos, huevos, maní, nueces, soja, pescado y mariscos. Existe riesgo de contaminación cruzada (trazas). TwoNutris no asume responsabilidad por reacciones alérgicas. El cliente con alergias severas consume bajo su propio riesgo.",
      },
    ],
  },
  {
    num: "7",
    title: "Aviso Legal",
    items: [
      {
        subtitle: "Datos del Titular",
        text: "Nombre Comercial: TwoNutris · Razón Social: Camila Ponce · RUC: 1751880533001 · Domicilio: América N36-229 y Av. Naciones Unidas, Quito, Pichincha · Contacto: info@twonutris.net",
      },
      {
        subtitle: "Propiedad Intelectual",
        text: "El uso de la plataforma TwoNutris implica la aceptación automática de estos Términos y Condiciones. Todos los contenidos (imágenes, textos, código) son propiedad intelectual exclusiva de la marca.",
      },
    ],
  },
];

export default function TerminosPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
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
              Términos y Condiciones
            </h1>
            <p className="text-base leading-relaxed font-poppins text-gray-700">
              Al realizar un pedido en TwoNutris, el cliente acepta los siguientes términos y condiciones. Estos puntos regulan el uso de nuestra plataforma web, el modelo de pedidos semanales, la logística de entrega y las políticas de consumo para garantizar un servicio transparente y de máxima calidad.
            </p>
          </div>
        </div>

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

                <div className="flex flex-col gap-5 pl-[52px]">
                  {items.map(({ subtitle, text }) => (
                    <div key={subtitle}>
                      <p
                        className="text-sm font-bold mb-1 font-poppins"
                        style={{ color: "#144400" }}
                      >
                        {subtitle}
                      </p>
                      <p className="text-sm leading-relaxed font-poppins text-gray-700">
                        {text}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pl-[52px] h-px bg-gray-100" />
              </div>
            ))}
          </div>

          <div
            className="mt-16 p-8 rounded-3xl text-center"
            style={{ backgroundColor: "#FFFBE4" }}
          >
            <p
              className="text-lg font-bold mb-2 font-ibrand"
              style={{ color: "#144400" }}
            >
              ¿Tenés preguntas sobre estos términos?
            </p>
            <p className="text-sm mb-6 font-poppins text-gray-700">
              Estamos para ayudarte. Escribinos y respondemos a la brevedad.
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
