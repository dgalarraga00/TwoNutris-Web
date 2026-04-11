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

export const DAYS: { key: DayKey; label: string }[] = [
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
    name: "Pollo en salsa piri-piri con arroz",
    image: "/images/Fotos-menu/Pollo-en-salsa-piri-piri-con-arroz.png", calories: 654,
    macros: { protein: 40, carbs: 57, fat: 30 },
    allergens: ["Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Cuarto de pollo trasero asado a la parrilla con piel dorada y ahumada, bañado generosamente en una salsa Piri-Piri vibrante y picante (elaborada con chiles rojos, pimentón, aceite, ajo y una base ácida de limón o vinagre que aporta los sulfitos). Se sirve acompañado de arroz blanco para equilibrar el picor, decorado con rodajas de chile fresco y hojas de cilantro. La salsa puede contener espesantes o condimentos que aportan gluten.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Cerdo al limón con papas al horno",
    image: "/images/Fotos-menu/Cerdo-al-limon-con-papas-al-horno.png", calories: 514,
    macros: { protein: 40, carbs: 48, fat: 18 },
    allergens: ["Huevo", "Gluten", "Sulfitos"],
    ingredients: "Este plato está hecho con: Medallón de lomo de cerdo tierno y jugoso, sellado a la plancha y bañado en una salsa aterciopelada de limón (elaborada con jugo de limón natural que aporta sulfitos, caldo, y ligada con yema de huevo y un toque de harina de trigo para lograr su textura cremosa). Se sirve decorado con rodajas finas y ralladura de limón confitado. Acompañado de papas rústicas en gajos asadas al horno con piel, sazonadas con aceite, sal marina, pimienta y romero fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Curry de tofu con verduras y arroz integral",
    image: "/images/Fotos-menu/Curry-de-verduras-y-tofu.png", calories: 673,
    macros: { protein: 15, carbs: 52, fat: 45 },
    allergens: ["Soya", "Mostaza"],
    ingredients: "Este plato está hecho con: Cubos de tofu firme dorados a la plancha (fuente de proteína vegetal y soya), cocinados a fuego lento en una salsa de curry cremosa y aromática (elaborada con leche de coco, especias, cúrcuma que aportan intensidad). Se acompaña de una variedad de verduras frescas al dente: flores de brócoli, zanahorias en rodajas, vainitas y pimientos rojos. Se sirve con arroz integral suelto, decorado con rodajas de chile fresco, cilantro y una cuña de lima para añadir acidez.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Churrasco de pollo con camote al horno",
    image: "/images/Fotos-menu/Churrasco-de-pollo-con-arroz.jpeg", calories: 650,
    macros: { protein: 35, carbs: 55, fat: 30 },
    allergens: ["Gluten", "Huevo", "Mostaza"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo a la plancha, arroz blanco cocido, camote al horno tipo bastón, huevo frito, salsa inglesa (en el marinado), mostaza, ajo en pasta, aceite vegetal, comino, pimentón dulce (paprika), sal, pimienta negra y perejil fresco picado para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Arroz meloso de carne",
    image: "/images/Fotos-menu/Arroz-meloso-de-carne.webp", calories: 710,
    macros: { protein: 43, carbs: 58, fat: 30 },
    allergens: ["Sulfitos", "Lácteos"],
    ingredients: "Este plato está hecho con: Arroz de grano corto cocinado en su punto meloso (cremoso pero con el grano entero), trozos de carne de res tierna estofada, sofrito base de cebolla, ajo y pimientos rojos, rodajas de zanahoria tiernas, caldo de carne oscuro y sabroso, un toque de vino tinto o blanco (que aporta los sulfitos y profundidad al sabor), finalizado con mantequilla o queso rallado (para dar brillo y cremosidad extra), aceite de oliva, sal, pimienta negra y perejil fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Tajine de garbanzos con arroz",
    image: "/images/Fotos-menu/Tajine-de-garbanzos-con-arroz.png", calories: 607,
    macros: { protein: 20, carbs: 93, fat: 18 },
    allergens: ["Sulfitos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Garbanzos tiernos cocinados a fuego lento con especias marroquíes (comino, cúrcuma, canela, pimentón), arroz blanco cocido, zanahorias en rodajas suaves, papas en cubos que absorben la salsa, base de tomate y cebolla sofrita, frutos secos (posiblemente almendras molidas o picadas en la salsa para dar textura), frutas deshidratadas (como pasas u orejones, que aportan dulzor y sulfitos), caldo de vegetales, aceite de oliva, ajo, sal, pimienta y perejil o cilantro fresco picado por encima.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Sango de pescado con tortilla de yuca",
    image: "/images/Fotos-menu/Sango-de-pescado-con-tortilla-de-yuca.png", calories: 658,
    macros: { protein: 28, carbs: 87, fat: 22 },
    allergens: ["Pescado", "Maní", "Gluten"],
    ingredients: "Este plato está hecho con: Cubos de pescado blanco fresco y tierno, cocinados a fuego lento en un sango tradicional (una salsa espesa y reconfortante a base de plátano verde majado, refrito de vegetales y abundante pasta de maní que le da su carácter cremoso y sabor único). Se sirve acompañado de tortillas de yuca doradas a la plancha (que pueden contener un poco de harina de trigo para dar consistencia), decorado con maní tostado crujiente por encima, cilantro fresco y una mitad de limón para realzar los sabores.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Pollo asado a la peruana con papas",
    image: "/images/Fotos-menu/Pollo-asado-a-la-peruana-con-papas.png", calories: 780,
    macros: { protein: 56, carbs: 59, fat: 33 },
    allergens: ["Soya", "Gluten", "Sulfitos", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Cuarto de pollo asado al estilo peruano, con piel crujiente y marinado en una mezcla tradicional de especias, vinagre y salsa de soya (que aporta color intenso, sabor umami, soya y gluten). Se sirve acompañado de papas fritas gruesas y doradas, y una selección de salsas cremosas típicas (ajíes y mayonesas caseras que contienen huevo y lácteos para su textura).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Pimiento relleno de queso y verduras",
    image: "/images/Fotos-menu/Pimientos-rellenos-de-queso-y-verduras.png", calories: 460,
    macros: { protein: 18, carbs: 35, fat: 28 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Pimientos morrones frescos asados al horno, rellenos de una mezcla jugosa de vegetales salteados (que incluye granos de maíz dulce, cubos de calabacín tierno, cebolla y trozos de pimiento), ligados con un toque de salsa de tomate o crema, cubiertos con una generosa capa de queso mozzarella (u otro queso fundente) gratinado hasta dorar. Se termina con un toque de aceite de oliva, pimienta negra recién molida y hojas de albahaca fresca.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Carne en salsa biryani con arroz",
    image: "/images/Fotos-menu/Carne-en-salsa-biryani-con-arroz.png", calories: 589,
    macros: { protein: 50, carbs: 50, fat: 21 },
    allergens: ["Lácteos", "Frutos secos", "Mostaza"],
    ingredients: "Este plato está hecho con: Trozos de carne de res tierna cocinados en una \"Salsa Biryani\" aromática y especiada (una base rica de tomate, especias y yogur o crema que aporta los lácteos y suavidad). Se sirve acompañada de arroz aromático, coronado con cebolla frita crujiente para dar textura, hojas de cilantro/menta fresca y nueces tostadas enteras (frutos secos).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Tortilla española con verduras",
    image: "/images/Fotos-menu/Tortilla-espanola-con-verduras.png", calories: 613,
    macros: { protein: 40, carbs: 66, fat: 21 },
    allergens: ["Huevo", "Gluten"],
    ingredients: "Este plato está hecho con: Clásica tortilla española de perfil alto y esponjoso, elaborada con abundantes huevos frescos batidos y rellena de capas de papas confitadas tiernas. Se enriquece con un sofrito de verduras (pimientos rojos, calabacín verde y cebolla) integradas en la mezcla. La preparación incluye un toque de harina de trigo (o levadura) para asegurar su estructura y altura (aportando el gluten), cocinada con aceite de oliva y decorada con perejil fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Milanesa de berenjena con arroz",
    image: "/images/Fotos-menu/Milanesa-de-berenjena-con-arroz.png", calories: 540,
    macros: { protein: 16, carbs: 56, fat: 28 },
    allergens: ["Gluten", "Lácteos", "Huevo"],
    ingredients: "Este plato está hecho con: Rodaja gruesa y tierna de berenjena, empanizada siguiendo el proceso clásico: pasada por harina de trigo, luego por huevo batido (puedes sazonarlo con ajo y perejil, y a veces se le añade un chorrito de leche), y finalmente por pan rallado o panko para una costra crujiente al freír. Se sirve con arroz blanco cocido al vapor, decorada con perejil fresco picado y una rodaja de limón.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Pollo en salsa satay con verduras y arroz",
    image: "/images/Fotos-menu/Pollo-en-salsa-satay-con-verduras-y-arroz.png", calories: 700,
    macros: { protein: 29, carbs: 70, fat: 34 },
    allergens: ["Maní", "Soya"],
    ingredients: "Este plato está hecho con: Pechuga de pollo jugosa cortada en láminas, bañada en una auténtica salsa Satay (una crema rica y aromática a base de maní tostado, leche de coco, especias y un toque de salsa de soya para profundidad). Se acompaña de una mezcla de verduras frescas salteadas al dente (vainitas chinas o tirabeques, tiras de pimiento rojo y zanahoria) y arroz blanco aromático. Se sirve decorado con maní troceado crujiente, rodajas de chile rojo fresco, cilantro y una cuña de limón para exprimir al gusto.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Chuleta en salsa agridulce con quinoa",
    image: "/images/Fotos-menu/Chuleta-en-salsa-agridulce.webp", calories: 524,
    macros: { protein: 35, carbs: 51, fat: 20 },
    allergens: ["Soya", "Gluten", "Sulfitos", "Apio"],
    ingredients: "Este plato está hecho con: Chuleta de cerdo (con hueso) a la plancha, mix de quinoa, trozos de piña en almíbar, pimiento rojo y verde en tiras, cebolla perla en pluma, salsa agridulce (pasta de tomate, vinagre, azúcar, jugo de piña, salsa china/soya, salsa inglesa), caldo de carne (agua, huesos, cebolla, zanahoria, apio y sal), harina de trigo (para espesar la salsa), ajo en pasta, jengibre rallado, aceite vegetal, semillas de ajonjolí (decoración), cebollín picado, sal y pimienta.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Caponata siciliana",
    image: "/images/Fotos-menu/Caponata-siciliana-vegetariano.png", calories: 491,
    macros: { protein: 12, carbs: 32, fat: 35 },
    allergens: ["Apio", "Frutos secos", "Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Clásica caponata siciliana, un estofado agridulce de verduras donde la protagonista es la berenjena frita en cubos, cocinada lentamente junto con trozos de apio fresco, cebolla y una salsa de tomate casera. Se enriquece con aceitunas verdes y alcaparras (que aportan acidez y sulfitos), y se termina con piñones enteros tostados (frutos secos) y hojas de albahaca fresca. Se sirve acompañada de una rebanada de pan rústico tostado crujiente (que contiene gluten).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  { id: "lun-e1", name: "Ensalada de Vainitas y Zanahoria con Chochos", image: "/images/Fotos-menu/Ensalada-de-Vainitas-y-Zanahoria-con-Chochos.png", calories: 65, macros: { protein: 4, carbs: 8, fat: 2 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada crujiente que combina bastones finos de zanahoria con vainitas cortadas al sesgo y blanqueadas. Gana frescura con plumas de cebolla perla (suavizada en agua helada) y se completa con el toque tradicional, nutritivo y lleno de textura de los chochos.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "lunes" },
  { id: "lun-e2", name: "Mix de Espinaca, Pepino y Lechuga", image: "/images/Fotos-menu/Mix-de-Espinaca-Pepino-y-lechuga.png", calories: 16, macros: { protein: 1, carbs: 3, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada ligera y refrescante con una base de hojas de espinaca (baby o finamente troceadas). Aporta mucha hidratación gracias a las medias lunas de pepino (conservando su piel) y un toque sutilmente picante con láminas muy finas de rábano.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "lunes" },

  { id: "mar-e1", name: "Ensalada de Brócoli, Pimiento y Cebolla", image: "/images/Fotos-menu/Ensalada-de-Brocoli-Pimiento-y-cebolla.png", calories: 32, macros: { protein: 2, carbs: 6, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Mezcla colorida y llena de textura que destaca por sus floretes pequeños de brócoli cocidos al vapor hasta quedar al dente. Contrasta maravillosamente con el dulzor de las julianas de pimiento rojo y el toque sutil de acidez de la cebolla paiteña ligeramente curtida.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "martes" },
  { id: "mar-e2", name: "Espirales de Zuquini y Tomate", image: "/images/Fotos-menu/Espirales-de-Zuquini-y-Tomate.png", calories: 16, macros: { protein: 1, carbs: 3, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada divertida y ligera servida sobre una base suave de lechuga de seda. Destacan los fideos o espirales de zuquini fresco y crujiente, acompañados de la jugosidad y acidez perfecta de los cubos de tomate riñón sin semillas.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "martes" },

  { id: "mie-e1", name: "Ensalada de Col Morada, Pimiento y Zanahoria", image: "/images/Fotos-menu/Ensalada-de-Col-Morada-Pimiento-y-Zanahoria.png", calories: 32, macros: { protein: 1, carbs: 7, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada vibrante y muy crujiente donde la protagonista es la col morada picada muy finamente. Se complementa a la perfección con la dulzura natural de la zanahoria rallada y el frescor de los cubitos diminutos de pimiento verde.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "miercoles" },
  { id: "mie-e2", name: "Mix de Palmito y Acelga con Tomate Cherry", image: "/images/Fotos-menu/Mix-de-Palmito-y-Acelga-con-Tomate-Cherry.png", calories: 24, macros: { protein: 1, carbs: 5, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Una combinación suave y elegante con una base nutritiva de hojas jóvenes de acelga (crudas o blanqueadas rápidamente). Incorpora jugosas mitades de tomate cherry y rodajas tiernas de palmito, creando un contraste de texturas muy agradable al paladar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "miercoles" },

  { id: "jue-e1", name: "Ensalada de Zapallo Asado y Rúcula con Arvejas", image: "/images/Fotos-menu/Ensalada-de-Zapallo-Asado-y-Rucula-con-Arvejas.png", calories: 55, macros: { protein: 2, carbs: 10, fat: 1 }, allergens: ["Leguminosas"], ingredients: "Este plato está hecho con: Ensalada de contrastes que mezcla el sabor intenso y ligeramente picante de la rúcula con dados de zapallo asado al horno, que aportan un dulzor profundo. Se completa con la frescura de la cebolla blanca finamente picada y el toque tierno de las arvejas cocidas.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "jueves" },
  { id: "jue-e2", name: "Ensalada de Coliflor, Pepino y Tomate Riñón", image: "/images/Fotos-menu/Ensalada-de-Coliflor-Pepino-y-Tomate-Rinon.png", calories: 22, macros: { protein: 1, carbs: 4, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Opción refrescante y con muy buena estructura a base de floretes de coliflor blanqueados. Gana frescura y muchísima hidratación al mezclarse con jugosas lunas de tomate riñón y cubos de pepino sin piel.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "jueves" },

  { id: "vie-e1", name: "Ensalada de Rábano, Zanahoria y Lechuga", image: "/images/Fotos-menu/Ensalada-de-Rabano-Zanahoria-y-Lechuga.png", calories: 20, macros: { protein: 1, carbs: 4, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada sencilla, voluminosa y extremadamente crujiente. Utiliza una base abundante de lechuga crespa, acompañada de bastones de zanahoria que aportan un ligero dulzor y medias lunas de rábano para un final fresco y sutilmente picante.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "viernes" },
  { id: "vie-e2", name: "Mix de Espinaca con Pimiento Amarillo", image: "/images/Fotos-menu/Mix-de-Espinaca-con-Pimiento-Amarrillo.png", calories: 38, macros: { protein: 1, carbs: 8, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada con mucha identidad y textura sobre una abundante base verde de hojas de espinaca decorado con pequeños cortes cuadrados de pimientos amarillos.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "viernes" },

  /* ── POSTRES (toda la semana) ───────────────────────────────── */
  {
    id: "pos-3",
    name: "Mix de Frutas Frescas (Del día)",
    image: "/images/Fotos-menu/Mix-de-Frutas-Frescas.png", calories: 70,
    macros: { protein: 0, carbs: 15, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Selección del Chef según temporada. Puede incluir: Melón, Papaya, Piña, Sandía.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-1",
    name: "Galletas con Chips de Chocolate",
    image: "/images/Fotos-menu/Galletas-con-Chips-de-Chocolate.png", calories: 380,
    macros: { protein: 4, carbs: 50, fat: 18 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Soya"],
    ingredients: "Este plato está hecho con: Galletas de estilo clásico con bordes crujientes y un centro suave, textura lograda gracias a la mezcla de azúcares y el toque secreto de maicena. La masa rica en mantequilla (lácteos) envuelve generosos chips de chocolate semiamargo y avena. Están elaboradas con harina de trigo (fuente de gluten) y huevo fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Pastel de Naranja",
    image: "/images/Fotos-menu/Pastel-de-Yogurt.png", calories: 306,
    macros: { protein: 6, carbs: 40, fat: 15 },
    allergens: ["Gluten", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Un bizcocho casero de miga suave, esponjosa y muy aromática. Su carácter distintivo y frescura se logran gracias a la incorporación generosa de jugo natural y ralladura de naranja, que aportan un sabor cítrico vibrante. La masa base se prepara con harina de trigo (fuente de gluten), huevos frescos, azúcar y aceite (o mantequilla), creando un equilibrio perfecto entre dulzor y acidez.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
