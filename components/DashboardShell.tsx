"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  Bell,
  BookOpen,
  Boxes,
  ChartColumn,
  CheckCircle2,
  CreditCard,
  KeyRound,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  ScanSearch,
  ScrollText,
  Settings,
  Sparkles,
  Users,
  Wallet,
  X,
} from "lucide-react";
import { api, cx, formatINR } from "@/lib/api";
import { Logo } from "./Logo";
import { Badge, IconButton, useToast } from "./ui";

export interface Me {
  user: { id: string; email: string; name: string; role: string };
  balancePaise: number;
  plan: { slug: string; name: string; freeRpm: number; queuePriority: number } | null;
  astra: { active: boolean; expiresAt: string | null };
}

interface SessionState {
  me: Me | null;
  loading: boolean;
  refresh: () => Promise<void>;
}

const SessionCtx = createContext<SessionState>({ me: null, loading: true, refresh: async () => {} });
export function useSession() {
  return useContext(SessionCtx);
}

export function SessionProvider({ children }: { children: ReactNode }) {
  const [me, setMe] = useState<Me | null>(null);
  const [loading, setLoading] = useState(true);
  const refresh = useCallback(async () => {
    try {
      const data = await api<Me>("/auth/me");
      setMe(data.user ? data : null);
    } catch {
      setMe(null);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    void refresh();
  }, [refresh]);
  return <SessionCtx.Provider value={{ me, loading, refresh }}>{children}</SessionCtx.Provider>;
}

const nav = [
  { section: "Overview", items: [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/chat", label: "Playground", icon: MessageSquare },
    { href: "/models", label: "Models", icon: Boxes },
  ]},
  { section: "Build", items: [
    { href: "/dashboard/keys", label: "API Keys", icon: KeyRound },
    { href: "/dashboard/activity", label: "Activity", icon: ScrollText },
    { href: "/dashboard/usage", label: "Usage", icon: ChartColumn },
    { href: "/dashboard/inspector", label: "Inspector", icon: ScanSearch },
  ]},
  { section: "Money", items: [
    { href: "/dashboard/wallet", label: "Wallet", icon: Wallet },
    { href: "/pricing", label: "Billing & Plans", icon: CreditCard },
    { href: "/dashboard/referrals", label: "Referrals", icon: Users },
    { href: "/dashboard/astra", label: "Astra", icon: Sparkles },
  ]},
  { section: "Account", items: [
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
    { href: "/docs", label: "Documentation", icon: BookOpen },
  ]},
];

type NavItem = (typeof nav)[number]["items"][number];

function isActivePath(pathname: string, href: string): boolean {
  return href === "/dashboard" ? pathname === "/dashboard" : pathname === href || pathname.startsWith(`${href}/`);
}

function NavLink({ item, pathname, onNavigate }: { item: NavItem; pathname: string; onNavigate?: () => void }) {
  const active = isActivePath(pathname, item.href);
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cx(
        "group relative flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13.5px] transition-colors duration-200",
        active ? "bg-white/[0.06] text-fg" : "text-mut hover:bg-white/[0.04] hover:text-fg",
      )}
    >
      <span aria-hidden="true" className={cx("absolute left-0 top-1/2 h-3.5 w-0.5 -translate-y-1/2 rounded-full transition-colors duration-200", active ? "bg-accent" : "bg-transparent")} />
      <Icon className={cx("size-4 shrink-0 transition-colors duration-200", active ? "text-accent" : "text-mut2 group-hover:text-mut")} strokeWidth={1.75} aria-hidden="true" />
      {item.label}
    </Link>
  );
}

export function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const toast = useToast();
  const { me, loading, refresh } = useSession();
  const [drawer, setDrawer] = useState(false);
  const [notifs, setNotifs] = useState<Array<{ id: string; title: string; body: string; readAt: string | null }>>([]);
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  useEffect(() => setDrawer(false), [pathname]);

  useEffect(() => {
    if (!me) return;
    api<{ items: typeof notifs }>("/notifications").then((d) => setNotifs(d.items)).catch(() => {});
  }, [me?.user.id]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) setNotifOpen(false);
      if (userRef.current && !userRef.current.contains(e.target as Node)) setUserOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setNotifOpen(false);
        setUserOpen(false);
        setDrawer(false);
      }
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  async function logout() {
    await api("/auth/logout", { method: "POST" });
    toast.push("Signed out.");
    router.push("/");
    router.refresh();
  }

  const unread = notifs.filter((n) => !n.readAt).length;
  const initials = (me?.user.name?.trim() || me?.user.email || "?").split(/\s+/).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  const current = nav.flatMap((s) => s.items.map((i) => ({ ...i, section: s.section }))).find((i) => isActivePath(pathname, i.href));

  return (
    <div className="min-h-screen bg-ink">
      {/* Sidebar (desktop) */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-line bg-ink2 lg:flex">
        <div className="flex h-14 items-center border-b border-line px-4">
          <Logo />
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Dashboard">
          {nav.map((s) => (
            <div key={s.section} className="mb-5">
              <div className="mb-1.5 px-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mut2">{s.section}</div>
              <div className="space-y-0.5">
                {s.items.map((item) => (
                  <NavLink key={item.href} item={item} pathname={pathname} />
                ))}
              </div>
            </div>
          ))}
        </nav>
        <div className="border-t border-line p-3">
          <div className="rounded-lg border border-line bg-panel px-3 py-2.5">
            <div className="text-[11px] text-mut2">Wallet balance</div>
            <div className="font-mono text-[15px] font-semibold tabular-nums text-fg">{me ? formatINR(me.balancePaise) : "—"}</div>
            <Link href="/dashboard/wallet" className="mt-1 inline-flex items-center gap-1 text-[12px] text-accent transition-colors duration-200 hover:text-accent2">
              Add credits <ArrowUpRight className="size-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile drawer */}
      {drawer && (
        <div className="fixed inset-0 z-40 lg:hidden" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="absolute inset-0 bg-scrim" onClick={() => setDrawer(false)} aria-hidden="true" />
          <div className="fade-up absolute inset-y-0 left-0 flex w-72 flex-col overflow-y-auto border-r border-line bg-ink2">
            <div className="flex h-14 items-center justify-between border-b border-line px-4">
              <Logo />
              <IconButton label="Close menu" size="sm" onClick={() => setDrawer(false)}>
                <X className="size-4" aria-hidden="true" />
              </IconButton>
            </div>
            <nav className="flex-1 px-3 py-4" aria-label="Dashboard">
              {nav.map((s) => (
                <div key={s.section} className="mb-5">
                  <div className="mb-1.5 px-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-mut2">{s.section}</div>
                  <div className="space-y-0.5">
                    {s.items.map((item) => (
                      <NavLink key={item.href} item={item} pathname={pathname} onNavigate={() => setDrawer(false)} />
                    ))}
                  </div>
                </div>
              ))}
            </nav>
            <div className="space-y-3 border-t border-line p-3">
              <div className="rounded-lg border border-line bg-panel px-3 py-2.5">
                <div className="text-[11px] text-mut2">Wallet balance</div>
                <div className="font-mono text-[15px] font-semibold tabular-nums text-fg">{me ? formatINR(me.balancePaise) : "—"}</div>
              </div>
              <button onClick={logout} className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg border border-line2 px-3 py-2 text-[13px] text-mut transition-colors duration-200 hover:bg-white/[0.06] hover:text-fg">
                <LogOut className="size-4" aria-hidden="true" /> Sign out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main */}
      <div className="lg:pl-60">
        <header className="sticky top-0 z-20 border-b border-line bg-ink/85 backdrop-blur-xl">
          <div className="flex h-14 items-center justify-between gap-3 px-4">
            <div className="flex min-w-0 items-center gap-3">
              <IconButton label="Open menu" className="lg:hidden" onClick={() => setDrawer(true)}>
                <Menu className="size-5" aria-hidden="true" />
              </IconButton>
              {current && (
                <div className="hidden min-w-0 items-center gap-2 text-[13px] sm:flex">
                  <span className="text-mut2">{current.section}</span>
                  <span className="text-mut2" aria-hidden="true">/</span>
                  <span className="truncate font-medium text-fg">{current.label}</span>
                </div>
              )}
              <div className="hidden items-center gap-2 xl:flex">
                {me?.plan && <Badge tone="neutral">{me.plan.name} plan</Badge>}
                {me?.astra.active && (
                  <Badge tone="accent">
                    <Sparkles className="size-3" aria-hidden="true" />
                    Astra · {me.astra.expiresAt ? `${Math.max(0, Math.ceil((new Date(me.astra.expiresAt).getTime() - Date.now()) / 86400000))}d left` : "active"}
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Link href="/dashboard/wallet" className="hidden h-9 items-center rounded-lg border border-line px-3 font-mono text-[12.5px] tabular-nums text-fg transition-colors duration-200 hover:bg-white/[0.06] sm:inline-flex">
                {me ? formatINR(me.balancePaise) : "—"}
              </Link>
              <div className="relative" ref={notifRef}>
                <IconButton
                  label={unread > 0 ? `Notifications (${unread} unread)` : "Notifications"}
                  aria-expanded={notifOpen}
                  onClick={() => {
                    setNotifOpen((o) => !o);
                    if (!notifOpen && unread) {
                      void api("/notifications/read", { method: "POST" })
                        .then(() => setNotifs((n) => n.map((x) => ({ ...x, readAt: x.readAt ?? new Date().toISOString() }))))
                        .catch(() => {});
                    }
                  }}
                >
                  <span className="relative">
                    <Bell className="size-4" aria-hidden="true" />
                    {unread > 0 && <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-accent" aria-hidden="true" />}
                  </span>
                </IconButton>
                {notifOpen && (
                  <div className="fade-up absolute right-0 top-11 z-30 w-80 rounded-xl border border-line2 bg-panel shadow-xl">
                    <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
                      <span className="text-[13px] font-semibold">Notifications</span>
                      {unread > 0 && <span className="font-mono text-[11px] text-accent">{unread} unread</span>}
                    </div>
                    <div className="max-h-80 overflow-y-auto p-1.5">
                      {notifs.length === 0 ? (
                        <div className="flex flex-col items-center gap-2 px-3 py-8 text-center text-[13px] text-mut">
                          <CheckCircle2 className="size-5 text-good" aria-hidden="true" />
                          You&apos;re all caught up.
                        </div>
                      ) : (
                        notifs.slice(0, 8).map((n) => (
                          <div key={n.id} className="rounded-lg px-3 py-2 transition-colors duration-200 hover:bg-white/[0.04]">
                            <div className="flex items-center gap-2 text-[13px] font-medium">
                              {!n.readAt && <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />}
                              {n.title}
                            </div>
                            <div className="mt-0.5 text-[12px] leading-relaxed text-mut">{n.body}</div>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="relative" ref={userRef}>
                <button
                  onClick={() => setUserOpen((o) => !o)}
                  aria-expanded={userOpen}
                  aria-label="Account menu"
                  className="flex cursor-pointer items-center gap-2 rounded-lg p-1 pl-1.5 transition-colors duration-200 hover:bg-white/[0.06] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  <span className="hidden max-w-[140px] truncate text-[13px] text-mut md:block">{me?.user.name || me?.user.email}</span>
                  <span className="flex size-7 items-center justify-center rounded-md border border-accent/30 bg-accent/10 font-mono text-[11px] font-semibold text-accent">{initials}</span>
                </button>
                {userOpen && (
                  <div className="fade-up absolute right-0 top-11 z-30 w-60 rounded-xl border border-line2 bg-panel shadow-xl">
                    <div className="border-b border-line px-4 py-3">
                      <div className="truncate text-[13px] font-medium">{me?.user.name || "Account"}</div>
                      <div className="truncate text-[12px] text-mut2">{me?.user.email}</div>
                    </div>
                    <div className="p-1.5">
                      <Link href="/dashboard/settings" onClick={() => setUserOpen(false)} className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] text-mut transition-colors duration-200 hover:bg-white/[0.05] hover:text-fg">
                        <Settings className="size-4" strokeWidth={1.75} aria-hidden="true" /> Settings
                      </Link>
                      <Link href="/dashboard/wallet" onClick={() => setUserOpen(false)} className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] text-mut transition-colors duration-200 hover:bg-white/[0.05] hover:text-fg">
                        <Wallet className="size-4" strokeWidth={1.75} aria-hidden="true" /> Wallet
                      </Link>
                      <button onClick={logout} className="flex w-full cursor-pointer items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[13px] text-mut transition-colors duration-200 hover:bg-white/[0.05] hover:text-fg">
                        <LogOut className="size-4" strokeWidth={1.75} aria-hidden="true" /> Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          {loading ? (
            <div className="space-y-4">
              <div className="h-8 w-52 animate-pulse rounded-lg bg-white/[0.05]" />
              <div className="h-40 animate-pulse rounded-xl bg-white/[0.04]" />
            </div>
          ) : !me ? (
            <div className="mx-auto max-w-md rounded-xl border border-line bg-panel p-8 text-center">
              <h2 className="text-lg font-semibold">Sign in required</h2>
              <p className="mt-2 text-sm text-mut">You need to be signed in to access the dashboard.</p>
              <Link href="/login" className="mt-5 inline-flex h-10 items-center rounded-lg bg-accent px-5 text-sm font-medium text-accent-ink transition-colors duration-200 hover:bg-accent2">
                Sign in
              </Link>
            </div>
          ) : (
            children
          )}
        </main>
      </div>
    </div>
  );
}
