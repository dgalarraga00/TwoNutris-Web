// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Drawer } from "vaul";
import { DishModal } from "./DishModal";
import type { MenuItem } from "@/data/menu";
import type { MenuDishCardDto } from "@/lib/api/menu";

// jsdom has no Pointer Events capture API; Vaul's drag-to-dismiss handling
// calls `setPointerCapture`/`releasePointerCapture` on every press inside
// the drawer, so pointer interactions throw without this stub (same
// per-file-polyfill convention as WeekGrid.test.tsx/AddressesSection.test.tsx).
if (typeof Element !== "undefined" && !Element.prototype.setPointerCapture) {
  Element.prototype.setPointerCapture = () => {};
  Element.prototype.releasePointerCapture = () => {};
  Element.prototype.hasPointerCapture = () => false;
}

// `next/image` requires a Next.js build-time image-config injection this
// Vitest/Vite setup never provides; mocked to a plain `<img>` so tests don't
// depend on that mechanism (same pattern as MenuWeekPreview.test.tsx /
// SaladPicker.test.tsx).
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const { fill: _fill, sizes: _sizes, quality: _quality, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />;
  },
}));

function plateFixture(overrides: Partial<MenuItem> = {}): MenuItem {
  return {
    id: "1",
    name: "Pollo a la griega",
    image: "/menu/pollo-griego.jpg",
    calories: 480,
    macros: { protein: 35, carbs: 40, fat: 15 },
    allergens: ["Gluten", "Lácteos"],
    ingredients: "Pollo, yogurt griego, pepino, tomate, pan pita",
    category: "principal",
    day: "lunes",
    ...overrides,
  };
}

function dtoFixture(overrides: Partial<MenuDishCardDto> = {}): MenuDishCardDto {
  return {
    menu_dish_id: 1,
    is_sold_out: false,
    dish: {
      id: 10,
      name: "Pollo a la griega",
      description: "",
      kind: "main",
      allergens: ["gluten", "dairy"],
      dietary_tags: [],
      allergen_disclaimer: "Preparado en una cocina que también procesa maní.",
      nutrition_notes: "",
      cover_image_url: null,
    },
    portion: {
      id: 100,
      size: "medium",
      serving_size: 350,
      serving_unit: "g",
      calories: 480,
      protein_g: 35,
      carbs_g: 40,
      fiber_g: 4,
      sugars_g: 5,
      added_sugars_g: 0,
      fat_g: 15,
      saturated_fat_g: 4,
      trans_fat_g: 0,
      cholesterol_mg: 60,
      sodium_mg: 500,
    },
    ...overrides,
  } as MenuDishCardDto;
}

describe("DishModal — Vaul bottom-sheet rewrite (live-feedback fix round 3)", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders as a proper dialog with the dish name, stats and ingredients", () => {
    const plate = plateFixture();
    render(<DishModal plate={plate} onClose={vi.fn()} />);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(screen.getByText("Pollo a la griega")).toBeInTheDocument();
    expect(screen.getByText("480")).toBeInTheDocument();
    expect(screen.getByText("Ingredientes")).toBeInTheDocument();
    expect(screen.getByText(plate.ingredients)).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<DishModal plate={plateFixture()} onClose={onClose} />);

    await user.click(screen.getByRole("button", { name: "Cerrar" }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose on Escape (native Radix Dialog behavior via vaul)", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<DishModal plate={plateFixture()} onClose={onClose} />);

    await user.keyboard("{Escape}");

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("skips the allergen disclaimer and nutrition-facts toggle when no dto is passed (marketing/homepage usage)", () => {
    render(<DishModal plate={plateFixture()} onClose={vi.fn()} />);

    expect(screen.queryByText("Ver tabla nutrimental")).not.toBeInTheDocument();
    expect(screen.queryByText(/Preparado en una cocina/)).not.toBeInTheDocument();
  });

  it("shows the allergen disclaimer and the expandable nutrition-facts toggle when a dto is passed", async () => {
    const user = userEvent.setup();
    const dto = dtoFixture();
    render(<DishModal plate={plateFixture()} onClose={vi.fn()} dto={dto} />);

    expect(screen.getByText(dto.dish.allergen_disclaimer)).toBeInTheDocument();

    const toggle = screen.getByRole("button", { name: "Ver tabla nutrimental" });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
  });

  it("still renders as a dialog with nested=true even standalone (vaul's NestedRoot context has no-op defaults, so it degrades gracefully rather than throwing)", () => {
    render(<DishModal plate={plateFixture()} onClose={vi.fn()} nested />);

    expect(screen.getByRole("dialog", { name: "Pollo a la griega" })).toBeInTheDocument();
  });

  it("renders correctly with nested=true when mounted inside an ancestor Drawer.Root (DishStepDrawer's real usage via StepQuantity/SaladPicker)", () => {
    render(
      <Drawer.Root open onOpenChange={vi.fn()}>
        <DishModal plate={plateFixture()} onClose={vi.fn()} nested />
      </Drawer.Root>,
    );

    expect(screen.getByRole("dialog", { name: "Pollo a la griega" })).toBeInTheDocument();
  });
});
