// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CalculatorWizard } from "./CalculatorWizard";
import * as guards from "@/lib/nutrition/guards";

const { routerPushMock } = vi.hoisted(() => ({ routerPushMock: vi.fn() }));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: routerPushMock }),
}));

// @testing-library/react's implicit auto-cleanup only registers itself when
// it detects a global `afterEach` (this repo does not enable Vitest's
// `test.globals`), so each render must be torn down explicitly — otherwise
// multiple tests' DOM output accumulates and duplicate-role/text queries
// (e.g. "Siguiente" appearing on every step) throw ambiguous-match errors.
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  routerPushMock.mockClear();
});

describe("CalculatorWizard — step navigation", () => {
  it("walks goal → body → activity → health → results and computes the TDEE estimate", async () => {
    const user = userEvent.setup();
    render(<CalculatorWizard />);

    // Step 1: goal
    await user.click(screen.getByRole("button", { name: "Bajar de peso" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));

    // Step 2: sex + body data
    await user.click(screen.getByRole("button", { name: "Mujer" }));
    await user.type(screen.getByLabelText("Peso (kg)"), "60");
    await user.type(screen.getByLabelText("Estatura (cm)"), "165");
    await user.type(screen.getByLabelText("Edad"), "25");
    await user.click(screen.getByRole("button", { name: "Siguiente" }));

    // Step 3: activity level
    await user.click(screen.getByRole("button", { name: "Actividad moderada" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));

    // Step 4: health declaration — leave every flag unchecked
    expect(
      screen.getByText("Antes de calcular, cuéntanos"),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Calcular" }));

    // Step 5: results — bmr(female,60,165,25)=1345.25, tdee = *1.55 = 2085.1375
    expect(screen.getByText("2085 kcal/día")).toBeInTheDocument();
    expect(screen.getByText("Objetivo: Bajar de peso")).toBeInTheDocument();

    // Funnel navigation (final integration unit): completed calculation
    // continues to /bolsa.
    await user.click(screen.getByRole("button", { name: "Continuar" }));
    expect(routerPushMock).toHaveBeenCalledWith("/bolsa");
  });

  it("disables Siguiente until the current step's required fields are filled", async () => {
    const user = userEvent.setup();
    render(<CalculatorWizard />);

    expect(screen.getByRole("button", { name: "Siguiente" })).toBeDisabled();
    await user.click(screen.getByRole("button", { name: "Mejorar mi salud" }));
    expect(screen.getByRole("button", { name: "Siguiente" })).toBeEnabled();
  });

  it("shows a contextual hint under the selected goal", async () => {
    const user = userEvent.setup();
    render(<CalculatorWizard />);

    await user.click(screen.getByRole("button", { name: "Ganar músculo" }));

    expect(
      screen.getByText(/entrenamiento de fuerza regular/),
    ).toBeInTheDocument();
  });

  it("jumps straight to the MEDIUM-plan summary when 'Omitir por ahora' is clicked", async () => {
    const user = userEvent.setup();
    render(<CalculatorWizard />);

    await user.click(screen.getByRole("button", { name: "Omitir por ahora" }));

    expect(screen.getByText("Vas a empezar con el plan Medio")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Siguiente" }),
    ).not.toBeInTheDocument();

    // Funnel navigation (final integration unit): the skip path also
    // continues to /bolsa — the same destination as a completed calculation.
    await user.click(screen.getByRole("button", { name: "Continuar" }));
    expect(routerPushMock).toHaveBeenCalledWith("/bolsa");
  });
});

describe("CalculatorWizard — guard short-circuit", () => {
  const advanceToHealthStep = async (user: ReturnType<typeof userEvent.setup>) => {
    await user.click(screen.getByRole("button", { name: "Bajar de peso" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Mujer" }));
    await user.type(screen.getByLabelText("Peso (kg)"), "60");
    await user.type(screen.getByLabelText("Estatura (cm)"), "165");
    await user.type(screen.getByLabelText("Edad"), "25");
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
    await user.click(screen.getByRole("button", { name: "Actividad moderada" }));
    await user.click(screen.getByRole("button", { name: "Siguiente" }));
  };

  it("renders <WhatsAppExitCta/> instead of continuing when the guard is mocked as tripped", async () => {
    vi.spyOn(guards, "requiresNutritionConsult").mockReturnValue(true);
    const user = userEvent.setup();
    render(<CalculatorWizard />);

    await advanceToHealthStep(user);

    expect(screen.getByRole("alert")).toHaveTextContent(
      "te recomendamos hablar directo con nuestro equipo de nutrición",
    );
    expect(
      screen.queryByRole("button", { name: "Calcular" }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Antes de calcular, cuéntanos"),
    ).not.toBeInTheDocument();
  });

  it("trips for real when a health flag is actually checked (no mock)", async () => {
    const user = userEvent.setup();
    render(<CalculatorWizard />);

    await advanceToHealthStep(user);
    await user.click(screen.getByLabelText("Estoy embarazada"));

    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "Calcular" }),
    ).not.toBeInTheDocument();
  });
});
