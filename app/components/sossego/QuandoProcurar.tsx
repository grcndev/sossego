const MOMENTOS = [
  {
    title: "Tem uma decisão na mesa",
    body: "Uma escolha sensível a tomar e a necessidade de ouvir uma leitura de fora antes de assinar.",
  },
  {
    title: "Precisa pôr a casa em ordem",
    body: "Documentos espalhados, processos informais e ninguém sabe ao certo quem responde pelo quê.",
  },
  {
    title: "Vai disputar um edital",
    body: "A empresa quer participar de licitações e pregões, mas a papelada nunca está completa a tempo.",
  },
] as const;

export function QuandoProcurar() {
  return (
    <section className="relative bg-[#20063C] text-[#FAF5EF] py-[clamp(84px,10vw,140px)] px-[clamp(20px,4vw,56px)] overflow-hidden">
      <div
        aria-hidden
        data-par="-0.05"
        className="absolute -inset-x-[5%] -inset-y-[15%] opacity-40 pointer-events-none bg-[radial-gradient(45%_45%_at_20%_20%,rgba(122,52,196,.5),transparent_70%)]"
      />
      <div className="relative max-w-[1280px] mx-auto">
        <div className="reveal flex items-center gap-3.5">
          <span className="h-px w-11 bg-[#F2CE20] block" />
          <span className="text-[10.5px] tracking-[.3em] uppercase text-[#FAF5EF]/70">
            Quando procurar
          </span>
        </div>

        <div className="mt-[clamp(40px,5vw,66px)] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(30px,4vw,70px)]">
          {MOMENTOS.map((m) => (
            <div key={m.title} className="reveal flex flex-col gap-4">
              <div className="h-px bg-[#FAF5EF]/22" />
              <span className="font-serif text-[clamp(24px,2.6vw,34px)] leading-[1.06] tracking-[-.012em]">
                {m.title}
              </span>
              <p className="m-0 text-[15px] leading-[1.85] text-[#FAF5EF]/70 max-w-[30ch] text-pretty">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
