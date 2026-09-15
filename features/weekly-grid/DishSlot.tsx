"use client";

import { useState } from "react";
import type { MenuDishCardDto } from "@/lib/api/menu";
import { MenuDishCard } from "@/components/MenuDishCard";
import { DishModal } from "@/components/DishModal";
import { toMenuItem } from "@/lib/adapters/menuAdapter";
import type { DraftLine } from "./types";

interface DishSlotProps {
  main: MenuDishCardDto;
  /** Already filtered to this day's non-sold-out, priced salads (owned by
   * `DayColumn` — computed once per day, not duplicated per dish). */
  availableSalads: MenuDishCardDto[];
  /** Every draft line for THIS main dish (0, 1, or many — one per distinct
   * salad the customer paired it with). */
  lines: DraftLine[];
  disabled: boolean;
  onOpenDrawer: () => void;
}

/**
 * One main dish's card (order-flow-wizard Phase 3: removes the old dual-
 * "+" ambiguity — spec "Unambiguous add actions"). A single always-visible
 * total-quantity badge plus ONE trigger ("Agregar"/"Editar") is the whole
 * interaction surface here now; every quantity/salad edit happens inside
 * `DishStepDrawer`, owned one level up by `DayColumn` so only one drawer
 * instance mounts per day.
 */
export function DishSlot({ main, availableSalads, lines, disabled, onOpenDrawer }: DishSlotProps) {
  const [showDetail, setShowDetail] = useState(false);
  const totalQuantity = lines.reduce((sum, line) => sum + line.quantity, 0);
  const canOpen = !disabled && !main.is_sold_out && main.portion !== null && availableSalads.length > 0;
  const triggerDisabled = disabled || (totalQuantity === 0 && !canOpen);

  return (
    <li className="flex flex-col gap-3 rounded-2xl border border-leaf/10 bg-white p-3">
      <div className="relative">
        <MenuDishCard plate={toMenuItem(main)} onClick={() => setShowDetail(true)} />
        {main.is_sold_out && (
          <span className="absolute left-2 top-2 rounded-full bg-leaf px-2.5 py-1 text-xs font-bold font-poppins text-cream shadow-sm">
            Agotado
          </span>
        )}
        {totalQuantity > 0 && (
          <span
            aria-label={`${totalQuantity} unidades de ${main.dish.name} en el pedido`}
            className="absolute right-2 top-2 flex h-7 min-w-7 items-center justify-center rounded-full bg-amber px-2 text-sm font-bold font-poppins text-leaf shadow-sm"
          >
            {totalQuantity}
          </span>
        )}
      </div>

      {showDetail && (
        <DishModal plate={toMenuItem(main)} onClose={() => setShowDetail(false)} dto={main} />
      )}

      <button
        type="button"
        aria-label={totalQuantity > 0 ? `Editar ${main.dish.name}` : `Agregar ${main.dish.name} al pedido`}
        onClick={onOpenDrawer}
        disabled={triggerDisabled}
        className="rounded-full bg-amber px-4 py-2.5 text-sm font-bold font-ibrand text-leaf shadow-[0_4px_16px_rgba(255,176,0,0.35)] transition-all duration-200 hover:scale-[1.02] disabled:opacity-40 disabled:pointer-events-none disabled:shadow-none"
      >
        {totalQuantity > 0 ? "Editar" : "Agregar"}
      </button>

      {!main.is_sold_out && availableSalads.length === 0 && (
        <p role="status" className="text-xs font-medium text-amber-700">
          No hay ensalada disponible este día.
        </p>
      )}
    </li>
  );
}
