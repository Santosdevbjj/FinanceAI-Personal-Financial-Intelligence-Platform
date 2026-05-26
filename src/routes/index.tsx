import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Sidebar } from "@/components/finance/Sidebar";
import { Header } from "@/components/finance/Header";
import { AnalyticsPanel } from "@/components/finance/AnalyticsPanel";
import { GuardianChat } from "@/components/finance/GuardianChat";
import { GovernanceCenter } from "@/components/finance/GovernanceCenter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FinanceAI · Inteligência Financeira Pessoal" },
      {
        name: "description",
        content:
          "FinanceAI é seu Agente Guardião financeiro: orçamento 60-20-20, reserva de emergência e insights em tempo real.",
      },
      { property: "og:title", content: "FinanceAI · Inteligência Financeira Pessoal" },
      {
        property: "og:description",
        content: "Painel premium com IA conversacional para tomada de decisão financeira no dia a dia.",
      },
    ],
  }),
  component: App,
});

function App() {
  const [techMode, setTechMode] = useState(false);

  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header techMode={techMode} setTechMode={setTechMode} />
        <main className="flex-1 p-4 md:p-6">
          <div className="mb-5">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Olá, Marina 👋</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {techMode
                ? "Modo Técnico ativo · telemetria de infraestrutura visível"
                : "Aqui está um resumo simples e claro das suas finanças hoje."}
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-[1fr_440px] gap-5">
            <AnalyticsPanel techMode={techMode} />
            <GuardianChat techMode={techMode} />
          </div>
        </main>
      </div>
    </div>
  );
}
