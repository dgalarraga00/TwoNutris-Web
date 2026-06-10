"use client";

import Image from "next/image";
import { useRef } from "react";

/* ─────────────────────────────────────────────────────────────────
   HowItWorks — twonutris
   Sección 1: ¿Por qué twonutris? (layout asimétrico)
   Sección 2: ¿Cómo funciona?    (3 pasos numerados)
──────────────────────────────────────────────────────────────────── */

const STEPS = [
  {
    iconSrc: "/icons/menu.png",
    title: "Elige",
    text: "Selecciona tus platos en nuestra web.",
    circleBg: "#FFFBE4",
    rotateDeg: -6,
  },
  {
    iconSrc: "/icons/food-bag.png",
    title: "Recibe",
    text: "Te lo llevamos fresco cada día.",
    circleBg: "#FFB000",
    rotateDeg: 4,
  },
  {
    iconSrc: "/icons/forkandknife.png",
    title: "¡A comer!",
    text: "Calienta y disfruta sin culpas.",
    circleBg: "#FFFBE4",
    rotateDeg: -3,
  },
];

/* ── Card grande (izquierda) — fondo verde oscuro ───────────────── */
function BigFeatureCard() {
  const blobRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative rounded-3xl overflow-hidden flex flex-col justify-between cursor-default transition-transform duration-300 hover:scale-[1.01] min-h-[420px] p-8"
      style={{ backgroundColor: "#144400" }}
      onMouseEnter={() => {
        if (blobRef.current)
          blobRef.current.style.borderRadius = "40% 60% 70% 30% / 40% 70% 30% 60%";
      }}
      onMouseLeave={() => {
        if (blobRef.current)
          blobRef.current.style.borderRadius = "60% 40% 30% 70% / 60% 30% 70% 40%";
      }}
    >
      {/* Blob decorativo */}
      <div
        ref={blobRef}
        className="absolute -bottom-16 -left-16 w-[260px] h-[260px] opacity-50 transition-all duration-700 pointer-events-none bg-leaf-dark"
        style={{
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col gap-6 h-full justify-between">
        {/* Icono */}
        <div
          className="flex items-center justify-center w-[72px] h-[72px] rounded-2xl"
          style={{
            backgroundColor: "rgba(255, 176, 0, 0.15)",
          }}
        >
          <Image
            src="/icons/clock-time-saving.png"
            alt="Ahorra tiempo"
            width={44}
            height={44}
            className="brightness-0 invert"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col gap-4">
          <h3
            className="font-ibrand text-[clamp(2rem,3.5vw,3rem)] leading-[1.05]"
            style={{
              color: "#FFFBE4",
            }}
          >
            Ahorra<br />Tiempo
          </h3>
          <p
            className="text-base leading-relaxed max-w-[320px] opacity-70 font-poppins"
            style={{
              color: "#FFFBE4",
            }}
          >
            Comodidad, sin preparar, cocinar, limpiar.{" "}
            <strong style={{ opacity: 1, color: "#FFB000" }}>
              ¡TIEMPO PARA TI!
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Card pequeña reutilizable (derecha) ────────────────────────── */
interface SmallCardProps {
  iconSrc: string;
  iconAlt: string;
  title: string;
  text: string;
  bg: string;
  textColor: string;
  subtextColor: string;
  blobColor: string;
}

function SmallFeatureCard({
  iconSrc,
  iconAlt,
  title,
  text,
  bg,
  textColor,
  subtextColor,
  blobColor,
}: SmallCardProps) {
  const blobRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative rounded-3xl overflow-hidden flex flex-col justify-between cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl p-8 flex-1"
      style={{ backgroundColor: bg }}
      onMouseEnter={() => {
        if (blobRef.current)
          blobRef.current.style.borderRadius = "40% 60% 70% 30% / 40% 70% 30% 60%";
      }}
      onMouseLeave={() => {
        if (blobRef.current)
          blobRef.current.style.borderRadius = "70% 30% 50% 50% / 40% 60% 30% 70%";
      }}
    >
      {/* Blob */}
      <div
        ref={blobRef}
        className="absolute -top-10 -right-10 w-40 h-40 opacity-35 transition-all duration-700 pointer-events-none"
        style={{
          borderRadius: "70% 30% 50% 50% / 40% 60% 30% 70%",
          backgroundColor: blobColor,
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 flex flex-col gap-3">
        <div
          className="flex items-center justify-center w-[52px] h-[52px] rounded-xl"
          style={{
            backgroundColor: `${textColor}18`,
          }}
        >
          <Image src={iconSrc} alt={iconAlt} width={32} height={32} />
        </div>
        <h3
          className="text-2xl mt-1 font-ibrand"
          style={{ color: textColor }}
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed opacity-80 font-poppins"
          style={{
            color: subtextColor,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}

/* ── Paso ───────────────────────────────────────────────────────── */
function StepCard({
  iconSrc,
  title,
  text,
  circleBg,
  rotateDeg,
}: (typeof STEPS)[number]) {
  const circleRef = useRef<HTMLDivElement>(null);

  return (
    <div className="flex flex-col items-center text-center gap-4">
      {/* Círculo irregular con icono */}
      <div
        className="relative flex items-center justify-center w-[140px] h-[140px] cursor-default"
        onMouseEnter={() => {
          if (circleRef.current) {
            circleRef.current.style.transform = `rotate(${rotateDeg + 8}deg) scale(1.06)`;
          }
        }}
        onMouseLeave={() => {
          if (circleRef.current) {
            circleRef.current.style.transform = `rotate(${rotateDeg}deg) scale(1)`;
          }
        }}
      >
        <div
          ref={circleRef}
          className="absolute inset-0 transition-all duration-500"
          style={{
            borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
            backgroundColor: circleBg,
            transform: `rotate(${rotateDeg}deg)`,
            boxShadow:
              circleBg === "#FFB000"
                ? "0 8px 32px rgba(255, 176, 0, 0.3)"
                : "0 8px 24px rgba(20, 68, 0, 0.07)",
          }}
        />
        <Image
          src={iconSrc}
          alt={title}
          width={64}
          height={64}
          className="relative z-10 object-contain"
        />
      </div>

      {/* Textos */}
      <h3
        className="text-2xl mt-2 font-ibrand"
        style={{ color: "#144400" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed max-w-[180px] font-poppins text-gray-700"
      >
        {text}
      </p>
    </div>
  );
}

/* ── Treasure Map Steps ─────────────────────────────────────────── */
function TreasureMapSteps() {
  const positions = [
    "left-[6%] top-0",
    "left-[56%] top-[200px]",
    "left-[6%] top-[400px]",
  ];

  return (
    <div className="relative w-full">
      {/* Mobile: flow vertical */}
      <div className="md:hidden flex flex-col gap-16 items-center py-8">
        {STEPS.map((step) => (
          <StepCard key={step.title} {...step} />
        ))}
      </div>

      {/* Desktop: zigzag absoluto */}
      <div className="hidden md:block relative h-[600px]">
        {/* Línea entrecortada S-curve estática */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-[0]"
          aria-hidden="true"
        >
          <path
            d="M 179 70 C 179 170, 755 170, 755 270 C 755 370, 179 370, 179 470"
            fill="none"
            stroke="rgba(20, 68, 0, 0.05)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M 179 70 C 179 170, 755 170, 755 270 C 755 370, 179 370, 179 470"
            fill="none"
            stroke="rgba(20, 68, 0, 0.2)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="8 9"
          />
          <circle cx="179" cy="70"  r="5" fill="#FFB000" />
          <circle cx="755" cy="270" r="5" fill="#FFB000" />
          <circle cx="179" cy="470" r="5" fill="#FFB000" />
        </svg>

        {STEPS.map((step, i) => (
          <div
            key={step.title}
            className={`absolute w-[220px] z-[10] ${positions[i]}`}
          >
            <StepCard {...step} />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Componente principal ───────────────────────────────────────── */
export function HowItWorks() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* ══════════════════════════════════════
            SECCIÓN 1 — ¿Por qué twonutris?
        ══════════════════════════════════════ */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full font-poppins"
            style={{
              backgroundColor: "#FFFBE4",
              color: "#144400",
            }}
          >
            Nuestras ventajas
          </span>
          <h2
            className="text-4xl md:text-5xl font-ibrand"
            style={{ color: "#144400" }}
          >
            ¿Por qué twonutris?
          </h2>
        </div>

        {/* Grid asimétrico: card grande izquierda + 2 cards apiladas derecha */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {/* Card grande — 3 columnas */}
          <div className="md:col-span-3">
            <BigFeatureCard />
          </div>

          {/* Columna derecha — 2 columnas, 2 cards apiladas */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <SmallFeatureCard
              iconSrc="/icons/food-delivery.png"
              iconAlt="Entrega diaria"
              title="Entrega Diaria"
              text="Tu comida diaria en donde estés. Sin salir a comprar."
              bg="#FFB000"
              textColor="#144400"
              subtextColor="#144400"
              blobColor="#e69500"
            />
            <SmallFeatureCard
              iconSrc="/icons/healthy-food-nutrition.png"
              iconAlt="Nutrición balanceada"
              title="Nutrición Balanceada"
              text="Comida variada, sana y equilibrada. Con productos de calidad."
              bg="#FFFBE4"
              textColor="#144400"
              subtextColor="#374151"
              blobColor="#c8e8a0"
            />
          </div>
        </div>

        {/* ══════════════════════════════════════
            SEPARADOR
        ══════════════════════════════════════ */}
        <div className="flex items-center gap-4 my-24">
          <div className="flex-1 h-px bg-gray-200" />
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: "#FFB000" }}
          />
          <div
            className="w-3 h-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: "#144400" }}
          />
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: "#FFB000" }}
          />
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* ══════════════════════════════════════
            SECCIÓN 2 — ¿Cómo funciona?
        ══════════════════════════════════════ */}
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-6xl mb-4 font-ibrand"
            style={{ color: "#144400" }}
          >
            ¿Cómo funciona?
          </h2>
          <p
            className="text-base md:text-lg max-w-[520px] mx-auto leading-relaxed font-poppins text-gray-700"
            style={{ opacity: 0.8 }}
          >
            Tan fácil como 1, 2, 3. Empieza a cuidarte de manera{" "}
            <strong style={{ color: "#144400", opacity: 1 }}>
              simple, rápida y deliciosa.
            </strong>
          </p>
        </div>

        {/* Treasure map layout */}
        <TreasureMapSteps />

        {/* CTA final */}
        <div className="flex justify-center mt-20">
          <a
            href="https://www.twonutris.net/registrate"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-7 py-3.5 font-bold rounded-full border-0 cursor-pointer transition-all duration-200 ease-out no-underline font-poppins shadow-[0_8px_32px_rgba(255,176,0,0.35)] hover:shadow-[0_16px_40px_rgba(255,176,0,0.5)] hover:-translate-y-[3px] hover:scale-[1.02]"
            style={{
              backgroundColor: "#FFB000",
              color: "#144400",
            }}
          >
            Quiero empezar ahora
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
        </div>

      </div>
    </section>
  );
}
