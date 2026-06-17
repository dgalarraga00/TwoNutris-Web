"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Search,
  User,
  X,
} from "lucide-react";
import { Order, OrderItem, OrderStatus, Profile } from "@/lib/generated/prisma";

const MONTHS = ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];

function fmtDate(d: Date | string): string {
  const dt = new Date(d);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${dt.getDate()} ${MONTHS[dt.getMonth()]} ${dt.getFullYear()}, ${pad(dt.getHours())}:${pad(dt.getMinutes())}`;
}

// YYYY-MM-DD en hora local del navegador (sin corrimiento UTC).
function toInputDate(d: Date): string {
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

interface OrderWithRelations extends Order {
  items: OrderItem[];
  profile: Profile | null;
}

interface Filters {
  q: string;
  status: string;
  desde: string;
  hasta: string;
}

const SLOT_LABEL: Record<string, string> = {
  MORNING: "Mañana (09:00–15:30)",
  AFTERNOON: "Tarde (15:00–20:00)",
};

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
            {order.deliverySlot && SLOT_LABEL[order.deliverySlot] && (
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={13} className="text-gray-400 shrink-0" />
                <span>{SLOT_LABEL[order.deliverySlot]}</span>
              </div>
            )}
            <div className="flex items-start gap-2 text-gray-600">
              <MapPin size={13} className="text-gray-400 shrink-0 mt-0.5" />
              <span className="flex-1">{order.deliveryAddress}</span>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(order.deliveryAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-[11px] font-semibold font-poppins px-2.5 py-1 rounded-lg bg-leaf/10 text-leaf hover:bg-leaf/20 transition-colors"
              >
                Ver mapa
              </a>
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

export function AdminPedidosList({
  orders,
  counts,
  page,
  totalPages,
  totalCount,
  pageSize,
  filters,
}: {
  orders: OrderWithRelations[];
  counts: Record<string, number>;
  page: number;
  totalPages: number;
  totalCount: number;
  pageSize: number;
  filters: Filters;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(filters.q);

  // Actualiza la URL. Cualquier cambio de filtro vuelve a la página 1
  // (salvo que estemos navegando explícitamente entre páginas).
  function updateParams(updates: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, value] of Object.entries(updates)) {
      if (value === null || value === "") params.delete(key);
      else params.set(key, value);
    }
    if (!("page" in updates)) params.delete("page");
    router.push(`/admin/pedidos?${params.toString()}`);
  }

  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    updateParams({ q: search.trim() || null });
  }

  function setPreset(preset: "hoy" | "semana" | "mes" | "todo") {
    if (preset === "todo") {
      updateParams({ desde: null, hasta: null });
      return;
    }
    const now = new Date();
    let desde: Date;
    if (preset === "hoy") {
      desde = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    } else if (preset === "semana") {
      const dow = now.getDay() || 7; // domingo (0) → 7, semana arranca lunes
      desde = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dow + 1);
    } else {
      desde = new Date(now.getFullYear(), now.getMonth(), 1);
    }
    updateParams({ desde: toInputDate(desde), hasta: toInputDate(now) });
  }

  const hasFilters =
    filters.q !== "" || filters.desde !== "" || filters.hasta !== "" || filters.status !== "ALL";

  const from = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, totalCount);

  return (
    <div>
      {/* Búsqueda por nombre */}
      <form onSubmit={submitSearch} className="relative mb-4">
        <Search
          size={16}
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por nombre del cliente…"
          className="w-full pl-10 pr-24 py-2.5 rounded-xl border border-gray-200 text-sm font-poppins text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-leaf transition-colors"
        />
        <button
          type="submit"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 px-3.5 py-1.5 rounded-lg bg-leaf text-cream text-xs font-semibold font-poppins hover:bg-leaf/90 transition-colors"
        >
          Buscar
        </button>
      </form>

      {/* Filtro por fecha */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setPreset("hoy")}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold font-poppins bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Hoy
          </button>
          <button
            onClick={() => setPreset("semana")}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold font-poppins bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Esta semana
          </button>
          <button
            onClick={() => setPreset("mes")}
            className="px-3 py-1.5 rounded-lg text-xs font-semibold font-poppins bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            Este mes
          </button>
        </div>
        <div className="flex gap-2 items-center flex-wrap text-xs font-poppins text-gray-500">
          <label className="flex items-center gap-1.5">
            Desde
            <input
              type="date"
              value={filters.desde}
              onChange={(e) => updateParams({ desde: e.target.value || null })}
              className="px-2.5 py-1.5 rounded-lg border border-gray-200 text-gray-700 focus:outline-none focus:border-leaf transition-colors"
            />
          </label>
          <label className="flex items-center gap-1.5">
            Hasta
            <input
              type="date"
              value={filters.hasta}
              onChange={(e) => updateParams({ hasta: e.target.value || null })}
              className="px-2.5 py-1.5 rounded-lg border border-gray-200 text-gray-700 focus:outline-none focus:border-leaf transition-colors"
            />
          </label>
          {hasFilters && (
            <button
              onClick={() => {
                setSearch("");
                router.push("/admin/pedidos");
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <X size={13} /> Limpiar filtros
            </button>
          )}
        </div>
      </div>

      {/* Tabs por estado */}
      <div className="flex gap-1 flex-wrap mb-6">
        {TABS.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => updateParams({ status: value === "ALL" ? null : value })}
            className={`px-4 py-2 rounded-xl text-sm font-semibold font-poppins transition-colors ${
              filters.status === value
                ? "bg-leaf text-cream"
                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            {label}
            <span
              className={`ml-1.5 text-xs ${
                filters.status === value ? "text-cream/70" : "text-gray-400"
              }`}
            >
              {counts[value] ?? 0}
            </span>
          </button>
        ))}
      </div>

      {/* Lista */}
      <div className="flex flex-col gap-3">
        {orders.map((order) => (
          <OrderRow key={order.id} order={order} />
        ))}
        {orders.length === 0 && (
          <div className="py-16 text-center font-poppins text-sm text-gray-400">
            No hay pedidos con estos filtros
          </div>
        )}
      </div>

      {/* Paginación */}
      {totalCount > 0 && (
        <div className="flex items-center justify-between mt-6 text-sm font-poppins">
          <span className="text-gray-400 text-xs">
            {from}–{to} de {totalCount}
          </span>
          <div className="flex items-center gap-2">
            <button
              disabled={page <= 1}
              onClick={() => updateParams({ page: String(page - 1) })}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={15} /> Anterior
            </button>
            <span className="text-gray-500 text-xs px-1">
              {page} / {totalPages}
            </span>
            <button
              disabled={page >= totalPages}
              onClick={() => updateParams({ page: String(page + 1) })}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Siguiente <ChevronRight size={15} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
