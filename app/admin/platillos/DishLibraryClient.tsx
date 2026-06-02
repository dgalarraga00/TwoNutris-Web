"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Pencil, Copy, Eye, EyeOff, Plus } from "lucide-react";
import type { DishTemplate } from "@/lib/generated/prisma";
import { DishTemplateCategory } from "@/lib/generated/prisma";

type CategoryFilter = "TODOS" | DishTemplateCategory;
type ActiveFilter = "TODOS" | "ACTIVO" | "INACTIVO";

const CATEGORY_FILTERS: { key: CategoryFilter; label: string }[] = [
  { key: "TODOS", label: "Todos" },
  { key: "CLASICO", label: "Clásico" },
  { key: "VEGETARIANO", label: "Vegetariano" },
  { key: "PREMIUM", label: "Premium" },
];

const CATEGORY_LABELS: Record<DishTemplateCategory, string> = {
  CLASICO: "Clásico",
  LOW_CARB: "Clásico",
  VEGETARIANO: "Vegetariano",
  PREMIUM: "Premium",
};

interface DishLibraryClientProps {
  dishes: DishTemplate[];
}

export function DishLibraryClient({ dishes: initialDishes }: DishLibraryClientProps) {
  const router = useRouter();
  const [dishes, setDishes] = useState(initialDishes);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>("TODOS");
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("TODOS");

  const filtered = dishes.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "TODOS" || d.category === categoryFilter;
    const matchesActive =
      activeFilter === "TODOS" ||
      (activeFilter === "ACTIVO" ? d.isActive : !d.isActive);
    return matchesSearch && matchesCategory && matchesActive;
  });

  async function handleDuplicate(id: string) {
    await fetch(`/api/admin/dishes/${id}/duplicate`, { method: "POST" });
    router.refresh();
    const res = await fetch("/api/admin/dishes");
    const updated = (await res.json()) as DishTemplate[];
    setDishes(updated);
  }

  async function handleToggle(id: string) {
    await fetch(`/api/admin/dishes/${id}/toggle`, { method: "POST" });
    const res = await fetch("/api/admin/dishes");
    const updated = (await res.json()) as DishTemplate[];
    setDishes(updated);
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-poppins font-bold text-2xl text-gray-900">Platillos</h1>
        <button
          onClick={() => router.push("/admin/platillos/nuevo")}
          className="flex items-center gap-2 bg-leaf text-cream font-poppins font-semibold text-sm px-4 py-2.5 rounded-xl hover:opacity-90 transition-opacity"
        >
          <Plus size={16} />
          Nuevo platillo
        </button>
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="font-poppins text-sm border border-gray-200 rounded-xl px-4 py-2.5 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-leaf/30"
        />

        <div className="flex gap-2 flex-wrap items-center">
          {CATEGORY_FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setCategoryFilter(f.key)}
              className={`font-poppins text-sm font-semibold px-3 py-1.5 rounded-xl transition-colors ${
                categoryFilter === f.key
                  ? "bg-leaf text-cream"
                  : "bg-white text-leaf border border-leaf/20 hover:bg-leaf/5"
              }`}
            >
              {f.label}
            </button>
          ))}

          <div className="ml-2 flex gap-2">
            {(["TODOS", "ACTIVO", "INACTIVO"] as ActiveFilter[]).map((key) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`font-poppins text-xs font-semibold px-3 py-1.5 rounded-xl transition-colors ${
                  activeFilter === key
                    ? "bg-gray-800 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {key === "TODOS" ? "Todos" : key === "ACTIVO" ? "Activos" : "Inactivos"}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400 font-poppins text-sm">
          No hay platillos que coincidan con los filtros.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((dish) => (
            <DishCard
              key={dish.id}
              dish={dish}
              onDuplicate={handleDuplicate}
              onToggle={handleToggle}
              onEdit={(id) => router.push(`/admin/platillos/${id}/editar`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

interface DishCardProps {
  dish: DishTemplate;
  onDuplicate: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string) => void;
}

function DishCard({ dish, onDuplicate, onToggle, onEdit }: DishCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col">
      <div className="relative h-40 bg-gray-100">
        {dish.image ? (
          <Image src={dish.image} alt={dish.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px" quality={90} className="object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <span className="font-poppins text-xs text-gray-400">Sin imagen</span>
          </div>
        )}
        <span className="absolute top-2 left-2 font-poppins text-xs font-semibold bg-gray-900 text-white px-2 py-0.5 rounded-lg">
          {CATEGORY_LABELS[dish.category]}
        </span>
        <span
          className={`absolute top-2 right-2 font-poppins text-xs font-semibold px-2 py-0.5 rounded-lg ${
            dish.isActive ? "bg-green-500 text-white" : "bg-gray-400 text-white"
          }`}
        >
          {dish.isActive ? "Activo" : "Inactivo"}
        </span>
      </div>

      <div className="p-3 flex flex-col gap-2 flex-1">
        <p className="font-poppins font-bold text-sm text-gray-900 leading-tight">{dish.name}</p>
        <p className="font-poppins text-xs text-gray-500 line-clamp-2 leading-relaxed">
          {dish.description}
        </p>

        {(dish.calories || dish.protein || dish.carbs || dish.fat) && (
          <div className="flex gap-1 flex-wrap">
            {dish.calories && (
              <span className="font-poppins text-xs bg-leaf/10 text-leaf font-semibold px-2 py-0.5 rounded-lg">
                {dish.calories}Kcal
              </span>
            )}
            {dish.protein && (
              <span className="font-poppins text-xs bg-leaf/10 text-leaf font-semibold px-2 py-0.5 rounded-lg">
                P{dish.protein}g
              </span>
            )}
            {dish.carbs && (
              <span className="font-poppins text-xs bg-leaf/10 text-leaf font-semibold px-2 py-0.5 rounded-lg">
                C{dish.carbs}g
              </span>
            )}
            {dish.fat && (
              <span className="font-poppins text-xs bg-leaf/10 text-leaf font-semibold px-2 py-0.5 rounded-lg">
                G{dish.fat}g
              </span>
            )}
          </div>
        )}

        {dish.allergens.length > 0 && (
          <p className="font-poppins text-xs text-amber-700 bg-amber-50 px-2 py-1 rounded-lg">
            {dish.allergens.join(", ")}
          </p>
        )}

        <div className="flex gap-1.5 mt-auto pt-2">
          <button
            onClick={() => onEdit(dish.id)}
            className="flex-1 flex items-center justify-center gap-1 bg-gray-50 hover:bg-gray-100 text-gray-700 font-poppins text-xs font-semibold py-2 rounded-xl transition-colors"
          >
            <Pencil size={12} />
            Editar
          </button>
          <button
            onClick={() => onDuplicate(dish.id)}
            className="flex items-center justify-center p-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl transition-colors"
            title="Duplicar"
          >
            <Copy size={13} />
          </button>
          <button
            onClick={() => onToggle(dish.id)}
            className={`flex items-center justify-center p-2 rounded-xl transition-colors ${
              dish.isActive
                ? "bg-green-50 hover:bg-green-100 text-green-600"
                : "bg-gray-50 hover:bg-gray-100 text-gray-400"
            }`}
            title={dish.isActive ? "Desactivar" : "Activar"}
          >
            {dish.isActive ? <Eye size={13} /> : <EyeOff size={13} />}
          </button>
        </div>
      </div>
    </div>
  );
}
