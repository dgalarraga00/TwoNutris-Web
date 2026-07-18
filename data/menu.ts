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
    name: "Chuleta de cerdo a la naranja con papas",
    image: "/images/Fotos-menu/Chuleta de cerdo (fina) a la naranja con papas.png",
    calories: 610,
    macros: { protein: 28, carbs: 40, fat: 33 },
    allergens: ["Gluten", "Soya"],
    ingredients: "Este plato está hecho con: Chuleta de cerdo tierna y jugosa, sellada a la plancha y glaseada con una brillante salsa gastrique de naranja (elaborada con jugo natural, tiras de piel de naranja confitada, azúcar y un toque de salsa de soya que equilibra el dulce y aporta soya y gluten). Se sirve acompañada de papas baby asadas al horno con su piel hasta quedar doradas, sazonadas con aceite, sal, pimienta y ramas de tomillo fresco aromático. Alérgenos: Gluten y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Pollo en salsa agridulce y arroz",
    image: "/images/Fotos-menu/Pollo en salsa agridulce y arroz.webp",
    calories: 680,
    macros: { protein: 30, carbs: 80, fat: 20 },
    allergens: ["Soya", "Gluten", "Sulfitos", "Huevo"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo apanada y crujiente, arroz blanco cocido, salsa agridulce oriental (pasta de tomate, vinagre, azúcar, jugo de piña, salsa china/soya), trozos de piña en almíbar, pimiento rojo y verde cortado en cuadros, cebolla perla en pluma, huevo batido (para el empanizado), harina de trigo, pan rallado (apanadura), ajo en pasta, aceite vegetal, semillas de ajonjolí (sésamo) blanco y negro, sal, pimienta y cebollín picado para decorar. Alérgenos: Soya, gluten, sulfitos y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Lentejas veggie con kale y piquillo",
    image: "/images/Fotos-menu/Lentejas veggie con kale y piquillo.png",
    calories: 410,
    macros: { protein: 23, carbs: 40, fat: 20 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Lentejas pardinas cocidas, trozos de kale fresco incorporado al final (para que quede tierno pero no deshecho), pimientos del piquillo en tiras, base de sofrito de verduras (cebolla, zanahoria, pimiento rojo), caldo de vegetales (agua, puerro, zanahoria, cebolla, calabacín, apio), aceite de oliva virgen extra, ajo, hoja de laurel, pimentón dulce (paprika), comino molido, sal y pimienta negra. Alérgenos: Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Arroz meloso de carne",
    image: "/images/Fotos-menu/Arroz meloso de carne.webp",
    calories: 710,
    macros: { protein: 43, carbs: 58, fat: 30 },
    allergens: ["Sulfitos", "Lácteos"],
    ingredients: "Este plato está hecho con: Arroz de grano corto cocinado en su punto meloso (cremoso pero con el grano entero), trozos de carne de res tierna estofada, sofrito base de cebolla, ajo y pimientos rojos, rodajas de zanahoria tiernas, caldo de carne oscuro y sabroso, un toque de vino tinto o blanco (que aporta los sulfitos y profundidad al sabor), finalizado con mantequilla o queso rallado (para dar brillo y cremosidad extra), aceite de oliva, sal, pimienta negra y perejil fresco picado. Alérgenos: Sulfitos y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Pollo al chimichurri con papas rústicas",
    image: "/images/Fotos-menu/Pollo al chimichurri con papas rústicas.png",
    calories: 470,
    macros: { protein: 28, carbs: 35, fat: 24 },
    allergens: ["Sulfitos"],
    ingredients: "Este plato está hecho con: Filete de pechuga de pollo jugoso, sellado a la plancha y bañado generosamente en nuestra salsa chimichurri artesanal (elaborada con perejil, orégano, ajo y un toque de ají). Se sirve acompañado de papas doradas al horno. Un plato lleno de sabor tradicional, equilibrado y perfecto para mantener tu energía al máximo. Alérgenos: Sulfitos (por el vinagre). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Arroz moro con queso y verduras",
    image: "/images/Fotos-menu/Arroz moro con queso y verduras.png",
    calories: 715,
    macros: { protein: 24, carbs: 80, fat: 33 },
    allergens: ["Lácteos", "Sulfitos"],
    ingredients: "Este plato está hecho con: Arroz blanco, lentejas cocidas (o fréjol negro, según disponibilidad), queso fresco de mesa (para servir encima o mezclado), mantequilla (para suavizar el moro), caldo de vegetales (agua, zanahoria, cebolla perla, pimiento, tallos de cilantro), zanahoria picada en cubos, arvejas tiernas, cebolla paiteña (para el refrito y el encurtido), pimiento verde, tomate riñón, vinagre blanco (para el encurtido/curtido), ajo en pasta, achiote, aceite vegetal, comino, sal y cilantro (yerbita) picado. Alérgenos: Lácteos y sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Pescado empanizado en salsa tártara con yuca al horno",
    image: "/images/Fotos-menu/Pescado empanizado en salsa tártara con yuca al horno.webp",
    calories: 550,
    macros: { protein: 28, carbs: 60, fat: 22 },
    allergens: ["Pescado", "Gluten", "Huevo", "Mostaza"],
    ingredients: "Este plato está hecho con: Filete de pescado blanco empanizado y dorado, bastones de yuca amarilla horneados (crocantes por fuera, suaves por dentro), salsa tártara clásica (mayonesa, pepinillos encurtidos picados, cebolla perla, alcaparras, limón y mostaza), harina de trigo (para el rebozado), huevo batido, pan rallado (apanadura), aceite vegetal, eneldo fresco (decoración y aroma), sal, pimienta negra y una rodaja de limón. Alérgenos: Pescado, gluten, huevo y mostaza. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Pollo en salsa de durazno con arroz",
    image: "/images/Fotos-menu/Pollo en salsa de durazno con arroz.png",
    calories: 550,
    macros: { protein: 30, carbs: 62, fat: 20 },
    allergens: ["Sulfitos", "Gluten", "Apio"],
    ingredients: "Este plato está hecho con: Pechuga de pollo fileteada, arroz blanco cocido, duraznos en almíbar (conserva), caldo de pollo (agua, carcasa de pollo, cebolla blanca, zanahoria, apio y sal), cebolla perla picada finamente, harina de trigo (para espesar la salsa), vino blanco, vinagre blanco, aceite, una pizca de azúcar morena, sal, pimienta blanca y perejil fresco para decorar. Alérgenos: Sulfitos, gluten y apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Curry rojo de verduras y tofu",
    image: "/images/Fotos-menu/Curry rojo de verduras y tofu.jpeg",
    calories: 530,
    macros: { protein: 28, carbs: 55, fat: 22 },
    allergens: ["Soya", "Gluten", "Apio"],
    ingredients: "Este plato está hecho con: Caldo de verduras (apio, cebolla, tomate, ajo, zuquini, nabo, zanahoria, col), leche de coco, tofu (soja), arroz, zanahoria, pimiento rojo, cebolla, zuquini, aceite de girasol, pasta de curry rojo (chili rojo seco, ajo, hierba de limón, sal, piel de lima, especias -semilla de cilantro, comino en polvo-), azúcar, almidón de maíz, salsa de soja (agua, soja, trigo, sal), pasta tom kha (aceite de girasol, pasta de jengibre, ajo, lima), cilantro, aceite de oliva virgen, sal. Alérgenos: Soya, gluten y apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Garbanzos estofados con chorizo y arroz",
    image: "/images/Fotos-menu/Garbanzos estofados con chorizo y arroz.webp",
    calories: 778,
    macros: { protein: 48, carbs: 79, fat: 30 },
    allergens: ["Sulfitos", "Lácteos", "Gluten"],
    ingredients: "Este plato está hecho con: Garbanzos tiernos estofados, rodajas de chorizo (tipo español o sarta) que aportan sabor y grasa, papas en cubos cocidas en el guiso, arroz blanco de acompañamiento, salsa base de tomate y pimentón de la vera (paprika), cebolla perla y ajo (refrito), vino blanco (fondo de cocción que aporta sulfitos), caldo de carne, harina de trigo (para dar cuerpo y espesar el caldo), mantequilla (o lactosa presente en el embutido), aceite de oliva, hoja de laurel, sal, pimienta y perejil fresco picado. Alérgenos: Sulfitos, lácteos y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Pollo al horno en las finas hierbas con papas",
    image: "/images/Fotos-menu/Pollo al horno en las finas hierbas con papas.webp",
    calories: 607,
    macros: { protein: 28, carbs: 52, fat: 27 },
    allergens: [],
    ingredients: "Este plato está hecho con: Cuarto trasero de pollo (pierna y muslo) marinado y asado, papas cholas rústicas (con cáscara) cortadas en gajos, mezcla de finas hierbas secas y frescas (romero, tomillo, orégano), aceite de oliva virgen extra, ajo natural picado, jugo de limón (para el marinado), pimentón dulce (paprika) para el color, sal marina y pimienta negra recién molida. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Risotto de champiñones y espárragos con queso mozzarella",
    image: "/images/Fotos-menu/Risotto de champiñones y espárragos con queso mozzarella.webp",
    calories: 532,
    macros: { protein: 24, carbs: 55, fat: 24 },
    allergens: ["Lácteos", "Apio"],
    ingredients: "Este plato está hecho con: Una versión vegetariana, reconfortante y ligera del clásico italiano. Arroz de grano corto cocinado lentamente en un aromático caldo de vegetales, combinado con abundantes champiñones frescos laminados y tiernas puntas de espárragos verdes. Para terminar, queso mozzarella tradicional, logrando una textura fundente y deliciosa que te encantará sin pesadez. Alérgenos: Lácteos y apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Pollo a la pepitoria con papas",
    image: "/images/Fotos-menu/Pollo a la pepitoria con papas.png",
    calories: 620,
    macros: { protein: 28, carbs: 55, fat: 32 },
    allergens: ["Frutos secos", "Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Muslo y contramuslo de pollo guisados lentamente hasta quedar tiernos, cubiertos con la tradicional salsa pepitoria: una salsa espesa y aromática elaborada con una picada de almendras (frutos secos), yema de huevo cocido, azafrán, ajo y un majado de pan frito (que aporta el gluten y textura). Se sirve decorado con huevo duro picado y láminas de almendras tostadas por encima, acompañado de dados de papa frita crujiente y perejil fresco. Alérgenos: Frutos secos, gluten y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Ensalada mix de espinaca con queso y papas",
    image: "/images/Fotos-menu/Ensalada mix de espinaca con queso y papas.png",
    calories: 389,
    macros: { protein: 15, carbs: 41, fat: 20 },
    allergens: ["Lácteos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Mix de hojas verdes (espinaca y rúcula), papas chauchas cocinadas con cáscara (tipo cocktail), queso fresco desmenuzado, nueces troceadas, aros de cebolla paiteña roja, aderezo de vinagreta (aceite de oliva, vinagre balsámico, sal y pimienta negra). Alérgenos: Lácteos y frutos secos (nueces). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Medallones de cerdo en salsa barbacoa con papas en gajos",
    image: "/images/Fotos-menu/Medallones de cerdo en salsa barbacoa con papas en gajos.png",
    calories: 504,
    macros: { protein: 28, carbs: 35, fat: 28 },
    allergens: ["Sulfitos"],
    ingredients: "Este plato está hecho con: Tiernos y jugosos medallones de lomo fino de cerdo bañados en una rica salsa barbacoa casera, elaborada con un toque de azúcar morena, notas ahumadas y vinagre de vino (que aporta sulfitos), logrando el equilibrio perfecto entre dulce y salado. Se sirve con una guarnición de papas asadas al horno en corte de gajos, sazonadas con especias y un toque de vino blanco (también fuente de sulfitos), quedando crujientes por fuera y suaves por dentro. Alérgenos: Sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  // LUNES
  {
    id: "lun-e1",
    name: "Choclito fresco",
    image: "/images/Fotos-menu/Choclito fresco.png",
    calories: 65,
    macros: { protein: 2, carbs: 12, fat: 0 },
    allergens: ["Maíz"],
    ingredients: "Este plato está hecho con: Ensalada fresca y sustanciosa que combina choclo cocido tierno (granos de maíz), mezclado con vainitas verdes picadas y cubos de tomate riñón sin semillas para evitar el exceso de líquido. Se completa con plumas de cebolla paiteña previamente curtida en limón y sal. Alérgenos: Maíz. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },
  {
    id: "lun-e2",
    name: "Piña Huerto",
    image: "/images/Fotos-menu/Piña Huerto.png",
    calories: 35,
    macros: { protein: 0, carbs: 8, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada ligera y refrescante sobre una base de hojas suaves de lechuga de seda. Combina la frescura del pepino con cáscara y el toque crocante del pimiento verde fresco, contrastando con cubos de piña natural que aportan dulzor y acidez tropical. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },

  // MARTES
  {
    id: "mar-e1",
    name: "La granosa",
    image: "/images/Fotos-menu/La granosa.png",
    calories: 55,
    macros: { protein: 3, carbs: 9, fat: 0 },
    allergens: ["Leguminosas"],
    ingredients: "Este plato está hecho con: Ensalada nutritiva con base de hojas de espinaca troceadas y láminas finas de zuquini (zapallo italiano) crudo, que aportan una textura crujiente y delicada. Se combina con la frescura y acidez del tomate cherry (o riñón) y gana cuerpo gracias a los garbanzos cocidos, que añaden una textura harinosa agradable y valor proteico. Alérgenos: Leguminosas. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },
  {
    id: "mar-e2",
    name: "Ensalada de Brócoli, Pimiento y cebolla",
    image: "/images/Fotos-menu/Ensalada de Brócoli, Pimiento y cebolla.png",
    calories: 32,
    macros: { protein: 2, carbs: 6, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Mezcla colorida y llena de textura que destaca por sus floretes pequeños de brócoli cocidos al vapor hasta quedar al dente. Contrasta maravillosamente con el dulzor de las julianas de pimiento rojo y el toque sutil de acidez de la cebolla paiteña ligeramente curtida. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-e1",
    name: "Flores del campo",
    image: "/images/Fotos-menu/Flores del campo.png",
    calories: 42,
    macros: { protein: 2, carbs: 8, fat: 0 },
    allergens: ["Sulfitos"],
    ingredients: "Este plato está hecho con: Una mezcla visualmente atractiva de floretes pequeños de brócoli y coliflor blanqueados al punto para mantener su textura firme. Se añade color y frescura con pimiento rojo picado finamente, y se equilibra con el toque dulce de las pasas negras que contrastan con los vegetales crucíferos. Alérgenos: Sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },
  {
    id: "mie-e2",
    name: "Hoja fuerte",
    image: "/images/Fotos-menu/Hoja fuerte.png",
    calories: 50,
    macros: { protein: 3, carbs: 9, fat: 0 },
    allergens: ["Leguminosas"],
    ingredients: "Este plato está hecho con: Ensalada de carácter rústico y nutritivo basada en mix de hojas verdes (con sus tallos y hojas troceados y blanqueados). Gana frescura y un punto crocante con láminas de rábano y rodajas finas de zanahoria. Se completa con lentejas cocidas al dente que aportan cuerpo y textura al plato. Alérgenos: Leguminosas. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-e1",
    name: "La zapalla",
    image: "/images/Fotos-menu/La zapalla.png",
    calories: 52,
    macros: { protein: 2, carbs: 10, fat: 0 },
    allergens: ["Leguminosas"],
    ingredients: "Este plato está hecho con: Una ensalada colorida y suave donde el protagonista es el zapallo cocido en cubos firmes, aprovechando su sabor dulce y textura cremosa. Se mezcla con vainitas verdes troceadas y el toque aromático de la cebolla blanca picada fina. El plato se completa con arvejas tiernas cocidas, que suman textura y valor nutricional. Alérgenos: Leguminosas. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },
  {
    id: "jue-e2",
    name: "Frescor de pera",
    image: "/images/Fotos-menu/Frescor de pera.png",
    calories: 32,
    macros: { protein: 0, carbs: 7, fat: 0 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Ensalada muy refrescante y crujiente sobre una base de lechuga romana. Combina bastones finos de apio y cubos de pepino para una textura crocante en cada bocado. El contraste especial lo aporta la pera fresca cortada firme (o claudias en temporada), añadiendo un punto dulce y jugoso que equilibra los verdes. Alérgenos: Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-e1",
    name: "La madurita",
    image: "/images/Fotos-menu/La madurita.png",
    calories: 68,
    macros: { protein: 1, carbs: 16, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada con sabor muy local que combina un mix fresco de hojas verdes (lechuga y espinaca) con gajos de tomate riñón y plumas de cebolla perla para un toque crujiente. El protagonista es el plátano maduro (cocinado o asado en cubos), que aporta suavidad y ese dulzor característico tan apreciado en la mesa ecuatoriana. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },
  {
    id: "vie-e2",
    name: "El choclito",
    image: "/images/Fotos-menu/El choclito.png",
    calories: 48,
    macros: { protein: 1, carbs: 10, fat: 0 },
    allergens: ["Maíz"],
    ingredients: "Este plato está hecho con: Una ensalada vibrante y visualmente elegante gracias a la base de col morada picada, que contrasta con el brillo del pimiento amarillo (o verde) y la frescura de los cubos de tomate riñón. Se completa con granos de choclo desgranado, aportando un dulzor natural y una textura agradable en cada bocado. Alérgenos: Maíz. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
    name: "Galletas de chocolate con nueces y chispas",
    image: "/images/Fotos-menu/Galletas de chocolate con nueces y chispas.png",
    calories: 366,
    macros: { protein: 5, carbs: 41, fat: 20 },
    allergens: ["Frutos secos", "Gluten", "Huevo", "Lácteos", "Soya"],
    ingredients: "Este plato está hecho con: Galletas intensas y doblemente achocolatadas, elaboradas con una masa rica y oscura gracias a la integración de cacao en polvo puro. En cada bocado combinan el toque crujiente y tostado de las nueces (frutos secos) con la textura fundente de abundantes chispas de chocolate. La masa se prepara con harina de trigo (fuente de gluten), mantequilla (lácteos) y huevos frescos, mientras que el chocolate utilizado suele contener lecitina de soja como emulsionante. Alérgenos: Frutos secos (nueces), gluten, huevo, lácteos y soja. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
