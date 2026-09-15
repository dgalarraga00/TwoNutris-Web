import { z } from "zod";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "@/lib/http/httpClient";
import { createQueryKeys } from "@/lib/query/keys";
import type { PortionSize } from "@/lib/pricing/bagPricing";

/**
 * Endpoint functions for F9 (checkout): `GET /api/zones`,
 * `POST /api/me/addresses`, `POST /api/coupons/validate` (now wired for
 * real — the customer is authenticated by the time this screen renders,
 * unlike F7's bag screen), `POST /api/packs`, `POST /api/packs/{id}/receipt`
 * — all read directly from `backend/customers/api/{views,serializers}.py`
 * and `backend/payments/api/{views,serializers}.py` this session (not
 * guessed). Same per-file `NEXT_PUBLIC_API_BASE_URL`-backed base-URL
 * constant convention as `lib/api/menu.ts`/`lib/api/auth.ts`.
 */
export const CHECKOUT_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

// --------------------------------------------------------------------------
// GET /api/zones — AllowAny, feeds the address form's zone picker.
// --------------------------------------------------------------------------

const zoneDtoSchema = z.object({
  id: z.coerce.number(),
  name: z.string(),
  description: z.string(),
});
export type ZoneDto = z.infer<typeof zoneDtoSchema>;

export const zoneKeys = createQueryKeys("zones");

export async function getZones(): Promise<ZoneDto[]> {
  const response = await httpClient(`${CHECKOUT_API_BASE_URL}/api/zones`, {
    skipAuth: true,
  });
  const data: unknown = await response.json();
  return z.array(zoneDtoSchema).parse(data);
}

export function useZones() {
  return useQuery({ queryKey: zoneKeys.all, queryFn: getZones });
}

// --------------------------------------------------------------------------
// POST /api/me/addresses — plain CRUD, no zone-coverage guard at this call
// site (confirmed by reading `customers/services.py::create_address()`
// directly: no domain exception is ever raised here, only DRF's own field
// validation on a malformed/missing `zone`/`street`/etc., which surfaces as
// a generic 400 and is handled the same way as any other unmapped ApiError).
// --------------------------------------------------------------------------

export interface CreateAddressInput {
  zone: number;
  label: string;
  street: string;
  reference: string;
  is_default: boolean;
}

const addressDtoSchema = z.object({
  id: z.coerce.number(),
  zone: z.coerce.number(),
  label: z.string(),
  street: z.string(),
  reference: z.string(),
  is_default: z.boolean(),
  created_at: z.string(),
});
export type AddressDto = z.infer<typeof addressDtoSchema>;

export async function createAddress(input: CreateAddressInput): Promise<AddressDto> {
  const response = await httpClient(`${CHECKOUT_API_BASE_URL}/api/me/addresses`, {
    method: "POST",
    body: JSON.stringify(input),
  });
  const data: unknown = await response.json();
  return addressDtoSchema.parse(data);
}

/**
 * `GET /api/me/addresses` (F10, task 6.1: "the grid needs an address to
 * submit an order"). `AddressSerializer`'s own `is_default` field is the
 * hook this feeds — the weekly-grid auto-selects the sole/default address
 * and only asks the customer to pick when 2+ exist with no clear default.
 */
export const addressKeys = createQueryKeys("addresses");

export async function getAddresses(): Promise<AddressDto[]> {
  const response = await httpClient(`${CHECKOUT_API_BASE_URL}/api/me/addresses`);
  const data: unknown = await response.json();
  return z.array(addressDtoSchema).parse(data);
}

export function useAddresses() {
  return useQuery({ queryKey: addressKeys.all, queryFn: getAddresses });
}

/**
 * `PATCH /api/me/addresses/{id}` (live-feedback fix, feedback-round-1):
 * `customers/api/views.py::AddressDetailView(generics.UpdateAPIView)`, read
 * directly this session — own-resource scoped (`get_queryset()` filters to
 * `request.user.addresses`, so a foreign id 404s), plain DRF field
 * validation on `zone`/`label`/`street`/etc. (no domain exception codes to
 * special-case, same as `createAddress`). Same editable field set as
 * creation — the customer edits label/street/zone/default-flag together,
 * one PATCH.
 */
export type UpdateAddressInput = CreateAddressInput;

export async function updateAddress(id: number, input: UpdateAddressInput): Promise<AddressDto> {
  const response = await httpClient(`${CHECKOUT_API_BASE_URL}/api/me/addresses/${id}`, {
    method: "PATCH",
    body: JSON.stringify(input),
  });
  const data: unknown = await response.json();
  return addressDtoSchema.parse(data);
}

/** Same `useInvalidateOrdersAndBalance`-style convention (`lib/api/
 * orders.ts`): after a successful edit, the addresses list is stale. */
export function useInvalidateAddresses() {
  const queryClient = useQueryClient();
  return () => {
    void queryClient.invalidateQueries({ queryKey: addressKeys.all });
  };
}

// --------------------------------------------------------------------------
// POST /api/coupons/validate — now wired for real (F7 left `onValidate`
// undefined because this endpoint is `IsAuthenticated`; by F9 the customer
// has a real access token from F8). NEVER redeems (`preview_coupon()`).
//
// KNOWN GAP (documented, not silently papered over): `is_first_purchase` is
// a client-supplied boolean on THIS preview endpoint only — confirmed by
// reading `CouponValidateSerializer` directly, this is F7's OWN previously
// flagged deviation, still unresolved at the API level. This client always
// sends `false`, so a genuine first-time customer holding a
// `first_purchase_only` coupon may see this PREVIEW incorrectly reject it,
// even though the real `POST /api/packs` redemption call computes
// `is_first_purchase` correctly server-side and would have accepted it. See
// apply-progress risk report.
// --------------------------------------------------------------------------

const nullableDecimal = z.preprocess(
  (value) => (value === null || value === undefined ? null : Number(value)),
  z.number().nullable(),
);

export const couponValidationDtoSchema = z.object({
  code: z.string(),
  kind: z.enum(["percent", "fixed_amount", "extra_credits"]),
  percent_off: nullableDecimal,
  amount_off: nullableDecimal,
  extra_credits: z.coerce.number(),
});
export type CouponValidationDto = z.infer<typeof couponValidationDtoSchema>;

export async function validateCoupon(
  code: string,
  portionSize: PortionSize,
): Promise<CouponValidationDto> {
  const response = await httpClient(`${CHECKOUT_API_BASE_URL}/api/coupons/validate`, {
    method: "POST",
    body: JSON.stringify({ code, portion_size: portionSize, is_first_purchase: false }),
  });
  const data: unknown = await response.json();
  return couponValidationDtoSchema.parse(data);
}

// --------------------------------------------------------------------------
// POST /api/packs — this checkout always buys the MEAL bag from
// `purchaseDraftStore` (`pack_type: "meal"` hardcoded here, never a
// standalone snack-only pack in this flow). `portion_size`/`base_price` are
// NEVER sent — the server resolves them from the customer's own
// `NutritionProfile` (see apply-progress risk report for the real,
// confirmed fallback-to-MEDIUM behavior when no profile exists).
// --------------------------------------------------------------------------

export interface PurchaseMealPackInput {
  double_protein: boolean;
  snack_quantity: number;
  coupon_code?: string | null;
}

const creditPackDtoSchema = z.object({
  id: z.coerce.number(),
  code: z.string(),
  pack_type: z.string(),
  portion_size: z.string().nullable(),
  status: z.string(),
  credits_total: z.coerce.number(),
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
export type CreditPackDto = z.infer<typeof creditPackDtoSchema>;

export async function purchaseMealPack(input: PurchaseMealPackInput): Promise<CreditPackDto> {
  const response = await httpClient(`${CHECKOUT_API_BASE_URL}/api/packs`, {
    method: "POST",
    body: JSON.stringify({ pack_type: "meal", ...input }),
  });
  const data: unknown = await response.json();
  return creditPackDtoSchema.parse(data);
}

// --------------------------------------------------------------------------
// POST /api/packs/{id}/receipt — multipart upload, own-resource + own-
// PENDING-payment scoped server-side. `httpClient`'s `buildHeaders()` only
// sets `Content-Type: application/json` when `body` is a string, so passing
// a `FormData` body here correctly leaves Content-Type unset and lets the
// browser attach its own multipart boundary.
// --------------------------------------------------------------------------

export interface UploadReceiptInput {
  packId: number;
  receipt: File;
  source_bank: string;
  transfer_date: string;
}

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
export type PaymentDto = z.infer<typeof paymentDtoSchema>;

export async function uploadReceipt({
  packId,
  receipt,
  source_bank,
  transfer_date,
}: UploadReceiptInput): Promise<PaymentDto> {
  const formData = new FormData();
  formData.append("receipt", receipt);
  formData.append("source_bank", source_bank);
  formData.append("transfer_date", transfer_date);

  const response = await httpClient(`${CHECKOUT_API_BASE_URL}/api/packs/${packId}/receipt`, {
    method: "POST",
    body: formData,
  });
  const data: unknown = await response.json();
  return paymentDtoSchema.parse(data);
}
