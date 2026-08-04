const ACESSOS = [
  {
    n: "01",
    body: "Análise única e exclusivamente com o seu consentimento formal.",
  },
  {
    n: "02",
    body: "Se preferir, na presença de um membro da sua equipe do início ao fim.",
  },
  {
    n: "03",
    body: "Sem retenção nem cópia após o contrato, ou acesso apenas no seu ambiente.",
  },
];

export function Garantia() {
  return (
    <section className="bg-[#FAF5EF] px-[clamp(20px,4vw,56px)] py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="reveal m-0 font-serif font-normal text-[clamp(28px,3.8vw,56px)] leading-[1.12] tracking-[-.014em] max-w-[24ch]">
          Seus dados são analisados <em className="italic text-[#4A0E86]">dentro</em> do seu
          ambiente e não saem de lá.
        </h2>

        <div className="mt-[clamp(48px,6vw,84px)] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(30px,4vw,70px)]">
          {ACESSOS.map((a) => (
            <div key={a.n} className="reveal flex flex-col gap-4">
              <div className="h-px bg-[#171314]/18" />
              <span className="font-serif text-sm tracking-[.04em] text-[#4A0E86]">{a.n}</span>
              <p className="m-0 text-[16.5px] leading-[1.7] text-[#171314] max-w-[27ch] text-pretty">
                {a.body}
              </p>
            </div>
          ))}
        </div>

        <p className="reveal mt-[clamp(34px,4vw,54px)] max-w-[74ch] text-sm leading-[1.9] text-[#171314]/55 text-pretty">
          Trabalhamos com seus dados mediante resolução contratual, com o compromisso de não
          retê-los nem armazená-los. Quando a retenção for exigida por obrigação legal, os dados
          são guardados de forma segura e eliminados tão logo a obrigação cesse.
        </p>
      </div>
    </section>
  );
}
