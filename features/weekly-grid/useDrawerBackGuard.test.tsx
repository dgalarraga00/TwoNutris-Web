// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, cleanup, render } from "@testing-library/react";
import { StrictMode } from "react";
import { useDrawerBackGuard } from "./useDrawerBackGuard";

/**
 * Mounts `useDrawerBackGuard` under `<StrictMode>` so React 18/19's dev-only
 * synchronous effect -> cleanup -> effect double-invocation on first mount is
 * reproduced the exact way it happens in the real app (`next.config.ts` has
 * `reactStrictMode: true`). A plain non-Strict render never exercises the
 * phantom-cleanup race this suite guards against (feedback-round-2 bug: the
 * drawer flickered open-then-closed on the FIRST attempt after a fresh page
 * load, but worked fine on retry).
 */
function DrawerHarness({ open, onBack }: { open: boolean; onBack: () => void }) {
  useDrawerBackGuard(open, onBack);
  return null;
}

async function flushMicrotasks(times = 4): Promise<void> {
  for (let i = 0; i < times; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await Promise.resolve();
  }
}

describe("useDrawerBackGuard", () => {
  beforeEach(() => {
    vi.spyOn(window.history, "pushState");
    // Mocks the browser's real *asynchronous* popstate delivery: calling
    // `history.back()` does not close the drawer synchronously — the
    // resulting `popstate` event arrives on a later microtask. This is
    // exactly the timing the feedback-round-2 bug depended on: the OLD
    // implementation's phantom Strict-Mode cleanup called `history.back()`
    // BEFORE the real (second) effect instance registered its listener, so
    // the async `popstate` landed on that newer listener instead and
    // wrongly closed a drawer that had just "successfully" opened.
    vi.spyOn(window.history, "back").mockImplementation(() => {
      queueMicrotask(() => {
        window.dispatchEvent(new PopStateEvent("popstate"));
      });
    });
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("keeps the drawer open on the FIRST open after a fresh mount under Strict Mode's double-invoked effect", async () => {
    const onBack = vi.fn();

    await act(async () => {
      render(
        <StrictMode>
          <DrawerHarness open={true} onBack={onBack} />
        </StrictMode>,
      );
      await flushMicrotasks();
    });

    expect(onBack).not.toHaveBeenCalled();
  });

  it("still closes the drawer on a genuine device back (real popstate) once the first open has settled", async () => {
    const onBack = vi.fn();

    await act(async () => {
      render(
        <StrictMode>
          <DrawerHarness open={true} onBack={onBack} />
        </StrictMode>,
      );
      await flushMicrotasks();
    });

    act(() => {
      window.dispatchEvent(new PopStateEvent("popstate"));
    });

    expect(onBack).toHaveBeenCalledTimes(1);
  });

  it("pops the history sentinel exactly once when the drawer closes through a non-popstate path", async () => {
    const onBack = vi.fn();

    const { rerender } = render(
      <StrictMode>
        <DrawerHarness open={true} onBack={onBack} />
      </StrictMode>,
    );
    await act(async () => {
      await flushMicrotasks();
    });

    vi.mocked(window.history.back).mockClear();

    rerender(
      <StrictMode>
        <DrawerHarness open={false} onBack={onBack} />
      </StrictMode>,
    );
    await act(async () => {
      await flushMicrotasks();
    });

    expect(window.history.back).toHaveBeenCalledTimes(1);
    expect(onBack).not.toHaveBeenCalled();
  });
});
