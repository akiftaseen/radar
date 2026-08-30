import type { HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-surface-3 text-muted",
        fg: "bg-fg text-bg",
        priority: "bg-priority/15 text-priority",
        confidence: "bg-confidence/15 text-confidence",
        success: "bg-success/15 text-success",
        danger: "bg-danger/15 text-danger",
        warning: "bg-warning/15 text-warning",
        outline: "border border-border text-muted",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
