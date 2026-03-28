import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border border-transparent [background:var(--accent)] [color:var(--accent-foreground)] hover:-translate-y-0.5",
        secondary:
          "border [background:var(--card-soft)] [color:var(--foreground)] [border-color:var(--border)] hover:-translate-y-0.5 hover:[border-color:var(--border-strong)]",
        outline:
          "border bg-transparent [color:var(--foreground)] [border-color:var(--border)] hover:[background:var(--card-soft)]",
        ghost:
          "[color:var(--foreground)] hover:[background:var(--accent-soft)]",
      },
      size: {
        default: "h-11 px-5 py-2",
        sm: "h-9 px-3.5",
        lg: "h-12 px-6",
        icon: "size-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
