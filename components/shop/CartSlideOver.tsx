"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "./CartProvider";
import { MIN_ORDER } from "@/lib/catalog";

export function CartSlideOver() {
  const router = useRouter();
  const {
    items,
    total,
    count,
    isOpen,
    meetsMinimum,
    closeCart,
    incrementItem,
    decrementItem,
    removeItem,
  } = useCart();

  function handleCheckout() {
    closeCart();
    router.push("/login?next=/checkout");
  }

  // Bloquea el scroll del body cuando el carrito está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const progress = Math.min((total / MIN_ORDER) * 100, 100);
  const remaining = Math.max(MIN_ORDER - total, 0);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-cream z-50 flex flex-col shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-leaf/10">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-leaf" />
            <span className="font-poppins font-bold text-leaf text-base">
              Tu pedido
            </span>
            {count > 0 && (
              <span className="bg-leaf text-cream text-xs font-bold font-poppins w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </div>
          <button
            onClick={closeCart}
            className="w-8 h-8 rounded-lg hover:bg-leaf/10 flex items-center justify-center transition-colors"
          >
            <X size={18} className="text-leaf" />
          </button>
        </div>

        {/* Progreso al mínimo */}
        <div className="px-5 py-3 bg-white border-b border-leaf/10">
          {meetsMinimum ? (
            <p className="text-xs font-poppins text-leaf font-semibold">
              ✓ Pedido mínimo alcanzado
            </p>
          ) : (
            <p className="text-xs font-poppins text-gray-500">
              Te faltan{" "}
              <span className="font-bold text-leaf">${remaining.toFixed(2)}</span>{" "}
              para el mínimo de ${MIN_ORDER}
            </p>
          )}
          <div className="mt-2 h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-leaf rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
              <ShoppingBag size={40} className="text-leaf/20" />
              <p className="font-poppins text-sm text-gray-400">
                Tu carrito está vacío.
                <br />
                Agregá platos del menú.
              </p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-poppins text-xs font-semibold text-leaf leading-snug line-clamp-2">
                    {item.name}
                  </p>
                  <p className="font-poppins text-xs text-gray-500 mt-0.5">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 flex-shrink-0">
                  <button
                    onClick={() => decrementItem(item.id)}
                    className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                  >
                    {item.quantity === 1 ? (
                      <Trash2 size={12} className="text-red-400" />
                    ) : (
                      <Minus size={12} className="text-leaf" />
                    )}
                  </button>
                  <span className="font-poppins font-bold text-leaf w-4 text-center text-xs">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => incrementItem(item.id)}
                    className="w-7 h-7 rounded-lg bg-leaf hover:bg-leaf-dark flex items-center justify-center transition-colors"
                  >
                    <Plus size={12} className="text-cream" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-leaf/10 bg-white space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-poppins text-sm text-gray-500">
                Subtotal
              </span>
              <span className="font-poppins font-bold text-leaf text-base">
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="text-xs font-poppins text-gray-400">
              + envío calculado al confirmar dirección
            </p>
            <button
              disabled={!meetsMinimum}
              onClick={meetsMinimum ? handleCheckout : undefined}
            className={`w-full py-3.5 rounded-2xl font-poppins font-bold text-sm transition-all ${
                meetsMinimum
                  ? "bg-leaf text-cream hover:bg-leaf-dark"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              {meetsMinimum ? "Ir al checkout →" : `Mínimo $${MIN_ORDER}`}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
