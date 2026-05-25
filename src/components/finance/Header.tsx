import { Bell, Search, Menu } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface Props {
  techMode: boolean;
  setTechMode: (v: boolean) => void;
}

export function Header({ techMode, setTechMode }: Props) {
  return (
    <header className="h-16 border-b border-border bg-surface/80 backdrop-blur sticky top-0 z-20">
      <div className="h-full px-4 md:px-6 flex items-center gap-3">
        <button className="md:hidden p-2 -ml-2 rounded-lg hover:bg-muted">
          <Menu className="size-5" />
        </button>

        <div className="hidden md:flex items-center gap-2 px-3 h-9 rounded-lg bg-muted text-muted-foreground w-72">
          <Search className="size-4" />
          <input
            className="bg-transparent outline-none text-sm flex-1 placeholder:text-muted-foreground"
            placeholder="Pergunte ao Guardião..."
          />
          <kbd className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-background border border-border">⌘K</kbd>
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2.5 px-3 h-9 rounded-lg border border-border bg-surface">
          <Label htmlFor="mode" className="text-xs font-medium cursor-pointer select-none text-muted-foreground">
            Modo de Visualização
          </Label>
          <Switch id="mode" checked={techMode} onCheckedChange={setTechMode} />
          <span className="text-xs font-semibold text-foreground min-w-[52px]">
            {techMode ? "Técnico" : "Leigo"}
          </span>
        </div>

        <button className="relative p-2 rounded-lg hover:bg-muted">
          <Bell className="size-4" />
          <span className="absolute top-1.5 right-1.5 size-1.5 rounded-full bg-success pulse-dot" />
        </button>

        <div className="size-9 rounded-full bg-gradient-to-br from-primary to-primary/70 grid place-items-center text-primary-foreground text-xs font-semibold">
          MR
        </div>
      </div>
    </header>
  );
}
