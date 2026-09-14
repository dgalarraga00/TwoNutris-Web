// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UpsellsScreen } from "./UpsellsScreen";
import { usePurchaseDraftStore } from "@/stores/purchaseDraftStore";

const { routerPushMock } = vi.hoisted(() => ({ routerPushMock: vi.fn() }));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: routerPushMock }),
}));

beforeEach(() => {
  sessionStorage.clear();
  usePurchaseDraftStore.getState().reset();
  routerPushMock.mockClear();
});

afterEach(() => {
  cleanup();
});

describe("UpsellsScreen — double-protein default-unchecked (zero exceptions)", () => {
  it("never pre-checks double-protein for a MEDIUM-tier (default) individual draft", () => {
    render(<UpsellsScreen />);
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("never pre-checks double-protein even for a HIGH-tier individual draft (the case the spec calls out by name)", () => {
    usePurchaseDraftStore.getState().setGoal("gain_muscle"); // -> HIGH tier
    render(<UpsellsScreen />);

    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("lets an individual customer check it, and it stays a user action, not a default", async () => {
    usePurchaseDraftStore.getState().setGoal("gain_muscle");
    const user = userEvent.setup();
    render(<UpsellsScreen />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});

describe("UpsellsScreen — GROUP hides double-protein entirely", () => {
  it("renders no double-protein checkbox at all when customerKind is group", () => {
    usePurchaseDraftStore.getState().setCustomerKind("group");
    render(<UpsellsScreen />);

    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  });
});

describe("UpsellsScreen — snack quantity selector (0/5/10/20 only)", () => {
  it("defaults to 'Ninguno' selected", () => {
    render(<UpsellsScreen />);
    expect(screen.getByRole("button", { name: "Ninguno" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("selects a 10-credit bundle and updates the running total", async () => {
    const user = userEvent.setup();
    render(<UpsellsScreen />);

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
    render(<UpsellsScreen />);
    expect(screen.getByText("$138.00")).toBeInTheDocument();
  });

  it("shows the HIGH-tier + double-protein total once explicitly checked: 135+25=160 -> 184.00", async () => {
    usePurchaseDraftStore.getState().setGoal("gain_muscle");
    const user = userEvent.setup();
    render(<UpsellsScreen />);

    await user.click(screen.getByRole("checkbox"));

    expect(screen.getByText("$184.00")).toBeInTheDocument();
  });
});

describe("UpsellsScreen — funnel navigation (final integration unit)", () => {
  it("navigates to /registro when Siguiente is clicked", async () => {
    const user = userEvent.setup();
    render(<UpsellsScreen />);

    await user.click(screen.getByRole("button", { name: "Siguiente" }));

    expect(routerPushMock).toHaveBeenCalledWith("/registro");
  });
});
