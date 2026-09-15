"use client";

import type { MenuDishCardDto } from "@/lib/api/menu";
import { SaladPicker } from "../SaladPicker";

interface StepSaladsProps {
  salads: MenuDishCardDto[];
  unitIndex: number;
  totalUnits: number;
  selectedId: number | null;
  onSelect: (saladDishId: number) => void;
}

/**
 * Step 2 of 3: assigns ONE salad to ONE unit at a time — "Unidad k de N" +
 * progress dots (design's phone-first table), per-unit salad choice (spec
 * "Add a unit with a different salad"). Reuses the now-presentational
 * `SaladPicker` list instead of duplicating the salad-row markup.
 */
export function StepSalads({ salads, unitIndex, totalUnits, selectedId, onSelect }: StepSaladsProps) {
  return (
    <div className="flex flex-col gap-4 px-4 py-4">
      <div className="flex flex-col items-center gap-2">
        <p className="font-poppins text-sm font-semibold text-leaf/70">
          Unidad {unitIndex + 1} de {totalUnits}
        </p>
        <div className="flex gap-1.5" aria-hidden="true">
          {Array.from({ length: totalUnits }, (_, i) => (
            <span
              key={i}
              className={`h-1.5 w-6 rounded-full ${i <= unitIndex ? "bg-amber" : "bg-leaf-light/40"}`}
            />
          ))}
        </div>
      </div>

      <SaladPicker salads={salads} selectedId={selectedId} onSelect={(salad) => onSelect(salad.dish.id)} />
    </div>
  );
}
