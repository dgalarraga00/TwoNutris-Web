"use client";

import { useState, useEffect, useMemo, useRef } from "react";

declare global {
  interface Window {
    PPaymentButtonBox: new (config: Record<string, unknown>) => { render: (id: string) => void };
  }
}
import { useRouter } from "next/navigation";
import { ShoppingBag, ChevronRight, Loader2, MapPin, User, Truck, Receipt, X } from "lucide-react";
import { useCart } from "@/components/shop/CartProvider";
import { PlacesAddressInput } from "@/components/shop/PlacesAddressInput";
import { calculateDeliveryDate, cutoffDate, formatDeliveryDate } from "@/lib/delivery";
import { DELIVERY_FEE } from "@/lib/catalog";
import type { Zone } from "@/utils/delivery-zones";
import Image from "next/image";
const PAYPHONE_RATE = 0.0575;

export function CheckoutClient({ userEmail }: { userEmail: string }) {
  const { items, total: subtotal } = useCart();
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [address, setAddress] = useState("");
  const [instructions, setInstructions] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");

  const [taxIdType, setTaxIdType] = useState("05");
  const [taxId, setTaxId] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [payphoneReady, setPayphoneReady] = useState(false);

  const deliveryLabel = useMemo(() => formatDeliveryDate(calculateDeliveryDate()), []);
  const cutoffLabel = useMemo(() => {
    const c = cutoffDate();
    const days = Math.ceil((c.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    if (days <= 0) return "Hoy cierra el pedido";
    if (days === 1) return "Cierra mañana";
    return `Cierra en ${days} días`;
  }, []);
  const [pendingPayment, setPendingPayment] = useState<{ orderId: string; amountCents: number } | null>(null);

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.payphonetodoesposible.com/box/v2.0/payphone-payment-box.css";
    document.head.appendChild(link);

    const existing = document.querySelector('script[src*="payphone-payment-box"]');
    if (existing) { setPayphoneReady(true); return; }
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.payphonetodoesposible.com/box/v2.0/payphone-payment-box.js";
    script.onload = () => setPayphoneReady(true);
    script.onerror = () => console.error("[payphone] FALLÓ la carga del script CDN");
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!pendingPayment || !payphoneReady) return;
    const PP = window.PPaymentButtonBox;
    if (!PP) { setError("Sistema de pagos no disponible. Recarga la página."); return; }
    new PP({
      token: process.env.NEXT_PUBLIC_PAYPHONE_TOKEN,
      clientTransactionId: pendingPayment.orderId,
      amount: pendingPayment.amountCents,
      amountWithoutTax: pendingPayment.amountCents,
      amountWithTax: 0,
      tax: 0,
      currency: "USD",
      storeId: process.env.NEXT_PUBLIC_PAYPHONE_STORE_ID,
      reference: "Pedido TwoNutris",
      timeZone: -5,
      lang: "es",
    }).render("pp-button");
  }, [pendingPayment, payphoneReady]);

  const delivery = DELIVERY_FEE;
  const commission = Math.round((subtotal + delivery) * PAYPHONE_RATE * 100) / 100;
  const total = subtotal + delivery + commission;

  function handlePlaceSelect(formattedAddress: string, _zone: Zone, _lat: number, _lng: number) {
    setAddress(formattedAddress);
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!address.trim()) {
      setError("Ingresa tu dirección de entrega.");
      return;
    }

    if (!fullName.trim()) {
      setError("Ingresa tu nombre completo.");
      return;
    }

    if (!phone.trim()) {
      setError("Ingresa tu número de teléfono.");
      return;
    }

    if (!taxId.trim()) {
      setError("Ingresa tu número de cédula / RUC para la factura.");
      return;
    }

    setIsPending(true);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            id: i.id,
            name: i.name,
            quantity: i.quantity,
          })),
          deliveryAddress: address.trim(),
          deliveryInstructions: instructions.trim() || undefined,
          fullName: fullName.trim() || undefined,
          phone: phone.trim() || undefined,
          taxIdType,
          taxId: taxId.trim(),
        }),
      });

      if (!res.ok) {
        const err = (await res.json()) as { error?: string };
        setError(err.error ?? "Error al crear el pedido.");
        return;
      }

      const { orderId, amountCents } = (await res.json()) as {
        orderId: string;
        amountCents: number;
      };

      setPendingPayment({ orderId, amountCents });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado.");
    } finally {
      setIsPending(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-4 text-center">
        <ShoppingBag size={48} className="text-gray-300" />
        <p className="text-gray-500 font-poppins">Tu carrito está vacío.</p>
        <button
          onClick={() => router.push("/pedir")}
          className="mt-2 px-6 py-2.5 rounded-full bg-leaf text-cream text-sm font-semibold font-poppins hover:opacity-90 transition-opacity"
        >
          Ver menú
        </button>
      </div>
    );
  }

  return (
    <>
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-start">
      <form ref={formRef} onSubmit={handleFormSubmit} className="flex flex-col gap-6">
        {/* Sección: entrega */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-leaf" />
            <h2 className="font-bold font-poppins text-gray-900">Entrega</h2>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
              Dirección
            </label>
            <PlacesAddressInput
              value={address}
              onChange={(v) => setAddress(v)}
              onPlaceSelect={handlePlaceSelect}
            />
          </div>

          {/* Zona */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
              Instrucciones (opcional)
            </label>
            <textarea
              rows={2}
              placeholder="Timbre 4B, dejar en portería..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-900 placeholder-gray-400 focus:outline-none focus:border-leaf transition-colors resize-none"
            />
          </div>
        </section>

        {/* Sección: datos personales */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <User size={18} className="text-leaf" />
            <h2 className="font-bold font-poppins text-gray-900">Tus datos</h2>
          </div>

          <p className="text-xs font-poppins text-gray-400">
            Pagando como{" "}
            <span className="text-gray-600 font-medium">{userEmail}</span>
          </p>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
              Nombre completo
            </label>
            <input
              type="text"
              placeholder="Juan Pérez"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-900 placeholder-gray-400 focus:outline-none focus:border-leaf transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
              Teléfono
            </label>
            <input
              type="tel"
              placeholder="0999999999"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-900 placeholder-gray-400 focus:outline-none focus:border-leaf transition-colors"
            />
          </div>
        </section>

        {/* Sección: facturación */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Receipt size={18} className="text-leaf" />
            <h2 className="font-bold font-poppins text-gray-900">Datos de facturación</h2>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
              Tipo de identificación
            </label>
            <select
              value={taxIdType}
              onChange={(e) => setTaxIdType(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-900 focus:outline-none focus:border-leaf transition-colors bg-white"
            >
              <option value="05">Cédula</option>
              <option value="04">RUC</option>
              <option value="06">Pasaporte</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
              {taxIdType === "05" ? "Número de cédula" : taxIdType === "04" ? "RUC" : "Número de pasaporte"}
            </label>
            <input
              type="text"
              placeholder={taxIdType === "05" ? "1234567890" : taxIdType === "04" ? "1234567890001" : "A1234567"}
              value={taxId}
              onChange={(e) => setTaxId(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-900 placeholder-gray-400 focus:outline-none focus:border-leaf transition-colors"
            />
          </div>
        </section>

        {/* Error */}
        {error && (
          <p className="text-sm font-poppins text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
            {error}
          </p>
        )}

        {/* Submit — mobile */}
        <button
          type="submit"
          disabled={isPending}
          className="lg:hidden flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-leaf text-cream font-bold font-poppins text-base hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {isPending ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <>
              Ir al pago
              <ChevronRight size={18} />
            </>
          )}
        </button>
      </form>

      <aside className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <ShoppingBag size={18} className="text-leaf" />
          <h2 className="font-bold font-poppins text-gray-900">Tu pedido</h2>
        </div>

        {/* Entrega estimada */}
        <div className="flex items-start gap-3 bg-leaf/5 border border-leaf/20 rounded-xl px-4 py-3">
          <Truck size={16} className="text-leaf mt-0.5 flex-shrink-0" />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-semibold font-poppins text-gray-900">
              Entrega el {deliveryLabel}
            </span>
            <span className="text-xs font-poppins text-gray-500">{cutoffLabel}</span>
          </div>
        </div>

        {/* Items */}
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li key={item.id} className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold font-poppins text-gray-900 truncate">
                  {item.name}
                </p>
                <p className="text-xs font-poppins text-gray-400">
                  {item.quantity} × ${item.price.toFixed(2)}
                </p>
              </div>
              <span className="text-sm font-semibold font-poppins text-gray-900">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </li>
          ))}
        </ul>

        {/* Totales */}
        <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
          <div className="flex justify-between text-sm font-poppins text-gray-600">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm font-poppins text-gray-600">
            <span>Envío</span>
            <span>${delivery.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm font-poppins text-gray-500">
            <span>Cargo por pago online (5.75%)</span>
            <span>${commission.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold font-poppins text-gray-900 text-base mt-1">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Submit — desktop */}
        <button
          type="button"
          disabled={isPending}
          onClick={() => formRef.current?.requestSubmit()}
          className="hidden lg:flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-leaf text-cream font-bold font-poppins text-base hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {isPending ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <>
              Ir al pago
              <ChevronRight size={18} />
            </>
          )}
        </button>

        <p className="text-center text-[10px] font-poppins text-gray-400">
          Pago seguro procesado por PayPhone
        </p>
      </aside>
    </div>

    {pendingPayment && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
        onClick={() => setPendingPayment(null)}
      >
        <div
          className="bg-white rounded-2xl p-3 sm:p-6 w-full max-w-md shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header con cierre — siempre visible, encima de la caja de PayPhone */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold font-poppins text-gray-700">
              Pago seguro
            </span>
            <button
              type="button"
              onClick={() => setPendingPayment(null)}
              className="-mr-1 p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>
          </div>
          <div id="pp-button" />
        </div>
      </div>
    )}
    </>
  );
}
