"use client";

const VIDEO_URL =
  "https://res.cloudinary.com/ds6qnvgbm/video/upload/v1780613265/14375214_1920_1080_30fps_fxv0yn.mp4";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen min-h-[600px] bg-[#140420] text-[#FAF5EF] overflow-hidden flex flex-col justify-end p-[clamp(20px,4vw,56px)]"
    >
      <div data-par="0.07" className="absolute -inset-y-[8%] inset-x-0 pointer-events-none">
        <video
          src={VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1800ms]"
        />
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(180deg,rgba(20,4,32,.72)_0%,rgba(20,4,32,.28)_32%,rgba(32,6,60,.55)_72%,rgba(20,4,32,.92)_100%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(120%_90%_at_50%_45%,transparent_38%,rgba(20,4,32,.75)_100%)]" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(200deg,rgba(74,14,134,.5),rgba(242,206,32,.07))] mix-blend-soft-light" />

      <div
        data-hero-copy
        className="relative max-w-[1280px] w-full mx-auto pb-[clamp(48px,7vh,86px)] transition-opacity duration-500"
      >
        <div className="flex items-center gap-3.5 [animation:fadeIn_1.6s_ease_.5s_both]">
          <span className="h-px w-11 bg-[#F2CE20] block" />
          <span className="text-xs tracking-[.3em] uppercase text-[#FAF5EF]/72 font-bold">
            Gerenciamento de crise
          </span>
        </div>

       <h1
  className="font-serif font-normal text-[clamp(40px,6.6vw,104px)] leading-[.98] tracking-[-.015em] mt-[clamp(22px,3vw,40px)] max-w-[17ch]"
  style={{ textShadow: "0 2px 40px rgba(20,4,32,.5)" }}
>
  <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
    <span className="block [animation:riseIn_1.4s_cubic-bezier(.2,.75,.15,1)_.6s_both]">
      Múltiplos olhares
    </span>
  </span>
  <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
    <span className="block [animation:riseIn_1.4s_cubic-bezier(.2,.75,.15,1)_.74s_both]">
      ajudando você
    </span>
  </span>
  <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
    <span className="block [animation:riseIn_1.4s_cubic-bezier(.2,.75,.15,1)_.74s_both]">
      a <em className="italic text-[#F2CE20]">navegar</em>
    </span>
  </span>
  <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
    <span className="block [animation:riseIn_1.4s_cubic-bezier(.2,.75,.15,1)_.88s_both]">
      perante a crise.
    </span>
  </span>
</h1>

        <div className="flex flex-wrap items-center justify-bet
ween gap-x-[30px] gap-y-5 mt-[clamp(30px,4vh,52px)] pt-[22px] b
order-t border-[#FAF5EF]/18 [animation:fadeIn_1.6s_ease_1.4s_bo
th]">
          <span className="text-[13px] tracking-[.24em] upperca
se text-[#FAF5EF]/85">
            Comércio · Serviços · Indústria · Terceiro setor
          </span>  
          </div>  
        <div className="flex flex-wrap items-center justify-between gap-x-[30px] gap-y-5 mt-[clamp(30px,4vh,52px)] pt-[22px]  [animation:fadeIn_1.6s_ease_1.4s_both]">
          <a
            href="#contato"
            className="inline-flex items-center gap-[11px] px-[27px] py-[15px] rounded-full bg-[#F2CE20] text-[#20063C] text-[13px] tracking-[.04em] transition-transform duration-[450ms] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(242,206,32,.6)]"
          >
            Falar com um especialista <span className="text-[15px]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
