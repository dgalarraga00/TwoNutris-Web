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
  { key: "viernes",   label: "Viernes", holiday: true },
];

export const weeklyMenu: MenuItem[] = [

  /* ── PLATOS PRINCIPALES ─────────────────────────────────────── */

  // LUNES
  {
    id: "lun-p1",
    name: "Pechuga en salsa BBQ con papa al horno",
    image: "/images/Fotos-menu/Pechuga en salsa BBQ con papa al horno.webp",
    calories: 371,
    macros: { protein: 28, carbs: 40, fat: 11 },
    allergens: ["Mostaza"],
    ingredients: "Este plato está hecho con: Una jugosa pechuga de pollo sellada a la plancha en su punto exacto para conservar toda su ternura, bañada y glaseada en una aromática salsa barbacoa que equilibra notas ahumadas, un sutil dulzor y un toque especiado con una pizca de mostaza (fuente de mostaza). Se acompaña de papas seleccionadas, cortadas y horneadas hasta lograr una piel delicadamente dorada y un interior suave y tierno, sazonadas con finas hierbas que complementan a la perfección el perfil intenso de la salsa, logrando un almuerzo reconfortante, sustancioso y lleno de sabor. Alérgenos: Mostaza. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Lomo fino de cerdo a la mostaza dulce acompañado de arroz graneado con choclo",
    image: "/images/Fotos-menu/Lomo fino de cerdo a la mostaza dulce acompañado de arroz graneado con choclo.webp",
    calories: 408,
    macros: { protein: 28, carbs: 47, fat: 12 },
    allergens: ["Mostaza"],
    ingredients: "Este plato está hecho con: Tiernos cortes de lomo fino de cerdo sellados a la plancha en su punto óptimo para conservar toda su jugosidad, suavidad y textura delicada. Vienen bañados en una envolvente salsa de mostaza dulce (fuente de mostaza), que logra un balance armónico entre las notas vivas y aromáticas del grano de mostaza y un toque suavemente dulce que realza el sabor de la carne sin opacarla. Se sirve acompañado de un tradicional arroz blanco graneado al dente, suelto y esponjoso, salteado con tiernos y dorados granos de choclo que aportan frescura, cuerpo y un sutil dulzor natural, conformando un almuerzo completo, elegante y reconfortante. Alérgenos: Mostaza. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Dados de tofu marinado a la plancha sobre quinotto",
    image: "/images/Fotos-menu/Dados de tofu marinado a la plancha sobre quinotto.webp",
    calories: 418,
    macros: { protein: 28, carbs: 36, fat: 18 },
    allergens: ["Soya", "Lácteos"],
    ingredients: "Este plato está hecho con: Una propuesta vegetal sofisticada, nutritiva y llena de texturas reconfortantes. Los protagonistas son firmes y tiernos dados de tofu (fuente de soja), previamente marinados en una mezcla aromática de finas hierbas y especias para potenciar su sabor, sellados a la plancha hasta lograr un exterior delicadamente dorado y una textura suave en su interior. Se sirven sobre un cremoso quinotto —una versión de risotto a base de quinoa andina cocinada a fuego lento en caldo aromático y mantecada con un toque de mantequilla y queso (fuentes de lácteos)—, logrando una consistencia melosa, envolvente y de gran valor proteico. Alérgenos: Soja y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Dados de pollo en salsa de maní estilo tailandés con verduras y arroz blanco",
    image: "/images/Fotos-menu/Dados de pollo en salsa de maní estilo tailandés con verduras y arroz blanco.webp",
    calories: 438,
    macros: { protein: 28, carbs: 50, fat: 14 },
    allergens: ["Maní"],
    ingredients: "Este plato está hecho con: Tiernos y jugosos dados de pechuga de pollo sellados al punto exacto, salteados con una colorida selección de verduras frescas que aportan una textura crujiente y un toque vegetal equilibrado. Todo se envuelve en una aromática y cremosa salsa de maní estilo tailandés (fuente de cacahuetes), caracterizada por su untuosidad, sus notas sutilmente tostadas y un delicado balance de especias exóticas. Se sirve acompañado de una porción de arroz blanco tradicional, graneado, suelto y esponjoso, perfecto para integrar la generosa salsa y ofrecer un almuerzo sustancioso, aromático y lleno de sabor. Alérgenos: Cacahuetes. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Albóndigas de res al horno en salsa gravy con puré rústico de papa",
    image: "/images/Fotos-menu/Albóndigas de res al horno en salsa gravy con puré rústico de papa.webp",
    calories: 399,
    macros: { protein: 28, carbs: 38, fat: 15 },
    allergens: ["Gluten", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Tiernas y jugosas albóndigas de carne de res magra preparadas de manera artesanal, ligadas tradicionalmente con un toque de huevo (fuente de huevo) y pan rallado (fuente de gluten) para conseguir una textura suave y delicada, horneadas al punto óptimo para concentrar todo su sabor. Vienen bañadas en una clásica salsa gravy, suave y aterciopelada, elaborada a base de un fondo aromático reducido y ligado con harina de trigo (fuente de gluten) y mantequilla (fuente de lácteos) que aporta notas tostadas y reconfortantes. Se acompañan de un puré rústico de papas seleccionadas que conserva parte de su textura natural, suavizado con un toque de leche y mantequilla (fuentes de lácteos) para lograr una guarnición cremosa, casera y sustanciosa. Alérgenos: Gluten, huevo y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Guiso espeso de lentejas al curry servido con tiras de verde al horno",
    image: "/images/Fotos-menu/Guiso espeso de lentejas al curry servido con tiras de verde al horno.webp",
    calories: 514,
    macros: { protein: 28, carbs: 78, fat: 10 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una reconfortante y nutritiva preparación vegetal de inspiración oriental con un toque tradicional. Se elabora a base de tiernas lentejas cocidas a fuego lento hasta lograr un guiso espeso, meloso y sustancioso, enriquecido con un sofrito aromático e impregnado de una selecta mezcla de especias al curry que aportan calidez, profundidad y un aroma inconfundible. Se acompaña de tiras de plátano verde cuidadosamente horneadas al punto exacto para conseguir un exterior delicadamente crujiente y un interior tierno, ideales para contrastar la textura suave del guiso y conformar un plato saciante, balanceado y lleno de vitalidad. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Pechuga a la plancha en salsa de ajo acompañada de espagueti",
    image: "/images/Fotos-menu/Pechuga a la plancha en salsa de ajo acompañada de espagueti.webp",
    calories: 404,
    macros: { protein: 28, carbs: 46, fat: 12 },
    allergens: ["Gluten", "Lácteos"],
    ingredients: "Este plato está hecho con: Una jugosa pechuga de pollo sellada a la plancha al punto exacto para preservar toda su ternura y suavidad natural, bañada en una sedosa y fragante salsa de ajo suave, elaborada a fuego lento con ajo confitado, finas hierbas y un toque de mantequilla y crema (fuentes de lácteos) que aportan untuosidad, textura aterciopelada y un sabor delicado. Se sirve acompañada de una porción de espagueti clásico (fuente de gluten) cocido al dente, perfecto para envolverse con la salsa y crear una experiencia clásica, sustanciosa y muy reconfortante. Alérgenos: Gluten y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Milanesa de carne con puré de papa",
    image: "/images/Fotos-menu/Milanesa de carne con puré de papa.webp",
    calories: 424,
    macros: { protein: 28, carbs: 42, fat: 16 },
    allergens: ["Gluten", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Un clásico reconfortante e irresistible elaborado con un tierno filete de carne de res, empanizado de manera tradicional con una capa de huevo batido (fuente de huevo) y pan rallado (fuente de gluten), cocinado hasta lograr una corteza dorada y crocante que conserva toda la jugosidad en su interior. Se acompaña de un cremoso puré de papa casero, preparado con papas seleccionadas y enriquecido con un toque de leche y mantequilla (fuentes de lácteos) que le confieren una textura sedosa, suave y envolvente, logrando un almuerzo sustancioso, equilibrado y con auténtico sabor de hogar. Alérgenos: Gluten, huevo y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Tortillas de carve acompañadas de arroz",
    image: "/images/Fotos-menu/Tortillas de carve acompañadas de arroz.webp",
    calories: 402,
    macros: { protein: 28, carbs: 50, fat: 10 },
    allergens: ["Soya", "Huevo"],
    ingredients: "Este plato está hecho con: Una opción vegetal sustanciosa, nutritiva y de sabor casero reconfortante. Se elaboran a base de carve o proteína vegetal de soja (fuente de soja), previamente hidratada y cocinada a fuego lento con un sofrito criollo de cebolla, ajo y hierbas aromáticas para impregnar cada fibra de sabor. La mezcla se liga suavemente con huevo fresco (fuente de huevo) para formar delicadas tortillas que se doran a la plancha hasta obtener un exterior apetitoso y un interior tierno y jugoso. Se sirven acompañadas de una tradicional porción de arroz blanco graneado al dente, suelto y esponjoso, logrando un almuerzo equilibrado, saciante y lleno de proteína vegetal. Alérgenos: Soja y huevo. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-p1",
    name: "Tinga de pollo servida con tortillas de yuca",
    image: "/images/Fotos-menu/Tinga de pollo servida con tortillas de yuca.webp",
    calories: 385,
    macros: { protein: 28, carbs: 48, fat: 9 },
    allergens: [],
    ingredients: "Este plato está hecho con: Tierna y jugosa pechuga de pollo deshebrada, cocinada a fuego lento en una aromática salsa de tomates maduros, cebolla salteada, ajo y una selecta mezcla de especias con un sutil toque ahumado que aporta calidez, profundidad y carácter en cada bocado. Se acompaña de tortillas elaboradas artesanalmente a base de masa de yuca, doradas a la plancha hasta lograr un exterior delicadamente crocante y una textura tierna, ideales para complementar la jugosidad de la tinga y conformar un plato balanceado, sustancioso y reconfortante. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p2",
    name: "Filete de pescado apanado con trozos de yuca cocida al perejil",
    image: "/images/Fotos-menu/Filete de pescado apanado con trozos de yuca cocida al perejil.webp",
    calories: 475,
    macros: { protein: 28, carbs: 66, fat: 11 },
    allergens: ["Gluten", "Huevo", "Pescado"],
    ingredients: "Este plato está hecho con: Un tierno y fresco filete de pescado blanco (fuente de pescado), cubierto con un fino apanado artesanal a base de huevo fresco (fuente de huevo) y pan rallado sazonado (fuente de gluten), cocinado hasta conseguir una textura exterior dorada y crocante que sella la humedad y suavidad natural de la carne. Se sirve acompañado de generosos trozos de yuca cocida a fuego lento hasta alcanzar una textura tierna, suave y reconfortante, salteada con perejil fresco finamente picado que aporta un aroma herbal limpio y un toque de color, logrando una combinación clásica, sustanciosa y llena de frescura. Alérgenos: Gluten, huevo y pescado. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },
  {
    id: "jue-p3",
    name: "Chili de frijoles rojos acompañado de arroz integral",
    image: "/images/Fotos-menu/Chili de frijoles rojos acompañado de arroz integral.webp",
    calories: 504,
    macros: { protein: 28, carbs: 80, fat: 8 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una propuesta vegetal sustanciosa, llena de calidez, fibra y gran valor nutricional. Se elabora a partir de tiernos frijoles rojos seleccionados, cocinados pacientemente a fuego lento hasta lograr una textura melosa, integrados en un espeso y aromático guiso a base de tomates maduros, cebolla, pimientos, ajo y una cuidada mezcla de especias que aportan un toque ligeramente picante, profundo y vibrante. Se sirve acompañado de una porción de arroz integral graneado en su punto justo, el cual aporta una agradable textura firme, sutiles notas tostadas y un valioso contenido de fibra natural, conformando un plato saciante, equilibrado y muy reconfortante. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "jueves",
  },

  // VIERNES: feriado nacional por la Independencia de Loja (sin platos)

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  // LUNES
  {
    id: "lun-e1",
    name: "Ensalada de espinaca con pepinillo y tomate riñón",
    image: "/images/Fotos-menu/Ensalada de espinaca con pepinillo y tomate riñón.webp",
    calories: 40,
    macros: { protein: 3, carbs: 6, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una fresca, ligera y revitalizante combinación vegetal pensada para aportar balance y vitalidad. Su base se compone de una tierna cama de hojas de espinaca fresca cuidadosamente seleccionadas, sobre la cual se integran crujientes cortes de pepinillo que brindan una textura crocante, fresca y sumamente hidratante. Se complementa con jugosos dados de tomate riñón maduro, los cuales aportan un toque de color vivo y un sutil contraste de acidez y dulzor natural, conformando un acompañamiento limpio, nutritivo y lleno de frescura. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },
  {
    id: "lun-e2",
    name: "Ensalada de lechuga crespa con zanahoria y vainitas al vapor",
    image: "/images/Fotos-menu/Ensalada de lechuga crespa con zanahoria y vainitas al vapor.webp",
    calories: 52,
    macros: { protein: 3, carbs: 9, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una fresca, colorida y crujiente combinación vegetal diseñada para aportar ligereza, textura y equilibrio. Su base se compone de una tierna y aireada cama de lechuga crespa fresca seleccionada, acompañada de finas hebras de zanahoria recién rallada que aportan un tono vibrante y un sutil dulzor natural. Se complementa con vainitas tiernas cocinadas al vapor en su punto óptimo para conservar su textura delicadamente crujiente, su color verde brillante y todos sus nutrientes, logrando un acompañamiento limpio, nutritivo y lleno de frescura. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "lunes",
  },

  // MARTES
  {
    id: "mar-e1",
    name: "Ensalada de lechuga crespa con rábano y pepino",
    image: "/images/Fotos-menu/Ensalada de lechuga crespa con rábano y pepino.webp",
    calories: 32,
    macros: { protein: 2, carbs: 5, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una propuesta vegetal sumamente refrescante, ligera y crujiente, pensada para aportar frescura inmediata y equilibrio al menú. Su base se compone de una tierna y aireada cama de lechuga crespa fresca cuidadosamente seleccionada, combinada con rodajas de rábano cortadas en finas medias lunas que brindan una textura firme y un sutil matiz especiado muy suave. Se complementa con frescos cubos de pepino, jugosos y delicadamente hidratantes, conformando un acompañamiento limpio, lleno de vitalidad y de textura crocante. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },
  {
    id: "mar-e2",
    name: "Ensalada de lechuga crespa con pimiento amarillo y cebolla perla curtida",
    image: "/images/Fotos-menu/Ensalada de lechuga crespa con pimiento amarillo y cebolla perla curtida.webp",
    calories: 40,
    macros: { protein: 2, carbs: 7, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una ensalada fresca, colorida y de marcados contrastes, diseñada para aportar vitalidad y una textura crujiente irresistible. Su base parte de una tierna y aireada cama de lechuga crespa seleccionada, combinada con delicadas tiras de pimiento amarillo fresco que aportan jugosidad, una textura firme y un sutil dulzor vegetal. Se corona con cebolla perla finamente fileteada y curtida al punto óptimo, brindando un balance cítrico suave, aromático y refrescante que realza el conjunto, conformando un acompañamiento ligero, equilibrado y lleno de sabor. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-e1",
    name: "Ensalada de lechuga morada con zuquini rallado y tomate riñón",
    image: "/images/Fotos-menu/Ensalada de lechuga morada con zuquini rallado y tomate riñón.webp",
    calories: 32,
    macros: { protein: 2, carbs: 5, fat: 0 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una propuesta vegetal fresca, colorida y de atractivo contraste visual, diseñada para aportar ligereza, hidratación y vitalidad. Su base parte de una tierna y aireada cama de lechuga morada fresca cuidadosamente seleccionada, que aporta notas suaves y un vistoso color profundo. Se combina con finas hebras de zuquini verde rallado crudo, que brindan una textura crocante, ligera y repleta de frescura vegetal natural. Se complementa con jugosos dados de tomate riñón maduro, los cuales aportan un toque de color vivo y un sutil balance entre dulzor y acidez, conformando un acompañamiento limpio, nutritivo y sumamente refrescante. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },
  {
    id: "mie-e2",
    name: "Ensalada de espinaca con coliflor blanqueada y choclo",
    image: "/images/Fotos-menu/Ensalada de espinaca con coliflor blanqueada y choclo.webp",
    calories: 77,
    macros: { protein: 4, carbs: 13, fat: 1 },
    allergens: [],
    ingredients: "Este plato está hecho con: Una fresca, nutritiva y sustanciosa combinación vegetal de texturas suaves y equilibradas, pensada para enriquecer el menú con ligereza y vitalidad. Su base se compone de una tierna cama de hojas de espinaca fresca cuidadosamente seleccionadas, acompañada de delicados floretes de coliflor blanqueada en su punto óptimo para conservar una consistencia tierna pero firme y todos sus nutrientes esenciales. Se complementa con jugosos granos de choclo tierno que aportan cuerpo, una mordida agradable y un suave toque de dulzor natural, conformando un acompañamiento limpio, saciante y lleno de armonía. Alérgenos: Ninguno. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "miercoles",
  },

  // JUEVES
  {
    id: "jue-e1",
    name: "Ensalada de mix de col con zanahoria y chochos",
    image: "/images/Fotos-menu/Ensalada de mix de col con zanahoria y chochos.webp",
    calories: 89,
    macros: { protein: 8, carbs: 11, fat: 2 },
    allergens: ["Altramuces"],
    ingredients: "Este plato está hecho con: Una propuesta vegetal vibrante, crujiente y de gran valor nutricional, pensada para aportar una textura crocante y frescura inmediata al menú. Su base combina una colorida mezcla de col blanca y col morada finamente fileteadas, que aportan un atractivo contraste visual y una textura firme y crujiente. Se acompaña de hebras de zanahoria recién rallada, que suman un toque de jugosidad y un sutil dulzor natural, complementándose con un toque ligero de chochos tiernos (fuente de altramuces) que aportan cuerpo, una mordida suave y un valioso contenido de proteína vegetal, conformando un acompañamiento balanceado, fresco y lleno de vitalidad. Alérgenos: Altramuces. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },
  {
    id: "jue-e2",
    name: "Ensalada de lechuga crespa con apio y arvejas tiernas",
    image: "/images/Fotos-menu/Ensalada de lechuga crespa con apio y arvejas tiernas.webp",
    calories: 56,
    macros: { protein: 4, carbs: 9, fat: 0 },
    allergens: ["Apio"],
    ingredients: "Este plato está hecho con: Una propuesta vegetal ligera, crocante y sumamente refrescante, pensada para aportar un balance crujiente y revitalizante al menú. Su base parte de una tierna y aireada cama de lechuga crespa verde seleccionada, combinada con láminas muy finas de apio fresco (fuente de apio) que aportan una textura extra crocante, jugosa y un aroma vegetal limpio y fragante. Se complementa con arvejas tiernas cocinadas en su punto óptimo para conservar una mordida suave, su delicado toque de dulzor natural y un verde brillante, conformando un acompañamiento armónico, nutritivo y lleno de frescura. Alérgenos: Apio. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "ensalada", day: "jueves",
  },

  /* ── POSTRES (toda la semana) ───────────────────────────────── */
  {
    id: "pos-1",
    name: "Bizcocho de maracuyá",
    image: "/images/Fotos-menu/Bizcocho de maracuyá.webp",
    calories: 190,
    macros: { protein: 5, carbs: 27, fat: 7 },
    allergens: ["Gluten", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Un postre esponjoso, tierno y aromático que equilibra la dulzura tradicional con la vibrante acidez tropical de la fruta de la pasión. Su masa suave y aireada se elabora a base de harina de trigo (fuente de gluten), huevos frescos (fuente de huevo) y un toque de mantequilla (fuente de lácteos), infusionada con pulpa natural de maracuyá que impregna cada bocado de un perfume cítrico inconfundible y notas refrescantes, logrando un final dulce ligero, balanceado e irresistible. Alérgenos: Gluten, huevo y lácteos. Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
    name: "Pastel de Plátano",
    image: "/images/Fotos-menu/Pastel de Plátano.webp",
    calories: 340,
    macros: { protein: 5, carbs: 56, fat: 13 },
    allergens: ["Gluten", "Huevo", "Lácteos", "Frutos secos"],
    ingredients: "Este plato está hecho con: Rebanada de pastel de plátano casero de miga tierna y húmeda, elaborado con plátanos maduros, harina de trigo (que aporta gluten) y una base rica enriquecida con huevos y mantequilla (que aporta lácteos). Se hornea con un toque de canela y vainilla, y se sirve coronado con mitades de nueces tostadas (frutos secos) en la superficie y decorado con una fina lluvia de azúcar glas. Alérgenos: Gluten, huevo, lácteos y frutos secos (nueces). Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
];
