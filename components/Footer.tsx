"use client";

import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Inicio",                  href: "/" },
  { label: "Sobre Nosotros",          href: "/sobre-nosotros" },
  { label: "Menú",                    href: "/menu" },
  { label: "Planes",                  href: "#planes" },
  { label: "twonutris para empresas", href: "/empresas" },
  { label: "Contacto",                href: "mailto:info@twonutris.net" },
];

function Instagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function Facebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function WhatsApp() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

function TikTok() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/>
    </svg>
  );
}

interface FooterProps {
  onManageCookies: () => void;
}

export function Footer({ onManageCookies }: FooterProps) {
  return (
    <footer
      style={{ backgroundColor: "#FFFBE4" }} className="rounded-t-[4rem] -mt-16"
    >
      {/* ── Sección superior: columnas de info ─────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Navegación */}
          <div className="flex flex-col gap-5">
            <span
              className="text-xs font-bold tracking-widest uppercase font-poppins"
              style={{ color: "#FFB000" }}
            >
              Navegación
            </span>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm w-fit transition-opacity duration-200 hover:opacity-100 no-underline font-poppins"
                  style={{ color: "#144400", opacity: 0.6 }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Información */}
          <div className="flex flex-col gap-5">
            <span
              className="text-xs font-bold tracking-widest uppercase font-poppins"
              style={{ color: "#FFB000" }}
            >
              Información
            </span>
            <div className="flex flex-col gap-4">
              {[
                { label: "Zonas",  value: "Quito y Valles",     href: null },
                { label: "Email",  value: "info@twonutris.net", href: "mailto:info@twonutris.net" },
                { label: "Tel",    value: "+593 98 339 2007",   href: "tel:+593983392007" },
              ].map(({ label, value, href }) => (
                <p key={label} className="text-sm font-poppins">
                  <span style={{ color: "#144400", fontWeight: 700 }}>{label}: </span>
                  {href ? (
                    <a href={href} className="hover:opacity-100 transition-opacity no-underline"
                      style={{ color: "#FFB000", opacity: 0.85 }}>
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: "#FFB000", opacity: 0.85 }}>{value}</span>
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Logo pequeño + redes */}
          <div className="flex flex-col items-start gap-5">
            <span
              className="text-xs font-bold tracking-widest uppercase font-poppins"
              style={{ color: "#FFB000" }}
            >
              Síguenos
            </span>
            <Image
              src="/icons/Isotipo.png"
              alt="twonutris"
              width={80}
              height={80}
              className="mix-blend-multiply object-contain"
            />
            {/* Redes */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Instagram />,  href: "https://www.instagram.com/twonutris.ec/", label: "Instagram" },
                { icon: <Facebook />,  href: "https://www.facebook.com/profile.php?id=61565925871478", label: "Facebook" },
                { icon: <TikTok />,    href: "https://www.tiktok.com/@twonutris.ec", label: "TikTok" },
                { icon: <WhatsApp />,  href: "https://wa.me/593983392007", label: "WhatsApp" },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:scale-110"
                  style={{ backgroundColor: "rgba(20,68,0,0.07)", color: "#FFB000" }}
                >
                  {icon}
                </a>
              ))}
            </div>
            <p
              className="text-xs leading-relaxed font-poppins max-w-[220px]"
            >
              Comida preparada cerca de ti, lista para disfrutar.
            </p>
          </div>

        </div>
      </div>

      {/* ── Logo grande centrado ────────────────────────────────── */}
      <div
        className="w-full flex items-center justify-center py-10 px-6"
        style={{ borderTop: "1px solid rgba(20,68,0,0.08)", borderBottom: "1px solid rgba(20,68,0,0.08)" }}
      >
        <Image
          src="/icons/logo.png"
          alt="twonutris"
          width={600}
          height={120}
          className="w-full object-contain mix-blend-multiply max-w-[480px] h-auto"
        />
      </div>

      {/* ── Barra inferior ──────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 flex-wrap">
        <p
          className="text-xs font-poppins"
          style={{ color: "#144400", opacity: 0.7 }}
        >
          © 2026 twonutris. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-4 flex-wrap justify-center">
          {[
            { label: "Términos y Condiciones", href: "/terminos" },
            { label: "Política de Privacidad", href: "/privacidad" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-xs hover:opacity-100 transition-opacity no-underline font-poppins"
              style={{ color: "#144400", opacity: 0.7 }}
            >
              {label}
            </Link>
          ))}
          <span style={{ color: "#144400", opacity: 0.2 }}>|</span>
          <button
            type="button"
            onClick={onManageCookies}
            className="text-xs hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-0 font-poppins"
            style={{ color: "#144400", opacity: 0.7 }}
          >
            Cookies
          </button>
          <button
            type="button"
            onClick={onManageCookies}
            className="text-xs hover:opacity-100 transition-opacity cursor-pointer bg-transparent border-0 font-poppins"
            style={{ color: "#FFB000", opacity: 1 }}
          >
            Gestionar mis cookies
          </button>
        </div>
      </div>

      {/* Crédito */}
      <div className="pb-6 flex justify-center">
        <p className="text-xs font-poppins" style={{ color: "#144400", opacity: 0.5 }}>
          Designed in Ecuador by{" "}
          <a
            href="https://www.instagram.com/promethex.tech?igsh=bDgzNXhtdHBtejZy"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
            style={{ opacity: 1, color: "#FFB000" }}
          >Promethex</a>
        </p>
      </div>
    </footer>
  );
}
