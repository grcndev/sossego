import Link from "next/link";

const PAGINAS = [
  {
    n: "01",
    title: "Consultoria",
    sub: "Ordem antes do imprevisto.",
    href: "/consultoria",
  },
  {
    n: "02",
    title: "Gestão de Crise",
    sub: "O mapa da crise e onde entramos nele.",
    href: "/gestao",
  },
  {
    n: "03",
    title: "Como Funciona",
    sub: "Do primeiro contato ao controle, em quatro movimentos.",
    href: "/como-funciona",
  },
  {
    n: "04",
    title: "Quem Somos",
    sub: "Discrição máxima, parceria e histórico de vida.",
    href: "/quem-somos",
  },
  {
    n: "05",
    title: "Contato",
    sub: "Atendimento 24/7 e retorno em até 30 minutos.",
    href: "/contato",
  },
];

export function Index() {
  return (
    <section className="bg-[#FAF5EF] px-[clamp(20px,4vw,56px)] pb-[clamp(96px,13vw,170px)]">
      <div className="max-w-[1280px] mx-auto border-t border-[#171314]/13">
        {PAGINAS.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="reveal grid grid-cols-[auto_1fr_auto] items-center gap-x-[clamp(18px,3vw,44px)] py-[clamp(28px,3.6vw,46px)] border-b border-[#171314]/13 transition-[background,padding-left] duration-500 hover:bg-[#4A0E86]/5 hover:pl-[18px]"
          >
            <span className="font-serif text-sm text-[#4A0E86]">{p.n}</span>
            <span className="flex flex-wrap items-baseline gap-x-[22px] gap-y-1.5">
              <span className="font-serif text-[clamp(28px,3.4vw,50px)] leading-[1.05] tracking-[-.012em]">
                {p.title}
              </span>
              <span className="text-[13.5px] leading-[1.7] text-[#171314]/55 max-w-[40ch]">
                {p.sub}
              </span>
            </span>
            <span className="text-lg text-[#171314]/40">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
