import type { ReactNode } from "react";

const GRADIENTS = {
  dual: "bg-[radial-gradient(58%_55%_at_82%_8%,rgba(122,52,196,.6),transparent_70%),radial-gradient(46%_40%_at_2%_96%,rgba(242,206,32,.15),transparent_70%)]",
  single:
    "bg-[radial-gradient(52%_50%_at_84%_10%,rgba(74,14,134,.7),transparent_72%)]",
};

export function PageHeader({
  eyebrow,
  lines,
  subtitle,
  bg = "#28074A",
  gradient = "dual",
}: {
  eyebrow: string;
  lines: ReactNode[];
  subtitle?: ReactNode;
  bg?: string;
  gradient?: "dual" | "single";
}) {
  return (
    <section
      style={{ background: bg }}
      className="relative text-[#FAF5EF] pt-[clamp(150px,17vh,215px)] pb-[clamp(70px,8vw,110px)] px-[clamp(20px,4vw,56px)] overflow-hidden"
    >
      <div
        aria-hidden
        data-par="-0.06"
        className={`absolute -inset-x-[10%] -inset-y-[25%] opacity-50 pointer-events-none ${GRADIENTS[gradient]}`}
      />
      <div className="relative max-w-[1280px] mx-auto">
        <div className="flex items-center gap-3.5 [animation:fadeIn_1.1s_ease_.05s_both]">
          <span className="h-px w-11 bg-[#F2CE20] block" />
          <span className="text-[10.5px] tracking-[.3em] uppercase text-[#FAF5EF]/72">
            {eyebrow}
          </span>
        </div>
        <h1 className="font-serif font-normal text-[clamp(38px,6vw,92px)] leading-[1] tracking-[-.015em] mt-[clamp(24px,3vw,44px)] max-w-[17ch]">
          {lines.map((line, i) => (
            <span key={i} className="block overflow-hidden">
              <span
                className="block"
                style={{
                  animation: `riseIn 1.2s cubic-bezier(.2,.75,.15,1) ${(0.15 + i * 0.13).toFixed(2)}s both`,
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>
        {subtitle && (
          <p
            className="mt-[clamp(30px,4vw,50px)] max-w-[44ch] text-[clamp(15px,1.1vw,17px)] leading-[1.95] text-[#FAF5EF]/72 text-pretty"
            style={{ animation: "fadeIn 1.3s ease .6s both" }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
