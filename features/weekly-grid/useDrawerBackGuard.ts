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
 *
 * Live-feedback fix (feedback-round-2): React 18/19 Strict Mode
 * double-invokes this effect on the FIRST mount after `open` flips true —
 * synchronously, in the same tick: effect -> cleanup -> effect again,
 * before the browser ever gets control back. The naive version above always
 * called `history.back()` in cleanup when `consumedByPopstate` was false,
 * which fired on the PHANTOM cleanup from the first (throwaway) invocation.
 * That `history.back()` resolves asynchronously; by the time its `popstate`
 * event actually arrives, the SECOND (real) invocation had already
 * registered its own listener, which caught that stray event and closed the
 * drawer that had just "successfully" opened — reproducible only on the
 * first attempt per page load, never on retry (the second open has no
 * phantom double-invoke to race against).
 *
 * Fix: two refs that persist across the double-invocation (refs are NOT
 * reset between Strict Mode's synchronous effect/cleanup/effect passes,
 * only their VALUES are set from inside the effect body):
 *   - `sentinelActiveRef` tracks whether an unpopped sentinel currently sits
 *     on the history stack, so a second (real) invocation reuses the
 *     existing entry instead of pushing a duplicate one.
 *   - `ownerInstanceIdRef` tracks which effect invocation currently owns
 *     cleanup responsibility. Each cleanup defers its `history.back()` call
 *     to a microtask (which only runs after Strict Mode's synchronous
 *     effect/cleanup/effect sequence has fully settled) and checks there
 *     whether a NEWER invocation has since taken ownership — if so, this is
 *     a phantom cleanup and the pop is skipped; the newer instance owns the
 *     sentinel now and will pop it itself when it truly closes.
 */
export function useDrawerBackGuard(open: boolean, onBack: () => void): void {
  const onBackRef = useRef(onBack);
  onBackRef.current = onBack;

  const sentinelActiveRef = useRef(false);
  const instanceIdRef = useRef(0);
  const ownerInstanceIdRef = useRef(0);

  useEffect(() => {
    if (!open) return;

    const myInstanceId = ++instanceIdRef.current;
    ownerInstanceIdRef.current = myInstanceId;
    let consumedByPopstate = false;

    if (!sentinelActiveRef.current) {
      window.history.pushState({ __drawerSentinel: true }, "");
      sentinelActiveRef.current = true;
    }

    const handlePopState = (): void => {
      consumedByPopstate = true;
      sentinelActiveRef.current = false;
      onBackRef.current();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      if (consumedByPopstate) return;

      queueMicrotask(() => {
        // A newer invocation already reclaimed ownership (Strict Mode's
        // synchronous effect/cleanup/effect settled) — this cleanup is the
        // phantom one; skip the pop, the sentinel is still legitimately
        // needed by the current listener.
        if (ownerInstanceIdRef.current !== myInstanceId) return;
        if (!sentinelActiveRef.current) return;

        sentinelActiveRef.current = false;
        window.history.back();
      });
    };
  }, [open]);
}
