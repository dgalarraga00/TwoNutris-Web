"use client";

import { useState } from "react";
import { AsyncBoundary } from "@/components/AsyncBoundary";
import { useMyOrders, type OrderDto } from "@/lib/api/orders";
import { CancelOrderDrawer } from "./CancelOrderDrawer";

/** Real `OrderStatus` values -> their exact `models.TextChoices` human
 * labels (backend `orders/models.py`, read directly this session) — used
 * for the chip only, so a customer never sees a raw enum value like
 * `cancelled_no_refund`. */
const STATUS_CHIP_LABEL: Record<string, string> = {
  placed: "Confirmado",
  cancelled_refunded: "Cancelado con reembolso",
  cancelled_no_refund: "Cancelado sin reembolso",
};

/**
 * F11 task 6.4: delivery/order history, reusing F10's own
 * `GET /api/me/orders` (`lib/api/orders.ts::useMyOrders()`) — not rebuilt.
 *
 * Phase 4 addition (spec `order-history-management`): a 44px-min
 * `Cancelar` action, shown only while `status === "placed"` (the only
 * live/cancellable state — the two `cancelled_*` states are terminal),
 * opens `CancelOrderDrawer`. `cancelTarget` is deliberately never reset to
 * `null` on close (only ever overwritten by the NEXT order's cancel tap),
 * so the drawer stays mounted through Vaul's own close animation — same
 * pattern `DayColumn.tsx` already established for `DishStepDrawer`.
 */
export function DeliveryHistorySection() {
  const { isPending, isError, error, data, refetch } = useMyOrders();
  const [cancelTarget, setCancelTarget] = useState<OrderDto | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AsyncBoundary
        isPending={isPending}
        isError={isError}
        error={error}
        data={data}
        refetch={refetch}
        isEmpty={(orders) => orders.length === 0}
        emptyFallback={
          <p role="status" className="font-poppins text-sm text-leaf/50">
            Todavía no tienes pedidos.
          </p>
        }
      >
        {(orders) => (
          <ul className="flex flex-col gap-3">
            {orders.map((order) => (
              <li
                key={order.id}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-leaf/10 bg-leaf-light/10 px-4 py-3 font-poppins text-sm text-leaf"
              >
                <div className="flex flex-col gap-0.5">
                  <p className="font-semibold">
                    Pedido #{order.id} — {order.status}
                  </p>
                  <p className="text-xs text-leaf/60">Entrega: {order.delivery_date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold font-ibrand text-leaf">
                    {STATUS_CHIP_LABEL[order.status] ?? order.status}
                  </span>
                  {order.status === "placed" && (
                    <button
                      type="button"
                      onClick={() => {
                        setCancelTarget(order);
                        setDrawerOpen(true);
                      }}
                      className="flex h-11 min-w-[44px] items-center justify-center rounded-full border-2 border-red-600/40 px-4 font-bold font-ibrand text-xs text-red-600 transition-colors duration-200 hover:bg-red-50"
                    >
                      Cancelar
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </AsyncBoundary>

      {cancelTarget && (
        <CancelOrderDrawer order={cancelTarget} open={drawerOpen} onOpenChange={setDrawerOpen} />
      )}
    </>
  );
}
