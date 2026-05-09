"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, ShoppingBag } from "lucide-react";

export function ConfirmacionClient() {
  const params = useSearchParams();
  const router = useRouter();
  const orderId = params.get("orderId");

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-leaf/10">
        <CheckCircle size={40} className="text-leaf" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-ibrand text-gray-900">¡Pedido confirmado!</h1>
        <p className="text-gray-500 font-poppins text-sm max-w-xs">
          Recibimos tu orden. Te avisaremos cuando esté en camino.
        </p>
        {orderId && (
          <p className="text-xs font-poppins text-gray-400 mt-1">
            Nro. de pedido: <span className="font-mono text-gray-600">{orderId}</span>
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => router.push("/pedir")}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-leaf text-cream text-sm font-semibold font-poppins hover:opacity-90 transition-opacity"
        >
          <ShoppingBag size={16} />
          Seguir comprando
        </button>
        <button
          onClick={() => router.push("/dashboard/pedidos")}
          className="px-6 py-3 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold font-poppins hover:bg-gray-50 transition-colors"
        >
          Mis pedidos
        </button>
      </div>
    </div>
  );
}
