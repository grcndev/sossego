export function EmergencyBar() {
  return (
    <a
      href="https://wa.me/5582991213193"
      target="_blank"
      rel="noopener noreferrer"
      data-emergency-bar
      style={{ opacity: 0, transform: "translateY(16px)" }}
      className="fixed right-4 md:right-8 bottom-4 md:bottom-24 z-[70] flex items-center gap-3 rounded-full bg-[#F2CE20] text-[#20063C] px-6 py-[15px] text-[13px] tracking-[.03em] shadow-[0_20px_50px_-18px_rgba(0,0,0,.55)] transition-[opacity,transform] duration-500 ease-out pointer-events-none"
    >
      <span className="h-[7px] w-[7px] rounded-full bg-[#20063C] block" />
      Linha de emergência
    </a>
  );
}
