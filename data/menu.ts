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

  /* ── PLATOS PRINCIPALES ─────────────────────────────────────── */

  // LUNES
  {
    id: "lun-p1",
    name: "Pollo en salsa de pimientos asados",
    image: "/images/Fotos-menu/Pollo en salsa de pimientos asados.png",
    calories: 550,
    macros: { protein: 28, carbs: 65, fat: 15 },
    allergens: ["Lácteos", "Sulfitos"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo a la plancha, arroz blanco cocido, pimientos rojos asados (triturados en la salsa y en tiras para decorar), crema de leche (para la textura cremosa), caldo de pollo (agua, carcasa, cebolla, zanahoria, sal), cebolla perla sofrita, vino blanco (para realzar el sabor), ajo en pasta, aceite de oliva, pimentón dulce (paprika), sal, pimienta negra y hojas de albahaca fresca para decorar. Alérgenos: Lácteos y sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Chuleta de cerdo a la naranja con papas",
    image: "/images/Fotos-menu/Chuleta de cerdo (fina) a la naranja con papas.png",
    calories: 610,
    macros: { protein: 28, carbs: 40, fat: 33 },
    allergens: ["Gluten", "Soya"],
    ingredients: "Este plato está hecho con: Chuleta de cerdo tierna y jugosa, sellada a la plancha y glaseada con una brillante salsa gastrique de naranja (elaborada con jugo natural, tiras de piel de naranja confitada, azúcar y un toque de salsa de soya que equilibra el dulce y aporta soya y gluten). Se sirve acompañada de papas baby asadas al horno con su piel hasta quedar doradas, sazonadas con aceite, sal, pimienta y ramas de tomillo fresco aromático. Alérgenos: Gluten y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Arroz moro con queso y verduras",
    image: "/images/Fotos-menu/Arroz moro con queso y verduras.png",
    calories: 715,
    macros: { protein: 24, carbs: 80, fat: 33 },
    allergens: ["Lácteos", "Sulfitos"],
    ingredients: "Este plato está hecho con: Arroz blanco, lentejas cocidas (o fréjol negro, según disponibilidad), queso fresco de mesa (para servir encima o mezclado), mantequilla (para suavizar el moro), caldo de vegetales (agua, zanahoria, cebolla perla, pimiento, tallos de cilantro), zanahoria picada en cubos, arvejas tiernas, cebolla paiteña (para el refrito y el encurtido), pimiento verde, tomate riñón, vinagre blanco (para el encurtido/curtido), ajo en pasta, achiote, aceite vegetal, comino, sal y cilantro (yerbita) picado. Alérgenos: Lácteos y sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Chile de carne con arroz",
    image: "/images/Fotos-menu/Chile de carne con arroz.webp",
    calories: 476,
    macros: { protein: 28, carbs: 50, fat: 20 },
    allergens: ["Apio", "Gluten", "Lácteos"],
    ingredients: "Este plato está hecho con: Carne de res molida estofada lentamente con frijoles rojos, arroz blanco de guarnición, salsa espesa de tomate y chiles (confitada con cebolla, pimientos y apio picado finamente), harina de trigo (para dar consistencia al chili), caldo de carne, comino y paprika. Se sirve coronado con queso cheddar rallado, una cucharada de crema agria suave y cilantro fresco picado. Alérgenos: Apio, gluten y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Pollo a la griega",
    image: "/images/Fotos-menu/Pollo a la griega.webp",
    calories: 432,
    macros: { protein: 28, carbs: 35, fat: 20 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Jugosos cortes de pollo marinados al estilo mediterráneo en una mezcla fresca y aromática de yogur natural (fuente de lácteos), jugo y ralladura de limón, ajo, orégano y hierbabuena. Se sirve acompañado de una colorida guarnición de vegetales que incluye papas tiernas, zuquini, pimientos, cebolla y tomates cherry. Todo esto se integra con una salsa rica y aterciopelada a base de crema de leche y auténtico queso feta (ambos ingredientes lácteos), aceitunas verdes, un toque de salsa de tomate casera y hierbas provenzales. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Tajine de garbanzos con arroz",
    image: "/images/Fotos-menu/Tajine de garbanzos con arroz.png",
    calories: 606,
    macros: { protein: 20, carbs: 91, fat: 18 },
    allergens: ["Sulfitos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Garbanzos tiernos estofados lentamente en un tajine aromático con mezcla de especias marroquíes, combinados con trozos de zanahoria y calabacín en su punto. El guiso se equilibra con el toque dulce de los albaricoques secos (orejones, que aportan los sulfitos) y la textura crujiente de las almendras enteras tostadas (frutos secos). Se sirve acompañado de arroz blanco suelto, un hilo de aceite virgen y cilantro fresco para refrescar el paladar. Alérgenos: Sulfitos y frutos secos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Estofado de cerdo con arroz",
    image: "/images/Fotos-menu/Estofado de cerdo con arroz.png",
    calories: 549,
    macros: { protein: 28, carbs: 50, fat: 25 },
    allergens: ["Gluten", "Apio"],
    ingredients: "Este plato está hecho con: Trozos de carne de cerdo (cabecero o paleta) estofados a fuego lento, arroz blanco cocido, salsa base de tomate y caldo de res, cebolla, zanahoria, apio (base aromática del sofrito), harina de trigo (usada para sellar la carne y espesar el estofado), pasta de tomate, ajo en pasta, hoja de laurel, aceite vegetal, sal, pimienta negra y perejil fresco picado. Alérgenos: Gluten y apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Fideos con pollo estilo asiático",
    image: "/images/Fotos-menu/Fideos con pollo estilo asiático.png",
    calories: 378,
    macros: { protein: 28, carbs: 35, fat: 20 },
    allergens: ["Gluten", "Sésamo", "Soya", "Maní", "Mariscos"],
    ingredients: "Este plato está hecho con: Fideos de trigo (tipo chino), pechuga de pollo en cubos, maní tostado picado, semillas de ajonjolí (sésamo), aceite de ajonjolí, salsa china (soya), salsa de ostión (mariscos), col blanca picada en tiras, zanahoria en juliana, brotes de soja (dientes de dragón), cebolla blanca picada, ajo en pasta, jengibre rallado, aceite vegetal, azúcar morena, sal y pimienta. Alérgenos: Gluten (trigo), sésamo, soya, maní y mariscos (salsa de ostión). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Curry rojo de verduras y tofu",
    image: "/images/Fotos-menu/Curry rojo de verduras y tofu.jpeg",
    calories: 530,
    macros: { protein: 28, carbs: 55, fat: 22 },
    allergens: ["Soya", "Gluten", "Apio"],
    ingredients: "Este plato está hecho con: Caldo de verduras (apio, cebolla, tomate, ajo, zuquini, nabo, zanahoria, col), leche de coco, tofu (soja), arroz, zanahoria, pimiento rojo, cebolla, zuquini, aceite de girasol, pasta de curry rojo (chili rojo seco, ajo, hierba de limón, sal, piel de lima, especias -semilla de cilantro, comino en polvo-), azúcar, almidón de maíz, salsa de soja (agua, soja, trigo, sal), pasta tom kha (aceite de girasol, pasta de jengibre, ajo, lima), cilantro, aceite de oliva virgen, sal. Alérgenos: Soya, gluten y apio. Este plato puede contener trazas de sulfitos, lácteos, mostaza, frutos secos y/o pescado por contaminación cruzada, ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Tempura de pescado con arroz",
    image: "/images/Fotos-menu/Tempura de pescado con arroz.webp",
    calories: 710,
    macros: { protein: 28, carbs: 80, fat: 23 },
    allergens: ["Pescado", "Gluten", "Huevo", "Soya"],
    ingredients: "Este plato está hecho con: Tiras de pescado rebozadas en masa tempura ligera y crujiente, arroz blanco cocido al vapor, salsa Tentsuyu para dipear (base de salsa de soya, caldo y aceite de ajonjolí), nabo blanco rallado, harina de trigo (base del rebozado), huevo (para la emulsión de la masa fría), agua con gas o helada, aceite vegetal para freír, cebollín fresco picado (cebolla china) para decorar, sal y una pizca de azúcar. Alérgenos: Pescado, gluten, huevo y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Pechuga de pollo a la florentina con papas",
    image: "/images/Fotos-menu/Pechuga de pollo a la florentina con papas.png",
    calories: 540,
    macros: { protein: 28, carbs: 55, fat: 20 },
    allergens: ["Lácteos", "Gluten"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo tierna, cubierta con una cremosa salsa a la florentina (elaborada con espinacas picadas, crema de leche o salsa blanca bechamel y queso, que aporta los lácteos). El plato se termina con una capa de queso gratinado y dorado al horno. Se sirve acompañado de papas rústicas en gajos asadas con su piel y sazonadas con hierbas finas. La salsa contiene harina de trigo como espesante (fuente de gluten). Alérgenos: Lácteos y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Olla murciana",
    image: "/images/Fotos-menu/Olla murciana.png",
    calories: 426,
    macros: { protein: 14, carbs: 70, fat: 10 },
    allergens: ["Sulfitos", "Gluten", "Frutos secos", "Soya"],
    ingredients: "Este plato está hecho con: Guiso tradicional que combina frejol blanco, garbanzos cocidos, almendras (frutos secos), pera y arroz inflado en el caldo, cocinados junto a trozos de papas y zanahorias en rodajas. Todo estofado en un fondo sabroso con pimentón dulce, tomate y una base de carve (soja texturizada) que aportan sabor intenso. Decorado con perejil fresco picado. Alérgenos: Sulfitos, gluten, frutos secos (almendras) y soja. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Milanesa de carne con espinaca, queso y camote asado",
    image: "/images/Fotos-menu/Milanesa de carne con espinaca, queso y camote asado.webp",
    calories: 486,
    macros: { protein: 28, carbs: 35, fat: 26 },
    allergens: ["Gluten", "Mostaza", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Filete de pulpa de res, cubitos de camote asado, queso mozzarella, pan rallado (apanadura), espinaca fresca, harina de trigo, huevo, crema de leche (para cremosidad en la espinaca), mantequilla, mostaza (en el adobo), ajo, aceite, sal, pimienta negra y comino. Alérgenos: Gluten, mostaza, huevo y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Pollo vindaloo con arroz",
    image: "/images/Fotos-menu/Pollo vindaloo con arroz.png",
    calories: 688,
    macros: { protein: 28, carbs: 45, fat: 45 },
    allergens: ["Mostaza", "Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Pechuga de pollo marinada y cocinada en una salsa Vindaloo intensa y especiada (caracterizada por su toque picante y ácido, con una base de vinagre, ajo, jengibre, chiles rojos secos y especias), trozos de papa tierna cocidos en la misma salsa para absorber el sabor, arroz blanco aromático de guarnición, semillas de mostaza (en la base del curry), salsa ligada (que puede contener trazas de harina de trigo o condimentos con gluten), aceite vegetal, sal y decorado con rodajas de chile fresco y hojas de cilantro. Alérgenos: Mostaza, sulfitos y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Ensalada de granos mixtos",
    image: "/images/Fotos-menu/Ensalada de granos mixtos.webp",
    calories: 480,
    macros: { protein: 28, carbs: 65, fat: 12 },
    allergens: ["Soya", "Gluten", "Sulfitos", "Leguminosas"],
    ingredients: "Este plato está hecho con: Una ensalada fresca, contundente y llena de proteína vegetal. Combina una sabrosa mezcla de granos tiernos: garbanzo, lenteja y fréjol blanco, acompañados de pimiento verde y rojo crujientes, y jugosos tomates cherry. Se adereza con una vinagreta llena de sabor a base de jugo de limón sutil, aceite, vinagre y salsa de soya (que aporta soja y gluten), perfumada con comino, albahaca y cilantro fresco (hierbita). El toque final ácido y perfecto lo dan la tradicional cebolla curtida y los pepinillos (ingredientes que contienen sulfitos). Alérgenos: Soja, gluten, sulfitos y leguminosas. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  // LUNES
  {
    id: "lun-e1",
    name: "Ensalada de Vainitas y Zanahoria con Chochos",
    image: "/images/Fotos-menu/Ensalada de Vainitas y Zanahoria con Chochos.png",
    calories: 65,
    macros: { protein: 4, carbs: 8, fat: 2 },
    allergens: ["Leguminosas"],
    ingredients: "Este plato está hecho con: Ensalada crujiente que combina bastones finos de zanahoria con vainitas cortadas al sesgo y blanqueadas. Gana frescura con plumas de cebolla perla (suavizada en agua helada) y se completa con el toque tradicional, nutritivo y lleno de textura de los chochos. Alérgenos: Leguminosas (chochos). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },
  {
    id: "lun-e2",
    name: "Mix de Espinaca, Pepino y lechuga",
    image: "/images/Fotos-menu/Mix de Espinaca, Pepino y lechuga.png",
    calories: 16,
    macros: { protein: 1, carbs: 3, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada ligera y refrescante con una base de hojas de espinaca (baby o finamente troceadas). Aporta mucha hidratación gracias a las medias lunas de pepino (conservando su piel) y un toque sutilmente picante con láminas muy finas de rábano. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },

  // MARTES
  {
    id: "mar-e1",
    name: "Ensalada de Brócoli, Pimiento y cebolla",
    image: "/images/Fotos-menu/Ensalada de Brócoli, Pimiento y cebolla.png",
    calories: 32,
    macros: { protein: 2, carbs: 6, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Mezcla colorida y llena de textura que destaca por sus floretes pequeños de brócoli cocidos al vapor hasta quedar al dente. Contrasta maravillosamente con el dulzor de las julianas de pimiento rojo y el toque sutil de acidez de la cebolla paiteña ligeramente curtida. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },
  {
    id: "mar-e2",
    name: "Espirales de Zuquini y Tomate",
    image: "/images/Fotos-menu/Espirales de Zuquini y Tomate.png",
    calories: 16,
    macros: { protein: 1, carbs: 3, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada divertida y ligera servida sobre una base suave de lechuga de seda. Destacan los fideos o espirales de zuquini fresco y crujiente, acompañados de la jugosidad y acidez perfecta de los cubos de tomate riñón sin semillas. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-e1",
    name: "Ensalada de Col Morada, Pimiento y Zanahoria",
    image: "/images/Fotos-menu/Ensalada de Col Morada, Pimiento y Zanahoria.png",
    calories: 32,
    macros: { protein: 1, carbs: 7, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada vibrante y muy crujiente donde la protagonista es la col morada picada muy finamente. Se complementa a la perfección con la dulzura natural de la zanahoria rallada y el frescor de los cubitos diminutos de pimiento verde. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },
  {
    id: "mie-e2",
    name: "Mix de Palmito y Acelga con Tomate Cherry",
    image: "/images/Fotos-menu/Mix de Palmito y Acelga con Tomate Cherry.png",
    calories: 24,
    macros: { protein: 1, carbs: 5, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una combinación suave y elegante con una base nutritiva de hojas jóvenes de acelga (crudas o blanqueadas rápidamente). Incorpora jugosas mitades de tomate cherry y rodajas tiernas de palmito, creando un contraste de texturas muy agradable al paladar. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-e1",
    name: "Ensalada de Zapallo Asado y Rúcula con Arvejas",
    image: "/images/Fotos-menu/Ensalada de Zapallo Asado y Rúcula con Arvejas.png",
    calories: 55,
    macros: { protein: 2, carbs: 10, fat: 1 },
    allergens: ["Leguminosas"],
    ingredients: "Este plato está hecho con: Ensalada de contrastes que mezcla el sabor intenso y ligeramente picante de la rúcula con dados de zapallo asado al horno, que aportan un dulzor profundo. Se completa con la frescura de la cebolla blanca finamente picada y el toque tierno de las arvejas cocidas. Alérgenos: Leguminosas (arvejas). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },
  {
    id: "jue-e2",
    name: "Ensalada de Coliflor, Pepino y Tomate Riñón",
    image: "/images/Fotos-menu/Ensalada de Coliflor, Pepino y Tomate Riñón.png",
    calories: 22,
    macros: { protein: 1, carbs: 4, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Opción refrescante y con muy buena estructura a base de floretes de coliflor blanqueados. Gana frescura y muchísima hidratación al mezclarse con jugosas lunas de tomate riñón y cubos de pepino sin piel. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-e1",
    name: "Mix de Espinaca con Pimiento Amarillo",
    image: "/images/Fotos-menu/Mix de Espinaca con Pimiento Amarillo.png",
    calories: 38,
    macros: { protein: 1, carbs: 8, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada con mucha identidad y textura sobre una abundante base verde de hojas de espinaca, decorada con pequeños cortes cuadrados de pimiento amarillo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },
  {
    id: "vie-e2",
    name: "Ensalada de Rábano, Zanahoria y Lechuga",
    image: "/images/Fotos-menu/Ensalada de Rábano, Zanahoria y Lechuga.png",
    calories: 20,
    macros: { protein: 1, carbs: 4, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada sencilla, voluminosa y extremadamente crujiente. Utiliza una base abundante de lechuga crespa, acompañada de bastones de zanahoria que aportan un ligero dulzor y medias lunas de rábano para un final fresco y sutilmente picante. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
    name: "Gelatina de limón",
    image: "/images/Fotos-menu/Gelatina de limon.webp",
    calories: 70,
    macros: { protein: 1.5, carbs: 16, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Un postre clásico, ligero y muy refrescante, que destaca por su vibrante color amarillo verdoso y su textura translúcida y temblorosa. Esta gelatina sabor a limón se presenta en su forma más pura y sencilla, con una superficie perfectamente lisa y cristalina. Es una opción dulce ideal para limpiar el paladar con un bocado suave y fresco. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-3",
    name: "Pastel de naranja",
    image: "/images/Fotos-menu/Pastel de naranja.png",
    calories: 306,
    macros: { protein: 6, carbs: 40, fat: 15 },
    allergens: ["Gluten", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Un bizcocho casero de miga suave, esponjosa y muy aromática. Su carácter distintivo y frescura se logran gracias a la incorporación generosa de jugo natural y ralladura de naranja, que aportan un sabor cítrico vibrante. La masa base se prepara con harina de trigo (fuente de gluten), huevos frescos, azúcar y aceite (o mantequilla), creando un equilibrio perfecto entre dulzor y acidez. Alérgenos: Gluten, huevo y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
