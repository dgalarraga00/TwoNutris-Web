"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Info, Leaf, Flame, X } from "lucide-react";
import type { PublicDish } from "@/app/api/weekly-menu/route";
import { ALLERGEN_MAP } from "@/lib/allergens";

function DishCard({
  dish,
  onInfo,
}: {
  dish: PublicDish;
  onInfo: (dish: PublicDish) => void;
}) {
  return (
    <div className="flex-shrink-0 flex flex-col rounded-3xl overflow-hidden snap-start transition-transform duration-300 hover:-translate-y-1 bg-white w-[340px]">
      <div className="relative w-full overflow-hidden aspect-[4/3]">
        {dish.image ? (
          <Image
            src={dish.image}
            alt={dish.name}
            fill
            className="object-cover"
            sizes="340px"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <Leaf size={40} style={{ color: "#144400", opacity: 0.2 }} />
          </div>
        )}
        {dish.calories !== null && (
          <div
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold font-poppins"
            style={{ backgroundColor: "#FFB000", color: "#144400" }}
          >
            <Flame size={11} strokeWidth={2.5} />
            {dish.calories} kcal
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-4 flex-1">
        <h3 className="text-lg leading-snug font-ibrand" style={{ color: "#144400" }}>
          {dish.name}
        </h3>

        {(dish.macros.protein !== null || dish.macros.carbs !== null || dish.macros.fat !== null) && (
          <div
            className="flex items-center gap-2 text-xs font-bold px-3 py-2 rounded-full self-start font-poppins"
            style={{ backgroundColor: "#FFFBE4", color: "#144400" }}
          >
            <span>P: {dish.macros.protein ?? "—"}g</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span>C: {dish.macros.carbs ?? "—"}g</span>
            <span style={{ opacity: 0.3 }}>|</span>
            <span>G: {dish.macros.fat ?? "—"}g</span>
          </div>
        )}
      </div>

      <div
        className="flex items-center justify-between px-4 py-3 mt-auto"
        style={{ borderTop: "1px solid rgba(20, 68, 0, 0.07)" }}
      >
        <div className="flex items-center gap-2">
          {dish.allergens.length === 0 ? (
            <span
              className="text-xs font-poppins"
              style={{ color: "#144400", opacity: 0.35 }}
            >
              Sin alérgenos
            </span>
          ) : (
            dish.allergens.map((a) => {
              const entry = ALLERGEN_MAP[a];
              const Icon = entry?.icon ?? Leaf;
              return (
                <div key={a} className="group relative flex items-center">
                  <div
                    className="flex items-center justify-center w-7 h-7 rounded-full cursor-default"
                    style={{ backgroundColor: "rgba(20, 68, 0, 0.07)" }}
                  >
                    <Icon size={14} strokeWidth={2} style={{ color: "#144400" }} />
                  </div>
                  <div
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-poppins"
                    style={{ backgroundColor: "#144400", color: "#FFFBE4" }}
                  >
                    {a}
                  </div>
                </div>
              );
            })
          )}
        </div>

        <button
          onClick={() => onInfo(dish)}
          className="flex items-center justify-center w-9 h-9 rounded-full border-0 cursor-pointer transition-all duration-200 hover:scale-110"
          style={{
            backgroundColor: "#FFB000",
            color: "#144400",
            boxShadow: "0 4px 12px rgba(255, 176, 0, 0.35)",
          }}
          aria-label={`Ver detalles de ${dish.name}`}
        >
          <Info size={16} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}

function DishDetailModal({ dish, onClose }: { dish: PublicDish; onClose: () => void }) {
  const stats = [
    { label: "KCAL", value: dish.calories !== null ? `${dish.calories}` : "—" },
    { label: "G", value: dish.macros.fat !== null ? `${dish.macros.fat}g` : "—" },
    { label: "CH", value: dish.macros.carbs !== null ? `${dish.macros.carbs}g` : "—" },
    { label: "P", value: dish.macros.protein !== null ? `${dish.macros.protein}g` : "—" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="relative w-full rounded-3xl overflow-hidden flex flex-col md:flex-row bg-white max-w-[900px] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 w-full md:w-[420px] flex items-center justify-center p-6 bg-gray-50 min-h-[320px]">
          <div className="relative w-full rounded-2xl overflow-hidden aspect-square">
            {dish.image ? (
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                quality={90}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 420px"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                <Leaf size={64} style={{ color: "#144400", opacity: 0.2 }} />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-5 p-7 flex-1 overflow-y-auto max-h-[90vh]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl leading-tight font-ibrand text-gray-900">
              {dish.name}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border-0 cursor-pointer transition-all duration-200 hover:scale-110 bg-gray-100 text-gray-700"
              aria-label="Cerrar"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          </div>

          {dish.allergens.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {dish.allergens.map((a) => {
                const entry = ALLERGEN_MAP[a];
                const Icon = entry?.icon ?? Leaf;
                return (
                  <div key={a} className="group relative">
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-700">
                      <Icon size={16} strokeWidth={1.8} />
                    </div>
                    <div
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-poppins"
                      style={{ backgroundColor: "#144400", color: "#FFFBE4" }}
                    >
                      {a}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <div
            className="grid rounded-2xl border border-gray-200"
            style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}
          >
            {stats.map(({ label, value }, i) => (
              <div
                key={label}
                className="flex flex-col items-center py-3 px-1"
                style={{ borderRight: i < stats.length - 1 ? "1px solid #e5e7eb" : "none" }}
              >
                <span className="text-sm font-bold leading-none font-poppins text-gray-900">
                  {value}
                </span>
                <span className="mt-1.5 font-medium font-poppins text-gray-400 text-[10px]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {dish.ingredients && (
            <div className="flex flex-col gap-2">
              <span className="text-base font-bold font-poppins text-gray-900">
                Ingredientes
              </span>
              <p className="text-sm leading-relaxed rounded-2xl p-4 whitespace-pre-line font-poppins bg-gray-50 text-gray-700 border border-gray-200">
                {dish.ingredients}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function HomepageMenuCarousel({ dishes }: { dishes: PublicDish[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedDish, setSelectedDish] = useState<PublicDish | null>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "right" ? 360 : -360,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full font-poppins"
              style={{ backgroundColor: "#FFB000", color: "#144400" }}
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
              style={{ color: "#FFFBE4", opacity: 0.6 }}
            >
              Sabor y variedad pensados para tu bienestar.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              className="flex items-center justify-center w-11 h-11 rounded-full border-0 cursor-pointer transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: "rgba(255,251,228,0.12)", color: "#FFFBE4" }}
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

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 menu-carousel mt-12 relative z-10"
        style={{
          scrollbarWidth: "none",
          paddingLeft: "max(1.5rem, calc((100vw - 1200px) / 2 + 1.5rem))",
        }}
      >
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} onInfo={setSelectedDish} />
        ))}
        <div className="flex-shrink-0 w-6" aria-hidden="true" />
      </div>

      {selectedDish && (
        <DishDetailModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
      )}
    </>
  );
}
