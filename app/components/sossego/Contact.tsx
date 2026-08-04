const EMAIL_TO = "sossego@sossegoecia.com.br";

const CANAIS = [
  { label: "Telefone", value: "(82) 98146-2725", href: "tel:+5582981462725", arrow: "↗" },
  { label: "E-mail", value: EMAIL_TO, href: `mailto:${EMAIL_TO}`, arrow: "↗" },
  { label: "Retorno", value: "Em até 30 minutos", href: "tel:+5582981462725", arrow: "→" },
];

export function Contact() {
  return (
    <>
      <section className="relative pt-[clamp(150px,18vh,230px)] pb-[clamp(70px,8vw,110px)] px-[clamp(20px,4vw,56px)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-center gap-3.5 [animation:fadeIn_1.1s_ease_.05s_both]">
            <span className="h-px w-11 bg-[#F2CE20] block" />
            <span className="text-[10.5px] tracking-[.3em] uppercase text-[#FAF5EF]/85">
              Contato
            </span>
          </div>

<h1
  className="font-serif font-normal text-[clamp(36px,5.6vw,88px)] leading-[1.08] tracking-[-.016em] mt-[clamp(26px,3.4vw,50px)] max-w-[19ch]"
  style={{ textShadow: "0 2px 40px rgba(20,4,32,.35)" }}
>
  {/* Linha 1: Com padding inferior (pb) e margem compensatória para não cortar o "g" */}
  <span className="flex items-baseline gap-[0.25em] overflow-hidden pb-[0.12em] -mb-[0.12em]">
    <span className="block [animation:riseIn_1.25s_cubic-bezier(.2,.75,.15,1)_.15s_both]">
      Seu
    </span>
    <span className="block [animation:riseIn_1.25s_cubic-bezier(.2,.75,.15,1)_.43s_both]">
      <em className="italic text-[#F2CE20]">sossego</em>
    </span>
  </span>

  {/* Linha 2 */}
  <span className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
    <span className="block [animation:riseIn_1.25s_cubic-bezier(.2,.75,.15,1)_.29s_both]">
      a um contato
    </span>
  </span>

  {/* Linha 3 */}
  <span className="block overflow-hidden pb-[0.1em]">
    <span className="block [animation:riseIn_1.25s_cubic-bezier(.2,.75,.15,1)_.29s_both]">
      de distância.
    </span>
  </span>
</h1>

          <p
            className="mt-[clamp(30px,3.6vw,48px)] max-w-[48ch] text-[clamp(17px,1.15vw,18px)] leading-[1.95] text-[#FAF5EF]/85 text-pretty"
            style={{ animation: "fadeIn 1.3s ease .8s both" }}
          >
            A Sossego & Cia garante atendimento, e todas as etapas de contatos, com nossa equipe pronta para te atender.
            {}
          </p>
        </div>
      </section>

      <section className="relative px-[clamp(20px,4vw,56px)] pb-[clamp(80px,9vw,130px)]">
        <div className="max-w-[1280px] mx-auto border-t border-[#FAF5EF]/22">
          {CANAIS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="reveal grid grid-cols-[auto_1fr_auto] items-center gap-x-[clamp(16px,3vw,44px)] py-[clamp(26px,3.4vw,44px)] border-b border-[#FAF5EF]/22 transition-[background,padding-left] duration-500 hover:bg-[#FAF5EF]/[0.07] hover:pl-[18px]"
            >
              <span className="text-[13px] tracking-[.24em] uppercase text-[#FAF5EF]/85 min-w-[9ch]">
                {c.label}
              </span>
              <span className="font-serif text-[clamp(24px,3.6vw,54px)] leading-[1.06] tracking-[-.014em]">
                {c.value}
              </span>
              <span className="text-lg text-[#FAF5EF]/85">{c.arrow}</span>
            </a>
          ))}
        </div>

        <div className="reveal max-w-[1280px] mx-auto mt-[clamp(30px,3.6vw,48px)] flex flex-wrap items-center gap-x-7 gap-y-3.5">
          <a
            href="tel:+5582981462725"
            className="inline-flex items-center gap-[11px] px-[30px] py-[17px] rounded-full bg-[#F2CE20] text-[#20063C] text-[15px] tracking-[.04em] transition-transform duration-[450ms] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(242,206,32,.55)]"
          >
            Conversar agora <span className="text-[16px]">→</span>
          </a>
          <span className="text-sm tracking-[.02em] text-[#FAF5EF]/85">
            Linha aberta 24 horas, todos os dias.
          </span>
        </div>
      </section>
    </>
  );
}
