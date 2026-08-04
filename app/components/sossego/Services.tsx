"use client";

import { useState } from "react";

const SERVICOS = [
  {
    n: "01",
    fase: "Antes",
    title: "Mapeamento",
    body: "Identificamos a instância atual do foco — e dos focos ativos, potenciais e dos ecos que podem afetar você, sua equipe, sua produção e sua empresa.",
  },
  {
    n: "02",
    fase: "Antes",
    title: "Ética e saúde mental",
    body: "Construção de um ambiente com ética. Ética é saúde mental, e um ambiente saudável é a primeira barreira contra crises.",
  },
  {
    n: "03",
    fase: "Durante",
    title: "Plano de atuação",
    body: "Construído junto com você e sua empresa, conforme o passo exato em que a crise se encontra. Se de fato houver crise.",
  },
  {
    n: "04",
    fase: "Durante",
    title: "Contenção sistêmica",
    body: "Disponibilidade 24/7 para acompanhamento total no momento da crise, com dados e expertise linguística para definir os próximos passos.",
  },
  {
    n: "05",
    fase: "Depois",
    title: "Mitigação de danos",
    body: "Redução de impacto e leitura contínua dos riscos que permanecem, antes que o dano se torne irreversível.",
  },
  {
    n: "06",
    fase: "Depois",
    title: "Desenvolvimento",
    body: "Acompanhamento pós-crise e desenvolvimento contínuo da empresa ou do indivíduo, com prevenção de riscos.",
  },
] as const;

const FASES = [
  { key: "Antes", label: "Antes", caption: "Prevenção", tone: "#171314" },
  { key: "Durante", label: "Durante", caption: "24/7", tone: "#4A0E86" },
  { key: "Depois", label: "Depois", caption: "Continuidade", tone: "#171314" },
] as const;

export function Services() {
  const [active, setActive] = useState(2);
  const ativo = SERVICOS[active];

  return (
    <section id="servicos" className="bg-[#FAF5EF] px-[clamp(20px,4vw,56px)] pb-[clamp(96px,13vw,180px)]">
      <div className="max-w-[1280px] mx-auto border-t border-[#171314]/13 pt-[clamp(50px,6vw,84px)]">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(24px,5vw,80px)] items-end">
          <div>
            <div className="reveal text-[10.5px] tracking-[.3em] uppercase text-[#171314]/45">
              Serviços
            </div>
            <h2 className="reveal font-serif font-normal text-[clamp(32px,3.8vw,56px)] leading-[1.06] tracking-[-.012em] mt-[22px] max-w-[17ch]">
              O mapa da crise e onde entramos nele.
            </h2>
          </div>
          <p className="reveal m-0 max-w-[34ch] text-[14.5px] leading-[1.85] text-[#171314]/60 text-pretty">
            Toque em cada ponto para ver a frente de atuação.
          </p>
        </div>

        <div className="reveal mt-[clamp(52px,7vw,92px)] grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-[clamp(28px,3.5vw,48px)]">
          {FASES.map((fase) => {
            const items = SERVICOS.filter((s) => s.fase === fase.key);
            return (
              <div key={fase.key} className="flex flex-col gap-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span
                    className="font-serif text-[clamp(21px,2vw,28px)] tracking-[-.01em]"
                    style={{ color: fase.tone }}
                  >
                    {fase.label}
                  </span>
                  <span className="text-[9.5px] tracking-[.24em] uppercase text-[#171314]/40">
                    {fase.caption}
                  </span>
                </div>

                <div className="relative h-[11px]">
                  <div className="absolute left-0 right-0 top-[5px] h-px bg-[#171314]/20" />
                  {items.map((it, i) => {
                    const idx = SERVICOS.indexOf(it);
                    const on = idx === active;
                    const x = ((i + 1) / (items.length + 1)) * 100;
                    return (
                      <button
                        key={it.n}
                        type="button"
                        onClick={() => setActive(idx)}
                        onMouseEnter={() => setActive(idx)}
                        aria-label={it.title}
                        style={{
                          left: `${x}%`,
                          background: on ? "#F2CE20" : "#FAF5EF",
                        }}
                        className="absolute top-0 -translate-x-1/2 w-[11px] h-[11px] p-0 rounded-full border border-[#171314]/28 cursor-pointer transition-colors duration-[400ms]"
                      />
                    );
                  })}
                </div>

                <div className="flex flex-col">
                  {items.map((it) => {
                    const idx = SERVICOS.indexOf(it);
                    const on = idx === active;
                    return (
                      <button
                        key={it.n}
                        type="button"
                        onClick={() => setActive(idx)}
                        onMouseEnter={() => setActive(idx)}
                        style={{ opacity: on ? 1 : 0.5 }}
                        className="text-left border-0 bg-transparent cursor-pointer py-4 border-b border-[#171314]/13 grid grid-cols-[auto_1fr] gap-3.5 items-baseline transition-opacity duration-[400ms]"
                      >
                        <span
                          className="font-serif text-[13px]"
                          style={{ color: on ? "#4A0E86" : "rgba(23,19,20,.3)" }}
                        >
                          {it.n}
                        </span>
                        <span className="text-base tracking-[-.01em] text-[#171314]">
                          {it.title}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="reveal mt-[clamp(46px,6vw,80px)] grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(24px,4vw,64px)] items-start border-t border-[#171314]/13 pt-[clamp(32px,4vw,52px)]">
          <div className="flex items-center gap-3.5">
            <span className="h-px w-[34px] bg-[#4A0E86] block" />
            <span className="text-[9.5px] tracking-[.26em] uppercase text-[#171314]/45">
              {ativo.fase} · Frente {ativo.n}
            </span>
          </div>
          <div>
            <h3 className="m-0 font-serif font-normal text-[clamp(26px,3vw,42px)] leading-[1.1] tracking-[-.012em]">
              {ativo.title}
            </h3>
            <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.85] text-[#171314]/62 text-pretty">
              {ativo.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
