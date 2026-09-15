import { describe, expect, it } from "vitest";
import { toMenuItem } from "./menuAdapter";
import type { MenuDishCardDto } from "@/lib/api/menu";

const baseDto: MenuDishCardDto = {
  menu_dish_id: 101,
  dish: {
    id: 1,
    name: "Pollo a la griega",
    description: "Pechuga de pollo marinada al estilo mediterráneo.",
    kind: "main",
    allergens: ["dairy"],
    dietary_tags: [],
    allergen_disclaimer: "Este plato puede contener trazas de otros alérgenos.",
    nutrition_notes: "Bajo en carbohidratos.",
    cover_image_url: "https://res.cloudinary.com/twonutris/image/upload/pollo.jpg",
  },
  portion: {
    id: 501,
    size: "medium",
    serving_size: 350,
    serving_unit: "g",
    calories: 432,
    protein_g: 28,
    carbs_g: 35,
    fiber_g: 3,
    sugars_g: 5,
    added_sugars_g: 0,
    fat_g: 20,
    saturated_fat_g: 6.5,
    trans_fat_g: 0,
    cholesterol_mg: 85,
    sodium_mg: 410,
  },
  is_sold_out: false,
};

describe("toMenuItem", () => {
  it("maps a normal main dish, combining description/notes into ingredients (allergen_disclaimer is deliberately excluded — feedback-round-2: it gets its own warning box in DishModal, fed straight from the DTO instead)", () => {
    const item = toMenuItem(baseDto);

    expect(item.id).toBe("101");
    expect(item.name).toBe("Pollo a la griega");
    expect(item.image).toBe(baseDto.dish.cover_image_url);
    expect(item.calories).toBe(432);
    expect(item.macros).toEqual({ protein: 28, carbs: 35, fat: 20 });
    expect(item.category).toBe("principal");
    expect(item.day).toBeNull();
    expect(item.ingredients).toBe(
      "Pechuga de pollo marinada al estilo mediterráneo.\n\nBajo en carbohidratos.",
    );
  });

  it("maps a salad kind to the 'ensalada' category", () => {
    const item = toMenuItem({
      ...baseDto,
      dish: { ...baseDto.dish, kind: "salad" },
    });

    expect(item.category).toBe("ensalada");
  });

  it("zeroes calories/macros when portion is null, but still renders the dish", () => {
    const item = toMenuItem({ ...baseDto, portion: null });

    expect(item.calories).toBe(0);
    expect(item.macros).toEqual({ protein: 0, carbs: 0, fat: 0 });
    expect(item.name).toBe(baseDto.dish.name);
  });

  it("falls back to the placeholder image when cover_image_url is null", () => {
    const item = toMenuItem({
      ...baseDto,
      dish: { ...baseDto.dish, cover_image_url: null },
    });

    expect(item.image).toBe("/images/plate-2.png");
  });

  it("drops empty description/notes parts instead of leaving blank paragraphs", () => {
    const item = toMenuItem({
      ...baseDto,
      dish: { ...baseDto.dish, nutrition_notes: "", allergen_disclaimer: "" },
    });

    expect(item.ingredients).toBe("Pechuga de pollo marinada al estilo mediterráneo.");
  });

  it("translates backend allergen codes into DishModal's Spanish ALLERGEN_MAP labels", () => {
    const item = toMenuItem({
      ...baseDto,
      dish: { ...baseDto.dish, allergens: ["peanut", "tree_nuts", "sulfites"] },
    });

    expect(item.allergens).toEqual(["Maní", "Frutos secos", "Sulfitos"]);
  });

  it("falls back to the raw code for an allergen with no known label", () => {
    const item = toMenuItem({
      ...baseDto,
      dish: { ...baseDto.dish, allergens: ["some_future_code"] },
    });

    expect(item.allergens).toEqual(["some_future_code"]);
  });
});
