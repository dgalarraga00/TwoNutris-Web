import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * shadcn/ui's standard `cn()` helper (design D7's scaffolding requirement):
 * merges conditional Tailwind class lists via `clsx`, then resolves
 * conflicting Tailwind utility classes via `tailwind-merge` so the last
 * class in source order always wins (e.g. `cn("px-2", "px-4")` → `"px-4"`,
 * never both).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
