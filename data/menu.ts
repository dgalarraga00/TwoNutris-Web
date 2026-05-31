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

  // LUNES
  {
    id: "lun-p1",
    name: "Pollo al chimichurri con papas rústicas",
    image: "/images/fotos-menu/Pollo al chimichurri con papas rústicas.png",
    calories: 470,
    macros: { protein: 28, carbs: 35, fat: 24 },
    allergens: ["Sulfitos"],
    ingredients: "Filete de pechuga de pollo jugoso, sellado a la plancha y bañado generosamente en nuestra salsa chimichurri artesanal (elaborada con perejil, orégano, ajo y un toque de ají). Se sirve acompañado de papas doradas al horno. Un plato lleno de sabor tradicional, equilibrado y perfecto para mantener tu energía al máximo. Alérgenos: Sulfitos (por el vinagre). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Cerdo en salsa agridulce con arroz blanco",
    image: "/images/fotos-menu/Cerdo en salsa agridulce con arroz blanco.png",
    calories: 496,
    macros: { protein: 28, carbs: 60, fat: 16 },
    allergens: ["Sulfitos", "Sésamo"],
    ingredients: "Un clásico oriental en su versión más equilibrada. Trozos de cerdo sellados al wok, salteados con pimientos de colores y cebolla perla crujiente, todo envuelto en nuestra irresistible salsa sweet chili casera. Se sirve sobre una cama perfecta de arroz blanco cocido al vapor y se decora con semillas de sésamo tostadas. Un plato lleno de contrastes, sabor y textura. Alérgenos: Sulfitos y Sésamo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Risotto de champiñones y espárragos con queso mozzarella",
    image: "/images/fotos-menu/Risotto de champiñones y espárragos con queso mozzarella.png",
    calories: 532,
    macros: { protein: 24, carbs: 55, fat: 24 },
    allergens: ["Lácteos", "Apio"],
    ingredients: "Una versión vegetariana, reconfortante y ligera del clásico italiano. Arroz de grano corto cocinado lentamente en un aromático caldo de vegetales, combinado con abundantes champiñones frescos laminados y tiernas puntas de espárragos verdes. Para terminar, queso mozzarella tradicional, logrando una textura fundente y deliciosa que te encantará sin pesadez. Alérgenos: Lácteos y Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Albóndigas de pollo a la jardinera con arroz",
    image: "/images/fotos-menu/Albóndigas de pollo a la jardinera con arroz.jpeg",
    calories: 495,
    macros: { protein: 28, carbs: 55, fat: 18 },
    allergens: ["Huevo", "Gluten"],
    ingredients: "El sabor reconfortante de la cocina de casa, adaptado para tu bienestar. Jugosas albóndigas de pollo elaboradas artesanalmente, cocinadas a fuego lento en nuestra clásica salsa jardinera a base de tomate casero, aceite de oliva virgen, dulces zanahorias y tiernas arvejas. Acompañadas de una porción perfecta de arroz blanco en su punto, ideal para mezclar y no dejar ni una gota de salsa. Alérgenos: Huevo y Gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Curry de pollo con calabaza y quinoa",
    image: "/images/fotos-menu/Curry de pollo con calabaza y quinoa.png",
    calories: 618,
    macros: { protein: 42, carbs: 50, fat: 28 },
    allergens: ["Lácteos", "Apio", "Mostaza"],
    ingredients: "Este plato está hecho con: Presa de pollo (muslo o pechuga), quinoa cocinada, zapallo (calabaza) cortado en cubos, crema de leche (o yogur natural), caldo de pollo, semillas de mostaza, cebolla perla picada, ajo en pasta, jengibre fresco rallado, curry en polvo, cúrcuma, comino, aceite vegetal, sal, pimienta y cilantro fresco. Alérgenos: Lácteos, apio y mostaza. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Tajine de garbanzos con arroz",
    image: "/images/fotos-menu/Tajine de garbanzos con arroz.png",
    calories: 606,
    macros: { protein: 20, carbs: 91, fat: 18 },
    allergens: ["Sulfitos", "Frutos secos"],
    ingredients: "Garbanzos tiernos estofados lentamente en un tajine aromático con mezcla de especias marroquíes, combinados con trozos de zanahoria y calabacín. El guiso se equilibra con el toque dulce de los albaricoques secos y la textura crujiente de las almendras enteras tostadas. Se sirve acompañado de arroz blanco suelto, un hilo de aceite virgen y cilantro fresco. Alérgenos: Sulfitos y frutos secos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Pollo en salsa de queso con papas",
    image: "/images/fotos-menu/Pollo en salsa de queso con papas.webp",
    calories: 447,
    macros: { protein: 28, carbs: 35, fat: 26 },
    allergens: ["Lácteos", "Sulfitos", "Gluten", "Huevo"],
    ingredients: "Filete de pechuga de pollo a la plancha, papas rústicas asadas con hierbas, salsa cremosa a base de crema de leche, mantequilla y queso desmenuzado, un toque de vino blanco, harina de trigo, aceite de oliva, ajo picado, caldo de pollo, sal y pimienta negra. Alérgenos: Lácteos, sulfitos, gluten y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Cerdo en salsa de cebolla y vino con arroz",
    image: "/images/fotos-menu/Cerdo en salsa de cebolla y vino con arroz.png",
    calories: 414,
    macros: { protein: 28, carbs: 35, fat: 36 },
    allergens: ["Sulfitos", "Gluten", "Soya"],
    ingredients: "Medallones de lomo de cerdo sellados y tiernos, cubiertos con una salsa reducción oscura hecha a base de vino tinto, abundante cebolla caramelizada en juliana, caldo de carne, un toque de salsa de soya y ligada con harina de trigo. Se acompaña de arroz blanco suelto decorado con perejil fresco. Alérgenos: Sulfitos, gluten y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Dhal de lentejas con arroz aromático",
    image: "/images/fotos-menu/Dhal de lentejas con arroz.png",
    calories: 526,
    macros: { protein: 20, carbs: 56, fat: 28 },
    allergens: ["Lácteos", "Mostaza"],
    ingredients: "Guiso de lentejas amarillas deshechas y cremosas cocinadas con cúrcuma, jengibre y especias, arroz de grano largo cocinado con cardamomo y clavo de olor, coronado con una cucharada de yogur natural, terminado con un sofrito de aceite caliente con chiles rojos secos y semillas de mostaza negra (tarka), y abundante cilantro fresco picado. Alérgenos: Lácteos y mostaza. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Milanesa de carne con espinaca, queso y camote asado",
    image: "/images/fotos-menu/Milanesa de carne con espinaca, queso y camote asado.webp",
    calories: 486,
    macros: { protein: 28, carbs: 35, fat: 26 },
    allergens: ["Gluten", "Mostaza", "Huevo", "Lácteos"],
    ingredients: "Filete de pulpa de res, cubitos de camote asado, queso mozzarella, pan rallado, espinaca fresca, harina de trigo, huevo, crema de leche, mantequilla, mostaza (en el adobo), ajo, aceite, sal, pimienta negra y comino. Alérgenos: Gluten, mostaza, huevo y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Pollo en salsa piri-piri con arroz",
    image: "/images/fotos-menu/Pollo en salsa piri-piri con arroz.png",
    calories: 478,
    macros: { protein: 28, carbs: 35, fat: 24 },
    allergens: ["Sulfitos", "Gluten"],
    ingredients: "Cuarto de pollo trasero asado a la parrilla con piel dorada y ahumada, bañado generosamente en una salsa Piri-Piri vibrante y picante elaborada con chiles rojos, pimentón, aceite, ajo y una base ácida de limón o vinagre. Se sirve acompañado de arroz blanco. La salsa puede contener espesantes o condimentos que aportan gluten. Alérgenos: Sulfitos y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Curry de tofu con verduras y arroz integral",
    image: "/images/fotos-menu/Curry de tofu con verduras y arroz integral.png",
    calories: 673,
    macros: { protein: 15, carbs: 52, fat: 45 },
    allergens: ["Soya", "Mostaza"],
    ingredients: "Cubos de tofu firme dorados a la plancha, cocinados a fuego lento en una salsa de curry cremosa y aromática elaborada con leche de coco, especias y cúrcuma. Se acompaña de verduras frescas al dente: brócoli, zanahorias, vainitas y pimientos rojos. Se sirve con arroz integral suelto, decorado con chile fresco, cilantro y una cuña de lima. Alérgenos: Soya y mostaza. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Cazuela de pescado con patacones",
    image: "/images/fotos-menu/Cazuela de pescado con patacones.png",
    calories: 722,
    macros: { protein: 35, carbs: 60, fat: 38 },
    allergens: ["Pescado", "Mariscos", "Maní"],
    ingredients: "Trozos de pescado fresco, camarones, masa de plátano verde, caldo de pescado, pasta de maní, patacones, maní tostado entero, refrito de cebolla paiteña, pimiento verde y tomate riñón; achiote, ajo en pasta, comino, sal, pimienta y cilantro fresco. Alérgenos: Pescado, mariscos, maní. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Pollo Katsu Japonés con arroz",
    image: "/images/fotos-menu/Pollo katsu Japones con arroz.png",
    calories: 570,
    macros: { protein: 28, carbs: 65, fat: 22 },
    allergens: ["Gluten", "Huevo", "Soya", "Sésamo"],
    ingredients: "Pechuga de pollo fileteada, arroz blanco, Panko (pan rallado japonés), huevo batido, harina de trigo, col blanca picada finamente, semillas de ajonjolí negro tostado, salsa Tonkatsu casera (ketchup, salsa inglesa, salsa soya, azúcar, vinagre), aceite vegetal, sal, pimienta y un toque de jengibre rallado. Alérgenos: Gluten, huevo, soya y sésamo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Falafel clásico",
    image: "/images/fotos-menu/Falafel clásico.png",
    calories: 750,
    macros: { protein: 25, carbs: 80, fat: 38 },
    allergens: ["Huevo", "Sésamo", "Apio"],
    ingredients: "Croquetas de garbanzos triturados con hierbas frescas (perejil y cilantro), ajo y especias (comino, coriandro), huevo, ensalada de tomate y pepino picados, hummus de garbanzo suave, salsa blanca de acompañamiento, caldo de vegetales con apio, aceite vegetal, sal y pimienta. Alérgenos: Huevo, Sésamo y apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  // LUNES
  {
    id: "lun-e1",
    name: "Ensalada fresca",
    image: "/images/fotos-menu/Ensalada Fresca.jpeg",
    calories: 20,
    macros: { protein: 0, carbs: 4, fat: 0 },
    allergens: [],
    ingredients: "Ensalada crujiente que combina lechuga común (o crespa), tomate cherry, pepinillo y zanahoria. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },
  {
    id: "lun-e2",
    name: "Camote Andino",
    image: "/images/fotos-menu/Camote Andino.png",
    calories: 62,
    macros: { protein: 1, carbs: 14, fat: 0 },
    allergens: [],
    ingredients: "Ensalada de contrastes que resalta el dulzor natural y la textura suave del camote (morado o amarillo) asado en cubos. Se equilibra con hojas verdes de sabor intenso (como rúcula o mostaza) y la textura crujiente del pimiento rojo y vainitas. Alérgenos: ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },

  // MARTES
  {
    id: "mar-e1",
    name: "Ensalada de Remolacha",
    image: "/images/fotos-menu/Ensalada de remolacha.jpeg",
    calories: 30,
    macros: { protein: 2, carbs: 6, fat: 0 },
    allergens: [],
    ingredients: "Mezcla colorida y llena de textura con remolacha, zanahoria, cebolla blanca, culantro y limón. Alérgenos: ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },
  {
    id: "mar-e2",
    name: "Ensalada de granos",
    image: "/images/fotos-menu/Ensalada de granos.jpeg",
    calories: 100,
    macros: { protein: 6, carbs: 20, fat: 2 },
    allergens: [],
    ingredients: "Ensalada divertida con choclo tierno, frejol tierno, arvejas, hojas de apio y tomate riñón. Alérgenos: ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-e1",
    name: "Ensalada Tricolor",
    image: "/images/fotos-menu/Ensalada Tricolor .jpeg",
    calories: 32,
    macros: { protein: 1, carbs: 7, fat: 0 },
    allergens: [],
    ingredients: "Ensalada vibrante y crujiente sobre una cama de pimientos de 3 colores (rojo, amarillo y verde), tomate cherry, chayota, cebollín y perejil. Alérgenos: ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },
  {
    id: "mie-e2",
    name: "Ensalada Verde",
    image: "/images/fotos-menu/Ensalada Verde.webp",
    calories: 15,
    macros: { protein: 1, carbs: 3, fat: 0 },
    allergens: [],
    ingredients: "Ensalada ligera y refrescante con una base de lechuga común, pimiento verde, apio, pepinillo, pera (o manzana verde). Alérgenos: ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-e1",
    name: "Ensalada de quinoa",
    image: "/images/fotos-menu/Ensalada de quinoa.jpeg",
    calories: 57,
    macros: { protein: 2, carbs: 10, fat: 1 },
    allergens: ["Leguminosas"],
    ingredients: "Ensalada de contrastes con una cama de quinoa, espinaca, tomate cherry y pepino, pintado con zanahoria y cebolla perla. Alérgenos: leguminosas (arvejas). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },
  {
    id: "jue-e2",
    name: "Ensalada de brócoli",
    image: "/images/fotos-menu/Ensalada de brócoli.jpeg",
    calories: 22,
    macros: { protein: 1, carbs: 4, fat: 0 },
    allergens: [],
    ingredients: "Opción con muy buena estructura a base de brócoli blanqueados. Gana frescura al mezclarse con cebolla paiteña en juliana, choclo dulce y toques de culantro. Alérgenos: ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-e1",
    name: "La sencilla",
    image: "/images/fotos-menu/La sencilla.jpeg",
    calories: 38,
    macros: { protein: 1, carbs: 8, fat: 0 },
    allergens: ["Pimienta"],
    ingredients: "Ensalada con mucha identidad y textura sobre una abundante base verde de hojas de lechuga, un toque crocante con las rodajas de pepinillo, y para terminar tomate cherry con un toque de pimienta negra. Alérgenos: Pimienta. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },
  {
    id: "vie-e2",
    name: "Ensalada Parmesana",
    image: "/images/fotos-menu/Ensalada Parmesana.jpeg",
    calories: 200,
    macros: { protein: 4, carbs: 10, fat: 16 },
    allergens: ["Lácteos"],
    ingredients: "Ensalada voluminosa y extremadamente crujiente con una base abundante de lechuga crespa y común, acompañada de zanahoria rallada que aportan un ligero dulzor y un toque sutil de queso parmesano. Alérgenos: Lácteo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },

  /* ── POSTRES (toda la semana) ───────────────────────────────── */
  {
    id: "pos-1",
    name: "Overnight Oats",
    image: "/images/fotos-menu/Overnight Oats.webp",
    calories: 188,
    macros: { protein: 7, carbs: 22, fat: 8 },
    allergens: ["Gluten", "Lácteos", "Frutos secos", "Maní", "Sulfitos"],
    ingredients: "Un postre cremoso, nutritivo y reconfortante. La base consiste en copos de avena integral remojados pacientemente durante la noche en yogur natural y semillas de chía, logrando una textura densa y suave. La superficie está decorada con trozos crujientes de nueces picadas, granos enteros de maní tostado y jugosas pasas negras. Alérgenos: gluten (avena), lácteos, frutos secos (nueces), maní, sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Pastel de calabaza",
    image: "/images/fotos-menu/Pastel de calabaza.png",
    calories: 290,
    macros: { protein: 4, carbs: 38, fat: 14 },
    allergens: ["Gluten", "Huevo"],
    ingredients: "Porción de pastel de calabaza tradicional, caracterizado por su color anaranjado natural y una miga densa y húmeda gracias al puré de calabaza. La mezcla base se prepara con harina de trigo, huevos frescos, azúcar y aceite vegetal. Alérgenos: gluten, huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
