const ETAPAS = [
  {
    n: "01",
    title: "Mapeamento do foco",
    body: "Focos ativos, potenciais e os ecos que podem atingir você e sua equipe.",
    when: "Primeiro contato",
  },
  {
    n: "02",
    title: "Plano a quatro mãos",
    body: "Definido com você, conforme o passo exato em que a crise está.",
    when: "Primeiras horas",
  },
  {
    n: "03",
    title: "Contenção total",
    body: "Acompanhamento contínuo, com dados e expertise linguística em cada decisão.",
    when: "24/7",
  },
  {
    n: "04",
    title: "Pós-crise",
    body: "Prevenção de riscos e desenvolvimento contínuo depois da contenção.",
    when: "Continuidade",
  },
];

export function HowItWorks() {
  return (
    <section id="processo" className="bg-[#FAF5EF] py-[clamp(90px,12vw,170px)] px-[clamp(20px,4vw,56px)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(24px,5vw,80px)] items-end">
          <div>
            <div className="reveal text-[10.5px] tracking-[.3em] uppercase text-[#171314]/45">
              Como funciona
            </div>
            <h2 className="reveal font-serif font-normal text-[clamp(32px,3.8vw,58px)] leading-[1.06] tracking-[-.012em] mt-[22px] max-w-[15ch]">
              Do primeiro contato ao <em className="italic text-[#4A0E86]">controle</em>.
            </h2>
          </div>
          <p className="reveal m-0 max-w-[30ch] text-[14.5px] leading-[1.85] text-[#171314]/60 text-pretty">
            Quatro movimentos. Você presente em todos.
          </p>
        </div>

        <div data-rail className="mt-[clamp(56px,7vw,96px)]">
          <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))]">
            {ETAPAS.map((e) => (
              <div key={e.n} className="reveal relative pr-[clamp(18px,2.4vw,34px)] pb-[clamp(8px,1vw,14px)]">
                <div className="relative h-[13px] mr-[calc(-1*clamp(18px,2.4vw,34px))] mb-[clamp(24px,3vw,34px)]">
                  <div className="absolute left-0 right-0 top-[6px] h-px bg-[#171314]/15" />
                  <div
                    data-rail-fill
                    className="absolute left-0 top-[6px] h-px w-0 bg-[#4A0E86] transition-[width] duration-[1200ms] ease-[cubic-bezier(.25,.8,.25,1)]"
                  />
                  <div className="absolute left-0 top-px w-[11px] h-[11px] rounded-full border border-[#171314]/30 bg-[#F2CE20]" />
                </div>
                <div className="font-serif text-[clamp(52px,6vw,86px)] leading-[.85] tracking-[-.02em] text-[#171314]/14">
                  {e.n}
                </div>
                <h3 className="mt-[clamp(16px,2vw,26px)] font-serif font-normal text-[clamp(21px,2.1vw,29px)] leading-[1.14] tracking-[-.01em] max-w-[14ch]">
                  {e.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.8] text-[#171314]/60 max-w-[26ch] text-pretty">
                  {e.body}
                </p>
                <div className="mt-[clamp(18px,2vw,26px)] text-[9.5px] tracking-[.24em] uppercase text-[#4A0E86]">
                  {e.when}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-[clamp(48px,6vw,80px)] pt-[clamp(30px,3.5vw,46px)] border-t border-[#171314]/13 flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
          <p className="m-0 max-w-[44ch] font-serif text-[clamp(20px,2.2vw,30px)] leading-[1.25] tracking-[-.01em]">
            Se a crise já começou, o acompanhamento é total. Se ainda não, cuidamos para que não
            chegue.
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-[11px] px-7 py-4 rounded-full bg-[#35095F] text-[#FAF5EF] text-[13px] tracking-[.04em] hover:bg-[#4A0E86] transition-colors"
          >
            Começar pelo mapeamento <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
