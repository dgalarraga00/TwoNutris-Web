"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, Wheat, Milk, Egg, Fish, Leaf, Flame, Sprout, FlaskConical, Waves, Vegan, Salad, Bean, Dot, Nut } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { MenuItem } from "@/data/menu";

export const ALLERGEN_MAP: Record<string, { icon: LucideIcon; label: string }> = {
  Gluten:          { icon: Wheat,        label: "Gluten" },
  Lácteos:         { icon: Milk,         label: "Lácteos" },
  Huevo:           { icon: Egg,          label: "Huevo" },
  Pescado:         { icon: Fish,         label: "Pescado" },
  "Frutos secos":  { icon: Leaf,         label: "Frutos secos" },
  Vegetariano:     { icon: Sprout,       label: "Vegetariano" },
  Sulfitos:        { icon: FlaskConical, label: "Sulfitos" },
  Picante:         { icon: Flame,        label: "Picante" },
  Apio:            { icon: Vegan,        label: "Apio" },
  Mostaza:         { icon: Salad,        label: "Mostaza" },
  Soya:            { icon: Bean,         label: "Soya" },
  Sésamo:          { icon: Dot,          label: "Sésamo" },
  Maní:            { icon: Nut,          label: "Maní" },
  Maíz:            { icon: Wheat,        label: "Maíz" },
  Leguminosas:     { icon: Bean,         label: "Leguminosas" },
  Mariscos:        { icon: Waves,        label: "Mariscos" },
};

interface DishModalProps {
  plate: MenuItem;
  onClose: () => void;
}

export function DishModal({ plate, onClose }: DishModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  const stats = [
    { label: "KCAL",  value: `${plate.calories}` },
    { label: "G",     value: `${plate.macros.fat}g` },
    { label: "CH",    value: `${plate.macros.carbs}g` },
    { label: "P",     value: `${plate.macros.protein}g` },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="relative w-full rounded-3xl overflow-hidden flex flex-col md:flex-row bg-white max-w-[900px] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen */}
        <div
          className="flex-shrink-0 w-full md:w-[420px] flex items-center justify-center p-6 bg-gray-50 min-h-[320px]"
        >
          <div className="relative w-full rounded-2xl overflow-hidden aspect-square">
            <Image
              src={plate.image}
              alt={plate.name}
              fill
              quality={90}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 420px"
            />
          </div>
        </div>

        {/* Contenido */}
        <div className="flex flex-col gap-5 p-7 flex-1 overflow-y-auto max-h-[90vh]">
          {/* Título + cerrar */}
          <div className="flex items-start justify-between gap-4">
            <h3
              id="dish-modal-title"
              className="text-2xl leading-tight font-ibrand text-gray-900"
            >
              {plate.name}
            </h3>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Cerrar"
              className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border-0 cursor-pointer transition-all duration-200 hover:scale-110 bg-gray-100 text-gray-700"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
          </div>

          {/* Alérgenos */}
          {plate.allergens.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {plate.allergens.map((a) => {
                const entry = ALLERGEN_MAP[a];
                const Icon = entry?.icon ?? Leaf;
                return (
                  <div key={a} className="group relative">
                    <div
                      className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-700"
                    >
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

          {/* Stats */}
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

          {/* Ingredientes */}
          <div className="flex flex-col gap-2">
            <span className="text-base font-bold font-poppins text-gray-900">
              Ingredientes
            </span>
            <p
              className="text-sm leading-relaxed rounded-2xl p-4 whitespace-pre-line font-poppins bg-gray-50 text-gray-700 border border-gray-200"
            >
              {plate.ingredients}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
