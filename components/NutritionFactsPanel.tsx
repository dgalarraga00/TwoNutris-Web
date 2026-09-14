"use client";

import { Fragment } from "react";
import { AsyncBoundary } from "@/components/AsyncBoundary";
import type { DishPortionNutritionDto, MenuDishCardDto } from "@/lib/api/menu";

/** Same query-result shape `AsyncBoundary` itself takes (task 4.9: "accept
 * the DTO/error state as props, matching AsyncBoundary's pattern"). Fed from
 * the raw `MenuDishCardDto` directly, never from the adapted `MenuItem`
 * (design obs #338 §B) — the two objects intentionally diverge in what they
 * carry, and this panel exists specifically for the fields `MenuItem` lacks. */
export interface NutritionFactsPanelProps {
  isPending: boolean;
  isError: boolean;
  error?: unknown;
  data: MenuDishCardDto | undefined;
  refetch: () => void;
}

interface NutritionRow {
  label: string;
  value: number;
  unit: string;
}

/**
 * The task/design doc says "6 fields `MenuItem` lacks" but then names 7:
 * fiber, sugars, added sugars, saturated fat, trans fat, cholesterol, sodium.
 * All 7 real DTO-only fields are rendered here rather than silently dropping
 * one to match a miscounted total.
 */
const rowsFor = (portion: DishPortionNutritionDto): NutritionRow[] => [
  { label: "Fibra", value: portion.fiber_g, unit: "g" },
  { label: "Azúcares", value: portion.sugars_g, unit: "g" },
  { label: "Azúcares añadidos", value: portion.added_sugars_g, unit: "g" },
  { label: "Grasa saturada", value: portion.saturated_fat_g, unit: "g" },
  { label: "Grasa trans", value: portion.trans_fat_g, unit: "g" },
  { label: "Colesterol", value: portion.cholesterol_mg, unit: "mg" },
  { label: "Sodio", value: portion.sodium_mg, unit: "mg" },
];

/**
 * "Empty" here is the same null-portion edge case `menuAdapter.ts::toMenuItem`
 * degrades gracefully for the card view (B2's fallback chain only returns
 * `null` when a dish has zero `DishPortion` rows at all). Reuses
 * `AsyncBoundary` for loading/error/success branching instead of
 * reinventing state handling (task 4.9 instruction).
 */
export function NutritionFactsPanel({
  isPending,
  isError,
  error,
  data,
  refetch,
}: NutritionFactsPanelProps) {
  return (
    <AsyncBoundary<MenuDishCardDto>
      isPending={isPending}
      isError={isError}
      error={error}
      data={data}
      refetch={refetch}
      isEmpty={(card) => card.portion === null}
      emptyFallback={
        <p className="p-4 text-sm text-gray-400">
          No hay información nutricional detallada disponible para este platillo.
        </p>
      }
    >
      {(card) => {
        if (card.portion === null) {
          return null;
        }
        const rows = rowsFor(card.portion);
        return (
          <dl className="grid grid-cols-2 gap-x-4 gap-y-2 rounded-2xl border border-gray-200 p-4">
            {rows.map((row) => (
              <Fragment key={row.label}>
                <dt className="text-sm text-gray-500">{row.label}</dt>
                <dd className="text-right text-sm font-semibold text-gray-900">
                  {row.value}
                  {row.unit}
                </dd>
              </Fragment>
            ))}
          </dl>
        );
      }}
    </AsyncBoundary>
  );
}
