// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterAll, afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";
import { MenuWeekPreview } from "./MenuWeekPreview";
import { MENU_API_BASE_URL } from "@/lib/api/menu";
import { menuHandlers } from "@/lib/api/mocks/menuHandlers";

// `next/image` requires a Next.js build-time image-config injection this
// Vitest/Vite setup never provides; mocked to a plain `<img>` so tests don't
// depend on that mechanism (no prior test in this repo renders next/image).
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const { fill: _fill, sizes: _sizes, quality: _quality, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />;
  },
}));

const server = setupServer(...menuHandlers);

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());

function renderPreview() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <QueryClientProvider client={queryClient}>
      <MenuWeekPreview />
    </QueryClientProvider>,
  );
}

describe("MenuWeekPreview", () => {
  it("success: renders real dishes from GET /api/menu/current (MSW fixture) via toMenuItem()", async () => {
    const user = userEvent.setup();
    renderPreview();

    // Default tab is "Platos Principales" — both fixture mains render,
    // including the sold-out/null-portion dish (name/allergens always render).
    expect(await screen.findByText("Pollo a la griega")).toBeInTheDocument();
    expect(screen.getByText("Guiso veggie de lentejas con arroz")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Ensaladas/ }));
    expect(await screen.findByText("Citricos y Hojas")).toBeInTheDocument();
  });

  it("empty: shows the no-published-week notice on a 404 menu_week_not_published response", async () => {
    server.use(
      http.get(`${MENU_API_BASE_URL}/api/menu/current`, () =>
        HttpResponse.json(
          { detail: "No hay una semana publicada.", code: "menu_week_not_published" },
          { status: 404 },
        ),
      ),
    );

    renderPreview();

    expect(
      await screen.findByText("Aún no hay un menú publicado para esta semana. ¡Vuelve pronto!"),
    ).toBeInTheDocument();
    expect(screen.queryByText("Pollo a la griega")).not.toBeInTheDocument();
  });
});
