import Link from "next/link";
import { BrainCircuit, Radar, ShieldCheck } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Panel, SectionLabel } from "@/components/ui";
import { benefitCards, featureCards, howItWorks } from "@/lib/mock-data";

const overviewIcons = [Radar, BrainCircuit, ShieldCheck];

export default function Home() {
  return (
    <div className="px-4 pb-12 pt-4 md:px-6 lg:px-8">
      <div className="mx-auto max-w-[1360px] space-y-8">
        <header className="panel rounded-[24px] border px-5 py-4 md:px-7">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-3">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-[14px]"
                style={{
                  background: "var(--accent)",
                  color: "var(--accent-foreground)",
                }}
              >
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <div className="text-lg font-semibold">Intrudex</div>
                <div className="mono text-xs uppercase tracking-[0.22em] text-muted">
                  Project overview
                </div>
              </div>
            </Link>

            <div className="flex flex-wrap items-center gap-3">
              <ThemeToggle compact />
              <Button asChild variant="secondary">
                <Link href="/auth/login">Open prototype</Link>
              </Button>
            </div>
          </div>
        </header>

        <section>
          <Panel tone="strong" className="border p-8 md:p-10">
            <SectionLabel>Project summary</SectionLabel>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight md:text-6xl">
              Intrudex explores continuous behavioral authentication for smart
              intrusion detection.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">
              The project studies how user behavior can be used as an ongoing
              security signal. Instead of trusting a session only at login time,
              Intrudex observes typing, mouse movement, application switching,
              and system interaction patterns to identify drift and anomaly
              conditions during live usage.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/auth/login">View application prototype</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="#method">Read methodology</Link>
              </Button>
            </div>
          </Panel>
        </section>

        <section className="space-y-5">
          <div>
            <SectionLabel>Core concepts</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              The project combines behavioral signals, anomaly scoring, and adaptive response.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featureCards.map((card, index) => {
              const Icon = overviewIcons[index];

              return (
                <Panel key={card.title} className="border p-6">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-[14px]"
                    style={{
                      background: "var(--accent-soft)",
                      color: "var(--accent)",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold">{card.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {card.description}
                  </p>
                </Panel>
              );
            })}
          </div>
        </section>

        <section id="method" className="space-y-5">
          <div>
            <SectionLabel>Methodology</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              Intrudex follows a capture, baseline, compare, and respond workflow.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {howItWorks.map((step) => (
              <Panel key={step.step} className="border p-6">
                <div className="mono text-sm uppercase tracking-[0.26em] text-muted">
                  {step.step}
                </div>
                <h3 className="mt-5 text-2xl font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {step.description}
                </p>
              </Panel>
            ))}
          </div>
        </section>

        <section className="space-y-5">
          <div>
            <SectionLabel>Expected value</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold md:text-4xl">
              The goal is to strengthen session security while minimizing user friction.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {benefitCards.map((benefit) => (
              <Panel key={benefit.title} className="border p-6">
                <h3 className="text-2xl font-semibold">{benefit.title}</h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {benefit.description}
                </p>
              </Panel>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
