import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-lg border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--accent)] text-[var(--accent-foreground)]",
        secondary:
          "bg-[var(--card-soft)] text-[var(--foreground)] [border-color:var(--border)]",
        outline:
          "bg-transparent text-[var(--foreground)] [border-color:var(--border)]",
        success:
          "[border-color:var(--success-border)] [background:var(--success-soft)] [color:var(--success-foreground)]",
        warning:
          "[border-color:var(--warning-border)] [background:var(--warning-soft)] [color:var(--warning-foreground)]",
        danger:
          "[border-color:var(--danger-border)] [background:var(--danger-soft)] [color:var(--danger-foreground)]",
        info: "[border-color:var(--info-border)] [background:var(--info-soft)] [color:var(--info-foreground)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof badgeVariants>) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
