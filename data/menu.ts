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
  { key: "lunes",     label: "Lunes", holiday: true },
  { key: "martes",    label: "Martes" },
  { key: "miercoles", label: "Miércoles" },
  { key: "jueves",    label: "Jueves" },
  { key: "viernes",   label: "Viernes" },
];

export const weeklyMenu: MenuItem[] = [

  /* ── PLATOS PRINCIPALES ─────────────────────────────────────── */

  // MARTES
  {
    id: "mar-p1",
    name: "Pechuga de pollo en salsa de miel y mostaza con arroz",
    image: "/images/Fotos-menu/Pechuga de pollo en salsa de miel y mostaza con arroz.png",
    calories: 624,
    macros: { protein: 28, carbs: 65, fat: 28 },
    allergens: ["Mostaza", "Lácteos", "Gluten"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo jugosa, sellada a la plancha para mantener sus jugos, bañada generosamente con una salsa cremosa de miel y mostaza (elaborada con mostaza en grano o antigua, miel de abeja, crema de leche y un toque de mantequilla), ligada suavemente con harina de trigo (que aporta el gluten y la textura aterciopelada), servida junto a una porción de arroz blanco graneado, aceite vegetal, sal, pimienta negra y perejil fresco picado para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Chuleta en salsa agridulce con quinoa",
    image: "/images/Fotos-menu/Chuleta con quinoa.png",
    calories: 524,
    macros: { protein: 28, carbs: 45, fat: 20 },
    allergens: ["Soya", "Gluten", "Sulfitos", "Apio"],
    ingredients: "Este plato está hecho con: Chuleta de cerdo (con hueso) a la plancha, mix de quinoa, trozos de piña en almíbar, pimiento rojo y verde en tiras, cebolla perla en pluma, salsa agridulce (pasta de tomate, vinagre, azúcar, jugo de piña, salsa china/soya, salsa inglesa), caldo de carne (agua, huesos, cebolla, zanahoria, apio y sal), harina de trigo (para espesar la salsa), ajo en pasta, jengibre rallado, aceite vegetal, semillas de ajonjolí (decoración), cebollín picado, sal y pimienta.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Guiso de fréjol con arroz",
    image: "/images/Fotos-menu/Guiso de frejol con arroz.webp",
    calories: 574,
    macros: { protein: 20, carbs: 56, fat: 30 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Mix de fréjoles cocinados a fuego lento hasta espesar, arroz blanco cocido, trozos de papa chola y zanahoria tierna integrados en el guiso, sofrito base (cebolla paiteña, pimiento, tomate y ajo), caldo de vegetales (que suele contener apio en su base aromática), comino, orégano, hoja de laurel, aceite vegetal (o achiote para el color), sal, pimienta y cilantro fresco para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Pollo vindaloo con arroz",
    image: "/images/Fotos-menu/Pollo Vindaloo con arroz.png",
    calories: 688,
    macros: { protein: 28, carbs: 45, fat: 45 },
    allergens: ["Mostaza", "Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Pechuga de pollo marinada y cocinada en una salsa Vindaloo intensa y especiada (caracterizada por su toque picante y ácido, con una base de vinagre, ajo, jengibre, chiles rojos secos y especias), trozos de papa tierna cocidos en la misma salsa para absorber el sabor, arroz blanco aromático de guarnición, semillas de mostaza (en la base del curry), salsa ligada (que puede contener trazas de harina de trigo o condimentos con gluten), aceite vegetal, sal y decorado con rodajas de chile fresco y hojas de cilantro.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Camarón al ajillo con arroz",
    image: "/images/Fotos-menu/Camarones al ajillo con arroz.png",
    calories: 670,
    macros: { protein: 28, carbs: 45, fat: 35 },
    allergens: ["Mariscos", "Sulfitos", "Lácteos", "Mostaza"],
    ingredients: "Este plato está hecho con: Camarones frescos salteados, arroz blanco cocido, mantequilla (base de la salsa al ajillo), aceite de oliva, láminas de ajo dorado crujiente (chips), rodajas de ají rojo fresco (decoración y aroma), vino blanco (para desglasar), mostaza (toque en el marinado), limón (gajo para servir), perejil fresco picado, sal y pimienta negra.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Bowl Tex-Mex de carne vegetariana con arroz y fréjoles",
    image: "/images/Fotos-menu/Bowl Tex-Mex de carne vegetariana con Arroz y Fréjoles.png",
    calories: 545,
    macros: { protein: 34, carbs: 78, fat: 12 },
    allergens: ["Soya", "Lácteos"],
    ingredients: "Este plato está hecho con: Carne vegetal de soya (texturizada) hidratada en caldo de especias y sofrita con nuestro sazonador de fajitas (comino, pimentón ahumado y orégano) para lograr una textura firme y sabrosa. Se sirve sobre una base de arroz al cilantro, acompañado de un guiso caldoso de fréjoles rojos, pimientos y cebollas asados, y zucchini.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Pollo piccata con pasta",
    image: "/images/Fotos-menu/Pollo Piccata con Pasta.png",
    calories: 680,
    macros: { protein: 28, carbs: 50, fat: 30 },
    allergens: ["Gluten", "Lácteos", "Sulfitos", "Huevo"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo sellado y dorado, cama de pasta larga (tipo Linguini o Espagueti) al huevo, salsa Piccata clásica (emulsión de mantequilla, jugo de limón y vino blanco), alcaparras (que aportan el toque salado y avinagrado), rodajas de limón amarillo fresco, harina de trigo (para un ligero enharinado del pollo que espesa la salsa), caldo de pollo, ajo picado, aceite de oliva, perejil fresco picado, sal y pimienta negra.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Spaghetti a la boloñesa",
    image: "/images/Fotos-menu/Spaghetti a la boloñesa.png",
    calories: 618,
    macros: { protein: 30, carbs: 60, fat: 18 },
    allergens: ["Gluten", "Lácteos"],
    ingredients: "Este plato está hecho con: Fideos tipo Spaghetti cocidos al dente, carne de res molida (magra), queso parmesano rallado (espolvoreado encima), mantequilla (para suavizar la salsa), caldo de carne (agua, huesos de res, cebolla, zanahoria, apio y sal), tomate riñón maduro picado, pasta de tomate, zanahoria picada en cubos pequeños, cebolla perla picada finamente, vino tinto (para la base de la salsa), ajo en pasta, aceite de oliva, orégano seco, hojas de laurel, sal, pimienta negra y hojas de albahaca fresca para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Spaghetti a la boloñesa de soya",
    image: "/images/Fotos-menu/Spaghetti a la boloñesa vegetariano.png",
    calories: 720,
    macros: { protein: 24, carbs: 77, fat: 25 },
    allergens: ["Gluten", "Lácteos", "Soya"],
    ingredients: "Este plato está hecho con: Fideos tipo Spaghetti cocidos al dente, carne de soya texturizada (Carve) hidratada y condimentada, queso parmesano rallado (espolvoreado encima), salsa de tomate casera (tomate riñón, cebolla perla, zanahoria rallada, apio), pasta de tomate, caldo de vegetales, mantequilla, vino tinto, salsa china (soya), ajo en pasta, aceite de oliva, orégano seco, laurel, una pizca de azúcar, sal, pimienta negra y hojas de albahaca fresca para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Carne mechada con papas",
    image: "/images/Fotos-menu/Carne mechada con papas.png",
    calories: 650,
    macros: { protein: 28, carbs: 50, fat: 35 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Carne de res (tipo falda o vacío) cocinada lentamente hasta deshacerse, desmechada en hebras finas y guisada en una salsa roja de tomate, cebolla, pimientos rojos en tiras y caldo de carne o verduras (que contiene la base de apio para el sabor), papas rústicas en gajos asadas al horno con piel, sazonadas con hierbas, pimentón, sal, pimienta y un toque de aceite vegetal.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Estofado de cerdo con arroz",
    image: "/images/Fotos-menu/Estofado de cerdo con arroz.png",
    calories: 549,
    macros: { protein: 28, carbs: 50, fat: 25 },
    allergens: ["Gluten", "Apio"],
    ingredients: "Este plato está hecho con: Trozos de carne de cerdo (cabecero o paleta) estofados a fuego lento, arroz blanco cocido, salsa base de tomate y caldo de res, cebolla, zanahoria, apio (base aromática del sofrito), harina de trigo (usada para sellar la carne y espesar el estofado), pasta de tomate, ajo en pasta, hoja de laurel, aceite vegetal, sal, pimienta negra y perejil fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Caponata siciliana",
    image: "/images/Fotos-menu/Caponata siciliana (vegetariano).png",
    calories: 491,
    macros: { protein: 12, carbs: 32, fat: 35 },
    allergens: ["Apio", "Frutos secos", "Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Clásica caponata siciliana, un estofado agridulce de verduras donde la protagonista es la berenjena frita en cubos, cocinada lentamente junto con trozos de apio fresco, cebolla y una salsa de tomate casera. Se enriquece con aceitunas verdes y alcaparras (que aportan acidez y sulfitos), y se termina con piñones enteros tostados (frutos secos) y hojas de albahaca fresca. Se sirve acompañada de una rebanada de pan rústico tostado crujiente (que contiene gluten).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  // MARTES
  {
    id: "mar-e1",
    name: "Ensalada de vainitas y zanahoria con chochos",
    image: "/images/Fotos-menu/Ensalada de Vainitas y Zanahoria con Chochos.png",
    calories: 65,
    macros: { protein: 4, carbs: 8, fat: 2 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada crujiente que combina bastones finos de zanahoria con vainitas cortadas al sesgo y blanqueadas. Gana frescura con plumas de cebolla perla (suavizada en agua helada) y se completa con el toque tradicional, nutritivo y lleno de textura de los chochos.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },
  {
    id: "mar-e2",
    name: "Cítricos y hojas",
    image: "/images/Fotos-menu/Citricos y Hojas.png",
    calories: 45,
    macros: { protein: 1, carbs: 9, fat: 0 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Ensalada ligera ideal para limpiar el paladar. Sobre una base de lechuga crespa fresca, se añaden láminas casi transparentes de rábano y apio picado fino para un extra de crocancia. El toque distintivo y dulce lo aportan los gajos de mandarina fresca.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-e1",
    name: "Ensalada de brócoli, pimiento y cebolla",
    image: "/images/Fotos-menu/Ensalada de Brócoli, Pimiento y cebolla.png",
    calories: 32,
    macros: { protein: 2, carbs: 6, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Mezcla colorida y llena de textura que destaca por sus floretes pequeños de brócoli cocidos al vapor hasta quedar al dente. Contrasta maravillosamente con el dulzor de las julianas de pimiento rojo y el toque sutil de acidez de la cebolla paiteña ligeramente curtida.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },
  {
    id: "mie-e2",
    name: "Espirales de zuquini y tomate",
    image: "/images/Fotos-menu/Espirales de Zuquini y Tomate.png",
    calories: 16,
    macros: { protein: 1, carbs: 3, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada divertida y ligera servida sobre una base suave de lechuga de seda. Destacan los fideos o espirales de zuquini fresco y crujiente, acompañados de la jugosidad y acidez perfecta de los cubos de tomate riñón sin semillas.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-e1",
    name: "Ensalada de col morada, pimiento y zanahoria",
    image: "/images/Fotos-menu/Ensalada de Col Morada, Pimiento y Zanahoria.png",
    calories: 32,
    macros: { protein: 1, carbs: 7, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada vibrante y muy crujiente donde la protagonista es la col morada picada muy finamente. Se complementa a la perfección con la dulzura natural de la zanahoria rallada y el frescor de los cubitos diminutos de pimiento verde.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },
  {
    id: "jue-e2",
    name: "Mix de espinaca con pimiento amarillo",
    image: "/images/Fotos-menu/Mix de Espinaca con Pimiento Amarrillo .png",
    calories: 38,
    macros: { protein: 1, carbs: 8, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada con mucha identidad y textura sobre una abundante base verde de hojas de espinaca decorado con pequeños cortes cuadrados de pimientos amarillos.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-e1",
    name: "Ensalada de rábano, zanahoria y lechuga",
    image: "/images/Fotos-menu/Ensalada de Rábano, Zanahoria y Lechuga.png",
    calories: 20,
    macros: { protein: 1, carbs: 4, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada sencilla, voluminosa y extremadamente crujiente. Utiliza una base abundante de lechuga crespa, acompañada de bastones de zanahoria que aportan un ligero dulzor y medias lunas de rábano para un final fresco y sutilmente picante.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },
  {
    id: "vie-e2",
    name: "Mix de palmito y acelga con tomate cherry",
    image: "/images/Fotos-menu/Mix de Palmito y Acelga con Tomate Cherry.png",
    calories: 24,
    macros: { protein: 1, carbs: 5, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una combinación suave y elegante con una base nutritiva de hojas jóvenes de acelga (crudas o blanqueadas rápidamente). Incorpora jugosas mitades de tomate cherry y rodajas tiernas de palmito, creando un contraste de texturas muy agradable al paladar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },

  /* ── POSTRES (toda la semana) ───────────────────────────────── */
  {
    id: "pos-1",
    name: "Galletas con chips de chocolate",
    image: "/images/Fotos-menu/Galletas con Chips de Chocolate.png",
    calories: 380,
    macros: { protein: 4, carbs: 50, fat: 18 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Soya"],
    ingredients: "Este plato está hecho con: Galletas de estilo clásico con bordes crujientes y un centro suave, textura lograda gracias a la mezcla de azúcares y el toque secreto de maicena. La masa rica en mantequilla (lácteos) envuelve generosos chips de chocolate semiamargo y avena. Están elaboradas con harina de trigo (fuente de gluten) y huevo fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Brownie choco naranja",
    image: "/images/Fotos-menu/Brownie choco naranja.png",
    calories: 350,
    macros: { protein: 4, carbs: 45, fat: 18 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Soya"],
    ingredients: "Este plato está hecho con: Una exquisita variación del brownie tradicional que fusiona la intensidad del chocolate oscuro con el aroma cítrico y vibrante de la naranja (ralladura o esencia natural). Mantiene su textura densa y húmeda característica, elaborada con una base de harina de trigo (que aporta gluten), huevos y mantequilla (lácteos). El chocolate utilizado en la mezcla contiene lecitina de soja como emulsionante, logrando una integración perfecta de sabores.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
