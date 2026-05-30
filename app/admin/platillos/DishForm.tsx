"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import type { DishTemplate } from "@/lib/generated/prisma";
import { DishTemplateCategory } from "@/lib/generated/prisma";

type DishFormValues = {
  name: string;
  description: string;
  category: DishTemplateCategory;
  price: number;
  ingredients: string;
  image: string;
  calories: string;
  protein: string;
  carbs: string;
  fat: string;
  servingSize: string;
  servingUnit: string;
  fatSaturated: string;
  fatTrans: string;
  cholesterol: string;
  sodium: string;
  fiber: string;
  sugarTotal: string;
  sugarAdded: string;
  isActive: boolean;
};

const CATEGORY_OPTIONS: { value: DishTemplateCategory; label: string }[] = [
  { value: "CLASICO", label: "Clásico" },
  { value: "LOW_CARB", label: "Low Carb" },
  { value: "VEGETARIANO", label: "Vegetariano" },
  { value: "PREMIUM", label: "Premium" },
];

const ALLERGEN_OPTIONS = [
  "Gluten",
  "Lácteos",
  "Huevo",
  "Pescado",
  "Frutos secos",
  "Vegetariano",
  "Sulfitos",
  "Picante",
  "Apio",
  "Mostaza",
  "Soya",
  "Sésamo",
  "Maní",
  "Maíz",
  "Leguminosas",
  "Mariscos",
];

const SERVING_UNIT_OPTIONS = ["g", "ml", "oz"];

export function DishForm({ dish }: { dish?: DishTemplate }) {
  const router = useRouter();
  const isEdit = !!dish;

  const [values, setValues] = useState<DishFormValues>({
    name: dish?.name ?? "",
    description: dish?.description ?? "",
    category: dish?.category ?? "CLASICO",
    price: dish?.price ?? 6.75,
    ingredients: dish?.ingredients ?? "",
    image: dish?.image ?? "",
    calories: dish?.calories?.toString() ?? "",
    protein: dish?.protein?.toString() ?? "",
    carbs: dish?.carbs?.toString() ?? "",
    fat: dish?.fat?.toString() ?? "",
    servingSize: dish?.servingSize?.toString() ?? "",
    servingUnit: dish?.servingUnit ?? "g",
    fatSaturated: dish?.fatSaturated?.toString() ?? "",
    fatTrans: dish?.fatTrans?.toString() ?? "",
    cholesterol: dish?.cholesterol?.toString() ?? "",
    sodium: dish?.sodium?.toString() ?? "",
    fiber: dish?.fiber?.toString() ?? "",
    sugarTotal: dish?.sugarTotal?.toString() ?? "",
    sugarAdded: dish?.sugarAdded?.toString() ?? "",
    isActive: dish?.isActive ?? true,
  });

  const [allergens, setAllergens] = useState<string[]>(dish?.allergens ?? []);

  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function set<K extends keyof DishFormValues>(key: K, value: DishFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function toggleAllergen(a: string) {
    setAllergens((prev) => (prev.includes(a) ? prev.filter((x) => x !== a) : [...prev, a]));
  }

  async function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const supabase = createClient();
      const path = `dishes/${Date.now()}-${file.name}`;
      const { error: uploadError } = await supabase.storage
        .from("dish-images")
        .upload(path, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data } = supabase.storage.from("dish-images").getPublicUrl(path);
      set("image", data.publicUrl);
    } catch (err) {
      setError("Error al subir la imagen. Intentá de nuevo.");
      console.error(err);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const payload = {
      name: values.name,
      description: values.description,
      category: values.category,
      price: values.price,
      ingredients: values.ingredients || null,
      allergens,
      image: values.image || null,
      calories: values.calories ? parseInt(values.calories) : null,
      protein: values.protein ? parseFloat(values.protein) : null,
      carbs: values.carbs ? parseFloat(values.carbs) : null,
      fat: values.fat ? parseFloat(values.fat) : null,
      servingSize: values.servingSize ? parseFloat(values.servingSize) : null,
      servingUnit: values.servingUnit || null,
      fatSaturated: values.fatSaturated ? parseFloat(values.fatSaturated) : null,
      fatTrans: values.fatTrans ? parseFloat(values.fatTrans) : null,
      cholesterol: values.cholesterol ? parseFloat(values.cholesterol) : null,
      sodium: values.sodium ? parseFloat(values.sodium) : null,
      fiber: values.fiber ? parseFloat(values.fiber) : null,
      sugarTotal: values.sugarTotal ? parseFloat(values.sugarTotal) : null,
      sugarAdded: values.sugarAdded ? parseFloat(values.sugarAdded) : null,
      isActive: values.isActive,
    };

    try {
      const url = isEdit ? `/api/admin/dishes/${dish.id}` : "/api/admin/dishes";
      const method = isEdit ? "PATCH" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Error al guardar");
      }

      router.push("/admin/platillos");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error inesperado");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => router.push("/admin/platillos")}
          className="flex items-center gap-2 font-poppins text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} />
          Volver
        </button>
        <button
          form="dish-form"
          type="submit"
          disabled={saving || uploading}
          className="bg-leaf text-cream font-poppins font-semibold text-sm px-5 py-2.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {saving ? "Guardando..." : "Guardar"}
        </button>
      </div>

      <h1 className="font-poppins font-bold text-2xl text-gray-900 mb-6">
        {isEdit ? "Editar platillo" : "Nuevo platillo"}
      </h1>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-4">
          <p className="font-poppins text-sm text-red-600">{error}</p>
        </div>
      )}

      <form id="dish-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4">
          <h2 className="font-poppins font-semibold text-sm text-gray-700">Información básica</h2>

          <div className="flex flex-col gap-1.5">
            <label className="font-poppins text-xs font-semibold text-gray-600">
              Nombre <span className="text-red-400">*</span>
            </label>
            <input
              required
              type="text"
              value={values.name}
              onChange={(e) => set("name", e.target.value)}
              placeholder="Ej: Pollo al limón con arroz integral"
              className="font-poppins text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-leaf/30"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-poppins text-xs font-semibold text-gray-600">
              Categoría <span className="text-red-400">*</span>
            </label>
            <select
              required
              value={values.category}
              onChange={(e) => set("category", e.target.value as DishTemplateCategory)}
              className="font-poppins text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-leaf/30 bg-white"
            >
              {CATEGORY_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-poppins text-xs font-semibold text-gray-600">Precio</label>
            <div className="flex gap-3">
              {[
                { value: 6.75, label: "$6.75 — Base" },
                { value: 7.75, label: "$7.75 — Premium" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className={`flex items-center gap-2 cursor-pointer border rounded-xl px-4 py-2.5 flex-1 font-poppins text-sm transition-colors ${
                    values.price === opt.value
                      ? "border-leaf bg-leaf/5 text-leaf font-semibold"
                      : "border-gray-200 text-gray-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="price"
                    value={opt.value}
                    checked={values.price === opt.value}
                    onChange={() => set("price", opt.value)}
                    className="accent-leaf"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-poppins text-xs font-semibold text-gray-600">
              Descripción <span className="text-red-400">*</span>
            </label>
            <textarea
              required
              value={values.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="Describí el plato, ingredientes principales, modo de preparación..."
              rows={3}
              className="font-poppins text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-leaf/30 resize-none"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-poppins text-xs font-semibold text-gray-600">Ingredientes</label>
            <textarea
              value={values.ingredients}
              onChange={(e) => set("ingredients", e.target.value)}
              placeholder="Ej: Pechuga de pollo, arroz integral, tomate, cebolla, aceite de oliva..."
              rows={3}
              className="font-poppins text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-leaf/30 resize-none"
            />
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4">
          <h2 className="font-poppins font-semibold text-sm text-gray-700">Alérgenos</h2>
          <div className="grid grid-cols-4 gap-2">
            {ALLERGEN_OPTIONS.map((a) => (
              <label
                key={a}
                className={`flex items-center gap-2 cursor-pointer border rounded-xl px-3 py-2 font-poppins text-xs transition-colors ${
                  allergens.includes(a)
                    ? "border-leaf bg-leaf/5 text-leaf font-semibold"
                    : "border-gray-200 text-gray-600"
                }`}
              >
                <input
                  type="checkbox"
                  checked={allergens.includes(a)}
                  onChange={() => toggleAllergen(a)}
                  className="accent-leaf"
                />
                {a}
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4">
          <h2 className="font-poppins font-semibold text-sm text-gray-700">Imagen</h2>

          <div className="flex flex-col gap-3">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              disabled={uploading}
              className="font-poppins text-sm text-gray-600 file:mr-3 file:font-poppins file:text-xs file:font-semibold file:bg-leaf/10 file:text-leaf file:border-0 file:px-3 file:py-1.5 file:rounded-lg file:cursor-pointer"
            />
            {uploading && (
              <p className="font-poppins text-xs text-gray-400">Subiendo imagen...</p>
            )}
            {values.image && (
              <div className="relative h-40 w-40 rounded-xl overflow-hidden border border-gray-200">
                <Image src={values.image} alt="Preview" fill sizes="128px" className="object-cover" />
              </div>
            )}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5 flex flex-col gap-4">
          <h2 className="font-poppins font-semibold text-sm text-gray-700">Información nutricional</h2>

          <div className="grid grid-cols-2 gap-3">
            {[
              { key: "calories" as const, label: "Kcal", type: "integer" },
              { key: "protein" as const, label: "Proteína (g)", type: "decimal" },
              { key: "carbs" as const, label: "Carbohidratos (g)", type: "decimal" },
              { key: "fat" as const, label: "Grasas (g)", type: "decimal" },
            ].map(({ key, label }) => (
              <div key={key} className="flex flex-col gap-1.5">
                <label className="font-poppins text-xs font-semibold text-gray-600">{label}</label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={values[key]}
                  onChange={(e) => set(key, e.target.value)}
                  className="font-poppins text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-leaf/30"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
            <h3 className="font-poppins font-semibold text-xs text-gray-500 uppercase tracking-wide">
              Datos extendidos
            </h3>

            <div className="flex gap-3">
              <div className="flex flex-col gap-1.5 flex-1">
                <label className="font-poppins text-xs font-semibold text-gray-600">
                  Tamaño de porción
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  value={values.servingSize}
                  onChange={(e) => set("servingSize", e.target.value)}
                  className="font-poppins text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-leaf/30"
                />
              </div>
              <div className="flex flex-col gap-1.5 w-28">
                <label className="font-poppins text-xs font-semibold text-gray-600">Unidad</label>
                <select
                  value={values.servingUnit}
                  onChange={(e) => set("servingUnit", e.target.value)}
                  className="font-poppins text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-leaf/30 bg-white"
                >
                  {SERVING_UNIT_OPTIONS.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { key: "fatSaturated" as const, label: "Grasa saturada (g)" },
                { key: "fatTrans" as const, label: "Grasa trans (g)" },
                { key: "cholesterol" as const, label: "Colesterol (mg)" },
                { key: "sodium" as const, label: "Sodio (mg)" },
                { key: "fiber" as const, label: "Fibra (g)" },
                { key: "sugarTotal" as const, label: "Azúcares totales (g)" },
                { key: "sugarAdded" as const, label: "Azúcares añadidos (g)" },
              ].map(({ key, label }) => (
                <div key={key} className="flex flex-col gap-1.5">
                  <label className="font-poppins text-xs font-semibold text-gray-600">{label}</label>
                  <input
                    type="number"
                    min="0"
                    step="0.1"
                    value={values[key]}
                    onChange={(e) => set(key, e.target.value)}
                    className="font-poppins text-sm border border-gray-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-leaf/30"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-poppins font-semibold text-sm text-gray-700">Estado</p>
              <p className="font-poppins text-xs text-gray-400 mt-0.5">
                {values.isActive ? "El platillo está activo y visible" : "El platillo está inactivo"}
              </p>
            </div>
            <button
              type="button"
              onClick={() => set("isActive", !values.isActive)}
              className={`relative w-12 h-6 rounded-full transition-colors ${
                values.isActive ? "bg-leaf" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${
                  values.isActive ? "left-7" : "left-1"
                }`}
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
