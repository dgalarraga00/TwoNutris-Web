// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UpsellsScreen } from "./UpsellsScreen";
import { usePurchaseDraftStore } from "@/stores/purchaseDraftStore";

const { routerPushMock } = vi.hoisted(() => ({ routerPushMock: vi.fn() }));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: routerPushMock }),
}));

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const { fill: _fill, sizes: _sizes, quality: _quality, priority: _priority, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />;
  },
}));

/** `UpsellsScreen` now reads `useMe()` (bug fix: routing must know whether
 * the customer already has an account) — every render needs a QueryClient,
 * and every test needs SOME `fetch` mock or the query hangs unresolved.
 * Defaults to an unauthenticated 401 (the common pre-account case); the
 * navigation tests override this explicitly for the authenticated case. */
function renderUpsells(fetchMock: ReturnType<typeof vi.fn> = vi.fn().mockResolvedValue(new Response(null, { status: 401 }))) {
  vi.stubGlobal("fetch", fetchMock);
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <UpsellsScreen />
    </QueryClientProvider>,
  );
}

beforeEach(() => {
  sessionStorage.clear();
  usePurchaseDraftStore.getState().reset();
  routerPushMock.mockClear();
});

afterEach(() => {
  cleanup();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

describe("UpsellsScreen — double-protein default-unchecked (zero exceptions)", () => {
  it("never pre-checks double-protein for a MEDIUM-tier (default) individual draft", () => {
    renderUpsells();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("never pre-checks double-protein even for a HIGH-tier individual draft (the case the spec calls out by name)", () => {
    usePurchaseDraftStore.getState().setGoal("gain_muscle"); // -> HIGH tier
    renderUpsells();

    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("lets an individual customer check it, and it stays a user action, not a default", async () => {
    usePurchaseDraftStore.getState().setGoal("gain_muscle");
    const user = userEvent.setup();
    renderUpsells();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("explains what double-protein does and that it's a whole-bag setting, not one dish at a time (live feedback)", () => {
    renderUpsells();
    expect(screen.getByText(/Duplica la porción de proteína/)).toBeInTheDocument();
  });
});

describe("UpsellsScreen — GROUP hides double-protein entirely", () => {
  it("renders no double-protein checkbox at all when customerKind is group", () => {
    usePurchaseDraftStore.getState().setCustomerKind("group");
    renderUpsells();

    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  });
});

describe("UpsellsScreen — snack quantity selector (0/5/10/20 only)", () => {
  it("defaults to 'Ninguno' selected", () => {
    renderUpsells();
    expect(screen.getByRole("button", { name: "Ninguno" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("selects a 10-credit bundle and updates the running total", async () => {
    const user = userEvent.setup();
    renderUpsells();

    await user.click(screen.getByRole("button", { name: "10 créditos" }));

    expect(screen.getByRole("button", { name: "10 créditos" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    // MEDIUM (120) + 10 snack credits (20) = 140 subtotal, 21.00 tax, 161.00 total
    expect(screen.getByText("$161.00")).toBeInTheDocument();
  });
});

describe("UpsellsScreen — running price total", () => {
  it("shows the default MEDIUM-tier total with no add-ons: 120 -> 138.00", () => {
    renderUpsells();
    expect(screen.getByText("$138.00")).toBeInTheDocument();
  });

  it("shows the HIGH-tier + double-protein total once explicitly checked: 135+25=160 -> 184.00", async () => {
    usePurchaseDraftStore.getState().setGoal("gain_muscle");
    const user = userEvent.setup();
    renderUpsells();

    await user.click(screen.getByRole("checkbox"));

    expect(screen.getByText("$184.00")).toBeInTheDocument();
  });
});

describe("UpsellsScreen — funnel navigation (bug fix, live feedback: must not always force account creation)", () => {
  it("navigates to /registro when the customer has no account yet", async () => {
    const user = userEvent.setup();
    renderUpsells(vi.fn().mockResolvedValue(new Response(null, { status: 401 })));

    await user.click(screen.getByRole("button", { name: "Siguiente" }));

    expect(routerPushMock).toHaveBeenCalledWith("/registro");
  });

  it("navigates straight to /checkout when the customer is already authenticated (e.g. buying an extra pack)", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(
        JSON.stringify({ id: 1, email: "ana@test.com", first_name: "Ana", last_name: "Pérez" }),
        { status: 200 },
      ),
    );
    const user = userEvent.setup();
    renderUpsells(fetchMock);

    await waitFor(() => expect(fetchMock).toHaveBeenCalled());
    await user.click(screen.getByRole("button", { name: "Siguiente" }));

    expect(routerPushMock).toHaveBeenCalledWith("/checkout");
  });
});
