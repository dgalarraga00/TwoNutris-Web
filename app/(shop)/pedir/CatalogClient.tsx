"use client";

import { useState, useMemo } from "react";
import { Truck } from "lucide-react";
import { CatalogDish, DishType, MIN_ORDER } from "@/lib/catalog";
import { calculateDeliveryDate, cutoffDate, formatDeliveryDate } from "@/lib/delivery";
import { DishCard } from "@/components/shop/DishCard";
import { DishDetailModal } from "@/components/shop/DishDetailModal";
import { useCart } from "@/components/shop/CartProvider";

type Filter = "TODOS" | DishType;

const FILTERS: { key: Filter; label: string }[] = [
  { key: "TODOS", label: "Todos" },
  { key: "NORMAL", label: "Clásicos" },
  { key: "VEGETARIANO", label: "Vegetariano" },
  { key: "PREMIUM", label: "Premium" },
];

export function CatalogClient({ dishes }: { dishes: CatalogDish[] }) {
  const [activeFilter, setActiveFilter] = useState<Filter>("TODOS");
  const [selectedDish, setSelectedDish] = useState<CatalogDish | null>(null);
  const { total, meetsMinimum, openCart, count } = useCart();

  const deliveryLabel = useMemo(() => formatDeliveryDate(calculateDeliveryDate()), []);
  const cutoffLabel = useMemo(() => {
    const c = cutoffDate();
    const days = Math.ceil((c.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    if (days <= 0) return "Pide hoy — último día";
    if (days === 1) return "Cierra mañana";
    return `Pide antes del miércoles`;
  }, []);

  const filtered =
    activeFilter === "TODOS"
      ? dishes
      : dishes.filter((d) => d.type === activeFilter);

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Hero */}
      <div className="mb-8">
        <h1 className="font-poppins font-bold text-leaf text-3xl mb-1">
          Menú de esta semana
        </h1>
        <p className="font-poppins text-sm text-gray-500">
          Elige los platos que quieres y arma tu box. Pedido mínimo{" "}
          <span className="font-semibold text-leaf">${MIN_ORDER}</span>.
        </p>
      </div>

      {/* Banner de entrega */}
      <div className="flex items-center gap-3 bg-leaf/5 border border-leaf/20 rounded-2xl px-4 py-3 mb-6">
        <Truck size={16} className="text-leaf flex-shrink-0" />
        <p className="font-poppins text-sm text-gray-700">
          <span className="font-semibold text-leaf">{cutoffLabel}</span>
          {" · "}
          Entrega el <span className="font-semibold text-gray-900">{deliveryLabel}</span>
        </p>
      </div>

      {/* Filtros */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            onClick={() => setActiveFilter(f.key)}
            className={`font-poppins text-sm font-semibold px-4 py-2 rounded-xl transition-colors ${
              activeFilter === f.key
                ? "bg-leaf text-cream"
                : "bg-white text-leaf hover:bg-leaf/5 border border-leaf/20"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((dish, i) => (
          <DishCard
            key={dish.id}
            dish={dish}
            onOpenDetail={setSelectedDish}
            priority={i === 0}
          />
        ))}
      </div>

      {/* Modal de detalle */}
      {selectedDish && (
        <DishDetailModal
          dish={selectedDish}
          onClose={() => setSelectedDish(null)}
        />
      )}

      {/* Barra flotante del carrito (móvil) */}
      {count > 0 && (
        <div className="fixed bottom-6 left-0 right-0 flex justify-center px-4 z-30 md:hidden">
          <button
            onClick={openCart}
            className="w-full max-w-sm bg-leaf text-cream font-poppins font-bold text-sm py-4 rounded-2xl shadow-lg flex items-center justify-between px-5 hover:bg-leaf-dark transition-colors"
          >
            <span className="bg-white/20 rounded-lg px-2 py-0.5 text-xs">
              {count} platos
            </span>
            <span>Ver pedido</span>
            <span className="font-bold">${total.toFixed(2)}</span>
          </button>
        </div>
      )}
    </div>
  );
}
