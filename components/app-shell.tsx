"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ActivitySquare, Shield } from "lucide-react";
import { navigation } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "./theme-toggle";
import { Panel, StatusBadge } from "./ui";

export function AppShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="px-4 py-4 md:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1560px] gap-8 lg:grid-cols-[272px_minmax(0,1fr)]">
        <aside className="panel panel-strong sticky top-4 h-fit overflow-hidden rounded-[24px] border p-5">
          <div
            className="absolute inset-x-0 top-0 h-32"
            style={{
              background:
                "linear-gradient(180deg, var(--accent-glow), transparent)",
            }}
          />
          <div className="relative z-10">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-[14px]"
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
                  Smart intrusion engine
                </div>
              </div>
            </Link>

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
                  <span className="text-muted">Active sessions</span>
                  <span className="mono">1,248</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted">Queued alerts</span>
                  <span className="mono">07</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-muted">Adaptive model</span>
                  <span className="mono">v4.8.2</span>
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
                      "flex items-center justify-between rounded-[14px] border px-4 py-3 text-sm font-medium transition",
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

            <Panel tone="soft" className="mt-6 border p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                    Quick tools
                  </p>
                  <p className="mt-2 font-semibold">Workspace shortcuts</p>
                </div>
                <ActivitySquare className="h-5 w-5 text-accent" />
              </div>
              <div className="mt-5 grid gap-3">
                {["Session monitor", "Alert review", "Profile audit"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-[14px] border px-3 py-2 text-sm"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--card-strong)",
                      }}
                    >
                      {item}
                    </div>
                  ),
                )}
              </div>
            </Panel>
          </div>
        </aside>

        <main className="min-w-0 space-y-8">
          <header className="panel rounded-[24px] border px-5 py-5 md:px-7 md:py-6">
            <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p className="section-tag">{eyebrow}</p>
                <h1 className="mt-5 text-3xl font-semibold md:text-4xl">
                  {title}
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-muted md:text-base">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <div
                  className="hidden rounded-[14px] border px-4 py-2 text-sm md:inline-flex"
                  style={{ borderColor: "var(--border)" }}
                >
                  Prototype workspace
                </div>
                <ThemeToggle compact />
              </div>
            </div>
          </header>

          {children}
        </main>
      </div>
    </div>
  );
}
