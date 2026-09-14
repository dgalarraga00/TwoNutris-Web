// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextField } from "@/components/ui/TextField";

afterEach(() => {
  cleanup();
});

describe("TextField", () => {
  it("does not render a visibility toggle for a non-password field", () => {
    render(<TextField label="Correo" id="email" type="email" />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders a password field masked by default with a working show/hide toggle", async () => {
    const user = userEvent.setup();
    render(<TextField label="Contraseña" id="password" type="password" />);

    const input = screen.getByLabelText("Contraseña");
    expect(input).toHaveAttribute("type", "password");

    const toggle = screen.getByRole("button", { name: "Mostrar contraseña" });
    await user.click(toggle);

    expect(input).toHaveAttribute("type", "text");
    expect(screen.getByRole("button", { name: "Ocultar contraseña" })).toBeInTheDocument();
  });

  it("forwards onChange/register-style props unaffected by the toggle", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<TextField label="Contraseña" id="password" type="password" onChange={onChange} />);

    await user.type(screen.getByLabelText("Contraseña"), "abc");
    expect(onChange).toHaveBeenCalled();
  });
});
