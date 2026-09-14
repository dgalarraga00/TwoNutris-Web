"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AsyncBoundary } from "@/components/AsyncBoundary";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";
import { requestPortionChange } from "@/lib/api/packs";
import { uploadReceipt } from "@/lib/api/checkout";
import { PORTION_SIZE_LABEL, type PortionSize } from "@/lib/pricing/bagPricing";
import { usePortionOptions } from "./usePortionOptions";
import { PortionChangeReceiptFieldset } from "./PortionChangeReceiptFieldset";
import {
  portionChangeReceiptSchema,
  type PortionChangeReceiptValues,
} from "./portionChangeSchema";
import { portionChangeErrorMessage } from "./errors";

/**
 * F11 task 6.5: lists the customer's visible portion-size options for their
 * current ACTIVE meal pack (`usePortionOptions()`) and drives the
 * "cambiar mi plan" submit flow.
 *
 * `mode: "change"` — an option button calls `POST /api/packs/{id}/
 * portion-size` (`requestPortionChange()`, creates a PENDING `Payment`),
 * then shows the SAME receipt-upload step F9's checkout uses
 * (`uploadReceipt()`, reused verbatim from `lib/api/checkout.ts` — not
 * rebuilt) — `PackReceiptUploadView` already looks up the pack's own
 * PENDING payment generically (confirmed by reading `payments/api/
 * views.py::PackReceiptUploadView` directly, task 2.13's own regression
 * test proves this).
 *
 * `mode: "new-purchase"` — every rank is shown, but as plain links to
 * `/bolsa`: building a brand-new-pack purchase flow is explicitly OUT of
 * this component's job (spec: "that's just /bolsa again, not this
 * component's job to build").
 */
export function PortionOptionList() {
  const { isPending, isError, error, currentPack, visibleOptions, mode, refetch } =
    usePortionOptions();

  const [selected, setSelected] = useState<PortionSize | null>(null);
  const [pendingPackId, setPendingPackId] = useState<number | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [succeeded, setSucceeded] = useState(false);
  const [isRequesting, setIsRequesting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PortionChangeReceiptValues>({
    resolver: zodResolver(portionChangeReceiptSchema),
  });

  const requestChange = async (size: PortionSize): Promise<void> => {
    if (currentPack === null) return;
    setSubmitError(null);
    setIsRequesting(true);
    try {
      await requestPortionChange(currentPack.id, size);
      setSelected(size);
      setPendingPackId(currentPack.id);
    } catch (err) {
      setSubmitError(portionChangeErrorMessage(err));
    } finally {
      setIsRequesting(false);
    }
  };

  const onSubmitReceipt = async (values: PortionChangeReceiptValues): Promise<void> => {
    if (pendingPackId === null) return;
    setSubmitError(null);
    try {
      await uploadReceipt({
        packId: pendingPackId,
        receipt: values.receipt[0] as File,
        source_bank: values.source_bank,
        transfer_date: values.transfer_date,
      });
      setSucceeded(true);
    } catch (err) {
      setSubmitError(portionChangeErrorMessage(err));
    }
  };

  return (
    <AsyncBoundary
      isPending={isPending}
      isError={isError}
      error={error}
      data={{ currentPack, visibleOptions, mode }}
      refetch={refetch}
    >
      {() => {
        if (succeeded) {
          return (
            <Alert variant="success">
              ¡Listo! Recibimos tu comprobante — tu cambio de plan está en revisión.
            </Alert>
          );
        }

        if (pendingPackId !== null && selected !== null) {
          return (
            <form
              onSubmit={(event) => void handleSubmit(onSubmitReceipt)(event)}
              noValidate
              className="flex flex-col gap-3"
            >
              <p className="font-poppins text-sm text-leaf">
                Cambiando a {PORTION_SIZE_LABEL[selected]}. Sube tu comprobante para
                confirmar.
              </p>
              <PortionChangeReceiptFieldset register={register} errors={errors} />
              {submitError && <Alert variant="error">{submitError}</Alert>}
              <Button type="submit" disabled={isSubmitting} fullWidth>
                {isSubmitting ? "Enviando..." : "Confirmar cambio"}
              </Button>
            </form>
          );
        }

        return (
          <div className="flex flex-col gap-4">
            <h2 className="font-ibrand text-xl text-leaf">
              {mode === "change" ? "Cambiar mi plan" : "Elige tu plan"}
            </h2>
            <ul className="flex flex-col gap-2">
              {visibleOptions.map((size) =>
                mode === "change" ? (
                  <li key={size}>
                    <Button
                      variant="secondary"
                      size="sm"
                      disabled={isRequesting}
                      onClick={() => void requestChange(size)}
                    >
                      {PORTION_SIZE_LABEL[size]}
                    </Button>
                  </li>
                ) : (
                  <li key={size}>
                    <Button href="/bolsa" variant="secondary" size="sm">
                      {PORTION_SIZE_LABEL[size]} — Comprar paquete
                    </Button>
                  </li>
                ),
              )}
            </ul>
            {submitError && <Alert variant="error">{submitError}</Alert>}
          </div>
        );
      }}
    </AsyncBoundary>
  );
}
