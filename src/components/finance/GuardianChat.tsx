import { useEffect, useRef, useState } from "react";
import { Mic, Send, Sparkles, Leaf, Code2, CheckCircle2, TrendingUp, X, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "Essencial" | "Estilo de Vida" | null;

interface NerPayload {
  amount: number;
  merchant: string;
  category: "Essencial" | "Estilo de Vida";
  category_pct: 60 | 20;
  confidence_score: number;
  timestamp: string;
  raw_text: string;
}

interface Msg {
  id: string;
  role: "user" | "agent";
  text: string;
  ts: string;
  payload?: NerPayload | null;
  extracted?: boolean;
}

const INITIAL: Msg[] = [
  {
    id: "1",
    role: "agent",
    text: "Bom dia, Marina. Você ainda tem **R$ 145,00 livres** para gastar hoje sem afetar suas metas. Sua reserva de emergência está em 46%.",
    ts: "09:12",
  },
];

const SUGGESTIONS = [
  "Gastei 80 no iFood ontem",
  "Paguei 1200 de aluguel",
  "Compras no Carrefour 230",
];

const ESSENCIAL_KEYWORDS = ["mercado", "carrefour", "aluguel", "luz", "agua", "água", "farmacia", "farmácia"];
const ESTILO_KEYWORDS = ["cinema", "restaurante", "ifood", "delivery", "bar", "uber"];

function detectCategory(text: string): { category: Category; merchant: string } {
  const lower = text.toLowerCase();
  for (const kw of ESSENCIAL_KEYWORDS) {
    if (lower.includes(kw)) return { category: "Essencial", merchant: capitalize(kw) };
  }
  for (const kw of ESTILO_KEYWORDS) {
    if (lower.includes(kw)) return { category: "Estilo de Vida", merchant: capitalize(kw) };
  }
  return { category: null, merchant: "" };
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function extractAmount(text: string): number {
  const m = text.match(/(\d+[.,]?\d*)/);
  if (!m) return Math.floor(Math.random() * 200) + 20;
  return parseFloat(m[1].replace(",", "."));
}

export function GuardianChat({ techMode }: { techMode: boolean }) {
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [input, setInput] = useState("");
  const [processing, setProcessing] = useState(false);
  const [recording, setRecording] = useState(false);
  const [openPayload, setOpenPayload] = useState<NerPayload | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, processing]);

  function send(text: string) {
    if (!text.trim()) return;
    const now = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    setMessages((m) => [...m, { id: crypto.randomUUID(), role: "user", text, ts: now }]);
    setInput("");
    setProcessing(true);

    setTimeout(() => {
      const { category, merchant } = detectCategory(text);
      let reply: Msg;

      if (category) {
        const amount = extractAmount(text);
        const pct = category === "Essencial" ? 60 : 20;
        const payload: NerPayload = {
          amount,
          merchant: merchant || "Não identificado",
          category,
          category_pct: pct,
          confidence_score: Number((0.92 + Math.random() * 0.07).toFixed(3)),
          timestamp: new Date().toISOString(),
          raw_text: text,
        };
        reply = {
          id: crypto.randomUUID(),
          role: "agent",
          text: "",
          ts: now,
          payload,
          extracted: true,
        };
      } else {
        reply = {
          id: crypto.randomUUID(),
          role: "agent",
          text: simulateReply(text),
          ts: now,
          payload: {
            amount: 0,
            merchant: "—",
            category: "Estilo de Vida",
            category_pct: 20,
            confidence_score: 0.61,
            timestamp: new Date().toISOString(),
            raw_text: text,
          },
        };
      }
      setMessages((m) => [...m, reply]);
      setProcessing(false);
    }, 800);
  }

  function toggleVoice() {
    setRecording(true);
    setTimeout(() => {
      setRecording(false);
      send("Gastei 45 no restaurante ontem");
    }, 1400);
  }

  return (
    <>
      <div className="rounded-2xl bg-surface border border-border shadow-[var(--shadow-soft)] flex flex-col h-[calc(100vh-7rem)] min-h-[640px] overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 border-b border-border flex items-center gap-3">
          <div className="relative">
            <div className="size-9 rounded-xl bg-primary text-primary-foreground grid place-items-center">
              <Leaf className="size-4" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-success border-2 border-surface" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold">Agente Guardião</div>
            <div className="text-[11px] text-muted-foreground flex items-center gap-1.5">
              <span className="size-1 rounded-full bg-success pulse-dot" />
              Online · NER pipeline ativo
            </div>
          </div>
          {techMode && (
            <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-mono px-2 py-1 rounded-md bg-primary-soft text-primary">
              <span className="size-1.5 rounded-full bg-success pulse-dot" />
              LLM v4.2 · 142ms
            </div>
          )}
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-6 space-y-5">
          {messages.map((m) => (
            <MessageBubble key={m.id} msg={m} onOpenPayload={setOpenPayload} />
          ))}
          {processing && <Processing />}
          <div ref={endRef} />
        </div>

        {/* Suggestions */}
        <div className="px-5 pb-2 flex gap-2 overflow-x-auto">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => send(s)}
              className="shrink-0 text-xs px-3 py-1.5 rounded-full border border-border bg-surface hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            >
              <Sparkles className="size-3 inline mr-1 text-primary" />
              {s}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 px-2 py-2 rounded-xl border border-border bg-background focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/15 transition"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ex: gastei 80 no iFood..."
              className="flex-1 bg-transparent outline-none text-sm px-2 placeholder:text-muted-foreground"
            />
            <button
              type="button"
              onClick={toggleVoice}
              className={cn(
                "size-9 rounded-lg grid place-items-center transition-colors",
                recording
                  ? "bg-destructive text-destructive-foreground pulse-dot"
                  : "hover:bg-muted text-muted-foreground"
              )}
              aria-label="Enviar voz"
            >
              <Mic className="size-4" />
            </button>
            <button
              type="submit"
              disabled={!input.trim() || processing}
              className="size-9 rounded-lg bg-primary text-primary-foreground grid place-items-center disabled:opacity-40 hover:opacity-90 transition"
            >
              <Send className="size-4" />
            </button>
          </form>
          {recording && (
            <div className="mt-2 text-[11px] text-destructive flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-destructive pulse-dot" />
              Gravando · NER processando entidades financeiras...
            </div>
          )}
        </div>
      </div>

      <PayloadModal payload={openPayload} onClose={() => setOpenPayload(null)} />
    </>
  );
}

function MessageBubble({ msg, onOpenPayload }: { msg: Msg; onOpenPayload: (p: NerPayload) => void }) {
  const isUser = msg.role === "user";
  return (
    <div className={cn("flex gap-3 fade-in-up", isUser && "flex-row-reverse")}>
      {!isUser && (
        <div className="size-7 rounded-lg bg-primary text-primary-foreground grid place-items-center shrink-0">
          <Leaf className="size-3.5" />
        </div>
      )}
      <div className={cn("max-w-[85%] space-y-1.5", isUser && "items-end flex flex-col")}>
        {msg.extracted && msg.payload ? (
          <ExtractedCard payload={msg.payload} />
        ) : (
          msg.text && (
            <div
              className={cn(
                "px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed",
                isUser
                  ? "bg-primary text-primary-foreground rounded-tr-sm"
                  : "bg-muted text-foreground rounded-tl-sm"
              )}
              dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
            />
          )
        )}
        <div className="flex items-center gap-2 px-1">
          <span className="text-[10px] text-muted-foreground">{msg.ts}</span>
          {!isUser && msg.payload && (
            <button
              onClick={() => onOpenPayload(msg.payload!)}
              className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground hover:text-primary transition-colors"
            >
              <Code2 className="size-3" />
              Ver Payload JSON da IA
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ExtractedCard({ payload }: { payload: NerPayload }) {
  const isEssencial = payload.category === "Essencial";
  return (
    <div className="rounded-2xl rounded-tl-sm border border-border bg-gradient-to-br from-surface to-muted/40 p-3.5 w-full max-w-sm shadow-[var(--shadow-soft)]">
      <div className="flex items-center gap-2 mb-3">
        <div className="size-6 rounded-md bg-success/15 text-success grid place-items-center">
          <CheckCircle2 className="size-3.5" />
        </div>
        <div className="text-xs font-semibold">Transação extraída</div>
        <span className="ml-auto text-[10px] font-mono text-muted-foreground">
          {(payload.confidence_score * 100).toFixed(1)}%
        </span>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-muted-foreground">Valor</span>
          <span className="num font-semibold text-base">
            R$ {payload.amount.toFixed(2).replace(".", ",")}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Estabelecimento</span>
          <span className="font-medium">{payload.merchant}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Categoria</span>
          <span
            className={cn(
              "text-[11px] font-medium px-2 py-0.5 rounded-md",
              isEssencial ? "bg-primary/15 text-primary" : "bg-success/15 text-success"
            )}
          >
            {payload.category} · {payload.category_pct}%
          </span>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-border flex items-center gap-1.5 text-[11px] text-success">
        <TrendingUp className="size-3" />
        Dashboard atualizado automaticamente
      </div>
    </div>
  );
}

function Processing() {
  return (
    <div className="flex gap-3 fade-in-up">
      <div className="size-7 rounded-lg bg-primary text-primary-foreground grid place-items-center shrink-0">
        <Cpu className="size-3.5 animate-pulse" />
      </div>
      <div className="px-3.5 py-2.5 rounded-2xl rounded-tl-sm bg-muted flex items-center gap-2 font-mono text-[11px] text-muted-foreground">
        <span className="size-1.5 rounded-full bg-primary pulse-dot" />
        IA processando payload
        <span className="inline-flex">
          <span className="animate-bounce" style={{ animationDelay: "0ms" }}>.</span>
          <span className="animate-bounce" style={{ animationDelay: "120ms" }}>.</span>
          <span className="animate-bounce" style={{ animationDelay: "240ms" }}>.</span>
        </span>
      </div>
    </div>
  );
}

function PayloadModal({ payload, onClose }: { payload: NerPayload | null; onClose: () => void }) {
  if (!payload) return null;
  const json = JSON.stringify(
    {
      amount: payload.amount,
      merchant: payload.merchant,
      category: payload.category,
      confidence_score: payload.confidence_score,
      timestamp: payload.timestamp,
      raw_text: payload.raw_text,
      pipeline: {
        model: "ner-financeai-v4.2",
        latency_ms: 142,
        lgpd_masked: true,
      },
    },
    null,
    2
  );

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/60 backdrop-blur-sm p-4 fade-in-up"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-surface border border-border shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-border">
          <div className="flex items-center gap-2">
            <Code2 className="size-4 text-primary" />
            <div className="text-sm font-semibold">Payload NER · Pipeline IA</div>
          </div>
          <button onClick={onClose} className="size-7 rounded-md hover:bg-muted grid place-items-center">
            <X className="size-4" />
          </button>
        </div>
        <pre className="p-5 text-[12px] leading-relaxed font-mono bg-background overflow-auto max-h-[60vh] text-foreground">
          {json}
        </pre>
        <div className="px-5 py-3 border-t border-border flex items-center justify-between text-[10px] font-mono text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-success pulse-dot" />
            LGPD: PII mascarado
          </span>
          <span>confidence: {(payload.confidence_score * 100).toFixed(1)}%</span>
        </div>
      </div>
    </div>
  );
}

function formatText(t: string) {
  return t.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>');
}

function simulateReply(q: string) {
  const lower = q.toLowerCase();
  if (lower.includes("invest"))
    return "Sim! Com R$ 500 disponíveis, recomendo dividir: **R$ 300 no Tesouro Selic** e **R$ 200 em CDB 110%**.";
  if (lower.includes("poup"))
    return "Sua poupança recebeu **R$ 1.500** este mês. Saldo total: **R$ 8.200** — 46% da reserva.";
  if (lower.includes("reorgan"))
    return "Sugiro reduzir 'Estilo de Vida' em **R$ 200** e realocar para 'Poupança'.";
  return "Analisei seu pedido. Não identifiquei uma transação clara — tente algo como *gastei 50 no mercado*.";
}
