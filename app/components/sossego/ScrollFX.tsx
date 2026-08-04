"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollFX() {
  const pathname = usePathname();

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    let io: IntersectionObserver | undefined;
    let revealFallback: ReturnType<typeof setTimeout> | undefined;

    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              setTimeout(() => el.classList.add("is-visible"), i * 70);
              io?.unobserve(el);
            }
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
      );
      revealNodes.forEach((n) => io?.observe(n));
      revealFallback = setTimeout(() => {
        revealNodes.forEach((n) => n.classList.add("is-visible"));
      }, 4000);
    } else {
      revealNodes.forEach((n) => n.classList.add("is-visible"));
    }

    let railIo: IntersectionObserver | undefined;
    const rail = document.querySelector("[data-rail]");
    if (rail && "IntersectionObserver" in window) {
      railIo = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              Array.from(document.querySelectorAll<HTMLElement>("[data-rail-fill]")).forEach(
                (el, i) => {
                  setTimeout(() => {
                    el.style.width = "100%";
                  }, 200 + i * 260);
                }
              );
              railIo?.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );
      railIo.observe(rail);
    } else if (rail) {
      document.querySelectorAll<HTMLElement>("[data-rail-fill]").forEach((el) => {
        el.style.width = "100%";
      });
    }

    const parNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-par]"));
    let raf: number | null = null;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const y = window.scrollY || 0;

        const nav = document.querySelector<HTMLElement>("[data-nav]");
        if (nav) {
          const on = y > 40;
          nav.style.background = on ? "rgba(250,245,239,.92)" : "transparent";
          nav.style.backdropFilter = on ? "saturate(140%) blur(14px)" : "none";
          nav.style.borderColor = on ? "rgba(23,19,20,.1)" : "transparent";
          nav.style.color = on ? "#171314" : "#FAF5EF";
          nav.style.padding = on
            ? "13px clamp(20px,4vw,56px)"
            : "22px clamp(20px,4vw,56px)";
        }

        const heroCopy = document.querySelector<HTMLElement>("[data-hero-copy]");
        if (heroCopy) {
          const fade = Math.max(0, 1 - y / (window.innerHeight * 0.55));
          heroCopy.style.opacity = fade.toFixed(2);
        }

        const bar = document.querySelector<HTMLElement>("[data-emergency-bar]");
        if (bar) {
          const show = y > 700;
          bar.style.opacity = show ? "1" : "0";
          bar.style.transform = show ? "none" : "translateY(16px)";
          bar.style.pointerEvents = show ? "auto" : "none";
        }

        const vh = window.innerHeight;
        parNodes.forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.bottom < -200 || r.top > vh + 200) return;
          const f = parseFloat(el.getAttribute("data-par") || "0") || 0;
          el.style.transform =
            "translate3d(0," + ((r.top + r.height / 2 - vh / 2) * f).toFixed(1) + "px,0)";
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
      railIo?.disconnect();
      clearTimeout(revealFallback);
    };
  }, [pathname]);

  return null;
}
