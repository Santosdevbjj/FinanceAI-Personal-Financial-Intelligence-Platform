import { useEffect, useRef, useState } from "react";
import { Mic, Send, Sparkles, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface Msg {
  id: string;
  role: "user" | "agent";
  text: string;
  ts: string;
}

const INITIAL: Msg[] = [
  {
    id: "1",
    role: "agent",
    text: "Bom dia, Marina. Você ainda tem **R$ 145,00 livres** para gastar hoje sem afetar suas metas. Sua reserva de emergência está em 46%.",
    ts: "09:12",
  },
  {
    id: "2",
    role: "user",
    text: "Posso pedir um jantar de R$ 80 hoje?",
    ts: "09:13",
  },
  {
    id: "3",
    role: "agent",
    text: "Sim — cabe no seu orçamento de **Estilo de Vida** (R$ 1.500/mês, 65% usado). Depois desse gasto, restariam R$ 65 livres para o resto do dia.",
    ts: "09:13",
  },
];

const SUGGESTIONS = [
  "Quanto gastei com delivery este mês?",
  "Reorganize meu orçamento",
  "Posso investir R$ 500?",
];

export function GuardianChat({ techMode }: { techMode: boolean }) {
  const [messages, setMessages] = useState<Msg[]>(INITIAL);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [recording, setRecording] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  function send(text: string) {
    if (!text.trim()) return;
    const now = new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    setMessages((m) => [...m, { id: crypto.randomUUID(), role: "user", text, ts: now }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          id: crypto.randomUUID(),
          role: "agent",
          text: simulateReply(text),
          ts: now,
        },
      ]);
      setThinking(false);
    }, 1100);
  }

  function toggleVoice() {
    setRecording(true);
    setTimeout(() => {
      setRecording(false);
      send("Quanto sobrou da minha poupança este mês?");
    }, 1600);
  }

  return (
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
            Online · respondendo em tempo real
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
          <MessageBubble key={m.id} msg={m} />
        ))}
        {thinking && <Thinking />}
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
            placeholder="Converse com o Guardião..."
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
            disabled={!input.trim()}
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
  );
}

function MessageBubble({ msg }: { msg: Msg }) {
  const isUser = msg.role === "user";
  return (
    <div className={cn("flex gap-3 fade-in-up", isUser && "flex-row-reverse")}>
      {!isUser && (
        <div className="size-7 rounded-lg bg-primary text-primary-foreground grid place-items-center shrink-0">
          <Leaf className="size-3.5" />
        </div>
      )}
      <div className={cn("max-w-[80%] space-y-1", isUser && "items-end flex flex-col")}>
        <div
          className={cn(
            "px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed",
            isUser
              ? "bg-primary text-primary-foreground rounded-tr-sm"
              : "bg-muted text-foreground rounded-tl-sm"
          )}
          dangerouslySetInnerHTML={{ __html: formatText(msg.text) }}
        />
        <div className="text-[10px] text-muted-foreground px-1">{msg.ts}</div>
      </div>
    </div>
  );
}

function Thinking() {
  return (
    <div className="flex gap-3 fade-in-up">
      <div className="size-7 rounded-lg bg-primary text-primary-foreground grid place-items-center shrink-0">
        <Leaf className="size-3.5" />
      </div>
      <div className="px-4 py-3 rounded-2xl rounded-tl-sm bg-muted flex items-center gap-1">
        <span className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "0ms" }} />
        <span className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "120ms" }} />
        <span className="size-1.5 rounded-full bg-muted-foreground/60 animate-bounce" style={{ animationDelay: "240ms" }} />
      </div>
    </div>
  );
}

function formatText(t: string) {
  return t.replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold">$1</strong>');
}

function simulateReply(q: string) {
  const lower = q.toLowerCase();
  if (lower.includes("delivery") || lower.includes("comida"))
    return "Você gastou **R$ 412,00** com delivery este mês — 27% acima da média. Posso sugerir um limite semanal?";
  if (lower.includes("invest"))
    return "Sim! Com R$ 500 disponíveis, recomendo dividir: **R$ 300 no Tesouro Selic** e **R$ 200 em CDB 110%**. Mantém liquidez e ganha rendimento real.";
  if (lower.includes("poup"))
    return "Sua poupança recebeu **R$ 1.500** este mês (meta cumprida). Saldo total: **R$ 8.200** — 46% da reserva de emergência.";
  if (lower.includes("reorgan"))
    return "Sugiro reduzir 'Estilo de Vida' em **R$ 200** e realocar para 'Poupança'. Isso adianta sua reserva em 1,5 mês.";
  return "Analisei seu pedido. Tudo certo — segue dentro dos seus limites mensais. Quer que eu detalhe?";
}
