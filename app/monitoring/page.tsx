import Link from "next/link";
import {
  Keyboard,
  MousePointer2,
  PanelTopClose,
  ShieldCheck,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import {
  ActivityTimeline,
  HeatmapPanel,
  SpikeBars,
  TrendChart,
} from "@/components/charts";
import { Button } from "@/components/ui/button";
import { MetricCard, PageHeading, Panel, StatusBadge } from "@/components/ui";
import {
  currentPersonaDetection,
  dwellSeries,
  heatmapMatrix,
  liveFeed,
  liveStatusRows,
  monitoringMetricCards,
  networkSpikes,
  personaLogicSteps,
  typingSeries,
} from "@/lib/mock-data";

export default function MonitoringPage() {
  return (
    <AppShell>
      <div className="grid gap-6">
        <PageHeading
          eyebrow="Behavioral monitoring"
          title="Current session metrics and detected persona"
          description="Live behavioral measurements for the active session, with current persona matching outcome and the system action taken from that match state."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <MetricCard
            label={monitoringMetricCards[0].label}
            value={monitoringMetricCards[0].value}
            detail={monitoringMetricCards[0].detail}
            accent={<MousePointer2 className="h-5 w-5" />}
          />
          <MetricCard
            label={monitoringMetricCards[4].label}
            value={monitoringMetricCards[4].value}
            detail={monitoringMetricCards[4].detail}
            accent={<MousePointer2 className="h-5 w-5" />}
          />
          <MetricCard
            label={monitoringMetricCards[5].label}
            value={monitoringMetricCards[5].value}
            detail={monitoringMetricCards[5].detail}
            accent={<MousePointer2 className="h-5 w-5" />}
          />
          <MetricCard
            label={monitoringMetricCards[1].label}
            value={monitoringMetricCards[1].value}
            detail={monitoringMetricCards[1].detail}
            accent={<Keyboard className="h-5 w-5" />}
          />
          <MetricCard
            label={monitoringMetricCards[2].label}
            value={monitoringMetricCards[2].value}
            detail={monitoringMetricCards[2].detail}
            accent={<Keyboard className="h-5 w-5" />}
          />
          <MetricCard
            label={monitoringMetricCards[3].label}
            value={monitoringMetricCards[3].value}
            detail={monitoringMetricCards[3].detail}
            accent={<PanelTopClose className="h-5 w-5" />}
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <Panel tone="strong" className="border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  Persona detection
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Current metrics matched a trusted persona
                </h3>
              </div>
              <StatusBadge tone="normal">
                {currentPersonaDetection.status}
              </StatusBadge>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div
                className="rounded-[16px] border p-4"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card-soft)",
                }}
              >
                <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                  Detected persona
                </p>
                <p className="mt-3 text-2xl font-semibold">
                  {currentPersonaDetection.detectedPersona}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {currentPersonaDetection.detail}
                </p>
              </div>
              <div
                className="rounded-[16px] border p-4"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card-soft)",
                }}
              >
                <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                  Match confidence
                </p>
                <p className="mt-3 text-2xl font-semibold">
                  {currentPersonaDetection.confidence}
                </p>
                <p className="mt-2 text-sm text-muted">
                  {currentPersonaDetection.outcome}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild type="button">
                <Link href="/personas">Open user personas</Link>
              </Button>
            </div>
          </Panel>

          <Panel className="border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  Decision logic
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Matching and escalation path
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

        <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
          <Panel className="border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  Current metric measures
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Live monitoring pipeline status
                </h3>
              </div>
              <StatusBadge tone="normal">Streaming normally</StatusBadge>
            </div>

            <div className="mt-6 grid gap-4">
              {liveStatusRows.map((row) => (
                <div
                  key={row.metric}
                  className="flex flex-wrap items-center justify-between gap-4 rounded-[16px] border px-4 py-4"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card-soft)",
                  }}
                >
                  <div>
                    <p className="font-medium">{row.metric}</p>
                    <p className="mt-1 text-sm text-muted">{row.value}</p>
                  </div>
                  <StatusBadge
                    tone={row.status === "Drift watch" ? "drift" : "normal"}
                  >
                    {row.status}
                  </StatusBadge>
                </div>
              ))}
            </div>
          </Panel>

          <ActivityTimeline
            title="Live session events"
            subtitle="Recent monitoring activity"
            items={liveFeed}
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <HeatmapPanel
            title="Mouse activity"
            subtitle="Pointer concentration across the active session"
            values={heatmapMatrix}
          />
          <TrendChart
            title="Keyboard telemetry"
            subtitle="Typing speed and dwell time"
            series={[
              {
                label: "Typing speed",
                values: typingSeries,
                color: "var(--accent)",
              },
              {
                label: "Dwell time",
                values: dwellSeries,
                color: "var(--info)",
              },
            ]}
          />
        </div>

        <SpikeBars
          title="Window switching"
          subtitle="Foreground application transitions by monitoring window"
          values={networkSpikes}
        />
      </div>
    </AppShell>
  );
}
