"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "¿Cuándo se entregan los pedidos?",
    a: "Las entregas son los domingos. Preparamos todos los platos de la semana y los llevamos a tu puerta ese día para que tengas tus comidas listas del lunes al viernes.",
  },
  {
    q: "¿Hasta cuándo puedo hacer mi pedido?",
    a: "Puedes pedir hasta el miércoles a medianoche. Una vez cerrado ese plazo, comenzamos con la preparación y ya no es posible agregar ni modificar pedidos para esa semana.",
  },
  {
    q: "¿Cómo funciona el pago?",
    a: "Aceptamos pagos con tarjeta de crédito o débito a través de PayPhone, una plataforma de pagos segura. El cobro se procesa al momento de confirmar tu pedido.",
  },
  {
    q: "¿Cuál es el pedido mínimo?",
    a: "El pedido mínimo es de $20. Puedes armar tu pedido eligiendo los platos que quieras del menú semanal hasta llegar a ese monto.",
  },
  {
    q: "¿Cuánto cuesta el delivery?",
    a: "El costo de delivery es de $3 por pedido, independientemente de la cantidad de platos que pidas.",
  },
  {
    q: "¿En qué zonas entregan?",
    a: "Por el momento entregamos en Quito. Si tienes dudas sobre si llegamos a tu sector, escríbenos por WhatsApp antes de hacer tu pedido.",
  },
  {
    q: "¿Puedo cancelar o cambiar mi pedido?",
    a: "Puedes cancelar o modificar tu pedido hasta el miércoles a medianoche. Pasado ese horario, el pedido entra en producción y no es posible hacer cambios.",
  },
  {
    q: "¿Qué pasa si no estoy en casa al momento de la entrega?",
    a: "Te pedimos que al momento del pedido indiques instrucciones de entrega (como dejarlos con el guardia o en la puerta). También te contactaremos por WhatsApp el día de la entrega para coordinar.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="pt-36 pb-24 bg-white rounded-t-[4rem] -mt-16">
      <div className="max-w-[780px] mx-auto px-6">

        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full font-poppins"
            style={{ backgroundColor: "#FFFBE4", color: "#144400" }}
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

        <div className="flex flex-col">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer border-0 bg-transparent rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#144400] focus-visible:ring-offset-2"
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
                    {isOpen ? <Minus size={16} strokeWidth={2.5} /> : <Plus size={16} strokeWidth={2.5} />}
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
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
    </section>
  );
}
