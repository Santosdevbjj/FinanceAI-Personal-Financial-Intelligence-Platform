import { LayoutDashboard, MessageSquare, Wallet, PiggyBank, TrendingUp, Settings, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { icon: LayoutDashboard, label: "Visão Geral", active: true },
  { icon: MessageSquare, label: "Guardião" },
  { icon: Wallet, label: "Contas" },
  { icon: PiggyBank, label: "Reservas" },
  { icon: TrendingUp, label: "Investimentos" },
  { icon: Settings, label: "Ajustes" },
];

export function Sidebar() {
  return (
    <aside className="hidden md:flex w-60 shrink-0 flex-col border-r border-border bg-sidebar">
      <div className="flex items-center gap-2 px-5 h-16 border-b border-border">
        <div className="size-8 rounded-lg bg-primary text-primary-foreground grid place-items-center">
          <Leaf className="size-4" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-semibold tracking-tight">FinanceAI</div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Guardião</div>
        </div>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {items.map((it) => (
          <button
            key={it.label}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors",
              it.active
                ? "bg-primary-soft text-primary font-medium"
                : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground"
            )}
          >
            <it.icon className="size-4" />
            {it.label}
          </button>
        ))}
      </nav>
      <div className="m-3 p-4 rounded-xl bg-primary text-primary-foreground">
        <div className="text-xs opacity-80">Plano</div>
        <div className="text-sm font-semibold mt-0.5">FinanceAI Pro</div>
        <div className="text-[11px] opacity-70 mt-2">LGPD · Open Finance ativo</div>
      </div>
    </aside>
  );
}
