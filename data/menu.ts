export type DayKey = "lunes" | "martes" | "miercoles" | "jueves" | "viernes";
export type CategoryKey = "principal" | "ensalada" | "postre";

export interface MenuItem {
  id: string;
  name: string;
  image: string;
  weight: number;
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
    image: "/images/Fotos-menu/Pollo-en-salsa-piri-piri-con-arroz.png",
    weight: 400, calories: 654,
    macros: { protein: 40, carbs: 57, fat: 30 },
    allergens: ["Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Cuarto de pollo trasero asado a la parrilla con piel dorada y ahumada, bañado generosamente en una salsa Piri-Piri vibrante y picante (elaborada con chiles rojos, pimentón, aceite, ajo y una base ácida de limón o vinagre que aporta los sulfitos). Se sirve acompañado de arroz blanco para equilibrar el picor, decorado con rodajas de chile fresco y hojas de cilantro. La salsa puede contener espesantes o condimentos que aportan gluten.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Cerdo al limón con papas al horno",
    image: "/images/Fotos-menu/Cerdo-al-limon-con-papas-al-horno.png",
    weight: 420, calories: 514,
    macros: { protein: 40, carbs: 48, fat: 18 },
    allergens: ["Huevo", "Gluten", "Sulfitos"],
    ingredients: "Este plato está hecho con: Medallón de lomo de cerdo tierno y jugoso, sellado a la plancha y bañado en una salsa aterciopelada de limón (elaborada con jugo de limón natural que aporta sulfitos, caldo, y ligada con yema de huevo y un toque de harina de trigo para lograr su textura cremosa). Se sirve decorado con rodajas finas y ralladura de limón confitado. Acompañado de papas rústicas en gajos asadas al horno con piel, sazonadas con aceite, sal marina, pimienta y romero fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Curry de tofu con verduras y arroz integral",
    image: "/images/Fotos-menu/Curry-de-verduras-y-tofu.png",
    weight: 400, calories: 673,
    macros: { protein: 15, carbs: 52, fat: 45 },
    allergens: ["Soya", "Mostaza"],
    ingredients: "Este plato está hecho con: Cubos de tofu firme dorados a la plancha (fuente de proteína vegetal y soya), cocinados a fuego lento en una salsa de curry cremosa y aromática (elaborada con leche de coco, especias, cúrcuma que aportan intensidad). Se acompaña de una variedad de verduras frescas al dente: flores de brócoli, zanahorias en rodajas, vainitas y pimientos rojos. Se sirve con arroz integral suelto, decorado con rodajas de chile fresco, cilantro y una cuña de lima para añadir acidez.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Churrasco de pollo con camote al horno",
    image: "/images/Fotos-menu/Churrasco-de-pollo-con-arroz.jpeg",
    weight: 430, calories: 650,
    macros: { protein: 35, carbs: 55, fat: 30 },
    allergens: ["Gluten", "Huevo", "Mostaza"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo a la plancha, arroz blanco cocido, camote al horno tipo bastón, huevo frito, salsa inglesa (en el marinado), mostaza, ajo en pasta, aceite vegetal, comino, pimentón dulce (paprika), sal, pimienta negra y perejil fresco picado para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Arroz meloso de carne",
    image: "/images/Fotos-menu/Arroz-meloso-de-carne.webp",
    weight: 450, calories: 710,
    macros: { protein: 43, carbs: 58, fat: 30 },
    allergens: ["Sulfitos", "Lácteos"],
    ingredients: "Este plato está hecho con: Arroz de grano corto cocinado en su punto meloso (cremoso pero con el grano entero), trozos de carne de res tierna estofada, sofrito base de cebolla, ajo y pimientos rojos, rodajas de zanahoria tiernas, caldo de carne oscuro y sabroso, un toque de vino tinto o blanco (que aporta los sulfitos y profundidad al sabor), finalizado con mantequilla o queso rallado (para dar brillo y cremosidad extra), aceite de oliva, sal, pimienta negra y perejil fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Tajine de garbanzos con arroz",
    image: "/images/Fotos-menu/Tajine-de-garbanzos-con-arroz.png",
    weight: 420, calories: 607,
    macros: { protein: 20, carbs: 93, fat: 18 },
    allergens: ["Sulfitos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Garbanzos tiernos cocinados a fuego lento con especias marroquíes (comino, cúrcuma, canela, pimentón), arroz blanco cocido, zanahorias en rodajas suaves, papas en cubos que absorben la salsa, base de tomate y cebolla sofrita, frutos secos (posiblemente almendras molidas o picadas en la salsa para dar textura), frutas deshidratadas (como pasas u orejones, que aportan dulzor y sulfitos), caldo de vegetales, aceite de oliva, ajo, sal, pimienta y perejil o cilantro fresco picado por encima.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Sango de pescado con tortilla de yuca",
    image: "/images/Fotos-menu/Sango-de-pescado-con-tortilla-de-yuca.png",
    weight: 450, calories: 658,
    macros: { protein: 28, carbs: 87, fat: 22 },
    allergens: ["Pescado", "Maní", "Gluten"],
    ingredients: "Este plato está hecho con: Cubos de pescado blanco fresco y tierno, cocinados a fuego lento en un sango tradicional (una salsa espesa y reconfortante a base de plátano verde majado, refrito de vegetales y abundante pasta de maní que le da su carácter cremoso y sabor único). Se sirve acompañado de tortillas de yuca doradas a la plancha (que pueden contener un poco de harina de trigo para dar consistencia), decorado con maní tostado crujiente por encima, cilantro fresco y una mitad de limón para realzar los sabores.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Pollo asado a la peruana con papas",
    image: "/images/Fotos-menu/Pollo-asado-a-la-peruana-con-papas.png",
    weight: 450, calories: 780,
    macros: { protein: 56, carbs: 59, fat: 33 },
    allergens: ["Soya", "Gluten", "Sulfitos", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Cuarto de pollo asado al estilo peruano, con piel crujiente y marinado en una mezcla tradicional de especias, vinagre y salsa de soya (que aporta color intenso, sabor umami, soya y gluten). Se sirve acompañado de papas fritas gruesas y doradas, y una selección de salsas cremosas típicas (ajíes y mayonesas caseras que contienen huevo y lácteos para su textura).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Pimiento relleno de queso y verduras",
    image: "/images/Fotos-menu/Pimientos-rellenos-de-queso-y-verduras.png",
    weight: 380, calories: 460,
    macros: { protein: 18, carbs: 35, fat: 28 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Pimientos morrones frescos asados al horno, rellenos de una mezcla jugosa de vegetales salteados (que incluye granos de maíz dulce, cubos de calabacín tierno, cebolla y trozos de pimiento), ligados con un toque de salsa de tomate o crema, cubiertos con una generosa capa de queso mozzarella (u otro queso fundente) gratinado hasta dorar. Se termina con un toque de aceite de oliva, pimienta negra recién molida y hojas de albahaca fresca.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Carne en salsa biryani con arroz",
    image: "/images/Fotos-menu/Carne-en-salsa-biryani-con-arroz.png",
    weight: 430, calories: 589,
    macros: { protein: 50, carbs: 50, fat: 21 },
    allergens: ["Lácteos", "Frutos secos", "Mostaza"],
    ingredients: "Este plato está hecho con: Trozos de carne de res tierna cocinados en una \"Salsa Biryani\" aromática y especiada (una base rica de tomate, especias y yogur o crema que aporta los lácteos y suavidad). Se sirve acompañada de arroz aromático, coronado con cebolla frita crujiente para dar textura, hojas de cilantro/menta fresca y nueces tostadas enteras (frutos secos).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Tortilla española con verduras",
    image: "/images/Fotos-menu/Tortilla-espanola-con-verduras.png",
    weight: 380, calories: 613,
    macros: { protein: 40, carbs: 66, fat: 21 },
    allergens: ["Huevo", "Gluten"],
    ingredients: "Este plato está hecho con: Clásica tortilla española de perfil alto y esponjoso, elaborada con abundantes huevos frescos batidos y rellena de capas de papas confitadas tiernas. Se enriquece con un sofrito de verduras (pimientos rojos, calabacín verde y cebolla) integradas en la mezcla. La preparación incluye un toque de harina de trigo (o levadura) para asegurar su estructura y altura (aportando el gluten), cocinada con aceite de oliva y decorada con perejil fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Milanesa de berenjena con arroz",
    image: "/images/Fotos-menu/Milanesa-de-berenjena-con-arroz.png",
    weight: 380, calories: 540,
    macros: { protein: 16, carbs: 56, fat: 28 },
    allergens: ["Gluten", "Lácteos", "Huevo"],
    ingredients: "Este plato está hecho con: Rodaja gruesa y tierna de berenjena, empanizada siguiendo el proceso clásico: pasada por harina de trigo, luego por huevo batido (puedes sazonarlo con ajo y perejil, y a veces se le añade un chorrito de leche), y finalmente por pan rallado o panko para una costra crujiente al freír. Se sirve con arroz blanco cocido al vapor, decorada con perejil fresco picado y una rodaja de limón.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Pollo en salsa satay con verduras y arroz",
    image: "/images/Fotos-menu/Pollo-en-salsa-satay-con-verduras-y-arroz.png",
    weight: 430, calories: 700,
    macros: { protein: 29, carbs: 70, fat: 34 },
    allergens: ["Maní", "Soya"],
    ingredients: "Este plato está hecho con: Pechuga de pollo jugosa cortada en láminas, bañada en una auténtica salsa Satay (una crema rica y aromática a base de maní tostado, leche de coco, especias y un toque de salsa de soya para profundidad). Se acompaña de una mezcla de verduras frescas salteadas al dente (vainitas chinas o tirabeques, tiras de pimiento rojo y zanahoria) y arroz blanco aromático. Se sirve decorado con maní troceado crujiente, rodajas de chile rojo fresco, cilantro y una cuña de limón para exprimir al gusto.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Chuleta en salsa agridulce con quinoa",
    image: "/images/Fotos-menu/Chuleta-en-salsa-agridulce.webp",
    weight: 420, calories: 524,
    macros: { protein: 35, carbs: 51, fat: 20 },
    allergens: ["Soya", "Gluten", "Sulfitos", "Apio"],
    ingredients: "Este plato está hecho con: Chuleta de cerdo (con hueso) a la plancha, mix de quinoa, trozos de piña en almíbar, pimiento rojo y verde en tiras, cebolla perla en pluma, salsa agridulce (pasta de tomate, vinagre, azúcar, jugo de piña, salsa china/soya, salsa inglesa), caldo de carne (agua, huesos, cebolla, zanahoria, apio y sal), harina de trigo (para espesar la salsa), ajo en pasta, jengibre rallado, aceite vegetal, semillas de ajonjolí (decoración), cebollín picado, sal y pimienta.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Caponata siciliana",
    image: "/images/Fotos-menu/Caponata-siciliana-vegetariano.png",
    weight: 380, calories: 491,
    macros: { protein: 12, carbs: 32, fat: 35 },
    allergens: ["Apio", "Frutos secos", "Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Clásica caponata siciliana, un estofado agridulce de verduras donde la protagonista es la berenjena frita en cubos, cocinada lentamente junto con trozos de apio fresco, cebolla y una salsa de tomate casera. Se enriquece con aceitunas verdes y alcaparras (que aportan acidez y sulfitos), y se termina con piñones enteros tostados (frutos secos) y hojas de albahaca fresca. Se sirve acompañada de una rebanada de pan rústico tostado crujiente (que contiene gluten).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  { id: "lun-e1", name: "Choclito fresco", image: "/images/Fotos-menu/Choclito fresco.png", weight: 150, calories: 65, macros: { protein: 2, carbs: 12, fat: 0 }, allergens: ["Maíz"], ingredients: "Este plato está hecho con: Ensalada fresca y sustanciosa que combina choclo cocido tierno (granos de maíz), mezclado con vainitas verdes picadas y cubos de tomate riñón sin semillas. Se completa con plumas de cebolla paiteña previamente curtida en limón y sal.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "lunes" },
  { id: "lun-e2", name: "Piña Huerto", image: "/images/Fotos-menu/Pina Huerto.png", weight: 120, calories: 35, macros: { protein: 0, carbs: 8, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada ligera y refrescante sobre una base de hojas suaves de lechuga de seda. Combina la frescura del pepino con cáscara y el toque crocante del pimiento verde fresco, contrastando con cubos de piña natural que aportan dulzor y acidez tropical.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "lunes" },

  { id: "mar-e1", name: "Coleslaw Quiteño", image: "/images/Fotos-menu/La granosa.png", weight: 130, calories: 40, macros: { protein: 1, carbs: 9, fat: 0 }, allergens: ["Apio"], ingredients: "Este plato está hecho con: Col blanca rallada finamente y zanahoria rallada, apio picado pequeño para un toque aromático y crujiente, y manzana roja nacional (picada con su cáscara) que equilibra los sabores vegetales con un contraste dulce.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "martes" },
  { id: "mar-e2", name: "La granosa", image: "/images/Fotos-menu/Coleslaw Quiteno.png", weight: 130, calories: 55, macros: { protein: 3, carbs: 9, fat: 0 }, allergens: ["Leguminosas"], ingredients: "Este plato está hecho con: Ensalada nutritiva con base de hojas de espinaca troceadas y láminas finas de zuquini crudo, que aportan una textura crujiente y delicada. Se combina con la frescura del tomate cherry y garbanzos cocidos, que añaden textura harinosa agradable y valor proteico.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "martes" },

  { id: "mie-e1", name: "Flores del campo", image: "/images/Fotos-menu/Flores del campo.png", weight: 130, calories: 42, macros: { protein: 2, carbs: 8, fat: 0 }, allergens: ["Sulfitos"], ingredients: "Este plato está hecho con: Floretes pequeños de brócoli y coliflor blanqueados al punto para mantener su textura firme. Se añade color y frescura con pimiento rojo picado finamente, y se equilibra con el toque dulce de las pasas negras que contrastan con los vegetales crucíferos.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "miercoles" },
  { id: "mie-e2", name: "Hoja fuerte", image: "/images/Fotos-menu/Hoja fuerte.png", weight: 130, calories: 50, macros: { protein: 3, carbs: 9, fat: 0 }, allergens: ["Leguminosas"], ingredients: "Este plato está hecho con: Ensalada rústica y nutritiva basada en acelga fresca (con sus tallos y hojas troceados y blanqueados). Gana frescura con láminas de rábano y rodajas finas de zanahoria. Se completa con lentejas cocidas al dente que aportan cuerpo y textura al plato.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "miercoles" },

  { id: "jue-e1", name: "Frescor de pera", image: "/images/Fotos-menu/Frescor de pera.png", weight: 130, calories: 32, macros: { protein: 0, carbs: 7, fat: 0 }, allergens: ["Apio"], ingredients: "Este plato está hecho con: Ensalada refrescante y crujiente sobre una base de lechuga romana. Combina bastones finos de apio y cubos de pepino para una textura crocante en cada bocado. El contraste especial lo aporta la pera fresca cortada firme, añadiendo un punto dulce y jugoso que equilibra los verdes.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "jueves" },
  { id: "jue-e2", name: "Cítricos y Hojas", image: "/images/Fotos-menu/Citricos y Hojas.png", weight: 130, calories: 45, macros: { protein: 1, carbs: 9, fat: 0 }, allergens: ["Apio"], ingredients: "Este plato está hecho con: Ensalada ligera ideal para limpiar el paladar. Sobre una base de lechuga crespa fresca, se añaden láminas de rábano y apio picado fino para un extra de crocancia. El toque distintivo y dulce lo aportan los gajos de mandarina fresca.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "jueves" },

  { id: "vie-e1", name: "El choclito", image: "/images/Fotos-menu/La madurita.png", weight: 130, calories: 48, macros: { protein: 1, carbs: 10, fat: 0 }, allergens: ["Maíz"], ingredients: "Este plato está hecho con: Ensalada vibrante con base de col morada picada, que contrasta con el brillo del pimiento amarillo y la frescura de los cubos de tomate riñón. Se completa con granos de choclo dulce tierno desgranado, aportando un dulzor natural y una textura agradable en cada bocado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "viernes" },
  { id: "vie-e2", name: "La madurita", image: "/images/Fotos-menu/El choclito.png", weight: 130, calories: 68, macros: { protein: 1, carbs: 16, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Mix fresco de hojas verdes (lechuga y espinaca) con gajos de tomate riñón y plumas de cebolla perla para un toque crujiente. El protagonista es el plátano maduro (cocinado o asado en cubos), que aporta suavidad y ese dulzor característico de la mesa ecuatoriana.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "viernes" },

  /* ── POSTRES (toda la semana) ───────────────────────────────── */
  {
    id: "pos-3",
    name: "Mix de Frutas Frescas (Del día)",
    image: "/images/Fotos-menu/Mix de Frutas Frescas (Solo Sandia).png",
    weight: 130, calories: 70,
    macros: { protein: 0, carbs: 15, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Selección del Chef según temporada. Puede incluir: Melón, Papaya, Piña, Sandía.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-1",
    name: "Overnight Oats",
    image: "/images/Fotos-menu/Over.png",
    weight: 100, calories: 188,
    macros: { protein: 7, carbs: 22, fat: 8 },
    allergens: ["Gluten", "Lácteos", "Frutos secos", "Maní", "Sulfitos"],
    ingredients: "Este plato está hecho con: Copos de avena integral remojados durante la noche en yogur natural y semillas de chía, logrando una textura densa y suave. La superficie está decorada con trozos de nueces picadas, granos de maní tostado y pasas negras.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Pastel de Plátano",
    image: "/images/Fotos-menu/Pastel de Platano.png",
    weight: 85, calories: 340,
    macros: { protein: 5, carbs: 56, fat: 13 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Rebanada de pastel de plátano casero de miga tierna y húmeda, elaborado con plátanos maduros, harina de trigo, huevos y mantequilla. Se hornea con un toque de canela y vainilla, y se sirve coronado con mitades de nueces tostadas y una fina lluvia de azúcar glas.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
