// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BalanceSection } from "./BalanceSection";

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

function renderBalanceSection() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <BalanceSection />
    </QueryClientProvider>,
  );
}

describe("BalanceSection", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchMock = vi.fn();
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("shows both wallets' remaining credits, never pooled into a single number", async () => {
    fetchMock.mockImplementation(async () =>
      jsonResponse(200, {
        meal: { available: 6, batches: [] },
        snack: { available: 3, batches: [] },
      }),
    );

    renderBalanceSection();

    expect(await screen.findByText("Créditos de plato: 6")).toBeInTheDocument();
    expect(screen.getByText("Créditos de snack: 3")).toBeInTheDocument();
  });

  it("renders the zero-both-wallets empty state as a purchase CTA, not an error", async () => {
    fetchMock.mockImplementation(async () =>
      jsonResponse(200, {
        meal: { available: 0, batches: [] },
        snack: { available: 0, batches: [] },
      }),
    );

    renderBalanceSection();

    expect(await screen.findByText("No tienes créditos disponibles todavía.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Comprar un paquete" })).toHaveAttribute(
      "href",
      "/bolsa",
    );
    // Never the error branch.
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("does NOT show the empty CTA when only one wallet is zero", async () => {
    fetchMock.mockImplementation(async () =>
      jsonResponse(200, {
        meal: { available: 0, batches: [] },
        snack: { available: 5, batches: [] },
      }),
    );

    renderBalanceSection();

    expect(await screen.findByText("Créditos de plato: 0")).toBeInTheDocument();
    expect(screen.getByText("Créditos de snack: 5")).toBeInTheDocument();
    expect(screen.queryByText("No tienes créditos disponibles todavía.")).not.toBeInTheDocument();
  });
});
