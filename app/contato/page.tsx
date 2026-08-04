import { Contact } from "../components/sossego/Contact";
import { Footer } from "../components/sossego/Footer";

const MOMENTOS = [
  {
    tag: "Antes",
    title: "Prevenção",
    body: "Ainda não há crise instalada e o objetivo é que não haja. Começamos pelo mapeamento.",
  },
  {
    tag: "Agora",
    title: "Crise em curso",
    body: "Se já começou, ligue. Acompanhamento total, 24/7, a partir do primeiro contato.",
  },
  {
    tag: "Depois",
    title: "Pós-crise",
    body: "A contenção acabou e resta reconstruir. Mitigação de danos e prevenção contínua.",
  },
];

const GARANTIAS = [
  {
    title: "Discrição",
    body: "Nenhum caso, cliente ou dado é divulgado. Confidencialidade contratual desde o primeiro contato.",
  },
  {
    title: "Disponibilidade",
    body: "Acompanhamento 24/7 no momento da crise, com um ponto único de comando.",
  },
  {
    title: "Proximidade",
    body: "Uma equipe que fala com você, com seus colaboradores e com seus sócios — sem intermediários.",
  },
];

export default function ContatoPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#20063C] text-[#FAF5EF]">
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[min(1250px,135vh)] pointer-events-none bg-[linear-gradient(135deg,#C2662E_0%,#A34A46_15%,#7E3363_32%,#4A0E86_52%,#2C0851_74%,#20063C_92%)] [mask-image:linear-gradient(to_bottom,#000_0%,#000_42%,rgba(0,0,0,.45)_72%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="absolute top-0 left-0 right-0 h-[min(1250px,135vh)] pointer-events-none bg-[linear-gradient(135deg,rgba(20,4,32,.3)_0%,transparent_40%)] [mask-image:linear-gradient(to_bottom,#000_0%,transparent_100%)]"
      />

      <Contact />

      <section className="relative px-[clamp(20px,4vw,56px)] pb-[clamp(80px,9vw,130px)]">
        <div className="max-w-[1280px] mx-auto">
          <h2 className="reveal m-0 font-serif font-normal text-[clamp(26px,3.2vw,46px)] leading-[1.1] tracking-[-.013em] max-w-[20ch]">
            Diga em que momento você está.
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[clamp(28px,4vw,68px)] mt-[clamp(38px,4.5vw,64px)]">
            {MOMENTOS.map((m) => (
              <div key={m.title} className="reveal flex flex-col gap-[15px]">
                <div className="h-px bg-[#FAF5EF]/28" />
                <span className="text-[13px] tracking-[.24em] uppercase text-[#F2CE20]">
                  {m.tag}
                </span>
                <span className="font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.12] tracking-[-.012em]">
                  {m.title}
                </span>
                <p className="m-0 text-base leading-[1.8] text-[#FAF5EF]/85 max-w-[28ch] text-pretty">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-[clamp(20px,4vw,56px)] pb-[clamp(84px,10vw,140px)]">
        <div className="max-w-[1280px] mx-auto border-t border-[#FAF5EF]/22 pt-[clamp(36px,4.5vw,62px)] grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[clamp(28px,3.5vw,60px)]">
          {GARANTIAS.map((g) => (
            <div key={g.title} className="reveal">
              <div className="font-serif text-[clamp(21px,2.1vw,28px)] leading-[1.15] tracking-[-.01em]">
                {g.title}
              </div>
              <p className="mt-3 text-[15px] leading-[1.8] text-[#FAF5EF]/85 max-w-[32ch] text-pretty">
                {g.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer bg="#140420" />
    </div>
  );
}
