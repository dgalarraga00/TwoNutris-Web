"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface CookiePrefs {
  necesarias: boolean;
  analiticas: boolean;
  marketing: boolean;
}

const COOKIE_KEY = "tw_cookie_consent";

interface CookieBannerProps {
  open: boolean;
  onClose: () => void;
}

export function CookieBanner({ open, onClose }: CookieBannerProps) {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [prefs, setPrefs] = useState<CookiePrefs>({
    necesarias: true,
    analiticas: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem(COOKIE_KEY);
    if (!saved) {
      setShowBanner(true);
      return;
    }
    try {
      const parsed = JSON.parse(saved) as CookiePrefs;
      setPrefs(parsed);
    } catch {
      // Cookie corrupta: asumimos que el usuario no aceptó y mostramos el banner de nuevo
      setShowBanner(true);
    }
  }, []);

  // Abre el modal desde el footer
  useEffect(() => {
    if (open) setShowModal(true);
  }, [open]);

  const acceptAll = () => {
    const all = { necesarias: true, analiticas: true, marketing: true };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(all));
    setPrefs(all);
    setShowBanner(false);
    setShowModal(false);
    onClose();
  };

  const savePrefs = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(prefs));
    setShowBanner(false);
    setShowModal(false);
    onClose();
  };

  const rejectAll = () => {
    const none = { necesarias: true, analiticas: false, marketing: false };
    localStorage.setItem(COOKIE_KEY, JSON.stringify(none));
    setPrefs(none);
    setShowBanner(false);
    setShowModal(false);
    onClose();
  };

  const COOKIE_TYPES = [
    {
      key: "necesarias" as keyof CookiePrefs,
      title: "Cookies necesarias",
      desc: "Imprescindibles para el funcionamiento de la web. No se pueden desactivar.",
      locked: true,
    },
    {
      key: "analiticas" as keyof CookiePrefs,
      title: "Cookies analíticas",
      desc: "Nos ayudan a entender cómo usas la web para mejorar tu experiencia.",
      locked: false,
    },
    {
      key: "marketing" as keyof CookiePrefs,
      title: "Cookies de marketing",
      desc: "Usadas para mostrarte publicidad relevante según tus intereses.",
      locked: false,
    },
  ];

  return (
    <>
      {/* ── Banner inferior ─────────────────────────────────────── */}
      {showBanner && !showModal && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div
            className="max-w-[900px] mx-auto rounded-3xl p-6 flex flex-col md:flex-row items-start md:items-center gap-5 pointer-events-auto"
          >
            <div className="flex-1">
              <p
                className="text-sm font-semibold mb-1 font-poppins"
                style={{ color: "#144400" }}
              >
                🍪 Usamos cookies
              </p>
              <p
                className="text-xs leading-relaxed font-poppins text-gray-700"
                style={{ opacity: 0.75 }}
              >
                Utilizamos cookies propias y de terceros para mejorar tu experiencia. Puedes aceptarlas todas o gestionar tus preferencias.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="text-xs font-semibold px-4 py-2.5 rounded-full cursor-pointer border-0 transition-all duration-200 hover:opacity-80 font-poppins bg-transparent"
                style={{ color: "#144400", border: "1.5px solid rgba(20,68,0,0.2)" }}
              >
                Gestionar
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="text-xs font-bold px-5 py-2.5 rounded-full cursor-pointer border-0 transition-all duration-200 hover:scale-105 font-poppins"
                style={{ backgroundColor: "#144400", color: "#FFFBE4" }}
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Modal de gestión ────────────────────────────────────── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-4 bg-black/45 backdrop-blur-sm"
          onClick={() => { setShowModal(false); onClose(); }}
        >
          <div
            className="w-full max-w-lg rounded-3xl overflow-hidden"
            style={{ backgroundColor: "#FFFBE4" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div
              className="flex items-center justify-between px-6 py-5"
              style={{ borderBottom: "1px solid rgba(20,68,0,0.08)" }}
            >
              <h3
                className="text-lg font-semibold font-ibrand"
                style={{ color: "#144400" }}
              >
                Gestionar mis cookies
              </h3>
              <button
                type="button"
                onClick={() => { setShowModal(false); onClose(); }}
                className="flex items-center justify-center w-8 h-8 rounded-full border-0 cursor-pointer transition-all hover:scale-110"
                style={{ backgroundColor: "rgba(20,68,0,0.07)", color: "#144400" }}
              >
                <X size={15} strokeWidth={2.5} />
              </button>
            </div>

            {/* Opciones */}
            <div className="px-6 py-4 flex flex-col gap-4">
              {COOKIE_TYPES.map(({ key, title, desc, locked }) => (
                <div
                  key={key}
                  className="flex items-start justify-between gap-4 py-3"
                  style={{ borderBottom: "1px solid rgba(20,68,0,0.06)" }}
                >
                  <div className="flex-1">
                    <p
                      className="text-sm font-semibold mb-0.5 font-poppins"
                      style={{ color: "#144400" }}
                    >
                      {title}
                    </p>
                    <p
                      className="text-xs leading-relaxed font-poppins text-gray-700"
                      style={{ opacity: 0.65 }}
                    >
                      {desc}
                    </p>
                  </div>
                  {/* Toggle */}
                  <button
                    type="button"
                    disabled={locked}
                    onClick={() => !locked && setPrefs((p) => ({ ...p, [key]: !p[key] }))}
                    className={`flex-shrink-0 relative w-11 h-6 rounded-full border-0 transition-colors duration-200${prefs[key] ? "" : " bg-gray-300"}`}
                    style={{
                      backgroundColor: prefs[key] ? "#144400" : undefined,
                      cursor: locked ? "not-allowed" : "pointer",
                      opacity: locked ? 0.6 : 1,
                    }}
                  >
                    <span
                      className="absolute top-0.5 w-5 h-5 rounded-full transition-transform duration-200 bg-white"
                      style={{
                        transform: prefs[key] ? "translateX(22px)" : "translateX(2px)",
                      }}
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Acciones */}
            <div
              className="flex items-center gap-3 px-6 py-5"
              style={{ borderTop: "1px solid rgba(20,68,0,0.08)" }}
            >
              <button
                type="button"
                onClick={rejectAll}
                className="flex-1 text-sm font-semibold py-3 rounded-full cursor-pointer border-0 transition-all hover:opacity-80 font-poppins bg-transparent"
                style={{ color: "#144400", border: "1.5px solid rgba(20,68,0,0.2)" }}
              >
                Rechazar todas
              </button>
              <button
                type="button"
                onClick={savePrefs}
                className="flex-1 text-sm font-bold py-3 rounded-full cursor-pointer border-0 transition-all hover:scale-[1.02] font-poppins"
                style={{ backgroundColor: "#FFB000", color: "#144400" }}
              >
                Guardar preferencias
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="flex-1 text-sm font-bold py-3 rounded-full cursor-pointer border-0 transition-all hover:scale-[1.02] font-poppins"
                style={{ backgroundColor: "#144400", color: "#FFFBE4" }}
              >
                Aceptar todas
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
