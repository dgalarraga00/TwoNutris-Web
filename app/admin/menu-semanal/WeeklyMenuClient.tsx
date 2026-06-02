"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { X, Search } from "lucide-react";
import type { DishTemplate, WeeklyMenu, WeeklyMenuItem, WeeklyMenuStatus } from "@/lib/generated/prisma";

interface MenuItemWithDish extends WeeklyMenuItem { dish: DishTemplate }
interface MenuWithItems extends WeeklyMenu { items: MenuItemWithDish[] }

const CATEGORY_LABELS: Record<string, string> = {
  CLASICO: "Clásico",
  LOW_CARB: "Clásico",
  VEGETARIANO: "Vegetariano",
  PREMIUM: "Premium",
};

function getNextMonday(): string {
  const today = new Date();
  const day = today.getDay();
  const diff = day === 0 ? 1 : 8 - day;
  const next = new Date(today);
  next.setDate(today.getDate() + diff);
  return next.toISOString().split("T")[0];
}

function getNextFriday(): string {
  const monday = new Date(getNextMonday());
  const friday = new Date(monday);
  friday.setDate(monday.getDate() + 4);
  return friday.toISOString().split("T")[0];
}

export function WeeklyMenuClient({
  currentMenu,
  allDishes,
}: {
  currentMenu: MenuWithItems | null;
  allDishes: DishTemplate[];
}) {
  const router = useRouter();

  const initialDishIds = currentMenu?.items.map((i) => i.dish.id) ?? [];

  const [weekStart, setWeekStart] = useState(
    currentMenu ? new Date(currentMenu.weekStart).toISOString().split("T")[0] : getNextMonday()
  );
  const [weekEnd, setWeekEnd] = useState(
    currentMenu ? new Date(currentMenu.weekEnd).toISOString().split("T")[0] : getNextFriday()
  );
  const [selectedIds, setSelectedIds] = useState<string[]>(initialDishIds);
  const [search, setSearch] = useState("");
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<WeeklyMenuStatus | null>(currentMenu?.status ?? null);

  const selectedDishes = selectedIds
    .map((id) => allDishes.find((d) => d.id === id))
    .filter(Boolean) as DishTemplate[];

  const availableDishes = allDishes.filter(
    (d) => !selectedIds.includes(d.id) &&
      d.name.toLowerCase().includes(search.toLowerCase())
  );

  function addDish(id: string) {
    setSelectedIds((prev) => [...prev, id]);
  }

  function removeDish(id: string) {
    setSelectedIds((prev) => prev.filter((i) => i !== id));
  }

  function handleNewMenu() {
    setSelectedIds([]);
    setWeekStart(getNextMonday());
    setWeekEnd(getNextFriday());
    setStatus(null);
    setError(null);
  }

  async function saveDraft() {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/weekly-menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ weekStart, weekEnd, dishIds: selectedIds }),
      });
      if (!res.ok) {
        const data = await res.json() as { error?: string };
        throw new Error(data.error ?? "Error al guardar");
      }
      setStatus("DRAFT");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
    } finally {
      setSaving(false);
    }
  }

  async function handlePublish() {
    setPublishing(true);
    setError(null);
    try {
      const draftRes = await fetch("/api/admin/weekly-menu", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ weekStart, weekEnd, dishIds: selectedIds }),
      });
      if (!draftRes.ok) {
        const data = await draftRes.json() as { error?: string };
        throw new Error(data.error ?? "Error al guardar el borrador");
      }

      const res = await fetch("/api/admin/weekly-menu/publish", { method: "POST" });
      if (!res.ok) {
        const data = await res.json() as { error?: string };
        throw new Error(data.error ?? "Error al publicar");
      }
      setStatus("PUBLISHED");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
    } finally {
      setPublishing(false);
    }
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <h1 className="font-poppins font-bold text-2xl text-gray-900">Menú semanal</h1>
          {status && (
            <span
              className={`font-poppins text-xs font-semibold px-3 py-1 rounded-xl ${
                status === "PUBLISHED"
                  ? "bg-green-100 text-green-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {status === "PUBLISHED" ? "Publicado" : "Borrador"}
            </span>
          )}
        </div>

        <div className="flex gap-2 flex-wrap">
          <button
            onClick={handleNewMenu}
            className="font-poppins text-sm font-semibold px-4 py-2 rounded-xl border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Empezar nuevo
          </button>
          <button
            onClick={saveDraft}
            disabled={saving || selectedIds.length === 0}
            className="font-poppins text-sm font-semibold px-4 py-2 rounded-xl border border-leaf text-leaf hover:bg-leaf/5 transition-colors disabled:opacity-50"
          >
            {saving ? "Guardando..." : "Guardar borrador"}
          </button>
          <button
            onClick={handlePublish}
            disabled={publishing || saving || selectedIds.length === 0}
            className="font-poppins text-sm font-semibold px-4 py-2 rounded-xl bg-leaf text-cream hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {publishing ? "Publicando..." : "Publicar"}
          </button>
        </div>
      </div>

      {selectedIds.length === 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-4">
          <p className="font-poppins text-sm text-amber-700">
            El menú no tiene platos. Agregá al menos uno antes de guardar o publicar.
          </p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
          <p className="font-poppins text-sm text-red-600">{error}</p>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6 flex gap-4 flex-wrap">
        <div className="flex flex-col gap-1.5">
          <label className="font-poppins text-xs font-semibold text-gray-600">Inicio de semana</label>
          <input
            type="date"
            value={weekStart}
            onChange={(e) => setWeekStart(e.target.value)}
            className="font-poppins text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-leaf/30"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="font-poppins text-xs font-semibold text-gray-600">Fin de semana</label>
          <input
            type="date"
            value={weekEnd}
            onChange={(e) => setWeekEnd(e.target.value)}
            className="font-poppins text-sm border border-gray-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-leaf/30"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-4">
          <h2 className="font-poppins font-semibold text-sm text-gray-700 mb-3">
            Platos del menú{" "}
            <span className="text-gray-400 font-normal">({selectedDishes.length})</span>
          </h2>

          {selectedDishes.length === 0 ? (
            <p className="font-poppins text-xs text-gray-400 py-8 text-center">
              Agregá platos desde el panel derecho.
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              {selectedDishes.map((dish) => (
                <MenuDishRow
                  key={dish.id}
                  dish={dish}
                  action={
                    <button
                      onClick={() => removeDish(dish.id)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <X size={14} />
                    </button>
                  }
                />
              ))}
            </div>
          )}
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-4">
          <h2 className="font-poppins font-semibold text-sm text-gray-700 mb-3">
            Agregar platos
          </h2>

          <div className="relative mb-3">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar plato..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="font-poppins text-sm border border-gray-200 rounded-xl pl-8 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-leaf/30"
            />
          </div>

          {availableDishes.length === 0 ? (
            <p className="font-poppins text-xs text-gray-400 py-8 text-center">
              {search ? "Sin resultados." : "Todos los platos ya están en el menú."}
            </p>
          ) : (
            <div className="flex flex-col gap-2 max-h-96 overflow-y-auto">
              {availableDishes.map((dish) => (
                <MenuDishRow
                  key={dish.id}
                  dish={dish}
                  action={
                    <button
                      onClick={() => addDish(dish.id)}
                      className="font-poppins text-xs font-semibold px-3 py-1.5 bg-leaf/10 text-leaf rounded-lg hover:bg-leaf/20 transition-colors"
                    >
                      Agregar
                    </button>
                  }
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function MenuDishRow({
  dish,
  action,
}: {
  dish: DishTemplate;
  action: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors">
      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gray-100 shrink-0">
        {dish.image ? (
          <Image src={dish.image} alt={dish.name} fill sizes="64px" className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-poppins text-sm font-semibold text-gray-900 truncate">{dish.name}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="font-poppins text-xs bg-gray-100 text-gray-600 px-1.5 py-0.5 rounded-md">
            {CATEGORY_LABELS[dish.category] ?? dish.category}
          </span>
          <span className="font-poppins text-xs text-gray-400">${dish.price.toFixed(2)}</span>
        </div>
      </div>
      {action}
    </div>
  );
}
