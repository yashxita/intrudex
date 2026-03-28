import { BrainCircuit, Database, Server, Users } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { WeightBars } from "@/components/charts";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MetricCard, PageHeading, Panel, StatusBadge } from "@/components/ui";
import { adminUsers, healthMetrics, weightData } from "@/lib/mock-data";

export default function AdminPage() {
  return (
    <AppShell>
      <div className="grid gap-6">
        <PageHeading
          eyebrow="Admin and system control"
          title="Manage user profiles, model health, and adaptive weighting"
          description="User records, behavioral profile storage, model runtime, and system maintenance controls."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <MetricCard
            label="Managed users"
            value="12.4K"
            detail="Behavioral identity profiles enrolled across the organization."
            accent={<Users className="h-5 w-5" />}
          />
          <MetricCard
            label="Profile database"
            value="Healthy"
            detail="Feature store replication and behavioral profile retrieval are stable."
            accent={<Database className="h-5 w-5" />}
          />
          {/*<MetricCard
            label="Model status"
            value="Updating"
            detail="Next refresh cycle is retraining adaptive weights using the newest telemetry."
            accent={<BrainCircuit className="h-5 w-5" />}
          />*/}
          <MetricCard
            label="System health"
            value="99.4%"
            detail="Inference, queueing, and alert delivery pipelines are operational."
            accent={<Server className="h-5 w-5" />}
          />
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.98fr_1.02fr]">
          <WeightBars
            title="Adaptive behavioral weighting system"
            subtitle="Signal contributions rebalance dynamically per user and environment"
            weights={weightData}
          />
          <Panel className="rounded-[30px] border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  System health metrics
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Platform readiness and inference reliability
                </h3>
              </div>
              <StatusBadge tone="normal">Operational</StatusBadge>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {healthMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[24px] border p-5"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card-soft)",
                  }}
                >
                  <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                    {metric.label}
                  </p>
                  <p className="metric-value mt-4 text-3xl font-semibold">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <Panel className="overflow-hidden rounded-[30px] border p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                User management
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                Behavioral profile database
              </h3>
            </div>
            <StatusBadge tone="info">3 profiles need review</StatusBadge>
          </div>

          <div className="mt-6">
            <Table className="text-left">
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Profile status</TableHead>
                  <TableHead className="pr-0">Last seen</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {adminUsers.map((user) => (
                  <TableRow key={user.name}>
                    <TableCell className="font-semibold">{user.name}</TableCell>
                    <TableCell className="text-muted">{user.role}</TableCell>
                    <TableCell>{user.profile}</TableCell>
                    <TableCell className="pr-0">{user.lastSeen}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Panel>

        {/*<Panel className="border p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                Maintenance queue
              </p>
              <h3 className="mt-2 text-xl font-semibold">
                Scheduled admin actions
              </h3>
            </div>
            <StatusBadge tone="info">3 pending</StatusBadge>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Retrain adaptive model",
                detail:
                  "Queued for 02:00 UTC with the latest telemetry window.",
              },
              {
                title: "Review onboarding profiles",
                detail:
                  "Eight new user baselines are awaiting final profile approval.",
              },
              {
                title: "Sensor agent update",
                detail:
                  "Version `4.8.3` rollout staged for monitored endpoints.",
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
        </Panel>*/}
      </div>
    </AppShell>
  );
}
