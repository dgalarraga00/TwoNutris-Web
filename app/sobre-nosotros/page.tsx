import Image from "next/image";
import {
  Award,
  Search,
  Leaf,
  Clock,
  Heart,
  CheckCircle2,
  MapPin,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { CookieBannerSlot } from "@/components/CookieBannerSlot";

const VALORES = [
  {
    icon: Award,
    title: "Calidad y Excelencia",
    desc: "Seleccionamos cada ingrediente con el mismo cuidado que si cocináramos para nuestra propia familia.",
  },
  {
    icon: Search,
    title: "Transparencia y Honestidad",
    desc: "Sabés exactamente qué comés: ingredientes reales, macros visibles, sin letra chica.",
  },
  {
    icon: Leaf,
    title: "Sostenibilidad",
    desc: "Packaging eco-friendly, ingredientes de temporada y proveedores locales responsables.",
  },
  {
    icon: Clock,
    title: "Puntualidad y Confiabilidad",
    desc: "Tu comida llega cuando prometemos. Sin excusas, sin sorpresas desagradables.",
  },
  {
    icon: Heart,
    title: "Empatía y Apoyo",
    desc: "Entendemos tu ritmo de vida. Por eso diseñamos planes que se adaptan a ti, no al revés.",
  },
];

const ZONAS = [
  "Quito Norte",
  "Quito Centro",
  "Quito Sur",
  "Cumbayá",
  "Tumbaco",
  "Valle de los Chillos",
];

const PASOS = [
  {
    num: "01",
    title: "Ingredientes de alta calidad",
    desc: "Trabajamos con proveedores locales seleccionados. Nada entra a nuestra cocina si no pasa nuestros estándares de frescura.",
  },
  {
    num: "02",
    title: "Cocinamos con pasión",
    desc: "Todo se prepara en cocinas certificadas bajo estrictos protocolos de higiene. Como en casa, pero con escala profesional.",
  },
  {
    num: "03",
    title: "Packaging y delivery seguro",
    desc: "Empaques y comida que se entrega puntual directo a tu puerta o empresa.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://home.twonutris.net/" },
              { "@type": "ListItem", position: 2, name: "Sobre nosotros", item: "https://home.twonutris.net/sobre-nosotros" },
            ],
          }),
        }}
      />
      <Navbar />

      <main className="bg-white">

        {/* ── 1. Hero: Nuestra Historia ─────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-20">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Texto */}
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full font-poppins bg-amber text-leaf">
                Quiénes somos
              </span>
              <h1 className="text-5xl md:text-6xl leading-tight mb-6 font-ibrand text-leaf">
                Nuestra Historia
              </h1>
              <div className="flex flex-col gap-4 text-base leading-relaxed font-poppins text-gray-700">
                <p>
                  Somos <strong className="text-leaf">Cami y David</strong>, y sabemos que comer bien a diario de forma rica y saludable es fundamental — pero también uno de los mayores desafíos del ritmo de vida moderno.
                </p>
                <p>
                  Vivimos en carne propia esa lucha: entre el trabajo, las responsabilidades y el tiempo que nunca alcanza, terminábamos eligiendo lo rápido sobre lo nutritivo. La comida rápida, los pedidos de último momento, los almuerzos saltados.
                </p>
                <p>
                  Fue así que nació <strong className="text-leaf">twonutris</strong>: la convicción de que todos merecen acceder a comida casera, auténtica y equilibrada sin sacrificar tiempo ni sabor. No somos una dieta, somos tu aliado del día a día.
                </p>
              </div>
            </div>

            {/* Composición de 3 fotos */}
            <div className="flex flex-col gap-4">
              <div className="relative w-full overflow-hidden rounded-[2rem] aspect-[16/10]">
                <Image
                  src="/images/img-equipo4.jpeg"
                  alt="El equipo de twonutris"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-square">
                  <Image
                    src="/images/img-equipo2.jpeg"
                    alt="twonutris cocina"
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                </div>
                <div className="relative overflow-hidden rounded-[1.5rem] aspect-square">
                  <Image
                    src="/images/img-equipo3.jpeg"
                    alt="twonutris platos"
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── 2. Banner de autoridad ────────────────────────────── */}
        <div className="px-4 my-8">
          <div className="max-w-[1200px] mx-auto px-8 md:px-14 py-14 relative overflow-hidden rounded-[3rem] bg-cream">
            <div className="grid md:grid-cols-3 gap-10 items-center relative z-10">

              {/* Cita */}
              <div className="md:col-span-2">
                <p className="text-2xl md:text-3xl font-bold italic leading-snug mb-6 font-ibrand text-leaf">
                  "Creemos que comer sano no debería ser complicado ni mucho menos aburrido."
                </p>
                <p className="text-sm font-poppins opacity-65 text-leaf">
                  — Cami & David, fundadores de twonutris
                </p>
              </div>

              {/* Stats */}
              <div className="flex md:flex-col gap-8 md:gap-6">
                <div>
                  <p className="text-5xl font-black leading-none font-ibrand text-leaf">
                    +30.000
                  </p>
                  <p className="text-sm mt-1 font-poppins opacity-70 text-leaf">
                    comidas entregadas
                  </p>
                </div>
                <div>
                  <p className="text-5xl font-black leading-none font-ibrand text-leaf">
                    4 años
                  </p>
                  <p className="text-sm mt-1 font-poppins opacity-70 text-leaf">
                    de experiencia
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── 3. Nuestros Valores ───────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full font-poppins text-leaf"
              style={{ backgroundColor: "rgba(20,68,0,0.07)" }}
            >
              Lo que nos mueve
            </span>
            <h2 className="text-4xl md:text-5xl font-ibrand text-leaf">
              Nuestros Valores
            </h2>
          </div>

          {/* Fila 1: 3 tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {VALORES.slice(0, 3).map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-4 p-7 rounded-3xl bg-white shadow-[0_4px_20px_rgba(20,68,0,0.07)]"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cream">
                  <Icon size={22} strokeWidth={1.8} className="text-leaf" />
                </div>
                <div>
                  <p className="text-base font-bold mb-1 font-poppins text-leaf">
                    {title}
                  </p>
                  <p className="text-sm leading-relaxed font-poppins text-gray-500">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fila 2: 2 tarjetas centradas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-24">
            {VALORES.slice(3).map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-4 p-7 rounded-3xl bg-white shadow-[0_4px_20px_rgba(20,68,0,0.07)]"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-cream">
                  <Icon size={22} strokeWidth={1.8} className="text-leaf" />
                </div>
                <div>
                  <p className="text-base font-bold mb-1 font-poppins text-leaf">
                    {title}
                  </p>
                  <p className="text-sm leading-relaxed font-poppins text-gray-500">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. Cómo lo hacemos + Zonas ───────────────────────── */}
        <div className="bg-white">
          <div className="max-w-[1200px] mx-auto px-6 pt-28 pb-36">
            <div className="grid md:grid-cols-12 gap-10">

              {/* Columna izquierda: el proceso */}
              <div className="md:col-span-7">
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full font-poppins text-leaf"
                  style={{ backgroundColor: "rgba(20,68,0,0.07)" }}
                >
                  El proceso
                </span>
                <h2 className="text-4xl md:text-5xl mb-10 font-ibrand text-leaf">
                  ¿Cómo lo hacemos?
                </h2>

                <div className="flex flex-col gap-8">
                  {PASOS.map((paso, i) => (
                    <div key={paso.num} className="flex gap-5 items-start">
                      {/* Número + línea */}
                      <div className="flex flex-col items-center flex-shrink-0">
                        <div className="flex items-center justify-center w-11 h-11 rounded-full text-sm font-black font-ibrand bg-leaf text-cream">
                          {paso.num}
                        </div>
                        {i < PASOS.length - 1 && (
                          <div className="w-0.5 h-12 mt-2" style={{ backgroundColor: "rgba(20,68,0,0.12)" }} />
                        )}
                      </div>
                      <div className="pb-2">
                        <p className="text-base font-bold mb-1 font-poppins text-leaf">
                          {paso.title}
                        </p>
                        <p className="text-sm leading-relaxed font-poppins text-gray-500">
                          {paso.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Columna derecha: zonas */}
              <div className="md:col-span-5">
                <div className="p-8 rounded-3xl h-full bg-cream">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber">
                      <MapPin size={18} strokeWidth={2} className="text-leaf" />
                    </div>
                    <h3 className="text-xl font-bold font-ibrand text-leaf">
                      Zonas de entrega
                    </h3>
                  </div>

                  <div className="flex flex-col gap-3">
                    {ZONAS.map((zona) => (
                      <div key={zona} className="flex items-center gap-3">
                        <CheckCircle2 size={18} strokeWidth={2} className="shrink-0 text-leaf" />
                        <span className="text-sm font-medium font-poppins text-leaf">
                          {zona}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-8 p-4 rounded-2xl text-sm font-poppins text-leaf"
                    style={{ backgroundColor: "rgba(20,68,0,0.06)" }}
                  >
                    ¿No ves tu zona? Escribinos — estamos expandiendo continuamente.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>

      <CookieBannerSlot />
    </>
  );
}
