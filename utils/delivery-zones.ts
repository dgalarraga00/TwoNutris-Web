/**
 * Determina la zona de entrega basándose en los componentes de dirección
 * que devuelve Google Places API.
 *
 * URBAN ($3):   Quito Centro, Norte, Noroccidente, La Delicia, etc.
 * PERIPHERAL ($4): Cumbayá, Tumbaco, Los Chillos, Valle, Sur extremo,
 *                  Calderón, San Antonio, Pomasqui, y todo lo demás.
 */

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
 * Tipos de componente de Google Places que representan
 * barrios, parroquias o localidades — los únicos relevantes
 * para detectar la zona de entrega.
 */
const RELEVANT_TYPES = new Set([
  "sublocality",
  "sublocality_level_1",
  "sublocality_level_2",
  "neighborhood",
  "locality",
  "administrative_area_level_3",
  "administrative_area_level_4",
]);

/**
 * Recibe los `address_components` de un Place de Google Maps
 * y devuelve la zona de entrega.
 *
 * Solo analiza componentes de tipo barrio/parroquia/localidad
 * para evitar falsos positivos con calles, números o países.
 */
export function detectZone(
  components: google.maps.GeocoderAddressComponent[]
): Zone {
  // Filtramos solo los componentes relevantes
  const relevant = components.filter((c) =>
    c.types.some((t) => RELEVANT_TYPES.has(t))
  );

  const names = relevant
    .flatMap((c) => [c.long_name, c.short_name])
    .map((n) => n.toLowerCase().trim());

  for (const name of names) {
    // Exacto
    if (PERIPHERAL_LOCALITIES.has(name)) return "PERIPHERAL";
    // El componente contiene el nombre de una localidad periférica
    // (ej: "parroquia cumbayá" contiene "cumbayá")
    for (const p of PERIPHERAL_LOCALITIES) {
      if (name.includes(p)) return "PERIPHERAL";
    }
  }

  return "URBAN";
}

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
