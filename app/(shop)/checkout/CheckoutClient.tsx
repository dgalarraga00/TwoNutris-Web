"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { CreditCard, ShoppingBag, ChevronRight, Loader2, Eye, EyeOff, MapPin } from "lucide-react";
import { useCart } from "@/components/shop/CartProvider";
import { PlacesAddressInput } from "@/components/shop/PlacesAddressInput";
import { KUSHKI_BASE_URL } from "@/utils/kushki";
import { Zone } from "@/utils/delivery-zones";
import Image from "next/image";

const DELIVERY_FEE: Record<Zone, number> = { URBAN: 3, PERIPHERAL: 4 };

const ZONE_LABEL: Record<Zone, string> = {
  URBAN: "Quito Centro / Norte — $3.00",
  PERIPHERAL: "Cumbayá / Valle / Sur — $4.00",
};

interface CardData {
  number: string;
  name: string;
  expMonth: string;
  expYear: string;
  cvv: string;
}

async function getKushkiToken(card: CardData, totalAmount: number): Promise<string> {
  const publicKey = process.env.NEXT_PUBLIC_KUSHKI_PUBLIC_KEY;
  if (!publicKey) throw new Error("Kushki public key no configurada");

  const res = await fetch(`${KUSHKI_BASE_URL}/card/v1/tokens`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Public_Merchant_Id: publicKey,
    },
    body: JSON.stringify({
      card: {
        number: card.number.replace(/\s/g, ""),
        name: card.name,
        expiryMonth: card.expMonth,
        expiryYear: card.expYear,
        cvv: card.cvv,
      },
      totalAmount,
      currency: "USD",
    }),
  });

  if (!res.ok) {
    const err = await res.json() as { message?: string };
    throw new Error(err.message ?? "Error al tokenizar tarjeta");
  }

  const data = await res.json() as { token: string };
  return data.token;
}

function formatCardNumber(value: string): string {
  return value
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
}

export function CheckoutClient({
  userEmail,
}: {
  userEmail: string;
}) {
  const { items, total: subtotal, removeItem } = useCart();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [zone, setZone] = useState<Zone>("URBAN");
  const [zoneAutoDetected, setZoneAutoDetected] = useState(false);
  const [address, setAddress] = useState("");
  const [instructions, setInstructions] = useState("");

  function handlePlaceSelect(formattedAddress: string, detectedZone: Zone, _lat: number, _lng: number) {
    setAddress(formattedAddress);
    setZone(detectedZone);
    setZoneAutoDetected(true);
  }

  const [card, setCard] = useState<CardData>({
    number: "",
    name: "",
    expMonth: "",
    expYear: "",
    cvv: "",
  });
  const [showCvv, setShowCvv] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const delivery = DELIVERY_FEE[zone];
  const total = subtotal + delivery;

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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!address.trim()) {
      setError("Ingresá tu dirección de entrega.");
      return;
    }

    startTransition(async () => {
      try {
        const token = await getKushkiToken(card, total);

        const res = await fetch("/api/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: items.map((i) => ({
              id: i.id,
              name: i.name,
              price: i.price,
              quantity: i.quantity,
            })),
            deliveryAddress: address.trim(),
            deliveryInstructions: instructions.trim() || undefined,
            deliveryZone: zone,
            kushkiToken: token,
          }),
        });

        if (!res.ok) {
          const err = await res.json() as { error?: string };
          setError(err.error ?? "Error al procesar el pedido.");
          return;
        }

        const { orderId } = await res.json() as { orderId: string };
        router.push(`/checkout/confirmacion?orderId=${orderId}`);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error inesperado.");
      }
    });
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-start">
      {/* ─── Formulario ─── */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Sección: dirección */}
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
              onChange={(v) => { setAddress(v); setZoneAutoDetected(false); }}
              onPlaceSelect={handlePlaceSelect}
            />
          </div>

          {/* Zona — autodetectada o seleccionable manualmente */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
                Zona de entrega
              </label>
              {zoneAutoDetected && (
                <span className="text-[10px] font-poppins text-leaf font-semibold">
                  Detectada automáticamente
                </span>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {(["URBAN", "PERIPHERAL"] as Zone[]).map((z) => (
                <button
                  key={z}
                  type="button"
                  onClick={() => { setZone(z); setZoneAutoDetected(false); }}
                  className={`flex flex-col items-start px-4 py-3 rounded-xl border-2 transition-colors text-left ${
                    zone === z
                      ? "border-leaf bg-leaf/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <span className="text-sm font-semibold font-poppins text-gray-900">
                    {z === "URBAN" ? "Quito Centro / Norte" : "Cumbayá / Valle / Sur"}
                  </span>
                  <span className="text-xs font-poppins text-gray-400 mt-0.5">
                    +${DELIVERY_FEE[z].toFixed(2)}
                  </span>
                </button>
              ))}
            </div>
          </div>

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

        {/* Sección: pago */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <CreditCard size={18} className="text-leaf" />
            <h2 className="font-bold font-poppins text-gray-900">Pago</h2>
          </div>

          <p className="text-xs font-poppins text-gray-400">
            Pagando como <span className="text-gray-600 font-medium">{userEmail}</span>
          </p>

          {/* Número de tarjeta */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
              Número de tarjeta
            </label>
            <input
              type="text"
              inputMode="numeric"
              required
              placeholder="1234 5678 9012 3456"
              value={card.number}
              onChange={(e) =>
                setCard((c) => ({ ...c, number: formatCardNumber(e.target.value) }))
              }
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-900 placeholder-gray-400 focus:outline-none focus:border-leaf transition-colors tracking-widest"
            />
          </div>

          {/* Nombre */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
              Nombre en la tarjeta
            </label>
            <input
              type="text"
              required
              placeholder="JUAN PÉREZ"
              value={card.name}
              onChange={(e) =>
                setCard((c) => ({ ...c, name: e.target.value.toUpperCase() }))
              }
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-900 placeholder-gray-400 focus:outline-none focus:border-leaf transition-colors uppercase"
            />
          </div>

          {/* Expiración + CVV */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
                Mes
              </label>
              <input
                type="text"
                inputMode="numeric"
                required
                maxLength={2}
                placeholder="MM"
                value={card.expMonth}
                onChange={(e) =>
                  setCard((c) => ({
                    ...c,
                    expMonth: e.target.value.replace(/\D/g, "").slice(0, 2),
                  }))
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-900 placeholder-gray-400 focus:outline-none focus:border-leaf transition-colors text-center"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
                Año
              </label>
              <input
                type="text"
                inputMode="numeric"
                required
                maxLength={2}
                placeholder="AA"
                value={card.expYear}
                onChange={(e) =>
                  setCard((c) => ({
                    ...c,
                    expYear: e.target.value.replace(/\D/g, "").slice(0, 2),
                  }))
                }
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-900 placeholder-gray-400 focus:outline-none focus:border-leaf transition-colors text-center"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide">
                CVV
              </label>
              <div className="relative">
                <input
                  type={showCvv ? "text" : "password"}
                  inputMode="numeric"
                  required
                  maxLength={4}
                  placeholder="•••"
                  value={card.cvv}
                  onChange={(e) =>
                    setCard((c) => ({
                      ...c,
                      cvv: e.target.value.replace(/\D/g, "").slice(0, 4),
                    }))
                  }
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 pr-10 text-sm font-poppins text-gray-900 placeholder-gray-400 focus:outline-none focus:border-leaf transition-colors text-center"
                />
                <button
                  type="button"
                  onClick={() => setShowCvv((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  tabIndex={-1}
                >
                  {showCvv ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Error */}
        {error && (
          <p className="text-sm font-poppins text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
            {error}
          </p>
        )}

        {/* Submit — desktop oculto (está en el panel derecho) */}
        <button
          type="submit"
          disabled={isPending}
          className="lg:hidden flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-leaf text-cream font-bold font-poppins text-base hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {isPending ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <>
              Confirmar pedido
              <ChevronRight size={18} />
            </>
          )}
        </button>
      </form>

      {/* ─── Resumen ─── */}
      <aside className="sticky top-24 bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <ShoppingBag size={18} className="text-leaf" />
          <h2 className="font-bold font-poppins text-gray-900">Tu pedido</h2>
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
              <div className="text-right flex flex-col items-end gap-1">
                <span className="text-sm font-semibold font-poppins text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-[10px] font-poppins text-gray-400 hover:text-red-400 transition-colors"
                >
                  Quitar
                </button>
              </div>
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
            <span className="flex items-center gap-1">
              Envío
              {zoneAutoDetected && (
                <MapPin size={11} className="text-leaf" />
              )}
              <span className="text-gray-400 text-xs">
                ({zone === "URBAN" ? "urbano" : "periférico"})
              </span>
            </span>
            <span>${delivery.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold font-poppins text-gray-900 text-base mt-1">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Submit — desktop */}
        <button
          type="submit"
          form="checkout-form"
          disabled={isPending}
          onClick={(e) => {
            e.preventDefault();
            const form = document.querySelector<HTMLFormElement>("form");
            form?.requestSubmit();
          }}
          className="hidden lg:flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-leaf text-cream font-bold font-poppins text-base hover:opacity-90 transition-opacity disabled:opacity-60"
        >
          {isPending ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <>
              Confirmar pedido
              <ChevronRight size={18} />
            </>
          )}
        </button>

        <p className="text-center text-[10px] font-poppins text-gray-400">
          Pago seguro procesado por Kushki
        </p>
      </aside>
    </div>
  );
}
