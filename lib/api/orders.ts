import { z } from "zod";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { httpClient } from "@/lib/http/httpClient";
import { createQueryKeys } from "@/lib/query/keys";

/**
 * `POST /api/orders` + `GET /api/me/orders` (backend: `orders/api/
 * {serializers,views}.py`, `orders/services.py::create_order()`'s guard
 * chain, read directly this session — not guessed).
 *
 * Every `credit_type: "meal"` line MUST carry `side_salad_dish`/
 * `side_salad_portion` — enforced server-side by `build_order_items()`'s
 * `SideSaladRequired` guard, and mirrored client-side by weekly-grid's own
 * salad-pairing UI (`DishSlot`/`SaladPicker`), which never lets a draft line
 * exist without an already-resolved salad in the first place (spec:
 * credit-packs / weekly-grid). A `credit_type: "snack"` line must NOT carry
 * one — out of scope for this unit (B2's menu-browse DTO exposes only
 * `mains`/`salads`, no snack browsing surface yet, see apply-progress risk
 * report).
 */
export interface OrderLineInput {
  dish: number;
  dish_portion: number;
  quantity: number;
  credit_type: "meal" | "snack";
  side_salad_dish?: number | null;
  side_salad_portion?: number | null;
}

export interface CreateOrderInput {
  address: number;
  delivery_date: string;
  lines: OrderLineInput[];
}

/** Only the fields this unit actually reads (id, dish/menu_dish linkage for
 * "repeat last week", snapshot name for display) are validated strictly;
 * `.passthrough()` lets every other real field (the 15 snapshot_* columns,
 * double_protein_applied, etc.) through unvalidated rather than risking a
 * parse failure on a field this unit never consumes. */
const orderItemDtoSchema = z
  .object({
    id: z.coerce.number(),
    dish: z.coerce.number(),
    dish_portion: z.coerce.number(),
    menu_dish: z.coerce.number().nullable(),
    quantity: z.coerce.number(),
    snapshot_name: z.string(),
  })
  .passthrough();

export const orderDtoSchema = z
  .object({
    id: z.coerce.number(),
    status: z.string(),
    delivery_date: z.string(),
    items: z.array(orderItemDtoSchema),
    created_at: z.string(),
  })
  .passthrough();
export type OrderDto = z.infer<typeof orderDtoSchema>;

/** Same per-file `NEXT_PUBLIC_API_BASE_URL`-backed constant convention as
 * every other `lib/api/*.ts` file in this repo. */
export const ORDERS_API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:8000";

export const ordersKeys = {
  ...createQueryKeys("orders"),
  mine: () => [...ordersKeys.all, "mine"] as const,
};

export async function createOrder(input: CreateOrderInput): Promise<OrderDto> {
  const response = await httpClient(`${ORDERS_API_BASE_URL}/api/orders`, {
    method: "POST",
    body: JSON.stringify(input),
  });
  const data: unknown = await response.json();
  return orderDtoSchema.parse(data);
}

export async function getMyOrders(): Promise<OrderDto[]> {
  const response = await httpClient(`${ORDERS_API_BASE_URL}/api/me/orders`);
  const data: unknown = await response.json();
  return z.array(orderDtoSchema).parse(data);
}

/** Feeds task 6.3 ("repeat last week"). */
export function useMyOrders() {
  return useQuery({ queryKey: ordersKeys.mine(), queryFn: getMyOrders });
}

/** After a successful order submission, both the wallet balance and the
 * customer's own order history changed server-side — invalidate both so the
 * next render reflects reality instead of stale cached data. */
export function useInvalidateOrdersAndBalance() {
  const queryClient = useQueryClient();
  return () => {
    void queryClient.invalidateQueries({ queryKey: ordersKeys.all });
    void queryClient.invalidateQueries({ queryKey: ["balance"] });
  };
}
