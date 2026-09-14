import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { TextField } from "@/components/ui/TextField";
import type { CheckoutFormValues } from "./schemas";

export interface PaymentMethodFieldsetProps {
  register: UseFormRegister<CheckoutFormValues>;
  errors: FieldErrors<CheckoutFormValues>;
}

/**
 * Payment fields (design §A: `CheckoutForm` → `PaymentMethodFieldset`).
 * Transfer is the ONLY payment method the backend supports (`purchase_pack()`
 * always creates `Payment(method=TRANSFER)` — confirmed by reading
 * `payments/services.py` directly) — no method picker exists or is needed,
 * just the fields `POST /api/packs/{id}/receipt` actually requires:
 * `source_bank`, `transfer_date`, and the receipt file itself.
 */
export function PaymentMethodFieldset({ register, errors }: PaymentMethodFieldsetProps) {
  return (
    <fieldset className="flex flex-col gap-3 rounded-2xl border border-leaf/10 bg-white p-4">
      <legend className="px-1 font-poppins text-sm font-medium text-leaf">
        Pago por transferencia
      </legend>

      <TextField
        label="Banco de origen"
        id="source_bank"
        error={errors.source_bank?.message}
        {...register("source_bank")}
      />

      <TextField
        label="Fecha de la transferencia"
        id="transfer_date"
        type="date"
        error={errors.transfer_date?.message}
        {...register("transfer_date")}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="receipt" className="font-poppins text-sm font-medium text-leaf">
          Comprobante de transferencia
        </label>
        <input
          id="receipt"
          type="file"
          accept="image/jpeg,image/png,application/pdf"
          {...register("receipt")}
          className="font-poppins text-sm text-leaf/70 file:mr-3 file:rounded-full file:border-0 file:bg-amber file:px-4 file:py-2 file:font-ibrand file:text-sm file:font-bold file:text-leaf"
        />
        {errors.receipt && (
          <p role="alert" className="text-xs font-poppins text-red-600">
            {errors.receipt.message as string}
          </p>
        )}
      </div>
    </fieldset>
  );
}
