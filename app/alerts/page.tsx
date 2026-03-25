import { BellRing, Lock, ShieldQuestion, ShieldX } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { ActivityTimeline, MobileAlertPreview } from "@/components/charts";
import { Button } from "@/components/ui/button";
import { MetricCard, Panel, StatusBadge } from "@/components/ui";
import { alerts, liveFeed } from "@/lib/mock-data";

export default function AlertsPage() {
  return (
    <AppShell
      eyebrow="Alert and response"
      title="Escalate suspicious sessions with guided response actions"
      description="Alert queue, response actions, notification preview, and operator event stream."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Pending alerts"
          value="07"
          detail="Current alerts requiring triage, review, or automated response."
          accent={<BellRing className="h-5 w-5" />}
        />
        <MetricCard
          label="Verification prompts"
          value="12"
          detail="Low-friction user challenges dispatched in the current monitoring window."
          accent={<ShieldQuestion className="h-5 w-5" />}
        />
        <MetricCard
          label="Lock actions"
          value="03"
          detail="High-risk sessions isolated or system access blocked automatically."
          accent={<Lock className="h-5 w-5" />}
        />
        <MetricCard
          label="Dismissed events"
          value="16"
          detail="Alerts cleared after analyst review or adaptive profile reconciliation."
          accent={<ShieldX className="h-5 w-5" />}
        />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.02fr_0.98fr]">
        <div className="grid gap-6">
          <Panel className="rounded-[30px] border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  Alert cards
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Suspicious activity queue
                </h3>
              </div>
              <StatusBadge tone="anomaly">Immediate attention</StatusBadge>
            </div>

            <div className="mt-6 space-y-4">
              {alerts.map((alert, index) => (
                <div
                  key={`${alert.title}-${alert.timestamp}`}
                  className="rounded-[24px] border p-5"
                  style={{
                    borderColor:
                      index === 0 ? "rgba(255, 122, 89, 0.3)" : "var(--border)",
                    background:
                      index === 0
                        ? "rgba(255, 122, 89, 0.08)"
                        : "var(--card-soft)",
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                        {alert.timestamp}
                      </p>
                      <h4 className="mt-2 text-lg font-semibold">
                        {alert.title}
                      </h4>
                    </div>
                    <StatusBadge
                      tone={
                        alert.risk === "High"
                          ? "anomaly"
                          : alert.risk === "Medium"
                            ? "drift"
                            : "normal"
                      }
                    >
                      {alert.risk}
                    </StatusBadge>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {alert.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3 text-sm">
                    <Button type="button">Verify user</Button>
                    <Button type="button" variant="secondary">
                      Lock system
                    </Button>
                    <Button type="button" variant="secondary">
                      Ignore alert
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="rounded-[30px] border p-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
                  Response playbook
                </p>
                <h3 className="mt-2 text-xl font-semibold">
                  Recommended escalation path
                </h3>
              </div>
              <StatusBadge tone="info">Policy-assisted</StatusBadge>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Verify user",
                  detail:
                    "Dispatch a secondary check to the active user before forcing containment.",
                },
                {
                  title: "Lock system",
                  detail:
                    "Pause the workstation and block the session from continuing.",
                },
                {
                  title: "SOC review",
                  detail:
                    "Assign the event to an analyst with session context and recent activity history.",
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
                  <h4 className="font-semibold">{item.title}</h4>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        <div className="grid gap-6">
          <MobileAlertPreview />
          <ActivityTimeline
            title="Notification feed"
            subtitle="Recent alert and response system events"
            items={liveFeed}
          />
        </div>
      </div>
    </AppShell>
  );
}
