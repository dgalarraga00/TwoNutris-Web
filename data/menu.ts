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
    name: "Pollo a la pepitoria con papas",
    image: "/images/Fotos-menu/Pollo a la pepitoria con papas.png",
    calories: 620,
    macros: { protein: 28, carbs: 55, fat: 32 },
    allergens: ["Frutos secos", "Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Muslo y contramuslo de pollo guisados lentamente hasta quedar tiernos, cubiertos con la tradicional salsa pepitoria: una salsa espesa y aromática elaborada con una picada de almendras (frutos secos), yema de huevo cocido, azafrán, ajo y un majado de pan frito (que aporta el gluten y textura). Se sirve decorado con huevo duro picado y láminas de almendras tostadas por encima, acompañado de dados de papa frita crujiente y perejil fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Lomo de cerdo con verduras y arroz",
    image: "/images/Fotos-menu/Lomo de cerdo con verduras y arroz.webp",
    calories: 455,
    macros: { protein: 28, carbs: 52, fat: 15 },
    allergens: ["Soya", "Apio"],
    ingredients: "Este plato está hecho con: Lomo de cerdo magro cortado en medallones sellados y jugosos, arroz blanco cocido al vapor, mezcla de vegetales salteados (pimientos rojos y verdes, cebolla perla, brócoli en ramilletes), aceite vegetal (girasol o maíz), salsa de soya (usada en el adobo o para sazonar las verduras), caldo de vegetales (que contiene apio en su base), ajo y jengibre en pasta, sal y pimienta negra.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Pimiento relleno de queso y verduras",
    image: "/images/Fotos-menu/Pimientos rellenos de queso y verduras (Vegetariano).png",
    calories: 460,
    macros: { protein: 18, carbs: 35, fat: 28 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Pimientos morrones frescos asados al horno, rellenos de una mezcla jugosa de vegetales salteados (que incluye granos de maíz dulce, cebolla y trozos de pimiento), ligados con un toque de salsa de tomate o crema, cubiertos con una generosa capa de queso mozzarella (u otro queso fundente) gratinado hasta dorar. Se termina con un toque de aceite de oliva, pimienta negra recién molida y hojas de albahaca fresca.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Carne en salsa biryani con arroz",
    image: "/images/Fotos-menu/Carne en salsa biryani con arroz.png",
    calories: 501,
    macros: { protein: 28, carbs: 50, fat: 21 },
    allergens: ["Lácteos", "Frutos secos", "Mostaza"],
    ingredients: "Este plato está hecho con: Trozos de carne de res cocinados en una \"Salsa Biryani\" aromática y especiada (una base rica de tomate, especias y yogur o crema que aporta los lácteos y suavidad). Se sirve acompañada de arroz aromático, coronado con cebolla frita crujiente para dar textura, hojas de cilantro/menta fresca y nueces tostadas enteras (frutos secos).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Pechuga de pollo en salsa de miel y mostaza con arroz",
    image: "/images/Fotos-menu/Pechuga de pollo en salsa de miel y mostaza con arroz.png",
    calories: 624,
    macros: { protein: 28, carbs: 65, fat: 28 },
    allergens: ["Mostaza", "Lácteos", "Gluten"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo jugosa, sellada a la plancha para mantener sus jugos, bañada generosamente con una salsa cremosa de miel y mostaza (elaborada con mostaza en grano o antigua, miel de abeja, crema de leche y un toque de mantequilla), ligada suavemente con harina de trigo (que aporta el gluten y la textura aterciopelada), servida junto a una porción de arroz blanco graneado, aceite vegetal, sal, pimienta negra y perejil fresco picado para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Curry de garbanzos con arroz",
    image: "/images/Fotos-menu/Curry de garbanzos con arroz.png",
    calories: 610,
    macros: { protein: 22, carbs: 90, fat: 18 },
    allergens: ["Mostaza", "Gluten", "Lácteos"],
    ingredients: "Este plato está hecho con: Garbanzos cocidos en salsa curry, arroz blanco de grano largo (tipo basmati), crema de leche (un toque para suavizar y decorar), caldo de vegetales, harina de trigo (para el espesor de la salsa), semillas de mostaza (tostadas en el aderezo), cebolla perla picada, tomate riñón, pasta de tomate, ajo en pasta, jengibre fresco rallado, cúrcuma, comino, aceite vegetal, sal, pimienta, hojas de cilantro fresco y una rodaja de limón.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Fritada de cerdo con tortilla de papa",
    image: "/images/Fotos-menu/Fritada de cerdo con tortilla de papa.webp",
    calories: 490,
    macros: { protein: 28, carbs: 45, fat: 22 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Trozos de lomo de cerdo cocinados lentamente en sus propios jugos y sellados hasta obtener ese dorado característico, acompañados de tortillas de papa artesanales (llapingachos) doradas a la plancha. Se sirve con maduro horneado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Pollo cajún con arroz",
    image: "/images/Fotos-menu/Pollo cajun con arroz.webp",
    calories: 452,
    macros: { protein: 28, carbs: 44, fat: 20 },
    allergens: ["Apio", "Mostaza"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo rebozada en una mezcla intensa de especias Cajún (pimentón, ajo en polvo, cebolla en polvo, pimienta negra, pimienta de cayena, orégano, tomillo y mostaza molida), sellada a la plancha para crear una costra sabrosa, arroz blanco cocido al vapor, caldo de pollo o vegetales (que aporta el alérgeno apio en la base), aceite vegetal, sal y abundante cebollín (cebolla verde) fresco picado por encima para refrescar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Ensalada mix de espinaca con queso y papas",
    image: "/images/Fotos-menu/Ensalada mix de espinaca con queso y papas.png",
    calories: 389,
    macros: { protein: 15, carbs: 41, fat: 20 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Mix de hojas verdes (espinaca y rúcula), papas chauchas cocinadas con cáscara (tipo cocktail), queso fresco desmenuzado, nueces troceadas, aros de cebolla paiteña roja, aderezo de vinagreta (aceite de oliva, vinagre balsámico, sal y pimienta negra).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Albóndigas de pollo en salsa suprema con papas al horno",
    image: "/images/Fotos-menu/Albondigas de pollo con salsa suprema con papas al horno.webp",
    calories: 562,
    macros: { protein: 28, carbs: 54, fat: 26 },
    allergens: ["Gluten", "Lácteos", "Huevo", "Apio"],
    ingredients: "Este plato está hecho con: Jugosas albóndigas artesanales de pechuga de pollo (mezcladas con cebolla perla, ajo y hierbas frescas), cocinadas a fuego lento dentro de una Salsa Suprema clásica (velouté de fondo de ave enriquecida con crema de leche, un toque de mantequilla y champiñones picados finamente para dar profundidad). Se sirve acompañado de papas chauchas o rústicas horneadas con piel, romero y pimentón, finalizado con perejil fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Lenteja con chorizo con arroz",
    image: "/images/Fotos-menu/Lenteja con chorizo con arroz.png",
    calories: 764,
    macros: { protein: 50, carbs: 71, fat: 31 },
    allergens: ["Sulfitos", "Lácteos"],
    ingredients: "Este plato está hecho con: Lentejas guisadas a fuego lento hasta quedar tiernas, rodajas de chorizo curado o ahumado (que aporta sabor intenso, color y sulfitos como conservante), trozos de papa y zanahoria cocidos en el mismo caldo, sofrito base de cebolla, ajo y tomate, arroz blanco de guarnición, caldo de carne o verduras, un toque de mantequilla (para dar brillo final o en el arroz, aportando lácteos), pimentón dulce, hoja de laurel, sal y perejil fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Dhal de lentejas con arroz aromático",
    image: "/images/Fotos-menu/Dhal de lentejas con arroz.png",
    calories: 526,
    macros: { protein: 20, carbs: 56, fat: 28 },
    allergens: ["Lácteos", "Mostaza"],
    ingredients: "Este plato está hecho con: Guiso de lentejas amarillas deshechas y cremosas (cocinadas con cúrcuma, jengibre y especias), arroz de grano largo suelto cocinado con cardamomo y clavo de olor, coronado con una cucharada de yogur natural o crema agria (que aporta los lácteos y frescura), terminado con un sofrito de aceite caliente con chiles rojos secos y semillas de mostaza negra (tarka), y abundante cilantro fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Pescado empanizado en salsa tártara con yuca al horno",
    image: "/images/Fotos-menu/Pescado empanizado en salsa tartara con yuca al horno.webp",
    calories: 550,
    macros: { protein: 28, carbs: 60, fat: 22 },
    allergens: ["Pescado", "Gluten", "Huevo", "Mostaza"],
    ingredients: "Este plato está hecho con: Filete de pescado blanco empanizado y dorado, bastones de yuca amarilla horneados (crocantes por fuera, suaves por dentro), salsa tártara clásica (mayonesa, pepinillos encurtidos picados, cebolla perla, alcaparras, limón y mostaza), harina de trigo (para el rebozado), huevo batido, pan rallado (apanadura), aceite vegetal, eneldo fresco (decoración y aroma), sal, pimienta negra y una rodaja de limón.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Pollo al horno en las finas hierbas con papas",
    image: "/images/Fotos-menu/Pollo al horno en las finas hierbas con papas.webp",
    calories: 607,
    macros: { protein: 28, carbs: 52, fat: 27 },
    allergens: [],
    ingredients: "Este plato está hecho con: Cuarto trasero de pollo (pierna y muslo) marinado y asado, papas cholas rústicas (con cáscara) cortadas en gajos, mezcla de finas hierbas secas y frescas (romero, tomillo, orégano), aceite de oliva virgen extra, ajo natural picado, jugo de limón (para el marinado), pimentón dulce (paprika) para el color, sal marina y pimienta negra recién molida.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Stroganoff de champiñones con puré de papa",
    image: "/images/Fotos-menu/Stroganoff de champiñones con puré de papa.webp",
    calories: 470,
    macros: { protein: 10, carbs: 50, fat: 20 },
    allergens: ["Lácteos", "Sulfitos", "Soya"],
    ingredients: "Este plato está hecho con: Champiñones frescos laminados (salteados en su jugo), puré de papas cholas cremoso, crema de leche (base de la salsa), mantequilla (en la salsa y servida sobre el puré), caldo de vegetales (agua, cebolla, zanahoria, apio, sal), cebolla perla picada finamente, salsa china (soya, para dar profundidad y color a la salsa), pasta de tomate, vino blanco, ajo en pasta, aceite de oliva, pimentón dulce (paprika), sal, pimienta negra y perejil fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  // LUNES
  { id: "lun-e1", name: "Ensalada fresca", image: "/images/Fotos-menu/Ensalada Fresca.jpeg", calories: 20, macros: { protein: 0, carbs: 4, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada crujiente que combina lechuga común (o crespa), tomate cherry, pepinillo y zanahoria.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "lunes" },
  { id: "lun-e2", name: "Ensalada verde", image: "/images/Fotos-menu/Ensalda verde.jpeg", calories: 15, macros: { protein: 1, carbs: 3, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada ligera y refrescante con una base de lechuga común, pimiento verde, apio, pepinillo, pera (o manzana verde).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "lunes" },

  // MARTES
  { id: "mar-e1", name: "Ensalada de remolacha", image: "/images/Fotos-menu/Ensalada de remolacha.jpeg", calories: 30, macros: { protein: 2, carbs: 6, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Mezcla colorida y llena de textura que lleva remolacha, zanahoria, cebolla blanca, culantro y limón.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "martes" },
  { id: "mar-e2", name: "Ensalada de granos", image: "/images/Fotos-menu/Ensalada de granos.jpeg", calories: 100, macros: { protein: 6, carbs: 20, fat: 2 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada divertida que lleva choclo tierno, frejol tierno, arvejas, hojas de apio y tomate riñón.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "martes" },

  // MIÉRCOLES
  { id: "mie-e1", name: "Ensalada tricolor", image: "/images/Fotos-menu/Ensalada Tricolor .jpeg", calories: 32, macros: { protein: 1, carbs: 7, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada vibrante y crujiente en una cama de pimientos de 3 colores (rojo, amarillo y verde), tomate cherry, chayota, cebollín y perejil.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "miercoles" },
  { id: "mie-e2", name: "Pico de gallo", image: "/images/Fotos-menu/Pico de Gallo.jpeg", calories: 24, macros: { protein: 1, carbs: 5, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Una combinación deliciosa y nutritiva de tomate riñón en cubos pequeños, cebolla perla, pintado con pimiento verde y culantro.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "miercoles" },

  // JUEVES
  { id: "jue-e1", name: "Ensalada de quinoa", image: "/images/Fotos-menu/Ensalada de quinoa.jpeg", calories: 57, macros: { protein: 2, carbs: 10, fat: 1 }, allergens: ["Leguminosas"], ingredients: "Este plato está hecho con: Ensalada de contrastes con una cama de quinoa, espinaca, tomate cherry (o riñón) y pepino, pintado con zanahoria y cebolla perla.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "jueves" },
  { id: "jue-e2", name: "Ensalada de brócoli", image: "/images/Fotos-menu/Ensalada de brócoli.jpeg", calories: 22, macros: { protein: 1, carbs: 4, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Opción con muy buena estructura a base de brócoli blanqueados. Gana frescura al mezclarse con cebolla paiteña en juliana, choclo dulce y toques de culantro.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "jueves" },

  // VIERNES
  { id: "vie-e1", name: "Ensalada parmesana", image: "/images/Fotos-menu/Ensalada Parmesana.jpeg", calories: 200, macros: { protein: 4, carbs: 10, fat: 16 }, allergens: ["Lácteos"], ingredients: "Este plato está hecho con: Ensalada voluminosa y extremadamente crujiente. Utiliza una base abundante de lechuga crespa y común, acompañada de zanahoria rallada que aportan un ligero dulzor y un toque sutil de queso parmesano.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "viernes" },
  { id: "vie-e2", name: "La sencilla", image: "/images/Fotos-menu/La sencilla.jpeg", calories: 38, macros: { protein: 1, carbs: 8, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada con mucha identidad y textura sobre una abundante base verde de hojas de lechuga, un toque crocante con las rodajas de pepinillo, y para terminar tomate cherry (o riñón) con un toque de pimienta negra.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "viernes" },

  /* ── POSTRES (toda la semana) ───────────────────────────────── */
  {
    id: "pos-1",
    name: "Mix de Frutas Frescas (Del día)",
    image: "/images/Fotos-menu/Mix de Frutas Frescas (Solo Sandía).png",
    calories: 70,
    macros: { protein: 0, carbs: 15, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Selección del Chef según temporada (Puede incluir: Melón, Papaya, Piña, Sandía).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Mini Churros",
    image: "/images/Fotos-menu/Mini Churros.webp",
    calories: 364,
    macros: { protein: 4, carbs: 42, fat: 20 },
    allergens: ["Gluten"],
    ingredients: "Este plato está hecho con: Mini churros artesanales elaborados con nuestra receta tradicional, fritos hasta obtener una textura perfectamente crocante por fuera y tierna por dentro. Se sirven espolvoreados con azúcar blanca y canela, resaltando su aroma y sabor clásico. Ideal para disfrutar de un postre tradicional con la porción justa.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-3",
    name: "Galletas con Chips de Chocolate",
    image: "/images/Fotos-menu/Galletas con Chips de Chocolate.png",
    calories: 380,
    macros: { protein: 4, carbs: 50, fat: 18 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Soya"],
    ingredients: "Este plato está hecho con: Galletas de estilo clásico con bordes crujientes y un centro suave, textura lograda gracias a la mezcla de azúcares y el toque secreto de maicena. La masa rica en mantequilla (lácteos) envuelve generosos chips de chocolate semiamargo y avena. Están elaboradas con harina de trigo (fuente de gluten) y huevo fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
