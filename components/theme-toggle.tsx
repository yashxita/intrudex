"use client";

import { MonitorSmartphone, Radar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeMode } from "./theme-mode-provider";

const options = [
  {
    mode: "signal" as const,
    label: "Signal",
    icon: Radar,
  },
  {
    mode: "wireframe" as const,
    label: "Wireframe",
    icon: MonitorSmartphone,
  },
];

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { mode, setMode } = useThemeMode();

  return (
    <div
      className={cn(
        "panel panel-soft inline-flex items-center gap-1 rounded-xl border p-1",
        compact ? "w-fit" : "w-fit",
      )}
    >
      {options.map((option) => {
        const Icon = option.icon;
        const active = mode === option.mode;

        return (
          <button
            key={option.mode}
            type="button"
            onClick={() => setMode(option.mode)}
            className={cn(
              "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition",
              active ? "" : "text-muted",
            )}
            style={
              active
                ? {
                    background: "var(--accent)",
                    color: "var(--accent-foreground)",
                  }
                : undefined
            }
            aria-pressed={active}
            aria-label={`Switch to ${option.label} theme`}
          >
            <Icon className="h-4 w-4" />
            <span className={cn(compact ? "hidden sm:inline" : "")}>
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
