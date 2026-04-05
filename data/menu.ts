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
    name: "Pollo a la pepitoria con papas",
    image: "/images/Fotos-menu/Pollo a la pepitoria con papas.png",
    weight: 430, calories: 611,
    macros: { protein: 32, carbs: 52, fat: 28 },
    allergens: ["Frutos secos", "Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Muslo y contramuslo de pollo guisados lentamente hasta quedar tiernos, cubiertos con la tradicional salsa pepitoria: una salsa espesa y aromática elaborada con una picada de almendras, yema de huevo cocido, azafrán, ajo y un majado de pan frito. Se sirve decorado con huevo duro picado y láminas de almendras tostadas por encima, acompañado de dados de papa frita crujiente y perejil fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Lomo de cerdo en salsa española con arroz",
    image: "/images/Fotos-menu/Lomo de cerdo en salsa espanola.png",
    weight: 420, calories: 486,
    macros: { protein: 29, carbs: 52, fat: 18 },
    allergens: ["Gluten", "Sulfitos", "Apio", "Mostaza"],
    ingredients: "Este plato está hecho con: Medallones de lomo fino de chancho, arroz blanco, caldo de res oscuro (agua, huesos tostados, cebolla, zanahoria, apio y sal), cebolla perla picada, harina de trigo (para el roux), vino tinto, mostaza (para el adobo del cerdo), pasta de tomate, ajo, aceite, romero fresco, pimentón dulce, sal, pimienta negra y perejil picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Wok de verduras",
    image: "/images/Fotos-menu/Wok de verduras.png",
    weight: 380, calories: 320,
    macros: { protein: 12, carbs: 35, fat: 18 },
    allergens: ["Soya", "Gluten", "Sésamo", "Maní"],
    ingredients: "Este plato está hecho con: Variedad de vegetales frescos cortados en juliana y salteados (zanahoria, brócoli, coliflor, pimiento rojo y verde, cebolla), fideos de arroz (contienen trazas de gluten), salsa de soya, aceite de sésamo, semillas de ajonjolí, aceite vegetal, azúcar, vinagre de arroz, mantequilla de maní (para espesar y dar cuerpo a la salsa), ajo y jengibre fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Pollo en salsa de queso con papas",
    image: "/images/Fotos-menu/Pollo en salsa de queso con papas.png",
    weight: 400, calories: 590,
    macros: { protein: 39, carbs: 50, fat: 26 },
    allergens: ["Lácteos", "Sulfitos", "Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo a la plancha, papas rústicas asadas con hierbas, salsa cremosa a base de crema de leche, mantequilla y queso desmenuzado, un toque de vino blanco, harina de trigo (para ligar la salsa), aceite de oliva, ajo picado, caldo de pollo, huevo (para sellar el pollo o ligar la salsa), sal y pimienta negra.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Gulash de carne con arroz",
    image: "/images/Fotos-menu/Gulash de carne con arroz.png",
    weight: 585, calories: 585,
    macros: { protein: 38, carbs: 52, fat: 18 },
    allergens: ["Apio", "Gluten"],
    ingredients: "Este plato está hecho con: Cubos tiernos de carne de res magra estofados lentamente en su propio jugo con abundante pimentón dulce (paprika) y comino, creando una salsa roja profunda y aromática. Se cocina con una base de cebolla paiteña, pimientos y tomates maduros, espesada ligeramente con harina tostada. Se sirve acompañado de arroz blanco clásico y perejil fresco espolvoreado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Falafel clásico",
    image: "/images/Fotos-menu/Falafel clasico.png",
    weight: 340, calories: 750,
    macros: { protein: 25, carbs: 80, fat: 38 },
    allergens: ["Huevo", "Sésamo", "Apio"],
    ingredients: "Este plato está hecho con: Croquetas de garbanzos triturados con hierbas frescas (perejil y cilantro), ajo y especias (comino, coriandro), huevo (para ligar la masa del falafel), ensalada de tomate y pepino picados, hummus de garbanzo suave, salsa blanca de acompañamiento, caldo de vegetales (base con apio), aceite vegetal para la fritura, sal y pimienta.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Chile de carne con arroz",
    image: "/images/Fotos-menu/Chile de carne con arroz.png",
    weight: 420, calories: 476,
    macros: { protein: 24, carbs: 50, fat: 20 },
    allergens: ["Apio", "Gluten", "Lácteos"],
    ingredients: "Este plato está hecho con: Carne de res molida estofada lentamente con frijoles rojos, arroz blanco de guarnición, salsa espesa de tomate y chiles (confitada con cebolla, pimientos y apio picado finamente), harina de trigo (para dar consistencia al chili), caldo de carne, comino y paprika. Se sirve coronado con queso cheddar rallado, una cucharada de crema agria suave y cilantro fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Albóndigas de pollo en salsa suprema con papas al horno",
    image: "/images/Fotos-menu/Albondigas de pollo en salsa suprema con papas al horno.png",
    weight: 380, calories: 615,
    macros: { protein: 42, carbs: 54, fat: 26 },
    allergens: ["Gluten", "Lácteos", "Huevo", "Apio"],
    ingredients: "Este plato está hecho con: Jugosas albóndigas artesanales de pechuga de pollo (mezcladas con cebolla perla, ajo y hierbas frescas), cocinadas a fuego lento dentro de una Salsa Suprema clásica (velouté de fondo de ave enriquecida con crema de leche, mantequilla y champiñones picados). Se sirve acompañado de papas chauchas o rústicas horneadas con piel, romero y pimentón, finalizado con perejil fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Chili vegetariano con arroz",
    image: "/images/Fotos-menu/Chilli vegetariano con arroz.png",
    weight: 390, calories: 520,
    macros: { protein: 26, carbs: 56, fat: 20 },
    allergens: ["Soya", "Lácteos"],
    ingredients: "Este plato está hecho con: Proteína vegetal texturizada (carne de soya) estofada con frijoles rojos, arroz blanco de guarnición, base de tomate triturado, cebolla, pimientos y especias (comino, pimentón, chile en polvo), caldo de vegetales, aceite vegetal, queso cheddar rallado y crema agria, cilantro fresco y sal.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Pollo cajún con arroz",
    image: "/images/Fotos-menu/Pollo cajun con arroz.png",
    weight: 300, calories: 452,
    macros: { protein: 24, carbs: 44, fat: 20 },
    allergens: ["Apio", "Mostaza"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo rebozada en una mezcla intensa de especias Cajún (pimentón, ajo en polvo, cebolla en polvo, pimienta negra, pimienta de cayena, orégano, tomillo y mostaza molida), sellada a la plancha para crear una costra sabrosa, arroz blanco cocido al vapor, caldo de pollo o vegetales (que aporta el alérgeno apio), aceite vegetal, sal y abundante cebollín fresco picado por encima para refrescar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Fideuá de camarón",
    image: "/images/Fotos-menu/Fideua de camaron.png",
    weight: 360, calories: 496,
    macros: { protein: 34, carbs: 62, fat: 12 },
    allergens: ["Mariscos", "Gluten"],
    ingredients: "Este plato está hecho con: Fideos cortos y gruesos para fideuá (harina de trigo), camarones y trozos de calamar salteados, sofrito base (cebolla, tomate y ajo), fumet de pescado, aceite de oliva, pimentón dulce, hebras de azafrán o colorante alimentario, sal, pimienta y una rodaja de limón.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Guiso de fréjol con arroz",
    image: "/images/Fotos-menu/Guiso de frejol con arroz.png",
    weight: 380, calories: 574,
    macros: { protein: 20, carbs: 56, fat: 30 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Fréjoles rojos cocinados a fuego lento hasta espesar, arroz blanco cocido, trozos de papa chola y zanahoria tierna integrados en el guiso, sofrito base (cebolla paiteña, pimiento, tomate y ajo), caldo de vegetales o carne (base aromática con apio), comino, orégano, hoja de laurel, aceite vegetal, sal, pimienta y cilantro fresco para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Rigatoni con salsa boletus y jamón",
    image: "/images/Fotos-menu/Rigatoni con salsa boletus y jamon.png",
    weight: 450, calories: 756,
    macros: { protein: 27, carbs: 97, fat: 25 },
    allergens: ["Gluten", "Lácteos", "Sulfitos"],
    ingredients: "Este plato está hecho con: Pasta rigatoni cocida al dente (sémola de trigo), salsa cremosa de setas boletus y champiñones, dados de jamón salteados, crema de leche para dar untuosidad, queso parmesano rallado finamente por encima, sofrito de cebolla y ajo, un toque de vino blanco, aceite de oliva, pimienta negra recién molida y perejil fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Dhal de lentejas con arroz y pollo",
    image: "/images/Fotos-menu/Dhal de lentejas con arroz y pollo.png",
    weight: 420, calories: 589,
    macros: { protein: 36, carbs: 55, fat: 25 },
    allergens: ["Lácteos", "Mostaza"],
    ingredients: "Este plato está hecho con: Guiso cremoso de lentejas amarillas o rojas (cocinadas con cúrcuma y comino), pechuga de pollo a la plancha cortada en láminas, arroz basmati o blanco aromático, terminado con un sofrito de especias (tarka) que incluye semillas de mostaza negra y chiles secos, mantequilla o ghee para dar untuosidad, aceite vegetal, ajo, jengibre, cilantro fresco abundante y una rodaja de limón.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Dhal de lentejas con arroz aromático",
    image: "/images/Fotos-menu/Dhal de lentejas con arroz.png",
    weight: 360, calories: 526,
    macros: { protein: 20, carbs: 56, fat: 28 },
    allergens: ["Lácteos", "Mostaza"],
    ingredients: "Este plato está hecho con: Guiso de lentejas amarillas deshechas y cremosas (cocinadas con cúrcuma, jengibre y especias), arroz de grano largo suelto cocinado con cardamomo y clavo de olor, coronado con una cucharada de yogur natural o crema agria, terminado con un sofrito de aceite caliente con chiles rojos secos y semillas de mostaza negra (tarka), y abundante cilantro fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
