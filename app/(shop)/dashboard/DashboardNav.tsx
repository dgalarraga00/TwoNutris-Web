"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, User } from "lucide-react";

const TABS = [
  { href: "/dashboard/pedidos", label: "Mis pedidos", icon: ShoppingBag },
  { href: "/dashboard/perfil",  label: "Mi perfil",   icon: User },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-1 mb-8 border-b border-gray-200">
      {TABS.map(({ href, label, icon: Icon }) => {
        const active = pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold font-poppins border-b-2 transition-colors ${
              active
                ? "text-leaf border-leaf"
                : "text-gray-500 border-transparent hover:text-leaf hover:border-leaf"
            }`}
          >
            <Icon size={15} />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
