import { Hero } from "./Hero";
import { Declaration } from "./Declaration";
import { Philosophy } from "./Philosophy";
import { Index } from "./Index";
import { Invite } from "./Invite";
import { Footer } from "./Footer";

export function Sossego() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FAF5EF]">
      <Hero />
      <Declaration />
      <Philosophy />
      <Index />
      <Invite
        heading={
          <>
            A Sossego & Cia garante atendimento, e todas as etapas de contatos, com nossa equipe pronta para te atender. Que tal{" "}
            <em className="italic text-[#F2CE20]">uma conversa</em>?
          </>
        }
        ctaLabel="Marcar uma conversa"
      />
      <Footer bg="#20063C" />
    </div>
  );
}
