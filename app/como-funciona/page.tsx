import { PageHeader } from "../components/sossego/PageHeader";
import { HowItWorks } from "../components/sossego/HowItWorks";
import { Invite } from "../components/sossego/Invite";
import { Footer } from "../components/sossego/Footer";

const ENTREGAS = [
  "Leitura clara do cenário: focos ativos, potenciais e ecos.",
  "Plano de atuação escrito, com prioridades e responsáveis.",
  "Apoio linguístico em comunicados internos e externos.",
  "Dados e perspectivas para cada decisão sensível.",
  "Relatório de continuidade e prevenção após a crise.",
];

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF5EF]">
      <PageHeader
        eyebrow="Como funciona"
        lines={[
          "Do primeiro contato",
          <>
            ao <em className="italic text-[#F2CE20]">controle</em>.
          </>,
        ]}
        subtitle="Quatro movimentos. Você presente em todos eles."
      />
      <HowItWorks />
      <section className="bg-[#FAF5EF] px-[clamp(20px,4vw,56px)] pb-[clamp(84px,10vw,150px)]">
        <div className="max-w-[1280px] mx-auto border-t border-[#171314]/13 pt-[clamp(44px,5vw,74px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(32px,5vw,80px)] items-start">
          <h2 className="reveal m-0 font-serif font-normal text-[clamp(28px,3.2vw,46px)] leading-[1.08] tracking-[-.012em] max-w-[15ch]">
            O que você tem em mãos.
          </h2>
          <div>
            {ENTREGAS.map((d) => (
              <div
                key={d}
                className="reveal grid grid-cols-[auto_1fr] gap-4 items-baseline py-[18px] border-b border-[#171314]/13"
              >
                <span className="w-[5px] h-[5px] rounded-full bg-[#4A0E86] block -translate-y-[3px]" />
                <span className="text-base leading-[1.6] text-[#171314]">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Invite
        heading={
          <>
            Se a crise já começou, o acompanhamento é total. Se ainda não, cuidamos para que{" "}
            <em className="italic text-[#F2CE20]">não chegue</em>.
          </>
        }
        ctaLabel="Começar pelo mapeamento"
      />
      <Footer bg="#20063C" />
    </div>
  );
}
