"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

const WHATSAPP_NUMBER = "5582981462725";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { label: "Serviços", href: "/servicos" },
    { label: "Como Funciona", href: "/como-funciona" },
    { label: "Casos", href: "/casos" },
    { label: "Missão", href: "/#mission" },
    { label: "Contato", href: "/contato" },
  ];
  return (
    <nav
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#fcf6f1]/95 backdrop-blur-sm border-b border-[#0C0A09]/8"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
           <Image src={logo} alt="Sossego" className="w-16 h-16 rounded-full" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-[#0C0A09]/70 hover:text-[#3B0764] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#3B0764] text-white text-sm rounded-lg hover:bg-[#6D28D9] transition-colors"
          >
            Fale Conosco
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#0C0A09]"
          aria-label="Menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current mb-1.5" />
          <div className="w-5 h-0.5 bg-current" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#fcf6f1] border-t border-[#0C0A09]/8 px-6 py-4 flex flex-col gap-4">
          {links.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-[#0C0A09]/70"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-[#3B0764] text-white text-sm rounded-lg text-center"
          >
            Falar com especialista
          </a>
        </div>
      )}
    </nav>
  );
}
