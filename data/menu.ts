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
  { key: "jueves",    label: "Jueves",   holiday: true },
  { key: "viernes",   label: "Viernes",  holiday: true },
];

export const weeklyMenu: MenuItem[] = [

  /* ── PLATOS PRINCIPALES ─────────────────────────────────────── */

  // LUNES
  {
    id: "lun-p1",
    name: "Piernitas de pollo en salsa BBQ con camote al horno",
    image: "/images/Fotos-menu/Piernitas de pollo en salsa BBQ con camote al horno.png", calories: 430,
    macros: { protein: 25, carbs: 40, fat: 15 },
    allergens: ["Gluten", "Mostaza", "Soya"],
    ingredients: "Este plato está hecho con: Piernitas de pollo horneadas, camote sin cascara cortados en gajos, salsa BBQ casera (pasta de tomate, vinagre de manzana, azúcar morena o panela, salsa inglesa, salsa china/soya, humo líquido), mostaza (en el adobo y la salsa), aceite vegetal, romero fresco, pimentón dulce (paprika), ajo en polvo, cebolla en polvo, sal, pimienta negra y perejil picado para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p2",
    name: "Arroz marinero",
    image: "/images/Fotos-menu/arroz marinero.jpeg", calories: 580,
    macros: { protein: 30, carbs: 65, fat: 22 },
    allergens: ["Crustáceos", "Pescado", "Moluscos"],
    ingredients: "Este plato está hecho con: Arroz de grano largo cocinado en un caldo concentrado de mariscos y achiote, mezclado con un sofrito criollo (cebolla, pimiento, ajo) y una selección premium de mariscos: cubos de pescado blanco, pulpo tierno, concha, calamar y camarones. Se termina con cilantro fresco picado y un toque de limón sutil para resaltar los sabores del mar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },
  {
    id: "lun-p3",
    name: "Wok de verduras",
    image: "/images/Fotos-menu/Wok de verduras.png", calories: 320,
    macros: { protein: 12, carbs: 35, fat: 18 },
    allergens: ["Soya", "Gluten", "Sésamo", "Maní"],
    ingredients: "Este plato está hecho con: Variedad de vegetales frescos cortados en juliana y salteados (zanahoria, brócoli, coliflor, pimiento rojo y verde, cebolla), fideos de arroz o noodles (contienen trazas de gluten), salsa de soya (contiene soya y gluten), aceite de sésamo, semillas de ajonjolí (sésamo), aceite vegetal, azúcar, vinagre de arroz, un toque de mantequilla de maní (para espesar y dar cuerpo a la salsa) o maní picado, ajo y jengibre fresco.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "lunes",
  },

  // MARTES
  {
    id: "mar-p1",
    name: "Pollo en salsa de durazno con arroz",
    image: "/images/Fotos-menu/Pollo en salsa de durazno con arroz.png", calories: 550,
    macros: { protein: 30, carbs: 62, fat: 20 },
    allergens: ["Sulfitos", "Gluten", "Apio"],
    ingredients: "Este plato está hecho con: Pechuga de pollo fileteada, arroz blanco cocido, duraznos en almíbar (conserva), caldo de pollo (agua, carcasa de pollo, cebolla blanca, zanahoria, apio y sal), cebolla perla picada finamente, harina de trigo (para espesar la salsa), vino blanco, vinagre blanco, aceite, una pizca de azúcar morena, sal, pimienta blanca y perejil fresco para decorar.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p2",
    name: "Lasaña Rústica de cerdo con Zucchini al Ajo",
    image: "/images/Fotos-menu/Lasaña Rústica de cerdo con Zucchini al Ajo.png", calories: 540,
    macros: { protein: 20, carbs: 49, fat: 30 },
    allergens: ["Gluten", "Lácteos", "Sulfitos", "Huevo"],
    ingredients: "Este plato está hecho con: Cintas de pasta ancha (o láminas de lasaña troceadas) bañadas en un ragú casero de salchicha de cerdo tipo italiana, cocinado lentamente con tomates maduros, vino blanco, apio, semillas de anís, orégano seco y un toque picante de peperoncino (chile picante). El plato se termina con una lluvia de queso parmesano y mozzarella gratinados, y se acompaña de una guarnición ligera de zucchini (calabacín) asado con mantequilla de perejil y cebollino.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },
  {
    id: "mar-p3",
    name: "Hamburguesa de soya",
    image: "/images/Fotos-menu/Hamburguesa de soya.png", calories: 704,
    macros: { protein: 31, carbs: 73, fat: 32 },
    allergens: ["Soya", "Gluten", "Huevo"],
    ingredients: "Este plato está hecho con: Carne de soya texturizada (hidratada y condimentada), pan de hamburguesa con ajonjolí, papas fritas rústicas con cáscara (tipo bastón), rodajas de queso tipo americano (o análogo a base de soya), huevo (para ligar la carne y en la salsa), harina de trigo o pan rallado (para dar consistencia a la hamburguesa), lechuga crespa fresca, tomate riñón en rodajas, aros de cebolla paiteña cruda, mayonesa, ketchup (para la salsa rosada), mostaza, ajo en polvo, aceite vegetal para freír, sal y pimienta negra.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "martes",
  },

  // MIÉRCOLES
  {
    id: "mie-p1",
    name: "Lomo al Grill con Champiñones y Coliflor Cremosa",
    image: "/images/Fotos-menu/Lomo al Grill con Champiñones y Coliflor Cremosa.png", calories: 515,
    macros: { protein: 30, carbs: 20, fat: 35 },
    allergens: ["Lácteos", "Apio", "Sulfitos"],
    ingredients: "Este plato está hecho con: Medallones tiernos de lomo de carne marinados en aceite de ajo asado, romero y pimienta ahumada, sellados a la parrilla y servidos sobre una cama de champiñones salteados al ajillo con cebollitas perla asadas y una reducción de fondo oscuro de carne, coronado con una mantequilla compuesta de puerros y acompañado de floretes de coliflor rostizados cubiertos con una suave crema de queso a las finas hierbas.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p2",
    name: "Stroganoff de pollo con arroz",
    image: "/images/Fotos-menu/Stroganoff de pollo con arroz.png", calories: 636,
    macros: { protein: 27, carbs: 51, fat: 36 },
    allergens: ["Lácteos", "Mostaza", "Gluten"],
    ingredients: "Este plato está hecho con: Pechuga de pollo cortada en cubos, arroz blanco cocido, champiñones frescos laminados, crema de leche, mantequilla, caldo de pollo (agua, carcasa de pollo, cebolla blanca, zanahoria, sal), cebolla perla picada finamente, harina de trigo (para espesar la salsa), mostaza, pasta de tomate, salsa inglesa, ajo picado, aceite vegetal, sal, pimienta negra y perejil fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },
  {
    id: "mie-p3",
    name: "Risotto con coliflor y queso",
    image: "/images/Fotos-menu/Risotto con coliflor rallada y queso.png", calories: 796,
    macros: { protein: 15, carbs: 49, fat: 60 },
    allergens: ["Lácteos", "Apio", "Sulfitos"],
    ingredients: "Este plato está hecho con: Arroz arbóreo (o grano corto especial para risotto), coliflor fresca rallada (integrada en la cocción), caldo de vegetales (agua, cebolla perla, zanahoria, apio y tallos de perejil), mantequilla (abundante para mantecar y dar brillo), queso parmesano (rallado y en costra para decorar), crema de leche, cebolla perla picada finamente, vino blanco (para desglasar), ajo en pasta, aceite de oliva, sal, pimienta blanca y cebollín fresco picado.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "principal", day: "miercoles",
  },

  /* ── ENSALADAS ───────────────────────────────────────────────── */

  { id: "lun-e1", name: "La Andina Crocante", image: "/images/Fotos-menu/La Andina Crocante.png", calories: 55, macros: { protein: 3, carbs: 8, fat: 1 }, allergens: [], ingredients: "Este plato está hecho con: Mellocos, tomate riñón (en gajos), cebolla paiteña (encurtida) y chochos.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "lunes" },
  { id: "lun-e2", name: "Verde tropical", image: "/images/Fotos-menu/Verde tropical.png", calories: 30, macros: { protein: 1, carbs: 6, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Espinaca (troceada), zucchini (laminado crudo), pimiento rojo y mango (o piña).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "lunes" },

  { id: "mar-e1", name: "El huerto asado", image: "/images/Fotos-menu/El huerto asado.png", calories: 45, macros: { protein: 2, carbs: 5, fat: 3 }, allergens: ["Sésamo"], ingredients: "Este plato está hecho con: Zapallo (cubos asados), espinaca, rábanos (laminados finamente) y semillas de sésamo (tostadas).\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "martes" },
  { id: "mar-e2", name: "Frescura serrana", image: "/images/Fotos-menu/Frescura serrana.png", calories: 40, macros: { protein: 1, carbs: 8, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Lechuga crespa, pepinillo (media luna), zanahoria (rallada cruda) y maíz dulce.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "martes" },

  { id: "mie-e1", name: "La morada", image: "/images/Fotos-menu/La morada.png", calories: 32, macros: { protein: 1, carbs: 7, fat: 0 }, allergens: [], ingredients: "Este plato está hecho con: Col morada (finamente rallada), remolacha (en cubitos), apio y naranja en gajos.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "miercoles" },
  { id: "mie-e2", name: "Campo verde", image: "/images/Fotos-menu/Campo verde.png", calories: 60, macros: { protein: 1, carbs: 3, fat: 5 }, allergens: [], ingredients: "Este plato está hecho con: Vainitas, tomate cherry, lechuga crespa o romana y champiñones.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.", category: "ensalada", day: "miercoles" },

  /* ── POSTRES (toda la semana) ───────────────────────────────── */
  {
    id: "pos-1",
    name: "Galletas de chocolate con nueces y chispas",
    image: "/images/Fotos-menu/Galletas de chocolate con nueces y chispas.png", calories: 366,
    macros: { protein: 5, carbs: 41, fat: 20 },
    allergens: ["Frutos secos", "Gluten", "Huevo", "Lácteos", "Soya"],
    ingredients: "Este plato está hecho con: Galletas intensas y doblemente achocolatadas, elaboradas con una masa rica y oscura gracias a la integración de cacao en polvo puro. En cada bocado combinan el toque crujiente y tostado de las nueces (frutos secos) con la textura fundente de abundantes chispas de chocolate. La masa se prepara con harina de trigo (fuente de gluten), mantequilla (lácteos) y huevos frescos, mientras que el chocolate utilizado suele contener lecitina de soja como emulsionante.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
    category: "postre", day: null,
  },
  {
    id: "pos-2",
    name: "Pastel de naranja",
    image: "/images/Fotos-menu/Pastel de naranja.png", calories: 306,
    macros: { protein: 6, carbs: 40, fat: 15 },
    allergens: ["Gluten", "Huevo", "Lácteos"],
    ingredients: "Este plato está hecho con: Un bizcocho casero de miga suave, esponjosa y muy aromática. Su carácter distintivo y frescura se logran gracias a la incorporación generosa de jugo natural y ralladura de naranja, que aportan un sabor cítrico vibrante. La masa base se prepara con harina de trigo (fuente de gluten), huevos frescos, azúcar y aceite (o mantequilla), creando un equilibrio perfecto entre dulzor y acidez.\n\n*Este plato puede contener otros alérgenos ya que, por el momento, todos los platos se elaboran artesanalmente en el mismo obrador.",
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
