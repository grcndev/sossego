"use client";

const VIDEO_URL =
  "https://res.cloudinary.com/ds6qnvgbm/video/upload/v1780613265/14375214_1920_1080_30fps_fxv0yn.mp4";

export function Pricing() {
  return (
    <section
      id="planos"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="py-28 bg-[#3B0764]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-4">
            Missão
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-black text-white max-w-2xl mx-auto leading-tight"
          >
            Viva o que você quer da vida
          </h2>
        </div>

        <div className="mx-auto w-full max-w-6xl">
          <div className="relative w-full aspect-video rounded-2xl border-2 border-[#FACC15] bg-[#0C0A09]/15 shadow-sm overflow-hidden">
            <video
              src={VIDEO_URL}
              className="absolute inset-0 w-full h-full"
              controls
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  );
}
