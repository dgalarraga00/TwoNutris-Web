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
    name: "Risotto a la carbonara",
    image: "/images/Fotos-menu/Risotto a la Carbonara.png",
    calories: 793,
    macros: { protein: 16, carbs: 49, fat: 60 },
    allergens: ["Lácteos", "Huevo", "Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Arroz tipo Arborio o Carnaroli, pancetta o guanciale (bacon) crujiente y dorado, salsa cremosa a base de yemas de huevo y abundante queso Parmesano y Pecorino Romano, caldo de pollo o vegetales (con un toque de vino blanco), mantequilla (para la mantecatura), cebolla perla picada, aceite de oliva, pimienta negra recién molida, sal y perejil fresco picado. Alérgenos: Lácteos, huevo, sulfitos y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Spaghetti a la boloñesa",
    image: "/images/Fotos-menu/Spaghetti a la boloñesa.png",
    calories: 618,
    macros: { protein: 30, carbs: 60, fat: 18 },
    allergens: ["Gluten", "Lácteos"],
    ingredients: "Este plato está hecho con: Fideos tipo Spaghetti cocidos al dente, carne de res molida (magra), queso parmesano rallado (espolvoreado encima), mantequilla (para suavizar la salsa), caldo de carne (agua, huesos de res, cebolla, zanahoria, apio y sal), tomate riñón maduro picado, pasta de tomate, zanahoria picada en cubos pequeños, cebolla perla picada finamente, vino tinto (para la base de la salsa), ajo en pasta, aceite de oliva, orégano seco, hojas de laurel, sal, pimienta negra y hojas de albahaca fresca para decorar. Alérgenos: Gluten y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Spaghetti a la boloñesa de soya",
    image: "/images/Fotos-menu/Spaghetti a la boloñesa vegetariano.png",
    calories: 720,
    macros: { protein: 24, carbs: 77, fat: 25 },
    allergens: ["Gluten", "Lácteos", "Soya"],
    ingredients: "Este plato está hecho con: Fideos tipo Spaghetti cocidos al dente, carne de soya texturizada (Carve) hidratada y condimentada, queso parmesano rallado (espolvoreado encima), salsa de tomate casera (tomate riñón, cebolla perla, zanahoria rallada, apio), pasta de tomate, caldo de vegetales, mantequilla, vino tinto, salsa china (soya), ajo en pasta, aceite de oliva, orégano seco, laurel, una pizca de azúcar, sal, pimienta negra y hojas de albahaca fresca para decorar. Alérgenos: Gluten, lácteos y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Rigatoni con salsa boletus y jamón",
    image: "/images/Fotos-menu/Rigatoni con salsa boletus y jamón.png",
    calories: 756,
    macros: { protein: 27, carbs: 97, fat: 25 },
    allergens: ["Gluten", "Lácteos", "Sulfitos"],
    ingredients: "Este plato está hecho con: Pasta rigatoni cocida al dente (sémola de trigo), salsa cremosa de setas boletus (boletus edulis) y champiñones, dados de jamón (curado o cocido) salteados, crema de leche (nata) para dar untuosidad, queso parmesano o grana padano rallado finamente por encima, sofrito de cebolla y ajo, un toque de vino blanco (para realzar el sabor de las setas), aceite de oliva, pimienta negra recién molida y perejil fresco. Alérgenos: Gluten, lácteos y sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Churrasco de pollo con camote al horno",
    image: "/images/Fotos-menu/Churrasco de pollo con camote al horno.webp",
    calories: 650,
    macros: { protein: 35, carbs: 55, fat: 30 },
    allergens: ["Gluten", "Huevo", "Mostaza"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo a la plancha, arroz blanco cocido, camote al horno tipo bastón, huevo frito, salsa inglesa (en el marinado), mostaza, ajo en pasta, aceite vegetal, comino, pimentón dulce (paprika), sal, pimienta negra y perejil fresco picado para decorar. Alérgenos: Gluten, huevo y mostaza. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Filete de Berenjena a la parmesana",
    image: "/images/Fotos-menu/Filete de Berenjena a la parmesana.webp",
    calories: 400,
    macros: { protein: 15, carbs: 30, fat: 22 },
    allergens: ["Lácteos", "Apio"],
    ingredients: "Este plato está hecho con: Berenjena fresca (cortada en loncha gruesa), queso mozzarella rallado (fundido encima), queso parmesano (gratinado), salsa de tomate casera (tomate riñón maduro, cebolla perla, zanahoria, apio, ajo y albahaca), orégano seco, sal, pimienta negra y hojas de albahaca fresca para decorar. Alérgenos: Lácteos y apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
    ingredients: "Este plato está hecho con: Cubos de pescado blanco fresco y tierno, cocinados a fuego lento en un sango tradicional (una salsa espesa y reconfortante a base de plátano verde majado, refrito de vegetales y abundante pasta de maní que le da su carácter cremoso y sabor único). Se sirve acompañado de tortillas de yuca doradas a la plancha (que pueden contener un poco de harina de trigo para dar consistencia), decorado con maní tostado crujiente por encima, cilantro fresco y una mitad de limón para realzar los sabores. Alérgenos: Pescado, maní y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Cerdo al limón con papas al horno",
    image: "/images/Fotos-menu/Cerdo al limón con papas al horno.png",
    calories: 514,
    macros: { protein: 28, carbs: 48, fat: 18 },
    allergens: ["Huevo", "Gluten", "Sulfitos"],
    ingredients: "Este plato está hecho con: Medallón de lomo de cerdo tierno y jugoso, sellado a la plancha y bañado en una salsa aterciopelada de limón (elaborada con jugo de limón natural que aporta sulfitos, caldo, y ligada con yema de huevo y un toque de harina de trigo para lograr su textura cremosa). Se sirve decorado con rodajas finas y ralladura de limón confitado. Acompañado de papas rústicas en gajos asadas al horno con piel, sazonadas con aceite, sal marina, pimienta y romero fresco. Alérgenos: Huevo, gluten y sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Guiso veggie de lentejas con arroz",
    image: "/images/Fotos-menu/Guiso veggie de lentejas con arroz.png",
    calories: 652,
    macros: { protein: 30, carbs: 61, fat: 32 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Lentejas estofadas con variedad de vegetales, hojas de espinaca fresca integradas al final para mantener su color, trozos de papa y zanahoria tierna, sofrito base aromático de cebolla, ajo y apio (que aporta sabor y el alérgeno), arroz blanco cocido al vapor, caldo de vegetales natural, aceite de oliva, pimentón, hoja de laurel, sal y pimienta negra. Alérgenos: Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Pollo en salsa satay con verduras y arroz",
    image: "/images/Fotos-menu/Pollo en salsa satay con verduras y arroz.png",
    calories: 700,
    macros: { protein: 29, carbs: 70, fat: 34 },
    allergens: ["Maní", "Soya"],
    ingredients: "Este plato está hecho con: Pechuga de pollo jugosa cortada en láminas, bañada en una auténtica salsa Satay (una crema rica y aromática a base de maní tostado, leche de coco, especias y un toque de salsa de soya para profundidad). Se acompaña de una mezcla de verduras frescas salteadas al dente (vainitas chinas o tirabeques, tiras de pimiento rojo y zanahoria) y arroz blanco aromático. Se sirve decorado con maní troceado crujiente, rodajas de chile rojo fresco, cilantro y una cuña de limón para exprimir al gusto. Alérgenos: Maní y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Curry de tofu con verduras y arroz integral",
    image: "/images/Fotos-menu/Curry de tofu con verduras y arroz integral.png",
    calories: 673,
    macros: { protein: 15, carbs: 52, fat: 45 },
    allergens: ["Soya", "Mostaza"],
    ingredients: "Este plato está hecho con: Cubos de tofu firme dorados a la plancha (fuente de proteína vegetal y soya), cocinados a fuego lento en una salsa de curry cremosa y aromática (elaborada con leche de coco, especias, cúrcuma que aportan intensidad). Se acompaña de una variedad de verduras frescas al dente: flores de brócoli, zanahorias en rodajas, vainitas y pimientos rojos. Se sirve con arroz integral suelto, decorado con rodajas de chile fresco, cilantro y una cuña de lima para añadir acidez. Alérgenos: Soya y mostaza. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Carne mongoliana con quinoa tostada con ajonjolí",
    image: "/images/Fotos-menu/Carne mongoliana con quinoa tostada con ajonjolí.png",
    calories: 515,
    macros: { protein: 30, carbs: 65, fat: 15 },
    allergens: ["Soya", "Gluten", "Sésamo"],
    ingredients: "Este plato está hecho con: Láminas finas de lomo de res, quinoa tostada, tallos de cebolla blanca cortados en bastones, salsa china (soya), salsa de ostión, aceite de ajonjolí, azúcar morena, caldo de res (agua, huesos, cebolla perla, zanahoria, sal), maicena (fécula de maíz), ají seco entero, ajo picado, jengibre fresco rallado, vinagre, aceite vegetal, sal y pimienta negra. Alérgenos: Soya, gluten y sésamo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Lomo de cerdo en salsa española con arroz",
    image: "/images/Fotos-menu/Lomo de cerdo en salsa española arroz.webp",
    calories: 486,
    macros: { protein: 29, carbs: 52, fat: 18 },
    allergens: ["Gluten", "Sulfitos", "Apio", "Mostaza"],
    ingredients: "Este plato está hecho con: Medallones de lomo fino de chancho, arroz blanco, caldo de res oscuro (agua, huesos tostados, cebolla, zanahoria, apio y sal), cebolla perla picada (para la salsa), harina de trigo (para el roux que espesa la salsa española), vino tinto (base de la salsa), mostaza (para el adobo del cerdo), pasta de tomate, ajo, aceite, romero fresco (para las papas), pimentón dulce (paprika), sal, pimienta negra y perejil picado. Alérgenos: Gluten, sulfitos, apio y mostaza. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Pollo al chilindrón con arroz",
    image: "/images/Fotos-menu/Pollo al chilindrón con arroz.png",
    calories: 520,
    macros: { protein: 25, carbs: 51, fat: 19 },
    allergens: ["Sulfitos", "Soya"],
    ingredients: "Este plato está hecho con: Presa de pollo (muslo o pierna) estofada, arroz blanco cocido, tiras de pimiento rojo y verde, jamón (o tocino) en cubos, salsa de tomate casera (tomate riñón, cebolla, ajo), cebolla perla en juliana, vino blanco (o tinto, base de la salsa), salsa china (soya, para realzar el sabor y color), caldo de pollo, pimentón dulce (paprika), ajo picado, aceite de oliva, laurel, sal, pimienta negra y perejil fresco picado. Alérgenos: Sulfitos y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Guiso de fréjol con arroz",
    image: "/images/Fotos-menu/Guiso de frejol con arroz.webp",
    calories: 574,
    macros: { protein: 20, carbs: 56, fat: 30 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Mix de fréjoles cocinados a fuego lento hasta espesar, arroz blanco cocido, trozos de papa chola y zanahoria tierna integrados en el guiso, sofrito base (cebolla paiteña, pimiento, tomate y ajo), caldo de vegetales (que suele contener apio en su base aromática), comino, orégano, hoja de laurel, aceite vegetal (o achiote para el color), sal, pimienta y cilantro fresco para decorar. Alérgenos: Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  // LUNES
  {
    id: "lun-e1",
    name: "Ensalada Verde",
    image: "/images/Fotos-menu/Ensalda verde.jpeg",
    calories: 15,
    macros: { protein: 1, carbs: 3, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada ligera y refrescante con una base de lechuga común, pimiento verde, apio, pepinillo, pera (o manzana verde). Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },
  {
    id: "lun-e2",
    name: "Ensalada fresca",
    image: "/images/Fotos-menu/Ensalada Fresca.jpeg",
    calories: 20,
    macros: { protein: 0, carbs: 4, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada crujiente que combina lechuga común (o crespa), tomate cherry, pepinillo y zanahoria. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },

  // MARTES
  {
    id: "mar-e1",
    name: "Ensalada de Remolacha",
    image: "/images/Fotos-menu/Ensalada de remolacha.jpeg",
    calories: 30,
    macros: { protein: 2, carbs: 6, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Mezcla colorida y llena de textura que lleva remolacha, zanahoria, cebolla blanca, culantro y limón. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },
  {
    id: "mar-e2",
    name: "Ensalada de granos",
    image: "/images/Fotos-menu/Ensalada de granos.jpeg",
    calories: 100,
    macros: { protein: 6, carbs: 20, fat: 2 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada divertida que lleva choclo tierno, fréjol tierno, arvejas, hojas de apio y tomate riñón. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-e1",
    name: "Ensalada Tricolor",
    image: "/images/Fotos-menu/Ensalada Tricolor .jpeg",
    calories: 32,
    macros: { protein: 1, carbs: 7, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada vibrante y crujiente en una cama de pimientos de 3 colores (rojo, amarillo y verde), tomate cherry, chayota, cebollín y perejil. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },
  {
    id: "mie-e2",
    name: "Pico de Gallo",
    image: "/images/Fotos-menu/Pico de Gallo.jpeg",
    calories: 24,
    macros: { protein: 1, carbs: 5, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una combinación deliciosa y nutritiva de tomate riñón en cubos pequeños, cebolla perla, pintado con pimiento verde y culantro. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-e1",
    name: "Ensalada de quinoa",
    image: "/images/Fotos-menu/Ensalada de quinoa.jpeg",
    calories: 57,
    macros: { protein: 2, carbs: 10, fat: 1 },
    allergens: ["Leguminosas"],
    ingredients: "Este plato está hecho con: Ensalada de contrastes: una cama de quinoa, espinaca, tomate cherry (o riñón) y pepino, pintado con zanahoria y cebolla perla. Alérgenos: Leguminosas (arvejas). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },
  {
    id: "jue-e2",
    name: "Ensalada de brócoli",
    image: "/images/Fotos-menu/Ensalada de brócoli.jpeg",
    calories: 22,
    macros: { protein: 1, carbs: 4, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Opción con muy buena estructura a base de brócoli blanqueado. Gana frescura al mezclarse con cebolla paiteña en juliana, choclo dulce y toques de culantro. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-e1",
    name: "La sencilla",
    image: "/images/Fotos-menu/La sencilla.jpeg",
    calories: 38,
    macros: { protein: 1, carbs: 8, fat: 0 },
    allergens: ["Pimienta"],
    ingredients: "Este plato está hecho con: Ensalada con mucha identidad y textura sobre una abundante base verde de hojas de lechuga, un toque crocante con las rodajas de pepinillo, y para terminar tomate cherry (o riñón) con un toque de pimienta negra. Alérgenos: Pimienta. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },
  {
    id: "vie-e2",
    name: "Ensalada Parmesana",
    image: "/images/Fotos-menu/Ensalada Parmesana.jpeg",
    calories: 200,
    macros: { protein: 4, carbs: 10, fat: 16 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Ensalada voluminosa y extremadamente crujiente. Utiliza una base abundante de lechuga crespa y común, acompañada de zanahoria rallada que aporta un ligero dulzor y un toque sutil de queso parmesano. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
    name: "Banana cake con coco rallado",
    image: "/images/Fotos-menu/Banana cake con coco rallado.png",
    calories: 300,
    macros: { protein: 4, carbs: 40, fat: 16 },
    allergens: ["Gluten", "Huevo", "Coco"],
    ingredients: "Este plato está hecho con: Una versión tropical del clásico pastel de plátano, con una miga húmeda y dulce gracias a la fruta madura y la incorporación de coco rallado que añade una textura especial y aroma exótico. La base del batido se prepara con harina de trigo (que aporta gluten) y huevos frescos para dar estructura. Alérgenos: Gluten, huevo y coco. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-3",
    name: "Brownie Semiamargo",
    image: "/images/Fotos-menu/Brownie Semiamargo.png",
    calories: 340,
    macros: { protein: 9, carbs: 40, fat: 16 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Porción cuadrada de brownie de chocolate semiamargo, caracterizado por su costra superior brillante y craquelada y un interior denso y húmedo. Elaborado con una base de chocolate negro fundido y mantequilla (que aporta lácteos), batida con huevos y azúcar. La mezcla incorpora harina de trigo (fuente de gluten) y trozos de nueces tostadas (frutos secos) visibles en la superficie. Se presenta decorado con cacao en polvo espolvoreado sobre el plato. Alérgenos: Gluten, huevo, lácteos y frutos secos (nueces). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
