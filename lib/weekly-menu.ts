/**
 * Forma pública de un plato del menú semanal — la consumen los componentes
 * del home (HomepageMenuShowcase / HomepageMenuCarousel), que leen de la DB
 * vía Server Component. No hay endpoint HTTP: el tipo vive acá, no en una ruta.
 */
export interface PublicDish {
  id: string;
  name: string;
  image: string | null;
  calories: number | null;
  macros: {
    protein: number | null;
    carbs: number | null;
    fat: number | null;
  };
  allergens: string[];
  category: string;
  price: number;
  ingredients: string | null;
}
