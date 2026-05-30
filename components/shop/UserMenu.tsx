"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { User, LogOut, ShoppingBag, ChevronDown } from "lucide-react";
import { createClient } from "@/utils/supabase/client";

interface Props {
  email: string;
}

export function UserMenu({ email }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Cierra el menú si se hace click afuera
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  const initial = email[0]?.toUpperCase() ?? "U";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-leaf/10 transition-colors"
      >
        <div className="w-7 h-7 rounded-full bg-leaf text-cream flex items-center justify-center text-xs font-bold font-poppins">
          {initial}
        </div>
        <span className="hidden sm:block text-sm font-poppins font-medium text-leaf max-w-[140px] truncate">
          {email}
        </span>
        <ChevronDown
          size={14}
          className={`text-leaf transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-2xl shadow-lg border border-gray-100 py-1.5 z-50">
          <button
            onClick={() => { setOpen(false); router.push("/dashboard/pedidos"); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-poppins text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ShoppingBag size={15} className="text-leaf" />
            Mis pedidos
          </button>
          <button
            onClick={() => { setOpen(false); router.push("/dashboard/perfil"); }}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-poppins text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <User size={15} className="text-leaf" />
            Mi perfil
          </button>
          <div className="my-1 border-t border-gray-100" />
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-poppins text-red-500 hover:bg-red-50 transition-colors"
          >
            <LogOut size={15} />
            Cerrar sesión
          </button>
        </div>
      )}
    </div>
  );
}
