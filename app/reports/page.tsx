import {
  Download,
  FileSpreadsheet,
  ShieldCheck,
  TrendingDown,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ComparisonBars, TrendChart } from "@/components/charts";
import { Button } from "@/components/ui/button";
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
  farSeries,
  frrSeries,
} from "@/lib/mock-data";

export default function ReportsPage() {
  return (
    <AppShell
      eyebrow="Reports and analytics"
      title="Measure detection quality, review historical anomalies, and export evidence"
      description="Historical event logs, KPI trends, export jobs, and report generation panels."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="False accept rate"
          value="1.4%"
          detail="Downward trend indicates stronger separation between trusted and suspicious sessions."
          accent={<TrendingDown className="h-5 w-5" />}
        />
        <MetricCard
          label="False reject rate"
          value="3.3%"
          detail="Adaptive profiles reduce unnecessary friction for legitimate users."
          accent={<ShieldCheck className="h-5 w-5" />}
        />
        <MetricCard
          label="Exported reports"
          value="128"
          detail="Monthly incident, compliance, and analyst briefing packets generated."
          accent={<FileSpreadsheet className="h-5 w-5" />}
        />
        <MetricCard
          label="Retention window"
          value="365d"
          detail="Behavioral evidence preserved for long-range forensic review."
          accent={<Download className="h-5 w-5" />}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
        <TrendChart
          title="FAR and FRR"
          subtitle="Detection quality trend across reporting windows"
          series={[
            { label: "FAR", values: farSeries, color: "var(--accent)" },
            { label: "FRR", values: frrSeries, color: "var(--info)" },
          ]}
        />
        <Panel className="rounded-[30px] border p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                Export center
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                Generate analyst and compliance outputs
              </h3>
            </div>
            <StatusBadge tone="info">CSV / PDF / JSON</StatusBadge>
          </div>

          <div className="mt-6 grid gap-4">
            {[
              {
                title: "Incident summary report",
                detail:
                  "Condensed anomaly, risk, and response timeline for security review.",
              },
              {
                title: "Behavioral baseline report",
                detail:
                  "User profile drift history and model recalibration overview.",
              },
              {
                title: "Executive KPI export",
                detail:
                  "FAR, FRR, alert throughput, and containment performance snapshot.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border p-5"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--card-soft)",
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h4 className="font-semibold">{item.title}</h4>
                  <Button type="button" variant="secondary">
                    Export
                  </Button>
                </div>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <ComparisonBars
        title="Historical drift composition"
        subtitle="Where behavior most frequently diverges from baseline"
        rows={deviationRows}
      />

      <Panel className="overflow-hidden rounded-[30px] border p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
              Past anomalies
            </p>
            <h3 className="mt-2 text-xl font-semibold">
              Historical anomaly and alert log
            </h3>
          </div>
          <StatusBadge tone="normal">Retention healthy</StatusBadge>
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
                  <TableCell>{row.risk}</TableCell>
                  <TableCell className="pr-0 font-semibold">
                    {row.confidence}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Panel>
    </AppShell>
  );
}
