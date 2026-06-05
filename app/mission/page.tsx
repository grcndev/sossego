import { Nav } from "../components/sossego/Nav";
import { Mission } from "../components/sossego/Mission";
import { Footer } from "../components/sossego/Footer";

export default function MissionPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main className="pt-16">
        <Mission />
      </main>
      <Footer />
    </div>
  );
}

