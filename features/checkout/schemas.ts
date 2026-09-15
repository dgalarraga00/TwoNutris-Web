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

/**
 * Extracted (feedback-round-1) so `AddressFieldset` can be reused verbatim
 * by the profile screen's new address-EDIT drawer, which has no
 * payment/receipt fields at all — `checkoutSchema` below now `.extend()`s
 * this instead of duplicating the same 5 fields, and `CheckoutFormValues`'s
 * shape is unchanged byte-for-byte.
 */
export const addressFieldsSchema = z.object({
  // Kept as a plain `string` (not `z.coerce.number()`) even though `zone`
  // is really a numeric FK: a `<select>` value is always a string in the
  // DOM, and `z.coerce` here would give the schema a different input vs.
  // output type, which `zodResolver`'s generics reject against a single
  // `useForm<T>()` type parameter. The numeric conversion happens once, at
  // each call site's own `create`/`updateAddress()` call.
  zone: z.string().min(1, "Selecciona una zona."),
  label: z.string().min(1, "Ingresa un nombre para tu dirección."),
  street: z.string().min(1, "Ingresa tu dirección."),
  reference: z.string().min(1, "Ingresa una referencia."),
  is_default: z.boolean(),
});
export type AddressFieldsetValues = z.infer<typeof addressFieldsSchema>;

export const checkoutSchema = addressFieldsSchema.extend({
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
