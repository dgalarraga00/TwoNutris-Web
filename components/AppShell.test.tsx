// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppShell } from "./AppShell";
import { getAccessToken, setAccessToken } from "@/lib/http/tokenStore";

const { routerPushMock, usePathnameMock } = vi.hoisted(() => ({
  routerPushMock: vi.fn(),
  usePathnameMock: vi.fn(() => "/semana"),
}));
vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: routerPushMock }),
  usePathname: usePathnameMock,
}));

// Same convention as MenuWeekPreview.test.tsx: this Vitest/Vite setup never
// provides Next's build-time image-config injection.
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    const { fill: _fill, sizes: _sizes, quality: _quality, priority: _priority, ...rest } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...rest} />;
  },
}));

/** jsdom has no `matchMedia`; `useIsMobile` (shadcn scaffolding) reads it on
 * mount. Both the media-query match AND `window.innerWidth` are set so the
 * hook's synchronous fallback read agrees with the mocked listener. */
function mockViewport(width: number, isMobile: boolean) {
  Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: width });
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    configurable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: isMobile,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
}

function meResponse(overrides: Partial<{ first_name: string; email: string }> = {}) {
  return new Response(
    JSON.stringify({
      id: 1,
      email: overrides.email ?? "ana@twonutris.net",
      first_name: overrides.first_name ?? "Ana",
      last_name: "Pérez",
    }),
    { status: 200 },
  );
}

function renderShell(children: React.ReactNode = <p>contenido</p>) {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <AppShell>{children}</AppShell>
    </QueryClientProvider>,
  );
}

describe("AppShell — persistent authenticated shell (order-flow-wizard Phase 2)", () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    routerPushMock.mockClear();
    usePathnameMock.mockReturnValue("/semana");
    setAccessToken("valid-access-token");
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("at ~390px: logo and sidebar trigger are always visible, but nav links stay off-canvas until the trigger opens the sheet", async () => {
    mockViewport(390, true);
    fetchMock = vi.fn().mockResolvedValue(meResponse());
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();

    renderShell();

    expect(screen.getAllByAltText("TwoNutris").length).toBeGreaterThan(0);
    expect(screen.queryByRole("link", { name: "Tu semana" })).not.toBeInTheDocument();
    expect(screen.queryByRole("link", { name: "Tu perfil" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /toggle sidebar/i }));

    expect(await screen.findByRole("link", { name: "Tu semana" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Tu perfil" })).toBeInTheDocument();
  });

  it("keeps the shell's content region cream-backgrounded no matter what state its children render (loading/empty/error)", () => {
    mockViewport(1280, false);
    fetchMock = vi.fn().mockResolvedValue(meResponse());
    vi.stubGlobal("fetch", fetchMock);

    for (const state of [<p key="l">Cargando...</p>, <p key="e">Sin pedidos aún</p>, <p key="err">Ocurrió un error</p>]) {
      const { unmount } = renderShell(state);
      const region = screen.getByText(state.props.children as string).closest('[class*="bg-cream"]');
      expect(region).not.toBeNull();
      unmount();
    }
  });

  it("at desktop width: the account trigger shows the customer's first name and offers Cerrar sesión via the dropdown", async () => {
    mockViewport(1280, false);
    fetchMock = vi.fn().mockResolvedValue(meResponse({ first_name: "Ana" }));
    vi.stubGlobal("fetch", fetchMock);
    const user = userEvent.setup();

    renderShell();

    const trigger = await screen.findByRole("button", { name: /Ana/ });
    await user.click(trigger);

    const menu = await screen.findByRole("menu");
    expect(within(menu).getByText("Mi cuenta")).toBeInTheDocument();
    expect(within(menu).getByText("Mi dirección")).toBeInTheDocument();
    expect(within(menu).getByText("Términos y condiciones")).toBeInTheDocument();

    await user.click(within(menu).getByText("Cerrar sesión"));

    await waitFor(() => expect(routerPushMock).toHaveBeenCalledWith("/entrar"));
    expect(getAccessToken()).toBeNull();
    expect(fetchMock).toHaveBeenCalledWith(
      "/api/session/logout",
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("degrades to a plain Entrar trigger when useMe() 401s (e.g. /bolsa pre-account)", async () => {
    mockViewport(1280, false);
    fetchMock = vi.fn((input: RequestInfo | URL) => {
      const url = typeof input === "string" ? input : input.toString();
      if (url.includes("/api/session/refresh")) {
        return Promise.resolve(new Response(JSON.stringify({ detail: "no session" }), { status: 401 }));
      }
      return Promise.resolve(
        new Response(JSON.stringify({ code: "not_authenticated", detail: "No autenticado." }), {
          status: 401,
        }),
      );
    });
    vi.stubGlobal("fetch", fetchMock);

    renderShell();

    expect(await screen.findByRole("link", { name: "Entrar" })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Cerrar sesión/ })).not.toBeInTheDocument();
  });
});
