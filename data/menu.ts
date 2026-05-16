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
    name: "Pollo en salsa de maní con papas",
    image: "/images/Fotos-menu/Pollo en salsa de maní con papas.png",
    calories: 730,
    macros: { protein: 29, carbs: 50, fat: 46 },
    allergens: ["Maní", "Lácteos"],
    ingredients: "Este plato está hecho con: Presas de pollo (pierna o pechuga), papas cholas peladas y cocinadas, pasta de maní (base de la salsa), leche entera (para la cremosidad de la salsa), maní tostado y quebrado, caldo de pollo (agua, huesos de pollo, cebolla blanca, zanahoria, tallos de cilantro y sal), refrito de cebolla blanca picada, achiote, ajo en pasta, comino, sal, pimienta y cilantro fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Chile de carne con arroz",
    image: "/images/Fotos-menu/Chile de carne con arroz.webp",
    calories: 476,
    macros: { protein: 28, carbs: 50, fat: 20 },
    allergens: ["Apio", "Gluten", "Lácteos"],
    ingredients: "Este plato está hecho con: Carne de res molida estofada lentamente con frijoles rojos, arroz blanco de guarnición, salsa espesa de tomate y chiles (confitada con cebolla, pimientos y apio picado finamente), harina de trigo (para dar consistencia al chili), caldo de carne, comino y paprika. Se sirve coronado con queso cheddar rallado, una cucharada de crema agria suave y cilantro fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Curry de tofu con verduras y arroz integral",
    image: "/images/Fotos-menu/Curry de tofu con verduras y arroz integral.png",
    calories: 673,
    macros: { protein: 15, carbs: 52, fat: 45 },
    allergens: ["Soya", "Mostaza"],
    ingredients: "Este plato está hecho con: Cubos de tofu firme dorados a la plancha (fuente de proteína vegetal y soya), cocinados a fuego lento en una salsa de curry cremosa y aromática (elaborada con leche de coco, especias, cúrcuma que aportan intensidad). Se acompaña de una variedad de verduras frescas al dente: flores de brócoli, zanahorias en rodajas, vainitas y pimientos rojos. Se sirve con arroz integral suelto, decorado con rodajas de chile fresco, cilantro y una cuña de lima.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Lomo de cerdo salteado con verduras y majado de verde",
    image: "/images/Fotos-menu/Cerdo saltead con verduras y majado de verde.jpeg",
    calories: 535,
    macros: { protein: 37, carbs: 45, fat: 23 },
    allergens: ["Gluten", "Soya", "Apio", "Sulfitos"],
    ingredients: "Este plato está hecho con: Tiras de lomo de cerdo, plátano verde, vainitas, pimiento rojo cortado en juliana, cebolla perla en pluma, caldo de res (agua, huesos de res, cebolla, zanahoria, apio y sal), salsa china (soya), vinagre, maicena (fécula de maíz para el espesor), ajo en pasta, jengibre fresco rallado, aceite vegetal, semillas de ajonjolí tostado, cebollín picado, sal y pimienta negra.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Pollo a la francesa con arroz",
    image: "/images/Fotos-menu/Pollo a la francesa con arroz.png",
    calories: 550,
    macros: { protein: 35, carbs: 51, fat: 22 },
    allergens: ["Huevo", "Gluten", "Lácteos"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo sutilmente rebozado (estilo francesa), arroz blanco cocido, salsa de mantequilla y limón (emulsión brillante), alcaparras (toque ácido en la salsa), rodajas de limón amarillo fresco, harina de trigo (para el rebozado ligero), huevo batido (cobertura del pollo), mantequilla (base de la salsa), caldo de pollo, perejil fresco picado, sal y pimienta blanca.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Pasta alfredo veggi",
    image: "/images/Fotos-menu/Pasta Alfredo veggie.png",
    calories: 570,
    macros: { protein: 15, carbs: 54, fat: 28 },
    allergens: ["Lácteos", "Gluten", "Huevo", "Soya"],
    ingredients: "Este plato está hecho con: Pasta tipo Linguini (o Fettuccine) al huevo cocida al dente, salsa Alfredo cremosa (crema de leche, mantequilla, queso parmesano), brócoli fresco en floretes, champiñones laminados, arvejas tiernas, caldo de vegetales, ajo picado, una pizca de nuez moscada, aceite vegetal (o de soya), sal, pimienta negra recién molida y perejil fresco para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Sango de pescado con tortilla de yuca",
    image: "/images/Fotos-menu/Sango de pescado con tortilla de yuca.png",
    calories: 658,
    macros: { protein: 28, carbs: 87, fat: 22 },
    allergens: ["Pescado", "Maní", "Gluten"],
    ingredients: "Este plato está hecho con: Cubos de pescado blanco fresco y tierno, cocinados a fuego lento en un sango tradicional (una salsa espesa y reconfortante a base de plátano verde majado, refrito de vegetales y abundante pasta de maní que le da su carácter cremoso y sabor único). Se sirve acompañado de tortillas de yuca doradas a la plancha, decorado con maní tostado crujiente, cilantro fresco y una mitad de limón.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Pollo a la putanesca con papas",
    image: "/images/Fotos-menu/Pollo a la putanesca con papas.png",
    calories: 650,
    macros: { protein: 28, carbs: 59, fat: 26 },
    allergens: ["Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo a la plancha, papas en cubos asadas al horno con hierbas, salsa puttanesca (tomate triturado, aceitunas negras, alcaparras, ajo en láminas, ají rojo fresco), vino blanco (aporta acidez y sulfitos), harina de trigo (para sellar el pollo o dar cuerpo a la salsa), aceite de oliva, orégano seco, perejil fresco picado, sal y pimienta negra.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Filete de berenjena a la parmesana",
    image: "/images/Fotos-menu/Filete de Berenjena a la parmesana.webp",
    calories: 400,
    macros: { protein: 15, carbs: 30, fat: 22 },
    allergens: ["Lácteos", "Apio"],
    ingredients: "Este plato está hecho con: Berenjena fresca (cortada en loncha gruesa), queso mozzarella rallado (fundido encima), queso parmesano (gratinado), salsa de tomate casera (tomate riñón maduro, cebolla perla, zanahoria, apio, ajo y albahaca), orégano seco, sal, pimienta negra y hojas de albahaca fresca para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Lasaña de maduro",
    image: "/images/Fotos-menu/Lasaña de maduro.webp",
    calories: 720,
    macros: { protein: 42, carbs: 80, fat: 25 },
    allergens: ["Lácteos", "Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Tajadas de plátano maduro frito (en lugar de pasta), carne de res molida (condumio), queso mozzarella abundante (gratinado encima y entre capas), salsa blanca o bechamel (leche entera, mantequilla, harina de trigo para espesar), huevo cocido picado (integrado en el relleno), refrito base de cebolla paiteña, pimiento verde, tomate riñón y ajo; pasta de tomate, achiote, aceite vegetal, comino, sal, pimienta negra y cilantro fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Pollo en salsa de pimientos asados",
    image: "/images/Fotos-menu/Pollo en salsa de pimientos asados.png",
    calories: 550,
    macros: { protein: 28, carbs: 65, fat: 15 },
    allergens: ["Lácteos", "Sulfitos"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo a la plancha, arroz blanco cocido, pimientos rojos asados (triturados en la salsa y en tiras para decorar), crema de leche (para la textura cremosa), caldo de pollo (agua, carcasa, cebolla, zanahoria, sal), cebolla perla sofrita, vino blanco (para realzar el sabor), ajo en pasta, aceite de oliva, pimentón dulce (paprika), sal, pimienta negra y hojas de albahaca fresca.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Chilli vegetariano con arroz",
    image: "/images/Fotos-menu/Chili vegetariano con arroz.png",
    calories: 520,
    macros: { protein: 26, carbs: 56, fat: 20 },
    allergens: ["Soya", "Lácteos"],
    ingredients: "Este plato está hecho con: Proteína vegetal texturizada (carne de soya) estofada con frijoles rojos, arroz blanco de guarnición, base de tomate triturado, cebolla, pimientos y especias (comino, pimentón, chile en polvo), caldo de vegetales, aceite vegetal, queso cheddar rallado y crema agria (toppings), cilantro fresco y sal.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Pechuga de pollo BBQ ahumada con puré rústico",
    image: "/images/Fotos-menu/Pechuga de Pollo BBQ Ahumada con Puré Rústico.jpeg",
    calories: 620,
    macros: { protein: 28, carbs: 47, fat: 29 },
    allergens: ["Mostaza", "Lácteos"],
    ingredients: "Este plato está hecho con: Pechuga de pollo jugosa a la parrilla glaseada con nuestra salsa BBQ artesanal ahumada (pasta de tomate, vinagre de manzana, azúcar de coco, melaza, mostaza, humo líquido y pimentón ahumado), servida sobre una cama de puré de papas rústico machacado con ajo asado, leche y mantequilla.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Tajine de garbanzos con arroz",
    image: "/images/Fotos-menu/Tajine de garbanzos con arroz.png",
    calories: 606,
    macros: { protein: 20, carbs: 91, fat: 18 },
    allergens: ["Sulfitos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Garbanzos tiernos estofados lentamente en un tajine aromático con mezcla de especias marroquíes, combinados con trozos de zanahoria y calabacín en su punto. El guiso se equilibra con el toque dulce de los albaricoques secos (orejones, que aportan los sulfitos) y la textura crujiente de las almendras enteras tostadas. Se sirve acompañado de arroz blanco suelto, un hilo de aceite virgen y cilantro fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Estofado de res tradicional con yuca cocinada",
    image: "/images/Fotos-menu/Estofado de res tradicional con yuca cocinada.webp",
    calories: 631,
    macros: { protein: 28, carbs: 75, fat: 22 },
    allergens: ["Gluten", "Apio"],
    ingredients: "Este plato está hecho con: Trozos de carne de res (pulpa para estofado), yucas cocinadas y cortadas en mitades, zanahoria en rodajas gruesas, caldo de res oscuro (agua, huesos de res, cebolla perla, zanahoria, apio y sal), harina de trigo (para espesar la salsa y sellar la carne), refrito de cebolla paiteña, pimiento verde y tomate riñón; pasta de tomate, ajo en pasta, aceite vegetal, achiote, laurel, tomillo, comino, sal, pimienta negra y perejil fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  // LUNES
  {
    id: "lun-e1",
    name: "Ensalada de vainitas y zanahoria con chochos",
    image: "/images/Fotos-menu/Ensalada de Vainitas y Zanahoria con Chochos.png",
    calories: 65,
    macros: { protein: 4, carbs: 8, fat: 2 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada crujiente que combina bastones finos de zanahoria con vainitas cortadas al sesgo y blanqueadas. Gana frescura con plumas de cebolla perla (suavizada en agua helada) y se completa con el toque tradicional, nutritivo y lleno de textura de los chochos.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },
  {
    id: "lun-e2",
    name: "Cítricos y hojas",
    image: "/images/Fotos-menu/Citricos y Hojas.png",
    calories: 45,
    macros: { protein: 1, carbs: 9, fat: 0 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Ensalada ligera ideal para limpiar el paladar. Sobre una base de lechuga crespa fresca, se añaden láminas de rábano y apio picado fino para un extra de crocancia. El toque distintivo y dulce lo aportan los gajos de mandarina fresca.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },

  // MARTES
  {
    id: "mar-e1",
    name: "Granos y colores",
    image: "/images/Fotos-menu/Granos y Colores.png",
    calories: 65,
    macros: { protein: 3, carbs: 12, fat: 0 },
    allergens: ["Leguminosas"],
    ingredients: "Este plato está hecho con: Ensalada contundente y sabrosa que evoca los sabores de una menestra pero en versión fresca. Mezcla pimiento verde y tomate riñón firme en cuadritos con cebolla blanca picada fina. La base sustanciosa la aportan los fréjoles rojos o canarios tiernos cocidos.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },
  {
    id: "mar-e2",
    name: "El huerto sencillo",
    image: "/images/Fotos-menu/El Huerto Sencillo.png",
    calories: 55,
    macros: { protein: 2, carbs: 4, fat: 3 },
    allergens: ["Semillas"],
    ingredients: "Este plato está hecho con: Ensalada suave con ingredientes sencillos. Base de hojas de espinaca crudas combinadas con zuquini rallado y frescura de pepino sin semillas. Se corona con semillas de girasol (o pepa de zambo) para un contraste crujiente y nutritivo.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-e1",
    name: "Camote andino",
    image: "/images/Fotos-menu/Camote Andino.png",
    calories: 62,
    macros: { protein: 1, carbs: 14, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada de contrastes que resalta el dulzor natural y la textura suave del camote (morado o amarillo) asado en cubos. Se equilibra con hojas verdes de sabor intenso (como rúcula o mostaza) y la textura crujiente del pimiento rojo y vainitas.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },
  {
    id: "mie-e2",
    name: "Roja pasión",
    image: "/images/Fotos-menu/Roja Pasión.png",
    calories: 40,
    macros: { protein: 1, carbs: 9, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada vibrante, muy crocante y jugosa. La base es col morada cortada en tiras muy finas (chiffonade), mezclada con zanahoria rallada y tomates cherry enteros. El toque final dulce y fresco lo aporta la manzana roja picada.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-e1",
    name: "La serranita",
    image: "/images/Fotos-menu/La Serranita.png",
    calories: 75,
    macros: { protein: 2, carbs: 12, fat: 2 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una versión vegetal fresca, elaborada con rodajas de palmito, tomate riñón en cuadritos y cebolla paiteña en plumas.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },
  {
    id: "jue-e2",
    name: "La fina",
    image: "/images/Fotos-menu/La Fina.png",
    calories: 48,
    macros: { protein: 1, carbs: 10, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una propuesta divertida y sorprendente. Se sirve sobre un mix de hojas verdes (lechuga y espinaca), zanahoria y cubos de remolacha cocida que aportan dulzor terroso.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-e1",
    name: "Trópico de altura",
    image: "/images/Fotos-menu/Trópico de Altura.png",
    calories: 35,
    macros: { protein: 0, carbs: 7, fat: 0 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Ensalada dulce-ácida muy refrescante. Base crujiente de col blanca picada, bastones de apio y pepino fresco. El toque de color y sabor festivo lo ponen las frutillas frescas de temporada.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },
  {
    id: "vie-e2",
    name: "Verde intenso",
    image: "/images/Fotos-menu/Verde Intenso.png",
    calories: 38,
    macros: { protein: 1, carbs: 8, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada llena de fibra y color verde intenso. Combina floretes de brócoli al dente con la textura crujiente del pimiento verde y una base de lechuga romana. El contraste dulce y ácido lo dan las uvas verdes partidas (o kiwi si es temporada).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
    ingredients: "Este plato está hecho con: Selección del Chef según temporada (Puede incluir: Melón, Papaya, Piña, Sandía).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Banana cake de avena",
    image: "/images/Fotos-menu/Banana cake de avena.png",
    calories: 320,
    macros: { protein: 4, carbs: 49, fat: 12 },
    allergens: ["Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Una versión altamente nutritiva y saciante del clásico pastel de plátano. Su miga húmeda y reconfortante se logra sustituyendo la harina de trigo tradicional por avena (una excelente fuente de carbohidratos complejos que puede contener gluten por contaminación cruzada durante su molienda). La estructura y suavidad de la masa provienen de la combinación del puré de plátanos muy maduros, que aportan todo el dulzor natural, y huevos frescos.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-3",
    name: "Torta de zanahoria",
    image: "/images/Fotos-menu/Torta de Zanahoria.png",
    calories: 280,
    macros: { protein: 4, carbs: 32, fat: 9 },
    allergens: ["Gluten", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Rebanada de torta de zanahoria (carrot cake) de miga esponjosa y húmeda, elaborada con abundante zanahoria rallada fresca y una mezcla de especias cálidas (como canela). La masa base se prepara con harina de trigo (que aporta gluten), huevos frescos y aceite o mantequilla. Está cubierta por una generosa capa de frosting cremoso de queso (elaborado con queso crema, mantequilla y azúcar).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
