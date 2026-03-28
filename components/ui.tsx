import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type PanelTone = "default" | "strong" | "soft" | "inverse";
type StatusTone = "normal" | "drift" | "anomaly" | "info";

const statusToneClasses = {
  normal: "success",
  drift: "warning",
  anomaly: "danger",
  info: "info",
} as const;

export function Panel({
  className,
  tone = "default",
  children,
}: {
  className?: string;
  tone?: PanelTone;
  children: ReactNode;
}) {
  const toneClass =
    tone === "strong"
      ? "panel panel-strong"
      : tone === "soft"
        ? "panel panel-soft"
        : tone === "inverse"
          ? "panel panel-inverse"
          : "panel";

  return <Card className={cn(toneClass, className)}>{children}</Card>;
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return <span className="section-tag">{children}</span>;
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="space-y-4 px-1">
      <SectionLabel>{eyebrow}</SectionLabel>
      <div className="space-y-3">
        <h1 className="max-w-5xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
          {title}
        </h1>
        <p className="max-w-4xl text-base leading-8 text-muted md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <Button asChild variant={variant === "primary" ? "default" : "secondary"}>
      <Link href={href}>
        {children}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </Button>
  );
}

export function StatusBadge({
  tone,
  children,
}: {
  tone: StatusTone;
  children: ReactNode;
}) {
  return (
    <Badge
      variant={statusToneClasses[tone]}
      className="gap-2 rounded-md px-3 py-1.5"
    >
      <span className="h-2 w-2 rounded-full bg-current animate-pulse-soft" />
      {children}
    </Badge>
  );
}

export function MetricCard({
  label,
  value,
  detail,
  change,
  tone = "default",
  accent,
}: {
  label: string;
  value: string;
  detail: string;
  change?: string;
  tone?: PanelTone;
  accent?: ReactNode;
}) {
  return (
    <Panel
      tone={tone}
      className="rounded-[18px] border px-5 py-5 transition-transform duration-200 hover:-translate-y-0.5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="mono text-xs uppercase tracking-[0.28em] text-muted">
            {label}
          </p>
          <h3 className="metric-value mt-4 text-3xl font-semibold md:text-4xl">
            {value}
          </h3>
        </div>
        {accent ? <div className="text-accent">{accent}</div> : null}
      </div>
      <p className="mt-3 text-sm text-muted">{detail}</p>
      {change ? (
        <p className="mt-5 text-sm font-medium text-accent">{change}</p>
      ) : null}
    </Panel>
  );
}

export function ProgressBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-4 text-sm">
        <span className="font-medium">{label}</span>
        <span className="mono text-muted">{value}%</span>
      </div>
      <div
        className="h-2 rounded-full"
        style={{ background: "var(--track-strong)" }}
      >
        <div
          className="h-full rounded-full"
          style={{
            width: `${value}%`,
            background: "var(--accent)",
          }}
        />
      </div>
    </div>
  );
}
