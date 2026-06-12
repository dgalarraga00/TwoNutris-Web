import { unstable_cache } from "next/cache";
import { prisma } from "@/lib/prisma";
import { WeeklyMenuStatus } from "@/lib/generated/prisma";
import type { PublicDish } from "@/lib/weekly-menu";
import { HomepageMenuCarousel } from "@/components/HomepageMenuCarousel";

const getPublishedDishes = unstable_cache(
  async (): Promise<PublicDish[]> => {
    const menu = await prisma.weeklyMenu.findFirst({
      where: { status: WeeklyMenuStatus.PUBLISHED },
      include: {
        items: { include: { dish: true }, orderBy: { position: "asc" } },
      },
      orderBy: { weekStart: "desc" },
    });
    if (!menu) return [];
    return menu.items.map(({ dish }) => ({
      id: dish.id,
      name: dish.name,
      image: dish.image ?? null,
      calories: dish.calories ?? null,
      macros: {
        protein: dish.protein ?? null,
        carbs: dish.carbs ?? null,
        fat: dish.fat ?? null,
      },
      allergens: dish.allergens,
      category: dish.category,
      price: dish.price,
      ingredients: dish.ingredients ?? dish.description,
    }));
  },
  ["homepage-published-menu"],
  { revalidate: 300 }
);

export async function HomepageMenuShowcase() {
  const dishes = await getPublishedDishes();

  return (
    <section
      className="py-24 overflow-hidden relative rounded-t-[2.5rem] -mt-10"
      style={{ backgroundColor: "#144400" }}
    >
      <div
        className="absolute -top-32 -right-32 pointer-events-none bg-leaf-dark w-[500px] h-[500px] opacity-40 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%]"
      />
      <div
        className="absolute -bottom-24 -left-24 pointer-events-none bg-leaf-dark w-[360px] h-[360px] opacity-30 rounded-[40%_60%_70%_30%_/_40%_70%_30%_60%]"
      />

      {dishes.length === 0 ? (
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="mb-12">
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full font-poppins"
              style={{ backgroundColor: "#FFB000", color: "#144400" }}
            >
              Esta semana
            </span>
            <h2
              className="text-4xl md:text-5xl leading-tight font-ibrand"
              style={{ color: "#FFFBE4" }}
            >
              Menú de la semana
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center py-16 px-6 text-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{ backgroundColor: "rgba(255, 251, 228, 0.12)" }}
            >
              <span className="text-3xl">🥗</span>
            </div>
            <p
              className="text-lg font-semibold font-poppins mb-2"
              style={{ color: "#FFFBE4" }}
            >
              El menú de esta semana ya viene
            </p>
            <p
              className="text-sm font-poppins max-w-xs opacity-[55%]"
              style={{ color: "#FFFBE4" }}
            >
              Estamos preparando los platos. Volvé pronto para ver las novedades.
            </p>
          </div>
        </div>
      ) : (
        <HomepageMenuCarousel dishes={dishes} />
      )}
    </section>
  );
}
