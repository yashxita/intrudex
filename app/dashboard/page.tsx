import { BrainCircuit, TimerReset, TriangleAlert } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import {
  ActivityTimeline,
  HeatmapPanel,
  RiskGauge,
  SpikeBars,
  TrendChart,
  WeightBars,
} from "@/components/charts";
import { MetricCard, Panel, StatusBadge } from "@/components/ui";
import {
  dwellSeries,
  heatmapMatrix,
  liveFeed,
  networkSpikes,
  typingSeries,
  weightData,
} from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <AppShell
      eyebrow="SOC dashboard"
      title="Live behavioral intrusion command center"
      description="Session overview, live risk meter, event feed, behavior maps, and analyst review panels."
    >
      <div className="grid gap-8">
        <div className="grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
          <Panel tone="inverse" className="border p-7">
            <div className="grid gap-6 xl:grid-cols-[0.96fr_1.04fr] xl:items-end">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  User persona score
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-4">
                  <span className="metric-value text-6xl font-semibold">
                    94.2
                  </span>
                  <StatusBadge tone="normal">Trusted session</StatusBadge>
                </div>
                <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                  Active session `SEA-44` is within baseline range. Review the
                  current risk state, event feed, and anomaly queue below.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <MetricCard
                  label="Active monitored sessions"
                  value="1,248"
                  detail="Continuous behavioral authentication is live across enrolled workstations."
                  change="48 new sessions this hour"
                  accent={<BrainCircuit className="h-6 w-6" />}
                />
                <MetricCard
                  label="Unreviewed anomalies"
                  value="07"
                  detail="High-confidence anomaly clusters awaiting analyst action or automation."
                  change="2 escalations in the last 15 min"
                  accent={<TriangleAlert className="h-6 w-6" />}
                />
              </div>
            </div>
          </Panel>

          <RiskGauge
            title="Real-time risk score"
            description="Intrudex risk meter"
            value={68}
            footer={
              <div className="grid gap-3 sm:grid-cols-3">
                <div
                  className="rounded-[14px] border px-4 py-3"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card-soft)",
                  }}
                >
                  <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                    Normal
                  </div>
                  <div className="mt-2 font-semibold">38%</div>
                </div>
                <div
                  className="rounded-[14px] border px-4 py-3"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card-soft)",
                  }}
                >
                  <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                    Drift
                  </div>
                  <div className="mt-2 font-semibold">45%</div>
                </div>
                <div
                  className="rounded-[14px] border px-4 py-3"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card-soft)",
                  }}
                >
                  <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                    Anomaly
                  </div>
                  <div className="mt-2 font-semibold">17%</div>
                </div>
              </div>
            }
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
          <TrendChart
            title="Typing speed and dwell"
            subtitle="Live behavioral cadence over the last 24 hours"
            series={[
              {
                label: "Typing speed",
                values: typingSeries,
                color: "var(--accent)",
              },
              {
                label: "Dwell time",
                values: dwellSeries,
                color: "var(--success)",
              },
            ]}
          />
          <ActivityTimeline
            title="Live activity feed"
            subtitle="Session-by-session monitoring events"
            items={liveFeed}
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <HeatmapPanel
            title="Mouse movement heatmap"
            subtitle="Cursor concentration across current user session"
            values={heatmapMatrix}
          />
          <SpikeBars
            title="Network activity spikes"
            subtitle="Short-burst traffic intensity per monitoring window"
            values={networkSpikes}
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.98fr_1.02fr]">
          <WeightBars
            title="Behavioral weighting"
            subtitle="Dynamic signal importance for active identity scoring"
            weights={weightData}
          />
          <Panel className="border p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  Status indicators
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Normal, drift, and anomaly states
                </h3>
              </div>
              <TimerReset className="h-5 w-5 text-accent" />
            </div>

            <div className="mt-6 grid gap-4">
              <div
                className="rounded-[14px] border p-4"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card-soft)",
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="font-medium">Normal</span>
                  <StatusBadge tone="normal">Trusted</StatusBadge>
                </div>
                <p className="mt-3 text-sm text-muted">
                  Baseline match is within accepted bounds and passive
                  monitoring continues.
                </p>
              </div>
              <div
                className="rounded-[14px] border p-4"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card-soft)",
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="font-medium">Drift</span>
                  <StatusBadge tone="drift">Investigate</StatusBadge>
                </div>
                <p className="mt-3 text-sm text-muted">
                  Behavior is shifting and confidence is dropping, but
                  verification may still recover trust.
                </p>
              </div>
              <div
                className="rounded-[14px] border p-4"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card-soft)",
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="font-medium">Anomaly</span>
                  <StatusBadge tone="anomaly">Escalate</StatusBadge>
                </div>
                <p className="mt-3 text-sm text-muted">
                  Deviation and model confidence are high enough to trigger
                  response workflows.
                </p>
              </div>
            </div>
          </Panel>
        </div>

        <Panel className="border p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                Analyst queue
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                Open work items for the current shift
              </h3>
            </div>
            <StatusBadge tone="info">4 assigned</StatusBadge>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Review typing drift event",
                detail:
                  "Session `SEA-44` moved outside dwell-time threshold for 6 minutes.",
              },
              {
                title: "Approve passive verification",
                detail:
                  "User `R. Patel` has a queued verification prompt awaiting analyst approval.",
              },
              {
                title: "Close resolved network spike",
                detail:
                  "Recent outbound burst on `RPT-004` has normalized and can be archived.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[14px] border p-4"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card-soft)",
                }}
              >
                <h4 className="font-semibold">{item.title}</h4>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}
