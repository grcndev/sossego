"use client";

const WHATSAPP_NUMBER = "5582981462725";
const VIDEO_URL =
  "https://res.cloudinary.com/ds6qnvgbm/video/upload/v1780613265/14375214_1920_1080_30fps_fxv0yn.mp4";

export function Pricing() {
  return (
    <section
      id="planos"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="pt-40 pb-24 bg-[#3B0764] min-h-screen"
    >
      <div className="max-w-6xl lg:max-w-7xl mx-auto px-6 flex flex-col items-center gap-10">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-white/70 mb-4">
            GERENCIAMENTO DE CRISES
          </p>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-5xl md:text-7xl font-black text-white leading-[1.05]"
          >
            Sossego{" "}
            <span className="align-super text-base font-bold text-[#FACC15]">
              TM
            </span>
          </h2>
        </div>

        <div className="w-full max-w-5xl lg:max-w-6xl">
          <div className="relative w-full aspect-video rounded-2xl bg-white/10 border border-white/15 shadow-sm overflow-hidden">
            <video
              src={VIDEO_URL}
              className="absolute inset-0 w-full h-full"
              controls
              playsInline
            />
          </div>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:brightness-95 transition"
          aria-label="Abrir WhatsApp"
        >
          <img
            src="https://cdn.simpleicons.org/whatsapp/FFFFFF"
            alt="WhatsApp"
            className="w-7 h-7"
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
    </section>
  );
}
