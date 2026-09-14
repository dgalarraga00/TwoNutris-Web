// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CouponDisclosure } from "./CouponDisclosure";

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
});

describe("CouponDisclosure — collapsed/expanded disclosure", () => {
  it("starts collapsed, showing only the '¿Tienes un cupón?' link", () => {
    render(<CouponDisclosure />);

    expect(
      screen.getByRole("button", { name: "¿Tienes un cupón?" }),
    ).toBeInTheDocument();
    expect(screen.queryByLabelText("Código de cupón")).not.toBeInTheDocument();
  });

  it("expands into a code input + submit button on click", async () => {
    const user = userEvent.setup();
    render(<CouponDisclosure />);

    await user.click(screen.getByRole("button", { name: "¿Tienes un cupón?" }));

    expect(screen.getByLabelText("Código de cupón")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Aplicar" })).toBeInTheDocument();
  });
});

describe("CouponDisclosure — no onValidate (F7's real, unwired state)", () => {
  it("shows an informational note and keeps Aplicar disabled when no onValidate is passed", async () => {
    const user = userEvent.setup();
    render(<CouponDisclosure />);

    await user.click(screen.getByRole("button", { name: "¿Tienes un cupón?" }));
    await user.type(screen.getByLabelText("Código de cupón"), "VERANO10");

    expect(screen.getByRole("button", { name: "Aplicar" })).toBeDisabled();
    expect(
      screen.getByText("Podrás aplicar tu cupón más adelante, al finalizar tu compra."),
    ).toBeInTheDocument();
  });
});

describe("CouponDisclosure — with a wired onValidate (future F9 reuse)", () => {
  it("calls onValidate with the trimmed code and renders the success message", async () => {
    const onValidate = vi.fn().mockResolvedValue({ code: "VERANO10", message: "10% de descuento aplicado." });
    const user = userEvent.setup();
    render(<CouponDisclosure onValidate={onValidate} />);

    await user.click(screen.getByRole("button", { name: "¿Tienes un cupón?" }));
    await user.type(screen.getByLabelText("Código de cupón"), "  VERANO10  ");
    await user.click(screen.getByRole("button", { name: "Aplicar" }));

    expect(onValidate).toHaveBeenCalledWith("VERANO10");
    expect(await screen.findByText("10% de descuento aplicado.")).toBeInTheDocument();
  });

  it("renders an alert with the failure message when onValidate rejects", async () => {
    const onValidate = vi.fn().mockRejectedValue(new Error("Cupón inválido."));
    const user = userEvent.setup();
    render(<CouponDisclosure onValidate={onValidate} />);

    await user.click(screen.getByRole("button", { name: "¿Tienes un cupón?" }));
    await user.type(screen.getByLabelText("Código de cupón"), "BAD");
    await user.click(screen.getByRole("button", { name: "Aplicar" }));

    expect(await screen.findByRole("alert")).toHaveTextContent("Cupón inválido.");
  });

  it("also submits on Enter inside the code input (no <form>, uses onKeyDown)", async () => {
    const onValidate = vi.fn().mockResolvedValue({ code: "X", message: "Aplicado." });
    const user = userEvent.setup();
    render(<CouponDisclosure onValidate={onValidate} />);

    await user.click(screen.getByRole("button", { name: "¿Tienes un cupón?" }));
    await user.type(screen.getByLabelText("Código de cupón"), "X{Enter}");

    expect(onValidate).toHaveBeenCalledWith("X");
  });
});

describe("CouponDisclosure — no nested <form> (bug fix: cannot nest inside CheckoutForm's own form)", () => {
  it("never renders a <form> element, so it stays valid HTML when nested inside another form", async () => {
    const user = userEvent.setup();
    render(<CouponDisclosure onValidate={vi.fn()} />);

    await user.click(screen.getByRole("button", { name: "¿Tienes un cupón?" }));

    expect(document.querySelector("form")).toBeNull();
  });
});
