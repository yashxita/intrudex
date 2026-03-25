import { MousePointer2, PanelTopClose, Keyboard } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import {
  ActivityTimeline,
  HeatmapPanel,
  SpikeBars,
  TrendChart,
} from "@/components/charts";
import { MetricCard, Panel, StatusBadge } from "@/components/ui";
import {
  dwellSeries,
  heatmapMatrix,
  liveFeed,
  networkSpikes,
  typingSeries,
} from "@/lib/mock-data";

export default function MonitoringPage() {
  return (
    <AppShell
      eyebrow="Behavioral monitoring"
      title="Track the behavioral biometrics that define session trust"
      description="Mouse, keyboard, focus, and timeline panels for live behavioral signal inspection."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Mouse sensor rate"
          value="120Hz"
          detail="Cursor movement samples normalized continuously for heatmap and vector analysis."
          accent={<MousePointer2 className="h-5 w-5" />}
        />
        <MetricCard
          label="Typing cadence"
          value="83 WPM"
          detail="Keystroke velocity and dwell time are stable within current baseline thresholds."
          accent={<Keyboard className="h-5 w-5" />}
        />
        <MetricCard
          label="Window switching"
          value="14/hr"
          detail="Foreground application changes are watched for escalation patterns."
          accent={<PanelTopClose className="h-5 w-5" />}
        />
        <MetricCard
          label="Behavior samples"
          value="28.6K"
          detail="Telemetry events currently streaming through the identity profile engine."
          accent={<StatusBadge tone="info">Live</StatusBadge>}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.04fr_0.96fr]">
        <HeatmapPanel
          title="Mouse activity tracking"
          subtitle="Pointer concentration and movement density"
          values={heatmapMatrix}
        />
        <TrendChart
          title="Keyboard dynamics"
          subtitle="Typing speed and dwell time trend"
          series={[
            {
              label: "Typing speed",
              values: typingSeries,
              color: "var(--accent)",
            },
            { label: "Dwell time", values: dwellSeries, color: "var(--info)" },
          ]}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.94fr_1.06fr]">
        <SpikeBars
          title="System interaction"
          subtitle="Window focus and app switching intensity"
          values={networkSpikes}
        />
        <ActivityTimeline
          title="Timeline activity logs"
          subtitle="Live behavior change log"
          items={liveFeed}
        />
      </div>

      <Panel className="rounded-[30px] border p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
              Sensor snapshots
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Monitoring panels built for analyst scanning
            </h3>
          </div>
          <StatusBadge tone="normal">48 endpoints healthy</StatusBadge>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Mouse path variance",
              value: "4.8%",
              detail: "Low variance against baseline trajectory clusters.",
            },
            {
              title: "Key hold consistency",
              value: "92.1%",
              detail:
                "Dwell-time profile remains close to normal operating range.",
            },
            {
              title: "Context switching risk",
              value: "Medium",
              detail:
                "Application focus changed quickly during a privileged workflow.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-[24px] border p-5"
              style={{
                borderColor: "var(--border)",
                background: "var(--card-soft)",
              }}
            >
              <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                {card.title}
              </p>
              <p className="metric-value mt-4 text-3xl font-semibold">
                {card.value}
              </p>
              <p className="mt-3 text-sm text-muted">{card.detail}</p>
            </div>
          ))}
        </div>
      </Panel>
    </AppShell>
  );
}
