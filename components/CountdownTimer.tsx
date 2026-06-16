"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LAUNCH_AT_ISO } from "@/lib/launch";

interface Remaining {
  d: number;
  h: number;
  m: number;
  s: number;
  done: boolean;
}

function remainingTo(target: number): Remaining {
  const ms = Math.max(0, target - Date.now());
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor((ms % 86_400_000) / 3_600_000),
    m: Math.floor((ms % 3_600_000) / 60_000),
    s: Math.floor((ms % 60_000) / 1_000),
    done: ms === 0,
  };
}

interface Props {
  /** ISO 8601. Por defecto, la fecha de lanzamiento. */
  targetISO?: string;
  /** Variante compacta (una línea) para el banner. */
  compact?: boolean;
}

/**
 * Renderiza una cuenta regresiva días/horas/min/seg. En el primer render
 * (servidor y cliente) muestra un placeholder neutro para evitar mismatch de
 * hidratación; el valor real se calcula en useEffect. Al llegar a cero,
 * refresca la ruta para revelar el contenido sin recarga manual.
 */
export function CountdownTimer({ targetISO = LAUNCH_AT_ISO, compact = false }: Props) {
  const target = new Date(targetISO).getTime();
  const [t, setT] = useState<Remaining | null>(null);
  const router = useRouter();

  useEffect(() => {
    setT(remainingTo(target));
    const id = setInterval(() => {
      const next = remainingTo(target);
      setT(next);
      if (next.done) {
        clearInterval(id);
        router.refresh();
      }
    }, 1_000);
    return () => clearInterval(id);
  }, [target, router]);

  const pad = (n: number | undefined) =>
    n === undefined ? "––" : String(n).padStart(2, "0");

  const segments: { value: number | undefined; label: string }[] = [
    { value: t?.d, label: "días" },
    { value: t?.h, label: "horas" },
    { value: t?.m, label: "min" },
    { value: t?.s, label: "seg" },
  ];

  if (compact) {
    return (
      <span className="font-poppins font-bold tabular-nums tracking-tight">
        {segments
          .map((seg) => `${pad(seg.value)}${seg.label[0]}`)
          .join(" ")}
      </span>
    );
  }

  return (
    <div className="flex items-start justify-center gap-3 sm:gap-6">
      {segments.map((seg) => (
        <div key={seg.label} className="flex flex-col items-center min-w-[58px] sm:min-w-[84px]">
          <span className="text-5xl sm:text-7xl font-bold font-ibrand tabular-nums leading-none text-cream">
            {pad(seg.value)}
          </span>
          <span className="mt-2 text-[11px] sm:text-sm font-poppins uppercase tracking-widest text-cream/70">
            {seg.label}
          </span>
        </div>
      ))}
    </div>
  );
}
