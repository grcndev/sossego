"use client";

import { Building2, Hospital, ShoppingCart } from "lucide-react";

const CASES = [
  {
    sector: "Setor Financeiro",
    headline: "Vazamento de dados de 2 milhões de clientes",
    result: "Crise contida em 72h. Queda de reputação revertida em 30 dias.",
    icon: "finance",
  },
  {
    sector: "Varejo Nacional",
    headline: "Recall de produto após acidente com consumidor",
    result: "Narrativa controlada. Zero processos de imprensa. Marca preservada.",
    icon: "retail",
  },
  {
    sector: "Saúde & Farmacêutica",
    headline: "Denúncia anônima amplificada por influenciadores",
    result: "Resposta publicada em 4h. Engajamento negativo reduzido 87%.",
    icon: "health",
  },
] as const;

function CaseIcon({ name }: { name: (typeof CASES)[number]["icon"] }) {
  const className = "h-[22px] w-[22px] text-[#FACC15]";
  switch (name) {
    case "finance":
      return <Building2 className={className} />;
    case "retail":
      return <ShoppingCart className={className} />;
    case "health":
      return <Hospital className={className} />;
  }
}

export function Cases() {
  return (
    <section id="casos" className="py-28 bg-[#fcf6f1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-4">
            Casos de referência
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0C0A09] max-w-lg leading-tight">
            Crises reais. Resultados mensuráveis.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <div
              key={c.sector}
              className="bg-[#0C0A09] rounded-2xl p-8 flex flex-col gap-6"
            >
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center">
                <CaseIcon name={c.icon} />
              </div>
              <div>
                <p className="text-[#FACC15] text-xs font-bold uppercase tracking-widest mb-2">
                  {c.sector}
                </p>
                <h3 className="text-lg font-bold text-white mb-4 leading-snug">
                  {c.headline}
                </h3>
                <div className="h-px bg-white/10 mb-4" />
                <p className="text-white/60 text-sm leading-relaxed">{c.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
