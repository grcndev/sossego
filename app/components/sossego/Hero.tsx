"use client";

const HERO_IMG =
  "https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920";

export function Hero() {
  return (
    <section
      style={{ fontFamily: "'Inter', sans-serif", background: "#fcf6f1" }}
      className="pt-16 min-h-screen flex flex-col"
    >
      <div className="flex-1 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center py-20">
        <div>
          <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-6">
            Gestão de Crise Corporativa
          </span>
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-7xl font-black text-[#0C0A09] leading-[1.05] mb-6"
          >
            Quando a crise
            <br />
            <span className="text-[#3B0764]">bate à porta,</span>
            <br />
            nós abrimos.
          </h1>
          <p className="text-lg text-[#0C0A09]/60 leading-relaxed mb-10 max-w-md">
            A Sossego é a consultoria que empresas e líderes chamam quando
            minutos separam uma crise administrável de um dano irreversível à
            reputação.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="px-8 py-4 bg-[#3B0764] text-white rounded-xl hover:bg-[#6D28D9] transition-colors font-semibold"
            >
              Acionamento de emergência
            </a>
            <a
              href="#serviços"
              className="px-8 py-4 border-2 border-[#0C0A09]/20 text-[#0C0A09] rounded-xl hover:border-[#3B0764] hover:text-[#3B0764] transition-colors font-semibold"
            >
              Ver serviços
            </a>
          </div>
        </div>

        <div className="relative h-[480px] md:h-[560px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-[#3B0764]/20 z-10 rounded-2xl" />
          <img
            src={HERO_IMG}
            alt="Equipe de gestão de crise em reunião estratégica"
            className="w-full h-full object-cover"
            decoding="async"
          />
          <div className="absolute bottom-6 left-6 right-6 z-20 bg-white/95 backdrop-blur rounded-xl p-5 shadow-xl">
            <p className="text-xs text-[#3B0764] font-bold uppercase tracking-widest mb-1">
              Resposta ativa agora
            </p>
            <p className="text-sm text-[#0C0A09]/80 leading-snug">
              Nossa sala de guerra está operacional 24 horas por dia,{" "}
              <strong>365 dias por ano.</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#3B0764] py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { val: "30 min", label: "tempo de resposta inicial" },
            { val: "+200", label: "crises gerenciadas" },
            { val: "96%", label: "reputação preservada" },
            { val: "18 anos", label: "de experiência no mercado" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p
                style={{ fontFamily: "'Playfair Display', serif" }}
                className="text-3xl md:text-4xl font-black text-[#FACC15] mb-1"
              >
                {s.val}
              </p>
              <p className="text-xs text-white/60 uppercase tracking-wider">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
