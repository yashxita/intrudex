import { Plus, ShieldCheck, UserRoundSearch } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { Button } from "@/components/ui/button";
import { PageHeading, Panel, StatusBadge } from "@/components/ui";
import {
  personaCreationFields,
  personaLogicSteps,
  personaMetrics,
  personaProfiles,
} from "@/lib/mock-data";

export default function PersonasPage() {
  return (
    <AppShell>
      <div className="grid gap-6">
        <PageHeading
          eyebrow="User personas"
          title="Create and monitor trusted user personas"
          description="Manage the safe personas used for behavioral matching. If live metrics match any trusted persona the session stays allowed; otherwise the system logs an alert and escalates on high intrusion score."
        />

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Panel className="border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  Trusted personas
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Approved safe profiles
                </h3>
              </div>
              <StatusBadge tone="normal">3 approved</StatusBadge>
            </div>

            <div className="mt-6 grid gap-4">
              {personaProfiles.map((profile) => (
                <div
                  key={profile.id}
                  className="rounded-[16px] border p-4"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card-soft)",
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                        {profile.id}
                      </p>
                      <h4 className="mt-2 font-semibold">{profile.name}</h4>
                      <p className="mt-1 text-sm text-muted">{profile.role}</p>
                    </div>
                    <StatusBadge
                      tone={
                        profile.status === "Trusted"
                          ? "normal"
                          : profile.status === "Drift watch"
                            ? "drift"
                            : "anomaly"
                      }
                    >
                      {profile.status}
                    </StatusBadge>
                  </div>
                  <p className="mt-3 text-sm text-muted">{profile.baseline}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  Persona builder
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Create a new trusted persona
                </h3>
              </div>
              <Button type="button">
                <Plus className="h-4 w-4" />
                Create persona
              </Button>
            </div>

            <div className="mt-6 grid gap-4">
              {personaCreationFields.map((field) => (
                <div
                  key={field}
                  className="rounded-[16px] border px-4 py-4"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card-soft)",
                  }}
                >
                  <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                    {field}
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Prototype input area for {field.toLowerCase()}.
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
          <Panel className="border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  Selected persona baseline
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  R. Patel trusted profile metrics
                </h3>
              </div>
              <UserRoundSearch className="h-5 w-5 text-accent" />
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {personaMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[16px] border p-4"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card-soft)",
                  }}
                >
                  <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                    {metric.label}
                  </p>
                  <p className="metric-value mt-3 text-2xl font-semibold">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{metric.range}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  Matching policy
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  System behavior for persona matching
                </h3>
              </div>
              <ShieldCheck className="h-5 w-5 text-accent" />
            </div>

            <div className="mt-6 grid gap-4">
              {personaLogicSteps.map((step) => (
                <div
                  key={step.label}
                  className="rounded-[16px] border p-4"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card-soft)",
                  }}
                >
                  <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                    {step.label}
                  </p>
                  <p className="mt-3 font-semibold">{step.value}</p>
                  <p className="mt-2 text-sm text-muted">{step.detail}</p>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>
    </AppShell>
  );
}
