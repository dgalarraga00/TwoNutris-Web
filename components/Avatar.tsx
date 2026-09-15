import { Blobatar } from "@blobatar/react";

export interface AvatarProps {
  /**
   * Deterministic seed for the avatar (`account-avatar` spec: "the same
   * input MUST always produce the same avatar"). Callers pass the
   * customer's email — this component has no opinion on identity, only
   * rendering, so it stays reusable for any future seed source (SRP + DIP:
   * one rendering responsibility, seed supplied by the caller).
   */
  seed: string;
  /** Pixel width/height. Defaults to 32 (dropdown-trigger scale). */
  size?: number;
  /** Accessible name, rendered as an inline `<title>` for screen readers. */
  title?: string;
  className?: string;
}

/**
 * `account-avatar` capability: a deterministic, client-side-only avatar with
 * no upload/edit control and no backend field (spec requirement — the seed
 * is hashed entirely in the browser by `@blobatar/react`, nothing round-trips
 * to the server). Thin wrapper around `<Blobatar>` so every call site shares
 * one rounded/shrink-0 presentation instead of repeating those classes.
 */
export function Avatar({ seed, size = 32, title, className }: AvatarProps) {
  return (
    <Blobatar
      name={seed}
      size={size}
      title={title}
      className={`shrink-0 rounded-full ${className ?? ""}`}
    />
  );
}
