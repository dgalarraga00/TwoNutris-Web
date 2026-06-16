/**
 * Lanzamiento del menú "A la carta" (batch cooking).
 * Antes de esta fecha, el menú (/pedir, showcase del home, checkout) se
 * reemplaza por una pantalla de cuenta regresiva. Después, todo opera normal.
 *
 * La fecha es un instante absoluto (UTC). El default corresponde al
 * jueves 00:01 hora de Guayaquil (UTC-5). Se puede sobrescribir con la
 * variable de entorno NEXT_PUBLIC_LAUNCH_AT (ISO 8601) sin tocar código.
 */
const DEFAULT_LAUNCH = "2026-06-18T05:01:00Z"; // jueves 18 jun, 00:01 America/Guayaquil

export const LAUNCH_AT_ISO = process.env.NEXT_PUBLIC_LAUNCH_AT ?? DEFAULT_LAUNCH;
export const LAUNCH_AT = new Date(LAUNCH_AT_ISO);

/** True mientras todavía no llegó la fecha de lanzamiento. */
export function isBeforeLaunch(): boolean {
  return Date.now() < LAUNCH_AT.getTime();
}
