const MISSION_IMG =
 "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920";

const PILARES = ["Atenção", "Prevenção", "Ética", "Inteligência estratégica"];

export function Historico() {
  return (
    <section className="relative bg-[#20063C] text-[#FAF5EF] py-[clamp(84px,10vw,150px)] px-[clamp(20px,4vw,56px)] overflow-hidden">
      <div
        aria-hidden
        data-par="-0.05"
        className="absolute -inset-x-[6%] -inset-y-[18%] opacity-40 pointer-events-none bg-[radial-gradient(45%_45%_at_18%_22%,rgba(122,52,196,.55),transparent_70%)]"
      />
      <div className="relative max-w-[1280px] mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(36px,5vw,80px)] items-center">
        <div className="reveal">
          <div className="text-[10.5px] tracking-[.3em] uppercase text-[#FAF5EF]/55">
            Histórico de vida
          </div>
          <h2 className="font-serif font-normal text-[clamp(28px,3.4vw,50px)] leading-[1.1] tracking-[-.013em] mt-[22px] max-w-[20ch]">
            Parcerias construídas em silêncio.
          </h2>
          <p className="mt-6 max-w-[44ch] text-[15px] leading-[1.9] text-[#FAF5EF]/68 text-pretty">
            Com uma equipe discreta e eficiente, a Sossego vem acumulando parcerias de sucesso no
            comércio, em serviços, na indústria e no terceiro setor. Casos e clientes não são
            divulgados: referências podem ser apresentadas em reunião, com autorização expressa.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-8">
            {PILARES.map((p) => (
              <span
                key={p}
                className="px-[18px] py-2.5 border border-[#FAF5EF]/24 rounded-full text-[11.5px] tracking-[.08em] uppercase text-[#FAF5EF]/75"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div data-par="0.04" className="relative h-[clamp(320px,40vw,540px)] border border-[#FAF5EF]/14">
          <img
            src={MISSION_IMG}
            alt="Equipe em trabalho"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(200deg,rgba(74,14,134,.45),rgba(242,206,32,.08))] mix-blend-multiply" />
        </div>
      </div>
    </section>
  );
}
