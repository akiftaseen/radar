import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import {
  Bell,
  Brain,
  Compass,
  LayoutGrid,
  Menu,
  Radio,
  Search,
  Settings,
  Shield,
  Waypoints,
  X,
} from "lucide-react";
import { RadarWordmark } from "@/components/radar/logo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { BRAND, WORKSPACE } from "@/lib/data";
import { useRadarStore } from "@/lib/store";
import { cn, formatRelative } from "@/lib/utils";
import { CommandPalette } from "./command-palette";

const NAV = [
  { to: "/", label: "Radar", icon: Radio, exact: true },
  { to: "/map", label: "Map", icon: Waypoints },
  { to: "/campaigns", label: "Campaigns", icon: LayoutGrid },
  { to: "/brand", label: "Brand Brain", icon: Brain },
  { to: "/sources", label: "Sources", icon: Compass },
  { to: "/analytics", label: "Analytics", icon: Shield },
];

function usePath() {
  return useRouterState({ select: (s) => s.location.pathname });
}

function isActive(path: string, to: string, exact?: boolean) {
  if (exact) return path === "/";
  return path === to || path.startsWith(`${to}/`);
}

export function AppShell() {
  const path = usePath();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cmdOpen, setCmdOpen] = useState(false);
  const setHydrated = useRadarStore((s) => s.setHydrated);
  const notifications = useRadarStore((s) => s.notifications);
  const markRead = useRadarStore((s) => s.markNotificationRead);
  const unread = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    void useRadarStore.persist.rehydrate();
    setHydrated(true);
  }, [setHydrated]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCmdOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [path]);

  return (
    <TooltipProvider delayDuration={250}>
      <div className="min-h-dvh bg-bg text-fg">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>
        <div className="flex min-h-dvh">
          <aside className="sticky top-0 hidden h-dvh w-56 shrink-0 flex-col border-r border-border bg-bg lg:flex">
            <div className="flex h-14 items-center px-4">
              <Link to="/" className="flex items-center">
                <RadarWordmark />
              </Link>
            </div>
            <nav className="flex flex-1 flex-col gap-0.5 px-2 py-2">
              {NAV.map((item) => {
                const Icon = item.icon;
                const active = isActive(path, item.to, item.exact);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={cn(
                      "flex h-10 items-center gap-2.5 rounded-sm px-3 text-sm transition-colors",
                      active ? "bg-surface-2 text-fg" : "text-muted hover:bg-surface hover:text-fg",
                    )}
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <div className="border-t border-border p-3">
              <Link
                to="/settings"
                className={cn(
                  "flex h-10 items-center gap-2.5 rounded-sm px-3 text-sm",
                  path.startsWith("/settings") ? "bg-surface-2 text-fg" : "text-muted hover:text-fg",
                )}
              >
                <Settings className="size-4" />
                Settings
              </Link>
              <div className="mt-2 px-3 text-[11px] leading-relaxed text-subtle">
                {WORKSPACE.name}
                <br />
                {BRAND.name} · v{BRAND.brainVersion}
              </div>
            </div>
          </aside>

          <div className="flex min-w-0 flex-1 flex-col">
            <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b border-border bg-bg/90 px-3 backdrop-blur-sm lg:px-6">
              <Button
                variant="ghost"
                size="icon-sm"
                className="lg:hidden"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
              <Link to="/" className="lg:hidden">
                <RadarWordmark compact />
              </Link>
              <div className="hidden items-center gap-2 lg:flex">
                <span className="text-sm text-fg">{BRAND.name}</span>
                <span className="text-subtle">/</span>
                <span className="text-sm text-muted">
                  {BRAND.markets.join(" · ")} · {BRAND.category}
                </span>
              </div>
              <div className="ml-auto flex items-center gap-1.5">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      onClick={() => setCmdOpen(true)}
                      className="hidden h-9 items-center gap-2 rounded-sm border border-border bg-surface px-3 text-xs text-muted md:flex"
                    >
                      <Search className="size-3.5" />
                      Search
                      <kbd className="ml-6 font-mono text-[10px] text-subtle">⌘K</kbd>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>Command palette</TooltipContent>
                </Tooltip>
                <Button
                  variant="ghost"
                  size="icon-sm"
                  className="md:hidden"
                  onClick={() => setCmdOpen(true)}
                  aria-label="Search"
                >
                  <Search className="size-4" />
                </Button>
                <div className="hidden items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-[11px] text-muted sm:flex">
                  <span className="size-1.5 rounded-full bg-success" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
                  Scan · 2h
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon-sm" aria-label="Notifications" className="relative">
                      <Bell className="size-4" />
                      {unread > 0 && (
                        <span className="absolute right-1.5 top-1.5 size-1.5 rounded-full bg-priority" />
                      )}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-80">
                    <DropdownMenuLabel>Inbox</DropdownMenuLabel>
                    {notifications.map((n) => (
                      <DropdownMenuItem
                        key={n.id}
                        onSelect={() => {
                          markRead(n.id);
                          void navigate({ to: n.href as never });
                        }}
                        className="flex flex-col items-start gap-0.5 py-2"
                      >
                        <span className="flex w-full items-center justify-between">
                          <span className={cn("text-sm", n.read ? "text-muted" : "text-fg")}>{n.title}</span>
                          {!n.read && <Badge variant="priority">New</Badge>}
                        </span>
                        <span className="text-xs text-subtle">
                          {n.body} · {formatRelative(n.at)}
                        </span>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                <div className="ml-1 flex size-8 items-center justify-center rounded-full bg-surface-3 text-xs font-medium">
                  MC
                </div>
              </div>
            </header>

            <main id="main" className="flex-1 pb-20 lg:pb-0">
              <Outlet />
            </main>
          </div>
        </div>

        <nav className="fixed inset-x-0 bottom-0 z-30 flex border-t border-border bg-bg/95 lg:hidden">
          {NAV.slice(0, 5).map((item) => {
            const Icon = item.icon;
            const active = isActive(path, item.to, item.exact);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex h-14 min-h-11 flex-1 flex-col items-center justify-center gap-0.5 text-[10px]",
                  active ? "text-fg" : "text-muted",
                )}
              >
                <Icon className="size-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {menuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <button
              type="button"
              className="absolute inset-0 bg-bg/70"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            />
            <div className="absolute left-0 top-0 flex h-full w-72 flex-col border-r border-border bg-surface p-4">
              <div className="mb-4 flex items-center justify-between">
                <RadarWordmark />
                <Button variant="ghost" size="icon-sm" onClick={() => setMenuOpen(false)} aria-label="Close">
                  <X className="size-4" />
                </Button>
              </div>
              {NAV.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex h-11 items-center gap-2 rounded-sm px-2 text-sm text-fg"
                  >
                    <Icon className="size-4" />
                    {item.label}
                  </Link>
                );
              })}
              <Link to="/settings" className="flex h-11 items-center gap-2 rounded-sm px-2 text-sm text-muted">
                <Settings className="size-4" />
                Settings
              </Link>
            </div>
          </div>
        )}

        <CommandPalette open={cmdOpen} onOpenChange={setCmdOpen} />
      </div>
    </TooltipProvider>
  );
}
