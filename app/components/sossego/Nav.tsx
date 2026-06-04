"use client";

import { useState } from "react";

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#fcf6f1]/95 backdrop-blur-sm border-b border-[#0C0A09]/8"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/sossego" className="flex items-center gap-2">
          <span
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-[1.4rem] font-black text-[#3B0764] tracking-tight leading-none"
          >
            sossego
          </span>
          <span className="w-2 h-2 rounded-full bg-[#FACC15] mb-0.5" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {["Serviços", "Como Funciona", "Casos", "Planos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-[#0C0A09]/70 hover:text-[#3B0764] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+5511999999999"
            className="text-sm text-[#3B0764] font-semibold hover:text-[#6D28D9] transition-colors"
          >
            (11) 9 9999-9999
          </a>
          <a
            href="#contato"
            className="px-5 py-2.5 bg-[#3B0764] text-white text-sm rounded-lg hover:bg-[#6D28D9] transition-colors"
          >
            Falar com especialista
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
          {["Serviços", "Como Funciona", "Casos", "Planos"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-[#0C0A09]/70"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contato"
            className="px-5 py-2.5 bg-[#3B0764] text-white text-sm rounded-lg text-center"
          >
            Falar com especialista
          </a>
        </div>
      )}
    </nav>
  );
}
