/**
 * Typed query-key factory — the standard TanStack Query hierarchical-key
 * pattern. Every factory built with `createQueryKeys` starts from an `all`
 * root tuple, so a whole feature can be invalidated/refetched in one call:
 *
 * ```ts
 * queryClient.invalidateQueries({ queryKey: menuKeys.all });
 * ```
 *
 * This unit (F3) only establishes the reusable shape. Concrete feature key
 * factories (menu, balance, orders, ...) belong to the units that build
 * those features (F4+) and should follow this exact pattern, e.g.:
 *
 * ```ts
 * // lib/api/menu.ts (a later unit)
 * export const menuKeys = {
 *   ...createQueryKeys("menu"),
 *   current: () => [...menuKeys.all, "current"] as const,
 *   week: (weekStart: string) => [...menuKeys.all, "week", weekStart] as const,
 * };
 * ```
 */
export const createQueryKeys = <const TNamespace extends string>(
  namespace: TNamespace,
) => {
  const all = [namespace] as const;
  return {
    all,
    /** Generic escape hatch for a feature's own leaf keys. */
    key: (...segments: readonly unknown[]) => [...all, ...segments] as const,
  };
};
