import type { ReactNode } from "react";
import { ArrowUpRight, ShieldCheck, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Panel, ProgressBar, SectionLabel, StatusBadge } from "./ui";

type Series = {
  label: string;
  values: number[];
  color: string;
};

function buildLinePoints(values: number[], width: number, height: number) {
  const maxValue = Math.max(...values);
  const minValue = Math.min(...values);
  const span = maxValue - minValue || 1;

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const normalized = (value - minValue) / span;
      const y = height - normalized * height;
      return `${x},${y}`;
    })
    .join(" ");
}

export function TrendChart({
  title,
  subtitle,
  series,
}: {
  title: string;
  subtitle: string;
  series: Series[];
}) {
  const width = 420;
  const height = 170;

  return (
    <Panel className="rounded-[30px] border p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
            {title}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{subtitle}</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {series.map((line) => (
            <div
              key={line.label}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs"
              style={{ borderColor: "var(--border)" }}
            >
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ background: line.color }}
              />
              <span>{line.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="mt-6 rounded-[24px] border p-4"
        style={{
          borderColor: "var(--border)",
          background: "var(--card-soft)",
        }}
      >
        <svg viewBox={`0 0 ${width} ${height}`} className="h-44 w-full">
          {[0, 1, 2, 3].map((step) => (
            <line
              key={step}
              x1="0"
              y1={(height / 3) * step}
              x2={width}
              y2={(height / 3) * step}
              stroke="var(--grid)"
              strokeWidth="1"
            />
          ))}
          {series.map((line) => (
            <polyline
              key={line.label}
              fill="none"
              stroke={line.color}
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={buildLinePoints(line.values, width, height)}
            />
          ))}
        </svg>
        <div className="mt-4 flex items-center justify-between text-xs text-muted">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </div>
    </Panel>
  );
}

export function RiskGauge({
  value,
  title,
  description,
  footer,
}: {
  value: number;
  title: string;
  description: string;
  footer: ReactNode;
}) {
  return (
    <Panel className="rounded-[30px] border p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
            {title}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{description}</h3>
        </div>
        <StatusBadge
          tone={value > 75 ? "anomaly" : value > 45 ? "drift" : "normal"}
        >
          {value > 75 ? "High risk" : value > 45 ? "Drift watch" : "Stable"}
        </StatusBadge>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-6">
        <div
          className="relative flex h-52 w-52 items-center justify-center rounded-full"
          style={{
            background: `conic-gradient(var(--accent) ${value * 3.6}deg, var(--track-strong) 0deg)`,
          }}
        >
          <div
            className="absolute inset-4 rounded-full border"
            style={{
              borderColor: "var(--border)",
              background: "var(--card-strong)",
            }}
          />
          <div className="relative text-center">
            <div className="metric-value text-5xl font-semibold">{value}</div>
            <div className="mt-2 mono text-xs uppercase tracking-[0.24em] text-muted">
              Risk score
            </div>
          </div>
        </div>
        <div
          className="w-full rounded-[24px] border p-4"
          style={{ borderColor: "var(--border)" }}
        >
          {footer}
        </div>
      </div>
    </Panel>
  );
}

export function HeatmapPanel({
  title,
  subtitle,
  values,
}: {
  title: string;
  subtitle: string;
  values: readonly (readonly number[])[];
}) {
  return (
    <Panel className="rounded-[30px] border p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
            {title}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{subtitle}</h3>
        </div>
        <StatusBadge tone="info">Sensor map</StatusBadge>
      </div>
      <div
        className="mt-6 grid gap-2 rounded-[24px] border p-4"
        style={{ borderColor: "var(--border)", background: "var(--card-soft)" }}
      >
        {values.map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-8 gap-2">
            {row.map((value, columnIndex) => (
              <div
                key={`${rowIndex}-${columnIndex}`}
                className="aspect-square rounded-xl"
                style={{
                  background: "var(--accent)",
                  opacity: 0.14 + value * 0.86,
                }}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-muted">
        <span>Left screen edge</span>
        <span>High concentration</span>
        <span>Right screen edge</span>
      </div>
    </Panel>
  );
}

export function SpikeBars({
  title,
  subtitle,
  values,
}: {
  title: string;
  subtitle: string;
  values: number[];
}) {
  const maxValue = Math.max(...values);

  return (
    <Panel className="rounded-[30px] border p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
            {title}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{subtitle}</h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-accent" />
      </div>
      <div
        className="mt-6 flex h-56 items-end gap-2 rounded-[24px] border px-4 py-5"
        style={{
          borderColor: "var(--border)",
          background: "var(--card-soft)",
        }}
      >
        {values.map((value, index) => (
          <div key={index} className="flex flex-1 flex-col items-center gap-3">
            <div
              className="w-full rounded-t-2xl"
              style={{
                height: `${42 + (value / maxValue) * 140}px`,
                background:
                  index === values.length - 1 || value > maxValue * 0.8
                    ? "var(--accent)"
                    : "var(--track-strong)",
              }}
            />
            <span className="mono text-[10px] uppercase tracking-[0.24em] text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function ActivityTimeline({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: readonly {
    time: string;
    title: string;
    detail: string;
    status: string;
  }[];
}) {
  return (
    <Panel className="rounded-[30px] border p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
            {title}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{subtitle}</h3>
        </div>
        <StatusBadge tone="info">Streaming</StatusBadge>
      </div>
      <div className="mt-6 space-y-4">
        {items.map((item) => {
          const tone =
            item.status === "anomaly"
              ? "anomaly"
              : item.status === "drift"
                ? "drift"
                : "normal";

          return (
            <div
              key={`${item.time}-${item.title}`}
              className="rounded-[22px] border p-4"
              style={{
                borderColor: "var(--border)",
                background: "var(--card-soft)",
              }}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                    {item.time}
                  </p>
                  <h4 className="mt-2 font-semibold">{item.title}</h4>
                </div>
                <StatusBadge tone={tone}>{item.status}</StatusBadge>
              </div>
              <p className="mt-3 text-sm text-muted">{item.detail}</p>
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

export function ComparisonBars({
  title,
  subtitle,
  rows,
}: {
  title: string;
  subtitle: string;
  rows: readonly {
    label: string;
    baseline: number;
    current: number;
  }[];
}) {
  return (
    <Panel className="rounded-[30px] border p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
            {title}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{subtitle}</h3>
        </div>
        <StatusBadge tone="drift">Baseline vs live</StatusBadge>
      </div>
      <div className="mt-6 space-y-5">
        {rows.map((row) => (
          <div key={row.label} className="space-y-3">
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="font-medium">{row.label}</span>
              <span className="mono text-muted">
                {row.baseline}% / {row.current}%
              </span>
            </div>
            <div className="space-y-2">
              <div
                className="h-2 rounded-full"
                style={{ background: "var(--track-strong)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${row.baseline}%`,
                    background: "var(--info)",
                  }}
                />
              </div>
              <div
                className="h-2 rounded-full"
                style={{ background: "var(--track-strong)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${row.current}%`,
                    background: "var(--accent)",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function DriftFlowCard() {
  const states = [
    {
      label: "Normal",
      description: "Trusted behavioral profile",
      active: true,
    },
    {
      label: "Drift",
      description: "Investigate behavioral shift",
      active: true,
    },
    {
      label: "Anomaly",
      description: "Escalate response action",
      active: false,
    },
  ];

  return (
    <Panel className="rounded-[30px] border p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
            Drift state
          </p>
          <h3 className="mt-2 text-xl font-semibold">
            Normal to anomaly state flow
          </h3>
        </div>
        <ShieldCheck className="h-5 w-5 text-accent" />
      </div>
      <div className="mt-8 flex flex-col gap-4 lg:flex-row">
        {states.map((state, index) => (
          <div key={state.label} className="flex flex-1 items-center gap-4">
            <div
              className="flex-1 rounded-[24px] border p-4"
              style={{
                borderColor: state.active
                  ? "var(--border-strong)"
                  : "var(--border)",
                background: state.active
                  ? "var(--accent-soft)"
                  : "var(--card-soft)",
              }}
            >
              <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                {state.label}
              </p>
              <p className="mt-2 text-sm">{state.description}</p>
            </div>
            {index < states.length - 1 ? (
              <div
                className="hidden h-px flex-1 lg:block"
                style={{
                  background:
                    "linear-gradient(90deg, var(--accent), transparent)",
                }}
              />
            ) : null}
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function WeightBars({
  title,
  subtitle,
  weights,
}: {
  title: string;
  subtitle: string;
  weights: readonly {
    label: string;
    value: number;
  }[];
}) {
  return (
    <Panel className="rounded-[30px] border p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
            {title}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{subtitle}</h3>
        </div>
        <StatusBadge tone="info">Adaptive weighting</StatusBadge>
      </div>
      <div className="mt-6 space-y-5">
        {weights.map((weight) => (
          <ProgressBar
            key={weight.label}
            label={weight.label}
            value={weight.value}
          />
        ))}
      </div>
    </Panel>
  );
}

export function MobileAlertPreview() {
  return (
    <Panel className="rounded-[30px] border p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
            Mobile response
          </p>
          <h3 className="mt-2 text-xl font-semibold">On-call alert preview</h3>
        </div>
        <TriangleAlert className="h-5 w-5 text-accent" />
      </div>

      <div className="mt-8 flex justify-center">
        <div
          className="w-full max-w-[320px] rounded-[38px] border p-4"
          style={{
            borderColor: "var(--border-strong)",
            background: "var(--card-strong)",
          }}
        >
          <div className="mb-4 flex justify-center">
            <div
              className="h-1.5 w-20 rounded-full"
              style={{ background: "var(--track-strong)" }}
            />
          </div>
          <div
            className="rounded-[28px] border p-5"
            style={{
              borderColor: "rgba(255, 122, 89, 0.3)",
              background: "rgba(255, 122, 89, 0.1)",
            }}
          >
            <StatusBadge tone="anomaly">High risk</StatusBadge>
            <h4 className="mt-4 text-lg font-semibold">
              Suspicious activity detected on `RPT-004`
            </h4>
            <p className="mt-3 text-sm text-muted">
              Keyboard cadence shifted 31%, mouse heatmap changed cluster, and
              outbound traffic spiked.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <Button type="button" className="w-full">
                Verify
              </Button>
              <Button type="button" variant="secondary" className="w-full">
                Lock
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}

export function HeroSignalBoard() {
  return (
    <Panel
      className="grid-surface relative min-h-[520px] overflow-hidden rounded-[36px] border p-6 md:p-8"
      tone="strong"
    >
      <div className="scanline" />
      <div
        className="absolute -left-20 top-10 h-48 w-48 rounded-full blur-3xl"
        style={{ background: "var(--accent-glow)" }}
      />
      <div className="relative z-10 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <div className="panel panel-soft rounded-[28px] border p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <SectionLabel>Live behavioral telemetry</SectionLabel>
                <h3 className="mt-4 text-2xl font-semibold">
                  Real-time anomaly detection engine
                </h3>
              </div>
              <StatusBadge tone="normal">Synced</StatusBadge>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Mouse", value: "79.4%" },
                { label: "Keyboard", value: "91.2%" },
                { label: "Network", value: "64.8%" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border p-4"
                  style={{
                    borderColor: "var(--border)",
                    background: "var(--card-strong)",
                  }}
                >
                  <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                    {item.label}
                  </p>
                  <p className="metric-value mt-4 text-2xl font-semibold">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="mt-6 rounded-[28px] border p-4"
              style={{
                borderColor: "var(--border)",
                background: "var(--card-strong)",
              }}
            >
              <svg viewBox="0 0 400 150" className="h-36 w-full">
                {[0, 1, 2, 3].map((step) => (
                  <line
                    key={step}
                    x1="0"
                    y1={step * 40}
                    x2="400"
                    y2={step * 40}
                    stroke="var(--grid)"
                    strokeWidth="1"
                  />
                ))}
                <polyline
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="0,120 45,114 90,108 135,94 180,86 225,72 270,58 315,70 360,46 400,28"
                />
                <polyline
                  fill="none"
                  stroke="var(--success)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="0,108 45,106 90,102 135,98 180,94 225,82 270,80 315,74 360,62 400,60"
                />
              </svg>
              <div className="mt-3 flex items-center justify-between text-xs text-muted">
                <span>Live risk drift</span>
                <span className="mono">Confidence 96.8%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="panel panel-soft rounded-[28px] border p-5">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                  User persona score
                </p>
                <p className="metric-value mt-4 text-5xl font-semibold">94.2</p>
              </div>
              <div
                className="animate-float-slow rounded-full border px-4 py-3"
                style={{
                  borderColor: "var(--border-strong)",
                  background: "var(--accent-soft)",
                }}
              >
                <span className="mono text-xs uppercase tracking-[0.22em]">
                  Trusted identity
                </span>
              </div>
            </div>
            <div
              className="mt-6 h-3 rounded-full"
              style={{ background: "var(--track-strong)" }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: "94%", background: "var(--accent)" }}
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Mouse heatmap",
                value: "Cluster stable",
              },
              {
                title: "Keyboard dwell",
                value: "+5ms variance",
              },
              {
                title: "Network behavior",
                value: "2 unusual bursts",
              },
              {
                title: "System focus",
                value: "1 lateral hop",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="panel panel-soft rounded-[24px] border p-4"
                style={{
                  transform:
                    index % 2 === 0 ? "translateY(0px)" : "translateY(10px)",
                }}
              >
                <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                  {item.title}
                </p>
                <p className="mt-4 text-lg font-semibold">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="panel panel-soft rounded-[28px] border p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="mono text-xs uppercase tracking-[0.24em] text-muted">
                  Response posture
                </p>
                <p className="mt-3 text-lg font-semibold">
                  Verification first. Lock on confidence spike.
                </p>
              </div>
              <ShieldCheck className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </Panel>
  );
}
