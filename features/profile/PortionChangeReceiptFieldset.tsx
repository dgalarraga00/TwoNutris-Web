import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { TextField } from "@/components/ui/TextField";
import type { PortionChangeReceiptValues } from "./portionChangeSchema";

export interface PortionChangeReceiptFieldsetProps {
  register: UseFormRegister<PortionChangeReceiptValues>;
  errors: FieldErrors<PortionChangeReceiptValues>;
}

/**
 * Receipt fields for the "cambiar mi plan" submit flow — closely mirrors
 * F9's `features/checkout/PaymentMethodFieldset.tsx` markup verbatim
 * (same 3 fields: source bank, transfer date, receipt file), reused as the
 * pattern rather than rebuilt, per this unit's own instructions.
 */
export function PortionChangeReceiptFieldset({
  register,
  errors,
}: PortionChangeReceiptFieldsetProps) {
  return (
    <fieldset className="flex flex-col gap-3 rounded-2xl border border-leaf/10 bg-white p-4">
      <legend className="px-1 font-poppins text-sm font-medium text-leaf">
        Pago por transferencia
      </legend>

      <TextField
        label="Banco de origen"
        id="portion-change-source-bank"
        error={errors.source_bank?.message}
        {...register("source_bank")}
      />

      <TextField
        label="Fecha de la transferencia"
        id="portion-change-transfer-date"
        type="date"
        error={errors.transfer_date?.message}
        {...register("transfer_date")}
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="portion-change-receipt" className="font-poppins text-sm font-medium text-leaf">
          Comprobante de transferencia
        </label>
        <input
          id="portion-change-receipt"
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
