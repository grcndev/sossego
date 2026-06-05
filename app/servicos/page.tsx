"use client";

import { Nav } from "../components/sossego/Nav";
import { Services } from "../components/sossego/Services";
import { Footer } from "../components/sossego/Footer";

export default function ServicosPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-16">
        <Services />
      </main>
      <Footer />
    </div>
  );
}
