// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DeliveryHistorySection } from "./DeliveryHistorySection";

const jsonResponse = (status: number, body: unknown): Response =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

function renderSection() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <DeliveryHistorySection />
    </QueryClientProvider>,
  );
}

describe("DeliveryHistorySection", () => {
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

  it("renders past orders from GET /api/me/orders", async () => {
    fetchMock.mockImplementation(async () =>
      jsonResponse(200, [
        {
          id: 501,
          status: "confirmed",
          delivery_date: "2026-09-15",
          items: [],
          created_at: "2026-09-10T00:00:00Z",
        },
      ]),
    );

    renderSection();

    expect(await screen.findByText("Pedido #501 — confirmed")).toBeInTheDocument();
    expect(screen.getByText("Entrega: 2026-09-15")).toBeInTheDocument();
  });

  it("renders the empty state (no orders yet), not an error", async () => {
    fetchMock.mockImplementation(async () => jsonResponse(200, []));

    renderSection();

    expect(await screen.findByText("Todavía no tienes pedidos.")).toBeInTheDocument();
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
