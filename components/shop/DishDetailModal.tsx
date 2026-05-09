"use client";

import Image from "next/image";
import { X, Microwave, ChevronDown, UtensilsCrossed } from "lucide-react";
import { useState, useEffect } from "react";
import { CatalogDish, DishType } from "@/lib/catalog";
import { ALLERGEN_MAP } from "@/components/DishModal";
import { Leaf } from "lucide-react";

function Accordion({
  title,
  icon,
  children,
  defaultOpen = false,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 hover:bg-gray-100 transition-colors"
      >
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-bold font-poppins text-gray-900">{title}</span>
        </div>
        <ChevronDown
          size={16}
          className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-4 py-3 max-h-40 overflow-y-scroll text-sm leading-relaxed font-poppins text-gray-700 whitespace-pre-line bg-white">
          {children}
        </div>
      )}
    </div>
  );
}

const TYPE_LABEL: Record<DishType, string> = {
  VEGETARIANO: "Vegetariano",
  LOW_CARB: "Low Carb",
  NORMAL: "Clásico",
};

const TYPE_STYLE: Record<DishType, string> = {
  VEGETARIANO: "bg-leaf text-cream",
  LOW_CARB: "bg-amber text-leaf",
  NORMAL: "bg-gray-100 text-leaf",
};

const MODO_DE_EMPLEO = `Agujerear el film protector o abrir una esquina y calentar al microondas durante 2:00 - 3:00 minutos a máxima potencia (800w) o verter el contenido del táper en una sartén/olla al fuego para regenerar.

Mantener refrigerado entre 0º y 4º hasta su consumo. En caso de congelar para prolongar la vida del producto, recomendamos descongelar en frigorífico 24h antes de su consumo.

Recomendamos emplatar el contenido del táper para una mejor experiencia. ¡Cuidado con el envase caliente!

RECICLA: Tanto las bandejas como el film protector y la pegatina, son de plástico reciclable, por lo que puedes tirar todo al contenedor de reciclaje amarillo.

*Consumir antes de la fecha de caducidad. Una vez abierto consumir en 24h.`;

export function DishDetailModal({
  dish,
  onClose,
}: {
  dish: CatalogDish;
  onClose: () => void;
}) {
  // Bloquea el scroll del fondo mientras el modal está abierto
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);
  const stats = [
    { label: "KCAL", value: `${dish.calories}` },
    { label: "G", value: `${dish.macros.fat}g` },
    { label: "CH", value: `${dish.macros.carbs}g` },
    { label: "P", value: `${dish.macros.protein}g` },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/55 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="relative w-full rounded-3xl overflow-hidden flex flex-row bg-white max-w-[980px] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen — panel izquierdo, con padding, altura fija */}
        <div className="hidden md:flex flex-shrink-0 w-[400px] p-4 bg-gray-50 items-start justify-center">
          <div className="relative w-full rounded-2xl overflow-hidden aspect-square flex-shrink-0">
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              quality={90}
              className="object-cover"
              sizes="370px"
            />
            <span
              className={`absolute top-3 left-3 text-xs font-semibold font-poppins px-2.5 py-1 rounded-lg ${TYPE_STYLE[dish.type]}`}
            >
              {TYPE_LABEL[dish.type]}
            </span>
          </div>
        </div>

        {/* Contenido — panel derecho, scrollable independiente */}
        <div className="flex flex-col gap-4 p-6 flex-1 min-h-0 overflow-y-auto overscroll-contain">
          {/* Título + cerrar */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl leading-tight font-ibrand text-gray-900">
              {dish.name}
            </h3>
            <button
              onClick={onClose}
              className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-700 hover:scale-110 transition-transform"
            >
              <X size={15} strokeWidth={2.5} />
            </button>
          </div>

          {/* Stats */}
          <div
            className="grid rounded-2xl border border-gray-200"
            style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}
          >
            {stats.map(({ label, value }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center py-3 px-1 ${i < stats.length - 1 ? "border-r border-gray-200" : ""}`}
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

          {/* Alérgenos — debajo de los stats */}
          {dish.allergens.length > 0 && (
            <div className="flex items-center gap-2 flex-wrap">
              {dish.allergens.map((a) => {
                const entry = ALLERGEN_MAP[a];
                const Icon = entry?.icon ?? Leaf;
                return (
                  <div key={a} className="group relative">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-600 cursor-default">
                      <Icon size={15} strokeWidth={1.8} />
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity font-poppins bg-leaf text-cream z-10">
                      {a}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Ingredientes — desplegable */}
          <Accordion
            title="Ingredientes"
            icon={<UtensilsCrossed size={15} className="text-leaf" />}
            defaultOpen={false}
          >
            {dish.ingredients}
          </Accordion>

          {/* Modo de empleo — desplegable */}
          <Accordion
            title="Modo de empleo"
            icon={<Microwave size={15} className="text-leaf" />}
            defaultOpen={false}
          >
            {MODO_DE_EMPLEO}
          </Accordion>

          <div className="pb-2">
          </div>
        </div>
      </div>
    </div>
  );
}
