import { Wheat, Milk, Egg, Fish, Leaf, Flame, Sprout, FlaskConical, Waves, Vegan, Salad, Bean, Dot, Nut } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const ALLERGEN_MAP: Record<string, { icon: LucideIcon; label: string }> = {
  Gluten:          { icon: Wheat,        label: "Gluten" },
  Lácteos:         { icon: Milk,         label: "Lácteos" },
  Huevo:           { icon: Egg,          label: "Huevo" },
  Pescado:         { icon: Fish,         label: "Pescado" },
  "Frutos secos":  { icon: Leaf,         label: "Frutos secos" },
  Vegetariano:     { icon: Sprout,       label: "Vegetariano" },
  Sulfitos:        { icon: FlaskConical, label: "Sulfitos" },
  Picante:         { icon: Flame,        label: "Picante" },
  Apio:            { icon: Vegan,        label: "Apio" },
  Mostaza:         { icon: Salad,        label: "Mostaza" },
  Soya:            { icon: Bean,         label: "Soya" },
  Sésamo:          { icon: Dot,          label: "Sésamo" },
  Maní:            { icon: Nut,          label: "Maní" },
  Maíz:            { icon: Wheat,        label: "Maíz" },
  Leguminosas:     { icon: Bean,         label: "Leguminosas" },
  Mariscos:        { icon: Waves,        label: "Mariscos" },
};
