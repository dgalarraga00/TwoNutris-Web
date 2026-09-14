"use client";

import { X } from "lucide-react";
import { QuantityStepper } from "./QuantityStepper";
import type { DraftLine } from "./types";

interface DishLineRowProps {
  line: DraftLine;
  showSaladName: boolean;
  disabled: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
  onRemove: () => void;
}

/**
 * One draft line's own row — extracted to keep `DishSlot` under the ~150-
 * line SRP cap once the quantity/multi-salad UI landed. Per-unit salad
 * choice (user-confirmed, not a guess): when a day has 2+ available salads
 * and a main dish has more than one draft line (one per distinct salad),
 * EACH line renders its own row here with its own stepper and salad label —
 * the customer never has to use one salad for the whole quantity.
 */
export function DishLineRow({
  line,
  showSaladName,
  disabled,
  onIncrement,
  onDecrement,
  onRemove,
}: DishLineRowProps) {
  const removeLabel = showSaladName
    ? `Quitar ${line.dishName} con ${line.saladName}`
    : `Quitar ${line.dishName}`;

  return (
    <li className="flex items-center justify-between gap-2 rounded-lg bg-leaf-light/20 px-2.5 py-1.5">
      <span className="text-xs font-poppins text-leaf/70">
        {showSaladName ? `con ${line.saladName}` : "Cantidad"}
      </span>
      <div className="flex items-center gap-2">
        <QuantityStepper
          quantity={line.quantity}
          label={line.dishName}
          disabled={disabled}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        <button
          type="button"
          onClick={onRemove}
          disabled={disabled}
          aria-label={removeLabel}
          className="text-leaf/40 transition-colors duration-200 hover:text-red-500 disabled:opacity-40 disabled:pointer-events-none"
        >
          <X size={14} aria-hidden="true" />
        </button>
      </div>
    </li>
  );
}
