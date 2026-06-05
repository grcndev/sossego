"use client";

import { Nav } from "./Nav";
import { Hero } from "./Hero";
import { PhotoSection } from "./PhotoSection";
import { Mission } from "./Mission";
import { Footer } from "./Footer";

export function Sossego() {
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
