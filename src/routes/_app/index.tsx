import { createFileRoute } from "@tanstack/react-router";
import { Inbox } from "@/components/radar/inbox";

export const Route = createFileRoute("/_app/")({
  component: Inbox,
});
