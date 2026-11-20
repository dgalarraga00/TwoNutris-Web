export type DayKey = "lunes" | "martes" | "miercoles" | "jueves" | "viernes";
export type CategoryKey = "principal" | "ensalada" | "postre";

export interface Macros {
  protein: number;
  carbs: number;
  fat: number;
}

export interface MenuItem {
  id: string;
  name: string;
  image: string;
  calories: number;
  macros: Macros;
  allergens: string[];
  ingredients: string;
  category: CategoryKey;
  day: DayKey | null; // null = disponible toda la semana (postres)
}

export interface DayDescriptor {
  key: DayKey;
  label: string;
  holiday?: boolean; // true = feriado, el día se muestra vacío en el menú
}

export const DAYS: DayDescriptor[] = [
  { key: "lunes",     label: "Lunes" },
  { key: "martes",    label: "Martes" },
  { key: "miercoles", label: "Miércoles" },
  { key: "jueves",    label: "Jueves" },
  { key: "viernes",   label: "Viernes" },
];

export const weeklyMenu: MenuItem[] = [

  /* ── PLATOS PRINCIPALES ── */

  // LUNES
  {
    id: "lun-p1",
    name: "Pollo en salsa agridulce y arroz",
    image: "/images/Fotos-menu/Pollo en salsa agridulce y arroz.webp",
    calories: 680,
    macros: { protein: 30, carbs: 80, fat: 20 },
    allergens: ["Soya", "Gluten", "Sulfitos", "Huevo", "Sésamo"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo apanada y crujiente, arroz blanco cocido, salsa agridulce oriental (pasta de tomate, vinagre, azúcar, jugo de piña, salsa china/soya), trozos de piña en almíbar, pimiento rojo y verde cortado en cuadros, cebolla perla en pluma, huevo batido (para el empanizado), harina de trigo, pan rallado (apanadura), ajo en pasta, aceite vegetal, semillas de ajonjolí (sésamo) blanco y negro, sal, pimienta y cebollín picado para decorar. Alérgenos: Soya, gluten, sulfitos, huevo y sésamo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Chuleta de cerdo a la naranja con papas",
    image: "/images/Fotos-menu/Chuleta de cerdo a la naranja con papas.webp",
    calories: 610,
    macros: { protein: 28, carbs: 40, fat: 33 },
    allergens: ["Gluten", "Soya"],
    ingredients: "Este plato está hecho con: Chuleta de cerdo tierna y jugosa, sellada a la plancha y glaseada con una brillante salsa gastrique de naranja (elaborada con jugo natural, tiras de piel de naranja confitada, azúcar y un toque de salsa de soya que equilibra el dulce y aporta soya y gluten). Se sirve acompañada de papas baby asadas al horno con su piel hasta quedar doradas, sazonadas con aceite, sal, pimienta y ramas de tomillo fresco aromático. Alérgenos: Gluten y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Dhal de lentejas con arroz aromatico",
    image: "/images/Fotos-menu/Dhal de lentejas con arroz aromatico.webp",
    calories: 526,
    macros: { protein: 20, carbs: 56, fat: 28 },
    allergens: ["Lácteos", "Mostaza"],
    ingredients: "Este plato está hecho con: Guiso de lentejas amarillas deshechas y cremosas (cocinadas con cúrcuma, jengibre y especias), arroz de grano largo suelto cocinado con cardamomo y clavo de olor, coronado con una cucharada de yogur natural o crema agria (que aporta los lácteos y frescura), terminado con un sofrito de aceite caliente con chiles rojos secos y semillas de mostaza negra (tarka), y abundante cilantro fresco picado. Alérgenos: Lácteos y mostaza. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Spaghetti al pesto con pollo",
    image: "/images/Fotos-menu/Spaghetti al pesto con pollo.webp",
    calories: 414,
    macros: { protein: 28, carbs: 35, fat: 30 },
    allergens: ["Gluten", "Huevo", "Frutos secos", "Lácteos"],
    ingredients: "Este plato está hecho con: Fideos spaghetti al huevo (pasta de trigo), pechuga de pollo a la plancha fileteada, salsa pesto casera (albahaca fresca, aceite de oliva, queso parmesano, ajo, piñones o nueces, sal), queso parmesano rallado (decoración), crema de leche (un toque para suavizar la salsa), piñones enteros tostados (topping), aceite vegetal, sal, pimienta negra y hojas de albahaca fresca para decorar. Alérgenos: Gluten, huevo, frutos secos y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Albóndigas marroquíes con cous cous",
    image: "/images/Fotos-menu/Albóndigas marroquíes con cous cous.webp",
    calories: 713,
    macros: { protein: 30, carbs: 63, fat: 38 },
    allergens: ["Gluten", "Huevo", "Sulfitos", "Frutos secos", "Maní"],
    ingredients: "Este plato está hecho con: Albóndigas de carne de res (o cordero) jugosas y especiadas, cama de couscous (sémola de trigo) al vapor, salsa roja estilo marroquí (tomate, cebolla, ajo, comino, canela, ras el hanout), orejones (albaricoques secos) que aportan dulzor y acidez, almendras o maní tostado (topping crocante), huevo (para ligar la carne), pan rallado (o harina dentro de la mezcla), aceite de oliva, cilantro fresco abundante, sal y pimienta. Alérgenos: Gluten, huevo, sulfitos, frutos secos y maní. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Ensalada de granos mixtos",
    image: "/images/Fotos-menu/Ensalada de granos mixtos.webp",
    calories: 480,
    macros: { protein: 28, carbs: 65, fat: 12 },
    allergens: ["Soya", "Gluten", "Sulfitos"],
    ingredients: "Este plato está hecho con: Una ensalada fresca, contundente y llena de proteína vegetal. Combina una sabrosa mezcla de granos tiernos: garbanzo, lenteja y fréjol blanco, acompañados de pimiento verde y rojo crujientes, y jugosos tomates cherry. Se adereza con una vinagreta llena de sabor a base de jugo de limón sutil, aceite, vinagre y salsa de soya (que aporta soja y gluten), perfumada con comino, albahaca y cilantro fresco (hierbita). El toque final ácido y perfecto lo dan la tradicional cebolla curtida y los pepinillos (ingredientes que contienen sulfitos). Alérgenos: Soja, gluten y sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Stroganoff de pollo con arroz",
    image: "/images/Fotos-menu/Stroganoff de pollo con arroz.webp",
    calories: 636,
    macros: { protein: 27, carbs: 51, fat: 36 },
    allergens: ["Lácteos", "Mostaza", "Gluten"],
    ingredients: "Este plato está hecho con: Pechuga de pollo cortada en cubos, arroz blanco cocido, champiñones frescos laminados, crema de leche, mantequilla, caldo de pollo (agua, carcasa de pollo, cebolla blanca, zanahoria, sal), cebolla perla picada finamente, harina de trigo (para espesar la salsa), mostaza, pasta de tomate, salsa inglesa, ajo picado, aceite vegetal, sal, pimienta negra y perejil fresco picado. Alérgenos: Lácteos, mostaza y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Estofado de res tradicional con yuca cocinada",
    image: "/images/Fotos-menu/Estofado de res tradicional con yuca cocinada.webp",
    calories: 631,
    macros: { protein: 28, carbs: 75, fat: 22 },
    allergens: ["Gluten", "Apio"],
    ingredients: "Este plato está hecho con: Trozos de carne de res (pulpa para estofado), yucas cocinadas y cortadas en mitades, zanahoria en rodajas gruesas, caldo de res oscuro (agua, huesos de res, cebolla perla, zanahoria, apio y sal), harina de trigo (para espesar la salsa y sellar la carne), refrito de cebolla paiteña, pimiento verde y tomate riñón; pasta de tomate, ajo en pasta, aceite vegetal, achiote, laurel, tomillo, comino, sal, pimienta negra y perejil fresco picado. Alérgenos: Gluten y apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Curry rojo de verduras y tofu",
    image: "/images/Fotos-menu/Curry rojo de verduras y tofu.webp",
    calories: 530,
    macros: { protein: 28, carbs: 55, fat: 22 },
    allergens: ["Soya", "Gluten"],
    ingredients: "Este plato está hecho con: Caldo de verduras (apio, cebolla, tomate, ajo, zuquini, nabo, zanahoria, col), leche de coco, tofu (soja), arroz, zanahoria, pimiento rojo, cebolla, zuquini, aceite de girasol, pasta de curry rojo (chili rojo seco, ajo, hierba de limón, sal, piel de lima, especias (semilla de cilantro, comino en polvo)), azúcar, almidón de maíz, salsa de soja (agua, soja, trigo, sal), pasta tom kha (aceite de girasol, pasta de jengibre, ajo, lima), cilantro, aceite de oliva virgen, sal. Alérgenos: Soja y gluten. Este plato puede contener trazas de sulfitos, lácteos, mostaza, frutos secos y/o pescado a través de contaminación cruzada.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Pollo a la pepitoria con papas",
    image: "/images/Fotos-menu/Pollo a la pepitoria con papas.webp",
    calories: 620,
    macros: { protein: 28, carbs: 55, fat: 32 },
    allergens: ["Frutos secos", "Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Filete de pollo guisado lentamente hasta quedar tierno, cubierto con la tradicional salsa pepitoria: una salsa espesa y aromática elaborada con una picada de nuez (frutos secos), yema de huevo cocido, ajo y un majado de pan frito (que aporta el gluten y textura). Se sirve decorado con huevo duro picado y láminas de nuez tostadas por encima, acompañado de dados de papa frita crujiente y perejil fresco. Alérgenos: Frutos secos, gluten y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Lentejas con carne y arroz",
    image: "/images/Fotos-menu/Lentejas con carne y arroz.webp",
    calories: 765,
    macros: { protein: 36, carbs: 71, fat: 31 },
    allergens: [],
    ingredients: "Este plato está hecho con: Lentejas cocidas (guisadas tipo menestra), carne de res molida (sofrita e integrada), arroz blanco cocido, caldo de res natural (agua, huesos de res, cebolla blanca, zanahoria, sal), cebolla paiteña picada, pimiento verde, tomate riñón, ajo en pasta, aceite vegetal, achiote, comino, sal, pimienta negra y perejil fresco picado. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Ensalada mix de espinaca con queso y papas",
    image: "/images/Fotos-menu/Ensalada mix de espinaca con queso y papas.webp",
    calories: 389,
    macros: { protein: 15, carbs: 41, fat: 20 },
    allergens: ["Lácteos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Mix de hojas verdes (espinaca y rúcula), papas chauchas cocinadas con cáscara (tipo cocktail), queso fresco desmenuzado, nueces troceadas, aros de cebolla paiteña roja, aderezo de vinagreta (aceite de oliva, vinagre balsámico, sal y pimienta negra). Alérgenos: Lácteos y frutos secos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Arroz frito estilo chaufa con chorizo",
    image: "/images/Fotos-menu/Arroz frito estilo chaufa con chorizo.webp",
    calories: 431,
    macros: { protein: 28, carbs: 46, fat: 15 },
    allergens: ["Huevo", "Soya"],
    ingredients: "Este plato está hecho con: Una sabrosa y reconfortante versión del tradicional arroz frito oriental, salteado al wok a fuego vivo para conseguir ese característico toque ahumado y una textura suelta y ligera. Se elabora a base de arroz blanco graneado, perfectamente integrado con rodajas doradas de chorizo magro seleccionado por su perfil especiado y balanceado, generosas hebras de huevo revuelto fresco (fuente de huevo), cebollín recién picado y el toque preciso de salsa de soya (fuente de soja) que aporta un color tostado uniforme, un aroma envolvente y un balance salino lleno de sabor casero. Alérgenos: Huevo y soja. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Croquetas de garbanzo al horno acompañadas de arroz",
    image: "/images/Fotos-menu/Croquetas de garbanzo al horno acompañadas de arroz.webp",
    calories: 522,
    macros: { protein: 28, carbs: 80, fat: 10 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una nutritiva y deliciosa alternativa vegetal, repleta de textura y sabor casero reconfortante. Se elabora a base de garbanzos seleccionados, cocidos y triturados artesanalmente con un sofrito aromático de cebolla, ajo, perejil fresco y una cuidada selección de especias que realzan su sabor natural. La mezcla se moldea en delicadas croquetas que se doran al horno hasta conseguir una apetitosa capa exterior suavemente crujiente, preservando un interior tierno, meloso y aromático. Se sirven acompañadas de una tradicional porción de arroz blanco graneado al dente, suelto y esponjoso, conformando un almuerzo completo, saciante y rico en fibra y proteína vegetal. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Pechuga al horno bañada en salsa de cilantro cremoso con arroz salteado con vegetales",
    image: "/images/Fotos-menu/Pechuga al horno bañada en salsa de cilantro cremoso con arroz salteado con vegetales.webp",
    calories: 409,
    macros: { protein: 28, carbs: 45, fat: 13 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Una jugosa pechuga de pollo horneada en su punto óptimo para conservar toda su ternura y suavidad natural, bañada en una sedosa y fragante salsa cremosa de cilantro elaborada con crema de leche fresca (fuente de lácteos) e infusionada con abundante cilantro fresco, ajo suave y finas especias que aportan un aroma herbal vibrante, un color vivo y una textura delicadamente aterciopelada. Se acompaña de un sabroso arroz salteado con una colorida selección de vegetales frescos finamente picados, que aportan una textura ligeramente crujiente, jugosidad y un balance vegetal lleno de frescura, conformando un almuerzo completo, nutritivo y reconfortante. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ── */

  // LUNES
  {
    id: "lun-e1",
    name: "Ensalada de Vainitas y Zanahoria con Chochos",
    image: "/images/Fotos-menu/Ensalada de Vainitas y Zanahoria con Chochos.webp",
    calories: 65,
    macros: { protein: 4, carbs: 8, fat: 2 },
    allergens: ["Altramuces"],
    ingredients: "Este plato está hecho con: Ensalada crujiente que combina bastones finos de zanahoria con vainitas cortadas al sesgo y blanqueadas. Gana frescura con plumas de cebolla perla suavizada en agua helada y se completa con el toque tradicional, nutritivo y lleno de textura de los chochos. Alérgenos: Altramuces (chochos). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },
  {
    id: "lun-e2",
    name: "Mix de Espinaca, Pepino y lechuga",
    image: "/images/Fotos-menu/Mix de Espinaca, Pepino y lechuga.webp",
    calories: 16,
    macros: { protein: 1, carbs: 3, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada ligera y refrescante con una base de hojas de espinaca (baby o finamente troceadas). Aporta mucha hidratación gracias a las medias lunas de pepino (conservando su piel) y un toque sutilmente picante con láminas muy finas de rábano. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },

  // MARTES
  {
    id: "mar-e1",
    name: "Espirales de Zuquini y Tomate",
    image: "/images/Fotos-menu/Espirales de Zuquini y Tomate.webp",
    calories: 16,
    macros: { protein: 1, carbs: 3, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada divertida y ligera servida sobre una base suave de lechuga de seda. Destacan los fideos o espirales de zuquini fresco y crujiente, acompañados de la jugosidad y acidez perfecta de los cubos de tomate riñón sin semillas. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },
  {
    id: "mar-e2",
    name: "Ensalada de Brócoli, Pimiento y cebolla",
    image: "/images/Fotos-menu/Ensalada de Brócoli, Pimiento y cebolla.webp",
    calories: 32,
    macros: { protein: 2, carbs: 6, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Mezcla colorida y llena de textura que destaca por sus floretes pequeños de brócoli cocidos al vapor hasta quedar al dente. Contrasta maravillosamente con el dulzor de las julianas de pimiento rojo y el toque sutil de acidez de la cebolla paiteña ligeramente curtida. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-e1",
    name: "Ensalada de Col Morada, Pimiento y Zanahoria",
    image: "/images/Fotos-menu/Ensalada de Col Morada, Pimiento y Zanahoria.webp",
    calories: 32,
    macros: { protein: 1, carbs: 7, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada vibrante y muy crujiente donde la protagonista es la col morada picada muy finamente. Se complementa a la perfección con la dulzura natural de la zanahoria rallada y el frescor de los cubitos diminutos de pimiento verde. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },
  {
    id: "mie-e2",
    name: "Mix de Espinaca con Pimiento Amarrillo",
    image: "/images/Fotos-menu/Mix de Espinaca con Pimiento Amarrillo.webp",
    calories: 38,
    macros: { protein: 1, carbs: 8, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada con mucha identidad y textura sobre una abundante base verde de hojas de espinaca decorada con pequeños cortes cuadrados de pimientos amarillos. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-e1",
    name: "Ensalada de Rábano, Zanahoria y Lechuga",
    image: "/images/Fotos-menu/Ensalada de Rábano, Zanahoria y Lechuga.webp",
    calories: 20,
    macros: { protein: 1, carbs: 4, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada sencilla, voluminosa y extremadamente crujiente. Utiliza una base abundante de lechuga crespa, acompañada de bastones de zanahoria que aportan un ligero dulzor y medias lunas de rábano para un final fresco y sutilmente picante. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },
  {
    id: "jue-e2",
    name: "Ensalada de Coliflor, Pepino y Tomate Rińon",
    image: "/images/Fotos-menu/Ensalada de Coliflor, Pepino y Tomate Rińon.webp",
    calories: 22,
    macros: { protein: 1, carbs: 4, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Opción refrescante y con muy buena estructura a base de floretes de coliflor blanqueados. Gana frescura y muchísima hidratación al mezclarse con jugosas lunas de tomate riñón y cubos de pepino sin piel. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-e1",
    name: "Roja Pasión",
    image: "/images/Fotos-menu/Roja Pasión.webp",
    calories: 40,
    macros: { protein: 1, carbs: 9, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada vibrante, muy crocante y jugosa. La base es col morada cortada en tiras muy finas, mezclada con zanahoria rallada y tomates. El toque final dulce y fresco lo aporta la manzana roja picada. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },
  {
    id: "vie-e2",
    name: "Camote Andino",
    image: "/images/Fotos-menu/Camote Andino.webp",
    calories: 62,
    macros: { protein: 1, carbs: 14, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada de contrastes que resalta el dulzor natural y la textura suave del camote (morado o amarillo) asado en cubos. Se equilibra con hojas verdes de sabor intenso y la textura crujiente del pimiento rojo y vainitas. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },

  /* ── POSTRES (toda la semana) ── */
  {
    id: "pos-1",
    name: "Galletas con Chips de Chocolate",
    image: "/images/Fotos-menu/Galletas con Chips de Chocolate.webp",
    calories: 380,
    macros: { protein: 4, carbs: 50, fat: 18 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Soya"],
    ingredients: "Este plato está hecho con: Galletas de estilo clásico con bordes crujientes y un centro suave, textura lograda gracias a la mezcla de azúcares y el toque secreto de maicena. La masa rica en mantequilla (lácteos) envuelve generosos chips de chocolate semiamargo y avena. Están elaboradas con harina de trigo (fuente de gluten) y huevo fresco. Alérgenos: Gluten, huevo, lácteos y soja. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Bizcocho de chocolate",
    image: "/images/Fotos-menu/Bizcocho de chocolate.webp",
    calories: 204,
    macros: { protein: 6, carbs: 27, fat: 9 },
    allergens: ["Gluten", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Un postre reconfortante, tierno y de textura delicadamente húmeda y esponjosa, pensado para los amantes del buen cacao. Su masa suave se elabora a base de harina de trigo (fuente de gluten), huevos frescos (fuente de huevo) y un toque de mantequilla (fuente de lácteos), perfectamente integrados con cacao puro seleccionado que aporta un aroma profundo, notas intensas y un elegante equilibrio entre dulzor y sutiles matices tostados, logrando un bocado indulgente, suave e irresistible. Alérgenos: Gluten, huevo y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-3",
    name: "Mix de Frutas Frescas (Del día)",
    image: "/images/Fotos-menu/Mix de Frutas Frescas (Del día).webp",
    calories: 70,
    macros: { protein: 0, carbs: 15, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Selección del Chef según temporada (puede incluir: melón, papaya, piña, sandía). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
