// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { WhatsAppExitCta } from "./WhatsAppExitCta";

afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
});

describe("WhatsAppExitCta", () => {
  it("links to NEXT_PUBLIC_WHATSAPP_URL, never a hardcoded number", () => {
    vi.stubEnv("NEXT_PUBLIC_WHATSAPP_URL", "https://wa.me/593983392007");
    render(<WhatsAppExitCta message="Habla con nutrición" />);

    const link = screen.getByRole("link", { name: "Escribir por WhatsApp" });
    expect(link).toHaveAttribute("href", "https://wa.me/593983392007");
  });

  it("renders the message and a fallback notice when the env var is unset", () => {
    vi.stubEnv("NEXT_PUBLIC_WHATSAPP_URL", "");
    render(<WhatsAppExitCta message="Habla con nutrición" />);

    expect(screen.getByText("Habla con nutrición")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });
});
