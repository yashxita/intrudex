import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-12 w-full rounded-lg border bg-[var(--card-soft)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[var(--muted)]",
        "[border-color:var(--border)] focus:[border-color:var(--border-strong)] focus:[box-shadow:0_0_0_4px_var(--accent-soft)]",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
