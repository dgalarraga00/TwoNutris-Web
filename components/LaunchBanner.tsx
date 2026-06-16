"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { CountdownTimer } from "@/components/CountdownTimer";
import { LAUNCH_AT_ISO } from "@/lib/launch";

/**
 * Pill flotante con la cuenta regresiva del lanzamiento. Se ubica bajo el
 * navbar (fixed) sin alterar el layout. Decide en el cliente si mostrarse,
 * así no depende del cacheo de la página y desaparece solo al llegar la fecha.
 */
export function LaunchBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(Date.now() < new Date(LAUNCH_AT_ISO).getTime());
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-[80px] left-1/2 -translate-x-1/2 z-40 px-4 w-full max-w-[92%] sm:max-w-fit">
      <div
        className="flex items-center justify-center gap-2 rounded-full px-5 py-2.5 shadow-lg font-poppins text-sm"
        style={{ backgroundColor: "#FFB000", color: "#144400" }}
      >
        <Clock size={15} className="flex-shrink-0" />
        <span className="font-semibold">Nuevo menú en</span>
        <CountdownTimer compact />
      </div>
    </div>
  );
}
