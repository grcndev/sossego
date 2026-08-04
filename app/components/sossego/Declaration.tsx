const FRENTES = [
  {
    tag: "Prevenção",
    title: "Financeira",
    body: "Vulnerabilidades de caixa, exposição e risco antes de virarem ruptura.",
  },
  {
    tag: "Operação",
    title: "De produção",
    body: "Continuidade operacional, cadeia e prazos sob pressão real.",
  },
  {
    tag: "Pessoas",
    title: "De saúde",
    body: "Ambiente com ética e saúde mental: a primeira barreira contra crises.",
  },
];

export function Declaration() {
  return (
    <section className="relative bg-[#28074A] text-[#FAF5EF] py-[clamp(90px,11vw,160px)] px-[clamp(20px,4vw,56px)] overflow-hidden">
      <div
        aria-hidden
        data-par="-0.06"
        className="absolute -inset-x-[10%] -inset-y-[20%] opacity-50 pointer-events-none bg-[radial-gradient(60%_50%_at_78%_8%,rgba(122,52,196,.55),transparent_70%),radial-gradient(50%_40%_at_6%_92%,rgba(242,206,32,.16),transparent_70%)]"
      />

      <div className="relative max-w-[1280px] mx-auto">
        <div className="reveal flex items-center gap-3.5">
          <span className="h-px w-11 bg-[#F2CE20] block" />
          <span className="text-[10.5px] tracking-[.24em] uppercase text-[#FAF5EF]/60">
            Atuação
          </span>
        </div>

        <div className="mt-[clamp(34px,4vw,58px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(32px,5vw,88px)] items-end">
          <h2 className="reveal font-serif font-normal text-[clamp(32px,4.4vw,72px)] leading-[1.02] tracking-[-.016em] m-0 max-w-[15ch]">
            Atenção antes. Suporte durante. Presença <em className="italic text-[#F2CE20]">depois</em>.
          </h2>
          <p className="reveal m-0 max-w-[42ch] text-[clamp(14.5px,1.05vw,16.5px)] leading-[2] text-[#FAF5EF]/70 text-pretty">
            Dados e perspectivas para que a decisão seja a melhor possível para seus
            colaboradores, seu negócio e você. Até chegar ao status de{" "}
            <em className="italic text-[#FAF5EF]/92">sossego geral</em>.
          </p>
        </div>

        <div className="mt-[clamp(52px,6.5vw,92px)] grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-[clamp(30px,4vw,70px)]">
          {FRENTES.map((fr) => (
            <div key={fr.title} className="reveal flex flex-col gap-[18px]">
              <div className="h-px bg-[#FAF5EF]/22" />
              <span className="text-[9.5px] tracking-[.26em] uppercase text-[#F2CE20]">
                {fr.tag}
              </span>
              <span className="font-serif text-[clamp(26px,2.9vw,40px)] leading-[1.02] tracking-[-.012em]">
                {fr.title}
              </span>
              <p className="m-0 text-[13.5px] leading-[1.85] text-[#FAF5EF]/60 max-w-[26ch] text-pretty">
                {fr.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
