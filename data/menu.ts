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
    name: "Fideos con pollo estilo asiático",
    image: "/images/Fotos-menu/Fideos con pollo estilo asiático.png",
    calories: 378,
    macros: { protein: 28, carbs: 35, fat: 20 },
    allergens: ["Gluten", "Sésamo", "Soya", "Maní"],
    ingredients: "Este plato está hecho con: Fideos de trigo (tipo chino), pechuga de pollo en cubos, maní tostado picado, semillas de ajonjolí (sésamo), aceite de ajonjolí, salsa china (soya), salsa de ostión, col blanca picada en tiras, zanahoria en juliana, brotes de soja (dientes de dragón), cebolla blanca picada, ajo en pasta, jengibre rallado, aceite vegetal, azúcar morena, sal y pimienta. Alérgenos: Gluten, trigo, sésamo, soya y maní. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Lomo de cerdo con verduras y puré de papa",
    image: "/images/Fotos-menu/Lomo de cerdo con verduras y puré de papa.png",
    calories: 608,
    macros: { protein: 30, carbs: 35, fat: 40 },
    allergens: ["Lácteos", "Mostaza", "Gluten"],
    ingredients: "Este plato está hecho con: Medallones de lomo fino de cerdo, puré de papas cholas (con textura cremosa), vegetales de temporada salteados (brócoli, zanahoria, vainitas), mantequilla (abundante en el puré y para finalizar la salsa), leche entera o crema de leche, caldo de carne (agua, huesos, cebolla, zanahoria, apio y sal), harina de trigo (para espesar la salsa), mostaza (en el adobo y la salsa), vino blanco, aceite de oliva, ramas de tomillo fresco (decoración y aroma), ajo en pasta, sal y pimienta negra. Alérgenos: Lácteos, mostaza y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Curry de garbanzos con arroz",
    image: "/images/Fotos-menu/Curry de garbanzos con arroz.png",
    calories: 610,
    macros: { protein: 22, carbs: 90, fat: 18 },
    allergens: ["Mostaza", "Gluten", "Lácteos"],
    ingredients: "Este plato está hecho con: Garbanzos cocidos en salsa curry, arroz blanco de grano largo (tipo basmati), crema de leche (un toque para suavizar y decorar), caldo de vegetales, harina de trigo (para el espesor de la salsa), semillas de mostaza (tostadas en el aderezo), cebolla perla picada, tomate riñón, pasta de tomate, ajo en pasta, jengibre fresco rallado, cúrcuma, comino, aceite vegetal, sal, pimienta, hojas de cilantro fresco y una rodaja de limón. Alérgenos: Mostaza, gluten y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Spaghetti al pesto con pollo",
    image: "/images/Fotos-menu/Spaghetti al pesto con pollo.png",
    calories: 414,
    macros: { protein: 28, carbs: 35, fat: 30 },
    allergens: ["Gluten", "Huevo", "Frutos secos", "Lácteos"],
    ingredients: "Este plato está hecho con: Fideos spaghetti al huevo (pasta de trigo), pechuga de pollo a la plancha fileteada, salsa pesto casera (albahaca fresca, aceite de oliva, queso parmesano, ajo, piñones o nueces, sal), queso parmesano rallado (decoración), crema de leche (un toque para suavizar la salsa), piñones enteros tostados (topping), aceite vegetal, sal, pimienta negra y hojas de albahaca fresca para decorar. Alérgenos: Gluten, huevo, frutos secos y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Guiso de carne con champiñones y arroz",
    image: "/images/Fotos-menu/Guiso de carne con champiñones y arroz.png",
    calories: 480,
    macros: { protein: 28, carbs: 40, fat: 20 },
    allergens: ["Gluten", "Apio", "Sulfitos"],
    ingredients: "Este plato está hecho con: Pulpa de res cortada en cubos, arroz blanco cocido, champiñones frescos (laminados y enteros pequeños), caldo de res oscuro (agua, huesos de res tostados, cebolla colorada, zanahoria, apio y sal), cebolla paiteña picada (para el aderezo), harina de trigo (para sellar la carne y espesar la salsa), vino tinto (para la salsa y el color), pasta de tomate, ajo picado, aceite, laurel, tomillo, sal, pimienta negra y perejil picado para decorar el arroz. Alérgenos: Gluten, apio y sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Spaghetti al pesto con queso",
    image: "/images/Fotos-menu/Spaghetti al pesto con queso.png",
    calories: 633,
    macros: { protein: 20, carbs: 82, fat: 25 },
    allergens: ["Gluten", "Lácteos", "Frutos secos", "Huevo"],
    ingredients: "Este plato está hecho con: Fideos tipo Spaghetti al huevo (pasta de trigo), salsa pesto tradicional (albahaca fresca, aceite de oliva, queso parmesano, piñones, ajo y sal), queso parmesano rallado (espolvoreado encima), piñones enteros tostados, aceite de oliva, pimienta negra recién molida y hojas de albahaca fresca para decorar. Alérgenos: Gluten, lácteos, frutos secos y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Pollo al escabeche con arroz",
    image: "/images/Fotos-menu/Pollo al escabeche con arroz.png",
    calories: 500,
    macros: { protein: 30, carbs: 40, fat: 25 },
    allergens: ["Sulfitos"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo cocido en su jugo, arroz blanco cocido, cebolla perla cortada en aros, zanahoria en rodajas, caldo de pollo (agua, carcasa de pollo, cebolla blanca, zanahoria, sal), vinagre blanco (base del escabeche), aceite vegetal, ajo picado, hojas de laurel enteras, pimienta negra en grano, sal y perejil fresco picado para decorar. Alérgenos: Sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Lentejas con carne y arroz",
    image: "/images/Fotos-menu/Lentejas con carne y arroz.png",
    calories: 765,
    macros: { protein: 36, carbs: 71, fat: 31 },
    allergens: [],
    ingredients: "Este plato está hecho con: Lentejas cocidas (guisadas tipo menestra), carne de res molida (sofrita e integrada), arroz blanco cocido, caldo de res natural (agua, huesos de res, cebolla blanca, zanahoria, sal), cebolla paiteña picada, pimiento verde, tomate riñón, ajo en pasta, aceite vegetal, achiote, comino, sal, pimienta negra y perejil fresco picado. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Fettuccini al funghi",
    image: "/images/Fotos-menu/Fettuccini al funghi.webp",
    calories: 710,
    macros: { protein: 19, carbs: 88, fat: 30 },
    allergens: ["Gluten", "Huevo", "Soya"],
    ingredients: "Este plato está hecho con: Pasta Fettuccine al huevo (cintas planas), mezcla de champiñones frescos (portobello y blanco) salteados, crema de soya (o vegetal, base de la salsa cremosa), salsa china (soya, para profundidad de sabor y color), caldo de vegetales, cebolla perla picada finamente, ajo en pasta, aceite de oliva, tomillo fresco (decoración y aroma), una pizca de nuez moscada, sal y pimienta negra recién molida. Alérgenos: Gluten, huevo y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Pollo en salsa agridulce y arroz",
    image: "/images/Fotos-menu/Pollo en salsa agridulce y arroz.webp",
    calories: 680,
    macros: { protein: 30, carbs: 80, fat: 20 },
    allergens: ["Soya", "Gluten", "Sulfitos", "Huevo"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo apanada y crujiente, arroz blanco cocido, salsa agridulce oriental (pasta de tomate, vinagre, azúcar, jugo de piña, salsa china/soya), trozos de piña en almíbar, pimiento rojo y verde cortado en cuadros, cebolla perla en pluma, huevo batido (para el empanizado), harina de trigo, pan rallado (apanadura), ajo en pasta, aceite vegetal, semillas de ajonjolí (sésamo) blanco y negro, sal, pimienta y cebollín picado para decorar. Alérgenos: Soya, gluten, sulfitos y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Risotto a la carbonara",
    image: "/images/Fotos-menu/Risotto a la Carbonara.png",
    calories: 793,
    macros: { protein: 16, carbs: 49, fat: 60 },
    allergens: ["Lácteos", "Huevo", "Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Arroz tipo Arborio o Carnaroli, pancetta o guanciale (bacon) crujiente y dorado, salsa cremosa a base de yemas de huevo y abundante queso Parmesano y Pecorino Romano, caldo de pollo o vegetales (con un toque de vino blanco), mantequilla (para la mantecatura), cebolla perla picada, aceite de oliva, pimienta negra recién molida, sal y perejil fresco picado. Alérgenos: Lácteos, huevo, sulfitos y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Pad thai de tofu y verduras",
    image: "/images/Fotos-menu/Pad Thai de tofu y verduras.png",
    calories: 556,
    macros: { protein: 20, carbs: 83, fat: 14 },
    allergens: ["Maní", "Soya", "Huevo"],
    ingredients: "Este plato está hecho con: Fideos de arroz (tallarines planos), cubos de tofu firme (queso de soya) fritos, maní tostado y triturado (espolvoreado encima), huevo revuelto (integrado en el salteado), brotes de soya (dientes de dragón) frescos, salsa Pad Thai casera (pasta de tamarindo, salsa china/soya, azúcar morena o panela, vinagre, salsa de pescado o sal), cebollín (cebolla china) cortado en bastones, ajo picado, aceite vegetal, hojuelas de ají rojo seco (chili flakes), cilantro fresco y una rodaja de limón. Alérgenos: Maní, soya y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Deditos de pollo en salsa BBQ con arroz",
    image: "/images/Fotos-menu/Deditos de pollo en salsa BBQ con arroz.png",
    calories: 680,
    macros: { protein: 29, carbs: 80, fat: 28 },
    allergens: ["Gluten", "Huevo", "Sulfitos", "Sésamo", "Mostaza"],
    ingredients: "Este plato está hecho con: Tiras de pechuga de pollo apanadas y fritas, arroz blanco cocido, salsa BBQ ahumada (que baña los deditos), semillas de ajonjolí (sésamo) tostado, harina de trigo (para el rebozado), huevo batido, pan rallado (apanadura), mostaza (en el adobo y la salsa), pasta de tomate, vinagre, azúcar morena, aceite vegetal, ajo en polvo, sal, pimienta y perejil fresco picado. Alérgenos: Gluten, huevo, sulfitos, sésamo y mostaza. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Cerdo al limón con papas al horno",
    image: "/images/Fotos-menu/Cerdo al limón con papas al horno.png",
    calories: 514,
    macros: { protein: 40, carbs: 48, fat: 18 },
    allergens: ["Huevo", "Gluten", "Sulfitos"],
    ingredients: "Este plato está hecho con: Medallón de lomo de cerdo tierno y jugoso, sellado a la plancha y bañado en una salsa aterciopelada de limón (elaborada con jugo de limón natural que aporta sulfitos, caldo, y ligada con yema de huevo y un toque de harina de trigo para lograr su textura cremosa). Se sirve decorado con rodajas finas y ralladura de limón confitado. Acompañado de papas rústicas en gajos asadas al horno con piel, sazonadas con aceite, sal marina, pimienta y romero fresco. Alérgenos: Huevo, gluten y sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Bowl Buddha mediterráneo",
    image: "/images/Fotos-menu/Bowl Buddha mediterraneo.webp",
    calories: 510,
    macros: { protein: 21, carbs: 45, fat: 25 },
    allergens: ["Sésamo", "Lácteos", "Gluten"],
    ingredients: "Este plato está hecho con: Garbanzos horneados y especiados (crocantes), base de cuscús o trigo bulgur (que aporta la fibra y el gluten), hummus clásico (pasta de garbanzos con tahini/pasta de sésamo, limón y ajo), queso feta desmenuzado, aceitunas negras (tipo Kalamata), tomates cherry rojos, rodajas de pepino fresco, cebolla morada cortada en pluma, hojas de espinaca baby fresca, aceite de oliva virgen extra, jugo de limón, pimentón dulce (paprika), eneldo fresco para decorar, sal y pimienta negra. Alérgenos: Sésamo, lácteos y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  // LUNES
  {
    id: "lun-e1",
    name: "La Andina Crocante",
    image: "/images/Fotos-menu/La Andina Crocante.png",
    calories: 55,
    macros: { protein: 3, carbs: 8, fat: 1 },
    allergens: [],
    ingredients: "Este plato está hecho con: Mellocos, tomate riñón (en gajos), cebolla paiteña (encurtida) y chochos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },
  {
    id: "lun-e2",
    name: "Verde tropical",
    image: "/images/Fotos-menu/Verde tropical.png",
    calories: 30,
    macros: { protein: 1, carbs: 6, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Espinaca (troceada), zuquini (laminado crudo), pimiento rojo y mango (o piña). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },

  // MARTES
  {
    id: "mar-e1",
    name: "El huerto asado",
    image: "/images/Fotos-menu/El huerto asado.png",
    calories: 45,
    macros: { protein: 2, carbs: 5, fat: 3 },
    allergens: ["Sésamo"],
    ingredients: "Este plato está hecho con: Zapallo (cubos asados), espinaca, rábanos (laminados finamente) y semillas de sésamo (tostadas). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },
  {
    id: "mar-e2",
    name: "Frescura serrana",
    image: "/images/Fotos-menu/Frescura serrana.png",
    calories: 40,
    macros: { protein: 1, carbs: 8, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Lechuga crespa, pepinillo (media luna), zanahoria (rallada cruda) y maíz dulce. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-e1",
    name: "La morada",
    image: "/images/Fotos-menu/La morada.png",
    calories: 32,
    macros: { protein: 1, carbs: 7, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Col morada (finamente rallada), remolacha (en cubitos), apio y naranja en gajos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },
  {
    id: "mie-e2",
    name: "Campo verde",
    image: "/images/Fotos-menu/Campo verde.png",
    calories: 60,
    macros: { protein: 1, carbs: 3, fat: 5 },
    allergens: [],
    ingredients: "Este plato está hecho con: Vainitas, tomate cherry, lechuga crespa o romana y champiñones. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-e1",
    name: "La quinoa power",
    image: "/images/Fotos-menu/La quinoa power.png",
    calories: 58,
    macros: { protein: 3, carbs: 10, fat: 1 },
    allergens: [],
    ingredients: "Este plato está hecho con: Brócoli, pimiento amarillo (cubos pequeños), cebolla larga (picada muy fina) y quinoa cocida. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },
  {
    id: "jue-e2",
    name: "Palmito fresco",
    image: "/images/Fotos-menu/Palmito fresco.png",
    calories: 35,
    macros: { protein: 2, carbs: 6, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Palmito (en rodajas), tomate, mix de hojas (espinaca y acelga) y lentejas cocidas. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-e1",
    name: "La uvilla",
    image: "/images/Fotos-menu/La uvilla.png",
    calories: 38,
    macros: { protein: 1, carbs: 7, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Kale (o acelga troceada), zanahoria (bastones cocidos o crudos), cebolla perla (plumas finas) y uvillas. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },
  {
    id: "vie-e2",
    name: "Tradición renovada",
    image: "/images/Fotos-menu/Tradicion renovada.png",
    calories: 62,
    macros: { protein: 3, carbs: 10, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Habas (tiernas, peladas y cocidas), tomate cherry y lechuga. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
    name: "Pastel de Plátano",
    image: "/images/Fotos-menu/Pastel de Plátano.png",
    calories: 340,
    macros: { protein: 5, carbs: 56, fat: 13 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Rebanada de pastel de plátano casero de miga tierna y húmeda, elaborado con plátanos maduros, harina de trigo (que aporta gluten) y una base rica enriquecida con huevos y mantequilla (que aporta lácteos). Se hornea con un toque de canela y vainilla, y se sirve coronado con mitades de nueces tostadas (frutos secos) en la superficie y decorado con una fina lluvia de azúcar glas. Alérgenos: Gluten, huevo, lácteos y frutos secos (nueces). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-3",
    name: "Pastel de zanahoria con Nuez moscada y clavo",
    image: "/images/Fotos-menu/Pastel de zanahoria con Nuez moscada y clavo.png",
    calories: 290,
    macros: { protein: 4, carbs: 38, fat: 14 },
    allergens: ["Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Una versión profundamente aromática del pastel de zanahoria, donde la dulzura del vegetal se realza con una mezcla de especias cálidas muy distintiva: nuez moscada y clavo de olor. Estos ingredientes aportan un perfil de sabor intenso y reconfortante. La masa se prepara con harina de trigo (que aporta gluten), huevos y zanahoria fresca rallada, logrando una textura densa y especiada ideal para acompañar el café. Alérgenos: Gluten, huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
