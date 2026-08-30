import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;
export const TabsList = ({ className, ...props }: React.ComponentProps<typeof TabsPrimitive.List>) => (
  <TabsPrimitive.List
    className={cn("flex gap-1 overflow-x-auto border-b border-border", className)}
    {...props}
  />
);
export const TabsTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) => (
  <TabsPrimitive.Trigger
    className={cn(
      "relative shrink-0 px-3 py-2.5 text-sm text-muted transition-colors hover:text-fg",
      "data-[state=active]:text-fg data-[state=active]:after:absolute data-[state=active]:after:inset-x-3 data-[state=active]:after:bottom-0 data-[state=active]:after:h-px data-[state=active]:after:bg-fg",
      className,
    )}
    {...props}
  />
);
export const TabsContent = ({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) => (
  <TabsPrimitive.Content className={cn("outline-none", className)} {...props} />
);
