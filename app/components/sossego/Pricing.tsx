"use client";

const PLANS = [
  {
    name: "Retainer Essencial",
    price: "R$ 8.900",
    period: "/mês",
    description: "Para empresas que querem estar prontas antes da crise.",
    features: [
      "Manual de gestão de crises personalizado",
      "2 simulações de crise por ano",
      "Monitoramento básico de menções",
      "Suporte por e-mail em horário comercial",
    ],
    cta: "Começar",
    highlight: false,
  },
  {
    name: "Retainer Premium",
    price: "R$ 18.900",
    period: "/mês",
    description: "Prontidão total e resposta imediata quando necessário.",
    features: [
      "Tudo do Essencial",
      "Plantão 24/7 com gestor dedicado",
      "Monitoramento avançado em tempo real",
      "Até 40h de gestão de crise ativa/mês",
      "Porta-voz disponível para entrevistas",
    ],
    cta: "Falar com consultor",
    highlight: true,
  },
  {
    name: "Crise Ativa",
    price: "Sob consulta",
    period: "",
    description: "A crise já começou. Acionamos agora.",
    features: [
      "Resposta imediata sem contrato prévio",
      "Sala de guerra montada em 2h",
      "Equipe multidisciplinar dedicada",
      "Relatório pós-crise completo",
    ],
    cta: "Ligar agora",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section
      id="planos"
      style={{ fontFamily: "'Inter', sans-serif" }}
      className="py-28 bg-[#3B0764]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 bg-[#FACC15] text-[#0C0A09] text-xs font-bold uppercase tracking-widest rounded mb-4">
            Planos
          </span>
          <h2
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="text-4xl md:text-5xl font-black text-white max-w-2xl mx-auto leading-tight"
          >
            Proteção que se adapta ao tamanho do seu risco
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 flex flex-col gap-6 ${
                plan.highlight
                  ? "bg-[#FACC15]"
                  : "bg-white/8 border border-white/15"
              }`}
            >
              <div>
                <p
                  className={`text-xs font-bold uppercase tracking-widest mb-3 ${
                    plan.highlight ? "text-[#3B0764]" : "text-white/60"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-3">
                  <span
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className={`text-3xl font-black ${
                      plan.highlight ? "text-[#0C0A09]" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={`text-sm mb-1 ${
                        plan.highlight ? "text-[#3B0764]/70" : "text-white/50"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm ${
                    plan.highlight ? "text-[#3B0764]/80" : "text-white/60"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className={`text-sm flex gap-2 items-start ${
                      plan.highlight ? "text-[#0C0A09]" : "text-white/70"
                    }`}
                  >
                    <span
                      className={`mt-0.5 text-xs ${
                        plan.highlight ? "text-[#3B0764]" : "text-[#FACC15]"
                      }`}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className={`block text-center py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                  plan.highlight
                    ? "bg-[#3B0764] text-white hover:bg-[#6D28D9]"
                    : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
