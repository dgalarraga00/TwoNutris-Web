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
    name: "Wok de cerdo y verduras con noodles",
    image: "/images/Fotos-menu/Wok de cerdo y verduras con noodles.webp",
    calories: 510,
    macros: { protein: 28, carbs: 50, fat: 22 },
    allergens: ["Gluten", "Soya", "Sésamo"],
    ingredients: "Este plato está hecho con: Un salteado oriental vibrante y lleno de sabor umami. Preparado al wok a fuego intenso con tiernos fideos de trigo (fuente de gluten) y jugosos dados de cerdo marinados previamente en ajo, salsa de soya y jengibre. Todo esto se integra con verduras frescas y crujientes cortadas en juliana (cebolla, pimientos y col). El toque final lo aporta una salsa profunda y aromática elaborada con caldo tostado, salsa de soya y un toque de aceite de sésamo. Alérgenos: Gluten, soya y sésamo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Pollo a la griega",
    image: "/images/Fotos-menu/Pollo a la griega.png",
    calories: 432,
    macros: { protein: 28, carbs: 35, fat: 20 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Jugosos cortes de pollo marinados al estilo mediterráneo en una mezcla fresca y aromática de yogur natural (fuente de lácteos), jugo y ralladura de limón, ajo y orégano. Se sirve acompañado de una colorida guarnición de vegetales que incluye papas tiernas, zuquini, pimientos y cebolla. Todo esto se integra con una salsa rica y aterciopelada a base de crema de leche y queso (ambos ingredientes lácteos) y un toque de salsa de tomate casera. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Guiso veggie de lentejas con arroz",
    image: "/images/Fotos-menu/Guiso veggie de lentejas con arroz.png",
    calories: 652,
    macros: { protein: 30, carbs: 61, fat: 32 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Lentejas estofadas con variedad de vegetales, hojas de espinaca fresca integradas al final para mantener su color, trozos de papa y zanahoria tierna, sofrito base aromático de cebolla, ajo y apio (que aporta sabor y el alérgeno), arroz blanco cocido al vapor, caldo de vegetales natural, aceite de oliva, pimentón, hoja de laurel, sal y pimienta negra. Alérgenos: Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Gulash de carne con arroz",
    image: "/images/Fotos-menu/Gulash de carne con arroz.png",
    calories: 560,
    macros: { protein: 30, carbs: 52, fat: 18 },
    allergens: ["Apio", "Gluten"],
    ingredients: "Este plato está hecho con: Cubos tiernos de carne de res estofados lentamente en su propio jugo con abundante pimentón dulce (paprika) y comino, creando una salsa roja profunda y aromática. Se cocina con una base de cebolla paiteña, pimientos y tomates maduros, espesada ligeramente con harina tostada para dar cuerpo. Se sirve acompañado de arroz blanco clásico para aprovechar la salsa y perejil fresco espolvoreado. Alérgenos: Apio y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Pollo en salsa de durazno con arroz",
    image: "/images/Fotos-menu/Pollo en salsa de durazno con arroz.png",
    calories: 550,
    macros: { protein: 30, carbs: 62, fat: 20 },
    allergens: ["Sulfitos", "Gluten", "Apio"],
    ingredients: "Este plato está hecho con: Pechuga de pollo fileteada, arroz blanco cocido, duraznos en almíbar (conserva), caldo de pollo (agua, carcasa de pollo, cebolla blanca, zanahoria, apio y sal), cebolla perla picada finamente, harina de trigo (para espesar la salsa), vino blanco, vinagre blanco, aceite, una pizca de azúcar morena, sal, pimienta blanca y perejil fresco para decorar. Alérgenos: Sulfitos, gluten y apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Wok de verduras",
    image: "/images/Fotos-menu/Wok de verduras.png",
    calories: 320,
    macros: { protein: 12, carbs: 35, fat: 18 },
    allergens: ["Soya", "Gluten", "Sésamo", "Maní"],
    ingredients: "Este plato está hecho con: Variedad de vegetales frescos cortados en juliana y salteados (zanahoria, brócoli, coliflor, pimiento rojo y verde, cebolla), fideos de arroz o noodles (contienen trazas de gluten), salsa de soya (contiene soya y gluten), aceite de sésamo, semillas de ajonjolí (sésamo), aceite vegetal, azúcar, vinagre de arroz, un toque de mantequilla de maní (para espesar y dar cuerpo a la salsa) o maní picado, ajo y jengibre fresco. Alérgenos: Soya, gluten, sésamo y maní. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Pescado encocado",
    image: "/images/Fotos-menu/Pescado encocado.webp",
    calories: 497,
    macros: { protein: 28, carbs: 58, fat: 17 },
    allergens: ["Pescado"],
    ingredients: "Este plato está hecho con: Un clásico vibrante y aromático de la costa ecuatoriana. Está protagonizado por jugosos trozos de filete de pescado fresco, marinados previamente en una mezcla cítrica de jugo de limón, naranja, ajo y especias. El pescado se cocina a la perfección en una salsa sedosa y abundante a base de leche de coco y un refrito criollo tradicional de cebolla, pimientos y tomate, perfumado con cilantro fresco. Se sirve acompañado de arroz blanco suelto. Alérgenos: Pescado. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Pechuga de Pollo BBQ Ahumada con Puré Rústico",
    image: "/images/Fotos-menu/Pechuga de Pollo BBQ Ahumada con Puré Rústico.webp",
    calories: 620,
    macros: { protein: 28, carbs: 47, fat: 29 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Pechuga de pollo jugosa a la parrilla glaseada con nuestra salsa BBQ artesanal ahumada (pasta de tomate, vinagre de manzana, azúcar de coco, melaza, mostaza, humo líquido y pimentón ahumado), servida sobre una cama de puré de papas rústico machacado con ajo asado, leche y mantequilla. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Caponata siciliana",
    image: "/images/Fotos-menu/Caponata siciliana.webp",
    calories: 491,
    macros: { protein: 12, carbs: 32, fat: 35 },
    allergens: ["Apio", "Frutos secos", "Sulfitos", "Gluten"],
    ingredients: "Este plato está hecho con: Clásica caponata siciliana, un estofado agridulce de verduras donde la protagonista es la berenjena frita en cubos, cocinada lentamente junto con trozos de apio fresco, cebolla y una salsa de tomate casera. Se enriquece con aceitunas verdes y alcaparras (que aportan acidez y sulfitos), y se termina con piñones enteros tostados (frutos secos) y hojas de albahaca fresca. Se sirve acompañada de una rebanada de pan rústico tostado crujiente (que contiene gluten). Alérgenos: Apio, frutos secos, sulfitos y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Pollo en salsa satay con verduras y arroz",
    image: "/images/Fotos-menu/Pollo en salsa satay con verduras y arroz.webp",
    calories: 700,
    macros: { protein: 29, carbs: 70, fat: 34 },
    allergens: ["Maní", "Soya"],
    ingredients: "Este plato está hecho con: Pechuga de pollo jugosa cortada en láminas, bañada en una auténtica salsa Satay (una crema rica y aromática a base de maní tostado, leche de coco, especias y un toque de salsa de soya para profundidad). Se acompaña de una mezcla de verduras frescas salteadas al dente (vainitas chinas o tirabeques, tiras de pimiento rojo y zanahoria) y arroz blanco aromático. Se sirve decorado con maní troceado crujiente, rodajas de chile rojo fresco, cilantro y una cuña de limón para exprimir al gusto. Alérgenos: Maní y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Lasaña de maduro",
    image: "/images/Fotos-menu/Lasaña de maduro.webp",
    calories: 720,
    macros: { protein: 42, carbs: 80, fat: 25 },
    allergens: ["Lácteos", "Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Tajadas de plátano maduro frito (en lugar de pasta), carne de res molida (condumio), queso mozzarella abundante (gratinado encima y entre capas), salsa blanca o bechamel (leche entera, mantequilla, harina de trigo para espesar), huevo cocido picado (integrado en el relleno), refrito base de cebolla paiteña, pimiento verde, tomate riñón y ajo; pasta de tomate, achiote, aceite vegetal, comino, sal, pimienta negra y cilantro (yerbita) fresco. Alérgenos: Lácteos, gluten y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Spaghetti al pesto con queso",
    image: "/images/Fotos-menu/Spaghetti al pesto con queso.webp",
    calories: 633,
    macros: { protein: 20, carbs: 82, fat: 25 },
    allergens: ["Gluten", "Lácteos", "Frutos secos", "Huevo"],
    ingredients: "Este plato está hecho con: Fideos tipo Spaghetti al huevo (pasta de trigo), salsa pesto tradicional (albahaca fresca, aceite de oliva, queso parmesano, piñones, ajo y sal), queso parmesano rallado (espolvoreado encima), piñones enteros tostados, aceite de oliva, pimienta negra recién molida y hojas de albahaca fresca para decorar. Alérgenos: Gluten, lácteos, frutos secos y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Ropa Vieja",
    image: "/images/Fotos-menu/Ropa Vieja.webp",
    calories: 476,
    macros: { protein: 28, carbs: 55, fat: 16 },
    allergens: ["Soya", "Gluten", "Sulfitos"],
    ingredients: "Este plato está hecho con: Un guiso tradicional, reconfortante y lleno de sabor. Se prepara con tierna carne de res cocinada a fuego lento y cuidadosamente desmechada en finas hebras. La carne se guisa en una salsa robusta y vibrante a base de un rico sofrito de ajo, cebollas y pimientos (rojos y verdes). El plato adquiere su carácter profundo gracias a la integración de pasta de tomate, aceitunas, alcaparras y un toque de vino blanco (fuente de sulfitos). Todo se sazona con especias aromáticas, cilantro fresco y un toque de salsa de soya (que aporta soya y gluten), creando una preparación jugosa y perfecta para acompañar con arroz. Alérgenos: Soya, gluten y sulfitos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Pad thai de tofu y verduras",
    image: "/images/Fotos-menu/Pad thai de tofu y verduras.webp",
    calories: 556,
    macros: { protein: 20, carbs: 83, fat: 14 },
    allergens: ["Maní", "Soya", "Huevo"],
    ingredients: "Este plato está hecho con: Fideos de arroz (tallarines planos), cubos de tofu firme (queso de soya) fritos, maní tostado y triturado (espolvoreado encima), huevo revuelto (integrado en el salteado), brotes de soya (dientes de dragón) frescos, salsa Pad Thai casera (pasta de tamarindo, salsa china/soya, azúcar morena o panela, vinagre, salsa de pescado o sal), cebollín (cebolla china) cortado en bastones, ajo picado, aceite vegetal, hojuelas de ají rojo seco (chili flakes), cilantro fresco y una rodaja de limón. Alérgenos: Maní, soya y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Pollo en salsa de maní con papas",
    image: "/images/Fotos-menu/Pollo en salsa de maní con papas.webp",
    calories: 730,
    macros: { protein: 29, carbs: 50, fat: 46 },
    allergens: ["Maní", "Lácteos"],
    ingredients: "Este plato está hecho con: Presas de pollo (pierna o pechuga), papas cholas peladas y cocinadas, pasta de maní (base de la salsa), leche entera (para la cremosidad de la salsa), maní tostado y quebrado, caldo de pollo (agua, huesos de pollo, cebolla blanca, zanahoria, tallos de cilantro y sal), refrito de cebolla blanca picada, achiote, ajo en pasta, comino, sal, pimienta y cilantro (yerbita) fresco picado. Alérgenos: Maní y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  // LUNES
  {
    id: "lun-e1",
    name: "Ensalada de Vainitas y Zanahoria con Chochos",
    image: "/images/Fotos-menu/Ensalada de Vainitas y Zanahoria con chochos.webp",
    calories: 65,
    macros: { protein: 4, carbs: 8, fat: 2 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada crujiente que combina bastones finos de zanahoria con vainitas cortadas al sesgo y blanqueadas. Gana frescura con plumas de cebolla perla suavizada en agua helada y se completa con el toque tradicional, nutritivo y lleno de textura de los chochos. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },
  {
    id: "lun-e2",
    name: "Citricos y Hojas",
    image: "/images/Fotos-menu/Citricos y Hojas.png",
    calories: 45,
    macros: { protein: 1, carbs: 9, fat: 0 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Ensalada ligera ideal para limpiar el paladar. Sobre una base de lechuga crespa fresca, se añaden láminas casi transparentes de rábano y apio picado fino para un extra de crocancia. El toque distintivo y dulce lo aportan los gajos de mandarina fresca. Alérgenos: Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },

  // MARTES
  {
    id: "mar-e1",
    name: "Granos y Colores",
    image: "/images/Fotos-menu/Granos y Colores.png",
    calories: 65,
    macros: { protein: 3, carbs: 12, fat: 0 },
    allergens: ["Leguminosas"],
    ingredients: "Este plato está hecho con: Ensalada contundente y sabrosa que evoca los sabores de una menestra pero en versión fresca. Mezcla pimiento verde y tomate riñón firme en cuadritos con cebolla blanca picada fina. La base sustanciosa la aportan los fréjoles rojos o canarios tiernos cocidos. Alérgenos: Leguminosas. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },
  {
    id: "mar-e2",
    name: "El Huerto Sencillo",
    image: "/images/Fotos-menu/El Huerto Sencillo.png",
    calories: 55,
    macros: { protein: 2, carbs: 4, fat: 3 },
    allergens: ["Semillas"],
    ingredients: "Este plato está hecho con: Ensalada suave y económica con ingredientes sencillos. Base de hojas de espinaca crudas combinadas con zuquini rallado y frescura de pepino sin semillas. Alérgenos: Semillas. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-e1",
    name: "Camote Andino",
    image: "/images/Fotos-menu/Camote Andino.png",
    calories: 62,
    macros: { protein: 1, carbs: 14, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada de contrastes que resalta el dulzor natural y la textura suave del camote (morado o amarillo) asado en cubos. Se equilibra con hojas verdes de sabor intenso y la textura crujiente del pimiento rojo y vainitas. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },
  {
    id: "mie-e2",
    name: "Roja Pasión",
    image: "/images/Fotos-menu/Roja Pasión.png",
    calories: 40,
    macros: { protein: 1, carbs: 9, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada vibrante, muy crocante y jugosa. La base es col morada cortada en tiras muy finas, mezclada con zanahoria rallada y tomates. El toque final dulce y fresco lo aporta la manzana roja picada. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-e1",
    name: "La Serranita",
    image: "/images/Fotos-menu/La Serranita.png",
    calories: 75,
    macros: { protein: 2, carbs: 12, fat: 2 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una versión vegetal fresca, elaborada con chochos, tomate en cuadritos y cebolla paiteña en plumas. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },
  {
    id: "jue-e2",
    name: "La Fina",
    image: "/images/Fotos-menu/La Fina.png",
    calories: 48,
    macros: { protein: 1, carbs: 10, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una propuesta divertida y sorprendente. Se sirve sobre un mix de hojas verdes (lechuga y espinaca), zanahoria y cubos de remolacha cocida que aportan dulzor terroso. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-e1",
    name: "Verde Intenso",
    image: "/images/Fotos-menu/Verde Intenso.png",
    calories: 38,
    macros: { protein: 1, carbs: 8, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Ensalada llena de fibra y color verde intenso. Combina floretes de brócoli al dente con la textura crujiente del pimiento verde y una base de lechuga. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },
  {
    id: "vie-e2",
    name: "Trópico de Altura",
    image: "/images/Fotos-menu/Trópico de Altura.png",
    calories: 35,
    macros: { protein: 0, carbs: 7, fat: 0 },
    allergens: ["Apio", "Frutilla"],
    ingredients: "Este plato está hecho con: Ensalada dulce-ácida muy refrescante. Base crujiente de col blanca picada, bastones de apio y pepino fresco. El toque de color y sabor festivo lo ponen las frutillas frescas de temporada. Alérgenos: Apio y frutilla. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },

  /* ── POSTRES (toda la semana) ───────────────────────────────── */
  {
    id: "pos-1",
    name: "Galletas con Chips de Chocolate",
    image: "/images/Fotos-menu/Galletas con Chips de Chocolate.webp",
    calories: 380,
    macros: { protein: 4, carbs: 50, fat: 18 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Soya"],
    ingredients: "Este plato está hecho con: Galletas de estilo clásico con bordes crujientes y un centro suave, textura lograda gracias a la mezcla de azúcares y el toque secreto de maicena. La masa rica en mantequilla (lácteos) envuelve generosos chips de chocolate semiamargo y avena. Están elaboradas con harina de trigo (fuente de gluten) y huevo fresco. Alérgenos: Gluten, huevo, lácteos y soya. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Mix de Frutas Frescas (Del día)",
    image: "/images/Fotos-menu/Mix de Frutas Frescas (Del día).webp",
    calories: 70,
    macros: { protein: 0, carbs: 15, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Selección del Chef según temporada (puede incluir: melón, papaya, piña, sandía). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-3",
    name: "Pastel de naranja",
    image: "/images/Fotos-menu/Pastel de naranja.webp",
    calories: 306,
    macros: { protein: 6, carbs: 40, fat: 15 },
    allergens: ["Gluten", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Un bizcocho casero de miga suave, esponjosa y muy aromática. Su carácter distintivo y frescura se logran gracias a la incorporación generosa de jugo natural y ralladura de naranja, que aportan un sabor cítrico vibrante. La masa base se prepara con harina de trigo (fuente de gluten), huevos frescos, azúcar y aceite (o mantequilla), creando un equilibrio perfecto entre dulzor y acidez. Alérgenos: Gluten, huevo y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
