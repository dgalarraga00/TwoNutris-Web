import type { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  padding?: "sm" | "md" | "lg";
}

const PADDING: Record<NonNullable<CardProps["padding"]>, string> = {
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

/**
 * Bordered panel primitive, matching `DishModal`'s own stat-grid pattern
 * (`rounded-2xl border`) instead of each screen hand-rolling
 * `rounded-2xl border border-gray-200 p-4`. Renders a plain `<div>` — screens
 * that need `<fieldset>`/`<legend>` semantics (checkout, portion-change
 * receipt forms) keep those native elements and apply the same visual
 * classes directly, since swapping the element type would lose that a11y
 * semantic.
 */
export function Card({ padding = "md", className, children, ...rest }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-leaf/10 bg-white ${PADDING[padding]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </div>
  );
}
