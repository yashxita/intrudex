"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ActivitySquare,
  ChevronLeft,
  ChevronRight,
  Shield,
} from "lucide-react";
import { navigation } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "./theme-toggle";
import { Panel, StatusBadge } from "./ui";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarWidth = "clamp(320px, 24vw, 380px)";
  const toggleLeft = sidebarOpen ? `calc(${sidebarWidth} - 24px)` : "0px";

  return (
    <div className="relative pr-4 md:pr-6 lg:pr-8">
      <button
        type="button"
        onClick={() => setSidebarOpen((current) => !current)}
        className={cn(
          "panel panel-strong panel-shell fixed top-1/2 z-30 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center border transition-[left] duration-300",
          sidebarOpen ? "rounded-md" : "rounded-r-md border-l-0",
        )}
        style={{ left: toggleLeft }}
        aria-label={sidebarOpen ? "Close navigation" : "Open navigation"}
      >
        {sidebarOpen ? (
          <ChevronLeft className="h-5 w-5" />
        ) : (
          <ChevronRight className="h-5 w-5" />
        )}
      </button>

      <div className="flex w-full items-start gap-5">
        <div
          className={cn(
            "shrink-0 overflow-hidden transition-[width] duration-300",
            sidebarOpen ? "opacity-100" : "opacity-0",
          )}
          style={{ width: sidebarOpen ? sidebarWidth : "0px" }}
        >
          <aside
            className={cn(
              "panel panel-strong panel-shell fixed inset-y-0 left-0 h-screen overflow-y-auto border border-l-0 p-6 hide-scrollbar rounded-l-none",
              sidebarOpen ? "opacity-100" : "pointer-events-none opacity-0",
            )}
            style={{ width: sidebarWidth }}
          >
            <div
              className="absolute inset-x-0 top-0 h-28"
              style={{
                background:
                  "radial-gradient(circle at top, var(--accent-glow), transparent 72%)",
              }}
            />

            <div className="relative z-10 flex items-start gap-3">
              <Link href="/dashboard" className="flex items-center gap-3">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-md"
                  style={{
                    background: "var(--accent)",
                    color: "var(--accent-foreground)",
                  }}
                >
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-semibold">Intrudex</div>
                  <div className="mono text-xs uppercase tracking-[0.22em] text-muted">
                    Monitoring workspace
                  </div>
                </div>
              </Link>
            </div>

            <Panel tone="soft" className="mt-6 border p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                    Runtime status
                  </p>
                  <p className="mt-2 text-lg font-semibold">
                    49 sensors online
                  </p>
                </div>
                <StatusBadge tone="normal">Healthy</StatusBadge>
              </div>
              <Separator className="mt-4 bg-[var(--border)]" />
              <div className="mt-4 grid gap-4 text-sm">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted">Protected endpoints</span>
                  <span className="mono">1,248</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted">Queued alerts</span>
                  <span className="mono">07</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted">Inference latency</span>
                  <span className="mono">142ms</span>
                </div>
              </div>
            </Panel>

            <nav className="mt-6 grid gap-2">
              {navigation.map((item) => {
                const active = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-md border px-4 py-3 text-sm font-medium transition",
                      active ? "shadow-sm" : "hover:-translate-y-0.5",
                    )}
                    style={{
                      borderColor: active
                        ? "var(--border-strong)"
                        : "transparent",
                      background: active ? "var(--accent-soft)" : "transparent",
                    }}
                  >
                    <span>{item.label}</span>
                    <span className="mono text-[10px] uppercase tracking-[0.26em] text-muted">
                      {item.short}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/*<Panel tone="soft" className="mt-6 border p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                    Quick tools
                  </p>
                  <p className="mt-2 font-semibold">Operator shortcuts</p>
                </div>
                <ActivitySquare className="h-5 w-5 text-accent" />
              </div>
              <div className="mt-5 grid gap-3">
                {[
                  "Current metrics",
                  "Trusted personas",
                  "Incident reports",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-md border px-3 py-2 text-sm"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--card-strong)",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </Panel>*/}
          </aside>
        </div>

        <main className="min-h-screen min-w-0 flex-1 space-y-8 py-4">
          <div className="flex justify-end">
            <ThemeToggle compact />
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
