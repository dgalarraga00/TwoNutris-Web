// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { BalanceSummary } from "./BalanceSummary";
import { useBalance } from "@/lib/api/balance";

vi.mock("@/lib/api/balance", () => ({
  useBalance: vi.fn(),
}));

const mockUseBalance = vi.mocked(useBalance);

function mockBalanceQuery(meal: number, snack: number) {
  mockUseBalance.mockReturnValue({
    isPending: false,
    isError: false,
    error: undefined,
    data: {
      meal: { available: meal, batches: [] },
      snack: { available: snack, batches: [] },
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    refetch: vi.fn(),
  } as any);
}

/**
 * Live-feedback fix (feedback-round-2) regression coverage: a live running
 * total ("Llevas X de Y créditos ... disponibles esta semana") comparing
 * what the customer has drafted this week against each wallet's balance,
 * with a warning state once drafted exceeds available. Two independent
 * wallets throughout — never pooled, never a combined number.
 */
describe("BalanceSummary — running total math and warning threshold", () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it("shows the running total under the balance, with no warning while within budget", () => {
    mockBalanceQuery(5, 2);

    render(<BalanceSummary draftedMealQuantity={3} />);

    expect(screen.getByText("Créditos de plato: 5")).toBeInTheDocument();
    expect(
      screen.getByText("Llevas 3 de 5 créditos de plato disponibles esta semana."),
    ).toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("flips to a warning state exactly when drafted meal quantity exceeds available meal credits", () => {
    mockBalanceQuery(5, 2);

    const { rerender } = render(<BalanceSummary draftedMealQuantity={5} />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();

    rerender(<BalanceSummary draftedMealQuantity={6} />);
    expect(
      screen.getByText(
        "Tienes más platos en tus borradores (6) que créditos de plato disponibles (5). Podrás enviar cada día hasta agotar tu saldo; el resto quedará pendiente hasta que renueves tu paquete.",
      ),
    ).toBeInTheDocument();
  });

  it("never blocks — the warning is informational only, the per-day submission stays the real enforcement point", () => {
    mockBalanceQuery(5, 2);

    render(<BalanceSummary draftedMealQuantity={99} />);

    // The warning renders, but nothing in BalanceSummary disables anything —
    // there is no button/control here at all for it to disable.
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("treats the two wallets independently — a meal-only warning never mentions or pools snack credits", () => {
    mockBalanceQuery(5, 2);

    render(<BalanceSummary draftedMealQuantity={6} draftedSnackQuantity={0} />);

    expect(screen.getByRole("alert")).toHaveTextContent(/platos/);
    expect(screen.getByRole("alert")).not.toHaveTextContent(/snack/);
    // Snack running total stays hidden while nothing has been drafted for it.
    expect(screen.queryByText(/créditos de snack disponibles esta semana/)).not.toBeInTheDocument();
  });

  it("surfaces its own snack running total and warning once a drafted snack quantity is passed", () => {
    mockBalanceQuery(5, 2);

    render(<BalanceSummary draftedMealQuantity={0} draftedSnackQuantity={3} />);

    expect(
      screen.getByText("Llevas 3 de 2 créditos de snack disponibles esta semana."),
    ).toBeInTheDocument();
    expect(screen.getByRole("alert")).toHaveTextContent(/snack/);
  });
});
