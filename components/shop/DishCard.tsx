"use client";

import Image from "next/image";
import { Minus, Plus, Flame, Beef, Wheat, Droplets, Leaf } from "lucide-react";
import { CatalogDish, DishType } from "@/lib/catalog";
import { ALLERGEN_MAP } from "@/lib/allergens";
import { useCart } from "./CartProvider";

const TYPE_LABEL: Record<DishType, string> = {
  NORMAL: "Clásico",
  VEGETARIANO: "Vegetariano",
  PREMIUM: "Premium",
};

const TYPE_STYLE: Record<DishType, string> = {
  NORMAL: "bg-white/80 text-leaf border border-leaf/20",
  VEGETARIANO: "bg-leaf text-cream",
  PREMIUM: "bg-gradient-to-r from-yellow-400 to-amber-500 text-white shadow-md",
};

export function DishCard({
  dish,
  onOpenDetail,
  priority = false,
}: {
  dish: CatalogDish;
  onOpenDetail: (dish: CatalogDish) => void;
  priority?: boolean;
}) {
  const { getQuantity, addItem, incrementItem, decrementItem } = useCart();
  const qty = getQuantity(dish.id);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Imagen — click abre detalle */}
      <div
        className="relative aspect-[4/3] w-full cursor-pointer overflow-hidden"
        onClick={() => onOpenDetail(dish)}
      >
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
        {/* Badge de tipo */}
        <span
          className={`absolute top-3 left-3 text-xs font-semibold font-poppins px-2.5 py-1 rounded-full ${TYPE_STYLE[dish.type]}`}
        >
          {TYPE_LABEL[dish.type]}
        </span>
        {/* Badge consumo rápido */}
        {(dish.allergens.includes("Pescado") || dish.allergens.includes("Mariscos")) && (
          <span className="absolute bottom-3 left-3 flex items-center gap-1 text-[11px] font-semibold font-poppins px-2.5 py-1 rounded-full bg-blue-500/90 text-white backdrop-blur-sm">
            🐟 Consumir en 2 días
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="font-poppins font-semibold text-leaf text-sm leading-snug">
          {dish.name}
        </h3>

        {/* Macros */}
        <div className="flex items-center gap-3 text-xs text-gray-500 font-poppins">
          <span className="flex items-center gap-1">
            <Flame size={12} className="text-amber-500" />
            {dish.calories} kcal
          </span>
          <span className="flex items-center gap-1">
            <Beef size={12} className="text-red-400" />
            {dish.macros.protein}g P
          </span>
          <span className="flex items-center gap-1">
            <Wheat size={12} className="text-yellow-500" />
            {dish.macros.carbs}g C
          </span>
          <span className="flex items-center gap-1">
            <Droplets size={12} className="text-blue-400" />
            {dish.macros.fat}g G
          </span>
        </div>

        {/* Alérgenos */}
        {dish.allergens.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap">
            {dish.allergens.map((a) => {
              const entry = ALLERGEN_MAP[a];
              const Icon = entry?.icon ?? Leaf;
              return (
                <div key={a} className="group relative">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-gray-500">
                    <Icon size={12} strokeWidth={1.8} />
                  </div>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 px-2 py-0.5 rounded-md text-[10px] font-semibold whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity font-poppins bg-leaf text-cream z-10">
                    {a}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Precio + control */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="font-poppins font-bold text-leaf text-base">
            ${dish.price.toFixed(2)}
          </span>

          {qty === 0 ? (
            <button
              onClick={() => addItem(dish)}
              className="flex items-center gap-1.5 bg-leaf text-cream text-xs font-semibold font-poppins px-3 py-2 rounded-xl hover:bg-leaf-dark transition-colors"
            >
              <Plus size={14} />
              Agregar
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => decrementItem(dish.id)}
                className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <Minus size={14} className="text-leaf" />
              </button>
              <span className="font-poppins font-bold text-leaf w-5 text-center text-sm">
                {qty}
              </span>
              <button
                onClick={() => incrementItem(dish.id)}
                className="w-8 h-8 rounded-lg bg-leaf hover:bg-leaf-dark flex items-center justify-center transition-colors"
              >
                <Plus size={14} className="text-cream" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
