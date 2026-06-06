 "use client";

import { useEffect } from "react";
import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { PhotoSection } from "./PhotoSection";
import { Mission } from "./Mission";
import { Footer } from "./Footer";

export function Sossego() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <PhotoSection />
      <Mission />
      <Footer />
    </div>
  );
}
