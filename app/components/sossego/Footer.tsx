"use client";

export function Footer() {
  return (
    <footer
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="bg-[#3B0764] py-12"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-8">
        <div className="flex flex-col md:items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Sossego. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
