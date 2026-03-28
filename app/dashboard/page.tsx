import { Activity, ShieldCheck, Siren, TimerReset } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ActivityTimeline, RiskGauge, TrendChart } from "@/components/charts";
import { MetricCard, PageHeading, Panel, StatusBadge } from "@/components/ui";
import {
  dashboardHealthStats,
  healthMetrics,
  liveFeed,
  typingSeries,
} from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <AppShell>
      <div className="grid gap-6">
        <PageHeading
          eyebrow="System dashboard"
          title="Behavioral intrusion system health"
          description="Operational summary for platform health, protected endpoints, queue latency, and the current analyst workload."
        />

        <Panel tone="strong" className="border p-7">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div className="max-w-3xl">
              <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                Current posture
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <span className="metric-value text-5xl font-semibold">
                  Normal
                </span>
                <StatusBadge tone="normal">All systems healthy</StatusBadge>
              </div>
              <p className="mt-4 text-base leading-8 text-muted">
                Sensor coverage, inference latency, and alert throughput are all
                inside target operating range. No platform-level degradation is
                affecting behavioral scoring.
              </p>
            </div>

            <div className="grid min-w-[280px] gap-3 sm:grid-cols-2">
              {dashboardHealthStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[16px] border px-4 py-4"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card-soft)",
                  }}
                >
                  <p className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                    {stat.label}
                  </p>
                  <p className="metric-value mt-3 text-2xl font-semibold">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Panel>

        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Protected identities"
            value="12.4K"
            detail="Enrolled users with active behavioral baselines."
            accent={<ShieldCheck className="h-5 w-5" />}
          />
          <MetricCard
            label="Events per second"
            value="28.6K"
            detail="Current telemetry flow entering feature extraction and scoring."
            accent={<Activity className="h-5 w-5" />}
          />
          <MetricCard
            label="Open critical alerts"
            value="02"
            detail="Critical events still waiting for analyst decision."
            accent={<Siren className="h-5 w-5" />}
          />
          <MetricCard
            label="Model refresh age"
            value="18 min"
            detail="Time since the last adaptive baseline and model sync."
            accent={<TimerReset className="h-5 w-5" />}
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Panel className="border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  Platform metrics
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Core service health
                </h3>
              </div>
              <StatusBadge tone="normal">Nominal</StatusBadge>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {healthMetrics.map((metric) => (
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
                  <p className="metric-value mt-3 text-3xl font-semibold">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </Panel>

          <RiskGauge
            title="System risk"
            description="Global platform risk score"
            value={32}
            footer={
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Normal", value: "82%" },
                  { label: "Drift", value: "13%" },
                  { label: "Anomaly", value: "5%" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[16px] border px-4 py-3"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--card-soft)",
                    }}
                  >
                    <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                      {item.label}
                    </div>
                    <div className="mt-2 font-semibold">{item.value}</div>
                  </div>
                ))}
              </div>
            }
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
          <TrendChart
            title="Telemetry throughput"
            subtitle="Scoring volume over the last 24 hours"
            series={[
              {
                label: "Scored sessions",
                values: typingSeries,
                color: "var(--accent)",
              },
            ]}
          />
          <ActivityTimeline
            title="Operations feed"
            subtitle="Recent platform and analyst events"
            items={liveFeed}
          />
        </div>
      </div>
    </AppShell>
  );
}
