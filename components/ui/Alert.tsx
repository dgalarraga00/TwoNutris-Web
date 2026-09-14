import type { HTMLAttributes } from "react";

export type AlertVariant = "success" | "error" | "warning" | "info";

export interface AlertProps extends HTMLAttributes<HTMLParagraphElement> {
  variant: AlertVariant;
}

const VARIANT_STYLES: Record<AlertVariant, string> = {
  success: "bg-leaf-light/50 text-leaf-dark",
  error: "bg-red-50 text-red-700",
  warning: "bg-amber/15 text-leaf-dark",
  info: "bg-leaf/5 text-leaf",
};

const DEFAULT_ROLE: Record<AlertVariant, "alert" | "status"> = {
  success: "status",
  error: "alert",
  warning: "alert",
  info: "status",
};

/**
 * Brand-consistent inline message, replacing the raw `text-red-700`/
 * `text-green-700` strings scattered across the funnel screens. Preserves
 * the exact `role="alert"`/`role="status"` semantics each call site already
 * relied on (existing tests query by role) — pass `role` explicitly only
 * when a call site's prior role differs from this variant's default.
 */
export function Alert({ variant, role, className, children, ...rest }: AlertProps) {
  return (
    <p
      role={role ?? DEFAULT_ROLE[variant]}
      className={`rounded-xl px-4 py-2.5 text-sm font-poppins font-medium ${VARIANT_STYLES[variant]} ${className ?? ""}`}
      {...rest}
    >
      {children}
    </p>
  );
}
