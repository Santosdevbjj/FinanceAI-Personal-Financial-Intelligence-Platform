import { useState } from "react";
import {
  Shield,
  X,
  Landmark,
  Lock,
  CheckCircle2,
  Loader2,
  ArrowRight,
  Eye,
  EyeOff,
  KeyRound,
  Database,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

type SyncStatus = "idle" | "handshake" | "consent" | "fetching" | "synced";

interface BankTx {
  id: string;
  date: string;
  merchant: string;
  amount: number;
  category: string;
}

const MOCK_TXS: BankTx[] = [
  { id: "tx_88a1", date: "26/05", merchant: "Carrefour Pinheiros", amount: -284.5, category: "Essencial" },
  { id: "tx_88a2", date: "25/05", merchant: "iFood · Sushi Yama", amount: -68.9, category: "Estilo de Vida" },
  { id: "tx_88a3", date: "24/05", merchant: "Salário · ACME S.A.", amount: 7500.0, category: "Receita" },
];

const STEPS: { key: SyncStatus; label: string; detail: string }[] = [
  { key: "handshake", label: "TLS Handshake", detail: "TLSv1.3 · cipher AES-256-GCM" },
  { key: "consent", label: "Consentimento BACEN", detail: "OAuth 2.0 · escopo: accounts.read" },
  { key: "fetching", label: "Sync transações", detail: "Endpoint: /open-banking/v2/accounts" },
];

export function GovernanceCenter() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 group flex items-center gap-2 pl-3 pr-4 py-2.5 rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] hover:opacity-95 transition"
        aria-label="Abrir Central de Governança"
      >
        <div className="relative">
          <Shield className="size-4" />
          <span className="absolute -top-1 -right-1 size-2 rounded-full bg-success border border-primary pulse-dot" />
        </div>
        <span className="text-xs font-medium hidden sm:inline">Governança & Open Finance</span>
        <span className="text-xs font-medium sm:hidden">Governança</span>
      </button>

      {open && <GovernancePanel onClose={() => setOpen(false)} />}
    </>
  );
}

function GovernancePanel({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<SyncStatus>("idle");
  const [txs, setTxs] = useState<BankTx[]>([]);

  async function startSync() {
    setStatus("handshake");
    await wait(700);
    setStatus("consent");
    await wait(900);
    setStatus("fetching");
    await wait(900);
    setTxs(MOCK_TXS);
    setStatus("synced");
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm fade-in-up" onClick={onClose}>
      <div
        className="w-full max-w-2xl h-full bg-background border-l border-border shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border px-5 py-4 flex items-center gap-3">
          <div className="size-9 rounded-xl bg-primary text-primary-foreground grid place-items-center">
            <Shield className="size-4" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold">Central de Governança & Open Finance</div>
            <div className="text-[11px] text-muted-foreground flex items-center gap-1.5">
              <span className="size-1 rounded-full bg-success pulse-dot" />
              Conformidade LGPD · Resolução BCB nº 32
            </div>
          </div>
          <button onClick={onClose} className="size-8 rounded-md hover:bg-muted grid place-items-center">
            <X className="size-4" />
          </button>
        </div>

        <div className="p-5 space-y-6">
          <OpenFinanceSection status={status} txs={txs} onSync={startSync} />
          <LgpdSection />
        </div>
      </div>
    </div>
  );
}

function OpenFinanceSection({
  status,
  txs,
  onSync,
}: {
  status: SyncStatus;
  txs: BankTx[];
  onSync: () => void;
}) {
  const synced = status === "synced";
  const inProgress = status !== "idle" && !synced;

  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)]">
      <header className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary-soft text-primary grid place-items-center">
            <Landmark className="size-5" />
          </div>
          <div>
            <div className="text-sm font-semibold">Open Finance · BACEN</div>
            <div className="text-[11px] text-muted-foreground">
              Conexão direta com instituições reguladas via mTLS
            </div>
          </div>
        </div>
        <StatusBadge status={status} />
      </header>

      {/* CTA */}
      {status === "idle" && (
        <button
          onClick={onSync}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-primary text-primary-foreground hover:opacity-95 transition shadow-[var(--shadow-glow)]"
        >
          <Lock className="size-4" />
          <span className="text-sm font-medium">Conectar Banco via Open Finance (BACEN)</span>
        </button>
      )}

      {/* Steps */}
      {(inProgress || synced) && (
        <div className="space-y-2 mb-4">
          {STEPS.map((step, i) => {
            const currentIdx = STEPS.findIndex((s) => s.key === status);
            const stepIdx = i;
            const done = synced || stepIdx < currentIdx;
            const active = !synced && stepIdx === currentIdx;
            return (
              <div
                key={step.key}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors",
                  done && "border-success/30 bg-success/5",
                  active && "border-primary/40 bg-primary-soft/30",
                  !done && !active && "border-border bg-background opacity-50"
                )}
              >
                <div className="size-7 rounded-md grid place-items-center shrink-0 bg-surface border border-border">
                  {done ? (
                    <CheckCircle2 className="size-4 text-success" />
                  ) : active ? (
                    <Loader2 className="size-4 animate-spin text-primary" />
                  ) : (
                    <span className="text-[10px] font-mono text-muted-foreground">{i + 1}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-medium">{step.label}</div>
                  <div className="text-[10px] font-mono text-muted-foreground truncate">{step.detail}</div>
                </div>
                {done && (
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-success/15 text-success">
                    OK
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Transactions table */}
      {synced && (
        <div className="rounded-xl border border-border overflow-hidden fade-in-up">
          <div className="px-3 py-2 bg-muted/50 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
              <Database className="size-3" />
              raw_transactions[] · {txs.length} registros
            </div>
            <span className="text-[10px] font-mono text-success">200 OK · 142ms</span>
          </div>
          <table className="w-full text-xs">
            <thead className="text-[10px] uppercase tracking-wider text-muted-foreground bg-muted/20">
              <tr>
                <th className="text-left px-3 py-2 font-medium">ID</th>
                <th className="text-left px-3 py-2 font-medium">Data</th>
                <th className="text-left px-3 py-2 font-medium">Estabelecimento</th>
                <th className="text-right px-3 py-2 font-medium">Valor</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {txs.map((tx) => (
                <tr key={tx.id} className="border-t border-border hover:bg-muted/30">
                  <td className="px-3 py-2 text-muted-foreground">{tx.id}</td>
                  <td className="px-3 py-2">{tx.date}</td>
                  <td className="px-3 py-2 truncate max-w-[160px]">{tx.merchant}</td>
                  <td
                    className={cn(
                      "px-3 py-2 text-right font-semibold",
                      tx.amount < 0 ? "text-foreground" : "text-success"
                    )}
                  >
                    {tx.amount < 0 ? "-" : "+"}R$ {Math.abs(tx.amount).toFixed(2).replace(".", ",")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function StatusBadge({ status }: { status: SyncStatus }) {
  const map: Record<SyncStatus, { label: string; cls: string; dot: string }> = {
    idle: { label: "Desconectado", cls: "bg-muted text-muted-foreground", dot: "bg-muted-foreground/60" },
    handshake: { label: "Handshake mTLS", cls: "bg-primary-soft text-primary", dot: "bg-primary pulse-dot" },
    consent: { label: "Consentimento", cls: "bg-primary-soft text-primary", dot: "bg-primary pulse-dot" },
    fetching: { label: "Sincronizando", cls: "bg-primary-soft text-primary", dot: "bg-primary pulse-dot" },
    synced: { label: "Sincronizado", cls: "bg-success/15 text-success", dot: "bg-success pulse-dot" },
  };
  const s = map[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-1 rounded-md", s.cls)}>
      <span className={cn("size-1.5 rounded-full", s.dot)} />
      {s.label}
    </span>
  );
}

function LgpdSection() {
  const [revealed, setRevealed] = useState(false);

  const raw = { nome: "Marina Almeida Silva", cpf: "412.890.227-04", email: "marina.silva@gmail.com" };
  const masked = { nome: "M****** A****** S****", cpf: "***.***.***-**", email: "m***@****.com" };
  const display = revealed ? raw : masked;

  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-[var(--shadow-soft)]">
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-primary-soft text-primary grid place-items-center">
            <Shield className="size-5" />
          </div>
          <div>
            <div className="text-sm font-semibold">Privacidade LGPD · Pipeline</div>
            <div className="text-[11px] text-muted-foreground">
              Anonimização irreversível antes da escrita em logs
            </div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-mono px-2 py-1 rounded-md bg-success/15 text-success">
          <span className="size-1.5 rounded-full bg-success pulse-dot" />
          LGPD Art. 6º · ATIVO
        </span>
      </header>

      {/* Flow */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3 mb-4">
        <FlowCard
          icon={<FileText className="size-4" />}
          title="Dados Brutos"
          subtitle="Entrada do usuário"
          tone="danger"
        >
          <DataRow label="nome" value={raw.nome} tone="danger" />
          <DataRow label="cpf" value={raw.cpf} tone="danger" />
        </FlowCard>

        <FlowArrow label="filter" />

        <FlowCard
          icon={<KeyRound className="size-4" />}
          title="Pipeline NER"
          subtitle="Detecta PII"
          tone="warn"
        >
          <Badge tone="warn">PII_NAME detectado</Badge>
          <Badge tone="warn">PII_CPF detectado</Badge>
          <Badge tone="primary">AES-256-GCM aplicado</Badge>
        </FlowCard>

        <FlowArrow label="mask" />

        <FlowCard
          icon={<Lock className="size-4" />}
          title="Logs Públicos"
          subtitle="Saída segura"
          tone="ok"
        >
          <DataRow label="nome" value={display.nome} tone="ok" />
          <DataRow label="cpf" value={display.cpf} tone="ok" />
        </FlowCard>
      </div>

      {/* Badges + reveal */}
      <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border">
        <Badge tone="ok">MASCARADO · AES-256</Badge>
        <Badge tone="primary">Hash SHA-256 salt único</Badge>
        <Badge tone="ok">Conforme LGPD Art. 46</Badge>
        <button
          onClick={() => setRevealed((v) => !v)}
          className="ml-auto inline-flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          {revealed ? <EyeOff className="size-3" /> : <Eye className="size-3" />}
          {revealed ? "Reaplicar máscara" : "Simular auditoria (admin)"}
        </button>
      </div>
    </section>
  );
}

function FlowCard({
  icon,
  title,
  subtitle,
  tone,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  tone: "danger" | "warn" | "ok";
  children: React.ReactNode;
}) {
  const ring = {
    danger: "border-destructive/30 bg-destructive/5",
    warn: "border-warning/30 bg-warning/5",
    ok: "border-success/30 bg-success/5",
  }[tone];
  const iconCls = {
    danger: "bg-destructive/15 text-destructive",
    warn: "bg-warning/15 text-warning",
    ok: "bg-success/15 text-success",
  }[tone];
  return (
    <div className={cn("rounded-xl border p-3 flex flex-col gap-2", ring)}>
      <div className="flex items-center gap-2">
        <div className={cn("size-6 rounded-md grid place-items-center", iconCls)}>{icon}</div>
        <div className="min-w-0">
          <div className="text-xs font-semibold truncate">{title}</div>
          <div className="text-[10px] text-muted-foreground truncate">{subtitle}</div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">{children}</div>
    </div>
  );
}

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="hidden md:flex flex-col items-center justify-center gap-1 px-1">
      <ArrowRight className="size-4 text-primary" />
      <span className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground">{label}</span>
    </div>
  );
}

function DataRow({ label, value, tone }: { label: string; value: string; tone: "danger" | "ok" }) {
  const cls =
    tone === "danger"
      ? "text-destructive bg-destructive/10 border-destructive/20"
      : "text-success bg-success/10 border-success/20";
  return (
    <div className="flex items-center gap-1.5 text-[10px] font-mono">
      <span className="text-muted-foreground">{label}:</span>
      <span className={cn("px-1.5 py-0.5 rounded border truncate", cls)}>{value}</span>
    </div>
  );
}

function Badge({ tone, children }: { tone: "ok" | "warn" | "primary"; children: React.ReactNode }) {
  const cls = {
    ok: "bg-success/15 text-success border-success/20",
    warn: "bg-warning/15 text-warning border-warning/20",
    primary: "bg-primary-soft text-primary border-primary/20",
  }[tone];
  return (
    <span className={cn("inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded border", cls)}>
      {children}
    </span>
  );
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
