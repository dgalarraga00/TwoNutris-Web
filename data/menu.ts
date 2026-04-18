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
    name: "Spaghetti al pesto con pollo",
    image: "/images/Fotos-menu/Spaghetti al pesto con pollo.png", calories: 730,
    macros: { protein: 35, carbs: 80, fat: 30 },
    allergens: ["Gluten", "Huevo", "Frutos secos", "Lácteos"],
    ingredients: "Este plato está hecho con: Fideos spaghetti al huevo (pasta de trigo), pechuga de pollo a la plancha fileteada, salsa pesto casera (albahaca fresca, aceite de oliva, queso parmesano, ajo, piñones o nueces, sal), queso parmesano rallado (decoración), crema de leche (un toque para suavizar la salsa), piñones enteros tostados (topping), aceite vegetal, sal, pimienta negra y hojas de albahaca fresca para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Spaghetti al pesto con queso",
    image: "/images/Fotos-menu/Spaghetti al pesto con queso.png", calories: 633,
    macros: { protein: 20, carbs: 82, fat: 25 },
    allergens: ["Gluten", "Lácteos", "Frutos secos", "Huevo"],
    ingredients: "Este plato está hecho con: Fideos tipo Spaghetti al huevo (pasta de trigo), salsa pesto tradicional (albahaca fresca, aceite de oliva, queso parmesano, piñones, ajo y sal), queso parmesano rallado (espolvoreado encima), piñones enteros tostados, aceite de oliva, pimienta negra recién molida y hojas de albahaca fresca para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Filete de res con arroz",
    image: "/images/Fotos-menu/Filete de res con arroz.jpeg", calories: 660,
    macros: { protein: 43, carbs: 55, fat: 25 },
    allergens: ["Soya"],
    ingredients: "Este plato está hecho con: Filete de lomo de res asado a la parrilla, arroz blanco cocido, jugo de carne (fondo oscuro reducido), salsa china (soya, para sazonar y dar color), aceite vegetal, ajo en pasta, tomillo fresco (decoración y aroma), sal en grano (sal marina), pimienta negra recién molida y perejil fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Pollo tempura con arroz",
    image: "/images/Fotos-menu/Pollo tempura con arroz.png", calories: 710,
    macros: { protein: 40, carbs: 80, fat: 23 },
    allergens: ["Gluten", "Huevo", "Soya"],
    ingredients: "Este plato está hecho con: Tiras de pechuga de pollo rebozadas en masa tempura ligera y crujiente, arroz blanco cocido al vapor, salsa Tentsuyu para dipear (base de salsa de soya, caldo y aceite de ajonjolí), nabo blanco rallado, harina de trigo (base del rebozado), huevo (para la emulsión de la masa fría), agua con gas o helada, aceite vegetal para freír, cebollín fresco picado (cebolla china) para decorar, sal y una pizca de azúcar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Cerdo en salsa mexicana con tortillas",
    image: "/images/Fotos-menu/Cerdo en salsa mexicana con tortillas.png", calories: 482,
    macros: { protein: 30, carbs: 50, fat: 18 },
    allergens: ["Gluten", "Lácteos"],
    ingredients: "Este plato está hecho con: Carne de cerdo desmechada y cocinada a fuego lento, tortillas de harina de trigo calientes, salsa roja mexicana (tomate, chiles secos -guajillo o ancho-, cebolla, ajo, especias), queso fresco o cotija desmenuzado (topping lácteo), chiles secos enteros (decoración), caldo de carne, aceite vegetal, cilantro fresco picado, rodajas de limón para acompañar, sal y pimienta.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Arroz moro con queso y verduras",
    image: "/images/Fotos-menu/Arroz moro con queso y verduras.png", calories: 715,
    macros: { protein: 24, carbs: 80, fat: 33 },
    allergens: ["Lácteos", "Sulfitos"],
    ingredients: "Este plato está hecho con: Arroz blanco, lentejas cocidas (o fréjol negro, según disponibilidad), queso fresco de mesa (para servir encima o mezclado), mantequilla (para suavizar el moro), caldo de vegetales (agua, zanahoria, cebolla perla, pimiento, tallos de cilantro), zanahoria picada en cubos, arvejas tiernas, cebolla paiteña (para el refrito y el encurtido), pimiento verde, tomate riñón, vinagre blanco (para el encurtido/curtido), ajo en pasta, achiote, aceite vegetal, comino, sal y cilantro (yerbita) picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Pastel de papa relleno de carne",
    image: "/images/Fotos-menu/Pastel de papa relleno de carne.png", calories: 506,
    macros: { protein: 20, carbs: 40, fat: 30 },
    allergens: ["Lácteos", "Huevo"],
    ingredients: "Este plato está hecho con: Capas de puré de papa suave y cremoso (elaborado con leche y mantequilla), relleno generoso de carne de res molida y guisada (con trocitos de zanahoria, cebolla y ajo en una salsa de carne espesa), superficie dorada al horno y pincelada con huevo para lograr ese color y textura gratinada, aceite vegetal, comino, sal, pimienta negra y perejil fresco espolvoreado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Pollo vindaloo con arroz",
    image: "/images/Fotos-menu/Pollo Vindaloo con arroz.png", calories: 797,
    macros: { protein: 38, carbs: 60, fat: 45 },
    allergens: ["Mostaza", "Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Pechuga de pollo marinada y cocinada en una salsa Vindaloo intensa y especiada (caracterizada por su toque picante y ácido, con una base de vinagre, ajo, jengibre, chiles rojos secos y especias), trozos de papa tierna cocidos en la misma salsa para absorber el sabor, arroz blanco aromático de guarnición, semillas de mostaza (en la base del curry), salsa ligada (que puede contener trazas de harina de trigo o condimentos con gluten), aceite vegetal, sal y decorado con rodajas de chile fresco y hojas de cilantro.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Ensalada tailandesa de fideo de arroz",
    image: "/images/Fotos-menu/Ensalada tailandesa de fideos de arroz.png", calories: 492,
    macros: { protein: 18, carbs: 60, fat: 20 },
    allergens: ["Maní", "Soya", "Sésamo"],
    ingredients: "Este plato está hecho con: Fideos de arroz delgados (vermicelli), pepino en rodajas, zanahoria en juliana (tiras finas), pimiento rojo en tiras, col morada rallada, brotes de soya (dientes de dragón), maní tostado y triturado (topping abundante), cebollín (cebolla china), cilantro y albahaca fresca, rodajas de ají rojo (para el toque picante), aderezo thai (jugo de limón, salsa de soya, azúcar, aceite de sésamo, ajo y jengibre).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Nasi Goreng con camarón (Arroz frito indonesio)",
    image: "/images/Fotos-menu/Nasi Goreng con camarón.png", calories: 527,
    macros: { protein: 40, carbs: 53, fat: 18 },
    allergens: ["Camarón", "Soya", "Huevo", "Gluten"],
    ingredients: "Este plato está hecho con: Arroz frito al estilo indonesio, salteado al wok con la tradicional salsa dulce Kecap Manis (que aporta sabor, color oscuro, soya y gluten), pasta de chile (sambal) y especias. Se sirve acompañado de camarones salteados jugosos, coronado con un huevo frito de yema tierna, y decorado con cebolla frita crujiente, cebollín fresco, y rodajas de pepino y tomate para refrescar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Nasi Goreng vegetariano",
    image: "/images/Fotos-menu/Nasi Goreng vegetariano.png", calories: 500,
    macros: { protein: 20, carbs: 50, fat: 20 },
    allergens: ["Soya", "Huevo", "Gluten"],
    ingredients: "Este plato está hecho con: Arroz frito al estilo indonesio salteado con Kecap Manis (salsa de soya dulce que aporta color, sabor, soya y gluten) y pasta de especias, mezclado con proteínas vegetales: cubos de tofu firme frito y tempeh dorado. Incluye vegetales integrados como guisantes, zanahoria y judías verdes. Se sirve acompañado de rodajas frescas de tomate y pepino, y coronado con cebolla frita crujiente y cebollín.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Pechuga de pollo a la florentina con papas",
    image: "/images/Fotos-menu/Pechuga de pollo a la florentina con papas.png", calories: 540,
    macros: { protein: 35, carbs: 55, fat: 20 },
    allergens: ["Lácteos", "Gluten"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo tierna, cubierta con una cremosa salsa a la florentina (elaborada con espinacas picadas, crema de leche o salsa blanca bechamel y queso, que aporta los lácteos). El plato se termina con una capa de queso gratinado y dorado al horno. Se sirve acompañado de papas rústicas en gajos asadas con su piel y sazonadas con hierbas finas. La salsa contiene harina de trigo como espesante (fuente de gluten).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Carne mechada con papas",
    image: "/images/Fotos-menu/Carne mechada con papas.png", calories: 710,
    macros: { protein: 40, carbs: 50, fat: 35 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Carne de res (tipo falda o vacío) cocinada lentamente hasta deshacerse, desmechada en hebras finas y guisada en una salsa roja de tomate, cebolla, pimientos rojos en tiras y caldo de carne o verduras (que contiene la base de apio para el sabor), papas rústicas en gajos asadas al horno con piel, sazonadas con hierbas, pimentón, sal, pimienta y un toque de aceite vegetal.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Pescado al ajillo con patacones",
    image: "/images/Fotos-menu/Pescado al ajillo con patacones.png", calories: 653,
    macros: { protein: 30, carbs: 50, fat: 37 },
    allergens: ["Pescado", "Lácteos"],
    ingredients: "Este plato está hecho con: Filetes frescos de pescado blanco (como corvina, tilapia o dorado) sellados a la plancha, bañados en una intensa salsa al ajillo (elaborada con abundante ajo laminado y dorado, aceite de oliva y mantequilla para dar cremosidad), decorados con rodajas finas de chile rojo (para un toque de color y calor suave) y perejil fresco. Se acompaña de patacones (plátano verde machacado y frito) crujientes y una mitad de limón para exprimir al gusto.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Bowl de quinoa",
    image: "/images/Fotos-menu/Bowl de quinoa.png", calories: 450,
    macros: { protein: 25, carbs: 50, fat: 18 },
    allergens: ["Lácteos", "Sésamo"],
    ingredients: "Este plato está hecho con: Base nutritiva de quinoa tricolor cocida al punto, acompañada de cubos de camote (batata) asados al horno hasta caramelizar, hojas de espinaca baby frescas, tomates cherry rojos y láminas de aguacate en su punto perfecto de madurez. Todo bañado con un aderezo cremoso (estilo salsa de yogur y tahini, que aporta los lácteos y el toque de nuez) y finalizado con una lluvia crujiente de semillas de girasol y sésamo tostado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  { id: "lun-e1", name: "Ensalada Fresca", image: "/images/Fotos-menu/Ensalada Fresca.jpeg", calories: 20, macros: { protein: 0, carbs: 4, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada crujiente que combina lechuga común (o crespa), Tomate cherry, pepinillo y zanahoria.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "lunes" },
  { id: "lun-e2", name: "Ensalada Verde", image: "/images/Fotos-menu/Ensalda verde.jpeg", calories: 15, macros: { protein: 1, carbs: 3, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada ligera y refrescante con una base de lechuga común, pimiento verde, apio, pepinillo, pera (o manzana verde).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "lunes" },

  { id: "mar-e1", name: "Ensalada de Remolacha", image: "/images/Fotos-menu/Ensalada de remolacha.jpeg", calories: 30, macros: { protein: 2, carbs: 6, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Mezcla colorida y llena de textura lleva remolacha, zanahoria, cebolla blanca, culantro y limón.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "martes" },
  { id: "mar-e2", name: "Ensalada de granos", image: "/images/Fotos-menu/Ensalada de granos.jpeg", calories: 100, macros: { protein: 6, carbs: 20, fat: 2 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada divertida lleva choclo tierno, frejol tierno, arvejas, hojas de apio y tomate riñón.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "martes" },

  { id: "mie-e1", name: "Ensalada Tricolor", image: "/images/Fotos-menu/Ensalada Tricolor.jpeg", calories: 32, macros: { protein: 1, carbs: 7, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Ensalada vibrante y crujiente en una cama de pimientos de 3 colores (rojo, amarillo y verde), tomate cherry, chayota, cebollín y perejil.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "miercoles" },
  { id: "mie-e2", name: "Pico de Gallo", image: "/images/Fotos-menu/Pico de Gallo.jpeg", calories: 24, macros: { protein: 1, carbs: 5, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Una combinación deliciosa y nutritiva de tomate riñón en cubos pequeños, cebolla perla, pintado con pimiento verde y culantro.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "miercoles" },

  { id: "jue-e1", name: "Ensalada de quinoa", image: "/images/Fotos-menu/Ensalada de quinoa.jpeg", calories: 57, macros: { protein: 2, carbs: 10, fat: 1 }, allergens: ["Leguminosas"], ingredients: "Este plato está hecho con: Ensalada de contrastes una cama de quinoa, espinaca, tomate cherry (o riñón) y pepino, pintado con zanahoria y cebolla perla.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "jueves" },
  { id: "jue-e2", name: "Ensalada de brócoli", image: "/images/Fotos-menu/Ensalada de brócoli.jpeg", calories: 22, macros: { protein: 1, carbs: 4, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Opción con muy buena estructura a base de brócoli blanqueados. Gana frescura al mezclarse con cebolla paiteña en juliana, choclo dulce y toques de culantro.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "jueves" },

  { id: "vie-e1", name: "La sencilla", image: "/images/Fotos-menu/La sencilla.jpeg", calories: 38, macros: { protein: 1, carbs: 8, fat: 0 }, allergens: ["Pimienta"], ingredients: "Este plato está hecho con: Ensalada con mucha identidad y textura sobre una abundante base verde de hojas de lechuga, un toque crocante con las rodajas de pepinillo, y para terminar tomate cherry (o riñón) con un toque de pimienta negra.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "viernes" },
  { id: "vie-e2", name: "Ensalada Parmesana", image: "/images/Fotos-menu/Ensalada Parmesana.jpeg", calories: 200, macros: { protein: 4, carbs: 10, fat: 16 }, allergens: ["Lácteos"], ingredients: "Este plato está hecho con: Ensalada voluminosa y extremadamente crujiente. Utiliza una base abundante de lechuga crespa y común, acompañada de zanahoria rallada que aportan un ligero dulzor y un toque sutil de queso parmesano.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "viernes" },

  /* ── POSTRES (toda la semana) ───────────────────────────────── */
  {
    id: "pos-1",
    name: "Torta de Zanahoria",
    image: "/images/Fotos-menu/Torta de Zanahoria.png", calories: 280,
    macros: { protein: 4, carbs: 32, fat: 9 },
    allergens: ["Gluten", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Rebanada de torta de zanahoria (carrot cake) de miga esponjosa y húmeda, elaborada con abundante zanahoria rallada fresca y una mezcla de especias cálidas (como canela). La masa base se prepara con harina de trigo (que aporta gluten), huevos frescos y aceite o mantequilla. Está cubierta por una generosa capa de frosting o glaseado cremoso de queso (elaborado con queso crema, mantequilla y azúcar, que aporta los lácteos).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Pastel de Plátano",
    image: "/images/Fotos-menu/Pastel de Plátano.png", calories: 340,
    macros: { protein: 5, carbs: 56, fat: 13 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Rebanada de pastel de plátano casero de miga tierna y húmeda, elaborado con plátanos maduros, harina de trigo (que aporta gluten) y una base rica enriquecida con huevos y mantequilla (que aporta lácteos). Se hornea con un toque de canela y vainilla, y se sirve coronado con mitades de nueces tostadas (frutos secos) en la superficie y decorado con una fina lluvia de azúcar glas.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-3",
    name: "Mix de Frutas Frescas (Del día)",
    image: "/images/Fotos-menu/Mix de Frutas Frescas (Solo Sandía).png", calories: 70,
    macros: { protein: 0, carbs: 15, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Selección del Chef según temporada (Puede incluir: Melón, Papaya, Piña, Sandía).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
