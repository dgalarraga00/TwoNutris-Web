"use client";

import { useState, useTransition } from "react";
import { User, Phone, Mail, Save, Check } from "lucide-react";

interface Props {
  email: string;
  fullName: string;
  whatsapp: string;
}

export function PerfilClient({ email, fullName: initialName, whatsapp: initialWhatsapp }: Props) {
  const [fullName, setFullName] = useState(initialName);
  const [whatsapp, setWhatsapp] = useState(initialWhatsapp);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSaved(false);

    startTransition(async () => {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, whatsapp }),
      });

      if (!res.ok) {
        setError("No se pudo guardar. Intentá de nuevo.");
        return;
      }

      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md flex flex-col gap-5">
      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
          <Mail size={12} />
          Correo electrónico
        </label>
        <input
          type="email"
          value={email}
          disabled
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-400 bg-gray-50 cursor-not-allowed"
        />
        <p className="text-[11px] font-poppins text-gray-400">
          El correo no se puede cambiar desde aquí.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
          <User size={12} />
          Nombre completo
        </label>
        <input
          type="text"
          placeholder="Juan Pérez"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-900 placeholder-gray-400 focus:outline-none focus:border-leaf transition-colors"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xs font-semibold font-poppins text-gray-500 uppercase tracking-wide flex items-center gap-1.5">
          <Phone size={12} />
          WhatsApp
        </label>
        <input
          type="tel"
          placeholder="+593 99 999 9999"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm font-poppins text-gray-900 placeholder-gray-400 focus:outline-none focus:border-leaf transition-colors"
        />
      </div>

      {error && (
        <p className="text-sm font-poppins text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-leaf text-cream font-bold font-poppins text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
      >
        {saved ? (
          <>
            <Check size={16} />
            Guardado
          </>
        ) : (
          <>
            <Save size={16} />
            Guardar cambios
          </>
        )}
      </button>
    </form>
  );
}
