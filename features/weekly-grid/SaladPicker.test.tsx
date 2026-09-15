// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { SaladPicker } from "./SaladPicker";
import type { MenuDishCardDto } from "@/lib/api/menu";

vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const { fill: _fill, sizes: _sizes, quality: _quality, priority: _priority, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />;
  },
}));

function saladFixture(overrides: Partial<MenuDishCardDto> = {}): MenuDishCardDto {
  return {
    menu_dish_id: 1,
    is_sold_out: false,
    dish: {
      id: 10,
      name: "Ensalada César",
      description: "",
      kind: "salad",
      allergens: ["peanut", "gluten"],
      dietary_tags: [],
      allergen_disclaimer: "",
      nutrition_notes: "",
      cover_image_url: null,
    },
    portion: {
      id: 100,
      size: "medium",
      serving_size: 200,
      serving_unit: "g",
      calories: 320,
      protein_g: 12,
      carbs_g: 20,
      fiber_g: 3,
      sugars_g: 2,
      added_sugars_g: 0,
      fat_g: 8,
      saturated_fat_g: 2,
      trans_fat_g: 0,
      cholesterol_mg: 0,
      sodium_mg: 300,
    },
    ...overrides,
  } as MenuDishCardDto;
}

describe("SaladPicker — live-feedback fix (feedback-round-1): allergen/calorie parity with MenuDishCard", () => {
  afterEach(() => {
    cleanup();
  });

  it("shows a calorie badge and one allergen icon per allergen", () => {
    const salad = saladFixture();

    render(<SaladPicker salads={[salad]} selectedId={null} onSelect={vi.fn()} />);

    expect(screen.getByText("320 kcal")).toBeInTheDocument();
    // ALLERGEN_MAP renders each allergen as a titled icon wrapper.
    expect(screen.getByTitle("Maní")).toBeInTheDocument();
    expect(screen.getByTitle("Gluten")).toBeInTheDocument();
  });

  it("shows 'Sin alérgenos' when the salad has none, instead of an empty row", () => {
    const salad = saladFixture({
      dish: { ...saladFixture().dish, allergens: [] },
    });

    render(<SaladPicker salads={[salad]} selectedId={null} onSelect={vi.fn()} />);

    expect(screen.getByText("Sin alérgenos")).toBeInTheDocument();
  });
});
