"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/logo.png";

const links = [
  { label: "Serviços", href: "/servicos" },
  { label: "Como Funciona", href: "/como-funciona" },
  { label: "Quem Somos", href: "/quem-somos" },
];

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const isContato = pathname === "/contato";

  return (
    <header
      data-nav
      style={{
        background: "transparent",
        color: "#FAF5EF",
        borderColor: "transparent",
        padding: "22px clamp(20px,4vw,56px)",
      }}
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between gap-6 border-b transition-[padding,color,background,border-color] duration-500"
    >
      <Link href="/" className="flex items-center gap-2">
        <Image src={logo} alt="Sossego" className="w-11 h-11 rounded-full" />
      </Link>

      <nav className="hidden md:flex items-center gap-[clamp(18px,2.4vw,38px)] text-[12.5px] tracking-[.06em]">
        {links.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={
                active
                  ? "opacity-100 border-b border-[#F2CE20] pb-0.5"
                  : "opacity-70 hover:opacity-100 transition-opacity"
              }
            >
              {item.label}
            </Link>
          );
        })}
        {isContato ? (
          <a
            href="tel:+5582981462725"
            className="flex items-center gap-2.5 px-5 py-[11px] rounded-full bg-[#F2CE20] text-[#20063C] hover:-translate-y-0.5 transition-transform"
          >
            Conversar agora
          </a>
        ) : (
          <Link
            href="/contato"
            className="flex items-center gap-2.5 px-5 py-[11px] rounded-full bg-[#35095F] text-[#FAF5EF] hover:bg-[#4A0E86] transition-colors"
          >
            Fale Conosco
          </Link>
        )}
      </nav>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2"
        aria-label="Menu"
      >
        <div className="w-5 h-0.5 bg-current mb-1.5" />
        <div className="w-5 h-0.5 bg-current mb-1.5" />
        <div className="w-5 h-0.5 bg-current" />
      </button>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#FAF5EF] border-t border-[#171314]/8 px-6 py-4 flex flex-col gap-4">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`text-sm ${pathname === item.href ? "text-[#4A0E86]" : "text-[#171314]/70"}`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          {isContato ? (
            <a
              href="tel:+5582981462725"
              className="px-5 py-2.5 bg-[#F2CE20] text-[#20063C] text-sm rounded-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Conversar agora
            </a>
          ) : (
            <Link
              href="/contato"
              className="px-5 py-2.5 bg-[#35095F] text-[#FAF5EF] text-sm rounded-full text-center"
              onClick={() => setMenuOpen(false)}
            >
              Fale Conosco
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
