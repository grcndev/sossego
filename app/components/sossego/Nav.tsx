"use client";

import Image from "next/image";
import logo from "../../assets/logo.png";

export function Nav() {
  return (
    <nav
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#3B0764]/85 backdrop-blur-sm border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto py-5 flex items-center justify-center">
        <div className="inline-flex rounded-b-lg rounded-t-[3.5rem] bg-[#fcf6f1]/90 border border-white/15 shadow-sm overflow-hidden pt-1 px-1 pb-1">
          <div className="relative h-[70px] w-[70px] lg:h-[82px] lg:w-[82px]">
            <Image
              src={logo}
              alt="Sossego"
              fill
              sizes="(min-width: 1024px) 82px, 70px"
              className="object-cover object-center scale-[1.08]"
              priority
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
