"use client";

import { Nav } from "./Nav";
import { Pricing } from "./Pricing";
import { Footer } from "./Footer";

export function Sossego() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Pricing />
      <Footer />
    </div>
  );
}
