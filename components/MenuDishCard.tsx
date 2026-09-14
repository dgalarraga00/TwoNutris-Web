import Image from "next/image";
import { Flame, Leaf } from "lucide-react";
import { ALLERGEN_MAP } from "@/components/DishModal";
import type { MenuItem } from "@/data/menu";

/**
 * Extracted from `app/menu/page.tsx`'s original inline `DishCard` (obs #335:
 * reuse the existing dish-card design, don't rebuild it) so `MenuWeekPreview`
 * (F6, task 5.3) stays under the ~150-line cap. Purely presentational —
 * behavior/markup unchanged from the pre-existing static `/menu` page.
 */
export function MenuDishCard({ plate, onClick }: { plate: MenuItem; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={plate.name}
      className="group text-left flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full bg-white cursor-pointer"
      style={{ boxShadow: "0 2px 12px rgba(20,68,0,0.07)", border: "1px solid rgba(20,68,0,0.06)" }}
    >
      <div className="relative w-full overflow-hidden aspect-[4/3]">
        <Image
          src={plate.image}
          alt={plate.name}
          fill
          className="group-hover:scale-105 object-cover transition-transform duration-[400ms] ease-in-out"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          quality={90}
        />
        <div
          className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold font-poppins"
          style={{ backgroundColor: "#FFB000", color: "#144400" }}
        >
          <Flame size={10} strokeWidth={2.5} />
          {plate.calories} kcal
        </div>
      </div>
      <div className="flex flex-col gap-2 p-3 flex-1">
        <h4 className="text-sm leading-snug font-semibold font-poppins" style={{ color: "#144400" }}>
          {plate.name}
        </h4>
        <div
          className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-full self-start font-poppins"
          style={{ backgroundColor: "#FFFBE4", color: "#144400" }}
        >
          <span>P {plate.macros.protein}g</span>
          <span className="opacity-30">·</span>
          <span>C {plate.macros.carbs}g</span>
          <span className="opacity-30">·</span>
          <span>G {plate.macros.fat}g</span>
        </div>
      </div>
      <div className="flex items-center gap-1.5 px-3 py-2.5" style={{ borderTop: "1px solid rgba(20,68,0,0.06)" }}>
        {plate.allergens.length === 0 ? (
          <span className="text-xs font-poppins opacity-30" style={{ color: "#144400" }}>
            Sin alérgenos
          </span>
        ) : (
          plate.allergens.slice(0, 5).map((a) => {
            const entry = ALLERGEN_MAP[a];
            const Icon = entry?.icon ?? Leaf;
            return (
              <div key={a} className="flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: "rgba(20,68,0,0.06)" }} title={a}>
                <Icon size={12} strokeWidth={2} style={{ color: "#144400" }} />
              </div>
            );
          })
        )}
      </div>
    </button>
  );
}
