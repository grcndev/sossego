"use client";

const WHATSAPP_NUMBER = "5582981462725";

const PROMISE_IMG =
  "https://images.unsplash.com/photo-1638262052640-82e94d64664a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080";

export function AboutUs() {
  return (
    <section id="quem-somos" className="py-28 bg-[#fcf6f1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="mb-14">
              <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-4">
                Quem Somos
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0C0A09] max-w-2xl leading-tight">
                Discrição máxima, proteção de dados e atuação dentro do seu ambiente.
              </h2>
            </div>

            <p className="text-[#0C0A09]/70 leading-relaxed text-base md:text-lg">
              A Sossego atua com discrição máxima e respeito absoluto aos dados
              dos nossos clientes. Ao término do contrato, não mantemos
              qualquer cópia dos dados tratados, salvo quando a retenção for
              exigida por obrigação legal ou regulatória (como prazos fiscais,
              contábeis ou para defesa em processos), hipótese na qual os dados
              são armazenados de forma segura e eliminados tão logo cesse a
              obrigação.
            </p>
          </div>

          <div>
            <div className="relative h-108 md:h-128 overflow-hidden rounded-2xl border border-[#0C0A09]/10 bg-white shadow-sm">
              <img
                src={PROMISE_IMG}
                alt="Nossa promessa"
                className="absolute inset-0 w-full h-full object-cover object-[50%_45%]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-[#0C0A09]/10" />
            </div>

          </div>
        </div>

        <div className="mt-18 mx-auto max-w-4xl">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[#0C0A09]/10" />
            <p className="text-[11px] font-bold uppercase tracking-widest text-[#3B0764] text-center">
              Todo acesso, análise ou manuseio de dados ocorre apenas:
            </p>
            <div className="h-px flex-1 bg-[#0C0A09]/10" />
          </div>

          <div className="mt-6 grid gap-3">
            {[
              {
                num: "01",
                text: "Mediante consentimento formal e específico do cliente;",
              },
              {
                num: "02",
                text: "Com a presença facultativa de um membro da sua equipe;",
              },
              {
                num: "03",
                text: "Sem transferência externa, respeitando seu ambiente de trabalho.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-xl border border-[#0C0A09]/10 px-5 py-4 flex items-start gap-4 shadow-sm"
              >
                <span className="text-[#FACC15] font-black text-sm leading-none mt-1">
                  {item.num}
                </span>
                <p className="text-[#0C0A09]/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-[#0C0A09]/10 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-4">
              Nossa garantia
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-[#0C0A09] leading-tight max-w-xl">
              Proteção sem riscos, transparência sem rodeios e eliminação planejada.
            </h2>
          </div>
          <div>
            <p className="text-[#0C0A09]/70 leading-relaxed">
              Essa é a nossa garantia: proteção sem riscos, transparência sem
              rodeios e eliminação planejada. Atuamos com método, proximidade e
              responsabilidade para que cada interação com informações sensíveis
              aconteça com controle total, clareza contratual e segurança do
              início ao fim.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#3B0764] px-6 py-3 text-white text-sm font-semibold hover:bg-[#6D28D9] transition-colors"
            >
              Falar com especialista
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
