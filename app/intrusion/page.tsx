import { ShieldAlert, Siren, TriangleAlert } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ComparisonBars } from "@/components/charts";
import { MetricCard, PageHeading, Panel, StatusBadge } from "@/components/ui";
import { blockedIntrusions, intrusionMetricRows } from "@/lib/mock-data";

export default function IntrusionPage() {
  return (
    <AppShell>
      <div className="grid gap-6">
        <PageHeading
          eyebrow="Intrusion detection"
          title="Past blocked intrusions and flagged metrics"
          description="Review blocked access attempts and expand each incident to see which behavioral metrics failed persona matching and triggered containment."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Blocked sessions"
            value="11"
            detail="Sessions automatically contained after the intrusion score crossed policy threshold."
            accent={<ShieldAlert className="h-5 w-5" />}
          />
          <MetricCard
            label="Score above 90"
            value="03"
            detail="Recent incidents severe enough to block access and create reports."
            accent={<Siren className="h-5 w-5" />}
          />
          <MetricCard
            label="Average intrusion score"
            value="94"
            detail="Mean confidence across the latest blocked access attempts."
            accent={<TriangleAlert className="h-5 w-5" />}
          />
          <MetricCard
            label="Reports created"
            value="03"
            detail="Incident reports generated automatically when access was blocked."
            accent={<StatusBadge tone="anomaly">Auto-report</StatusBadge>}
          />
        </div>

        <Panel className="border p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                Past intrusions
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                Expand an incident to inspect flagged metrics
              </h3>
            </div>
            <StatusBadge tone="anomaly">3 recent blocked incidents</StatusBadge>
          </div>

          <div className="mt-6 grid gap-4">
            {blockedIntrusions.map((incident) => (
              <details
                key={incident.id}
                className="rounded-[16px] border"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card-soft)",
                }}
              >
                <summary className="cursor-pointer list-none px-5 py-4">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                        {incident.time}
                      </p>
                      <h4 className="mt-2 font-semibold">
                        {incident.id} · {incident.user}
                      </h4>
                      <p className="mt-2 text-sm text-muted">
                        {incident.vector}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <div
                        className="rounded-[12px] border px-3 py-2 text-sm"
                        style={{
                          borderColor: "var(--border)",
                          background: "var(--card-strong)",
                        }}
                      >
                        Score {incident.score}
                      </div>
                      <StatusBadge tone="anomaly">
                        {incident.action}
                      </StatusBadge>
                    </div>
                  </div>
                </summary>

                <div
                  className="border-t px-5 py-5"
                  style={{ borderColor: "var(--border)" }}
                >
                  <div className="grid gap-4 md:grid-cols-3">
                    <div
                      className="rounded-[16px] border p-4"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--card-strong)",
                      }}
                    >
                      <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                        Deviation
                      </p>
                      <p className="mt-3 text-2xl font-semibold">
                        {incident.deviation}
                      </p>
                    </div>
                    <div
                      className="rounded-[16px] border p-4"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--card-strong)",
                      }}
                    >
                      <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                        Confidence
                      </p>
                      <p className="mt-3 text-2xl font-semibold">
                        {incident.confidence}
                      </p>
                    </div>
                    <div
                      className="rounded-[16px] border p-4"
                      style={{
                        borderColor: "var(--border)",
                        background: "var(--card-strong)",
                      }}
                    >
                      <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                        Report created
                      </p>
                      <p className="mt-3 text-2xl font-semibold">
                        {incident.reportId}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    {incident.flaggedMetrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-[16px] border p-4"
                        style={{
                          borderColor: "var(--border)",
                          background: "var(--card)",
                        }}
                      >
                        <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                          {metric.label}
                        </p>
                        <p className="mt-3 font-semibold">
                          Observed: {metric.observed}
                        </p>
                        <p className="mt-2 text-sm text-muted">
                          Baseline: {metric.baseline}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </Panel>

        <ComparisonBars
          title="Most common failed metrics"
          subtitle="Signals that most often break persona matching"
          rows={intrusionMetricRows}
        />
      </div>
    </AppShell>
  );
}
