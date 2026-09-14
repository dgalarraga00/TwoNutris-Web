"use client";

import { useState } from "react";
import { Flame, Salad } from "lucide-react";
import { AsyncBoundary } from "@/components/AsyncBoundary";
import { DishModal } from "@/components/DishModal";
import { MenuDishCard } from "@/components/MenuDishCard";
import { useCurrentMenuWeek } from "@/lib/api/menu";
import { toMenuItem } from "@/lib/adapters/menuAdapter";
import type { MenuItem } from "@/data/menu";

/**
 * Task 5.3 (F6) — real-data replacement for the previous static `/menu`
 * grid. Deliberately does NOT reuse `HomepageMenuShowcase` (a homepage
 * teaser carousel over `data/menu.ts`, unrelated purpose/layout) — it reuses
 * the dish-card design that `/menu` itself already shipped, extracted into
 * `MenuDishCard` (obs #335: reuse existing dish-card design, don't rebuild
 * it), only swapping the data source from the static fixture to
 * `GET /api/menu/current`.
 *
 * Per design obs #338 §B, `toMenuItem()` always sets `day: null` (day
 * association is deliberately deferred to F10's weekly grid). The old
 * static page grouped dishes into fixed Mon-Fri columns with holiday
 * banners — that grouping cannot survive real data, so this preview renders
 * a flat grid per category instead, following task 5.3's specified shape:
 * `dto.days.flatMap(day => [...day.mains, ...day.salads].map(toMenuItem))`.
 * The real backend also has no "postre" `Dish.kind`, so the Postres tab is
 * dropped here (documented deviation, see apply-progress/risks).
 */
type PreviewCategory = "principal" | "ensalada";

const TABS: { key: PreviewCategory; label: string; icon: typeof Flame }[] = [
  { key: "principal", label: "Platos Principales", icon: Flame },
  { key: "ensalada", label: "Ensaladas", icon: Salad },
];

const EMPTY_NOTICE_CLASS = "p-8 text-center text-sm font-poppins";
const EMPTY_NOTICE_STYLE = { color: "#144400", opacity: 0.6 };

export function MenuWeekPreview() {
  const { isPending, isError, error, data, refetch } = useCurrentMenuWeek();
  const [category, setCategory] = useState<PreviewCategory>("principal");
  const [selectedPlate, setSelectedPlate] = useState<MenuItem | null>(null);

  return (
    <>
      <div className="flex items-center gap-3 flex-wrap mb-10">
        {TABS.map(({ key, label, icon: Icon }) => {
          const active = category === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => setCategory(key)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border-0 cursor-pointer font-poppins"
              style={{
                backgroundColor: active ? "#144400" : "transparent",
                color: active ? "#FFFBE4" : "#144400",
                border: active ? "none" : "1.5px solid rgba(20,68,0,0.2)",
              }}
            >
              <Icon size={15} strokeWidth={2.5} />
              {label}
            </button>
          );
        })}
      </div>

      <AsyncBoundary
        isPending={isPending}
        isError={isError}
        error={error}
        data={data}
        refetch={refetch}
        isEmpty={(week) => week === null}
        emptyFallback={
          <p className={EMPTY_NOTICE_CLASS} style={EMPTY_NOTICE_STYLE}>
            Aún no hay un menú publicado para esta semana. ¡Vuelve pronto!
          </p>
        }
      >
        {(week) => {
          if (!week) return null;
          const items = week.days
            .flatMap((day) => [...day.mains, ...day.salads].map(toMenuItem))
            .filter((item) => item.category === category);

          if (items.length === 0) {
            return (
              <p className={EMPTY_NOTICE_CLASS} style={EMPTY_NOTICE_STYLE}>
                No hay platos disponibles en esta categoría por ahora.
              </p>
            );
          }

          return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {items.map((item) => (
                <MenuDishCard key={item.id} plate={item} onClick={() => setSelectedPlate(item)} />
              ))}
            </div>
          );
        }}
      </AsyncBoundary>

      {selectedPlate && <DishModal plate={selectedPlate} onClose={() => setSelectedPlate(null)} />}
    </>
  );
}
