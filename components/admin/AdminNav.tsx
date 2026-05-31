"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, ShoppingBag, Utensils, Users, LogOut, ChefHat, CalendarDays, Package } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

const LINKS = [
  { href: "/admin", label: "Overview", icon: LayoutDashboard, exact: true },
  { href: "/admin/pedidos", label: "Pedidos", icon: ShoppingBag, exact: false },
  { href: "/admin/platos", label: "Platos", icon: Utensils, exact: false },
  { href: "/admin/clientes", label: "Clientes", icon: Users, exact: false },
  { href: "/admin/platillos", label: "Platillos", icon: ChefHat, exact: false },
  { href: "/admin/menu-semanal", label: "Menú semanal", icon: CalendarDays, exact: false },
  { href: "/admin/paquetes", label: "Paquetes", icon: Package, exact: false },
];

interface AdminNavProps {
  email: string;
}

export function AdminNav({ email }: AdminNavProps) {
  const pathname = usePathname();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <>
      {/* ── Sidebar desktop ── */}
      <aside className="hidden md:flex w-56 shrink-0 flex-col bg-white border-r border-gray-200 min-h-screen">
        <div className="px-5 py-6 border-b border-gray-100">
          <Image
            src="/icons/logo.png"
            alt="TwoNutris"
            width={148}
            height={48}
            priority
          />
          <span className="font-poppins text-xs text-gray-400 mt-1 block">
            Admin
          </span>
        </div>

        <nav className="flex flex-col gap-1 px-3 py-4 flex-1">
          {LINKS.map(({ href, label, icon: Icon, exact }) => {
            const active = exact ? pathname === href : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-semibold font-poppins transition-colors ${
                  active
                    ? "bg-leaf text-cream"
                    : "text-gray-600 hover:bg-gray-50 hover:text-leaf"
                }`}
              >
                <Icon size={16} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="px-4 py-4 border-t border-gray-100 flex flex-col gap-2">
          <p className="font-poppins text-xs text-gray-400 truncate px-1">{email}</p>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-semibold font-poppins text-red-500 hover:bg-red-50 transition-colors w-full"
          >
            <LogOut size={15} />
            Cerrar sesión
          </button>
        </div>
      </aside>

      {/* ── Bottom nav mobile ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 flex items-center justify-around px-1 pb-safe">
        {LINKS.map(({ href, label, icon: Icon, exact }) => {
          const active = exact ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl transition-colors min-w-0 ${
                active ? "text-leaf" : "text-gray-400"
              }`}
            >
              <Icon size={20} />
              <span className="text-[10px] font-poppins font-semibold truncate max-w-[52px] text-center leading-tight">
                {label}
              </span>
            </Link>
          );
        })}
        <button
          onClick={handleLogout}
          className="flex flex-col items-center gap-0.5 px-2 py-2 rounded-xl text-red-400 transition-colors"
        >
          <LogOut size={20} />
          <span className="text-[10px] font-poppins font-semibold">Salir</span>
        </button>
      </nav>

    </>
  );
}
