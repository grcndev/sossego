const BOARDROOM_IMG =
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920";

export function PhotoSection() {
  return (
    <section className="relative h-140 md:h-170 overflow-hidden">
      <div className="absolute inset-0 bg-[#3B0764]/75 z-10" />
      <img
        src={BOARDROOM_IMG}
        alt="Reunião de crise executiva"
        className="w-full h-full object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-8">
          Nossa filosofia
        </span>
        <blockquote className="text-3xl md:text-5xl font-black text-white max-w-3xl leading-tight mb-8">
          &quot;Gerenciar uma crise com excelência é a única oportunidade de transformar vulnerabilidade em vantagem reputacional duradoura.&quot;
        </blockquote>
        <p className="text-white/60 text-sm">
          Luis Dorvillé - Fundador & Diretor de Estratégia, Sossego
        </p>
      </div>
    </section>
  );
}
