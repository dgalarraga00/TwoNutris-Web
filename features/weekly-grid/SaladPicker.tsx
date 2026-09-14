import type { MenuDishCardDto } from "@/lib/api/menu";
import { MenuDishCard } from "@/components/MenuDishCard";
import { toMenuItem } from "@/lib/adapters/menuAdapter";
import { Button } from "@/components/ui/Button";

interface SaladPickerProps {
  salads: MenuDishCardDto[];
  onSelect: (salad: MenuDishCardDto) => void;
  onCancel: () => void;
}

/**
 * Shown only when a day has MORE than one available salad (a real published
 * day always has exactly 2 per `MenuDay`'s own publish requirement — "4
 * platos fuertes + 2 ensaladas" — so this is the common case, not an edge
 * case; `DishSlot` auto-picks instead when exactly 1 is available, and
 * blocks adding entirely when 0 are). Every MEAL line requires this pairing
 * (spec: credit-packs) — this component is the ONLY place a salad gets
 * attached to a main dish.
 *
 * Bug fix (user feedback, live testing): the previous version was a bare
 * text-link list — no photo/macro parity with the main dish's own real
 * card, and its tiny gray "Cancelar" was easy to miss. Now reuses
 * `MenuDishCard`/`toMenuItem()` (same convention `DishSlot` already uses
 * for mains) so a salad looks exactly as rich as a main — including the
 * SAME graceful photo-fallback `toMenuItem()` already applies when no
 * `DishImage(is_cover=True)` row exists (confirmed live: none of the 7 real
 * salad dishes have one uploaded yet — a content gap, not a code gap; this
 * card will pick up real photos automatically the moment one is added in
 * Django, no code change needed then). A highlighted panel + explicit
 * "Paso 2" framing makes it visually unmistakable that picking one is a
 * required step, not an optional aside — and `Cancelar` is now a real,
 * clearly visible secondary `Button`, not near-invisible text.
 */
export function SaladPicker({ salads, onSelect, onCancel }: SaladPickerProps) {
  return (
    <div
      role="group"
      aria-label="Elegí tu ensalada de acompañamiento"
      className="flex flex-col gap-3 rounded-2xl border-2 border-amber bg-amber/5 p-3"
    >
      <div>
        <p className="font-poppins text-xs font-bold uppercase tracking-wide text-amber-700">
          Paso 2 de 2 — obligatorio
        </p>
        <p className="font-ibrand text-base text-leaf">Elegí tu ensalada de acompañamiento</p>
      </div>

      <ul className="grid grid-cols-2 gap-2">
        {salads.map((salad) => (
          <li key={salad.menu_dish_id}>
            <MenuDishCard plate={toMenuItem(salad)} onClick={() => onSelect(salad)} />
          </li>
        ))}
      </ul>

      <Button variant="secondary" size="sm" onClick={onCancel} className="self-start">
        Cancelar
      </Button>
    </div>
  );
}
