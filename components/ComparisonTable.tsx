import { CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";

/* ── Datos ──────────────────────────────────────────────────────── */
type Result = "yes-brand" | "yes" | "no";

interface ComparisonRow {
  feature: string;
  twonutris: Result;
  delivery: Result;
  home: Result;
}

const ROWS: ComparisonRow[] = [
  {
    feature: "Sin preparar, cocinar ni limpiar",
    twonutris: "yes-brand",
    delivery:  "yes",
    home:      "no",
  },
  {
    feature: "Aprobado por nutricionistas y chefs",
    twonutris: "yes-brand",
    delivery:  "no",
    home:      "no",
  },
  {
    feature: "Ingredientes locales y cuidado con el medio ambiente",
    twonutris: "yes-brand",
    delivery:  "no",
    home:      "yes",
  },
  {
    feature: "Toda la semana en un solo pedido",
    twonutris: "yes-brand",
    delivery:  "no",
    home:      "no",
  },
];

/* ── Icono de resultado ─────────────────────────────────────────── */
function ResultIcon({ value }: { value: Result }) {
  if (value === "yes-brand") {
    return <CheckCircle2 size={24} strokeWidth={2} style={{ color: "#144400" }} />;
  }
  if (value === "yes") {
    return <CheckCircle2 size={24} strokeWidth={2} className="text-leaf-check" />;
  }
  return <XCircle size={24} strokeWidth={2} className="text-gray-300" />;
}

/* ── Componente principal ───────────────────────────────────────── */
export function ComparisonTable() {
  return (
    <section className="bg-white pt-24 pb-40 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">

        {/* Cabecera */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 font-poppins"
            style={{ color: "#144400", opacity: 0.45 }}
          >
            ¿Listo para recuperar tu tiempo?
          </span>
          <h2
            className="text-4xl md:text-5xl font-ibrand"
            style={{ color: "#144400" }}
          >
            Hacemos tu vida más fácil<br className="hidden md:block" /> y saludable
          </h2>
        </div>

        {/* Tabla — scroll horizontal en mobile */}
        <div className="overflow-x-auto">
          <div className="min-w-[640px] pt-6">

            {/* Fila de encabezados */}
            <div className="grid grid-cols-4 mb-2">
              {/* Col 1 — vacía */}
              <div className="px-4 py-3" />

              {/* Col 2 — twonutris (destacada) */}
              <div className="relative flex flex-col items-center px-4 pt-10 pb-4 mx-1"
                style={{
                  backgroundColor: "#FFFBE4",
                  borderRadius: "1.5rem 1.5rem 0 0",
                }}
              >
                {/* Badge "Mejor opción" */}
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap font-poppins"
                  style={{
                    backgroundColor: "#FFB000",
                    color: "#144400",
                  }}
                >
                  ★ Mejor opción
                </div>
                <Image
                  src="/icons/logo.png"
                  alt="twonutris"
                  width={120}
                  height={38}
                  style={{ mixBlendMode: "multiply" }}
                />
              </div>

              {/* Col 3 — Apps de delivery */}
              <div className="flex flex-col items-center justify-end px-4 pb-4">
                <span
                  className="text-xs font-bold tracking-widest uppercase text-center font-poppins text-gray-400"
                >
                  Apps de<br />delivery
                </span>
              </div>

              {/* Col 4 — Cocinar en casa */}
              <div className="flex flex-col items-center justify-end px-4 pb-4">
                <span
                  className="text-xs font-bold tracking-widest uppercase text-center font-poppins text-gray-400"
                >
                  Cocinar<br />en casa
                </span>
              </div>
            </div>

            {/* Filas de comparación */}
            {ROWS.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-4 group transition-colors duration-200"
                style={{
                  borderTop: "1px solid #f3f4f6",
                }}
              >
                {/* Característica */}
                <div
                  className="flex items-center px-4 py-5 text-sm font-semibold group-hover:bg-gray-50 rounded-l-xl transition-colors duration-200 font-poppins text-gray-700"
                >
                  {row.feature}
                </div>

                {/* twonutris */}
                <div
                  className="flex items-center justify-center px-4 py-5 mx-1 transition-colors duration-200"
                  style={{
                    backgroundColor: "#FFFBE4",
                    ...(i === ROWS.length - 1
                      ? { borderRadius: "0 0 1.5rem 1.5rem" }
                      : {}),
                  }}
                >
                  <ResultIcon value={row.twonutris} />
                </div>

                {/* Delivery */}
                <div className="flex items-center justify-center px-4 py-5 group-hover:bg-gray-50 transition-colors duration-200">
                  <ResultIcon value={row.delivery} />
                </div>

                {/* Cocinar */}
                <div className="flex items-center justify-center px-4 py-5 group-hover:bg-gray-50 rounded-r-xl transition-colors duration-200">
                  <ResultIcon value={row.home} />
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
