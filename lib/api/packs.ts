import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/lib/http/httpClient";
import { createQueryKeys } from "@/lib/query/keys";
import type { PortionSize } from "@/lib/pricing/bagPricing";

/**
 * `GET /api/me/packs` (backend: `payments/api/views.py::MyPacksListView` +
 * `CreditPackSerializer`, read directly this session — Phase 3B gap-fill,
 * added specifically so the frontend can know a customer's CURRENT pack/
 * tier and decide which "cambiar mi plan" options to hide, obs #340/#341
 * task 6.5). Same field set `POST /api/packs` already returns at purchase
 * time, duplicated here as its own schema per this repo's established
 * per-file-schema convention (`lib/api/checkout.ts`'s own
 * `creditPackDtoSchema` is not exported/shared — every `lib/api/*.ts` file
 * owns its own DTO contract independently).
 */
const packDtoSchema = z.object({
  id: z.coerce.number(),
  code: z.string(),
  pack_type: z.string(),
  portion_size: z.string().nullable(),
  status: z.string(),
  credits_total: z.coerce.number(),
  /** THIS pack's own remaining MEAL balance (backend `pack_meal_balance()`)
   * — closes the wallet-vs-pack-balance gap `usePortionOptions.ts` used to
   * document as an approximation. Always 0 for a SNACK pack. */
  remaining_credits: z.coerce.number(),
  base_price: z.coerce.number(),
  snack_quantity: z.coerce.number(),
  snacks_amount: z.coerce.number(),
  double_protein: z.boolean(),
  double_protein_amount: z.coerce.number(),
  coupon: z.coerce.number().nullable(),
  subtotal: z.coerce.number(),
  tax: z.coerce.number(),
  total: z.coerce.number(),
  created_at: z.string(),
});
export type PackDto = z.infer<typeof packDtoSchema>;

/** Same per-file `NEXT_PUBLIC_API_BASE_URL`-backed constant convention as
 * every other `lib/api/*.ts` file in this repo. */
export const PACKS_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

export const packsKeys = createQueryKeys("packs");

export async function getMyPacks(): Promise<PackDto[]> {
  const response = await httpClient(`${PACKS_API_BASE_URL}/api/me/packs`);
  const data: unknown = await response.json();
  return z.array(packDtoSchema).parse(data);
}

/** Feeds `features/profile/usePortionOptions.ts` (F11, task 6.5). */
export function useMyPacks() {
  return useQuery({ queryKey: packsKeys.all, queryFn: getMyPacks });
}

// --------------------------------------------------------------------------
// POST /api/packs/{id}/portion-size — self-service "cambiar mi plan"
// request (backend: `payments/api/views.py::PackPortionChangeRequestView` +
// `payments/services.py::request_portion_change()`, read directly this
// session). Creates a PENDING `Payment` — the pack's `portion_size` is only
// applied later, once an admin confirms the matching receipt. Returns the
// SAME shape `lib/api/checkout.ts::uploadReceipt()` already consumes
// (`PaymentSerializer`), duplicated here as its own schema for the same
// per-file reason as `packDtoSchema` above.
// --------------------------------------------------------------------------

const paymentDtoSchema = z.object({
  id: z.coerce.number(),
  credit_pack: z.coerce.number(),
  amount: z.coerce.number(),
  status: z.string(),
  method: z.string(),
  receipt_url: z.string().nullable(),
  source_bank: z.string().nullable(),
  transfer_date: z.string().nullable(),
  created_at: z.string(),
  updated_at: z.string(),
});
export type PortionChangePaymentDto = z.infer<typeof paymentDtoSchema>;

export async function requestPortionChange(
  packId: number,
  newPortionSize: PortionSize,
): Promise<PortionChangePaymentDto> {
  const response = await httpClient(
    `${PACKS_API_BASE_URL}/api/packs/${packId}/portion-size`,
    {
      method: "POST",
      body: JSON.stringify({ new_portion_size: newPortionSize }),
    },
  );
  const data: unknown = await response.json();
  return paymentDtoSchema.parse(data);
}
