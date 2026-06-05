"use client";

import Image from "next/image";
import logof from "../../assets/logof.png";

export function Footer() {
  return (
    <footer
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-[#0C0A09] py-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-xs">
            <a href="/sossego" className="flex items-center gap-2">
              <div className="inline-flex rounded-full">
                <Image src={logof} alt="Sossego" className="w-16 h-16 rounded-full" />
              </div>
            </a>
            <p className="text-white/40 text-sm leading-relaxed">
              Gerenciamento de crises
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {[
              {
                title: "Serviços",
                links: [
                  "Gestão de Crise",
                  "Comunicação Estratégica",
                  "Monitoramento",
                  "Treinamentos",
                ],
              },
              {
                title: "Empresa",
                links: ["Sobre nós", "Equipe", "Cases", "Blog"],
              },
              {
                title: "Contato",
                links: [
                  "(82) 98146-2725",
                  "contato@sossego.com.br",
                  "Maceió, AL",
                  "São Paulo, SP",
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-4">
                  {col.title}
                </p>
                <ul className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <span className="text-white/40 text-sm hover:text-white/70 cursor-pointer transition-colors">
                        {l}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Sossego Gestão de Crises Ltda. Todos os
            direitos reservados.
          </p>
          <div className="flex gap-6">
            {["Política de Privacidade", "Termos de Uso"].map((l) => (
              <span
                key={l}
                className="text-white/30 text-xs hover:text-white/60 cursor-pointer transition-colors"
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
