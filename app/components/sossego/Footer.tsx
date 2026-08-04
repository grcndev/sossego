"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo.png";

const PAGES = [
  { label: "Início", href: "/" },
  { label: "Serviços", href: "/servicos" },
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Contato", href: "/contato" },
];

export function Footer({ bg = "#20063C" }: { bg?: string }) {
  const pathname = usePathname();
  const pages = PAGES.filter((p) => p.href !== pathname);

  return (
    <footer
      style={{ background: bg }}
      className="text-[#FAF5EF] pt-[clamp(60px,7vw,92px)] px-[clamp(20px,4vw,56px)] pb-8"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-[clamp(32px,5vw,60px)]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="w-11 h-11 rounded-full bg-[#FAF5EF]/90 flex items-center justify-center p-1.5">
                <Image src={logo} alt="Sossego" className="w-full h-full object-contain" />
              </span>
              <span className="font-serif text-[26px]">Sossego</span>
            </Link>
            <p className="mt-2.5 ml-[14px] text-[12.5px] text-[#FAF5EF]/50">
              Gerenciamento de crise
            </p>
          </div>

          <div className="flex flex-col gap-[13px]">
            <span className="text-[10px] tracking-[.26em] uppercase text-[#FAF5EF]/45">
              Páginas
            </span>
            {pages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="text-[13.5px] text-[#FAF5EF]/80 hover:text-[#FAF5EF] transition-colors"
              >
                {p.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-[13px]">
            <span className="text-[10px] tracking-[.26em] uppercase text-[#FAF5EF]/45">
              Contato
            </span>
            <a
              href="https://wa.me/5582991213193"
      target="_blank"
      rel="noopener noreferrer"
              className="text-[13.5px] text-[#FAF5EF]/80 hover:text-[#FAF5EF] transition-colors"
            >
              Whatsapp
            </a>
            <a
              href="mailto:sossego@sossegoecia.com.br"
              className="text-[13.5px] text-[#FAF5EF]/80 hover:text-[#FAF5EF] transition-colors"
            >
              sossego@sossegoecia.com.br
            </a>
            <span className="text-[13.5px] text-[#FAF5EF]/55">Atendimento 24/7</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3.5 mt-[clamp(44px,6vw,72px)] pt-[24px] border-t border-[#FAF5EF]/13 text-[11.5px] text-[#FAF5EF]/45">
          <span>© {new Date().getFullYear()} Sossego. Todos os direitos reservados.</span>
          <span>Confidencialidade contratual em toda atuação.</span>
        </div>
      </div>
    </footer>
  );
}
