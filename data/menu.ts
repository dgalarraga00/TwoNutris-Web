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
    name: "Pollo mechado con muchines de yuca",
    image: "/images/Fotos-menu/Pollo mechado con muchines de yuca.webp",
    calories: 455,
    macros: { protein: 28, carbs: 52, fat: 15 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Un plato tradicional lleno de sazón casera y contrastes irresistibles. El protagonista es un jugoso pollo mechado, cocinado a fuego lento hasta quedar sumamente tierno y deshebrado a mano, integrado en un aromático sofrito criollo de cebolla, ajo, tomate y pimientos que potencia todo su jugo natural. Se acompaña de dorados muchines de yuca, preparados con una masa suave y artesanal de yuca y una corteza ligeramente crujiente, logrando un balance perfecto con el estofado de pollo. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Filete de cerdo a la pimienta negra con arroz blanco",
    image: "/images/Fotos-menu/Filete de cerdo a la pimienta negra con arroz blanco.webp",
    calories: 440,
    macros: { protein: 28, carbs: 46, fat: 16 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Un tierno y jugoso filete de cerdo sellado a la plancha para conservar sus jugos naturales, bañado en una clásica y aromática salsa a la pimienta negra. Esta salsa destaca por su textura sedosa y envolvente, elaborada a base de mantequilla y crema (fuentes de lácteos), realzada con granos de pimienta negra recién triturados que aportan una calidez especiada y un toque sutilmente picante. Se sirve con una porción de arroz blanco suelto y esponjoso, ideal para integrar los sabores de la salsa y lograr un plato reconfortante, elegante y balanceado. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Estofado de garbanzos con espinaca y comino servido con arroz",
    image: "/images/Fotos-menu/Estofado de garbanzos con espinaca y comino servido con arroz.webp",
    calories: 560,
    macros: { protein: 28, carbs: 85, fat: 12 },
    allergens: [],
    ingredients: "Este plato está hecho con: Un reconfortante y nutritivo guiso de inspiración vegetal, lleno de aromas cálidos y profundo sabor casero. Los protagonistas son tiernos garbanzos cocinados a fuego lento en un sofrito tradicional de cebolla, ajo y tomate, enriquecido con hojas de espinaca fresca que aportan un toque suave, colorido y un gran perfil nutricional. El carácter distintivo del plato lo brinda una sutil nota de comino y especias seleccionadas, que aportan un perfil terroso, aromático y envolvente. Se sirve con una porción de arroz blanco suelto y esponjoso, perfecto para combinar con la salsa del estofado y lograr un almuerzo completo, equilibrado y saciante. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Pechuga a la plancha en salsa de pimientos rojos asados con arroz verde",
    image: "/images/Fotos-menu/Pechuga a la plancha en salsa de pimientos rojos asados con arroz verde.webp",
    calories: 394,
    macros: { protein: 28, carbs: 48, fat: 10 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una jugosa y tierna pechuga de pollo cocinada a la plancha en su punto exacto, bañada en una sedosa y vibrante salsa de pimientos rojos asados. Esta preparación aporta deliciosas notas ahumadas, un dulzor natural concentrado y un perfil aromático sutil que realza la suavidad de la carne. Para acompañar, se sirve con un aromático y esponjoso arroz verde, elaborado con un licuado de hierbas frescas que no solo le confiere su llamativo color vivo, sino también una frescura herbal que equilibra a la perfección los matices asados del plato. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Salteado rústico de chorizo con fréjol rojo y verduras acompañado de majado de yuca",
    image: "/images/Fotos-menu/Salteado rústico de chorizo con fréjol rojo y verduras acompañado de majado de yuca.webp",
    calories: 556,
    macros: { protein: 28, carbs: 66, fat: 20 },
    allergens: ["Gluten", "Soya", "Lácteos"],
    ingredients: "Este plato está hecho con: Un plato lleno de carácter, energía y sabores intensos con un marcado toque tradicional. El protagonista es un sabroso salteado rústico a base de doradas rodajas de chorizo, cocinadas a fuego vivo para concentrar todos sus jugos y notas ahumadas (cuyo proceso de elaboración tradicional aporta gluten y soja). Se combina armoniosamente con fréjol rojo tierno y una colorida selección de verduras frescas que aportan frescura, fibra y textura. Como guarnición, se acompaña de un reconfortante majado de yuca artesanal, majado al punto justo con un suave refrito criollo y un toque de mantequilla (fuente de lácteos) que le brinda una textura suave y cremosa, logrando un almuerzo robusto, completo y lleno de sazón. Alérgenos: Gluten, soja y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Guiso de lentejas casero con arroz",
    image: "/images/Fotos-menu/Guiso de lentejas casero con arroz.webp",
    calories: 533,
    macros: { protein: 28, carbs: 85, fat: 9 },
    allergens: [],
    ingredients: "Este plato está hecho con: Un reconfortante clásico de la comida casera, lleno de nutrición y sabor. Un guiso espeso de lentejas cocinadas a fuego lento hasta alcanzar una textura suave y cremosa, preparado sobre la base de un refrito tradicional criollo con cebolla, pimiento, ajo, tomate y un toque de comino. Se sirve en su forma más clásica: acompañado de una porción de arroz blanco suelto, ideal para absorber todo el jugo del guiso y disfrutar de una comida cálida, saciante y con auténtico sabor a hogar. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Fajitas de pollo con croquetas de verde",
    image: "/images/Fotos-menu/Fajitas de pollo con croquetas de verde.webp",
    calories: 430,
    macros: { protein: 28, carbs: 48, fat: 14 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Tiernas y jugosas tiras de pechuga de pollo salteadas a fuego vivo junto a una crujiente y colorida mezcla de pimientos y cebolla en julianas, sazonadas con una cuidada selección de especias que aportan un toque ligeramente ahumado y lleno de sabor. Para acompañar, se sirve con doradas croquetas de plátano verde elaboradas de forma artesanal, suaves por dentro y con un exterior delicadamente crocante, logrando una combinación vibrante, saciante y con gran personalidad. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Pescado al horno con costra de finas hierbas y limón acompañado de arroz blanco",
    image: "/images/Fotos-menu/Pescado al horno con costra de finas hierbas y limón acompañado de arroz blanco.webp",
    calories: 419,
    macros: { protein: 28, carbs: 52, fat: 11 },
    allergens: ["Pescado", "Gluten"],
    ingredients: "Este plato está hecho con: Un delicado y jugoso filete de pescado blanco fresco (fuente de pescado), horneado cuidadosamente para conservar toda su suavidad y textura tierna. Viene cubierto con una aromática costra dorada a base de finas hierbas seleccionadas, ralladura fresca de limón y un toque de pan rallado crujiente (fuente de gluten), que aporta un contraste de textura crocante junto a una vibrante y refrescante nota cítrica. Se acompaña de una porción de arroz blanco suelto y esponjoso, ideal para equilibrar la sutileza de los sabores marinos, logrando un almuerzo ligero, refinado y sumamente saludable. Alérgenos: Pescado y gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Dados de tofu a la plancha en salsa agridulce con arroz blanco y ajonjolí",
    image: "/images/Fotos-menu/Dados de tofu a la plancha en salsa agridulce con arroz blanco y ajonjolí.webp",
    calories: 464,
    macros: { protein: 28, carbs: 52, fat: 16 },
    allergens: ["Soya", "Sésamo"],
    ingredients: "Este plato está hecho con: Tiernos dados de tofu artesanal (elaborado a base de soja) sellados a la plancha hasta obtener un sutil toque dorado por fuera mientras conservan una textura suave y delicada por dentro. Vienen generosamente bañados en una brillante y aromática salsa agridulce elaborada sin azúcar añadida, que equilibra a la perfección notas frutales y un toque sutilmente cítrico y especiado. Se sirve acompañado de una porción de arroz blanco suelto y esponjoso, y se corona con semillas de ajonjolí tostadas (fuente de sésamo) que aportan un aroma tostado y una textura crujiente irresistible, logrando un plato vegetal completo, balanceado y lleno de matices orientales. Alérgenos: Soja y sésamo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Seco de costilla de res con arroz",
    image: "/images/Fotos-menu/Seco de costilla de res con arroz.webp",
    calories: 430,
    macros: { protein: 28, carbs: 48, fat: 14 },
    allergens: [],
    ingredients: "Este plato está hecho con: Tiernos cortes de costilla de res cocinados a fuego lento en un tradicional y aromático guiso criollo a base de un refrito de cebolla, tomate, pimiento, ajo y una selecta mezcla de especias locales, infusionado con cilantro fresco y un toque cítrico natural que aporta profundidad y carácter. La cocción paciente permite que la carne concentre todos sus jugos y alcance una textura melosa y suave que se desprende fácilmente del hueso. Se sirve acompañado de una tradicional porción de arroz blanco graneado al dente, suelto y esponjoso, perfecto para impregnarse con la sustanciosa salsa del seco, conformando un almuerzo clásico, reconfortante y lleno de sabor casero. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Pechuga de pollo en salsa de naranja y jengibre con arroz de quinoa",
    image: "/images/Fotos-menu/Pechuga de pollo en salsa de naranja y jengibre con arroz de quinoa.webp",
    calories: 378,
    macros: { protein: 28, carbs: 44, fat: 10 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una jugosa y tierna pechuga de pollo cocinada a la plancha en su punto exacto, bañada en una aromática y brillante salsa de naranja y jengibre fresco. Esta preparación ofrece un exquisito balance entre las notas cítricas y naturalmente dulces de la naranja con el toque cálido, ligeramente picante y refrescante del jengibre, realzando la suavidad del pollo. Se acompaña de un nutritivo arroz de quinoa, graneado a la perfección, que aporta una textura delicada, un suave matiz a nuez y un excelente perfil proteico, logrando un almuerzo ligero, sofisticado y lleno de vitalidad. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Croquetas de lenteja al horno con arroz de trigo",
    image: "/images/Fotos-menu/Croquetas de lenteja al horno con arroz de trigo.webp",
    calories: 548,
    macros: { protein: 28, carbs: 82, fat: 12 },
    allergens: ["Gluten"],
    ingredients: "Este plato está hecho con: Una propuesta vegetal nutritiva, ligera y llena de sabor casero. Las protagonistas son unas deliciosas croquetas elaboradas a base de tiernas lentejas, condimentadas con un sofrito criollo de cebolla, ajo y finas hierbas aromáticas, horneadas al punto exacto para lograr una textura suave y reconfortante por dentro con un exterior delicadamente dorado y firme. Se acompañan de un tradicional arroz de trigo (fuente de gluten), graneado suavemente para resaltar su característica textura firme y su agradable nota a cereal integral, logrando un almuerzo equilibrado, saciante y con un excelente aporte nutricional. Alérgenos: Gluten. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-p1",
    name: "Pechuga en salsa cremosa de champiñones con arroz",
    image: "/images/Fotos-menu/Pechuga en salsa cremosa de champiñones con arroz.webp",
    calories: 440,
    macros: { protein: 28, carbs: 46, fat: 16 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Una jugosa pechuga de pollo cocinada a la plancha hasta lograr un dorado exterior perfecto, bañada en una rica y aterciopelada salsa cremosa de champiñones. Esta salsa destaca por la textura sedosa y envolvente que aportan la crema de leche y la mantequilla (fuentes de lácteos), realzada por champiñones frescos salteados que desprenden un aroma profundo y notas terrosas inconfundibles. Se sirve acompañada de una porción de arroz blanco suelto y esponjoso, ideal para integrar la generosa salsa y brindar una experiencia suave, reconfortante y elegante en cada bocado. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p2",
    name: "Albóndigas de res al horno en salsa napolitana sobre cama de espagueti",
    image: "/images/Fotos-menu/Albóndigas de res al horno en salsa napolitana sobre cama de espagueti.webp",
    calories: 446,
    macros: { protein: 28, carbs: 52, fat: 14 },
    allergens: ["Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Tiernas y jugosas albóndigas de carne de res magra preparadas de manera artesanal, ligadas tradicionalmente con un toque de huevo (fuente de huevo) y pan rallado (fuente de gluten) para lograr una textura suave y delicada, horneadas al punto exacto para conservar toda su jugosidad. Vienen bañadas en una clásica salsa napolitana casera, cocinada a fuego lento con tomates maduros, ajo, cebolla y aromáticas hierbas italianas como albahaca y orégano que aportan un balance perfecto entre frescura y dulzor natural. Se sirven sobre una generosa cama de espagueti al dente de sémola de trigo (fuente de gluten), ideal para impregnarse de la salsa y brindar una experiencia reconfortante, sustanciosa y con auténtico sabor casero. Alérgenos: Gluten y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },
  {
    id: "vie-p3",
    name: "Bowl de quinoa con frijoles negros salteados, choclo y pico de gallo",
    image: "/images/Fotos-menu/Bowl de quinoa con frijoles negros salteados, choclo y pico de gallo.webp",
    calories: 540,
    macros: { protein: 28, carbs: 82, fat: 11 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una propuesta vegetal fresca, nutritiva y llena de vibrantes contrastes de textura y color. La base está compuesta por una porción de quinoa graneada al punto justo, ligera y con su característico toque sutil a nuez, combinada con frijoles negros tiernos salteados suavemente para resaltar su sabor natural y reconfortante. Se complementa con granos de choclo tierno que aportan un agradable toque dulce y jugoso, coronándose con un refrescante pico de gallo elaborado al momento con tomate maduro en cubos, cebolla picada finamente, cilantro fresco y un toque cítrico de limón, logrando un bowl equilibrado, saciante y lleno de vitalidad. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "viernes",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  // LUNES
  {
    id: "lun-e1",
    name: "Ensalada de espinaca con tomate riñón y cebolla curtida",
    image: "/images/Fotos-menu/Ensalada de espinaca con tomate riñón y cebolla curtida.webp",
    calories: 38,
    macros: { protein: 2, carbs: 6, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una ensalada fresca, ligera y con un toque tradicional inconfundible. Su base se compone de una tierna y nutritiva cama de hojas de espinaca fresca seleccionadas, que aportan suavidad y un vibrante color verde. Se complementa con jugosos cubos de tomate riñón maduro que suman frescura natural y un punto sutilmente dulce, junto al contraste crujiente y ligeramente cítrico de la cebolla curtida al estilo clásico, logrando una combinación refrescante, equilibrada y llena de carácter. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },
  {
    id: "lun-e2",
    name: "Ensalada de lechuga crespa con remolacha y apio",
    image: "/images/Fotos-menu/Ensalada de lechuga crespa con remolacha y apio.webp",
    calories: 43,
    macros: { protein: 2, carbs: 8, fat: 0 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Una ensalada fresca, crujiente y con un balance perfecto de notas dulces y aromáticas. Su base consiste en una abundante y crujiente cama de lechuga crespa verde, seleccionada por la ligereza de sus hojas y su frescura natural. Se combina con tiernos dados de remolacha cocida que aportan un característico dulzor terroso, una textura suave y un vibrante color, junto al toque fresco y crocante del apio picado finamente (fuente de apio), que añade un matiz herbal limpio y refrescante para lograr una mezcla armónica y revitalizante. Alérgenos: Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },

  // MARTES
  {
    id: "mar-e1",
    name: "Ensalada de lechuga con chochos y zanahoria rallada",
    image: "/images/Fotos-menu/Ensalada de lechuga con chochos y zanahoria rallada.webp",
    calories: 85,
    macros: { protein: 8, carbs: 9, fat: 1 },
    allergens: ["Altramuces"],
    ingredients: "Este plato está hecho con: Una ensalada fresca, nutritiva y de perfil tradicional, pensada para brindar ligereza y un toque vegetal saciante. Su base consiste en una crujiente y fresca cama de lechuga seleccionada, sobre la cual se disponen tiernos chochos andinos (fuente de altramuces) que aportan una textura suave, cuerpo y un excelente perfil proteico natural. Se complementa con finos hilos de zanahoria fresca recién rallada que añaden un sutil toque dulce, humedad y un llamativo color naranja, logrando una combinación refrescante, crocante y equilibrada. Alérgenos: Altramuces. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },
  {
    id: "mar-e2",
    name: "Ensalada de lechuga morada con pepinillo y choclo",
    image: "/images/Fotos-menu/Ensalada de lechuga morada con pepinillo y choclo.webp",
    calories: 55,
    macros: { protein: 2, carbs: 10, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una ensalada refrescante, colorida y de textura crocante irresistible. Su base se compone de una crujiente y vistosa cama de lechuga morada fresca, seleccionada por su ligereza y su atractivo contraste visual. Se complementa con jugosos cubos de pepinillo fresco que aportan una hidratación natural y una textura sumamente crujiente, junto a tiernos y dorados granos de choclo que añaden un sutil toque dulce y cuerpo a la preparación, logrando una combinación ligera, equilibrada y revitalizante. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-e1",
    name: "Ensalada de brócoli y coliflor con tiras de pimiento rojo",
    image: "/images/Fotos-menu/Ensalada de brócoli y coliflor con tiras de pimiento rojo.webp",
    calories: 50,
    macros: { protein: 3, carbs: 8, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una ensalada fresca, crujiente y llena de vitalidad, pensada para aportar ligereza y color a la mesa. Se compone de tiernos arbolitos de brócoli y coliflor cuidadosamente blanqueados al punto dente para resaltar su textura crocante, fijar su color natural y conservar todos sus nutrientes intactos. Se complementa con vibrantes tiras de pimiento rojo fresco que añaden un sutil toque dulce, jugosidad y un vistoso contraste visual, logrando una opción vegetal ligera, equilibrada y sumamente saludable. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },
  {
    id: "mie-e2",
    name: "Ensalada de lechuga con rábano y arvejas tiernas",
    image: "/images/Fotos-menu/Ensalada de lechuga con rábano y arvejas tiernas.webp",
    calories: 54,
    macros: { protein: 3, carbs: 9, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una ensalada fresca, ligera y llena de contrastes de textura y color. Su base consiste en una crujiente y delicada cama de lechuga fresca seleccionada por su hidratación natural. Se complementa con finas láminas de rábano que aportan una textura crocante y una sutil nota picante y refrescante, junto a tiernas arvejas cocidas al punto justo que añaden suavidad, un agradable toque dulce y un aporte vegetal reconfortante, logrando una combinación armónica, equilibrada y revitalizante. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-e1",
    name: "Ensalada de lechuga crespa verde con vainitas y zuquini amarillo",
    image: "/images/Fotos-menu/Ensalada de lechuga crespa verde con vainitas y zuquini amarillo.webp",
    calories: 42,
    macros: { protein: 2, carbs: 7, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una ensalada fresca, ligera y llena de vitalidad, pensada para ofrecer una textura crujiente y un atractivo contraste de colores naturales. Su base consiste en una delicada cama de lechuga crespa verde seleccionada por su frescura e hidratación. Se complementa con tiernas vainitas picadas, cocinadas al dente para conservar su firmeza y su vibrante tono verde, junto a suaves cortes de zuquini amarillo que aportan jugosidad, un sutil dulzor natural y un llamativo toque dorado, logrando una combinación vegetal limpia, nutritiva y sumamente refrescante. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },
  {
    id: "jue-e2",
    name: "Ensalada de espinaca con remolacha y cebolla paiteña",
    image: "/images/Fotos-menu/Ensalada de espinaca con remolacha y cebolla paiteña.webp",
    calories: 60,
    macros: { protein: 3, carbs: 11, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una fresca, vibrante y equilibrada combinación vegetal de marcados contrastes de sabor y color, pensada para aportar ligereza y vitalidad al menú. Su base se compone de una tierna cama de hojas de espinaca fresca cuidadosamente seleccionadas, que brindan una textura suave y delicadas notas vegetales. Se acompaña de bastones de remolacha cocida en su punto óptimo para conservar una consistencia tierna y melosa, aportando un tono rubí intenso y un sutil dulzor terroso natural. Se complementa con cebolla paiteña finamente cortada en pluma, que suma una mordida crujiente, un aroma característico y un suave contrapunto fresco, conformando un acompañamiento armónico, nutritivo y lleno de personalidad. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },

  // VIERNES
  {
    id: "vie-e1",
    name: "Ensalada de mix de col con zanahoria y yogurt griego",
    image: "/images/Fotos-menu/Ensalada de mix de col con zanahoria y yogurt griego.webp",
    calories: 65,
    macros: { protein: 4, carbs: 10, fat: 1 },
    allergens: ["Lácteos"],
    ingredients: "Este plato está hecho con: Una ensalada fresca, crujiente y cremosa inspirada en la clásica ensalada de col. Su base combina una colorida mezcla de col blanca y col morada finamente cortadas, que aportan una textura crocante irresistible y un vistoso contraste visual. Se complementa con finos hilos de zanahoria fresca recién rallada que añaden jugosidad y un sutil dulzor natural, todo envuelto en un ligero y refrescante aderezo a base de yogurt griego (fuente de lácteos), el cual brinda una untuosidad suave con una sutil nota ácida, logrando un acompañamiento equilibrado, saciante y revitalizante. Alérgenos: Lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },
  {
    id: "vie-e2",
    name: "Mix de zuquini asado con garbanzos",
    image: "/images/Fotos-menu/Mix de zuquini asado con garbanzos.webp",
    calories: 140,
    macros: { protein: 7, carbs: 19, fat: 4 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una deliciosa y nutritiva combinación vegetal llena de texturas contrastantes y sabor reconfortante. Se compone de tiernos cortes de zuquini cuidadosamente asados al punto exacto para resaltar su dulzor natural y lograr sutiles notas doradas y ahumadas, combinados con garbanzos cocidos de textura suave y cremosa que aportan cuerpo, fibra y un excelente valor nutricional. El resultado es un acompañamiento versátil, saciante y equilibrado, perfecto para disfrutar de un perfil fresco y casero. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "viernes",
  },

  /* ── POSTRES (toda la semana) ───────────────────────────────── */
  {
    id: "pos-1",
    name: "Brownie Semiamargo",
    image: "/images/Fotos-menu/Brownie Semiamargo.webp",
    calories: 340,
    macros: { protein: 9, carbs: 40, fat: 16 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Porción cuadrada de brownie de chocolate semiamargo, caracterizado por su costra superior brillante y craquelada y un interior denso y húmedo. Elaborado con una base de chocolate negro fundido y mantequilla (que aporta lácteos), batida con huevos y azúcar. La mezcla incorpora harina de trigo (fuente de gluten) y trozos de nueces tostadas (frutos secos) visibles en la superficie. Se presenta decorado con cacao en polvo espolvoreado sobre el plato. Alérgenos: Gluten, huevo, lácteos y frutos secos (nueces). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
