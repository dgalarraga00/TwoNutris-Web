// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CancelOrderDrawer } from "./CancelOrderDrawer";
import type { OrderDto } from "@/lib/api/orders";

// jsdom has no Pointer Events capture API; Vaul's drag-to-dismiss handling
// calls `setPointerCapture`/`releasePointerCapture` on every press inside
// the drawer (same per-file-polyfill convention as WeekGrid.test.tsx).
if (typeof Element !== "undefined" && !Element.prototype.setPointerCapture) {
  Element.prototype.setPointerCapture = () => {};
  Element.prototype.releasePointerCapture = () => {};
  Element.prototype.hasPointerCapture = () => false;
}

const cancelOrderMock = vi.fn();
const invalidateMock = vi.fn();

vi.mock("@/lib/api/orders", async () => {
  const actual = await vi.importActual<typeof import("@/lib/api/orders")>("@/lib/api/orders");
  return {
    ...actual,
    cancelOrder: (...args: unknown[]) => cancelOrderMock(...args),
    useInvalidateOrdersAndBalance: () => invalidateMock,
  };
});

const toastSuccessMock = vi.fn();
vi.mock("sonner", () => ({
  toast: { success: (...args: unknown[]) => toastSuccessMock(...args) },
}));

// Far-future cutoff so the "refund" branch is stable under REAL timers,
// with no `vi.setSystemTime` needed for the interaction tests below — only
// the dedicated past-cutoff test below manipulates fake time.
const FAR_FUTURE_CUTOFF = "2099-01-01T00:00:00Z";

function orderFixture(overrides: Partial<OrderDto> = {}): OrderDto {
  return {
    id: 501,
    status: "placed",
    delivery_date: "2026-09-15",
    cutoff_at: FAR_FUTURE_CUTOFF,
    created_at: "2026-09-10T00:00:00Z",
    items: [{ id: 1, dish: 10, dish_portion: 1, menu_dish: 301, quantity: 3, snapshot_name: "Bowl" }],
    ...overrides,
  } as OrderDto;
}

describe("CancelOrderDrawer", () => {
  beforeEach(() => {
    cancelOrderMock.mockReset();
    invalidateMock.mockReset();
    toastSuccessMock.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  it("shows the refund amount BEFORE the destructive confirm action, using 'cancelar' copy", () => {
    const order = orderFixture();

    render(<CancelOrderDrawer order={order} open onOpenChange={vi.fn()} />);

    const refundText = screen.getByText("Se te devolverán 3 créditos de comida");
    const confirmButton = screen.getByRole("button", { name: "Cancelar pedido" });

    // DOCUMENT_POSITION_FOLLOWING (4) means refundText comes BEFORE confirmButton.
    expect(refundText.compareDocumentPosition(confirmButton) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(screen.queryByText(/eliminar/i)).not.toBeInTheDocument();
  });

  it("shows the past-cutoff no-refund copy once now is past cutoff_at", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2026-09-14T18:00:01Z"));
    const order = orderFixture({ cutoff_at: "2026-09-14T18:00:00Z" });

    render(<CancelOrderDrawer order={order} open onOpenChange={vi.fn()} />);

    expect(
      screen.getByText("Ya pasó el corte: esta cancelación no devuelve créditos"),
    ).toBeInTheDocument();

    vi.useRealTimers();
  });

  it("confirming calls cancelOrder, toasts the server-returned status, invalidates caches, and closes", async () => {
    const user = userEvent.setup();
    cancelOrderMock.mockResolvedValue({ ...orderFixture(), status: "cancelled_refunded" });
    const onOpenChange = vi.fn();
    const order = orderFixture();

    render(<CancelOrderDrawer order={order} open onOpenChange={onOpenChange} />);

    await user.click(screen.getByRole("button", { name: "Cancelar pedido" }));

    await waitFor(() => expect(cancelOrderMock).toHaveBeenCalledWith(501));
    await waitFor(() =>
      expect(toastSuccessMock).toHaveBeenCalledWith(
        "Pedido cancelado — tus créditos fueron devueltos.",
      ),
    );
    expect(invalidateMock).toHaveBeenCalled();
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
