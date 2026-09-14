import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/lib/http/httpClient";
import { createQueryKeys } from "@/lib/query/keys";

/**
 * `GET /api/me` (backend: `customers/api/views.py::MeView` — read directly
 * this session, not guessed). Same per-file `NEXT_PUBLIC_API_BASE_URL`
 * constant convention as `lib/api/balance.ts`/`lib/api/menu.ts`.
 */
const meDtoSchema = z.object({
  id: z.coerce.number(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
});
export type MeDto = z.infer<typeof meDtoSchema>;

export const ME_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

export const meKeys = createQueryKeys("me");

export async function getMe(): Promise<MeDto> {
  const response = await httpClient(`${ME_API_BASE_URL}/api/me`);
  const data: unknown = await response.json();
  return meDtoSchema.parse(data);
}

/**
 * TanStack Query hook backing `AppShell`'s logo/nav/account-menu identity
 * (design's `app-navigation-shell`). `retry: false` so an unauthenticated
 * visit (e.g. `/bolsa` pre-account) surfaces its `ApiError` quickly instead
 * of retrying a 401 three times — `AppShell` reads `error` to degrade to an
 * "Entrar" trigger instead of the account dropdown.
 */
export function useMe() {
  return useQuery({
    queryKey: meKeys.all,
    queryFn: getMe,
    retry: false,
  });
}
