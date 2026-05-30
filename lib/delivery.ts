/**
 * Semana operacional: jueves a miércoles (Guayaquil UTC-5)
 * Corte: miércoles a medianoche
 * Entrega: domingo siguiente al corte (4 días después del miércoles)
 */

const TZ = "America/Guayaquil";

function nowInGuayaquil(): Date {
  return new Date(new Date().toLocaleString("en-US", { timeZone: TZ }));
}

export function calculateDeliveryDate(): Date {
  const local = nowInGuayaquil();
  const day = local.getDay(); // 0=Dom, 1=Lun, 2=Mar, 3=Mié, 4=Jue, 5=Vie, 6=Sáb

  // Días hasta el próximo miércoles (inclusive hoy si es miércoles)
  const daysToWed = day <= 3 ? 3 - day : 3 + (7 - day);

  // Entrega = miércoles + 4 días = domingo
  const delivery = new Date(local);
  delivery.setDate(local.getDate() + daysToWed + 4);
  delivery.setHours(9, 0, 0, 0);
  return delivery;
}

export function cutoffDate(): Date {
  const local = nowInGuayaquil();
  const day = local.getDay();
  const daysToWed = day <= 3 ? 3 - day : 3 + (7 - day);
  const cutoff = new Date(local);
  cutoff.setDate(local.getDate() + daysToWed);
  cutoff.setHours(23, 59, 59, 0);
  return cutoff;
}

const MONTHS_ES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
];

export function formatDeliveryDate(d: Date): string {
  return `domingo ${d.getDate()} de ${MONTHS_ES[d.getMonth()]}`;
}
