"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "¿Cómo funciona twonutris?",
    a: "Fácil. Elige el plan que mejor se ajuste a lo que necesitas, escoge tu menú semanal SIEMPRE 1 día antes de recibirlo, cuéntanos dónde quieres que sea la entrega, y empieza a disfrutar de tus comidas.",
  },
  {
    q: "¿Cuánto cuesta twonutris?",
    a: "¡Tú eliges! El precio va a variar dependiendo del plan que quieras contratar. A partir de ahí recibirás tus pedidos todos los días.",
  },
  {
    q: "¿Puedo cancelar o pausar el plan cuando quiera?",
    a: "¡Por supuesto! Tienes el control total de tu calendario. Sabemos que tu agenda cambia: viajes, reuniones fuera o simplemente un día que prefieres otra cosa.\n\nTu plan incluye 20 comidas, pero te damos una vigencia de 30 días laborables para consumirlas. Esto significa que tienes un margen de 10 días extra.\n\nPara pausar: puedes saltarte cualquier día desde tu perfil. Solo asegúrate de hacerlo antes de las 23:59 del día anterior. Ese crédito se guarda para que lo uses otro día.\n\nVigencia del plan: tienes hasta 30 días hábiles (aprox. 6 semanas) para disfrutar tus 20 platos. Pasados los 30 días, los créditos no consumidos expiran automáticamente.",
  },
  {
    q: "¿En qué ciudad se entrega twonutris?",
    a: "Por el momento entregamos a todo Quito y sus Valles. Seguimos creciendo cada año para poder llegar a más sitios.",
  },
  {
    q: "¿Si me olvido de pedir, puedo hacerlo por llamada o WhatsApp?",
    a: "No, todos los pedidos que entren serán 100% desde nuestra página web.",
  },
  {
    q: "¿Tienen opciones vegetarianas?",
    a: "Sí, cada semana incluimos varias opciones vegetarianas en nuestro menú. Puedes identificarlas con el símbolo 🌱 en la página del menú.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="pt-36 pb-24 bg-white rounded-t-[4rem] -mt-16"
    >
      <div className="max-w-[780px] mx-auto px-6">

        {/* Cabecera */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full font-poppins"
            style={{
              backgroundColor: "#FFFBE4",
              color: "#144400",
            }}
          >
            FAQ
          </span>
          <h2
            className="text-4xl md:text-5xl font-ibrand"
            style={{ color: "#144400" }}
          >
            Preguntas frecuentes
          </h2>
        </div>

        {/* Acordeón */}
        <div className="flex flex-col">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="border-b border-gray-200"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer border-0 bg-transparent"
                >
                  <span
                    className="text-base md:text-lg font-semibold leading-snug font-poppins"
                    style={{ color: "#144400" }}
                  >
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors duration-200"
                    style={{
                      backgroundColor: isOpen ? "#144400" : "#FFFBE4",
                      color: isOpen ? "#FFFBE4" : "#144400",
                    }}
                  >
                    {isOpen
                      ? <Minus size={16} strokeWidth={2.5} />
                      : <Plus size={16} strokeWidth={2.5} />
                    }
                  </span>
                </button>

                {/* Respuesta con animación */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isOpen ? "600px" : "0px" }}
                >
                  <p
                    className="pb-6 text-sm md:text-base leading-relaxed whitespace-pre-line font-poppins text-gray-700 opacity-80"
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
    </section>
  );
}
