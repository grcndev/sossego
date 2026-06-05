import { Nav } from "../components/sossego/Nav";
import { Contact } from "../components/sossego/Contact";
import { Footer } from "../components/sossego/Footer";

export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-16">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
