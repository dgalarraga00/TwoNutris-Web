import { z } from "zod";

/**
 * F9 checkout form schema (design §A: `CheckoutForm` → `AddressFieldset` +
 * `PaymentMethodFieldset`). Deliberately has NO allergies field anywhere —
 * TwoNutris's product philosophy is transparency (show dish allergen/
 * nutrition data), never collection (obs #353); this form only ever
 * collects delivery-address and transfer-receipt data.
 *
 * `receipt` mirrors the backend's own allowlist
 * (`payments/services.py::ALLOWED_RECEIPT_CONTENT_TYPES`/
 * `MAX_RECEIPT_SIZE_BYTES`) client-side for fast feedback — the backend's
 * `attach_receipt()` guard (`invalid_receipt_file`) remains the real
 * enforcement boundary either way.
 */
const ALLOWED_RECEIPT_TYPES = ["image/jpeg", "image/png", "application/pdf"];
const MAX_RECEIPT_SIZE_BYTES = 10 * 1024 * 1024;

export const checkoutSchema = z.object({
  // Kept as a plain `string` (not `z.coerce.number()`) even though `zone`
  // is really a numeric FK: a `<select>` value is always a string in the
  // DOM, and `z.coerce` here would give the schema a different input vs.
  // output type, which `zodResolver`'s generics reject against a single
  // `useForm<CheckoutFormValues>()` type parameter. The numeric conversion
  // happens once, at the `createAddress()` call site in `CheckoutForm`.
  zone: z.string().min(1, "Selecciona una zona."),
  label: z.string().min(1, "Ingresa un nombre para tu dirección."),
  street: z.string().min(1, "Ingresa tu dirección."),
  reference: z.string().min(1, "Ingresa una referencia."),
  is_default: z.boolean(),
  source_bank: z.string().min(1, "Ingresa el banco de origen."),
  transfer_date: z.string().min(1, "Ingresa la fecha de la transferencia."),
  receipt: z
    .custom<FileList>((value) => value instanceof FileList && value.length === 1, {
      message: "Adjunta tu comprobante de transferencia.",
    })
    .refine((files) => ALLOWED_RECEIPT_TYPES.includes(files[0]?.type ?? ""), {
      message: "El comprobante debe ser una imagen (JPEG/PNG) o PDF.",
    })
    .refine((files) => (files[0]?.size ?? 0) <= MAX_RECEIPT_SIZE_BYTES, {
      message: "El comprobante no debe superar 10 MB.",
    }),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
