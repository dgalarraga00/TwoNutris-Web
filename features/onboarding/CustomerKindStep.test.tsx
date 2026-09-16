// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomerKindStep } from "./CustomerKindStep";
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

describe("CustomerKindStep", () => {
  it("renders both cards with their descriptions, Individual checked by default", () => {
    render(<CustomerKindStep />);

    expect(screen.getByRole("radio", { name: /Individual/ })).toHaveAttribute(
      "aria-checked",
      "true",
    );
    expect(screen.getByRole("radio", { name: /Familia \/ Equipo/ })).toHaveAttribute(
      "aria-checked",
      "false",
    );
    expect(screen.getByText(/usá la calculadora/)).toBeInTheDocument();
    expect(screen.getByText(/porción y precio estándar para todos/)).toBeInTheDocument();
  });

  it("selecting Familia / Equipo updates the shared purchaseDraftStore", async () => {
    const user = userEvent.setup();
    render(<CustomerKindStep />);

    await user.click(screen.getByRole("radio", { name: /Familia \/ Equipo/ }));

    expect(usePurchaseDraftStore.getState().customerKind).toBe("group");
    expect(screen.getByRole("radio", { name: /Familia \/ Equipo/ })).toHaveAttribute(
      "aria-checked",
      "true",
    );
  });

  it("selecting Individual after Familia updates the store back", async () => {
    usePurchaseDraftStore.getState().setCustomerKind("group");
    const user = userEvent.setup();
    render(<CustomerKindStep />);

    await user.click(screen.getByRole("radio", { name: /Individual/ }));

    expect(usePurchaseDraftStore.getState().customerKind).toBe("individual");
  });
});

describe("CustomerKindStep — funnel navigation (final integration unit)", () => {
  it("navigates to /calculadora when Individual is chosen", async () => {
    const user = userEvent.setup();
    render(<CustomerKindStep />);

    await user.click(screen.getByRole("radio", { name: /Individual/ }));

    expect(routerPushMock).toHaveBeenCalledWith("/calculadora");
  });

  it("navigates to /bolsa when Familia / Equipo is chosen (calculator skipped)", async () => {
    const user = userEvent.setup();
    render(<CustomerKindStep />);

    await user.click(screen.getByRole("radio", { name: /Familia \/ Equipo/ }));

    expect(routerPushMock).toHaveBeenCalledWith("/bolsa");
    expect(routerPushMock).not.toHaveBeenCalledWith("/calculadora");
  });

  it("renders a shortcut to /entrar for a returning customer (bug fix, live feedback: no way to skip the funnel before)", () => {
    render(<CustomerKindStep />);
    expect(screen.getByRole("link", { name: "Inicia sesión" })).toHaveAttribute("href", "/entrar");
  });
});
