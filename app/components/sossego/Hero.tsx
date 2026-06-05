const VIDEO_URL =
  "https://res.cloudinary.com/ds6qnvgbm/video/upload/v1780613265/14375214_1920_1080_30fps_fxv0yn.mp4";

export function Hero() {
  return (
    <section className="pt-1 bg-[#3B0764]">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h1
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-6xl font-black text-white leading-tight"
          >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Sossego
          </h1>
          <span className="inline-flex items-center self-center px-4 py-1.5 bg-[#FACC15] text-[#0C0A09] text-sm font-bold uppercase tracking-widest rounded">
            Gerenciamento de Crise Institucional
          </span>
          </div>
        </div>

        <div className="mt-10 mx-auto w-full max-w-6xl">
          <div className="relative w-full aspect-video rounded-2xl border-2 border-[#FACC15] bg-[#0C0A09]/15 shadow-sm overflow-hidden">
            <video
              src={VIDEO_URL}
              className="absolute inset-0 w-full h-full"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        <p className="mt-6 text-base md:text-lg text-white/70 leading-relaxed max-w-3xl mx-auto text-center">
          A Sossego é a consultoria que empresas e líderes chamam quando minutos
          separam uma crise administrável de um dano irreversível à reputação.
        </p>
      </div>
    </section>
  );
}
