import Link from "next/link";
import { PageHeader } from "../components/sossego/PageHeader";
import { Garantia } from "../components/sossego/Garantia";
import { Historico } from "../components/sossego/Historico";
import { Footer } from "../components/sossego/Footer";

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF5EF]">
      <PageHeader
        eyebrow="Quem somos"
        lines={[
          "Discrição máxima",
          <>
            e <em className="italic text-[#F2CE20]">parceria</em>.
          </>,
        ]}
        subtitle="Uma equipe discreta e eficiente, que trata informação sensível com controle total, clareza contratual e segurança do início ao fim."
        bg="#171314"
        gradient="single"
      />
      <Garantia />
      <Historico />
      <section className="bg-[#FAF5EF] px-[clamp(20px,4vw,56px)] py-[clamp(84px,10vw,150px)]">
        <div className="max-w-[1280px] mx-auto border-t border-[#171314]/13 pt-[clamp(38px,4.5vw,62px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(32px,5vw,76px)] items-center">
          <h3 className="reveal m-0 font-serif font-normal text-[clamp(26px,3vw,44px)] leading-[1.12] tracking-[-.012em] max-w-[20ch]">
            Proteção sem riscos, transparência sem rodeios, eliminação planejada.
          </h3>
          <div className="reveal">
            <p className="m-0 max-w-[44ch] text-[15px] leading-[1.9] text-[#171314]/62 text-pretty">
              Essa é a nossa garantia. Método, proximidade e responsabilidade para que cada
              interação com informação sensível aconteça com controle total.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-3 mt-7 px-7 py-4 rounded-full bg-[#35095F] text-[#FAF5EF] text-[13px] tracking-[.04em] hover:bg-[#4A0E86] transition-colors"
            >
              Conversar com a equipe <span>→</span>
            </Link>
          </div>
        </div>
      </section>
      <Footer bg="#171314" />
    </div>
  );
}
