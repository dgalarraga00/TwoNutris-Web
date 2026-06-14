export type DayKey = "lunes" | "martes" | "miercoles" | "jueves" | "viernes";
export type CategoryKey = "principal" | "ensalada" | "postre";

export interface MenuItem {
  id: string;
  name: string;
  image: string;
  calories: number;
  macros: { protein: number; carbs: number; fat: number };
  allergens: string[];
  ingredients: string;
  category: CategoryKey;
  day: DayKey | null; // null = disponible toda la semana (postres)
}

export const DAYS: { key: DayKey; label: string; holiday?: boolean }[] = [
  { key: "lunes",     label: "Lunes" },
  { key: "martes",    label: "Martes" },
  { key: "miercoles", label: "Miércoles" },
  { key: "jueves",    label: "Jueves" },
  { key: "viernes",   label: "Viernes" },
];

export const weeklyMenu: MenuItem[] = [

  /* ── PLATOS PRINCIPALES ─────────────────────────────────────── */

  // LUNES
  {
    id: "lun-p1",
    name: "Pollo tempura con arroz",
    image: "/images/Fotos-menu/Pollo tempura con arrozPollo tempura con arroz.png",
    calories: 710,
    macros: { protein: 28, carbs: 80, fat: 23 },
    allergens: ["Gluten", "Huevo", "Soya"],
    ingredients: "Este plato está hecho con: Tiras de pechuga de pollo rebozadas en masa tempura ligera y crujiente, arroz blanco cocido al vapor, salsa Tentsuyu para dipear (base de salsa de soya, caldo y aceite de ajonjolí), nabo blanco rallado, harina de trigo (base del rebozado), huevo (para la emulsión de la masa fría), agua con gas o helada, aceite vegetal para freír, cebollín fresco picado (cebolla china) para decorar, sal y una pizca de azúcar. Alérgenos: Gluten, huevo y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Medallones de cerdo en salsa barbacoa con papas en gajos",
    image: "/images/Fotos-menu/Medallones de cerdo en salsa barbacoa con papas en gajos.png",
    calories: 504,
    macros: { protein: 28, carbs: 35, fat: 28 },
    allergens: ["Sulfitos"],
    ingredients: "Un plato delicioso y reconfortante que destaca por sus tiernos y jugosos medallones de lomo fino de cerdo. La carne va bañada en una rica salsa barbacoa casera, elaborada con un toque de azúcar morena, notas ahumadas y vinagre de vino (que aporta sulfitos), logrando el equilibrio perfecto entre dulce y salado. Se sirve con una guarnición irresistible de papas asadas al horno en corte de gajos, sazonadas con especias y un toque de vino blanco (también fuente de sulfitos), quedando perfectamente crujientes por fuera y suaves por dentro. Alérgenos: Sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Ensalada de granos mixtos",
    image: "/images/Fotos-menu/Ensalada de granos mixtos.png",
    calories: 480,
    macros: { protein: 28, carbs: 65, fat: 12 },
    allergens: ["Soja", "Gluten", "Sulfitos"],
    ingredients: "Una ensalada fresca, contundente y llena de proteína vegetal. Combina una sabrosa mezcla de granos tiernos: garbanzo, lenteja y fréjol blanco, acompañados de pimiento verde y rojo crujientes, y jugosos tomates cherry. Se adereza con una vinagreta llena de sabor a base de jugo de limón sutil, aceite, vinagre y salsa de soya (que aporta soja y gluten), perfumada con comino, albahaca y cilantro fresco (hierbita). El toque final ácido y perfecto lo dan la tradicional cebolla curtida y los pepinillos (ingredientes que contienen sulfitos). Alérgenos: Soja, gluten, sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Tikka masala de pollo con arroz",
    image: "/images/Fotos-menu/Tikka masala de pollo con arroz.png",
    calories: 458,
    macros: { protein: 28, carbs: 55, fat: 14 },
    allergens: ["Lácteos"],
    ingredients: "Un clásico reconfortante y lleno de aroma, protagonizado por tiernos trozos de pollo bañados en la tradicional salsa tikka masala. Esta salsa rica y cremosa se elabora con una base de caldo casero, cebolla, salsa de tomate, yogur natural y crema de leche (ambos ingredientes lácteos), todo realzado con una vibrante mezcla de especias garam masala (que incluye cúrcuma, cardamomo, jengibre, clavo y canela). Se sirve acompañado de una base de arroz blanco suelto, espolvoreado con un sutil y delicioso toque de coco rallado. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Albóndigas al estilo sueco",
    image: "/images/Fotos-menu/Albóndigas al estilo sueco.jpg",
    calories: 474,
    macros: { protein: 28, carbs: 32, fat: 26 },
    allergens: ["Gluten", "Huevo", "Lácteos"],
    ingredients: "Albóndigas de vacuno cerdo (carne de res, agua, pan rallado, sal, almidón de maíz, especias, clara de huevo, harina de trigo, puré de papa (papa, leche, mantequilla, sal, pimienta)), salsa Köttbullar (caldo de pollo (agua, pollo, cebolla, aceite de oliva virgen, sal), cebolla, frutos rojos, caldo de ternera (agua, grasa de res, extracto de res, caldo de hueso, sal, aroma natural, extracto de levadura, azúcar, almidón de maíz, jarabe de caramelo de azúcar, pimienta negra), aceite de girasol, almidón de maíz, mantequilla). Alérgenos: Gluten, huevo y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Curry rojo de verduras y tofu",
    image: "/images/Fotos-menu/Curry rojo de verduras y tofu.jpeg",
    calories: 530,
    macros: { protein: 28, carbs: 55, fat: 22 },
    allergens: ["Soja", "Gluten"],
    ingredients: "Caldo de verduras (apio, cebolla, tomate, ajo, zuquini, nabo, zanahoria, col), leche de coco, tofu (SOJA), arroz, zanahoria, pimiento rojo, cebolla, zuquini, aceite de girasol, pasta de curry rojo (chili rojo seco, ajo, hierba de limón, sal, piel de lima, especias (semilla de cilantro, comino en polvo)), azúcar, almidón de maíz, salsa de soja (agua, soja, trigo, sal), pasta tom kha (aceite de girasol, pasta de jengibre, ajo, lima), cilantro, aceite de oliva virgen, sal. Alérgenos: Soja y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Dorado a la naranja",
    image: "/images/Fotos-menu/Dorado a la naranja.png",
    calories: 306,
    macros: { protein: 28, carbs: 35, fat: 6 },
    allergens: ["Pescado", "Soja", "Gluten", "Sulfitos"],
    ingredients: "Un jugoso filete de dorado (un pescado blanco de la costa ecuatoriana, ideal por su firmeza y gran sabor), acompañado de papas tiernas y arvejas. El pescado se baña en una irresistible salsa agridulce y sedosa, elaborada con jugo de naranja natural, cebolla, ajo y miel de abeja, aromatizada con un toque de vino blanco (que aporta sulfitos) y hojas de menta fresca. El perfil de sabor se eleva con notas umami gracias a la incorporación de salsa teriyaki y de soya (ingredientes que contienen soja y gluten), logrando un contraste perfecto entre lo cítrico, lo dulce y lo salado. Alérgenos: Pescado, soja, gluten, sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Risotto de quinoa",
    image: "/images/Fotos-menu/Risotto de Quinoa.png",
    calories: 418,
    macros: { protein: 12, carbs: 25, fat: 30 },
    allergens: ["Lácteos", "Apio"],
    ingredients: "Este plato está hecho con: Quinua (blanca o mezcla) cocida estilo risotto, caldo de vegetales (agua, cebolla, zanahoria, puerro y apio), calabacín (zucchini) en cubitos, maíz dulce (choclo), mantequilla (para la cremosidad final), queso parmesano rallado, un toque de crema de leche, salsa al pesto (albahaca, aceite de oliva) para decorar, sal y pimienta negra. Alérgenos: Lácteos y apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Pollo al curry con leche de coco y arroz",
    image: "/images/Fotos-menu/Pollo al curry con leche de coco y arroz.webp",
    calories: 605,
    macros: { protein: 35, carbs: 60, fat: 25 },
    allergens: ["Mostaza", "Apio", "Gluten"],
    ingredients: "Este plato está hecho con: Láminas de pechuga de pollo tiernas, arroz blanco cocido al vapor, salsa de curry amarilla cremosa (leche de coco, cúrcuma, especias), pimientos rojos en cubitos integrados en la salsa, mostaza (semillas o en pasta para potenciar el sabor del curry), caldo de vegetales o pollo (base con apio), harina de trigo (para dar cuerpo a la salsa), un toque de crema de coco para decorar, cilantro fresco abundante y una rodaja de limón para exprimir al gusto. Alérgenos: Mostaza, apio y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Garbanzos estofados con chorizo y arroz",
    image: "/images/Fotos-menu/Garbanzos estofados con chorizo y arroz.webp",
    calories: 778,
    macros: { protein: 48, carbs: 79, fat: 30 },
    allergens: ["Sulfitos", "Lácteos", "Gluten"],
    ingredients: "Este plato está hecho con: Garbanzos tiernos estofados, rodajas de chorizo (tipo español o sarta) que aportan sabor y grasa, papas en cubos cocidas en el guiso, arroz blanco de acompañamiento, salsa base de tomate y pimentón de la vera (paprika), cebolla perla y ajo (refrito), vino blanco (fondo de cocción que aporta sulfitos), caldo de carne, harina de trigo (para dar cuerpo y espesar el caldo), mantequilla (o lactosa presente en el embutido), aceite de oliva, hoja de laurel, sal, pimienta y perejil fresco picado. Alérgenos: Sulfitos, lácteos y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Curry massaman con carve",
    image: "/images/Fotos-menu/Curry Massaman vegetariano con carve.png",
    calories: 600,
    macros: { protein: 34, carbs: 79, fat: 19 },
    allergens: ["Maní", "Soya"],
    ingredients: "Este plato está hecho con: Trozos de Carve (proteína de soya texturizada) salteados en salsa curry, base de leche de coco espesa, arroz blanco cocido, cebolla blanca en trozos, pasta de Curry Massaman (chiles, hierbas y especias), caldo de vegetales, mantequilla de maní (ingrediente clave de la pasta massaman) y/o maní entero tostado (topping), pasta de tamarindo, aceite vegetal, azúcar morena, sal y hojas de cilantro fresco. Alérgenos: Maní y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Pollo a la griega",
    image: "/images/Fotos-menu/Pollo a la griega.png",
    calories: 432,
    macros: { protein: 28, carbs: 35, fat: 20 },
    allergens: ["Lácteos"],
    ingredients: "Jugosos cortes de pollo marinados al estilo mediterráneo en una mezcla fresca y aromática de yogur natural (fuente de lácteos), jugo y ralladura de limón, ajo, orégano y hierbabuena. Se sirve acompañado de una colorida guarnición de vegetales que incluye papas tiernas, zuquini, pimientos, cebolla y tomates cherry. Todo esto se integra con una salsa rica y aterciopelada a base de crema de leche y auténtico queso feta (ambos ingredientes lácteos), aceitunas verdes, un toque de salsa de tomate casera y hierbas provenzales. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Pollo parmesano crocante con arroz",
    image: "/images/Fotos-menu/Pollo parmesano crocante con arroz.png",
    calories: 680,
    macros: { protein: 33, carbs: 45, fat: 40 },
    allergens: ["Gluten", "Lácteos", "Huevo"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo aplanada, pasada por huevo batido y empanizada crujiente (con una mezcla de pan rallado, hierbas y queso parmesano en la costra), cubierta con salsa marinara de tomate casera, gratinada con abundante queso mozzarella fundido, acompañada de arroz blanco aromático, aceite vegetal, sal, pimienta y hojas de albahaca fresca para decorar. Alérgenos: Gluten, lácteos y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Wok de verduras",
    image: "/images/Fotos-menu/Wok de verduras.png",
    calories: 320,
    macros: { protein: 12, carbs: 35, fat: 18 },
    allergens: ["Soya", "Gluten", "Sésamo", "Maní"],
    ingredients: "Este plato está hecho con: Variedad de vegetales frescos cortados en juliana y salteados (zanahoria, brócoli, coliflor, pimiento rojo y verde, cebolla), fideos de arroz o noodles (contienen trazas de gluten), salsa de soya (contiene soya y gluten), aceite de sésamo, semillas de ajonjolí (sésamo), aceite vegetal, azúcar, vinagre de arroz, un toque de mantequilla de maní (para espesar y dar cuerpo a la salsa) o maní picado, ajo y jengibre fresco. Alérgenos: Soya, gluten, sésamo y maní. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Lasaña de maduro",
    image: "/images/Fotos-menu/Lasaña de maduro.webp",
    calories: 720,
    macros: { protein: 42, carbs: 80, fat: 25 },
    allergens: ["Lácteos", "Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Tajadas de plátano maduro frito (en lugar de pasta), carne de res molida (condumio), queso mozzarella abundante (gratinado encima y entre capas), salsa blanca o bechamel (leche entera, mantequilla, harina de trigo para espesar), huevo cocido picado (integrado en el relleno), refrito base de cebolla paiteña, pimiento verde, tomate riñón y ajo; pasta de tomate, achiote, aceite vegetal, comino, sal, pimienta negra y cilantro (yerbita) fresco. Alérgenos: Lácteos, gluten y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  // LUNES
  {
    id: "lun-e1",
    name: "Ensalada de Vainitas y Zanahoria con Chochos",
    image: "/images/Fotos-menu/Ensalada de Vainitas y Zanahoria con Chochos.png",
    calories: 65,
    macros: { protein: 4, carbs: 8, fat: 2 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada crujiente que combina bastones finos de zanahoria con vainitas cortadas al sesgo y blanqueadas. Gana frescura con plumas de cebolla perla (suavizada en agua helada) y se completa con el toque tradicional, nutritivo y lleno de textura de los chochos. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },
  {
    id: "lun-e2",
    name: "Cítricos y Hojas",
    image: "/images/Fotos-menu/Citricos y Hojas.png",
    calories: 45,
    macros: { protein: 1, carbs: 9, fat: 0 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Ensalada ligera ideal para limpiar el paladar. Sobre una base de lechuga crespa fresca, se añaden láminas casi transparentes de rábano y apio picado fino para un extra de crocancia. El toque distintivo y dulce lo aportan los gajos de mandarina fresca. Alérgenos: Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },

  // MARTES
  {
    id: "mar-e1",
    name: "Ensalada de Brócoli, Pimiento y Cebolla",
    image: "/images/Fotos-menu/Ensalada de Brócoli, Pimiento y cebolla.png",
    calories: 32,
    macros: { protein: 2, carbs: 6, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Mezcla colorida y llena de textura que destaca por sus floretes pequeños de brócoli cocidos al vapor hasta quedar al dente. Contrasta maravillosamente con el dulzor de las julianas de pimiento rojo y el toque sutil de acidez de la cebolla paiteña ligeramente curtida. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },
  {
    id: "mar-e2",
    name: "Espirales de Zuquini y Tomate",
    image: "/images/Fotos-menu/Espirales de Zuquini y Tomate.png",
    calories: 16,
    macros: { protein: 1, carbs: 3, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada divertida y ligera servida sobre una base suave de lechuga de seda. Destacan los fideos o espirales de zuquini fresco y crujiente, acompañados de la jugosidad y acidez perfecta de los cubos de tomate riñón sin semillas. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-e1",
    name: "Ensalada de Col Morada, Pimiento y Zanahoria",
    image: "/images/Fotos-menu/Ensalada de Col Morada, Pimiento y Zanahoria.png",
    calories: 32,
    macros: { protein: 1, carbs: 7, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada vibrante y muy crujiente donde la protagonista es la col morada picada muy finamente. Se complementa a la perfección con la dulzura natural de la zanahoria rallada y el frescor de los cubitos diminutos de pimiento verde. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },
  {
    id: "mie-e2",
    name: "Mix de Espinaca con Pimiento Amarillo",
    image: "/images/Fotos-menu/Mix de Espinaca con Pimiento Amarrillo .png",
    calories: 38,
    macros: { protein: 1, carbs: 8, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada con mucha identidad y textura sobre una abundante base verde de hojas de espinaca decorada con pequeños cortes cuadrados de pimientos amarillos. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-e1",
    name: "Mix de Palmito y Acelga con Tomate Cherry",
    image: "/images/Fotos-menu/Mix de Palmito y Acelga con Tomate Cherry.png",
    calories: 24,
    macros: { protein: 1, carbs: 5, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una combinación suave y elegante con una base nutritiva de hojas jóvenes de acelga (crudas o blanqueadas rápidamente). Incorpora jugosas mitades de tomate cherry y rodajas tiernas de palmito, creando un contraste de texturas muy agradable al paladar. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },
  {
    id: "jue-e2",
    name: "Ensalada de Rábano, Zanahoria y Lechuga",
    image: "/images/Fotos-menu/Ensalada de Rábano, Zanahoria y Lechuga.png",
    calories: 20,
    macros: { protein: 1, carbs: 4, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada sencilla, voluminosa y extremadamente crujiente. Utiliza una base abundante de lechuga crespa, acompañada de bastones de zanahoria que aportan un ligero dulzor y medias lunas de rábano para un final fresco y sutilmente picante. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-e1",
    name: "Ensalada Verde",
    image: "/images/Fotos-menu/Ensalada Verde.webp",
    calories: 15,
    macros: { protein: 1, carbs: 3, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada ligera y refrescante con una base de lechuga común, pimiento verde, apio, pepinillo, pera (o manzana verde). Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },
  {
    id: "vie-e2",
    name: "La sencilla",
    image: "/images/Fotos-menu/La sencilla.jpeg",
    calories: 38,
    macros: { protein: 1, carbs: 8, fat: 0 },
    allergens: ["Pimienta"],
    ingredients: "Este plato está hecho con: Ensalada con mucha identidad y textura sobre una abundante base verde de hojas de lechuga, un toque crocante con las rodajas de pepinillo, y para terminar tomate cherry (o riñón) con un toque de pimienta negra. Alérgenos: Pimienta. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },

  /* ── POSTRES (toda la semana) ───────────────────────────────── */
  {
    id: "pos-1",
    name: "Mix de Frutas Frescas (Del día)",
    image: "/images/Fotos-menu/Mix de Frutas Frescas (Solo Sandía).png",
    calories: 70,
    macros: { protein: 0, carbs: 15, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Selección del Chef según temporada (Puede incluir: Melón, Papaya, Piña, Sandía). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Galletas de chocolate con nueces y chispas",
    image: "/images/Fotos-menu/Galletas de chocolate con nueces y chispas.png",
    calories: 366,
    macros: { protein: 5, carbs: 41, fat: 20 },
    allergens: ["Frutos secos", "Gluten", "Huevo", "Lácteos", "Soja"],
    ingredients: "Este plato está hecho con: Galletas intensas y doblemente achocolatadas, elaboradas con una masa rica y oscura gracias a la integración de cacao en polvo puro. En cada bocado combinan el toque crujiente y tostado de las nueces (frutos secos) con la textura fundente de abundantes chispas de chocolate. La masa se prepara con harina de trigo (fuente de gluten), mantequilla (lácteos) y huevos frescos, mientras que el chocolate utilizado suele contener lecitina de soja como emulsionante. Alérgenos: Nueces (frutos secos), gluten, huevo, lácteos, soja. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-3",
    name: "Banana cake con mora",
    image: "/images/Fotos-menu/Banana cake con mora.png",
    calories: 280,
    macros: { protein: 4, carbs: 39, fat: 12 },
    allergens: ["Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Una variante frutal del clásico pastel de plátano, que combina la dulzura natural de la masa de plátano maduro con estallidos jugosos de moras distribuidos en su interior. La miga suave y esponjosa se elabora a base de harina de trigo (que contiene gluten) y huevos para darle estructura. Aunque la receta base es sencilla, hay que considerar la posible presencia accidental de lácteos o soja. Alérgenos: Gluten y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
