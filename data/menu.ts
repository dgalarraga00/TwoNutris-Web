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
    name: "Pollo al chilindrón con arroz",
    image: "/images/Fotos-menu/Pollo al chilindrón con arroz.png", calories: 520,
    macros: { protein: 25, carbs: 51, fat: 19 },
    allergens: ["Sulfitos", "Soya"],
    ingredients: "Este plato está hecho con: Presa de pollo (muslo o pierna) estofada, arroz blanco cocido, tiras de pimiento rojo y verde, jamón (o tocino) en cubos, salsa de tomate casera (tomate riñón, cebolla, ajo), cebolla perla en juliana, vino blanco (o tinto, base de la salsa), salsa china (soya, para realzar el sabor y color), caldo de pollo, pimentón dulce (paprika), ajo picado, aceite de oliva, laurel, sal, pimienta negra y perejil fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Chuleta de cerdo a la naranja con papas",
    image: "/images/Fotos-menu/Chuleta de cerdo (fina) a la naranja con papas.png", calories: 610,
    macros: { protein: 28, carbs: 40, fat: 33 },
    allergens: ["Gluten", "Soya"],
    ingredients: "Este plato está hecho con: Chuleta de cerdo tierna y jugosa, sellada a la plancha y glaseada con una brillante salsa gastrique de naranja (elaborada con jugo natural, tiras de piel de naranja confitada, azúcar y un toque de salsa de soya que equilibra el dulce y aporta soya y gluten). Se sirve acompañada de papas baby asadas al horno con su piel hasta quedar doradas, sazonadas con aceite, sal, pimienta y ramas de tomillo fresco aromático.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Guiso de frejol con arroz",
    image: "/images/Fotos-menu/Guiso de frejol con arroz.webp", calories: 574,
    macros: { protein: 20, carbs: 56, fat: 30 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Mix de fréjoles cocinados a fuego lento hasta espesar, arroz blanco cocido, trozos de papa chola y zanahoria tierna integrados en el guiso, sofrito base (cebolla paiteña, pimiento, tomate y ajo), caldo de vegetales (que suele contener apio en su base aromática), comino, orégano, hoja de laurel, aceite vegetal (o achiote para el color), sal, pimienta y cilantro fresco para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Pollo al grill con limón, hierbas y arroz de quinoa",
    image: "/images/Fotos-menu/Pollo al Grill con Limón y Hierbas y arroz de quinoa.png", calories: 446,
    macros: { protein: 30, carbs: 40, fat: 24 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Presa de pollo marinada y sellada con una mezcla fresca de limón, ajo asado y hierbas finas (romero y tomillo). Se sirve sobre un mix de arroz blanco con quinoa y todo aderezado con un toque de vinagreta de vino tinto. Se acompaña de brócoli al vapor y pimientos rojos asados, terminados con una lluvia de queso parmesano.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Milanesa de carne con espinaca, queso y camote asado",
    image: "/images/Fotos-menu/Milanesa de carne con espinaca y queso.png", calories: 546,
    macros: { protein: 28, carbs: 50, fat: 26 },
    allergens: ["Gluten", "Mostaza", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Filete de pulpa de res, cubitos de camote asado, queso mozzarella, pan rallado (apanadura), espinaca fresca, harina de trigo, huevo, crema de leche (para cremosidad en la espinaca), mantequilla, mostaza (en el adobo), ajo, aceite, sal, pimienta negra y comino.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Olla murciana",
    image: "/images/Fotos-menu/Olla murciana.png", calories: 426,
    macros: { protein: 14, carbs: 70, fat: 10 },
    allergens: ["Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Guiso tradicional que combina frejol blanco, garbanzos cocidos, almendras, pera y arroz inflado en el caldo, cocinados junto a trozos de papas y zanahorias en rodajas. Todo estofado en un fondo sabroso con pimentón dulce, tomate y una base de carve (soja texturizada) que aportan sabor intenso. Decorado con perejil fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Pollo en salsa brava con puré (PICANTE)",
    image: "/images/Fotos-menu/Pollo en salsa brava con puré.png", calories: 600,
    macros: { protein: 28, carbs: 70, fat: 20 },
    allergens: ["Lácteos", "Gluten", "Sulfitos"],
    ingredients: "Este plato está hecho con: Presa de pollo, puré de papa cremoso (papa chola, leche y mantequilla), salsa brava casera (tomate triturado, cebolla, pimentón dulce, un toque de picante -ají o cayena-, caldo de pollo, vino blanco), harina de trigo (usada para sellar el pollo o espesar la salsa), ajo picado, aceite de oliva, vinagre, sal, pimienta negra y perejil fresco picado para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Albóndigas en salsa chop suey con arroz",
    image: "/images/Fotos-menu/Albóndigas en salsa chop suey con arroz.png", calories: 638,
    macros: { protein: 28, carbs: 60, fat: 30 },
    allergens: ["Gluten", "Soya"],
    ingredients: "Este plato está hecho con: Albóndigas de carne de res molida, arroz blanco cocido, zanahoria cortada en bastones, vainitas picadas, caldo de res (agua, huesos, cebolla, zanahoria, sal), apanadura (pan rallado), huevo, harina de trigo (para formar las albóndigas), salsa china (soya), salsa de ostión, maicena (fécula de maíz para espesar), cebolla perla picada, ajo en pasta, jengibre fresco rallado, aceite vegetal, una pizca de azúcar, sal, pimienta y cebollín picado para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Fusilli al pesto con carve",
    image: "/images/Fotos-menu/Fusilli al pesto con carve.png", calories: 865,
    macros: { protein: 30, carbs: 85, fat: 45 },
    allergens: ["Soya", "Gluten", "Frutos secos", "Lácteos", "Huevo"],
    ingredients: "Este plato está hecho con: Fideos tipo Fusilli (tornillos) al huevo cocidos al dente, Carve (carne de soya texturizada) hidratada y sofrita, salsa pesto clásica (albahaca fresca, aceite de oliva, ajo, queso parmesano), salsa china (soya, usada para sazonar y dar color al Carve), caldo de vegetales, mantequilla (para suavizar la mezcla), queso parmesano rallado (topping), piñones enteros tostados (decoración), sal, pimienta negra y hojas de albahaca fresca.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Pollo en salsa yakarta con arroz de coco y verduras",
    image: "/images/Fotos-menu/Pollo en salsa yakarta con arroz de coco.png", calories: 622,
    macros: { protein: 28, carbs: 69, fat: 26 },
    allergens: ["Maní", "Gluten", "Soya"],
    ingredients: "Este plato está hecho con: Trozos de pechuga de pollo, arroz cocido en leche de coco, pasta de maní tostado, leche de coco (para la salsa), vainitas picadas, pimiento rojo, cebolla perla, salsa de soya, salsa de ostión, fondo de pollo artesanal, vinagre, azúcar morena, ajo, jengibre fresco, aceite vegetal, ají rojo (decorativo), sal y cilantro fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Lomo relleno en su salsa con papas",
    image: "/images/Fotos-menu/Lomo relleno en su salsa con papas.png", calories: 640,
    macros: { protein: 28, carbs: 41, fat: 30 },
    allergens: ["Gluten", "Sulfitos", "Lácteos", "Huevo"],
    ingredients: "Este plato está hecho con: Lomo de cerdo abierto y enrollado, relleno de espinaca fresca, pimientos rojos asados y queso mozzarella fundido, huevo (usado para ligar el relleno), pan rallado (harina de trigo, para dar consistencia al relleno), salsa de carne (fondo oscuro reducido), vino tinto (base aromática de la salsa), harina de trigo (para espesar la salsa), papas cholas cortadas en gajos y horneadas con cáscara, mantequilla, aceite vegetal, tomillo fresco, sal y pimienta negra.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Guiso veggie de lentejas con arroz",
    image: "/images/Fotos-menu/Guiso veggie de lentejas con arroz.png", calories: 652,
    macros: { protein: 30, carbs: 61, fat: 32 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Lentejas estofadas con variedad de vegetales, hojas de espinaca fresca integradas al final para mantener su color, trozos de papa y zanahoria tierna, sofrito base aromático de cebolla, ajo y apio (que aporta sabor y el alérgeno), arroz blanco cocido al vapor, caldo de vegetales natural, aceite de oliva, pimentón, hoja de laurel, sal y pimienta negra.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Croquetas de pollo con papas al horno",
    image: "/images/Fotos-menu/Croquetas de pollo con papas al horno.webp", calories: 780,
    macros: { protein: 25, carbs: 70, fat: 45 },
    allergens: ["Lácteos", "Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Masa cremosa de croquetas (base de salsa bechamel con leche entera, mantequilla y harina de trigo), pechuga de pollo desmenuzada e integrada en la masa, empanizado clásico pasando por huevo batido y pan rallado para lograr la costra crujiente, papas rústicas en gajos horneadas con hierbas finas y pimentón, salsa blanca para acompañar (tipo mayonesa casera), aceite vegetal, nuez moscada, sal, pimienta negra y cebollino picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Gulash de carne con arroz",
    image: "/images/Fotos-menu/Gulash de carne con arroz.png", calories: 560,
    macros: { protein: 30, carbs: 52, fat: 18 },
    allergens: ["Apio", "Gluten"],
    ingredients: "Este plato está hecho con: Cubos tiernos de carne de res estofados lentamente en su propio jugo con abundante pimentón dulce (paprika) y comino, creando una salsa roja profunda y aromática. Se cocina con una base de cebolla paiteña, pimientos y tomates maduros, espesada ligeramente con harina tostada para dar cuerpo. Se sirve acompañado de arroz blanco clásico para aprovechar la salsa y perejil fresco espolvoreado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Lasaña de espinaca con queso",
    image: "/images/Fotos-menu/Lasaña de espinaca y queso.png", calories: 652,
    macros: { protein: 35, carbs: 37, fat: 34 },
    allergens: ["Gluten", "Lácteos"],
    ingredients: "Este plato está hecho con: Láminas de pasta para lasaña, espinaca fresca salteada, queso ricotta (o requesón) para el relleno, queso mozzarella (fundido entre capas y gratinado), queso parmesano, salsa bechamel (leche entera, mantequilla, harina de trigo para espesar), cebolla perla picada finamente, ajo en pasta, nuez moscada, aceite de oliva, sal, pimienta blanca y hojas de albahaca fresca para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  { id: "lun-e1", name: "Choclito fresco", image: "/images/Fotos-menu/Choclito fresco.png", calories: 65, macros: { protein: 2, carbs: 12, fat: 0 }, allergens: ["Maíz"], ingredients: "Este plato está hecho con: Ensalada fresca y sustanciosa que combina choclo cocido tierno (granos de maíz), mezclado con vainitas verdes picadas y cubos de tomate riñón sin semillas para evitar el exceso de líquido. Se completa con plumas de cebolla paiteña previamente curtida en limón y sal.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "lunes" },
  { id: "lun-e2", name: "Piña Huerto", image: "/images/Fotos-menu/Piña Huerto.png", calories: 35, macros: { protein: 0, carbs: 8, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada ligera y refrescante sobre una base de hojas suaves de lechuga de seda. Combina la frescura del pepino con cáscara y el toque crocante del pimiento verde fresco, contrastando con cubos de piña natural que aportan dulzor y acidez tropical.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "lunes" },

  { id: "mar-e1", name: "Coleslaw Quiteño", image: "/images/Fotos-menu/Coleslaw Quiteño.png", calories: 40, macros: { protein: 1, carbs: 9, fat: 0 }, allergens: ["Apio"], ingredients: "Este plato está hecho con: Una versión local y rendidora de la ensalada de col, con una base abundante de col blanca rallada finamente y zanahoria rallada que aportan frescura y volumen. Se añade apio picado pequeño para un toque aromático y crujiente inconfundible. El contraste dulce lo da la manzana roja nacional (picada con su cáscara), equilibrando los sabores vegetales.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "martes" },
  { id: "mar-e2", name: "La granosa", image: "/images/Fotos-menu/La granosa.png", calories: 55, macros: { protein: 3, carbs: 9, fat: 0 }, allergens: ["Leguminosas"], ingredients: "Este plato está hecho con: Ensalada nutritiva con base de hojas de espinaca troceadas y láminas finas de zucchini (zapallo italiano) crudo, que aportan una textura crujiente y delicada. Se combina con la frescura y acidez del tomate cherry (o riñón) y gana cuerpo gracias a los garbanzos cocidos, que añaden una textura harinosa agradable y valor proteico.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "martes" },

  { id: "mie-e1", name: "Flores del campo", image: "/images/Fotos-menu/Flores del campo.png", calories: 42, macros: { protein: 2, carbs: 8, fat: 0 }, allergens: ["Sulfitos"], ingredients: "Este plato está hecho con: Una mezcla visualmente atractiva de floretes pequeños de brócoli y coliflor blanqueados al punto para mantener su textura firme. Se añade color y frescura con pimiento rojo picado finamente, y se equilibra con el toque dulce de las pasas negras que contrastan con los vegetales crucíferos.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "miercoles" },
  { id: "mie-e2", name: "Hoja fuerte", image: "/images/Fotos-menu/Hoja fuerte.png", calories: 50, macros: { protein: 3, carbs: 9, fat: 0 }, allergens: ["Leguminosas"], ingredients: "Este plato está hecho con: Ensalada de carácter rústico y nutritivo basada en mix de hojas verdes (con sus tallos y hojas troceados y blanqueados). Gana frescura y un punto crocante con láminas de rábano y rodajas finas de zanahoria. Se completa con lentejas cocidas al dente que aportan cuerpo y textura al plato.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "miercoles" },

  { id: "jue-e1", name: "La zapalla", image: "/images/Fotos-menu/La zapalla.png", calories: 52, macros: { protein: 2, carbs: 10, fat: 0 }, allergens: ["Leguminosas"], ingredients: "Este plato está hecho con: Una ensalada colorida y suave donde el protagonista es el zapallo cocido en cubos firmes, aprovechando su sabor dulce y textura cremosa. Se mezcla con vainitas verdes troceadas y el toque aromático de la cebolla blanca picada fina. El plato se completa con arvejas tiernas cocidas, que suman textura y valor nutricional.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "jueves" },
  { id: "jue-e2", name: "Frescor de pera", image: "/images/Fotos-menu/Frescor de pera.png", calories: 32, macros: { protein: 0, carbs: 7, fat: 0 }, allergens: ["Apio"], ingredients: "Este plato está hecho con: Ensalada muy refrescante y crujiente sobre una base de lechuga romana. Combina bastones finos de apio y cubos de pepino para una textura crocante en cada bocado. El contraste especial lo aporta la pera fresca cortada firme (o claudias en temporada), añadiendo un punto dulce y jugoso que equilibra los verdes.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "jueves" },

  { id: "vie-e1", name: "El choclito", image: "/images/Fotos-menu/El choclito.png", calories: 48, macros: { protein: 1, carbs: 10, fat: 0 }, allergens: ["Maíz"], ingredients: "Este plato está hecho con: Una ensalada vibrante y visualmente elegante gracias a la base de col morada picada, que contrasta con el brillo del pimiento amarillo (o verde) y la frescura de los cubos de tomate riñón. Se completa con granos de choclo desgranado, aportando un dulzor natural y una textura agradable en cada bocado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "viernes" },
  { id: "vie-e2", name: "La madurita", image: "/images/Fotos-menu/La madurita.png", calories: 68, macros: { protein: 1, carbs: 16, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada con sabor muy local que combina un mix fresco de hojas verdes (lechuga y espinaca) con gajos de tomate riñón y plumas de cebolla perla para un toque crujiente. El protagonista es el plátano maduro (cocinado o asado en cubos), que aporta suavidad y ese dulzor característico tan apreciado en la mesa ecuatoriana.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "viernes" },

  /* ── POSTRES (toda la semana) ───────────────────────────────── */
  {
    id: "pos-1",
    name: "Mix de Frutas Frescas (Del día)",
    image: "/images/Fotos-menu/Mix de Frutas Frescas (Solo Sandía).png", calories: 70,
    macros: { protein: 0, carbs: 15, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Selección del Chef según temporada (Puede incluir: Melón, Papaya, Piña, Sandía).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Brownie Moccachino",
    image: "/images/Fotos-menu/Brownie Moccachino.png", calories: 360,
    macros: { protein: 4, carbs: 46, fat: 19 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Soya", "Maní"],
    ingredients: "Este plato está hecho con: Una versión sofisticada e intensa del brownie clásico que fusiona el profundo sabor del chocolate con el aroma del café espresso (moccachino) y maní. Su masa densa y húmeda se elabora con harina de trigo (fuente de gluten), huevos y mantequilla (lácteos). El chocolate utilizado para la base contiene lecitina de soja como emulsionante, y la receta incorpora café real, lo que añade su característico sabor y contenido de cafeína.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-3",
    name: "Torta de Zanahoria",
    image: "/images/Fotos-menu/Pastel de zanahoria jengibre.png", calories: 280,
    macros: { protein: 4, carbs: 32, fat: 9 },
    allergens: ["Gluten", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Rebanada de torta de zanahoria (carrot cake) de miga esponjosa y húmeda, elaborada con abundante zanahoria rallada fresca y una mezcla de especias cálidas (como canela). La masa base se prepara con harina de trigo (que aporta gluten), huevos frescos y aceite o mantequilla. Está cubierta por una generosa capa de frosting o glaseado cremoso de queso (elaborado con queso crema, mantequilla y azúcar, que aporta los lácteos).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
