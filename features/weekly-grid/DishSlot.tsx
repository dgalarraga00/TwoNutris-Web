"use client";

import { useState } from "react";
import type { MenuDishCardDto } from "@/lib/api/menu";
import { MenuDishCard } from "@/components/MenuDishCard";
import { DishModal } from "@/components/DishModal";
import { toMenuItem } from "@/lib/adapters/menuAdapter";
import { SaladPicker } from "./SaladPicker";
import { DishLineRow } from "./DishLineRow";
import type { DraftLine, NewDraftLine } from "./types";

interface DishSlotProps {
  main: MenuDishCardDto;
  salads: MenuDishCardDto[];
  /** Every draft line for THIS main dish (0, 1, or many — one per distinct
   * salad the customer paired it with). */
  lines: DraftLine[];
  disabled: boolean;
  onAdd: (line: NewDraftLine) => void;
  onSetQuantity: (lineId: string, quantity: number) => void;
  onRemoveLine: (lineId: string) => void;
}

/**
 * One main dish's card (design-refinement pass: real card parity with
 * `/menu`, not a name + text link). Reuses `MenuDishCard`/`DishModal`
 * verbatim via `toMenuItem()` (obs #335/F4 convention) — this file only
 * adds the quantity/multi-salad interaction layer on top, it does not
 * rebuild a parallel card design.
 *
 * A MAIN dish can NEVER be added without a resolved side-salad (credit-
 * packs: "every MEAL line requires a paired side-salad, free, zero credit
 * cost") — `onAdd` is only ever called once a salad has been resolved
 * (auto-picked when exactly one is available, chosen via `SaladPicker` when
 * more than one is). Per-unit salad choice (user-confirmed): once at least
 * one unit exists, further `+` clicks either increment an existing line
 * (via `onAdd` with that same salad — `useDayDraft`'s own dedupe collapses
 * it) or open `SaladPicker` again to start a new line with a different one.
 */
export function DishSlot({ main, salads, lines, disabled, onAdd, onSetQuantity, onRemoveLine }: DishSlotProps) {
  const [pickingSalad, setPickingSalad] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const availableSalads = salads.filter((salad) => !salad.is_sold_out && salad.portion !== null);
  const multiSalad = availableSalads.length > 1;
  const totalQuantity = lines.reduce((sum, line) => sum + line.quantity, 0);
  const canAdd = !disabled && !main.is_sold_out && main.portion !== null && availableSalads.length > 0;

  const addWithSalad = (salad: MenuDishCardDto) => {
    if (main.portion === null || salad.portion === null) return;
    onAdd({
      menuDishId: main.menu_dish_id,
      dishId: main.dish.id,
      dishPortionId: main.portion.id,
      dishName: main.dish.name,
      saladDishId: salad.dish.id,
      saladPortionId: salad.portion.id,
      saladName: salad.dish.name,
    });
    setPickingSalad(false);
  };

  const handleAddClick = () => {
    if (availableSalads.length === 1) {
      addWithSalad(availableSalads[0]!);
      return;
    }
    setPickingSalad(true);
  };

  const incrementLine = (line: DraftLine) => {
    const { id: _id, quantity: _quantity, ...rest } = line;
    onAdd(rest);
  };

  return (
    <li className="flex flex-col gap-3 rounded-2xl border border-leaf/10 bg-white p-3">
      <div className="relative">
        <MenuDishCard plate={toMenuItem(main)} onClick={() => setShowDetail(true)} />
        {main.is_sold_out && (
          <span className="absolute left-2 top-2 rounded-full bg-leaf px-2.5 py-1 text-xs font-bold font-poppins text-cream shadow-sm">
            Agotado
          </span>
        )}
      </div>

      {showDetail && <DishModal plate={toMenuItem(main)} onClose={() => setShowDetail(false)} />}

      {totalQuantity === 0 && !pickingSalad && (
        <button
          type="button"
          aria-label={`Agregar ${main.dish.name} al pedido`}
          onClick={handleAddClick}
          disabled={!canAdd}
          className="rounded-full bg-amber px-4 py-2.5 text-sm font-bold font-ibrand text-leaf shadow-[0_4px_16px_rgba(255,176,0,0.35)] transition-all duration-200 hover:scale-[1.02] disabled:opacity-40 disabled:pointer-events-none disabled:shadow-none"
        >
          Agregar
        </button>
      )}

      {totalQuantity > 0 && (
        <ul className="flex flex-col gap-1.5">
          {lines.map((line) => (
            <DishLineRow
              key={line.id}
              line={line}
              showSaladName={multiSalad}
              disabled={disabled}
              onIncrement={() => incrementLine(line)}
              onDecrement={() => onSetQuantity(line.id, line.quantity - 1)}
              onRemove={() => onRemoveLine(line.id)}
            />
          ))}
        </ul>
      )}

      {totalQuantity > 0 && multiSalad && !disabled && !main.is_sold_out && !pickingSalad && (
        <button
          type="button"
          onClick={() => setPickingSalad(true)}
          className="self-start text-xs font-poppins text-leaf underline underline-offset-2 transition-colors duration-200 hover:text-leaf-dark"
        >
          + Agregar otra unidad
        </button>
      )}

      {pickingSalad && (
        <SaladPicker salads={availableSalads} onSelect={addWithSalad} onCancel={() => setPickingSalad(false)} />
      )}

      {!main.is_sold_out && availableSalads.length === 0 && (
        <p role="status" className="text-xs font-medium text-amber-700">
          No hay ensalada disponible este día.
        </p>
      )}
    </li>
  );
}
