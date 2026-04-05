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
    canonical: "https://home.twonutris.net/terminos",
  },
};

const SECTIONS: TermsSection[] = [
  {
    num: "1",
    title: "Uso de la App y Sistema de Créditos",
    items: [
      {
        subtitle: "Envíos Disponibles",
        text: `Al contratar un plan, el cliente recibe 20 créditos ("Envíos Disponibles") en su perfil de la Web App. Cada comida solicitada descuenta un crédito.`,
      },
      {
        subtitle: "Responsabilidad de Programación",
        text: "Es responsabilidad exclusiva del cliente ingresar a la App y seleccionar sus menús. TwoNutris no envía comida automáticamente. Si el cliente no programa sus pedidos dentro del tiempo de vigencia, la empresa no se hace responsable por los créditos no utilizados.",
      },
      {
        subtitle: "Cierre de Pedidos (Sin excepciones)",
        text: `La plataforma permite ordenar o cancelar comidas únicamente con anticipación (hasta las 23:59 del día anterior). La App bloquea cualquier solicitud de pedido o cancelación para el "mismo día", ya que la producción inicia de madrugada.`,
      },
    ],
  },
  {
    num: "2",
    title: "Vigencia y Caducidad (Días Hábiles)",
    items: [
      {
        subtitle: "Regla de los 30 Días Hábiles",
        text: "El plan de 20 comidas tiene una vigencia improrrogable de 30 días hábiles (lunes a viernes) para ser consumido en su totalidad.",
      },
      {
        subtitle: "Fines de Semana y Feriados",
        text: "Los sábados, domingos y feriados nacionales no cuentan en el reloj de caducidad.",
      },
      {
        subtitle: "Caducidad Definitiva",
        text: `Si al cumplirse el día hábil número 30 desde la compra el cliente aún tiene "Envíos Disponibles" en su cuenta, estos expirarán automáticamente y se perderán. No se realizarán reembolsos ni extensiones de tiempo por créditos no consumidos por olvido o falta de planificación del usuario.`,
      },
    ],
  },
  {
    num: "3",
    title: `Logística de Entrega y "Entregas Fallidas"`,
    items: [
      {
        subtitle: "Cobertura y Costo",
        text: "El valor del transporte está incluido en el precio del plan dentro de nuestras zonas de cobertura.",
      },
      {
        subtitle: "Horario de Entrega (Garantía 14:00)",
        text: "Las rutas son dinámicas. Garantizamos la entrega antes de las 14:00. Retrasos debidos exclusivamente a fuerza mayor (cierres viales, accidentes graves, clima extremo) no serán causal de reembolso, aunque se notificará al cliente la demora.",
      },
      {
        subtitle: "Protocolo de Recepción",
        text: "El cliente debe asegurar que haya una persona o un lugar seguro (recepción/garita) para recibir el pedido.",
      },
      {
        subtitle: "Política de Entrega Fallida",
        text: "Si el motorizado llega al punto y no hay quien reciba, no hay recepción/garita habilitada, o el cliente no contesta el teléfono tras 5 minutos de espera: el pedido retornará a base y, por seguridad alimentaria, será desechado. El crédito de ese día se dará por consumido y no podrá recuperarse, ya que el plato fue preparado y transportado.",
      },
    ],
  },
  {
    num: "4",
    title: "Cambios de Dirección (Excepción vía WhatsApp)",
    items: [
      {
        subtitle: "Notificación Manual",
        text: "Si el cliente necesita recibir su comida en una ubicación diferente a la registrada, debe solicitarlo vía WhatsApp con 24 horas de anticipación. La Web App no permite editar direcciones.",
      },
      {
        subtitle: "Solicitudes de Último Minuto",
        text: `Cambios de dirección solicitados el "mismo día" de la entrega no podrán ser procesados por logística de rutas. El pedido se entregará en la dirección original.`,
      },
    ],
  },
  {
    num: "5",
    title: "Política de Cancelación y Devoluciones",
    items: [
      {
        subtitle: "No Reembolsos",
        text: "Una vez iniciado el plan (consumido el primer crédito), no se realizan devoluciones de dinero parciales ni totales.",
      },
      {
        subtitle: "Subjetividad Gastronómica",
        text: `TwoNutris garantiza la calidad y frescura de los ingredientes. Sin embargo, no se aceptarán devoluciones ni reclamos basados en gustos personales subjetivos (ej. "no me gustó el aderezo", "tenía mucha sal para mi gusto").`,
      },
      {
        subtitle: "Cancelación de Pedidos Diarios",
        text: "Día anterior (vía App): el crédito retorna a tu saldo disponible. Mismo día: el crédito se descuenta y se pierde (el alimento ya fue producido).",
      },
    ],
  },
  {
    num: "6",
    title: "Salud, Alérgenos y Seguridad Alimentaria",
    items: [
      {
        subtitle: "Empaques y Conservación",
        text: "Nuestros empaques son eco-friendly y aptos para microondas. Al ser comida fresca cocinada diariamente (sin conservantes industriales agresivos), es obligación del cliente refrigerar el producto inmediatamente tras la recepción. TwoNutris no responde por la descomposición del alimento debida a un mal almacenamiento por parte del usuario.",
      },
      {
        subtitle: "Responsabilidad de Verificación",
        text: "TwoNutris no solicita ni almacena historiales clínicos ni listas de alergias. Es responsabilidad exclusiva del cliente leer los ingredientes de cada plato antes de seleccionarlo y consumirlo.",
      },
      {
        subtitle: "Declaración de Trazas",
        text: "En nuestras instalaciones se procesan diariamente: gluten, lácteos, huevos, maní, nueces, soja, pescado y mariscos. Existe riesgo de contaminación cruzada (trazas). TwoNutris no asume responsabilidad por reacciones alérgicas derivadas de falta de lectura de la etiqueta, selección voluntaria de platos con alérgenos, o trazas accidentales propias de una cocina comercial. El cliente con alergias severas consume los alimentos bajo su propio riesgo.",
      },
    ],
  },
  {
    num: "7",
    title: "Política de Referidos y Anti-Fraude",
    items: [
      {
        subtitle: "Uso de Créditos",
        text: "Los saldos obtenidos por referidos son solo para canje en la App y no son reembolsables en efectivo.",
      },
      {
        subtitle: "Anti-Fraude",
        text: "Está prohibido crear múltiples cuentas para autoinvitarse. Si detectamos coincidencias sospechosas (IP, Dirección, Tarjeta), TwoNutris se reserva el derecho de cancelar los créditos y suspender las cuentas sin previo aviso.",
      },
    ],
  },
  {
    num: "8",
    title: "Aviso Legal",
    items: [
      {
        subtitle: "Datos del Titular",
        text: "Nombre Comercial: TwoNutris · Razón Social: Camila Ponce · RUC: 1751880533001 · Domicilio: Av. Andalucía y Alfredo Mena Caamaño · Contacto: info@twonutris.net",
      },
      {
        subtitle: "Propiedad Intelectual",
        text: "El uso de la App TwoNutris implica la aceptación de estos Términos y Condiciones. Todos los contenidos (imágenes de platos, logotipos, textos) son propiedad intelectual de TwoNutris.",
      },
    ],
  },
  {
    num: "9",
    title: "Política de Calidad",
    items: [
      {
        subtitle: "Transparencia",
        text: "Etiquetamos cada plato con ingredientes reales y alérgenos visibles.",
      },
      {
        subtitle: "Frescura",
        text: "Cocinamos diariamente, evitando el uso de conservantes industriales.",
      },
      {
        subtitle: "Sostenibilidad",
        text: "Utilizamos empaques eco-friendly que reducen el impacto ambiental.",
      },
      {
        subtitle: "Seguridad",
        text: "Mantenemos estrictos protocolos de higiene en cocina, aunque advertimos siempre sobre la posibilidad de trazas para proteger a nuestros clientes más sensibles.",
      },
    ],
  },
];

export default function TerminosPage() {
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
            Versión oficial · Abril 2026
          </p>
          <h1
            className="text-4xl md:text-5xl leading-tight mb-4 font-ibrand"
            style={{ color: "#144400" }}
          >
            Términos y Condiciones
          </h1>
          <p
            className="text-base leading-relaxed font-poppins text-gray-700"
          >
            Al adquirir un plan en TwoNutris, el cliente acepta los siguientes términos y condiciones. Estos puntos regulan el uso de nuestra Web App y Web, la logística de entrega y las políticas de consumo para garantizar un servicio transparente y de calidad.
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-[780px] mx-auto px-6 py-16">
        <div className="flex flex-col gap-12">
          {SECTIONS.map(({ num, title, items }) => (
            <div key={num}>
              {/* Número + título */}
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

              {/* Items */}
              <div className="flex flex-col gap-5 pl-[52px]">
                {items.map(({ subtitle, text }) => (
                  <div key={subtitle}>
                    <p
                      className="text-sm font-bold mb-1 font-poppins"
                      style={{ color: "#144400" }}
                    >
                      {subtitle}
                    </p>
                    <p
                      className="text-sm leading-relaxed font-poppins text-gray-700"
                    >
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Separador */}
              <div className="mt-10 pl-[52px] h-px bg-gray-100" />
            </div>
          ))}
        </div>

        {/* CTA final */}
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
          <p
            className="text-sm mb-6 font-poppins text-gray-700"
          >
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
