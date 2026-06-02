// Returns delivery zone (URBAN $3 / PERIPHERAL $4) from coordinate components

export type Zone = "URBAN" | "PERIPHERAL";

/** Parroquias/localidades de Quito que se consideran periféricas */
const PERIPHERAL_LOCALITIES = new Set([
  // Valle de Tumbaco
  "cumbayá",
  "tumbaco",
  "puembo",
  "pifo",
  "tababela",
  "yaruquí",
  "checa",
  "el quinche",
  // Valle de los Chillos
  "los chillos",
  "sangolquí",
  "conocoto",
  "alangasí",
  "la merced",
  "amaguaña",
  "pintag",
  "guangopolo",
  "armenia",
  // Sur lejano
  "turubamba",
  "guamaní",
  "quitumbe",
  "chillogallo",
  "la ecuatoriana",
  // Norte lejano / Noroccidente
  "calderón",
  "llano chico",
  "llano grande",
  "guayllabamba",
  "san antonio de pichincha",
  "pomasqui",
  "nono",
  "nanegalito",
  "nanegal",
  "gualea",
  "pacto",
  // Otro cantón
  "rumiñahui",
  "mejía",
]);

/**
 * Fallback: si no hay componentes, detecta la zona por coordenadas.
 *
 * Quito urbano ocupa el valle entre lng -78.47 y -78.60,
 * aproximadamente lat -0.05 a -0.32.
 * Cumbayá/Tumbaco quedan al ESTE (lng > -78.47).
 * Sur extremo queda bajo lat -0.32.
 */
export function detectZoneByCoords(lat: number, lng: number): Zone {
  // Cumbayá / Valle de Tumbaco → este del río
  if (lng > -78.47) return "PERIPHERAL";
  // Valle de los Chillos → sureste
  if (lat < -0.32 && lng > -78.52) return "PERIPHERAL";
  // Calderón / Pomasqui → norte lejano
  if (lat > -0.06) return "PERIPHERAL";
  // Sur muy lejano (Amaguaña, etc.)
  if (lat < -0.38) return "PERIPHERAL";

  return "URBAN";
}
