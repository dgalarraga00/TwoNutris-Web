"use client";

import { useState } from "react";
import { ChevronDown, MapPin, Phone, User } from "lucide-react";
import { Order, OrderItem, OrderStatus, Profile } from "@/lib/generated/prisma";

const MONTHS = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];

function fmtDate(d: Date | string): string {
  const dt = new Date(d);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${dt.getDate()} ${MONTHS[dt.getMonth()]} ${dt.getFullYear()}, ${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
}

interface OrderWithRelations extends Order {
  items: OrderItem[];
  profile: Profile | null;
}

const STATUS_LABEL: Record<OrderStatus, string> = {
  PENDING: "Pendiente",
  PAID: "Pagado",
  FAILED: "Fallido",
  CANCELLED: "Cancelado",
};

const STATUS_STYLE: Record<OrderStatus, string> = {
  PENDING: "bg-amber-50 text-amber-700",
  PAID: "bg-leaf/10 text-leaf",
  FAILED: "bg-red-50 text-red-600",
  CANCELLED: "bg-gray-100 text-gray-500",
};

const TABS: { label: string; value: OrderStatus | "ALL" }[] = [
  { label: "Todos", value: "ALL" },
  { label: "Pendiente", value: "PENDING" },
  { label: "Pagado", value: "PAID" },
  { label: "Fallido", value: "FAILED" },
  { label: "Cancelado", value: "CANCELLED" },
];

function OrderRow({ order }: { order: OrderWithRelations }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors text-left"
      >
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-poppins font-bold text-gray-900 text-sm font-mono">
              #{order.id.slice(0, 8).toUpperCase()}
            </span>
            <span
              className={`text-[11px] font-semibold font-poppins px-2.5 py-0.5 rounded-full ${STATUS_STYLE[order.status]}`}
            >
              {STATUS_LABEL[order.status]}
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs font-poppins text-gray-400 flex-wrap">
            <span>{order.profile?.fullName ?? "Sin nombre"}</span>
            <span>{fmtDate(order.createdAt)}</span>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="font-poppins font-bold text-gray-900">
            ${order.total.toFixed(2)}
          </span>
          <ChevronDown
            size={16}
            className={`text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>

      {open && (
        <div className="border-t border-gray-100 px-5 py-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5 text-sm font-poppins">
            <div className="flex items-center gap-2 text-gray-600">
              <User size={13} className="text-gray-400 shrink-0" />
              <span>{order.profile?.fullName ?? "Sin nombre"}</span>
            </div>
            {order.profile?.whatsapp && (
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={13} className="text-gray-400 shrink-0" />
                <span>{order.profile.whatsapp}</span>
              </div>
            )}
            <div className="flex items-start gap-2 text-gray-600">
              <MapPin size={13} className="text-gray-400 shrink-0 mt-0.5" />
              <span>{order.deliveryAddress}</span>
            </div>
            {order.deliveryInstructions && (
              <p className="text-xs text-gray-400 bg-gray-50 rounded-xl px-3 py-2 ml-5">
                <span className="font-semibold text-gray-600">Instrucciones:</span>{" "}
                {order.deliveryInstructions}
              </p>
            )}
          </div>

          <div className="border-t border-gray-100 pt-3">
            <ul className="flex flex-col gap-2">
              {order.items.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between text-sm font-poppins"
                >
                  <span className="text-gray-700">
                    {item.quantity}× {item.dishName}
                  </span>
                  <span className="text-gray-500">
                    ${(item.unitPrice * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold text-gray-900 text-sm font-poppins border-t border-gray-100 mt-2 pt-2">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function AdminPedidosList({ orders }: { orders: OrderWithRelations[] }) {
  const [activeTab, setActiveTab] = useState<OrderStatus | "ALL">("ALL");

  const filtered =
    activeTab === "ALL" ? orders : orders.filter((o) => o.status === activeTab);

  const countByStatus = (status: OrderStatus | "ALL") =>
    status === "ALL"
      ? orders.length
      : orders.filter((o) => o.status === status).length;

  return (
    <div>
      <div className="flex gap-1 flex-wrap mb-6">
        {TABS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActiveTab(value)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold font-poppins transition-colors ${
              activeTab === value
                ? "bg-leaf text-cream"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {label}
            <span
              className={`ml-1.5 text-xs ${
                activeTab === value ? "text-cream/70" : "text-gray-400"
              }`}
            >
              {countByStatus(value)}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
        {filtered.length === 0 && (
          <div className="py-16 text-center font-poppins text-sm text-gray-400">
            No hay pedidos en esta categoría
          </div>
        )}
      </div>
    </div>
  );
}
