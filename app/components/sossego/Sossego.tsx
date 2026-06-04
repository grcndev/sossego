"use client";

import { Cases } from "./Cases";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { Nav } from "./Nav";
import { PhotoSection } from "./PhotoSection";
import { Pricing } from "./Pricing";
import { Services } from "./Services";

export function Sossego() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <HowItWorks />
      <PhotoSection />
      <Cases />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
