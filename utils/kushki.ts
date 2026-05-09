/**
 * Kushki integration utils.
 *
 * Environments:
 *   NEXT_PUBLIC_KUSHKI_ENV=sandbox  → api-uat.kushkipagos.com
 *   NEXT_PUBLIC_KUSHKI_ENV=production (default) → api.kushkipagos.com
 *
 * Test cards (sandbox):
 *   Visa aprobada:    4575623182290326  CVV: 123  Exp: cualquiera futura
 *   Mastercard aprobada: 5321952197935276  CVV: 123
 *   Rechazada:        4000000000000002
 */

const isSandbox =
  process.env.NEXT_PUBLIC_KUSHKI_ENV === "sandbox" ||
  process.env.KUSHKI_ENV === "sandbox";

export const KUSHKI_BASE_URL = isSandbox
  ? "https://api-uat.kushkipagos.com"
  : "https://api.kushkipagos.com";
