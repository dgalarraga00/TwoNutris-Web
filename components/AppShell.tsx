"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, type ReactNode } from "react";
import {
  CalendarDays,
  ChevronDown,
  FileText,
  LogOut,
  MapPin,
  UserCircle,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/shadcn/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/shadcn/dropdown-menu";
import { useIsMobile } from "@/hooks/use-mobile";
import { Avatar } from "@/components/Avatar";
import { useMe } from "@/lib/api/me";
import { logoutCustomer } from "@/lib/api/auth";
import { ApiError } from "@/lib/http/errors";
import { clearAccessToken } from "@/lib/http/tokenStore";
import { queryClient } from "@/lib/query/queryClient";

interface NavLinkItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const NAV_LINKS: NavLinkItem[] = [
  { label: "Tu semana", href: "/semana", icon: CalendarDays },
  { label: "Tu perfil", href: "/perfil", icon: UserRound },
];

/**
 * Same four items the spec's `app-navigation-shell` capability names
 * exactly: "Mi cuenta", "Mi dirección", "Cerrar sesión" (handled separately
 * below, not a link), "Términos y condiciones" (placeholder, present even
 * non-functional). `/perfil` hosts both account details and the saved
 * addresses section (`AddressesSection`) on one screen — there is no
 * separate address route in this repo yet, so both link there; this is a
 * deliberate scope-preserving choice for this slice, not an oversight.
 */
const ACCOUNT_LINKS: NavLinkItem[] = [
  { label: "Mi cuenta", href: "/perfil", icon: UserCircle },
  { label: "Mi dirección", href: "/perfil", icon: MapPin },
  { label: "Términos y condiciones", href: "/terminos", icon: FileText },
];

/**
 * Footer account item (design D8): inline `SidebarMenuSub` expansion on
 * phone, a floating `DropdownMenu` only at `md` and above — never both, and
 * never a floating popover clipped inside an already-open mobile Sheet.
 * Degrades to a plain "Entrar" trigger when `useMe()` 401s (spec:
 * app-navigation-shell is persistent on authenticated routes, but `/bolsa`
 * is the public pre-account bag and must still render the shell gracefully
 * — orchestrator resolution #2 in the design).
 */
function AccountMenu() {
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { setOpenMobile } = useSidebar();
  const { data: me, error } = useMe();
  const [loggingOut, setLoggingOut] = useState(false);
  const [subOpen, setSubOpen] = useState(false);

  const isUnauthenticated = error instanceof ApiError && error.status === 401;

  const handleLogout = async (): Promise<void> => {
    setLoggingOut(true);
    try {
      await logoutCustomer();
    } catch {
      // Best-effort: still log the customer out locally even if the
      // cookie-clear call itself fails (e.g. offline) — mirrors AppNav's
      // own hard-logout sequence verbatim.
    } finally {
      clearAccessToken();
      queryClient.clear();
      router.push("/entrar");
    }
  };

  if (isUnauthenticated) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <Link href="/entrar">
              <UserCircle />
              <span>Entrar</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  const displayName = me?.first_name?.trim() || me?.email || "Mi cuenta";

  const closeMobileSidebar = (): void => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  if (isMobile) {
    return (
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            size="lg"
            onClick={() => setSubOpen((open) => !open)}
            aria-expanded={subOpen}
          >
            <Avatar seed={me?.email ?? "mi-cuenta"} size={32} title={displayName} />
            <span className="truncate">{displayName}</span>
            <ChevronDown
              className={`ml-auto size-4 transition-transform ${subOpen ? "rotate-180" : ""}`}
            />
          </SidebarMenuButton>
          {subOpen && (
            <SidebarMenuSub>
              {ACCOUNT_LINKS.map(({ label, href, icon: Icon }) => (
                <SidebarMenuSubItem key={label}>
                  <SidebarMenuSubButton
                    asChild
                    isActive={pathname === href}
                    onClick={closeMobileSidebar}
                  >
                    <Link href={href}>
                      <Icon className="size-4" />
                      <span>{label}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
              <SidebarMenuSubItem>
                <SidebarMenuSubButton
                  onClick={() => void handleLogout()}
                  aria-disabled={loggingOut}
                >
                  <LogOut className="size-4" />
                  <span>{loggingOut ? "Cerrando sesión..." : "Cerrar sesión"}</span>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            </SidebarMenuSub>
          )}
        </SidebarMenuItem>
      </SidebarMenu>
    );
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton>
              <Avatar seed={me?.email ?? "mi-cuenta"} size={24} title={displayName} />
              <span className="truncate">{displayName}</span>
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="start" className="w-56">
            {me?.email && <DropdownMenuLabel className="truncate">{me.email}</DropdownMenuLabel>}
            <DropdownMenuSeparator />
            {ACCOUNT_LINKS.map(({ label, href, icon: Icon }) => (
              <DropdownMenuItem key={label} asChild>
                <Link href={href}>
                  <Icon className="mr-2 size-4" />
                  {label}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => void handleLogout()} disabled={loggingOut}>
              <LogOut className="mr-2 size-4" />
              {loggingOut ? "Cerrando sesión..." : "Cerrar sesión"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

function NavLinks() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { setOpenMobile } = useSidebar();

  return (
    <SidebarMenu>
      {NAV_LINKS.map(({ label, href, icon: Icon }) => (
        <SidebarMenuItem key={href}>
          <SidebarMenuButton asChild isActive={pathname === href}>
            <Link
              href={href}
              onClick={() => {
                if (isMobile) {
                  setOpenMobile(false);
                }
              }}
            >
              <Icon />
              <span>{label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}

/**
 * Persistent authenticated-route shell (spec: `app-navigation-shell`):
 * logo, side nav, account menu on the cream brand background. Replaces
 * `AppNav`, mounted per `page.tsx` the same way `AppNav` was (design D9).
 *
 * Mobile is the primary target (design D5): `openMobile` starts `false` on
 * every load (the shadcn `SidebarProvider` primitive already never reads
 * the persisted `sidebar_state` cookie for it — only `defaultOpen` governs
 * the `md`+ rail, which stays expanded). No layout-shift, no first-frame
 * flash of a panel over the content.
 */
export function AppShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider defaultOpen>
      <Sidebar collapsible="offcanvas">
        <SidebarHeader>
          <Link href="/semana" className="flex items-center gap-2 px-2 py-1">
            <Image src="/icons/logo.png" alt="TwoNutris" width={120} height={40} priority />
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <NavLinks />
        </SidebarContent>
        <SidebarFooter>
          <AccountMenu />
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="min-w-0 bg-cream">
        <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center gap-2 border-b border-leaf-light/40 bg-cream px-4 md:hidden">
          <SidebarTrigger className="size-11" />
          <Image src="/icons/logo.png" alt="TwoNutris" width={96} height={32} />
        </header>
        {/* Live-feedback fix (feedback-round-1): the marketing homepage's
            subtle brand-texture background (`HeroSection`, same exact asset
            + treatment) was missing from the authenticated app shell. Mounted
            once here so every route rendered inside `AppShell` (not just
            `/semana`) gets it, instead of each page re-adding its own. */}
        <div className="relative min-w-0 flex-1 overflow-x-clip bg-cream">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[url('/patterns/patron-negro.png')] bg-[length:700px] bg-repeat opacity-[0.05]"
          />
          <div className="relative">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
