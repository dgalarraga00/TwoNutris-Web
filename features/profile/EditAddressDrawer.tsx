"use client";

import { useEffect, useState } from "react";
import { Drawer } from "vaul";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { AddressFieldset } from "@/features/checkout/AddressFieldset";
import { addressFieldsSchema, type AddressFieldsetValues } from "@/features/checkout/schemas";
import { updateAddress, useInvalidateAddresses, type AddressDto } from "@/lib/api/checkout";
import { updateAddressErrorMessage } from "./errors";

interface EditAddressDrawerProps {
  address: AddressDto;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function valuesFromAddress(address: AddressDto): AddressFieldsetValues {
  return {
    zone: String(address.zone),
    label: address.label,
    street: address.street,
    reference: address.reference,
    is_default: address.is_default,
  };
}

/**
 * Live-feedback fix (feedback-round-1): `AddressesSection` was READ-ONLY —
 * no way to edit a saved address at all, despite the backend already
 * supporting `PATCH /api/me/addresses/{id}` (`customers/api/views.py::
 * AddressDetailView`). Same Vaul-drawer anatomy as `CancelOrderDrawer`
 * (grab handle, fixed header, scroll-only-if-must body, two-button
 * safe-area footer) — reused verbatim rather than inventing a new drawer
 * shape for the one other place this app edits something in place.
 *
 * Reuses `AddressFieldset` (now generic over `AddressFieldsetValues`,
 * feedback-round-1) for the actual form fields instead of duplicating
 * zone/label/street/reference/is_default markup a second time — this
 * drawer only owns the submit/cancel chrome and the `updateAddress()` call.
 */
export function EditAddressDrawer({ address, open, onOpenChange }: EditAddressDrawerProps) {
  const invalidateAddresses = useInvalidateAddresses();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddressFieldsetValues>({
    resolver: zodResolver(addressFieldsSchema),
    defaultValues: valuesFromAddress(address),
  });

  // This one drawer instance is reused across every row in `AddressesSection`
  // (mounted once, `address` swaps as the customer opens a different row) —
  // re-sync the form each time it opens so stale values from a previously
  // edited address never leak into a fresh edit.
  useEffect(() => {
    if (open) {
      setSubmitError(null);
      reset(valuesFromAddress(address));
    }
  }, [open, address, reset]);

  const onSubmit = async (values: AddressFieldsetValues): Promise<void> => {
    setSubmitError(null);
    try {
      await updateAddress(address.id, {
        zone: Number(values.zone),
        label: values.label,
        street: values.street,
        reference: values.reference,
        is_default: values.is_default,
      });
      toast.success("Dirección actualizada.");
      invalidateAddresses();
      onOpenChange(false);
    } catch (err) {
      setSubmitError(updateAddressErrorMessage(err));
    }
  };

  return (
    <Drawer.Root open={open} onOpenChange={onOpenChange} shouldScaleBackground={false}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex max-h-[92dvh] flex-col rounded-t-3xl bg-cream outline-none sm:mx-auto sm:max-w-md md:max-w-xl lg:max-w-2xl">
          <div className="mx-auto mt-3 h-1.5 w-12 shrink-0 rounded-full bg-leaf/20" aria-hidden="true" />

          <div className="flex shrink-0 flex-col items-center gap-0.5 px-4 py-3 md:px-6 lg:px-8">
            <Drawer.Title className="font-ibrand text-base text-leaf">Editar dirección</Drawer.Title>
            <Drawer.Description className="font-poppins text-xs font-bold text-leaf/60">
              {address.label}
            </Drawer.Description>
          </div>

          <form
            id="edit-address-form"
            onSubmit={(event) => void handleSubmit(onSubmit)(event)}
            noValidate
            className="min-h-0 flex-1 overflow-y-auto px-4 py-3 md:px-6 lg:px-8"
          >
            <AddressFieldset register={register} errors={errors} />
            {submitError && (
              <p role="alert" className="mt-3 font-poppins text-sm text-red-600">
                {submitError}
              </p>
            )}
          </form>

          <div className="flex shrink-0 items-center gap-3 border-t border-leaf/10 px-4 py-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:px-6 lg:px-8">
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              disabled={isSubmitting}
              className="h-12 flex-1 rounded-full border-2 border-leaf/20 font-bold font-ibrand text-sm text-leaf transition-colors duration-200 hover:bg-leaf-light/30 disabled:opacity-40 disabled:pointer-events-none"
            >
              Cancelar
            </button>
            <button
              type="submit"
              form="edit-address-form"
              disabled={isSubmitting}
              className="h-12 flex-[2] rounded-full bg-amber font-bold font-ibrand text-sm text-leaf shadow-[0_4px_16px_rgba(255,176,0,0.35)] transition-all duration-200 hover:scale-[1.02] disabled:opacity-40 disabled:pointer-events-none"
            >
              {isSubmitting ? "Guardando..." : "Guardar cambios"}
            </button>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
