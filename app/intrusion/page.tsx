import { BrainCircuit, ShieldAlert, Siren } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ComparisonBars, RiskGauge, TrendChart } from "@/components/charts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MetricCard, Panel, StatusBadge } from "@/components/ui";
import {
  anomalyRows,
  deviationRows,
  dwellSeries,
  typingSeries,
} from "@/lib/mock-data";

export default function IntrusionPage() {
  return (
    <AppShell
      eyebrow="Intrusion detection"
      title="Explain anomalies with baseline deviation and model confidence"
      description="Anomaly cases, confidence scoring, baseline comparison, and active rule output."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Detected anomalies"
          value="27"
          detail="Potential behavioral intrusion events raised in the last 24 hours."
          accent={<ShieldAlert className="h-5 w-5" />}
        />
        <MetricCard
          label="High-risk sessions"
          value="04"
          detail="Sessions that crossed escalation confidence thresholds."
          accent={<Siren className="h-5 w-5" />}
        />
        <MetricCard
          label="Average confidence"
          value="92.4%"
          detail="Mean model certainty across flagged behavioral deviations."
          accent={<BrainCircuit className="h-5 w-5" />}
        />
        <MetricCard
          label="Auto-contained"
          value="11"
          detail="Sessions automatically verified, paused, or locked by policy."
          accent={<StatusBadge tone="info">Policy</StatusBadge>}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <ComparisonBars
          title="Behavioral deviation comparison"
          subtitle="Current activity compared with user baseline"
          rows={deviationRows}
        />
        <RiskGauge
          title="Anomaly confidence"
          description="Model confidence on the leading event cluster"
          value={84}
          footer={
            <div className="grid gap-3 sm:grid-cols-2">
              <div
                className="rounded-[20px] border px-4 py-3"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card-soft)",
                }}
              >
                <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                  Risk class
                </div>
                <div className="mt-2 font-semibold">High</div>
              </div>
              <div
                className="rounded-[20px] border px-4 py-3"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card-soft)",
                }}
              >
                <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
                  Dominant vector
                </div>
                <div className="mt-2 font-semibold">
                  Keyboard + window focus
                </div>
              </div>
            </div>
          }
        />
      </div>

      <TrendChart
        title="Anomaly graph"
        subtitle="Deviation confidence over comparative inference windows"
        series={[
          {
            label: "Current session",
            values: typingSeries,
            color: "var(--accent)",
          },
          {
            label: "Trusted baseline",
            values: dwellSeries,
            color: "var(--info)",
          },
        ]}
      />

      <Panel className="overflow-hidden rounded-[30px] border p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
              Detected anomalies
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Ranked events with classification and confidence
            </h3>
          </div>
          <StatusBadge tone="anomaly">
            2 events require immediate action
          </StatusBadge>
        </div>

        <div className="mt-6">
          <Table className="text-left">
            <TableHeader>
              <TableRow>
                <TableHead>Event</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Vector</TableHead>
                <TableHead>Deviation</TableHead>
                <TableHead>Risk</TableHead>
                <TableHead className="pr-0">Confidence</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {anomalyRows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="font-semibold">{row.id}</TableCell>
                  <TableCell>{row.user}</TableCell>
                  <TableCell className="text-muted">{row.vector}</TableCell>
                  <TableCell>{row.deviation}</TableCell>
                  <TableCell>
                    <StatusBadge
                      tone={
                        row.risk === "High"
                          ? "anomaly"
                          : row.risk === "Medium"
                            ? "drift"
                            : "normal"
                      }
                    >
                      {row.risk}
                    </StatusBadge>
                  </TableCell>
                  <TableCell className="pr-0 font-semibold">
                    {row.confidence}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Panel>

      <Panel className="border p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
              Detection rules
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Active rule output and model checks
            </h3>
          </div>
          <StatusBadge tone="normal">6 rules active</StatusBadge>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Keyboard cadence detector",
              detail:
                "Running with threshold `0.82` and confidence override enabled.",
            },
            {
              title: "Mouse trajectory comparator",
              detail:
                "Tracking lateral movement variance against the current baseline profile.",
            },
            {
              title: "Window focus anomaly model",
              detail:
                "Queued two sessions for review after repeated rapid application switching.",
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
              <p className="mt-3 text-sm leading-7 text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </Panel>
    </AppShell>
  );
}
