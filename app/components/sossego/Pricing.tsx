"use client";

const PRICING_IMG =
  "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920";

export function Pricing() {
  return (
    <section
      id="planos"
      style={{ fontFamily: "'Inter', sans-serif", background: "#fcf6f1" }}
      className="py-28"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-6">
            Missão
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-6xl font-black text-[#0C0A09] leading-[1.05] mb-6"
          >
            Viva o que você quer da vida
          </h2>
          <p className="text-lg text-[#0C0A09]/60 leading-relaxed mb-10 max-w-md">
            Estrutura, disciplina e execução para atravessar o caos com clareza
            — e voltar a operar com estabilidade.
          </p>
        </div>

        <div className="relative h-[480px] md:h-[560px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[#3B0764]/20 z-10 rounded-2xl" />
          <img
            src={PRICING_IMG}
            alt="Equipe em reunião estratégica"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
