// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { StepReview } from "./StepReview";
import type { MenuDishCardDto } from "@/lib/api/menu";

function mainFixture(): MenuDishCardDto {
  return {
    menu_dish_id: 1,
    is_sold_out: false,
    dish: {
      id: 10,
      name: "Bowl de pollo",
      description: "",
      kind: "main",
      allergens: [],
      dietary_tags: [],
      allergen_disclaimer: "",
      nutrition_notes: "",
      cover_image_url: null,
    },
    portion: null,
  } as unknown as MenuDishCardDto;
}

function saladFixture(id: number, name: string): MenuDishCardDto {
  return {
    menu_dish_id: id,
    is_sold_out: false,
    dish: {
      id,
      name,
      description: "",
      kind: "salad",
      allergens: [],
      dietary_tags: [],
      allergen_disclaimer: "",
      nutrition_notes: "",
      cover_image_url: null,
    },
    portion: null,
  } as unknown as MenuDishCardDto;
}

describe("StepReview — live-feedback fix (feedback-round-1): always name the salad", () => {
  afterEach(() => {
    cleanup();
  });

  it("shows which salad was picked even when every unit shares the SAME salad (one group)", () => {
    const main = mainFixture();
    const salads = [saladFixture(20, "Ensalada César")];

    render(
      <StepReview
        main={main}
        salads={salads}
        unitSalads={[20, 20, 20]}
        disabled={false}
        onIncrementGroup={vi.fn()}
        onDecrementGroup={vi.fn()}
        onRemoveGroup={vi.fn()}
      />,
    );

    expect(screen.getByText("con Ensalada César")).toBeInTheDocument();
    expect(screen.queryByText("Cantidad")).not.toBeInTheDocument();
  });

  it("still shows each salad's name when there are multiple distinct groups", () => {
    const main = mainFixture();
    const salads = [saladFixture(20, "Ensalada César"), saladFixture(21, "Ensalada Griega")];

    render(
      <StepReview
        main={main}
        salads={salads}
        unitSalads={[20, 21]}
        disabled={false}
        onIncrementGroup={vi.fn()}
        onDecrementGroup={vi.fn()}
        onRemoveGroup={vi.fn()}
      />,
    );

    expect(screen.getByText("con Ensalada César")).toBeInTheDocument();
    expect(screen.getByText("con Ensalada Griega")).toBeInTheDocument();
  });
});
