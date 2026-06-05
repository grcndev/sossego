"use client";

import { useState } from "react";
import type { FormEvent } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    situacao: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contato"
      style={{ fontFamily: "'Inter', sans-serif", background: "#fcf6f1" }}
      className="py-28"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-6">
            Contato
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-black text-[#0C0A09] leading-tight mb-6"
          >
            A crise não pode esperar. Nós também não.
          </h2>
          <p className="text-[#0C0A09]/60 leading-relaxed mb-8">
            Preencha o formulário ou ligue diretamente para nossa linha de
            emergência. Um especialista retornará em até 30 minutos.
          </p>
          <div className="flex flex-col gap-4">
            <a
              href="tel:+5582981462725"
              className="flex items-center gap-3 text-[#3B0764] font-semibold hover:text-[#6D28D9] transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-[#3B0764]/10 flex items-center justify-center text-lg">
                📞
              </span>
              (82) 98146-2725
            </a>
            <a
              href="mailto:crise@sossego.com.br"
              className="flex items-center gap-3 text-[#3B0764] font-semibold hover:text-[#6D28D9] transition-colors"
            >
              <span className="w-10 h-10 rounded-full bg-[#3B0764]/10 flex items-center justify-center text-lg">
                ✉️
              </span>
              contato@sossego.com.br
            </a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#0C0A09]/8">
          {submitted ? (
            <div className="text-center py-12">
              <span className="text-5xl block mb-4">✅</span>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-2xl font-black text-[#0C0A09] mb-2"
              >
                Mensagem recebida
              </h3>
              <p className="text-[#0C0A09]/60 text-sm">
                Um especialista entrará em contato em até 30 minutos.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-[#0C0A09] mb-2"
              >
                Fale com um especialista
              </h3>

              {[
                { id: "nome", label: "Nome completo", type: "text", placeholder: "Seu nome" },
                { id: "empresa", label: "Empresa", type: "text", placeholder: "Nome da empresa" },
                { id: "telefone", label: "Telefone", type: "tel", placeholder: "(11) 9 9999-9999" },
              ].map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-xs font-bold uppercase tracking-widest text-[#0C0A09]/60 mb-1.5"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    required
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, [field.id]: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-[#0C0A09]/15 text-sm text-[#0C0A09] placeholder:text-[#0C0A09]/30 focus:outline-none focus:border-[#3B0764] bg-[#fcf6f1] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="situacao"
                  className="block text-xs font-bold uppercase tracking-widest text-[#0C0A09]/60 mb-1.5"
                >
                  Descreva brevemente a situação
                </label>
                <textarea
                  id="situacao"
                  placeholder="O que está acontecendo? Qual a urgência?"
                  rows={3}
                  required
                  value={form.situacao}
                  onChange={(e) => setForm((f) => ({ ...f, situacao: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border border-[#0C0A09]/15 text-sm text-[#0C0A09] placeholder:text-[#0C0A09]/30 focus:outline-none focus:border-[#3B0764] bg-[#fcf6f1] resize-none transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#3B0764] text-white rounded-xl font-semibold hover:bg-[#6D28D9] transition-colors text-sm"
              >
                Solicitar contato urgente
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
