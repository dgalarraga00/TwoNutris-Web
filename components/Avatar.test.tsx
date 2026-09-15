// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { Avatar } from "@/components/Avatar";

afterEach(() => {
  cleanup();
});

describe("Avatar", () => {
  it("renders the identical visual seed for the same email across two renders", () => {
    const { container: first, unmount } = render(
      <Avatar seed="ana@twonutris.net" title="Ana" />,
    );
    const firstSrc = first.querySelector("img")?.getAttribute("src");
    unmount();

    const { container: second } = render(<Avatar seed="ana@twonutris.net" title="Ana" />);
    const secondSrc = second.querySelector("img")?.getAttribute("src");

    expect(firstSrc).toBeTruthy();
    expect(firstSrc).toBe(secondSrc);
  });

  it("renders a different visual seed for a different email (not a static placeholder)", () => {
    const { container: ana } = render(<Avatar seed="ana@twonutris.net" />);
    const anaSrc = ana.querySelector("img")?.getAttribute("src");

    const { container: beto } = render(<Avatar seed="beto@twonutris.net" />);
    const betoSrc = beto.querySelector("img")?.getAttribute("src");

    expect(anaSrc).not.toBe(betoSrc);
  });

  it("applies the requested pixel size and an accessible title", () => {
    const { container } = render(<Avatar seed="ana@twonutris.net" size={64} title="Ana Pérez" />);
    const img = container.querySelector("img");

    expect(img).toHaveAttribute("width", "64");
    expect(img).toHaveAttribute("height", "64");
    expect(img).toHaveAttribute("alt", "Ana Pérez");
  });
});
