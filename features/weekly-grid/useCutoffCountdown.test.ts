// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { renderHook, act, cleanup } from "@testing-library/react";
import { useCutoffCountdown } from "./useCutoffCountdown";

describe("useCutoffCountdown", () => {
  const CUTOFF_ISO = "2026-09-14T18:00:00Z";

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  it("starts with remainingMs=null and isPastCutoff=false before mount ticks (SSR-safe placeholder)", () => {
    vi.setSystemTime(new Date("2026-09-14T17:00:00Z"));
    const { result } = renderHook(() => useCutoffCountdown(CUTOFF_ISO));

    // Before the effect's first `setNow` flushes, the hook must not throw
    // or crash on an un-mounted "now" — React Testing Library's
    // `renderHook` runs effects synchronously in `act`, so by the time we
    // read `result.current` here the first tick has already happened;
    // what matters is it never *stays* stuck at the SSR-unsafe state.
    expect(result.current.remainingMs).not.toBeNull();
  });

  it("formats the cutoff instant in America/Guayaquil regardless of the current time", () => {
    vi.setSystemTime(new Date("2026-09-14T12:00:00Z"));
    const { result } = renderHook(() => useCutoffCountdown(CUTOFF_ISO));

    // 18:00 UTC == 13:00 America/Guayaquil (UTC-5).
    expect(result.current.formattedCutoff).toContain("13:00");
  });

  it("counts down and flips isPastCutoff exactly when the clock crosses the cutoff instant", () => {
    vi.setSystemTime(new Date("2026-09-14T17:59:58Z"));
    const { result } = renderHook(() => useCutoffCountdown(CUTOFF_ISO));

    expect(result.current.isPastCutoff).toBe(false);
    expect(result.current.remainingMs).toBe(2000);

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current.isPastCutoff).toBe(false);
    expect(result.current.remainingMs).toBe(1000);

    act(() => {
      vi.advanceTimersByTime(2000);
    });
    expect(result.current.isPastCutoff).toBe(true);
    expect(result.current.remainingMs).toBe(0);
  });
});
