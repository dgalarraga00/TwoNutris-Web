import { z } from "zod";

/**
 * Receipt-upload form for the "cambiar mi plan" submit flow (F11, task 6.5)
 * — deliberately the SAME 3 fields, allowlist, and size cap as F9's
 * `features/checkout/schemas.ts::checkoutSchema` (mirrored, not rebuilt
 * from scratch, per the launch prompt's explicit instruction: both post to
 * the exact same `POST /api/packs/{id}/receipt` endpoint via the SAME
 * `lib/api/checkout.ts::uploadReceipt()` function).
 */
const ALLOWED_RECEIPT_TYPES = ["image/jpeg", "image/png", "application/pdf"];
const MAX_RECEIPT_SIZE_BYTES = 10 * 1024 * 1024;

export const portionChangeReceiptSchema = z.object({
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

export type PortionChangeReceiptValues = z.infer<typeof portionChangeReceiptSchema>;
