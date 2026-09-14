// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BagScreen } from "./BagScreen";
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

describe("BagScreen — tier resolution (informational, never a free pick)", () => {
  it("shows Porción Media and $120.00 for an individual with no goal set (default fallback)", () => {
    render(<BagScreen />);

    expect(screen.getByText("Porción Media")).toBeInTheDocument();
    expect(screen.getByText("$120.00")).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /porción/i })).not.toBeInTheDocument();
  });

  it("shows Porción Alta and $135.00 for an individual with goal=gain_muscle", () => {
    usePurchaseDraftStore.getState().setGoal("gain_muscle");
    render(<BagScreen />);

    expect(screen.getByText("Porción Alta")).toBeInTheDocument();
    expect(screen.getByText("$135.00")).toBeInTheDocument();
  });

  it("shows Porción Baja and $120.00 for an individual with goal=lose_weight", () => {
    usePurchaseDraftStore.getState().setGoal("lose_weight");
    render(<BagScreen />);

    expect(screen.getByText("Porción Baja")).toBeInTheDocument();
    expect(screen.getByText("$120.00")).toBeInTheDocument();
  });

  it("always shows Porción Media for group, even with a gain_muscle goal on record", () => {
    usePurchaseDraftStore.getState().setGoal("gain_muscle");
    usePurchaseDraftStore.getState().setCustomerKind("group");
    render(<BagScreen />);

    expect(screen.getByText("Porción Media")).toBeInTheDocument();
    expect(screen.getByText("Tu equipo siempre recibe la porción Media.")).toBeInTheDocument();
  });

  it("switches from individual to group tier resolution via the placeholder toggle", async () => {
    usePurchaseDraftStore.getState().setGoal("gain_muscle");
    const user = userEvent.setup();
    render(<BagScreen />);

    expect(screen.getByText("Porción Alta")).toBeInTheDocument();

    await user.click(screen.getByRole("radio", { name: "Para mi equipo" }));

    expect(screen.getByText("Porción Media")).toBeInTheDocument();
  });
});

describe("BagScreen — CouponDisclosure is present but unwired", () => {
  it("renders the collapsed coupon disclosure link", () => {
    render(<BagScreen />);
    expect(screen.getByRole("button", { name: "¿Tienes un cupón?" })).toBeInTheDocument();
  });
});

describe("BagScreen — funnel navigation (final integration unit)", () => {
  it("navigates to /complementos when Siguiente is clicked", async () => {
    const user = userEvent.setup();
    render(<BagScreen />);

    await user.click(screen.getByRole("button", { name: "Siguiente" }));

    expect(routerPushMock).toHaveBeenCalledWith("/complementos");
  });
});
