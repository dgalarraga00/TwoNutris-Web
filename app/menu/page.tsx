"use client";

import { useState } from "react";
import Image from "next/image";
import { Flame, Leaf, Salad, Cookie } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { DishModal, ALLERGEN_MAP } from "@/components/DishModal";
import { weeklyMenu, DAYS, type MenuItem, type CategoryKey } from "@/data/menu";

/* ── Tarjeta de plato ───────────────────────────────────────────── */
function DishCard({ plate, onClick }: { plate: MenuItem; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 w-full bg-white"
      style={{
        boxShadow: "0 2px 12px rgba(20,68,0,0.07)",
        border: "1px solid rgba(20,68,0,0.06)",
        cursor: "pointer",
      }}
    >
      <div className="relative w-full overflow-hidden aspect-[4/3]">
        <Image
          src={plate.image}
          alt={plate.name}
          fill
          style={{ transition: "transform 0.4s ease" }}
          className="group-hover:scale-105 object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
          quality={90}
        />
        <div
          className="absolute top-2 right-2 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold font-poppins"
          style={{ backgroundColor: "#FFB000", color: "#144400" }}
        >
          <Flame size={10} strokeWidth={2.5} />
          {plate.calories} kcal
        </div>
      </div>

      <div className="flex flex-col gap-2 p-3 flex-1">
        <h4
          className="text-sm leading-snug font-semibold font-poppins"
          style={{ color: "#144400" }}
        >
          {plate.name}
        </h4>
        <div
          className="flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-full self-start font-poppins"
          style={{ backgroundColor: "#FFFBE4", color: "#144400" }}
        >
          <span>P {plate.macros.protein}g</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>C {plate.macros.carbs}g</span>
          <span style={{ opacity: 0.3 }}>·</span>
          <span>G {plate.macros.fat}g</span>
        </div>
      </div>

      <div className="flex items-center gap-1.5 px-3 py-2.5" style={{ borderTop: "1px solid rgba(20,68,0,0.06)" }}>
        {plate.allergens.length === 0 ? (
          <span className="text-xs font-poppins" style={{ color: "#144400", opacity: 0.3 }}>
            Sin alérgenos
          </span>
        ) : (
          plate.allergens.slice(0, 5).map((a) => {
            const entry = ALLERGEN_MAP[a];
            const Icon = entry?.icon ?? Leaf;
            return (
              <div key={a} className="flex items-center justify-center w-6 h-6 rounded-full" style={{ backgroundColor: "rgba(20,68,0,0.06)" }} title={a}>
                <Icon size={12} strokeWidth={2} style={{ color: "#144400" }} />
              </div>
            );
          })
        )}
      </div>
    </button>
  );
}

/* ── Sección por categoría ──────────────────────────────────────── */
function CategorySection({
  title,
  icon,
  accentColor,
  category,
  items,
  onSelect,
}: {
  title: string;
  icon: React.ReactNode;
  accentColor: string;
  category: CategoryKey;
  items: MenuItem[];
  onSelect: (p: MenuItem) => void;
}) {
  const isPostre = category === "postre";

  return (
    <div className="mb-16">
      {/* Header categoría */}
      <div className="flex items-center gap-3 mb-8">
        <div
          className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
          style={{ backgroundColor: accentColor }}
        >
          {icon}
        </div>
        <div className="flex items-center gap-4 flex-1">
          <h2
            className="text-2xl font-bold whitespace-nowrap font-ibrand"
            style={{ color: "#144400" }}
          >
            {title}
          </h2>
          <div className="flex-1 bg-gray-200 h-px" />
        </div>
      </div>

      {isPostre ? (
        /* Postres: grid directo sin días */
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {items.map((p) => (
            <DishCard key={p.id} plate={p} onClick={() => onSelect(p)} />
          ))}
        </div>
      ) : (
        /* Platos principales y ensaladas: por día */
        <div className="flex flex-col gap-8">
          {DAYS.map(({ key, label }) => {
            const dayItems = items.filter((p) => p.day === key);
            if (dayItems.length === 0) return null;
            return (
              <div key={key} className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                {/* Etiqueta del día */}
                <div
                  className="flex-shrink-0 flex items-center justify-center rounded-2xl px-4 py-2 md:py-3 md:w-28 text-center min-w-[88px]"
                >
                  <span
                    className="text-sm font-bold font-poppins"
                    style={{ color: "#144400" }}
                  >
                    {label}
                  </span>
                </div>
                {/* Platos del día */}
                <div className={`grid gap-4 flex-1 w-full ${category === "ensalada" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}>
                  {dayItems.map((p) => (
                    <DishCard key={p.id} plate={p} onClick={() => onSelect(p)} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ── Helpers ────────────────────────────────────────────────────── */
function getWeekRange() {
  const now = new Date();
  const day = now.getDay();
  const diffToMonday = day === 0 ? 1 : day === 6 ? 2 : 1 - day;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday);
  const friday = new Date(monday);
  friday.setDate(monday.getDate() + 4);
  const fmt = (d: Date) => d.toLocaleDateString("es-EC", { day: "numeric", month: "long" });
  return `${fmt(monday)} — ${fmt(friday)}`;
}

/* ── Página ─────────────────────────────────────────────────────── */
const CATEGORY_TABS: { key: CategoryKey; label: string; icon: React.ReactNode }[] = [
  { key: "principal", label: "Platos Principales", icon: <Flame size={15} strokeWidth={2.5} /> },
  { key: "ensalada",  label: "Ensaladas",          icon: <Salad size={15} strokeWidth={2.5} /> },
  { key: "postre",    label: "Postres",             icon: <Cookie size={15} strokeWidth={2.5} /> },
];

export default function MenuPage() {
  const [selectedPlate, setSelectedPlate] = useState<MenuItem | null>(null);
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("principal");
  const weekRange = getWeekRange();

  const principales = weeklyMenu.filter((p) => p.category === "principal");
  const ensaladas   = weeklyMenu.filter((p) => p.category === "ensalada");
  const postres     = weeklyMenu.filter((p) => p.category === "postre");

  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">

        {/* Header */}
        <div className="max-w-[1200px] mx-auto px-6 pt-32 pb-4 text-center">
          <h1
            className="text-5xl md:text-6xl leading-tight mb-4 font-ibrand"
            style={{ color: "#144400" }}
          >
            Nuestro Menú
          </h1>
        </div>

        {/* Franja semana */}
        <div className="max-w-[1200px] mx-auto px-6 pb-8">
          <div className="flex items-center gap-4 mb-2">
            <span className="text-base font-bold whitespace-nowrap font-poppins text-gray-900">
              Menú de la semana
            </span>
            <div className="flex-1 bg-gray-200 h-px" />
          </div>
          <p className="text-sm font-poppins text-gray-700">
            <strong>Platos disponibles solo esta semana.</strong>{" "}
            ¡Nueva carta cada sábado! &nbsp;·&nbsp; {weekRange}
          </p>
        </div>

        {/* Tabs de categoría */}
        <div className="max-w-[1200px] mx-auto px-6 pb-10">
          <div className="flex items-center gap-3 flex-wrap">
            {CATEGORY_TABS.map(({ key, label, icon }) => {
              const active = activeCategory === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveCategory(key)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 border-0 cursor-pointer font-poppins"
                  style={{
                    backgroundColor: active ? "#144400" : "transparent",
                    color: active ? "#FFFBE4" : "#144400",
                    border: active ? "none" : "1.5px solid rgba(20,68,0,0.2)",
                    boxShadow: active ? "0 4px 12px rgba(20,68,0,0.2)" : "none",
                  }}
                >
                  {icon}
                  {label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Sección activa */}
        <div className="max-w-[1200px] mx-auto px-6 pb-24">
          {activeCategory === "principal" && (
            <CategorySection
              title="Platos Principales"
              icon={<Flame size={20} strokeWidth={2} style={{ color: "#144400" }} />}
              accentColor="#FFB000"
              category="principal"
              items={principales}
              onSelect={setSelectedPlate}
            />
          )}
          {activeCategory === "ensalada" && (
            <CategorySection
              title="Ensaladas"
              icon={<Salad size={20} strokeWidth={2} style={{ color: "#144400" }} />}
              accentColor="#FFB000"
              category="ensalada"
              items={ensaladas}
              onSelect={setSelectedPlate}
            />
          )}
          {activeCategory === "postre" && (
            <CategorySection
              title="Postres de la semana"
              icon={<Cookie size={20} strokeWidth={2} style={{ color: "#144400" }} />}
              accentColor="#FFB000"
              category="postre"
              items={postres}
              onSelect={setSelectedPlate}
            />
          )}
        </div>

      </main>

      <Footer onManageCookies={() => setCookiesOpen(true)} />
      <CookieBanner open={cookiesOpen} onClose={() => setCookiesOpen(false)} />

      {selectedPlate && (
        <DishModal plate={selectedPlate} onClose={() => setSelectedPlate(null)} />
      )}
    </>
  );
}
