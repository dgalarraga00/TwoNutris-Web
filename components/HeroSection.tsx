import Image from "next/image";

/* ─────────────────────────────────────────────────────────────────
   HeroSection — twonutris
   Layout: 2 columnas desktop / apilado mobile
   Left:  Texto rompedor + CTA
   Right: Collage de 3 platos + stickers flotantes
──────────────────────────────────────────────────────────────────── */

const EMOJIS = ["😊", "🧑", "👩"];

export function HeroSection() {
  return (
    <section
      className="min-h-screen flex items-center pt-[72px] relative"
      style={{ backgroundColor: "#FFFBE4" }}
    >
      {/* Patrón de marca como textura de fondo */}
      <div
        className="absolute inset-0 pointer-events-none bg-[url('/patterns/patron-negro.png')] bg-[length:700px] bg-repeat opacity-[0.05]"
      />
      <div className="max-w-[1200px] mx-auto w-full px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">

          {/* ═══════════════════════════════════
              LEFT — Contenido textual
          ═══════════════════════════════════ */}
          <div className="flex flex-col items-start">
            {/* Pill badge */}
            <div
              className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide mb-6 font-poppins"
              style={{
                backgroundColor: "#144400",
                color: "#FFFBE4",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: "#FFB000" }}
              />
              Menú nuevo cada semana
            </div>

            {/* H1 */}
            <h1
              className="animate-fade-up-delay-1 leading-[0.95] tracking-tight mb-6 font-ibrand font-normal"
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 5.2rem)",
                color: "#144400",
              }}
            >
              Ahora{" "}
              <span className="whitespace-nowrap relative inline-block">
                comer bien,
                <svg
                  className="absolute -bottom-2 left-0 w-full h-[12px] overflow-visible"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C60 3 120 1 180 5C220 8 260 4 298 9"
                    stroke="#FFB000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </span>
              <br />
              es aún más fácil.
            </h1>

            {/* Subtítulo */}
            <p
              className="animate-fade-up-delay-2 font-medium leading-relaxed mb-10 max-w-[460px] font-poppins opacity-[0.65]"
              style={{
                fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                color: "#144400",
              }}
            >
              Comida real, cocinada a fuego lento, lista para devorar toda la
              semana.{" "}
              <strong className="opacity-100" style={{ color: "#144400" }}>
                Cero estrés.
              </strong>
            </p>

            {/* CTA Button */}
            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a
                href="/menu"
                className="group flex items-center gap-3 px-7 py-3.5 font-bold rounded-full border-0 cursor-pointer transition-all duration-300 no-underline font-poppins inline-flex hover:-translate-y-[3px] hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(255,176,0,0.55)]"
                style={{ backgroundColor: "#FFB000", color: "#144400", boxShadow: "0 8px 32px rgba(255,176,0,0.4)" }}
              >
                Ver los platos de esta semana
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
                  style={{ backgroundColor: "#144400" }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FFB000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </a>

              <span
                className="text-sm font-semibold font-poppins opacity-50"
                style={{ color: "#144400" }}
              >
                Sin permanencia ✌️
              </span>
            </div>

            {/* Social proof */}
            <div className="animate-fade-up-delay-3 flex items-center gap-3 mt-10">
              <div className="flex">
                {EMOJIS.map((emoji, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-base font-bold relative"
                  >
                    {emoji}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {Array(5).fill(null).map((_, i) => (
                    <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFB000">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span
                  className="text-xs font-semibold font-poppins opacity-[0.65]"
                  style={{ color: "#144400" }}
                >
                  +4.800 clientes felices esta semana
                </span>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════
              RIGHT — Collage 3 platos
          ═══════════════════════════════════ */}
          {/* Wrapper responsivo: 320px mobile → 500px desktop */}
          <div className="animate-scale-in relative mx-auto w-[320px] h-[320px] md:w-[500px] md:h-[500px]">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] origin-top-left scale-[0.64] md:scale-100">
              {/* Blob de fondo */}
              <div className="absolute animate-blob w-[420px] h-[420px]" />
              <div className="absolute animate-blob w-[300px] h-[300px]" />

              {/* ── Plato 1 — GRANDE, ancla visual (hero-plate) ── */}
              <div
                className="absolute w-[260px] h-[260px] rounded-full overflow-hidden z-[10] top-[80px] left-[60px]"
              >
                <Image
                  src="/images/hero-plate.png"
                  alt="Plato principal twonutris"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 260px, 520px"
                  quality={90}
                  priority
                />
              </div>

              {/* ── Plato 2 — MEDIANO, abajo a la derecha (beef stir fry) ── */}
              <div
                className="absolute w-[195px] h-[195px] rounded-full overflow-hidden z-[9] bottom-[40px] right-[20px]"
              >
                <Image
                  src="/images/plate-2.png"
                  alt="Plato de carne twonutris"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 195px, 390px"
                  quality={90}
                />
              </div>

              {/* ── Plato 3 — PEQUEÑO, arriba a la derecha (ensalada) ── */}
              <div
                className="absolute w-[150px] h-[150px] rounded-full overflow-hidden z-[11] top-[20px] right-[40px]"
              >
                <Image
                  src="/images/plate-3.png"
                  alt="Ensalada twonutris"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 150px, 300px"
                  quality={90}
                />
              </div>

              {/* ── Sticker 1 — Sin conservantes ── */}
              <div
                className="absolute animate-float z-20 flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm whitespace-nowrap font-poppins bg-white -rotate-6 shadow-[0_8px_24px_rgba(0,0,0,0.10)] top-[130px] -left-5"
                style={{ color: "#144400" }}
              >
                <span className="text-base">🥦</span>
                <span>Sin conservantes</span>
              </div>

              {/* ── Sticker 2 — Calentar y listo ── */}
              <div
                className="absolute animate-float-delay-1 z-20 flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm whitespace-nowrap font-poppins bg-white rotate-[4deg] shadow-[0_8px_24px_rgba(0,0,0,0.10)] top-4 left-[130px]"
                style={{ color: "#144400" }}
              >
                <span className="text-base">🔥</span>
                <span>Calentar y listo</span>
              </div>

              {/* ── Sticker 3 — Delivery semanal ── */}
              <div
                className="absolute animate-float-delay-2 z-20 flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm whitespace-nowrap font-poppins bg-white -rotate-3 shadow-[0_8px_24px_rgba(0,0,0,0.10)] bottom-7 left-4"
                style={{ color: "#144400" }}
              >
                <span className="text-base">🛵</span>
                <span>Delivery semanal</span>
              </div>

              {/* Dots decorativos */}
              <div className="absolute w-3 h-3 rounded-full z-[5]" />
              <div className="absolute w-2 h-2 rounded-full z-[5]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
