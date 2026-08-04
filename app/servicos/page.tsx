import Link from "next/link";
import { PageHeader } from "../components/sossego/PageHeader";
import { Services } from "../components/sossego/Services";
import { Credibility } from "../components/sossego/Credibility";
import { Footer } from "../components/sossego/Footer";

export default function ServicosPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF5EF]">
      <PageHeader
        eyebrow="Serviços"
        lines={[
          "O mapa da crise",
          <>
            e onde <em className="italic text-[#F2CE20]">entramos</em> nele.
          </>,
        ]}
        subtitle="Seis frentes, uma única linha de comando. Cada uma entra isolada ou dentro de um plano integrado, conforme o passo em que a crise se encontra."
      />
      <Services />
      <Credibility />
      <section className="bg-[#FAF5EF] px-[clamp(20px,4vw,56px)] py-[clamp(84px,10vw,150px)]">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-x-10 gap-y-6 border-t border-[#171314]/13 pt-[clamp(34px,4vw,56px)]">
          <p className="reveal m-0 max-w-[38ch] font-serif text-[clamp(22px,2.6vw,38px)] leading-[1.18] tracking-[-.012em]">
            Não sabe em qual ponto do mapa você está? Comece pelo mapeamento.
          </p>
          <div className="reveal flex flex-wrap items-center gap-x-6 gap-y-3.5">
            <Link
              href="/contato"
              className="inline-flex items-center gap-[11px] px-[30px] py-[17px] rounded-full bg-[#35095F] text-[#FAF5EF] text-[13.5px] tracking-[.04em] hover:bg-[#4A0E86] transition-colors"
            >
              Falar com a equipe <span>→</span>
            </Link>
            <Link
              href="/como-funciona"
              className="text-[13px] tracking-[.04em] border-b border-[#171314]/25 pb-[3px] hover:border-[#171314]/50 transition-colors"
            >
              Ver como funciona
            </Link>
          </div>
        </div>
      </section>
      <Footer bg="#171314" />
    </div>
  );
}
