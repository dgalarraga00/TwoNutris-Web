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
    name: "Cerdo en salsa mexicana con tortillas",
    image: "/images/Fotos-menu/Cerdo en salsa mexicana con tortillas.png",
    calories: 482,
    macros: { protein: 30, carbs: 50, fat: 18 },
    allergens: ["Gluten", "Lácteos"],
    ingredients: "Este plato está hecho con: Carne de cerdo desmechada y cocinada a fuego lento, tortillas de harina de trigo calientes, salsa roja mexicana (tomate, chiles secos -guajillo o ancho-, cebolla, ajo, especias), queso fresco o cotija desmenuzado, chiles secos enteros (decoración), caldo de carne, aceite vegetal, cilantro fresco picado, rodajas de limón para acompañar, sal y pimienta. Alérgenos: Gluten y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Stroganoff de pollo con arroz",
    image: "/images/Fotos-menu/Stroganoff de pollo con arroz.webp",
    calories: 636,
    macros: { protein: 27, carbs: 51, fat: 36 },
    allergens: ["Lácteos", "Mostaza", "Gluten"],
    ingredients: "Este plato está hecho con: Pechuga de pollo cortada en cubos, arroz blanco cocido, champiñones frescos laminados, crema de leche, mantequilla, caldo de pollo (agua, carcasa de pollo, cebolla blanca, zanahoria, sal), cebolla perla picada finamente, harina de trigo (para espesar la salsa), mostaza, pasta de tomate, salsa inglesa, ajo picado, aceite vegetal, sal, pimienta negra y perejil fresco picado. Alérgenos: Lácteos, mostaza y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Guiso de fréjol con arroz",
    image: "/images/Fotos-menu/Guiso de frejol con arroz.webp",
    calories: 574,
    macros: { protein: 20, carbs: 56, fat: 30 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Mix de fréjoles cocinados a fuego lento hasta espesar, arroz blanco cocido, trozos de papa chola y zanahoria tierna integrados en el guiso, sofrito base (cebolla paiteña, pimiento, tomate y ajo), caldo de vegetales (que suele contener apio en su base aromática), comino, orégano, hoja de laurel, aceite vegetal (o achiote para el color), sal, pimienta y cilantro fresco para decorar. Alérgenos: Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Pastel de papa relleno de carne",
    image: "/images/Fotos-menu/Pastel de papa relleno de carne.png",
    calories: 506,
    macros: { protein: 20, carbs: 40, fat: 30 },
    allergens: ["Lácteos", "Huevo"],
    ingredients: "Este plato está hecho con: Capas de puré de papa suave y cremoso (elaborado con leche y mantequilla), relleno generoso de carne de res molida y guisada (con trocitos de zanahoria, cebolla y ajo en una salsa de carne espesa), superficie dorada al horno y pincelada con huevo para lograr ese color y textura gratinada, aceite vegetal, comino, sal, pimienta negra y perejil fresco espolvoreado. Alérgenos: Lácteos y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Pollo al curry con leche de coco y arroz",
    image: "/images/Fotos-menu/Pollo al curry con leche de coco y arroz.webp",
    calories: 605,
    macros: { protein: 35, carbs: 60, fat: 25 },
    allergens: ["Mostaza", "Apio", "Gluten"],
    ingredients: "Este plato está hecho con: Láminas de pechuga de pollo tiernas, arroz blanco cocido al vapor, salsa de curry amarilla cremosa (leche de coco, cúrcuma, especias), pimientos rojos en cubitos integrados en la salsa, mostaza (semillas o en pasta para potenciar el sabor del curry), caldo de vegetales o pollo (base con apio), harina de trigo (para dar cuerpo a la salsa), un toque de crema de coco para decorar, cilantro fresco abundante y una rodaja de limón para exprimir al gusto. Alérgenos: Mostaza, apio y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Pollo en salsa yakarta con arroz de coco y verduras",
    image: "/images/Fotos-menu/Pollo en salsa yakarta con arroz de coco y verduras.webp",
    calories: 622,
    macros: { protein: 28, carbs: 69, fat: 26 },
    allergens: ["Maní", "Gluten", "Soya"],
    ingredients: "Este plato está hecho con: Trozos de pechuga de pollo, arroz cocido en leche de coco, pasta de maní tostado, leche de coco (para la salsa), vainitas picadas, pimiento rojo, cebolla perla, salsa de soya, salsa de ostión, fondo de pollo artesanal, vinagre, azúcar morena, ajo, jengibre fresco, aceite vegetal, ají rojo (decorativo), sal y cilantro fresco. Alérgenos: Maní, gluten y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Arroz marinero",
    image: "/images/Fotos-menu/arroz marinero.jpeg",
    calories: 580,
    macros: { protein: 30, carbs: 65, fat: 22 },
    allergens: ["Crustáceos", "Pescado", "Moluscos"],
    ingredients: "Este plato está hecho con: Arroz de grano largo cocinado en un caldo concentrado de mariscos y achiote, mezclado con un sofrito criollo (cebolla, pimiento, ajo) y una selección premium de mariscos: cubos de pescado blanco, pulpo tierno, concha, calamar y camarones. Se termina con cilantro fresco picado y un toque de limón sutil para resaltar los sabores del mar. Alérgenos: Crustáceos, pescado y moluscos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Pollo en salsa brava con puré (Picante)",
    image: "/images/Fotos-menu/Pollo en salsa brava con puré.png",
    calories: 600,
    macros: { protein: 28, carbs: 70, fat: 20 },
    allergens: ["Lácteos", "Gluten", "Sulfitos"],
    ingredients: "Este plato está hecho con: Presa de pollo, puré de papa cremoso (papa chola, leche y mantequilla), salsa brava casera (tomate triturado, cebolla, pimentón dulce, un toque de picante -ají o cayena-, caldo de pollo, vino blanco), harina de trigo (usada para sellar el pollo o espesar la salsa), ajo picado, aceite de oliva, vinagre, sal, pimienta negra y perejil fresco picado para decorar. Alérgenos: Lácteos, gluten y sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Tajine de garbanzos con arroz",
    image: "/images/Fotos-menu/Tajine de garbanzos con arroz.png",
    calories: 606,
    macros: { protein: 20, carbs: 91, fat: 18 },
    allergens: ["Sulfitos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Garbanzos tiernos estofados lentamente en un tajine aromático con mezcla de especias marroquíes, combinados con trozos de zanahoria y calabacín en su punto. El guiso se equilibra con el toque dulce de los albaricoques secos (orejones, que aportan los sulfitos) y la textura crujiente de las almendras enteras tostadas (frutos secos). Se sirve acompañado de arroz blanco suelto, un hilo de aceite virgen y cilantro fresco para refrescar el paladar. Alérgenos: Sulfitos y frutos secos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Croquetas de pollo con papas al horno",
    image: "/images/Fotos-menu/Croquetas de pollo con papas al horno.webp",
    calories: 780,
    macros: { protein: 25, carbs: 70, fat: 45 },
    allergens: ["Lácteos", "Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Masa cremosa de croquetas (base de salsa bechamel con leche entera, mantequilla y harina de trigo), pechuga de pollo desmenuzada e integrada en la masa, empanizado clásico pasando por huevo batido y pan rallado para lograr la costra crujiente, papas rústicas en gajos horneadas con hierbas finas y pimentón, salsa blanca para acompañar (tipo mayonesa casera), aceite vegetal, nuez moscada, sal, pimienta negra y cebollino picado. Alérgenos: Lácteos, gluten y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Gulash de carne con arroz",
    image: "/images/Fotos-menu/Gulash de carne con arroz.png",
    calories: 560,
    macros: { protein: 30, carbs: 52, fat: 18 },
    allergens: ["Apio", "Gluten"],
    ingredients: "Este plato está hecho con: Cubos tiernos de carne de res estofados lentamente en su propio jugo con abundante pimentón dulce (paprika) y comino, creando una salsa roja profunda y aromática. Se cocina con una base de cebolla paiteña, pimientos y tomates maduros, espesada ligeramente con harina tostada para dar cuerpo. Se sirve acompañado de arroz blanco clásico para aprovechar la salsa y perejil fresco espolvoreado. Alérgenos: Apio y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Pimiento relleno de queso y verduras",
    image: "/images/Fotos-menu/Pimientos rellenos de queso y verduras (Vegetariano).png",
    calories: 460,
    macros: { protein: 18, carbs: 35, fat: 28 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Pimientos morrones frescos asados al horno, rellenos de una mezcla jugosa de vegetales salteados (que incluye granos de maíz dulce, cebolla y trozos de pimiento), ligados con un toque de salsa de tomate o crema, cubiertos con una generosa capa de queso mozzarella (u otro queso fundente) gratinado hasta dorar. Se termina con un toque de aceite de oliva, pimienta negra recién molida y hojas de albahaca fresca. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Pollo cajún con arroz",
    image: "/images/Fotos-menu/Pollo cajún con arroz.webp",
    calories: 452,
    macros: { protein: 28, carbs: 44, fat: 20 },
    allergens: ["Apio", "Mostaza"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo rebozada en una mezcla intensa de especias Cajún (pimentón, ajo en polvo, cebolla en polvo, pimienta negra, pimienta de cayena, orégano, tomillo y mostaza molida), sellada a la plancha para crear una costra sabrosa, arroz blanco cocido al vapor, caldo de pollo o vegetales (que aporta el alérgeno apio en la base), aceite vegetal, sal y abundante cebollín (cebolla verde) fresco picado por encima para refrescar. Alérgenos: Apio y mostaza. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Lomo relleno en su salsa con papas",
    image: "/images/Fotos-menu/Lomo relleno en su salsa con papas.png",
    calories: 640,
    macros: { protein: 28, carbs: 41, fat: 30 },
    allergens: ["Gluten", "Sulfitos", "Lácteos", "Huevo"],
    ingredients: "Este plato está hecho con: Lomo de cerdo abierto y enrollado, relleno de espinaca fresca, pimientos rojos asados y queso mozzarella fundido, huevo (usado para ligar el relleno), pan rallado (harina de trigo, para dar consistencia al relleno), salsa de carne (fondo oscuro reducido), vino tinto (base aromática de la salsa), harina de trigo (para espesar la salsa), papas cholas cortadas en gajos y horneadas con cáscara, mantequilla, aceite vegetal, tomillo fresco, sal y pimienta negra. Alérgenos: Gluten, sulfitos, lácteos y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Caponata siciliana",
    image: "/images/Fotos-menu/Caponata siciliana (vegetariano).png",
    calories: 491,
    macros: { protein: 12, carbs: 32, fat: 35 },
    allergens: ["Apio", "Frutos secos", "Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Clásica caponata siciliana, un estofado agridulce de verduras donde la protagonista es la berenjena frita en cubos, cocinada lentamente junto con trozos de apio fresco, cebolla y una salsa de tomate casera. Se enriquece con aceitunas verdes y alcaparras (que aportan acidez y sulfitos), y se termina con piñones enteros tostados (frutos secos) y hojas de albahaca fresca. Se sirve acompañada de una rebanada de pan rústico tostado crujiente (que contiene gluten). Alérgenos: Apio, frutos secos, sulfitos y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
    ingredients: "Este plato está hecho con: Zapallo (cubos asados), espinaca, rábanos (laminados finamente) y semillas de sésamo (tostadas). Alérgenos: Sésamo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Col morada (finamente rallada), remolacha (en cubitos), apio y naranja en gajos. Alérgenos: Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
    name: "Coleslaw Quiteño",
    image: "/images/Fotos-menu/Coleslaw Quiteño.png",
    calories: 40,
    macros: { protein: 1, carbs: 9, fat: 0 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Una versión local y rendidora de la ensalada de col, con una base abundante de col blanca rallada finamente y zanahoria rallada que aportan frescura y volumen. Se añade apio picado pequeño para un toque aromático y crujiente. El contraste dulce lo da la manzana roja nacional (picada con su cáscara), equilibrando los sabores vegetales. Alérgenos: Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
    ingredients: "Este plato está hecho con: Kale (o acelga troceada), zanahoria (bastones cocinados o crudos), cebolla perla (plumas finas) y uvillas. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
    ingredients: "Este plato está hecho con: Selección del Chef según temporada (puede incluir: melón, papaya, piña, sandía). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Overnight Oats",
    image: "/images/Fotos-menu/Overnight Oats.webp",
    calories: 188,
    macros: { protein: 7, carbs: 22, fat: 8 },
    allergens: ["Gluten", "Lácteos", "Frutos secos", "Maní", "Sulfitos"],
    ingredients: "Este plato está hecho con: Un postre cremoso, nutritivo y reconfortante. La base consiste en copos de avena integral (fuente de gluten) remojados pacientemente durante la noche en yogur natural (lácteos) y semillas de chía, logrando una textura densa y suave. La superficie está delicadamente decorada con trozos crujientes de nueces picadas (frutos secos), granos enteros de maní tostado y jugosas pasas negras, creando un contraste perfecto de sabores y texturas. Alérgenos: Gluten (avena), lácteos, frutos secos (nueces), maní y sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-3",
    name: "Pastel de zanahoria con semillas de calabaza y nueces",
    image: "/images/Fotos-menu/Pastel de zanahoria con semillas de girasol.png",
    calories: 310,
    macros: { protein: 5, carbs: 36, fat: 17 },
    allergens: ["Gluten", "Huevo", "Frutos secos"],
    ingredients: "Este plato está hecho con: Una variante con textura de la clásica torta de zanahoria, donde la miga húmeda y especiada se enriquece con el toque crujiente y nutritivo de las semillas de calabaza y nueces. La mezcla se elabora con harina de trigo (fuente de gluten), huevos y ralladura de zanahoria fresca. Aunque suele utilizarse aceite vegetal, puede haber presencia de lácteos dependiendo del molde o ingredientes adicionales usados en el proceso. Alérgenos: Gluten, huevo y frutos secos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
