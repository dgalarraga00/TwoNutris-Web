"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Info,
  Leaf,
  Flame,
} from "lucide-react";
import { weeklyMenu, type MenuItem } from "@/data/menu";
import { DishModal, ALLERGEN_MAP } from "@/components/DishModal";

/* ── Tarjeta de platillo ────────────────────────────────────────── */
function DishCard({
  plate,
  onInfo,
}: {
  plate: MenuItem;
  onInfo: (plate: MenuItem) => void;
}) {
  return (
    <div
      className="flex-shrink-0 flex flex-col rounded-3xl overflow-hidden snap-start transition-transform duration-300 hover:-translate-y-1 bg-white w-[340px]"
    >
      {/* Imagen */}
      <div className="relative w-full overflow-hidden aspect-[4/3]">
        <Image
          src={plate.image}
          alt={plate.name}
          fill
          className="object-cover"
          sizes="300px"
        />
        {/* Badge calorías */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-poppins"
          style={{
            backgroundColor: "#FFB000",
            color: "#144400",
          }}
        >
          <Flame size={11} strokeWidth={2.5} />
          {plate.calories} kcal
        </div>
      </div>

      {/* Cuerpo */}
      <div className="flex flex-col gap-3 p-4 flex-1">
        {/* Nombre */}
        <h3
          className="text-lg leading-snug font-ibrand"
          style={{ color: "#144400" }}
        >
          {plate.name}
        </h3>

        {/* Macros */}
        <div
          className="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-full self-start font-poppins"
          style={{
            backgroundColor: "#FFFBE4",
            color: "#144400",
          }}
        >
          <span>P: {plate.macros.protein}g</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span>C: {plate.macros.carbs}g</span>
          <span style={{ opacity: 0.3 }}>|</span>
          <span>G: {plate.macros.fat}g</span>
        </div>
      </div>

      {/* Pie */}
      <div
        className="flex items-center justify-between px-4 py-3 mt-auto"
        style={{ borderTop: "1px solid rgba(20, 68, 0, 0.07)" }}
      >
        {/* Alérgenos con tooltip */}
        <div className="flex items-center gap-2">
          {plate.allergens.length === 0 ? (
            <span
              className="text-xs font-poppins"
              style={{ color: "#144400", opacity: 0.35 }}
            >
              Sin alérgenos
            </span>
          ) : (
            plate.allergens.map((a) => {
              const entry = ALLERGEN_MAP[a];
              const Icon = entry?.icon ?? Leaf;
              return (
                <div key={a} className="group relative flex items-center">
                  <div
                    className="flex items-center justify-center w-7 h-7 rounded-full cursor-default"
                    style={{ backgroundColor: "rgba(20, 68, 0, 0.07)" }}
                  >
                    <Icon
                      size={14}
                      strokeWidth={2}
                      style={{ color: "#144400" }}
                    />
                  </div>
                  {/* Tooltip */}
                  <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-poppins"
                    style={{
                      backgroundColor: "#144400",
                      color: "#FFFBE4",
                    }}
                  >
                    {a}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Botón info */}
        <button
          onClick={() => onInfo(plate)}
          className="flex items-center justify-center w-9 h-9 rounded-full border-0 cursor-pointer transition-all duration-200 hover:scale-110"
          style={{
            backgroundColor: "#FFB000",
            color: "#144400",
            boxShadow: "0 4px 12px rgba(255, 176, 0, 0.35)",
          }}
          aria-label={`Ver detalles de ${plate.name}`}
        >
          <Info size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

/* ── Componente principal ───────────────────────────────────────── */
export function HomepageMenuShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedPlate, setSelectedPlate] = useState<MenuItem | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 360;
    scrollRef.current.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="py-24 overflow-hidden relative rounded-t-[2.5rem] -mt-10"
      style={{ backgroundColor: "#144400" }}
    >
      {/* Blob decorativo fondo */}
      <div
        className="absolute -top-32 -right-32 pointer-events-none bg-leaf-dark"
        style={{
          width: 500,
          height: 500,
          borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          opacity: 0.4,
        }}
      />
      <div
        className="absolute -bottom-24 -left-24 pointer-events-none bg-leaf-dark"
        style={{
          width: 360,
          height: 360,
          borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%",
          opacity: 0.3,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">

        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full font-poppins"
              style={{
                backgroundColor: "#FFB000",
                color: "#144400",
              }}
            >
              Esta semana
            </span>
            <h2
              className="text-4xl md:text-5xl leading-tight font-ibrand"
              style={{ color: "#FFFBE4" }}
            >
              Menú de la semana
            </h2>
            <p
              className="text-base mt-3 max-w-md font-poppins"
              style={{
                color: "#FFFBE4",
                opacity: 0.6,
              }}
            >
              Sabor y variedad pensados para tu bienestar.
            </p>
          </div>

          {/* Flechas desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center w-11 h-11 rounded-full border-0 cursor-pointer transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "rgba(255,251,228,0.12)",
                color: "#FFFBE4",
              }}
              aria-label="Anterior"
            >
              <ChevronLeft size={20} strokeWidth={2} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="flex items-center justify-center w-11 h-11 rounded-full border-0 cursor-pointer transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: "#FFB000",
                color: "#144400",
                boxShadow: "0 4px 16px rgba(255, 176, 0, 0.4)",
              }}
              aria-label="Siguiente"
            >
              <ChevronRight size={20} strokeWidth={2} />
            </button>
          </div>
        </div>

      </div>

        {/* Carrusel — fuera del max-w para llegar a los bordes */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 menu-carousel mt-12 relative z-10"
          style={{ scrollbarWidth: "none", paddingLeft: "max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))" }}
        >
          {weeklyMenu.filter((p) => p.category === "principal").map((plate) => (
            <DishCard
              key={plate.id}
              plate={plate}
              onInfo={setSelectedPlate}
            />
          ))}
          <div className="flex-shrink-0 w-6" aria-hidden="true" />
        </div>

      {/* Modal */}
      {selectedPlate && (
        <DishModal
          plate={selectedPlate}
          onClose={() => setSelectedPlate(null)}
        />
      )}
    </section>
  );
}
