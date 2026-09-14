"use client";

import { Minus, Plus } from "lucide-react";

interface QuantityStepperProps {
  quantity: number;
  label: string;
  disabled?: boolean;
  onIncrement: () => void;
  onDecrement: () => void;
}

/**
 * Generic `[-] N [+]` stepper. Design-refinement pass: this is the
 * well-established e-commerce default, NOT a `ui-ux-pro-max` database-
 * verified pattern — that search returned 0 results for a quantity-stepper
 * query, so this is a general convention, stated explicitly rather than
 * implied as verified. Extracted as its own file (not inlined in
 * `DishLineRow`) since `DishSlot`'s "+ Agregar otra unidad" affordance uses
 * the exact same tight internal spacing/sizing convention.
 */
export function QuantityStepper({
  quantity,
  label,
  disabled,
  onIncrement,
  onDecrement,
}: QuantityStepperProps) {
  return (
    <div role="group" aria-label={`Cantidad de ${label}`} className="flex items-center gap-2">
      <button
        type="button"
        onClick={onDecrement}
        disabled={disabled}
        aria-label={`Quitar una unidad de ${label}`}
        className="flex h-7 w-7 items-center justify-center rounded-full border border-leaf/20 text-leaf transition-colors duration-200 hover:bg-leaf-light/40 disabled:opacity-40 disabled:pointer-events-none"
      >
        <Minus size={14} strokeWidth={2.5} aria-hidden="true" />
      </button>
      <span aria-live="polite" className="w-5 text-center text-sm font-bold font-poppins text-leaf">
        {quantity}
      </span>
      <button
        type="button"
        onClick={onIncrement}
        disabled={disabled}
        aria-label={`Agregar una unidad de ${label}`}
        className="flex h-7 w-7 items-center justify-center rounded-full border border-leaf/20 text-leaf transition-colors duration-200 hover:bg-leaf-light/40 disabled:opacity-40 disabled:pointer-events-none"
      >
        <Plus size={14} strokeWidth={2.5} aria-hidden="true" />
      </button>
    </div>
  );
}
