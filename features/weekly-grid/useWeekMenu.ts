/**
 * F10 (task 6.1) just re-exports F4's existing `GET /api/menu/current`
 * query hook under the grid's own name — the same real, per-customer-
 * resolved menu DTO F4/F6 already query against, per launch instructions
 * ("likely just re-exporting/wrapping F4's existing one"). No new endpoint,
 * no new fetch logic.
 */
export { useCurrentMenuWeek as useWeekMenu, menuKeys } from "@/lib/api/menu";
