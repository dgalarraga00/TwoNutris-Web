"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, XCircle, ShoppingBag, Loader2 } from "lucide-react";
import { useCart } from "@/components/shop/CartProvider";

type ConfirmStatus = "loading" | "approved" | "failed" | "error";

interface ConfirmResult {
  orderId?: string;
  authorizationCode?: string;
  transactionStatus?: string;
  message?: string;
}

export function ConfirmacionClient() {
  const params = useSearchParams();
  const router = useRouter();
  const { clearCart } = useCart();

  const id = params.get("id");
  const clientTransactionId = params.get("clientTransactionId");

  const [status, setStatus] = useState<ConfirmStatus>("loading");
  const [result, setResult] = useState<ConfirmResult>({});
  const called = useRef(false);

  useEffect(() => {
    // Evitar doble llamada (React StrictMode)
    if (called.current) return;
    called.current = true;

    if (!id || !clientTransactionId) {
      setStatus("error");
      setResult({ message: "Parámetros de confirmación faltantes en la URL." });
      return;
    }

    async function confirm() {
      try {
        const res = await fetch("/api/payphone/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: Number(id),
            clientTransactionId,
          }),
        });

        const data = (await res.json()) as ConfirmResult & {
          success?: boolean;
          status?: string;
          error?: string;
        };

        if (res.ok && data.success) {
          clearCart();
          setStatus("approved");
          setResult(data);
        } else {
          setStatus("failed");
          setResult({
            message: data.message ?? data.error ?? "El pago no fue aprobado.",
            transactionStatus: data.transactionStatus,
          });
        }
      } catch {
        setStatus("error");
        setResult({ message: "Error al confirmar el pago. Contactá a soporte." });
      }
    }

    confirm();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (status === "loading") {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
        <Loader2 size={40} className="animate-spin text-leaf" />
        <p className="text-gray-500 font-poppins text-sm">
          Confirmando tu pago…
        </p>
      </div>
    );
  }

  if (status === "approved") {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-leaf/10">
          <CheckCircle size={40} className="text-leaf" />
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-ibrand text-gray-900">
            ¡Pedido confirmado!
          </h1>
          <p className="text-gray-500 font-poppins text-sm max-w-xs">
            Recibimos tu pago. Te avisaremos cuando tu pedido esté en camino.
          </p>
          {result.orderId && (
            <p className="text-xs font-poppins text-gray-400 mt-1">
              Nro. de pedido:{" "}
              <span className="font-mono text-gray-600">{result.orderId}</span>
            </p>
          )}
          {result.authorizationCode && (
            <p className="text-xs font-poppins text-gray-400">
              Autorización:{" "}
              <span className="font-mono text-gray-600">
                {result.authorizationCode}
              </span>
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

  // failed | error
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="flex items-center justify-center w-20 h-20 rounded-full bg-red-50">
        <XCircle size={40} className="text-red-400" />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-ibrand text-gray-900">
          {status === "error" ? "Error al confirmar" : "Pago no aprobado"}
        </h1>
        <p className="text-gray-500 font-poppins text-sm max-w-xs">
          {result.message ?? "No pudimos procesar tu pago."}
        </p>
        {result.transactionStatus && (
          <p className="text-xs font-poppins text-gray-400">
            Estado: <span className="font-mono">{result.transactionStatus}</span>
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => router.push("/checkout")}
          className="px-6 py-3 rounded-full bg-leaf text-cream text-sm font-semibold font-poppins hover:opacity-90 transition-opacity"
        >
          Intentar de nuevo
        </button>
        <button
          onClick={() => router.push("/pedir")}
          className="px-6 py-3 rounded-full border border-gray-200 text-gray-700 text-sm font-semibold font-poppins hover:bg-gray-50 transition-colors"
        >
          Ver menú
        </button>
      </div>
    </div>
  );
}
