import Image from "next/image";
import { Leaf } from "lucide-react";
import type { MenuDishCardDto } from "@/lib/api/menu";
import { toMenuItem } from "@/lib/adapters/menuAdapter";
import { ALLERGEN_MAP } from "@/components/DishModal";

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
 * first principle). `lg:h-28 lg:w-28` lets the thumb grow once the parent
 * `DishStepDrawer` widens past `md` (feedback-round-1), instead of just
 * adding empty padding around an unchanged card.
 *
 * Live-feedback fix (feedback-round-1): these rows previously showed only a
 * photo + name + macros — no allergen info at all, unlike the main-dish
 * cards (`MenuDishCard`), which the customer expected parity with. Reuses
 * the SAME `ALLERGEN_MAP`/icon pattern from `DishModal` (up to 5 icons) plus
 * a calorie badge, fed by `toMenuItem()`'s existing `calories`/`allergens`
 * fields — no new "ingredients" field invented; calories/macros/allergens
 * remain the only nutrition data this product models.
 */
export function SaladPicker({ salads, selectedId, onSelect }: SaladPickerProps) {
  return (
    <ul
      role="group"
      aria-label="Elegí tu ensalada de acompañamiento"
      className="flex flex-col gap-3 sm:grid sm:grid-cols-2 lg:gap-4"
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
              className={`flex w-full flex-col gap-2 rounded-2xl border-2 bg-white p-2 text-left transition-colors duration-200 lg:p-3 ${
                isSelected ? "border-amber bg-amber/5" : "border-leaf/10 hover:bg-leaf-light/20"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl lg:h-28 lg:w-28">
                  <Image
                    src={plate.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 112px, 96px"
                  />
                  <div
                    className="absolute bottom-1 right-1 rounded-full bg-amber px-1.5 py-0.5 font-poppins text-[10px] font-bold text-leaf"
                    aria-hidden="true"
                  >
                    {plate.calories} kcal
                  </div>
                </div>
                <div className="flex min-w-0 flex-col gap-1">
                  <span className="font-ibrand text-base text-leaf lg:text-lg">{salad.dish.name}</span>
                  <span className="font-poppins text-xs font-bold text-leaf/60">
                    P {plate.macros.protein}g · C {plate.macros.carbs}g · G {plate.macros.fat}g
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 border-t border-leaf/10 pt-2">
                {plate.allergens.length === 0 ? (
                  <span className="font-poppins text-xs text-leaf/40">Sin alérgenos</span>
                ) : (
                  plate.allergens.slice(0, 5).map((a) => {
                    const entry = ALLERGEN_MAP[a];
                    const Icon = entry?.icon ?? Leaf;
                    return (
                      <div
                        key={a}
                        title={a}
                        className="flex h-6 w-6 items-center justify-center rounded-full bg-leaf-light/30"
                      >
                        <Icon size={12} strokeWidth={2} className="text-leaf" />
                      </div>
                    );
                  })
                )}
              </div>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
