import { ArrowUpRight, Eye, EyeOff, Sparkles, TrendingUp, Wallet } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

function brl(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function AnalyticsPanel({ techMode }: { techMode: boolean }) {
  const [hidden, setHidden] = useState(false);
  const saldo = 12480.55;
  const livreHoje = 145.0;
  const reserva = 8200;
  const metaReserva = 18000;
  const progresso = (reserva / metaReserva) * 100;

  // 60/20/20
  const renda = 7500;
  const essencial = renda * 0.6;
  const estilo = renda * 0.2;
  const poupanca = renda * 0.2;
  const usadoEssencial = 3120;
  const usadoEstilo = 980;
  const usadoPoupanca = 1500;

  return (
    <div className="space-y-4">
      {/* Saldo + livre hoje */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 rounded-2xl bg-primary text-primary-foreground p-6 relative overflow-hidden shadow-[var(--shadow-glow)]">
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-primary-foreground/5" />
          <div className="absolute -right-10 -bottom-20 size-48 rounded-full bg-primary-foreground/5" />
          <div className="relative">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-70">
                <Wallet className="size-3.5" /> Saldo Consolidado
              </div>
              <button onClick={() => setHidden(!hidden)} className="p-1.5 rounded-md hover:bg-primary-foreground/10">
                {hidden ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
            <div className="mt-3 flex items-baseline gap-3">
              <div className="text-4xl md:text-5xl font-semibold tracking-tight num">
                {hidden ? "R$ ••••••" : brl(saldo)}
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-sm">
              <span className="inline-flex items-center gap-1 text-success bg-primary-foreground/10 px-2 py-0.5 rounded-md">
                <ArrowUpRight className="size-3" /> +2,4%
              </span>
              <span className="opacity-70 text-xs">vs. mês anterior</span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-xs">
              {[
                { l: "Conta Corrente", v: 3240.1 },
                { l: "Poupança", v: 8200 },
                { l: "Investimentos", v: 1040.45 },
              ].map((a) => (
                <div key={a.l} className="rounded-lg bg-primary-foreground/10 p-3">
                  <div className="opacity-70">{a.l}</div>
                  <div className="font-semibold num mt-1">{hidden ? "••••" : brl(a.v)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-surface border border-border p-6 shadow-[var(--shadow-soft)]">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" /> Livre para hoje
          </div>
          <div className="mt-3 text-4xl font-semibold tracking-tight num text-foreground">
            {brl(livreHoje)}
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-pretty">
            Você pode gastar isso hoje sem comprometer suas metas. Regra 60-20-20 aplicada.
          </p>
          <div className="mt-4 h-2 rounded-full bg-muted overflow-hidden">
            <div className="h-full bg-gradient-to-r from-success to-primary" style={{ width: "62%" }} />
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
            <span>Usado hoje</span>
            <span className="num">R$ 235,00 / R$ 380,00</span>
          </div>
        </div>
      </div>

      {/* 60-20-20 */}
      <div className="rounded-2xl bg-surface border border-border p-6 shadow-[var(--shadow-soft)]">
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-sm font-semibold">Regra 60-20-20</div>
            <div className="text-xs text-muted-foreground">Distribuição da renda mensal de {brl(renda)}</div>
          </div>
          <div className="text-xs text-muted-foreground hidden sm:flex items-center gap-1">
            <TrendingUp className="size-3.5 text-success" /> Saudável
          </div>
        </div>

        <div className="space-y-4">
          {[
            { label: "Essencial", limit: essencial, used: usadoEssencial, pct: 60, color: "bg-primary" },
            { label: "Estilo de Vida", limit: estilo, used: usadoEstilo, pct: 20, color: "bg-success" },
            { label: "Poupança", limit: poupanca, used: usadoPoupanca, pct: 20, color: "bg-info" },
          ].map((b) => {
            const usedPct = Math.min(100, (b.used / b.limit) * 100);
            return (
              <div key={b.label}>
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className={cn("size-2 rounded-full", b.color)} />
                    <span className="font-medium">{b.label}</span>
                    <span className="text-muted-foreground">{b.pct}%</span>
                  </div>
                  <div className="num text-muted-foreground">
                    <span className="text-foreground font-medium">{brl(b.used)}</span> / {brl(b.limit)}
                  </div>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div className={cn("h-full transition-all", b.color)} style={{ width: `${usedPct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reserva de emergência */}
      <div className="rounded-2xl bg-surface border border-border p-6 shadow-[var(--shadow-soft)]">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-sm font-semibold">Reserva de Emergência</div>
            <div className="text-xs text-muted-foreground">Meta: 6 meses de despesas</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold num">{brl(reserva)}</div>
            <div className="text-xs text-muted-foreground num">de {brl(metaReserva)}</div>
          </div>
        </div>
        <div className="relative h-3 rounded-full bg-muted overflow-hidden">
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-primary to-success rounded-full transition-all"
            style={{ width: `${progresso}%` }}
          />
          <div className="absolute inset-0 shimmer rounded-full opacity-40" />
        </div>
        <div className="mt-3 flex justify-between text-xs">
          <span className="text-muted-foreground">{progresso.toFixed(0)}% concluído</span>
          <span className="text-primary font-medium">Faltam {brl(metaReserva - reserva)}</span>
        </div>
      </div>

      {techMode && <TechWidgets />}
    </div>
  );
}

function TechWidgets() {
  return (
    <div className="rounded-2xl border border-dashed border-primary/40 bg-primary-soft/30 p-5 fade-in-up">
      <div className="flex items-center gap-2 mb-4">
        <div className="size-2 rounded-full bg-success pulse-dot" />
        <div className="text-xs uppercase tracking-widest font-semibold text-primary">
          Infraestrutura · Modo Técnico
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <MicroWidget label="Latência Pipeline IA" value="142" unit="ms" trend="ok" />
        <MicroWidget label="Confiança NER" value="98.4" unit="%" trend="ok" />
        <MicroWidget label="Mascaramento LGPD" value="ATIVO" trend="ok" badge />
        <MicroWidget label="Open Finance" value="CONECTADO" trend="ok" badge />
      </div>
      <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
        <MicroWidget label="Tokens/s (LLM)" value="312" unit="tk/s" />
        <MicroWidget label="Cache hit" value="87.2" unit="%" />
        <MicroWidget label="Eventos/min" value="1.4k" />
        <MicroWidget label="Drift score" value="0.03" unit="σ" />
      </div>
    </div>
  );
}

function MicroWidget({
  label,
  value,
  unit,
  trend,
  badge,
}: {
  label: string;
  value: string;
  unit?: string;
  trend?: "ok" | "warn";
  badge?: boolean;
}) {
  return (
    <div className="rounded-xl bg-surface border border-border p-3 font-mono">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-muted-foreground">
        <span className="truncate">{label}</span>
        {trend && <span className={cn("size-1.5 rounded-full", trend === "ok" ? "bg-success" : "bg-warning")} />}
      </div>
      <div className="mt-1.5 flex items-baseline gap-1">
        {badge ? (
          <span className="text-[11px] font-semibold tracking-wider px-2 py-1 rounded-md bg-success/15 text-success">
            {value}
          </span>
        ) : (
          <>
            <span className="text-lg font-semibold num text-foreground">{value}</span>
            {unit && <span className="text-[10px] text-muted-foreground">{unit}</span>}
          </>
        )}
      </div>
    </div>
  );
}
