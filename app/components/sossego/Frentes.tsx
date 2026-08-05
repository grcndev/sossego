const FRENTES = [
 
  
  {
    n: "01",
    title: "Processos e rotina",
    body: "Fluxos, responsabilidades e registros, onde o problema pequeno costuma nascer antes de virar crise.",
  },
  {
    n: "02",
    title: "Estrutura e pessoas",
    body: "Ética, saúde mental e clima interno: a barreira mais barata e mais eficiente contra crises.",
  },
  {
    n: "03",
    title: "Segunda opinião",
    body: "Dados e perspectivas de quem está fora do dia a dia, para uma decisão sensível não ser tomada sozinha.",
  },
  {
    n: "04",
    title: "Acompanhamento contínuo",
    body: "Revisões periódicas e alerta de prazos e validades, para que nada vença sem aviso.",
  },
  {
    n: "05",
    title: "Documentos e comunicados",
    body: "Revisão de contratos, propostas e comunicados internos e externos, com atenção linguística ao que cada palavra compromete.",
  },
   {
    n: "06",
    title: "Licitações e pregões",
    body: "Organização dos documentos exigidos para a empresa participar: certidões, habilitação jurídica, técnica e econômico-financeira, e leitura do edital ponto a ponto.",
  },
] as const;

export function Frentes() {
  return (
    <section className="bg-[#FAF5EF] px-[clamp(20px,4vw,56px)] pt-[clamp(70px,9vw,130px)] pb-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(28px,5vw,72px)] items-end">
          <h2 className="reveal m-0 font-serif font-normal text-[clamp(30px,4vw,60px)] leading-[1.04] tracking-[-.016em] max-w-[15ch]">
            Em que a gente <em className="italic text-[#4A0E86]">ajuda</em>.
          </h2>
          <p className="reveal m-0 max-w-[42ch] text-[clamp(16px,1.05vw,17px)] leading-[2] text-[#171314]/75 text-pretty">
            Cada frente entra sozinha ou combinada. Comércio, serviços, indústria e terceiro
            setor: do documento avulso ao acompanhamento contínuo.
          </p>
        </div>

        <div className="mt-[clamp(46px,6vw,84px)] border-t border-[#171314]/13">
          {FRENTES.map((f) => (
            <div
              key={f.n}
              className="reveal grid grid-cols-[auto_minmax(220px,1fr)_minmax(280px,1.15fr)] items-baseline gap-x-[clamp(18px,3.4vw,48px)] gap-y-2 py-[clamp(24px,3vw,34px)] border-b border-[#171314]/13"
            >
              <span className="font-serif text-base text-[#4A0E86]">{f.n}</span>
              <span className="font-serif text-[clamp(24px,2.4vw,34px)] leading-[1.05] tracking-[-.012em]">
                {f.title}
              </span>
              <span className="text-[15px] leading-[1.85] text-[#171314]/75 text-pretty">
                {f.body}
              </span>
            </div>
          ))}
        </div>

        <p className="reveal mt-[clamp(30px,4vw,46px)] max-w-[60ch] text-sm leading-[1.9] text-[#171314]/70 text-pretty">
          A consultoria é organizacional e estratégica. Quando o caso exige parecer jurídico,
          contábil ou técnico específico, indicamos e trabalhamos junto ao profissional
          responsável.
        </p>
      </div>
    </section>
  );
}
