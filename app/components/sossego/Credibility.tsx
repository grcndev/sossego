const SETORES = [
  {
    title: "Comércio",
    body: "Operações com alta exposição pública e cadeia de fornecimento sensível.",
  },
  {
    title: "Serviços",
    body: "Negócios em que reputação e confiança são o próprio produto.",
  },
  {
    title: "Indústria",
    body: "Ambientes com risco operacional, regulatório e trabalhista concentrado.",
  },
  {
    title: "Terceiro setor",
    body: "Organizações não governamentais e institutos sob escrutínio de doadores e sociedade.",
  },
];

export function Credibility() {
  return (
    <section className="relative bg-[#20063C] text-[#FAF5EF] py-[clamp(90px,11vw,150px)] px-[clamp(20px,4vw,56px)] overflow-hidden">
      <div
        aria-hidden
        className="absolute -inset-x-[5%] -inset-y-[15%] opacity-40 pointer-events-none bg-[radial-gradient(45%_45%_at_20%_20%,rgba(122,52,196,.5),transparent_70%)]"
      />
      <div className="relative max-w-[1280px] mx-auto">
        <div className="reveal flex items-center gap-3.5">
          <span className="h-px w-11 bg-[#F2CE20] block" />
          <span className="text-[10.5px] tracking-[.3em] uppercase text-[#FAF5EF]/70">
            Onde atuamos
          </span>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] border-t border-[#FAF5EF]/14 mt-[clamp(44px,5vw,66px)]">
          {SETORES.map((c) => (
            <div
              key={c.title}
              className="reveal bg-[#20063C] border-b border-r border-[#FAF5EF]/14 px-[clamp(22px,2.4vw,32px)] py-[clamp(28px,3vw,40px)]"
            >
              <div className="font-serif text-[clamp(30px,3.4vw,46px)] leading-none tracking-[-.01em]">
                {c.title}
              </div>
              <p className="mt-4 text-[13.5px] leading-[2] text-[#FAF5EF]/60 text-pretty">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal mt-[clamp(34px,4vw,52px)] text-sm tracking-[.02em] text-[#FAF5EF]/50 max-w-[70ch] text-pretty">
          Com uma equipe discreta e eficiente, a Sossego vem acumulando parcerias de sucesso.
          Casos e clientes não são divulgados: toda atuação ocorre sob confidencialidade
          contratual, e referências podem ser apresentadas em reunião, com autorização expressa.
        </p>
      </div>
    </section>
  );
}
