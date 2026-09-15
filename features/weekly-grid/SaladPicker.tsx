import Image from "next/image";
import type { MenuDishCardDto } from "@/lib/api/menu";
import { toMenuItem } from "@/lib/adapters/menuAdapter";

interface SaladPickerProps {
  salads: MenuDishCardDto[];
  selectedId?: number | null;
  onSelect: (salad: MenuDishCardDto) => void;
}

/**
 * Design-refinement pass (order-flow-wizard Phase 3): now a pure
 * presentational salad-selection list, reused inside `StepSalads` — the
 * numbered "Paso N de 3" framing lives one level up in the drawer's own
 * chrome now (identical on all 3 steps), so this component no longer owns
 * step framing or a cancel action; `StepQuantity`/`DishStepDrawer`'s footer
 * "Atrás" replaces the old inline "Cancelar".
 *
 * Phone-first layout (design's exact table): full-width stacked rows
 * ≥96px tall, whole row tappable — NOT the old `grid-cols-2` card grid,
 * which produced ~180px-wide cards too small to read macros on a phone.
 * `sm:grid-cols-2` restores a 2-up layout at tablet/desktop widths (design:
 * "step 2's salad rows may return to 2-up" — same rows, not a different
 * card style, so desktop stays the same component tree per the mobile-
 * first principle).
 */
export function SaladPicker({ salads, selectedId, onSelect }: SaladPickerProps) {
  return (
    <ul
      role="group"
      aria-label="Elegí tu ensalada de acompañamiento"
      className="flex flex-col gap-3 sm:grid sm:grid-cols-2"
    >
      {salads.map((salad) => {
        const plate = toMenuItem(salad);
        const isSelected = salad.dish.id === selectedId;
        return (
          <li key={salad.menu_dish_id}>
            <button
              type="button"
              onClick={() => onSelect(salad)}
              aria-label={salad.dish.name}
              aria-pressed={isSelected}
              className={`flex w-full items-center gap-3 rounded-2xl border-2 bg-white p-2 text-left transition-colors duration-200 ${
                isSelected ? "border-amber bg-amber/5" : "border-leaf/10 hover:bg-leaf-light/20"
              }`}
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                <Image src={plate.image} alt="" fill className="object-cover" sizes="96px" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-ibrand text-base text-leaf">{salad.dish.name}</span>
                <span className="font-poppins text-xs font-bold text-leaf/60">
                  P {plate.macros.protein}g · C {plate.macros.carbs}g · G {plate.macros.fat}g
                </span>
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
