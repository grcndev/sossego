import { Nav } from "../components/sossego/Nav";
import { HowItWorks } from "../components/sossego/HowItWorks";
import { Footer } from "../components/sossego/Footer";

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-16">
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
}
