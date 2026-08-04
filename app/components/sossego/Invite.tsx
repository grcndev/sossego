import type { ReactNode } from "react";
import Link from "next/link";

export function Invite({ heading, ctaLabel }: { heading: ReactNode; ctaLabel: string }) {
  return (
    <section className="bg-[#171314] text-[#FAF5EF] py-[clamp(90px,11vw,150px)] px-[clamp(20px,4vw,56px)]">
      <div className="max-w-[1000px] mx-auto text-center">
        <p className="reveal font-serif font-normal text-[clamp(28px,3.8vw,56px)] leading-[1.14] tracking-[-.014em] m-0 text-pretty">
          {heading}
        </p>
        <div className="reveal flex flex-wrap justify-center items-center gap-x-[26px] gap-y-4 mt-[clamp(34px,4vw,52px)]">
          <Link
            href="/contato"
            className="inline-flex items-center gap-[11px] px-[30px] py-[17px] rounded-full bg-[#F2CE20] text-[#20063C] text-[13.5px] tracking-[.04em] transition-transform duration-[450ms] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-18px_rgba(242,206,32,.6)]"
          >
            {ctaLabel} <span className="text-[15px]">→</span>
          </Link>
          {/* <a
            href="tel:+5582981462725"
            className="text-[13.5px] text-[#FAF5EF]/75 border-b border-[#FAF5EF]/28 pb-[3px] hover:text-[#FAF5EF] transition-colors"
          >
            (82) 98146-2725
          </a> */}
        </div>
      </div>
    </section>
  );
}
