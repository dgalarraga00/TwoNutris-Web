"use client";

import { AsyncBoundary } from "@/components/AsyncBoundary";
import { useMyOrders } from "@/lib/api/orders";

/**
 * F11 task 6.4: delivery/order history, reusing F10's own
 * `GET /api/me/orders` (`lib/api/orders.ts::useMyOrders()`) — not rebuilt.
 */
export function DeliveryHistorySection() {
  const { isPending, isError, error, data, refetch } = useMyOrders();

  return (
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
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold font-ibrand text-leaf">
                {order.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </AsyncBoundary>
  );
}
