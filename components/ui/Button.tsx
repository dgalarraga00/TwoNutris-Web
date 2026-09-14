import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md";

interface ButtonOwnProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & { href?: undefined };

type ButtonAsLink = ButtonOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> & { href: string };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const BASE =
  "inline-flex items-center justify-center gap-2 font-bold font-ibrand text-sm transition-all duration-200 disabled:opacity-40 disabled:pointer-events-none";

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "rounded-full bg-amber text-leaf shadow-[0_4px_16px_rgba(255,176,0,0.35)] hover:scale-[1.02]",
  secondary: "rounded-full border-[1.5px] border-leaf/25 text-leaf bg-transparent hover:bg-leaf/5",
  ghost: "rounded-lg text-leaf bg-transparent hover:underline underline-offset-4",
};

/** Sizing is separate from variant shape so a compact context (e.g. the
 * weekly-grid's per-day "Confirmar pedido" button) never has to fight
 * Tailwind's utility-order cascade by overriding `px-*`/`py-*` via
 * `className` — same-property utility classes have no guaranteed
 * source-order precedence, so a real `size` prop is the only safe way to
 * offer a smaller footprint. */
const SIZES: Record<ButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  sm: "px-4 py-1.5 text-xs",
};

/**
 * Shared CTA primitive (visual design pass). `primary` matches `Navbar`'s
 * amber CTA pattern; `secondary` matches `Planes`' non-featured card button
 * (bordered, transparent); `ghost` is a text-only variant for "Atrás"/cancel
 * actions. Renders a real `<Link>` when `href` is given — several existing
 * screens navigate via `router.push` from an `onClick`, but a few (profile
 * "Comprar paquete" CTAs, auth cross-links) are genuine navigation links —
 * both render with the exact same visual classes, so no call site needs to
 * duplicate styling. `disabled` styling preserves the `disabled:opacity-40`
 * language every screen already used.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth,
  className,
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes =
    `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${fullWidth ? "w-full" : ""} ${className ?? ""}`.trim();

  if (href !== undefined) {
    const linkRest = rest as Omit<ButtonAsLink, keyof ButtonOwnProps | "href">;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as Omit<ButtonAsButton, keyof ButtonOwnProps | "href">;
  return (
    <button type="button" {...buttonRest} className={classes}>
      {children}
    </button>
  );
}
