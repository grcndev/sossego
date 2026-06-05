import { Nav } from "../components/sossego/Nav";
import { Cases } from "../components/sossego/Cases";
import { Footer } from "../components/sossego/Footer";

export default function CasosPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-10">
        <Cases />
      </main>
      <Footer />
    </div>
  );
}
