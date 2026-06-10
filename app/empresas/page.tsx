"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Users, TrendingUp, Smile } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const STATS = [
  {
    number: "80%",
    label: "de empleados agradece tener beneficios de alimentación en el trabajo.",
    icon: Users,
  },
  {
    number: "85%",
    label: "se siente más feliz y motivado cuando su empresa cuida su alimentación.",
    icon: Smile,
  },
  {
    number: "67%",
    label: "de mejora en retención de talento en empresas con beneficios de bienestar.",
    icon: TrendingUp,
  },
];

const BENEFICIOS = [
  "Menú variado y renovado cada semana",
  "Entrega puntual en tu oficina o empresa",
  "Facturación centralizada mensual",
  "Asesor corporativo dedicado",
  "Descuentos por volumen desde 10 colaboradores",
  "Sin contratos de permanencia",
];

export default function EmpresasPage() {
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const [form, setForm] = useState({ empresa: "", colaboradores: "", email: "", telefono: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `Hola, me interesa un plan corporativo.\n\n*Empresa:* ${form.empresa}\n*Colaboradores:* ${form.colaboradores}\n*Email:* ${form.email}\n*Teléfono:* ${form.telefono}\n\n¿Podemos hablar?`;
    window.open(`https://wa.me/593983392007?text=${encodeURIComponent(text)}`, "_blank");
  }

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
              { "@type": "ListItem", position: 2, name: "Empresas", item: "https://home.twonutris.net/empresas" },
            ],
          }),
        }}
      />
      <Navbar />

      <main>

        {/* ── 1. Hero ───────────────────────────────────────────── */}
        <section style={{ backgroundColor: "#FFFBE4" }} className="pt-32 pb-24 overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Texto */}
              <div>
                <span
                  className="inline-block text-xs font-bold tracking-widest uppercase mb-5 px-4 py-1.5 rounded-full font-poppins"
                  style={{ backgroundColor: "#FFB000", color: "#144400" }}
                >
                  Para empresas
                </span>
                <h1
                  className="text-5xl md:text-6xl leading-tight mb-6 font-ibrand"
                  style={{ color: "#144400" }}
                >
                  twonutris para empresas
                </h1>
                <p
                  className="text-lg leading-relaxed mb-8 font-poppins text-gray-700"
                >
                  La forma más inteligente de comer en la oficina. Cuidá a tu equipo con comida real, de calidad y sin complicaciones.
                </p>
                <ul className="flex flex-col gap-3 mb-10">
                  {BENEFICIOS.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <CheckCircle2 size={18} strokeWidth={2} className="shrink-0" style={{ color: "#144400" }} />
                      <span className="text-sm font-poppins text-gray-700">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-bold transition-all duration-200 hover:scale-[1.03] no-underline font-poppins"
                  style={{
                    backgroundColor: "#144400",
                    color: "#FFFBE4",
                    boxShadow: "0 8px 24px rgba(20,68,0,0.25)",
                  }}
                >
                  Solicitar plan corporativo
                </a>
              </div>

              {/* Imagen con blob */}
              <div className="relative flex items-center justify-center min-h-[460px]">
                {/* Blob decorativo */}
                <div
                  className="absolute pointer-events-none w-4/5 h-4/5 top-[10%] left-[10%] opacity-[0.07]"
                  style={{
                    backgroundColor: "#144400",
                    borderRadius: "40% 60% 55% 45% / 55% 45% 60% 40%",
                  }}
                />
                <div
                  className="relative w-full overflow-hidden rounded-[3rem] max-w-[480px] aspect-[4/5]"
                >
                  <Image
                    src="/images/img-equipo1.jpeg"
                    alt="Equipo disfrutando comida twonutris"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                </div>
                {/* Tag flotante */}
                <div
                  className="absolute bottom-8 -left-2 md:-left-8 flex items-center gap-3 px-5 py-3 rounded-2xl font-poppins bg-white"
                  style={{
                    boxShadow: "0 8px 28px rgba(20,68,0,0.14)",
                  }}
                >
                  <div
                    className="flex items-center justify-center w-9 h-9 rounded-xl"
                    style={{ backgroundColor: "#FFB000" }}
                  >
                    <Users size={16} style={{ color: "#144400" }} />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none" style={{ color: "#144400" }}>+50 empresas</p>
                    <p className="text-xs mt-0.5 text-gray-500">ya confían en nosotros</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 2. Stats ──────────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-ibrand"
                style={{ color: "#144400" }}
              >
                Cuidá a tus trabajadores con comida de calidad
              </h2>
              <p
                className="text-base mt-4 max-w-lg mx-auto font-poppins text-gray-500"
              >
                Los números no mienten. La alimentación en el trabajo impacta directamente en la productividad y el bienestar.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {STATS.map(({ number, label, icon: Icon }) => (
                <div
                  key={number}
                  className="relative flex flex-col pt-10 pb-8 px-7 rounded-3xl overflow-visible"
                  style={{ backgroundColor: "#FFFBE4" }}
                >
                  {/* Número desbordando arriba */}
                  <span
                    className="text-7xl font-black leading-none mb-4 -mt-2 font-ibrand"
                    style={{ color: "#144400" }}
                  >
                    {number}
                  </span>
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl mb-4"
                    style={{ backgroundColor: "#FFB000" }}
                  >
                    <Icon size={18} strokeWidth={2} style={{ color: "#144400" }} />
                  </div>
                  <p
                    className="text-sm leading-relaxed font-poppins text-gray-700"
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3. Manifiesto ────────────────────────────────────── */}
        <section className="bg-white py-16">
          <div className="max-w-[1200px] mx-auto px-6">
            <div
              className="relative overflow-hidden rounded-[2rem] px-10 py-14 md:px-16 md:py-16"
              style={{ backgroundColor: "#144400" }}
            >
              {/* Blob decorativo */}
              <div
                className="absolute -top-24 -right-24 pointer-events-none rounded-full"
              />

              <div className="max-w-[680px]">
                <h2
                  className="text-4xl md:text-5xl font-bold leading-tight mb-6 font-ibrand text-white"
                >
                  Algo que tenemos muy claro: la comida que preparamos tiene impacto.
                </h2>
                <p
                  className="text-base font-semibold mb-4 leading-relaxed font-poppins"
                  style={{ color: "#FFB000" }}
                >
                  Cocinamos bajo pedido, trabajamos con productores locales de Quito y los valles, y reducimos el desperdicio al mínimo.
                </p>
                <p
                  className="text-sm leading-relaxed mb-8 font-poppins"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Cada plato que sale de nuestra cocina es el resultado de un proceso consciente: compras ajustadas a la demanda real, ingredientes de temporada y empaques pensados para reducir residuos. Porque cuidar a tu equipo y cuidar el entorno no son cosas distintas.
                </p>

                <div className="flex flex-col gap-5 mb-10">
                  {[
                    {
                      title: "Ingredientes locales y de temporada",
                      desc: "Trabajamos con proveedores de Quito y la región. Menos kilómetros recorridos, más frescura en tu plato.",
                    },
                    {
                      title: "Producción ajustada a la demanda",
                      desc: "Cocinamos exactamente lo que se pidió. Sin excedentes, sin desperdicio, sin conciencia pesada.",
                    },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div
                        className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#FFB000" }}
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5l2.5 2.5L8 3" stroke="#144400" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-bold mb-0.5 font-poppins text-white">
                          {title}
                        </p>
                        <p className="text-xs leading-relaxed font-poppins" style={{ color: "rgba(255,255,255,0.5)" }}>
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="/sobre-nosotros"
                  className="inline-flex items-center px-7 py-3.5 rounded-full text-sm font-bold transition-all duration-200 hover:scale-[1.03] no-underline font-poppins"
                  style={{
                    backgroundColor: "#FFB000",
                    color: "#144400",
                  }}
                >
                  Conocé nuestra historia
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Contacto ──────────────────────────────────────── */}
        <section
          id="contacto"
          className="bg-white py-24"
        >
          <div className="max-w-[560px] mx-auto px-6">
            <h2
              className="text-4xl md:text-5xl text-center mb-12 font-ibrand"
              style={{ color: "#144400" }}
            >
              Hablemos de tu empresa
            </h2>

            {/* Formulario */}
            <div
              className="rounded-3xl p-8"
              style={{ backgroundColor: "#FFB000", boxShadow: "0 24px 60px rgba(20,68,0,0.1)" }}
            >
              <h3
                className="text-2xl font-bold mb-6 font-ibrand"
                style={{ color: "#144400" }}
              >
                Solicitá tu plan corporativo
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { name: "empresa",       label: "Nombre de la empresa",    type: "text",   placeholder: "Ej. Empresa ABC S.A.",  autoComplete: "organization" },
                  { name: "colaboradores", label: "Número de colaboradores", type: "number", placeholder: "Ej. 25",                autoComplete: "off" },
                  { name: "email",         label: "Correo electrónico",      type: "email",  placeholder: "contacto@empresa.com",  autoComplete: "email" },
                  { name: "telefono",      label: "Teléfono / WhatsApp",     type: "tel",    placeholder: "+593 99 000 0000",      autoComplete: "tel" },
                ].map(({ name, label, type, placeholder, autoComplete }) => (
                  <div key={name} className="flex flex-col gap-1.5">
                    <label
                      htmlFor={name}
                      className="text-xs font-bold font-poppins"
                      style={{ color: "#144400" }}
                    >
                      {label}
                    </label>
                    <input
                      id={name}
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      autoComplete={autoComplete}
                      required
                      value={form[name as keyof typeof form]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200 font-poppins text-gray-900 bg-white border-[1.5px] border-[rgba(20,68,0,0.15)] focus:border-[#144400]"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl text-sm font-bold mt-2 cursor-pointer border-0 transition-all duration-200 hover:scale-[1.02] font-poppins"
                  style={{
                    backgroundColor: "#FFFBE4",
                    color: "#144400",
                    boxShadow: "0 4px 16px rgba(20,68,0,0.15)",
                  }}
                >
                  Enviar solicitud por WhatsApp
                </button>
              </form>
            </div>

            {/* Horario */}
            <p
              className="text-xs text-center mt-6 font-poppins"
              style={{ color: "#144400", opacity: 0.75 }}
            >
              Lunes a viernes · 8:00 — 18:00 · Respuesta en menos de 1 hora
            </p>
          </div>
        </section>

      </main>

      <Footer onManageCookies={() => setCookiesOpen(true)} />
      <CookieBanner open={cookiesOpen} onClose={() => setCookiesOpen(false)} />
    </>
  );
}
