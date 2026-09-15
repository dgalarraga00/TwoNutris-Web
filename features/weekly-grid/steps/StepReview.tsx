"use client";

import type { MenuDishCardDto } from "@/lib/api/menu";
import { DishLineRow } from "../DishLineRow";
import { draftLineId, type DraftLine } from "../types";

interface StepReviewProps {
  main: MenuDishCardDto;
  salads: MenuDishCardDto[];
  unitSalads: (number | null)[];
  disabled: boolean;
  onIncrementGroup: (saladDishId: number) => void;
  onDecrementGroup: (saladDishId: number) => void;
  onRemoveGroup: (saladDishId: number) => void;
}

/**
 * Step 3 of 3: groups the staged `unitSalads` by salad (max 2 groups — a
 * published day always has exactly 2 salads) and renders each with the
 * existing `DishLineRow` (reused verbatim, design's File Changes note) so
 * the customer can still fine-tune counts, or remove a salad grouping
 * entirely, before confirming.
 */
export function StepReview({
  main,
  salads,
  unitSalads,
  disabled,
  onIncrementGroup,
  onDecrementGroup,
  onRemoveGroup,
}: StepReviewProps) {
  const counts = new Map<number, number>();
  for (const saladDishId of unitSalads) {
    if (saladDishId === null) continue;
    counts.set(saladDishId, (counts.get(saladDishId) ?? 0) + 1);
  }

  const groups: DraftLine[] = Array.from(counts.entries()).map(([saladDishId, quantity]) => {
    const salad = salads.find((s) => s.dish.id === saladDishId);
    return {
      id: draftLineId(main.menu_dish_id, saladDishId),
      menuDishId: main.menu_dish_id,
      dishId: main.dish.id,
      dishPortionId: main.portion?.id ?? 0,
      dishName: main.dish.name,
      saladDishId,
      saladPortionId: salad?.portion?.id ?? 0,
      saladName: salad?.dish.name ?? "",
      quantity,
    };
  });

  if (groups.length === 0) {
    return (
      <p role="status" className="px-4 py-8 text-center font-poppins text-sm text-leaf/60">
        Sin unidades — confirmar quitará este platillo del día.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-2 px-4 py-4">
      {groups.map((line) => (
        <DishLineRow
          key={line.id}
          line={line}
          showSaladName={groups.length > 1}
          disabled={disabled}
          onIncrement={() => onIncrementGroup(line.saladDishId)}
          onDecrement={() => onDecrementGroup(line.saladDishId)}
          onRemove={() => onRemoveGroup(line.saladDishId)}
        />
      ))}
    </ul>
  );
}
