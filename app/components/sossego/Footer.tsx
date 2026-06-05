"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-[#0C0A09] py-10"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div className="max-w-xs">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="inline-flex rounded-full bg-[#fcf6f1] p-1">
                <Image
                  src={logo}
                  alt="Sossego"
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full"
                />
              </div>
              <div className="leading-tight">
                <p
                  style={{ fontFamily: "'Playfair Display', serif" }}
                  className="text-white font-black text-xl"
                >
                  Sossego
                </p>
                <p className="text-white/50 text-sm">Gerenciamento de risco</p>
              </div>
            </Link>
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
                  {col.title === "Contato" ? (
                    <>
                      <li>
                        <a
                          href="tel:+5582981462725"
                          className="text-white/40 text-sm hover:text-white/80 transition-colors"
                        >
                          (82) 98146-2725
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:contato@sossego.com.br"
                          className="text-white/40 text-sm hover:text-white/80 transition-colors"
                        >
                          contato@sossego.com.br
                        </a>
                      </li>
                      <li>
                        <span className="text-white/40 text-sm">Maceió, AL</span>
                      </li>
                      <li>
                        <span className="text-white/40 text-sm">São Paulo, SP</span>
                      </li>
                    </>
                  ) : (
                    col.links.map((l) => (
                      <li key={l}>
                        <span className="text-white/40 text-sm hover:text-white/80 transition-colors">
                          {l}
                        </span>
                      </li>
                    ))
                  )}
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
