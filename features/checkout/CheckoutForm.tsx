"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import {
  usePurchaseDraftPortionSize,
  usePurchaseDraftStore,
} from "@/stores/purchaseDraftStore";
import { computeBagTotal, computeCouponDiscountCents, MEAL_BAG_BASE_PRICE_CENTS } from "@/lib/pricing/bagPricing";
import { createAddress, purchaseMealPack, uploadReceipt, validateCoupon } from "@/lib/api/checkout";
import type { CouponValidationDto } from "@/lib/api/checkout";
import { CouponDisclosure, type CouponValidationResult } from "@/features/bag/CouponDisclosure";
import { PriceBreakdown } from "@/features/bag/PriceBreakdown";
import { AddressFieldset } from "./AddressFieldset";
import { PaymentMethodFieldset } from "./PaymentMethodFieldset";
import { checkoutSchema, type CheckoutFormValues } from "./schemas";
import { checkoutErrorMessage } from "./errors";

/**
 * Checkout orchestrator (F9, task 5.8): delegates markup to
 * `AddressFieldset`/`PaymentMethodFieldset`, reuses F7's `CouponDisclosure`
 * (now with a real `onValidate`, since the customer is authenticated here)
 * and `PriceBreakdown`.
 *
 * On submit, presents THREE sequential API calls as ONE seamless action:
 *   1. `POST /api/me/addresses` — always creates a brand-new address.
 *   2. `POST /api/packs` — `pack_type: "meal"` always, using the draft's
 *      `doubleProtein`/`snackQuantity`/applied coupon code.
 *   3. `POST /api/packs/{id}/receipt` — using the pack id just returned.
 *
 * `isSubmitting` (react-hook-form) is the ONE loading flag for all three
 * calls combined — this is also what makes task 5.9's silent-401-refresh
 * requirement fall out for free: `httpClient`'s transparent refresh-then-
 * retry happens INSIDE whichever of these three `await`s hits the stale
 * token, so the visible state never leaves "submitting" for it.
 *
 * Funnel navigation (final integration unit): on success, navigates to
 * `/semana` — the customer is now a paying, authenticated customer with
 * real credits, so they're sent straight to use the product. The
 * confirmation message still renders (kept, not replaced) since the
 * redirect is not instantaneous in a real browser render cycle.
 */
export function CheckoutForm() {
  const router = useRouter();
  const doubleProtein = usePurchaseDraftStore((state) => state.doubleProtein);
  const snackQuantity = usePurchaseDraftStore((state) => state.snackQuantity);
  const setCouponCode = usePurchaseDraftStore((state) => state.setCouponCode);
  const portionSize = usePurchaseDraftPortionSize();

  const [appliedCoupon, setAppliedCoupon] = useState<CouponValidationDto | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [succeeded, setSucceeded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { is_default: true },
  });

  const discountCents = appliedCoupon
    ? computeCouponDiscountCents(MEAL_BAG_BASE_PRICE_CENTS[portionSize], {
        percentOff: appliedCoupon.percent_off,
        amountOff: appliedCoupon.amount_off,
      })
    : 0;
  const breakdown = computeBagTotal({ portionSize, doubleProtein, snackQuantity, discountCents });

  const handleValidateCoupon = async (code: string): Promise<CouponValidationResult> => {
    const preview = await validateCoupon(code, portionSize);
    setAppliedCoupon(preview);
    setCouponCode(preview.code);
    return { code: preview.code, message: couponSuccessMessage(preview) };
  };

  const removeCoupon = (): void => {
    setAppliedCoupon(null);
    setCouponCode(null);
  };

  const onSubmit = async (values: CheckoutFormValues): Promise<void> => {
    setServerError(null);
    try {
      await createAddress({
        zone: Number(values.zone),
        label: values.label,
        street: values.street,
        reference: values.reference,
        is_default: values.is_default,
      });
      const pack = await purchaseMealPack({
        double_protein: doubleProtein,
        snack_quantity: snackQuantity,
        coupon_code: appliedCoupon?.code ?? null,
      });
      await uploadReceipt({
        packId: pack.id,
        receipt: values.receipt[0] as File,
        source_bank: values.source_bank,
        transfer_date: values.transfer_date,
      });
      setSucceeded(true);
      router.push("/semana");
    } catch (error) {
      setServerError(checkoutErrorMessage(error));
    }
  };

  if (succeeded) {
    return (
      <div className="mx-auto max-w-md text-center">
        <Alert variant="success">¡Listo! Recibimos tu comprobante — tu pago está en revisión.</Alert>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => void handleSubmit(onSubmit)(event)}
      noValidate
      className="mx-auto flex min-h-screen max-w-md flex-col justify-center gap-4 bg-cream p-4 md:p-6"
    >
      <h1 className="font-ibrand text-2xl text-leaf md:text-3xl">Finalizar compra</h1>

      <AddressFieldset register={register} errors={errors} />
      <PaymentMethodFieldset register={register} errors={errors} />

      <div className="flex flex-col gap-2">
        <CouponDisclosure onValidate={handleValidateCoupon} />
        {appliedCoupon && (
          <button
            type="button"
            onClick={removeCoupon}
            className="self-start font-poppins text-xs text-leaf/60 underline underline-offset-2"
          >
            Quitar cupón
          </button>
        )}
      </div>

      <PriceBreakdown breakdown={breakdown} />

      {serverError && <Alert variant="error">{serverError}</Alert>}

      <Button type="submit" disabled={isSubmitting} fullWidth>
        {isSubmitting ? "Procesando tu compra..." : "Confirmar compra"}
      </Button>
    </form>
  );
}

function couponSuccessMessage(preview: CouponValidationDto): string {
  if (preview.kind === "percent" && preview.percent_off !== null) {
    return `Cupón aplicado: ${preview.percent_off}% de descuento.`;
  }
  if (preview.kind === "fixed_amount" && preview.amount_off !== null) {
    return `Cupón aplicado: $${preview.amount_off.toFixed(2)} de descuento.`;
  }
  if (preview.kind === "extra_credits") {
    return `Cupón aplicado: ${preview.extra_credits} créditos extra al confirmarse tu pago.`;
  }
  return "Cupón aplicado.";
}
