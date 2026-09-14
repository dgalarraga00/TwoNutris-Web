import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/lib/http/httpClient";
import { createQueryKeys } from "@/lib/query/keys";

/**
 * `GET /api/me/balance` (backend: `orders/api/views.py::MyBalanceView` +
 * `_wallet_payload()`, read directly this session — not guessed). Two
 * independent, named wallets — NEVER a pooled/top-level total (spec:
 * customer-profile-web "Balance split by wallet", weekly-grid "remaining
 * credits always visible"). `double_protein` is present only on MEAL
 * batches (SNACK packs can never carry it, per
 * `creditpack_shape_by_pack_type`).
 */
const batchDtoSchema = z.object({
  id: z.coerce.number(),
  balance: z.coerce.number(),
  expires_at: z.string().nullable(),
  double_protein: z.boolean().optional(),
});

const walletDtoSchema = z.object({
  available: z.coerce.number(),
  batches: z.array(batchDtoSchema),
});

export const balanceDtoSchema = z.object({
  meal: walletDtoSchema,
  snack: walletDtoSchema,
});
export type BalanceDto = z.infer<typeof balanceDtoSchema>;

/** Same per-file `NEXT_PUBLIC_API_BASE_URL`-backed constant convention as
 * `lib/api/menu.ts`/`lib/api/auth.ts`/`lib/api/checkout.ts`. */
export const BALANCE_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

export const balanceKeys = createQueryKeys("balance");

export async function getBalance(): Promise<BalanceDto> {
  const response = await httpClient(`${BALANCE_API_BASE_URL}/api/me/balance`);
  const data: unknown = await response.json();
  return balanceDtoSchema.parse(data);
}

/** TanStack Query hook for the weekly-grid's always-visible balance summary
 * (F10, task 6.1) and any later screen needing wallet balances (F11). */
export function useBalance() {
  return useQuery({ queryKey: balanceKeys.all, queryFn: getBalance });
}
