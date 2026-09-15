"use client";

import { useState } from "react";
import Image from "next/image";
import { Drawer } from "vaul";
import { X, Wheat, Milk, Egg, Fish, Leaf, Flame, Sprout, FlaskConical, Waves, Vegan, Salad, Bean, Dot, Nut, ChevronDown } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { MenuItem } from "@/data/menu";
import type { MenuDishCardDto } from "@/lib/api/menu";
import { NutritionFactsPanel } from "@/components/NutritionFactsPanel";
import { Alert } from "@/components/ui/Alert";

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
  Coco:            { icon: Nut,          label: "Coco" },
};

interface DishModalProps {
  plate: MenuItem;
  onClose: () => void;
  /**
   * Live-feedback fix (feedback-round-2): the full dish-card DTO, present
   * only for real weekly-grid/API dishes (never the static marketing
   * `weeklyMenu` data in `data/menu.ts`, which has no DTO to carry). Feeds
   * the expandable "Ver tabla nutrimental" section (`NutritionFactsPanel`,
   * previously built but mounted nowhere in the app) and the allergen
   * disclaimer warning box. Both sections are skipped entirely when this is
   * absent, so the homepage/menu-preview modal renders exactly as before.
   */
  dto?: MenuDishCardDto;
  /**
   * Live-feedback fix (feedback-round-3): true only when this modal is
   * opened from a trigger that already lives INSIDE an open Vaul drawer
   * (`DishStepDrawer`'s "Ver detalles completos"/"Ver detalles" links in
   * `StepQuantity`/`SaladPicker`). Vaul ships a dedicated primitive for
   * exactly this — `Drawer.NestedRoot` — which wires up through the
   * ancestor `Drawer.Root`'s context (`onNestedDrag`/`onNestedOpenChange`/
   * `onNestedRelease`) so the parent drawer scales down while this one is
   * open, the way two native nested sheets behave. Vaul's context has
   * always-present no-op defaults, so `nested={true}` without a real
   * ancestor `Drawer.Root` won't throw — it silently skips the body-
   * position-restore step a nested drawer normally leaves to its parent —
   * which is exactly why this stays an explicit opt-in prop (set only by the
   * two call sites that are actually inside `DishStepDrawer`) rather than
   * something auto-detected. Once nested, this drawer's own portal mounts
   * after the parent's in the DOM, which is already enough for it to paint
   * on top at the SAME z-50 used elsewhere in this app, replacing the
   * previous ad-hoc `z-[60]` stacking hack — no z-index escalation needed.
   */
  nested?: boolean;
}

export function DishModal({ plate, onClose, dto, nested = false }: DishModalProps) {
  const [showNutrition, setShowNutrition] = useState(false);

  const stats = [
    { label: "KCAL",  value: `${plate.calories}` },
    { label: "G",     value: `${plate.macros.fat}g` },
    { label: "CH",    value: `${plate.macros.carbs}g` },
    { label: "P",     value: `${plate.macros.protein}g` },
  ];

  const DrawerRoot = nested ? Drawer.NestedRoot : Drawer.Root;

  return (
    <DrawerRoot
      open
      onOpenChange={(open) => {
        if (!open) onClose();
      }}
      shouldScaleBackground={false}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/55 backdrop-blur-sm" />
        <Drawer.Content
          className="fixed inset-x-0 bottom-0 z-50 flex max-h-[96dvh] flex-col rounded-t-3xl bg-white outline-none"
        >
          <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-gray-300" aria-hidden="true" />

          <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
            {/*
              Live-feedback fix (feedback-round-3): `Drawer.Content` above is
              full viewport width (no `max-w`/`mx-auto`) so the sheet itself
              is edge-to-edge at every breakpoint — this inner wrapper keeps
              the actual content (image, stats, ingredients, nutrition table)
              readable on very wide desktop screens without shrinking the
              sheet chrome around it.
            */}
            <div className="mx-auto flex w-full max-w-3xl flex-col gap-5 p-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] md:px-6 lg:px-8">
              {/* Imagen */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gray-50 sm:aspect-[16/9]">
                <Image
                  src={plate.image}
                  alt={plate.name}
                  fill
                  quality={90}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>

              {/* Título + cerrar */}
              <div className="flex items-start justify-between gap-4">
                <Drawer.Title className="text-2xl leading-tight font-ibrand text-gray-900">
                  {plate.name}
                </Drawer.Title>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Cerrar"
                  className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full border-0 cursor-pointer transition-all duration-200 hover:scale-110 bg-gray-100 text-gray-700"
                >
                  <X size={16} strokeWidth={2.5} />
                </button>
              </div>
              <Drawer.Description className="sr-only">
                Detalles completos de {plate.name}: ingredientes, información nutricional y alérgenos.
              </Drawer.Description>

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
                className="grid divide-x divide-gray-200 rounded-2xl border border-gray-200"
                style={{ gridTemplateColumns: `repeat(${stats.length}, 1fr)` }}
              >
                {stats.map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center py-3 px-1"
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

              {/*
                Live-feedback fix (feedback-round-2): allergen disclaimer,
                promoted from buried plain text into its own warning box
                (`Alert` variant="warning") — only rendered for real dishes
                (`dto` present) that actually carry disclaimer text.
              */}
              {dto && dto.dish.allergen_disclaimer.trim().length > 0 && (
                <Alert variant="warning">{dto.dish.allergen_disclaimer}</Alert>
              )}

              {/*
                Live-feedback fix (feedback-round-2): full nutrition
                breakdown, expandable in place so it stays usable at ~400px
                without forcing an always-open, cramped table.
                `NutritionFactsPanel` was already fully built (task 4.9) but
                mounted nowhere in the app until now.
              */}
              {dto && (
                <div className="flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => setShowNutrition((open) => !open)}
                    aria-expanded={showNutrition}
                    className="flex w-full items-center justify-between gap-2 rounded-2xl border border-gray-200 px-4 py-3 text-left transition-colors duration-200 hover:bg-gray-50"
                  >
                    <span className="text-sm font-bold font-poppins text-gray-900">
                      Ver tabla nutrimental
                    </span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`shrink-0 text-gray-500 transition-transform duration-200 ${showNutrition ? "rotate-180" : ""}`}
                    />
                  </button>
                  {showNutrition && (
                    <NutritionFactsPanel isPending={false} isError={false} data={dto} refetch={() => {}} />
                  )}
                </div>
              )}
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </DrawerRoot>
  );
}
