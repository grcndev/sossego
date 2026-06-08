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
    title: "Execução, Monitoramento e Suporte à Decisão",
    desc: "Implementamos comunicados, gerenciamos porta-vozes e monitoramos desdobramentos em tempo real. Nossa equipe fornece dados e perspectivas para apoiar cada decisão sua.",
  },
  {
    num: "04",
    title: "Pós-crise e Decisão Estratégica",
    desc: "Entregamos dados, cenários e perspectivas para que você tome a melhor decisão — para seus colaboradores, seu negócio e você.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-28 bg-[#fcf6f1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-4">
            Como funciona
          </span>
          <p className="text-[#0C0A09]/60 text-sm md:text-base max-w-3xl mx-auto mb-4">
            Na Sossego, oferecemos atenção e prevenção a crises financeiras,
            produtivas ou de saúde. Quando a crise já ocorreu, nosso fluxo de
            contenção é acionado em minutos.
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0C0A09] max-w-2xl mx-auto leading-tight">
            Do acionamento ao controle em horas
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[#0C0A09]/10" />
            <div className="flex flex-col gap-6">
              {STEPS.map((step) => (
                <div key={step.num} className="relative flex items-stretch gap-6">
                  <div className="relative z-10 w-12 flex items-center justify-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FACC15] text-[#0C0A09] text-sm font-black">
                      {step.num}
                    </div>
                  </div>
                  <div className="w-full flex-1 min-h-40 bg-white rounded-2xl border border-[#0C0A09]/10 p-6 shadow-sm flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl font-black text-[#0C0A09] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#0C0A09]/70 text-sm md:text-base leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
