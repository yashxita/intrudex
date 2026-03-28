import { BellRing, Lock, ShieldQuestion, ShieldX } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ActivityTimeline, MobileAlertPreview } from "@/components/charts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MetricCard, PageHeading, Panel, StatusBadge } from "@/components/ui";
import { alertLogRows, liveFeed } from "@/lib/mock-data";

export default function AlertsPage() {
  return (
    <AppShell>
      <div className="grid gap-6">
        <PageHeading
          eyebrow="Alert logs"
          title="Security alert queue and response log"
          description="Central alert log for behavioral incidents, automated actions, and analyst-facing response state."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Open alerts"
            value="07"
            detail="Alerts currently waiting for triage or closure."
            accent={<BellRing className="h-5 w-5" />}
          />
          <MetricCard
            label="Verification challenges"
            value="12"
            detail="Step-up identity prompts issued to active users."
            accent={<ShieldQuestion className="h-5 w-5" />}
          />
          <MetricCard
            label="Containment actions"
            value="03"
            detail="Automatic lock, pause, or isolation actions triggered by policy."
            accent={<Lock className="h-5 w-5" />}
          />
          <MetricCard
            label="Closed today"
            value="16"
            detail="Alerts resolved through automation or analyst review."
            accent={<ShieldX className="h-5 w-5" />}
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <Panel className="overflow-hidden border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  Alert log
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Recent alert records
                </h3>
              </div>
              <StatusBadge tone="drift">2 high-priority items</StatusBadge>
            </div>

            <div className="mt-6">
              <Table className="text-left">
                <TableHeader>
                  <TableRow>
                    <TableHead>Alert</TableHead>
                    <TableHead>Time</TableHead>
                    <TableHead>Severity</TableHead>
                    <TableHead>Source</TableHead>
                    <TableHead>Summary</TableHead>
                    <TableHead className="pr-0">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {alertLogRows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell className="font-semibold">{row.id}</TableCell>
                      <TableCell>{row.time}</TableCell>
                      <TableCell>
                        <StatusBadge
                          tone={
                            row.severity === "High"
                              ? "anomaly"
                              : row.severity === "Medium"
                                ? "drift"
                                : "normal"
                          }
                        >
                          {row.severity}
                        </StatusBadge>
                      </TableCell>
                      <TableCell>{row.source}</TableCell>
                      <TableCell className="text-muted">
                        {row.summary}
                      </TableCell>
                      <TableCell className="pr-0">{row.action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </Panel>

          <div className="grid gap-6">
            <MobileAlertPreview />
            <ActivityTimeline
              title="Response stream"
              subtitle="Latest dispatch and analyst events"
              items={liveFeed}
            />
          </div>
        </div>
      </div>
    </AppShell>
  );
}
