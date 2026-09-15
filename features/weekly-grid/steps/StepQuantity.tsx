"use client";

import { useState } from "react";
import Image from "next/image";
import type { MenuDishCardDto } from "@/lib/api/menu";
import { toMenuItem } from "@/lib/adapters/menuAdapter";
import { DishModal } from "@/components/DishModal";

interface StepQuantityProps {
  main: MenuDishCardDto;
  quantity: number;
  onChange: (quantity: number) => void;
}

const QUICK_PICKS = [1, 2, 3, 4, 5];

/**
 * Step 1 of 3 (design's phone-first step-drawer table): a 96px dish thumb,
 * a 56x56 stepper with a 64px numeral, and 1-5 quick-pick chips (48px
 * tall, 12px gaps) so the common case never needs repeated stepper taps.
 * Zero scroll at 390px by construction — no list, just the stepper block.
 *
 * Live-feedback fix (feedback-round-2): "Ver detalles completos" opens the
 * same `DishModal` used elsewhere (ingredients, full nutrition table,
 * allergen disclaimer) — previously only reachable from the standalone
 * `/menu` page or the day-grid card, never from inside the step drawer
 * where the customer is actually deciding quantity.
 */
export function StepQuantity({ main, quantity, onChange }: StepQuantityProps) {
  const plate = toMenuItem(main);
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className="flex flex-col items-center gap-6 px-4 py-4 md:px-6 lg:px-8 lg:py-6">
      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl lg:h-32 lg:w-32">
        <Image src={plate.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 128px, 96px" />
      </div>
      <p className="text-center font-ibrand text-lg text-leaf lg:text-xl">{main.dish.name}</p>
      <button
        type="button"
        onClick={() => setShowDetail(true)}
        className="-mt-4 font-poppins text-xs font-bold text-leaf/60 underline underline-offset-2 transition-colors duration-200 hover:text-leaf"
      >
        Ver detalles completos
      </button>
      {showDetail && <DishModal plate={plate} onClose={() => setShowDetail(false)} dto={main} />}

      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={() => onChange(quantity - 1)}
          disabled={quantity <= 1}
          aria-label="Quitar una unidad"
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-leaf/20 text-2xl font-bold text-leaf transition-colors duration-200 hover:bg-leaf-light/40 disabled:opacity-40 disabled:pointer-events-none"
        >
          −
        </button>
        <span
          aria-live="polite"
          className="w-16 text-center text-[64px] font-bold font-poppins leading-none text-leaf"
        >
          {quantity}
        </span>
        <button
          type="button"
          onClick={() => onChange(quantity + 1)}
          aria-label="Agregar una unidad"
          className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-leaf/20 text-2xl font-bold text-leaf transition-colors duration-200 hover:bg-leaf-light/40"
        >
          +
        </button>
      </div>

      <ul className="flex flex-wrap justify-center gap-3" aria-label="Cantidades rápidas">
        {QUICK_PICKS.map((n) => (
          <li key={n}>
            <button
              type="button"
              onClick={() => onChange(n)}
              aria-pressed={quantity === n}
              className={`flex h-12 min-w-12 items-center justify-center rounded-full px-3 text-sm font-bold font-poppins transition-colors duration-200 ${
                quantity === n ? "bg-amber text-leaf" : "bg-leaf-light/30 text-leaf/70 hover:bg-leaf-light/50"
              }`}
            >
              {n}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
