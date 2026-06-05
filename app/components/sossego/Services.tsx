"use client";

const SERVICES = [
  {
    icon: "shield",
    title: "Mapeamento de focos ativos, potenciais e futuros",
    description:
      "Identificamos exatamente o que está em curso – ou prestes a eclodir – e como cada onda pode afetar você, sua equipe, sua produção ou sua empresa.",
  },
  {
    icon: "radar",
    title: "Plano de atuação por estágio da crise",
    description:
      "Construímos com você um plano sob medida para o passo atual da crise (pré-crise, crise aguda ou pós-crise). Nada de templates: agimos conforme a situação real.",
  },
  {
    icon: "scales",
    title: "Coordenação Jurídico-Midiática",
    description:
      "Alinhamento entre equipes jurídicas e de comunicação para que cada declaração proteja e não exponha.",
  },
  {
    icon: "chart",
    title: "Monitoramento Reputacional",
    description:
      "Rastreamento contínuo de menções digitais e sinais de risco, com alertas preventivos antes da crise eclodir.",
  },
 ] as const;

function ServiceIcon({ name }: { name: (typeof SERVICES)[number]["icon"] }) {
  const commonProps = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "text-[#3B0764]",
  };

  switch (name) {
    case "shield":
      return (
        <svg {...commonProps}>
          <path
            d="M12 3l7 4v6c0 5-3.5 8.5-7 9-3.5-.5-7-4-7-9V7l7-4z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9.5 12l1.7 1.7L14.8 10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "radar":
      return (
        <svg {...commonProps}>
          <path
            d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 3v9l6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M3.8 15a9.3 9.3 0 0 0 5.2 5.2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "scales":
      return (
        <svg {...commonProps}>
          <path
            d="M12 3v18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 7h12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7 7l-3 6h6l-3-6z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M17 7l-3 6h6l-3-6z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M9 21h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "chart":
      return (
        <svg {...commonProps}>
          <path
            d="M4 19V5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 19h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 15v-5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 15v-8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 15v-3"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function Services() {
  return (
    <section
      id="serviços"
      style={{ fontFamily: "'Inter', sans-serif", background: "#fcf6f1" }}
      className="py-28"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-4">
            O que fazemos
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-black text-[#0C0A09] max-w-lg leading-tight"
          >
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
                <ServiceIcon name={s.icon} />
              </div>
              <h3
                className="text-lg md:text-xl font-bold text-[#0C0A09] mb-3 tracking-tight group-hover:text-[#3B0764] transition-colors"
              >
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
