// @vitest-environment jsdom
import "@testing-library/jest-dom/vitest";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProfileScreen } from "./ProfileScreen";

// This screen composes four independent, already-tested sections
// (BalanceSection, PortionOptionList, AddressesSection,
// DeliveryHistorySection), each with its own data-fetching. Stubbing them
// keeps this test scoped to what Phase 5 actually changed — the header — the
// same isolation `AppShell.test.tsx` gets for free because it has no such
// section children.
vi.mock("./BalanceSection", () => ({ BalanceSection: () => null }));
vi.mock("./PortionOptionList", () => ({ PortionOptionList: () => null }));
vi.mock("./AddressesSection", () => ({ AddressesSection: () => null }));
vi.mock("./DeliveryHistorySection", () => ({ DeliveryHistorySection: () => null }));

function meResponse(): Response {
  return new Response(
    JSON.stringify({ id: 1, email: "ana@twonutris.net", first_name: "Ana", last_name: "Pérez" }),
    { status: 200 },
  );
}

function renderProfileScreen() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <ProfileScreen />
    </QueryClientProvider>,
  );
}

describe("ProfileScreen", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockImplementation(async () => meResponse()),
    );
  });

  afterEach(() => {
    cleanup();
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("shows the customer's name and email next to the avatar (account-avatar: placement on 'Mi cuenta')", async () => {
    renderProfileScreen();

    expect(await screen.findByRole("img", { name: "Ana" })).toBeInTheDocument();
    expect(screen.getByText("ana@twonutris.net")).toBeInTheDocument();
  });

  it("renders the identical avatar for the same email across two separate mounts (deterministic seed)", async () => {
    const { unmount } = renderProfileScreen();
    const firstSrc = (await screen.findByRole("img", { name: "Ana" })).getAttribute("src");
    unmount();

    renderProfileScreen();
    const secondSrc = (await screen.findByRole("img", { name: "Ana" })).getAttribute("src");

    expect(firstSrc).toBeTruthy();
    expect(firstSrc).toBe(secondSrc);
  });

  it("offers no upload/edit control for the avatar (spec: no upload, no backend field)", async () => {
    renderProfileScreen();

    await screen.findByRole("img", { name: "Ana" });
    expect(screen.queryByRole("button", { name: /avatar|foto|imagen/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("textbox", { name: /avatar|foto/i })).not.toBeInTheDocument();
  });
});
