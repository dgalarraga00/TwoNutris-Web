"use client";

import { useState } from "react";
import { Drawer } from "vaul";
import { toast } from "sonner";
import { cancelOrder, useInvalidateOrdersAndBalance, type OrderDto } from "@/lib/api/orders";
import { useRefundPreview } from "./useRefundPreview";
import { cancelOrderErrorMessage } from "./errors";

interface CancelOrderDrawerProps {
  order: OrderDto;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/** Real `OrderStatus` values (backend `orders/models.py`) -> the sonner
 * copy for each, matching this session's confirmed refund-split behavior. */
const STATUS_TOAST: Record<string, string> = {
  cancelled_refunded: "Pedido cancelado — tus créditos fueron devueltos.",
  cancelled_no_refund: "Pedido cancelado. Ya había pasado el corte, no se devolvieron créditos.",
};

/**
 * Vaul confirm drawer — same footer-CTA phone anatomy as `DishStepDrawer`
 * (grab handle, fixed header, scroll-only-if-must body, two-button
 * safe-area footer), reused here for a single-step destructive
 * confirmation instead of a numbered flow.
 *
 * Spec `order-history-management`, "Refund shown before confirmation": the
 * refund/no-refund sentence renders ABOVE the destructive action, never
 * after, and copy says "cancelar" — never "eliminar" — anywhere in this
 * component ("Cancel-only semantics with correct copy").
 *
 * After a successful cancel, the server's own returned `status` (never a
 * client-side guess) drives the sonner toast, then BOTH orders and balance
 * caches are invalidated (`useInvalidateOrdersAndBalance`, reused verbatim
 * from `lib/api/orders.ts` — a refund changes the wallet too, not just the
 * order list).
 */
export function CancelOrderDrawer({ order, open, onOpenChange }: CancelOrderDrawerProps) {
  const preview = useRefundPreview(order);
  const invalidateOrdersAndBalance = useInvalidateOrdersAndBalance();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const refundText =
    preview.kind === "refund"
      ? `Se te devolverán ${preview.mealCredits} créditos de comida`
      : "Ya pasó el corte: esta cancelación no devuelve créditos";

  const handleConfirm = async (): Promise<void> => {
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const cancelled = await cancelOrder(order.id);
      toast.success(STATUS_TOAST[cancelled.status] ?? `Pedido #${cancelled.id} cancelado.`);
      invalidateOrdersAndBalance();
      onOpenChange(false);
    } catch (err) {
      setSubmitError(cancelOrderErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} shouldScaleBackground={false}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex max-h-[92dvh] flex-col rounded-t-3xl bg-cream outline-none sm:mx-auto sm:max-w-md">
          <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-leaf/20" aria-hidden="true" />

          <div className="flex shrink-0 flex-col items-center gap-0.5 px-4 py-3">
            <Drawer.Title className="font-ibrand text-base text-leaf">
              Cancelar pedido #{order.id}
            </Drawer.Title>
            <Drawer.Description className="font-poppins text-xs font-bold text-leaf/60">
              Esta acción no se puede deshacer
            </Drawer.Description>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-3">
            <p className="rounded-xl bg-leaf-light/20 px-4 py-3 font-poppins text-sm font-semibold text-leaf">
              {refundText}
            </p>
            {submitError && (
              <p role="alert" className="mt-3 font-poppins text-sm text-red-600">
                {submitError}
              </p>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-3 border-t border-leaf/10 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
              className="h-12 flex-1 rounded-full border-2 border-leaf/20 font-bold font-ibrand text-sm text-leaf transition-colors duration-200 hover:bg-leaf-light/30 disabled:opacity-40 disabled:pointer-events-none"
            >
              Volver
            </button>
            <button
              type="button"
              onClick={() => void handleConfirm()}
              disabled={isSubmitting}
              className="h-12 flex-[2] rounded-full bg-red-600 font-bold font-ibrand text-sm text-white shadow-[0_4px_16px_rgba(220,38,38,0.35)] transition-all duration-200 hover:scale-[1.02] disabled:opacity-40 disabled:pointer-events-none"
            >
              {isSubmitting ? "Cancelando..." : "Cancelar pedido"}
            </button>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
