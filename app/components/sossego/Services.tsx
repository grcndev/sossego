const SERVICES = [
  {
    icon: "🛡",
    title: "Gestão de Crise em Tempo Real",
    description:
      "Equipe disponível 24/7 para neutralizar ameaças à reputação antes que se tornem avalanches. Tempo de resposta inicial em até 30 minutos.",
  },
  {
    icon: "📡",
    title: "Comunicação Estratégica",
    description:
      "Elaboração de notas, releases e posicionamentos que controlam a narrativa nos principais veículos de imprensa.",
  },
  {
    icon: "⚖",
    title: "Coordenação Jurídico-Midiática",
    description:
      "Alinhamento entre equipes jurídicas e de comunicação para que cada declaração proteja e não exponha.",
  },
  {
    icon: "📊",
    title: "Monitoramento Reputacional",
    description:
      "Rastreamento contínuo de menções digitais e sinais de risco, com alertas preventivos antes da crise eclodir.",
  },
];

export function Services() {
  return (
    <section id="serviços" className="py-28 bg-[#fcf6f1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-4">
            O que fazemos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0C0A09] max-w-lg leading-tight">
            Controle total quando tudo sai do controle
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-8 border border-[#0C0A09]/8 hover:border-[#3B0764]/30 hover:shadow-lg transition-all group"
            >
              <span className="text-3xl mb-5 block">{s.icon}</span>
              <h3 className="text-xl font-bold text-[#0C0A09] mb-3 group-hover:text-[#3B0764] transition-colors">
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
