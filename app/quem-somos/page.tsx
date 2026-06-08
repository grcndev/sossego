"use client";

import { Nav } from "../components/sossego/Nav";
import { Footer } from "../components/sossego/Footer";
import { AboutUs } from "../components/sossego/AboutUs";

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-10">
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

