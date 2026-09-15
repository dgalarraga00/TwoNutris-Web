"use client";

import { useEffect, useRef } from "react";

/**
 * Android hardware back should close the step drawer, not leave `/semana`
 * (design's phone-first step-drawer notes). Pushes a same-document history
 * sentinel while the drawer is open, and consumes the resulting `popstate`
 * (the back button) to close the drawer instead of letting the browser
 * navigate away. If the drawer closes through any OTHER path (swipe-down,
 * explicit "Atrás"/close, tapping the overlay) while the sentinel is still
 * on the stack, this hook pops it itself via `history.back()` so the stack
 * never accumulates orphaned entries.
 *
 * `onBack` is kept in a ref so the effect only re-runs when `open` itself
 * flips — an inline arrow function passed by the caller must never cause
 * the sentinel to be pushed/popped on every render.
 */
export function useDrawerBackGuard(open: boolean, onBack: () => void): void {
  const onBackRef = useRef(onBack);
  onBackRef.current = onBack;

  useEffect(() => {
    if (!open) return;

    let consumedByPopstate = false;
    window.history.pushState({ __drawerSentinel: true }, "");

    const handlePopState = (): void => {
      consumedByPopstate = true;
      onBackRef.current();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      if (!consumedByPopstate) {
        window.history.back();
      }
    };
  }, [open]);
}
