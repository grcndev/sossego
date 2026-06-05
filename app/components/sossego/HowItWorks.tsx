"use client";

const STEPS = [
  {
    num: "01",
    title: "Acionamento Imediato",
    desc: "Um call de triagem com nosso comitê de crise em até 30 minutos após o contato.",
  },
  {
    num: "02",
    title: "Diagnóstico e Sala de Guerra",
    desc: "Mapeamos o cenário, identificamos stakeholders e montamos o plano de contenção nas primeiras horas.",
  },
  {
    num: "03",
    title: "Execução e Controle da Narrativa",
    desc: "Implementamos comunicados, gerenciamos porta-vozes e monitoramos cada desdobramento em tempo real.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="py-28 bg-[#0C0A09]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-4">
            Como funciona
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-black text-white max-w-lg leading-tight"
          >
            Do acionamento ao controle em horas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative">
              <div className="mb-6 flex items-end gap-3">
                <span
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-6xl font-black text-[#FACC15] leading-none"
                >
                  {step.num}
                </span>
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-white/10 -translate-y-px" />
                )}
              </div>
              <h3
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-xl font-bold text-white mb-3"
              >
                {step.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
