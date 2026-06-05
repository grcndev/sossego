"use client";

import type { LucideIcon } from "lucide-react";
import { ChartNoAxesColumn, Radar, Scale, Shield } from "lucide-react";

const SERVICES: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
}> = [
  {
    icon: Shield,
    title: "Mapeamento de focos ativos, potenciais e futuros",
    description:
      "Identificamos exatamente o que está em curso – ou prestes a eclodir – e como cada onda pode afetar você, sua equipe, sua produção ou sua empresa.",
  },
  {
    icon: Radar,
    title: "Plano de atuação por estágio da crise",
    description:
      "Construímos com você um plano sob medida para o passo atual da crise (pré-crise, crise aguda ou pós-crise). Nada de templates: agimos conforme a situação real.",
  },
  {
    icon: Scale,
    title: "Coordenação Jurídico-Midiática",
    description:
      "Alinhamento entre equipes jurídicas e de comunicação para que cada declaração proteja e não exponha.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Monitoramento Reputacional",
    description:
      "Rastreamento contínuo de menções digitais e sinais de risco, com alertas preventivos antes da crise eclodir.",
  },
];

export function Services() {
  return (
    <section
      id="serviços"
      className="py-28 bg-[#fcf6f1]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-4">
            O que fazemos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0C0A09] max-w-lg leading-tight">
            Gerenciamento de crises sem retórica
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 border border-[#0C0A09]/8 shadow-sm hover:shadow-md hover:border-[#3B0764]/25 transition-all group"
            >
              <div className="h-12 w-12 rounded-full bg-[#3B0764]/10 flex items-center justify-center mb-5">
                <s.icon className="h-[22px] w-[22px] text-[#3B0764]" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#0C0A09] mb-3 tracking-tight group-hover:text-[#3B0764] transition-colors">
                {s.title}
              </h3>
              <p className="text-[#0C0A09]/60 leading-relaxed text-sm">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
