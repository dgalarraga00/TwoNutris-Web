"use client";

import { Order, OrderItem, OrderStatus } from "@/app/generated/prisma";
import { MapPin, Clock, ChevronDown } from "lucide-react";
import { useState } from "react";

interface OrderWithItems extends Order {
  items: OrderItem[];
}

const STATUS_LABEL: Record<OrderStatus, string> = {
  PENDING: "Pendiente",
  PREPARING: "En preparación",
  SHIPPED: "En camino",
  DELIVERED: "Entregado",
};

const STATUS_STYLE: Record<OrderStatus, string> = {
  PENDING: "bg-amber/20 text-amber-700",
  PREPARING: "bg-blue-50 text-blue-700",
  SHIPPED: "bg-purple-50 text-purple-700",
  DELIVERED: "bg-leaf/10 text-leaf",
};

export function OrderCard({ order }: { order: OrderWithItems }) {
  const [open, setOpen] = useState(false);

  const date = new Date(order.createdAt).toLocaleDateString("es-EC", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      {/* Header del pedido */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-poppins font-bold text-gray-900 text-sm">
              Pedido #{order.id.slice(0, 8).toUpperCase()}
            </span>
            <span
              className={`text-[11px] font-semibold font-poppins px-2.5 py-0.5 rounded-full ${STATUS_STYLE[order.status]}`}
            >
              {STATUS_LABEL[order.status]}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-poppins text-gray-400">
            <span className="flex items-center gap-1">
              <Clock size={11} />
              {date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin size={11} />
              {order.deliveryAddress.length > 35
                ? order.deliveryAddress.slice(0, 35) + "…"
                : order.deliveryAddress}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="font-poppins font-bold text-gray-900">
            ${order.total.toFixed(2)}
          </span>
          <ChevronDown
            size={16}
            className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {/* Detalle */}
      {open && (
        <div className="border-t border-gray-100 px-5 py-4 flex flex-col gap-3">
          <ul className="flex flex-col gap-2">
            {order.items.map((item) => (
              <li key={item.id} className="flex justify-between text-sm font-poppins">
                <span className="text-gray-700">
                  {item.quantity}× {item.dishName}
                </span>
                <span className="text-gray-500">
                  ${(item.unitPrice * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className="border-t border-gray-100 pt-3 flex flex-col gap-1.5 text-sm font-poppins">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>${(order.total - (order.total >= 24 ? 4 : 3)).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-gray-900">
              <span>Total pagado</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>

          {order.deliveryInstructions && (
            <p className="text-xs font-poppins text-gray-400 bg-gray-50 rounded-xl px-3 py-2">
              <span className="font-semibold text-gray-600">Instrucciones:</span>{" "}
              {order.deliveryInstructions}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
