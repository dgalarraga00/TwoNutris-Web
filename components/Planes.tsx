import {
  CheckCircle2,
  Building2,
  UtensilsCrossed,
  Truck,
  CalendarDays,
  RefreshCw,
  Leaf,
  ShieldCheck,
} from "lucide-react";

const PLANS = [
  {
    id: "semanal",
    name: "Plan Semanal",
    price: "$35",
    period: "/ semana",
    description: "Ideal para probar sin compromiso",
    image: "/images/Bowl Buddha Mediterráneo.png",
    featured: false,
    features: [
      "5 almuerzos de lunes a viernes",
      "Entrega a domicilio incluida",
      "Menú variado cada semana",
      "Sin contrato ni permanencia",
    ],
  },
  {
    id: "almuerzo",
    name: "Solo Almuerzo",
    price: "$115",
    period: "/ mes",
    description: "Tu almuerzo listo cada día",
    image: "/images/Pollo al horno a las finas hierbas con papas.png",
    featured: false,
    features: [
      "20 almuerzos al mes",
      "Entrega a domicilio incluida",
      "Menú renovado cada semana",
      "Pausa o cancela cuando quieras",
    ],
  },
  {
    id: "almuerzo-snack",
    name: "Almuerzo + Snack",
    price: "$138",
    period: "/ mes",
    description: "El favorito de nuestros clientes",
    image: "/images/hero-plate.png",
    featured: true,
    features: [
      "20 almuerzos al mes",
      "20 snacks saludables",
      "Entrega a domicilio incluida",
      "Menú renovado cada semana",
      "Pausa o cancela cuando quieras",
    ],
  },
  {
    id: "completo",
    name: "Plan Completo",
    price: "$213",
    period: "/ mes",
    description: "Nutrición completa todo el día",
    image: "/images/Filete de res con arroz.png",
    featured: false,
    features: [
      "20 almuerzos + 20 cenas",
      "20 snacks saludables",
      "Entrega a domicilio incluida",
      "Pausa o cancela cuando quieras",
    ],
  },
];

const BENEFITS = [
  { icon: UtensilsCrossed, title: "Menú variado", desc: "Nueva carta cada sábado, sin repetición aburrida." },
  { icon: Truck,           title: "Entrega sin costo", desc: "Llevamos tus platos a la puerta de tu oficina o casa." },
  { icon: CalendarDays,    title: "Sin contratos", desc: "Pausa, cambia o cancela en cualquier momento." },
  { icon: RefreshCw,       title: "Siempre fresco", desc: "Preparado el mismo día de la entrega." },
  { icon: Leaf,            title: "Ingredientes naturales", desc: "Sin conservantes, sin ultraprocesados." },
  { icon: ShieldCheck,     title: "Control nutricional", desc: "Macros y calorías visibles en cada plato." },
];

export function Planes() {
  return (
    <section
      id="planes"
      style={{ backgroundColor: "#FFFBE4" }}
      className="pb-28 overflow-hidden"
    >
      {/* ── Cabecera ─────────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 pt-24 pb-4 text-center">
        <span
          className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full font-poppins"
          style={{ backgroundColor: "#FFB000", color: "#144400" }}
        >
          Precios
        </span>
        <h2
          className="text-5xl md:text-6xl leading-tight mb-4 font-ibrand"
          style={{ color: "#144400" }}
        >
          Planes para tu estilo de vida
        </h2>
        <p
          className="text-base max-w-lg mx-auto font-poppins text-gray-700"
          style={{ opacity: 0.75 }}
        >
          Sin contratos, sin ataduras. Cancela o pausa cuando quieras.
        </p>
      </div>

      {/* ── Grid de planes ───────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl pt-8 px-6 pb-6 transition-transform duration-300${
                plan.featured ? " lg:scale-105 lg:-translate-y-4 bg-[#144400]" : " bg-white"
              }`}
              style={{
                boxShadow: plan.featured
                  ? "0 24px 60px rgba(20, 68, 0, 0.25)"
                  : "0 4px 24px rgba(20, 68, 0, 0.08)",
              }}
            >
              {/* Pildora "Más elegido" */}
              {plan.featured && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap font-poppins"
                  style={{
                    backgroundColor: "#FFB000",
                    color: "#144400",
                    transform: "translateX(-50%) rotate(-2deg)",
                    boxShadow: "0 4px 12px rgba(255, 176, 0, 0.4)",
                  }}
                >
                  ⭐ Más elegido
                </div>
              )}


              {/* Nombre */}
              <p
                className={`text-xs font-bold tracking-widest uppercase mb-1 text-center font-poppins${plan.featured ? "" : " text-gray-600"}`}
                style={plan.featured ? { color: "rgba(255,251,228,0.6)" } : undefined}
              >
                {plan.name}
              </p>

              {/* Precio */}
              <div className="text-center mb-1">
                <span
                  className="text-5xl font-black leading-none font-ibrand"
                  style={{
                    color: plan.featured ? "#FFB000" : "#144400",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  className={`text-sm ml-1 font-poppins${plan.featured ? "" : " text-gray-600"}`}
                  style={plan.featured ? { color: "rgba(255,251,228,0.5)" } : undefined}
                >
                  {plan.period}
                </span>
              </div>

              {/* Descripción */}
              <p
                className={`text-xs text-center mb-5 font-poppins${plan.featured ? "" : " text-gray-500"}`}
                style={plan.featured ? { color: "rgba(255,251,228,0.6)" } : undefined}
              >
                {plan.description}
              </p>

              {/* Separador */}
              <div
                className="w-full mb-5 h-px bg-gray-200"
              />

              {/* Beneficios */}
              <ul className="flex flex-col gap-2.5 mb-6 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      strokeWidth={2}
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: plan.featured ? "#FFB000" : "#144400" }}
                    />
                    <span
                      className={`text-xs leading-relaxed font-poppins${plan.featured ? "" : " text-gray-700"}`}
                      style={plan.featured ? { color: "rgba(255,251,228,0.8)" } : undefined}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Botón */}
              <a
                href={`https://wa.me/593983392007?text=${encodeURIComponent(`Hola, quiero el ${plan.name} (${plan.price}${plan.period}). ¿Me pueden dar más información?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 rounded-full text-sm font-bold cursor-pointer transition-all duration-200 hover:scale-[1.02] flex items-center justify-center font-poppins no-underline ${plan.featured ? "" : "bg-transparent"}`}
                style={
                  plan.featured
                    ? { backgroundColor: "#FFB000", color: "#144400" }
                    : { color: "#144400", border: "1.5px solid rgba(20,68,0,0.25)" }
                }
              >
                Elegir este plan
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* ── Banner empresas ──────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 mt-20">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-6 px-8 py-8"
          style={{
            backgroundColor: "#FFB000",
            borderRadius: "1.5rem 4rem 1.5rem 4rem",
          }}
        >
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center w-12 h-12 rounded-2xl flex-shrink-0"
              style={{ backgroundColor: "rgba(20,68,0,0.12)" }}
            >
              <Building2 size={24} style={{ color: "#144400" }} />
            </div>
            <div>
              <p
                className="text-base font-bold leading-snug font-ibrand"
                style={{ color: "#144400" }}
              >
                ¿Tu empresa tiene más de 10 colaboradores?
              </p>
              <p
                className="text-sm font-poppins"
                style={{ color: "#144400", opacity: 0.75 }}
              >
                Descubrí descuentos especiales y beneficios exclusivos para equipos.
              </p>
            </div>
          </div>
          <a
            href="/empresas"
            className="flex-shrink-0 px-7 py-3.5 rounded-full text-sm font-bold border-0 cursor-pointer transition-all duration-200 hover:scale-[1.03] font-poppins no-underline"
            style={{ backgroundColor: "#144400", color: "#FFFBE4" }}
          >
            Ver planes empresariales
          </a>
        </div>
      </div>

      {/* ── Banda de beneficios ──────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 mt-16">
        <div
          className="p-8 md:p-10 bg-white rounded-[2rem]"
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-8 text-center font-poppins"
            style={{ color: "#FFB000" }}
          >
            ¿Qué incluyen todos los planes?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-7">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
                  style={{ backgroundColor: "#FFFBE4" }}
                >
                  <Icon size={20} strokeWidth={1.8} style={{ color: "#FFB000" }} />
                </div>
                <div>
                  <p
                    className="text-sm font-bold mb-0.5 font-poppins"
                    style={{ color: "#144400" }}
                  >
                    {title}
                  </p>
                  <p
                    className="text-xs leading-relaxed font-poppins text-gray-500"
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
