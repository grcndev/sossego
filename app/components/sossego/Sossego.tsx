"use client";

import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { PhotoSection } from "./PhotoSection";
import { Pricing } from "./Pricing";
import { Footer } from "./Footer";

export function Sossego() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <PhotoSection />
      <Pricing />
      <Footer />
    </div>
  );
}
