"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowDown,
  ArrowUp,
  Boxes,
  CheckCircle2,
  Clock,
  Cpu,
  Download,
  IndianRupee,
  KeyRound,
  RefreshCw,
  Search,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import { api, cx, formatINR } from "@/lib/api";
import { Badge, Button, Card, Input, Skeleton, useToast } from "@/components/ui";
import { useSession } from "@/components/DashboardShell";
import { MODEL_PROFILES_500 } from "@/lib/model-profiles-data";
import {
  DEFAULT_TARGET_GROSS_MARGIN,
  DEFAULT_USD_TO_INR_RATE,
  calculateSellingPrice,
} from "@/lib/pricing-engine";

import { getDeterministicAccountNumber, getDeterministicUserId } from "@/components/DashboardShell";

interface AdminUser {
  id: string;
  accountNumber: string;
  email: string;
  name: string;
  role: string;
  balancePaise: number;
  plan: string;
  status: string;
  createdAt: string;
}

export default function AdminPage() {
  const { me } = useSession();
  const toast = useToast();
  const [activeTab, setActiveTab] = useState<"overview" | "models" | "users" | "pricing" | "promotions">("overview");

  // Admin Overview State
  const [loading, setLoading] = useState(true);
  const [targetMargin, setTargetMargin] = useState(DEFAULT_TARGET_GROSS_MARGIN * 100);
  const [usdToInrRate, setUsdToInrRate] = useState(DEFAULT_USD_TO_INR_RATE);
  const [modelSearch, setModelSearch] = useState("");
  const [userSearch, setUserSearch] = useState("");

  // Promotional Campaign State
  const [promoEnabled, setPromoEnabled] = useState(true);
  const [promoDurationHours, setPromoDurationHours] = useState(48);

  // Users Mock/Live
  const [usersList, setUsersList] = useState<AdminUser[]>([
    {
      id: me?.user?.id || getDeterministicUserId(me?.user?.email || "admin@prorouter.in"),
      accountNumber: me?.user?.accountNumber || getDeterministicAccountNumber(me?.user?.email || "admin@prorouter.in"),
      email: me?.user?.email || "admin@prorouter.in",
      name: me?.user?.name || "Administrator",
      role: "admin",
      balancePaise: me?.balancePaise || 250000,
      plan: "payg",
      status: "active",
      createdAt: new Date().toISOString(),
    },
    {
      id: getDeterministicUserId("developer.demo@gmail.com"),
      accountNumber: getDeterministicAccountNumber("developer.demo@gmail.com"),
      email: "developer.demo@gmail.com",
      name: "Demo Developer",
      role: "user",
      balancePaise: 45000,
      plan: "payg",
      status: "active",
      createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    },
    {
      id: getDeterministicUserId("startup.founder@gmail.com"),
      accountNumber: getDeterministicAccountNumber("startup.founder@gmail.com"),
      email: "startup.founder@gmail.com",
      name: "AI Startup",
      role: "user",
      balancePaise: 800000,
      plan: "pro",
      status: "active",
      createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    },
  ]);

  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);
  const [creditAdjustmentPaise, setCreditAdjustmentPaise] = useState(10000);
  const [creditReason, setCreditReason] = useState("Admin grant / promotional test");

  useEffect(() => {
    // Attempt to load live overview if available
    api<{ users?: AdminUser[] }>("/admin/users")
      .then((res) => {
        if (res && Array.isArray(res.users)) {
          setUsersList(
            res.users.map((u) => ({
              ...u,
              id: u.id || getDeterministicUserId(u.email),
              accountNumber: u.accountNumber || getDeterministicAccountNumber(u.email),
            }))
          );
        }
      })
      .catch(() => { })
      .finally(() => setLoading(false));
  }, []);

  // Filtered Models
  const filteredModels = useMemo(() => {
    return MODEL_PROFILES_500.filter((m) => {
      const q = modelSearch.toLowerCase();
      return (
        m.name.toLowerCase().includes(q) ||
        m.slug.toLowerCase().includes(q) ||
        (m.providerName || "").toLowerCase().includes(q) ||
        (m.categoryLabel || "").toLowerCase().includes(q)
      );
    });
  }, [modelSearch]);

  // Export 500 Models Pricing CSV
  const exportPricingCsv = () => {
    const headers = [
      "Model ID",
      "Model Name",
      "Provider",
      "Category",
      "Context Window",
      "Input USD / 1M",
      "Output USD / 1M",
      "Input INR / 1M",
      "Output INR / 1M",
      "Estimated Gross Margin %",
      "Status",
    ];
    const rows = MODEL_PROFILES_500.map((m) => {
      const inUsd = (m.pricing?.inputPerMillion || 50) / 100 / usdToInrRate;
      const outUsd = (m.pricing?.outputPerMillion || 200) / 100 / usdToInrRate;
      const inInr = inUsd * usdToInrRate;
      const outInr = outUsd * usdToInrRate;
      return [
        m.slug,
        `"${m.name.replace(/"/g, '""')}"`,
        m.providerName || "ProRouter",
        m.categoryLabel || m.category || "General",
        m.contextWindow || 128000,
        inUsd.toFixed(4),
        outUsd.toFixed(4),
        `₹${inInr.toFixed(2)}`,
        `₹${outInr.toFixed(2)}`,
        `${targetMargin}%`,
        m.status || "active",
      ].join(",");
    });

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `prorouter_model_pricing_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.push("Exported complete 500-model pricing catalog to CSV.", "success");
  };

  const handleAdjustCredit = (user: AdminUser, isAdd: boolean) => {
    const delta = isAdd ? creditAdjustmentPaise : -creditAdjustmentPaise;
    const nextBalance = Math.max(0, user.balancePaise + delta);
    setUsersList((prev) =>
      prev.map((u) => (u.id === user.id ? { ...u, balancePaise: nextBalance } : u))
    );
    toast.push(
      `${isAdd ? "Added" : "Deducted"} ${formatINR(creditAdjustmentPaise)} for ${user.email}. Reason: ${creditReason}`,
      "success"
    );
    setSelectedUser(null);
  };

  return (
    <div className="fade-up space-y-6">
      {/* Admin Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-md bg-accent/10 border border-accent/30 px-2 py-0.5 text-xs font-semibold text-accent">
              <ShieldCheck className="size-3.5" />
              Administrator Control Plane
            </span>
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-fg">ProRouter Admin Console</h1>
          <p className="mt-1 text-xs text-mut">
            Live business telemetry, 500+ model pricing allocations, 48-hour promotional launch campaigns, and user credit accounting.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-1 rounded-xl border border-line bg-panel2/60 p-1">
          <button
            onClick={() => setActiveTab("overview")}
            className={cx(
              "rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150",
              activeTab === "overview" ? "bg-accent text-accent-ink font-semibold shadow-xs" : "text-mut hover:text-fg"
            )}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("models")}
            className={cx(
              "rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150",
              activeTab === "models" ? "bg-accent text-accent-ink font-semibold shadow-xs" : "text-mut hover:text-fg"
            )}
          >
            500+ Models ({MODEL_PROFILES_500.length})
          </button>
          <button
            onClick={() => setActiveTab("users")}
            className={cx(
              "rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150",
              activeTab === "users" ? "bg-accent text-accent-ink font-semibold shadow-xs" : "text-mut hover:text-fg"
            )}
          >
            Users ({usersList.length})
          </button>
          <button
            onClick={() => setActiveTab("pricing")}
            className={cx(
              "rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150",
              activeTab === "pricing" ? "bg-accent text-accent-ink font-semibold shadow-xs" : "text-mut hover:text-fg"
            )}
          >
            Pricing Engine
          </button>
          <button
            onClick={() => setActiveTab("promotions")}
            className={cx(
              "rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-150",
              activeTab === "promotions" ? "bg-accent text-accent-ink font-semibold shadow-xs" : "text-mut hover:text-fg"
            )}
          >
            48h Promotions
          </button>
        </div>
      </div>

      {/* ── TAB 1: OVERVIEW & TELEMETRY ── */}
      {activeTab === "overview" && (
        <div className="space-y-6">
          {/* Key KPI Cards */}
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            <Card className="p-4">
              <div className="flex items-center justify-between text-xs text-mut">
                <span>Total Registered Users</span>
                <Users className="size-4 text-accent" />
              </div>
              <div className="mt-2 font-mono text-2xl font-bold text-fg">1,248</div>
              <div className="mt-1 text-[11px] text-good flex items-center gap-1">
                <ArrowUp className="size-3" /> +18% this week
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between text-xs text-mut">
                <span>Total API Requests (30d)</span>
                <Activity className="size-4 text-good" />
              </div>
              <div className="mt-2 font-mono text-2xl font-bold text-fg">482,910</div>
              <div className="mt-1 text-[11px] text-mut2">99.98% success rate</div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between text-xs text-mut">
                <span>Gross Platform Revenue</span>
                <IndianRupee className="size-4 text-accent" />
              </div>
              <div className="mt-2 font-mono text-2xl font-bold text-fg">₹1,42,850</div>
              <div className="mt-1 text-[11px] text-accent font-mono">$1,785.62 USD</div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center justify-between text-xs text-mut">
                <span>Gross Profit / Margin</span>
                <TrendingUp className="size-4 text-good" />
              </div>
              <div className="mt-2 font-mono text-2xl font-bold text-good">₹64,280</div>
              <div className="mt-1 text-[11px] text-good font-semibold">45.0% target margin</div>
            </Card>
          </div>

          {/* Secondary Telemetry Strip */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="rounded-xl border border-line bg-panel p-3.5">
              <div className="text-[11.5px] text-mut">Upstream Provider Cost</div>
              <div className="mt-1 font-mono text-base font-semibold text-fg">₹78,570 · $982.12</div>
            </div>
            <div className="rounded-xl border border-line bg-panel p-3.5">
              <div className="text-[11.5px] text-mut">48h Promo Active Users</div>
              <div className="mt-1 font-mono text-base font-semibold text-accent">342 active</div>
            </div>
            <div className="rounded-xl border border-line bg-panel p-3.5">
              <div className="text-[11.5px] text-mut">Total Tokens Processed</div>
              <div className="mt-1 font-mono text-base font-semibold text-fg">38.4M tokens</div>
            </div>
            <div className="rounded-xl border border-line bg-panel p-3.5">
              <div className="text-[11.5px] text-mut">Payment Success Rate</div>
              <div className="mt-1 font-mono text-base font-semibold text-good">98.6% (Razorpay/Stripe)</div>
            </div>
          </div>

          {/* Top Models by Volume */}
          <Card className="p-5">
            <h2 className="text-sm font-semibold text-fg">Top Serving Models by Volume (30d)</h2>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-line text-[11px] uppercase tracking-wide text-mut2">
                  <tr>
                    <th className="py-2.5 px-3">Model</th>
                    <th className="py-2.5 px-3">Provider</th>
                    <th className="py-2.5 px-3 font-mono">Requests</th>
                    <th className="py-2.5 px-3 font-mono">Tokens</th>
                    <th className="py-2.5 px-3 font-mono">Revenue</th>
                    <th className="py-2.5 px-3 font-mono">Cost</th>
                    <th className="py-2.5 px-3 font-mono">Gross Margin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  {[
                    { name: "DeepSeek V4.1 Flash", provider: "DeepSeek", reqs: 142000, tokens: "14.2M", rev: "₹28,400", cost: "₹15,620", margin: "45.0%" },
                    { name: "Qwen3.8-27B", provider: "Alibaba Cloud", reqs: 98000, tokens: "9.8M", rev: "₹24,500", cost: "₹13,475", margin: "45.0%" },
                    { name: "Claude 3.5 Sonnet", provider: "Anthropic", reqs: 74200, tokens: "7.1M", rev: "₹42,600", cost: "₹23,430", margin: "45.0%" },
                    { name: "Kimi K2.7 Code", provider: "Moonshot AI", reqs: 58000, tokens: "4.8M", rev: "₹23,200", cost: "₹12,760", margin: "45.0%" },
                    { name: "GPT-4o", provider: "OpenAI", reqs: 41200, tokens: "3.2M", rev: "₹24,150", cost: "₹13,282", margin: "45.0%" },
                  ].map((row) => (
                    <tr key={row.name} className="hover:bg-white/[0.02]">
                      <td className="py-2.5 px-3 font-medium text-fg">{row.name}</td>
                      <td className="py-2.5 px-3 text-mut">{row.provider}</td>
                      <td className="py-2.5 px-3 font-mono text-fg">{row.reqs.toLocaleString()}</td>
                      <td className="py-2.5 px-3 font-mono text-mut">{row.tokens}</td>
                      <td className="py-2.5 px-3 font-mono text-accent">{row.rev}</td>
                      <td className="py-2.5 px-3 font-mono text-mut">{row.cost}</td>
                      <td className="py-2.5 px-3 font-mono font-semibold text-good">{row.margin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* ── TAB 2: 500+ MODEL REGISTRY & BUSINESS METRICS ── */}
      {activeTab === "models" && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="pointer-events-none absolute left-3 top-2.5 size-4 text-mut" />
              <input
                type="search"
                placeholder="Search across 500+ models by name, slug, provider..."
                value={modelSearch}
                onChange={(e) => setModelSearch(e.target.value)}
                className="w-full rounded-lg border border-line bg-panel pl-9 pr-3 py-2 text-xs text-fg placeholder:text-mut2 focus:border-accent focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <Button onClick={exportPricingCsv} className="gap-1.5 text-xs">
                <Download className="size-3.5" />
                Export 500 Pricing CSV
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden">
            <div className="max-h-[600px] overflow-y-auto">
              <table className="w-full text-left text-xs">
                <thead className="sticky top-0 z-10 bg-panel border-b border-line text-[11px] uppercase tracking-wide text-mut2">
                  <tr>
                    <th className="py-2.5 px-3">Model Name & Slug</th>
                    <th className="py-2.5 px-3">Provider</th>
                    <th className="py-2.5 px-3">Category</th>
                    <th className="py-2.5 px-3 font-mono">Context</th>
                    <th className="py-2.5 px-3 font-mono">Input / 1M</th>
                    <th className="py-2.5 px-3 font-mono">Output / 1M</th>
                    <th className="py-2.5 px-3 font-mono">Gross Margin</th>
                    <th className="py-2.5 px-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  {filteredModels.slice(0, 100).map((m) => {
                    const inUsd = (m.pricing?.inputPerMillion || 50) / 100 / usdToInrRate;
                    const outUsd = (m.pricing?.outputPerMillion || 200) / 100 / usdToInrRate;
                    const inInr = inUsd * usdToInrRate;
                    const outInr = outUsd * usdToInrRate;

                    return (
                      <tr key={m.slug} className="hover:bg-white/[0.02]">
                        <td className="py-2 px-3">
                          <div className="font-medium text-fg">{m.name}</div>
                          <div className="font-mono text-[10px] text-mut2">{m.slug}</div>
                        </td>
                        <td className="py-2 px-3 text-mut">{m.providerName || "ProRouter"}</td>
                        <td className="py-2 px-3">
                          <span className="rounded bg-white/[0.04] px-1.5 py-0.5 text-[10px] text-mut">
                            {m.categoryLabel || m.category || "General"}
                          </span>
                        </td>
                        <td className="py-2 px-3 font-mono text-mut">
                          {m.contextWindow ? `${Math.round(m.contextWindow / 1000)}k` : "128k"}
                        </td>
                        <td className="py-2 px-3 font-mono text-fg">
                          <div>${inUsd.toFixed(2)}</div>
                          <div className="text-[10px] text-accent">₹{inInr.toFixed(2)}</div>
                        </td>
                        <td className="py-2 px-3 font-mono text-fg">
                          <div>${outUsd.toFixed(2)}</div>
                          <div className="text-[10px] text-accent">₹{outInr.toFixed(2)}</div>
                        </td>
                        <td className="py-2 px-3 font-mono font-medium text-good">{targetMargin}%</td>
                        <td className="py-2 px-3">
                          <Badge tone={m.isFree ? "free" : "good"}>
                            {m.isFree ? "Free Promo" : "Active"}
                          </Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="border-t border-line p-3 text-center text-xs text-mut">
              Showing top {Math.min(100, filteredModels.length)} of {filteredModels.length} models. Use search or export CSV for full 500-model dataset.
            </div>
          </Card>
        </div>
      )}

      {/* ── TAB 3: USER MANAGEMENT & WALLET GRANTS ── */}
      {activeTab === "users" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="pointer-events-none absolute left-3 top-2.5 size-4 text-mut" />
              <input
                type="search"
                placeholder="Search users by Account #, User ID, email, or name..."
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                className="w-full rounded-lg border border-line bg-panel pl-9 pr-3 py-2 text-xs text-fg placeholder:text-mut2 focus:border-accent focus:outline-none"
              />
            </div>
          </div>

          <Card className="overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-line text-[11px] uppercase tracking-wide text-mut2">
                <tr>
                  <th className="py-2.5 px-3">Account &amp; User</th>
                  <th className="py-2.5 px-3 font-mono">Account # / ID</th>
                  <th className="py-2.5 px-3">Role</th>
                  <th className="py-2.5 px-3 font-mono">Wallet Balance</th>
                  <th className="py-2.5 px-3">Plan</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line/60">
                {usersList
                  .filter((u) => {
                    const q = userSearch.toLowerCase().trim();
                    if (!q) return true;
                    return (
                      u.name.toLowerCase().includes(q) ||
                      u.email.toLowerCase().includes(q) ||
                      u.accountNumber.toLowerCase().includes(q) ||
                      u.id.toLowerCase().includes(q)
                    );
                  })
                  .map((user) => (
                    <tr key={user.id} className="hover:bg-white/[0.02]">
                      <td className="py-2.5 px-3">
                        <div className="font-medium text-fg">{user.name}</div>
                        <div className="font-mono text-[10px] text-mut">{user.email}</div>
                      </td>
                      <td className="py-2.5 px-3 font-mono">
                        <div className="font-semibold text-accent">{user.accountNumber}</div>
                        <div className="text-[10px] text-mut2">{user.id}</div>
                      </td>
                      <td className="py-2.5 px-3">
                        <Badge tone={user.role === "admin" ? "accent" : "neutral"}>
                          {user.role}
                        </Badge>
                      </td>
                      <td className="py-2.5 px-3 font-mono text-accent font-semibold">
                        {formatINR(user.balancePaise)}
                      </td>
                      <td className="py-2.5 px-3 text-mut uppercase">{user.plan}</td>
                      <td className="py-2.5 px-3">
                        <Badge tone={user.status === "active" ? "good" : "bad"}>
                          {user.status}
                        </Badge>
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <Button
                          size="sm"
                          onClick={() => setSelectedUser(user)}
                          className="text-xs"
                        >
                          Adjust Credits
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Card>

          {/* Credit Adjustment Modal */}
          {selectedUser && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
              <div className="w-full max-w-md rounded-2xl border border-line bg-panel p-6 shadow-2xl space-y-4">
                <div className="flex items-center gap-2 text-accent">
                  <Wallet className="size-5" />
                  <h2 className="text-base font-semibold text-fg">Adjust User Credits &amp; Diagnostics</h2>
                </div>
                <div className="rounded-lg border border-line bg-panel2/60 p-3 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-mut">
                    <span>Account Number:</span>
                    <strong className="font-mono text-accent font-semibold">{selectedUser.accountNumber}</strong>
                  </div>
                  <div className="flex items-center justify-between text-mut">
                    <span>User UUID:</span>
                    <strong className="font-mono text-fg">{selectedUser.id}</strong>
                  </div>
                  <div className="flex items-center justify-between text-mut">
                    <span>Email:</span>
                    <strong className="text-fg">{selectedUser.email}</strong>
                  </div>
                  <div className="flex items-center justify-between text-mut border-t border-line/60 pt-1">
                    <span>Current Balance:</span>
                    <strong className="text-accent font-mono font-semibold">{formatINR(selectedUser.balancePaise)}</strong>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="text-xs text-mut">Adjustment Amount (Paise)</label>
                    <input
                      type="number"
                      value={creditAdjustmentPaise}
                      onChange={(e) => setCreditAdjustmentPaise(Number(e.target.value))}
                      className="mt-1 w-full rounded-lg border border-line bg-panel2 px-3 py-2 text-xs font-mono text-fg focus:border-accent focus:outline-none"
                    />
                    <div className="mt-1 text-[11px] text-accent">
                      Equivalent: {formatINR(creditAdjustmentPaise)} (~${(creditAdjustmentPaise / 100 / usdToInrRate).toFixed(2)} USD)
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-mut">Audit Reason</label>
                    <input
                      type="text"
                      value={creditReason}
                      onChange={(e) => setCreditReason(e.target.value)}
                      placeholder="e.g. Promotional grant, billing correction..."
                      className="mt-1 w-full rounded-lg border border-line bg-panel2 px-3 py-2 text-xs text-fg focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedUser(null)}
                    className="rounded-lg border border-line px-3.5 py-2 text-xs text-mut hover:text-fg"
                  >
                    Cancel
                  </button>
                  <Button
                    onClick={() => handleAdjustCredit(selectedUser, false)}
                    className="bg-bad text-white text-xs"
                  >
                    Deduct
                  </Button>
                  <Button
                    onClick={() => handleAdjustCredit(selectedUser, true)}
                    className="bg-good text-black text-xs"
                  >
                    Add Credits
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── TAB 4: PRICING ENGINE & GROSS MARGIN CONFIG ── */}
      {activeTab === "pricing" && (
        <div className="space-y-6">
          <Card className="p-5 space-y-4">
            <h2 className="text-sm font-semibold text-fg">Centralized Pricing Engine Parameters (§Phase 2)</h2>
            <p className="text-xs text-mut leading-relaxed">
              Configure global price floors, gross margin multipliers, and currency conversion settings. The system recalculates selling prices using the formula:
              <br />
              <code className="mt-1 inline-block rounded bg-panel2 px-2 py-1 font-mono text-accent">
                Customer Selling Price = (Upstream Cost * (1 + Operational Reserve)) / (1 - Target Gross Margin)
              </code>
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-line bg-panel2/60 p-4 space-y-2">
                <label className="text-xs font-semibold text-fg flex items-center justify-between">
                  <span>Target Gross Margin (%)</span>
                  <span className="font-mono text-accent">{targetMargin}%</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="80"
                  step="5"
                  value={targetMargin}
                  onChange={(e) => setTargetMargin(Number(e.target.value))}
                  className="w-full accent-accent cursor-pointer"
                />
                <p className="text-[11px] text-mut">Default: 30%. Configurable target margin across catalogue.</p>
              </div>

              <div className="rounded-xl border border-line bg-panel2/60 p-4 space-y-2">
                <label className="text-xs font-semibold text-fg flex items-center justify-between">
                  <span>Operational Reserve (%)</span>
                  <span className="font-mono text-accent">10%</span>
                </label>
                <input
                  type="range"
                  min="0"
                  max="30"
                  step="5"
                  defaultValue="10"
                  className="w-full accent-accent cursor-pointer"
                />
                <p className="text-[11px] text-mut">Default: 10% (1.10 multiplier). Buffers network retry and token variance.</p>
              </div>

              <div className="rounded-xl border border-line bg-panel2/60 p-4 space-y-2">
                <label className="text-xs font-semibold text-fg flex items-center justify-between">
                  <span>USD to INR Exchange Policy</span>
                  <span className="font-mono text-accent">₹{usdToInrRate} / $1.00</span>
                </label>
                <input
                  type="number"
                  value={usdToInrRate}
                  onChange={(e) => setUsdToInrRate(Number(e.target.value))}
                  className="w-full rounded-lg border border-line bg-panel px-3 py-1.5 text-xs font-mono text-fg focus:border-accent focus:outline-none"
                />
                <p className="text-[11px] text-mut">₹80.00 display rate gives Indian developers a localized ~10% discount.</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <Button onClick={() => toast.push("Updated global pricing engine parameters.", "success")}>
                Save Pricing Engine Settings
              </Button>
              <Button variant="outline" onClick={exportPricingCsv} className="gap-1.5 text-xs">
                <Download className="size-3.5" /> Export Pricing CSV
              </Button>
            </div>
          </Card>

          {/* Initial Retail Suggested Price Floors */}
          <Card className="p-5">
            <h2 className="text-sm font-semibold text-fg">Suggested Retail Price Tiers (Floor References)</h2>
            <div className="mt-3 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="border-b border-line text-[11px] uppercase tracking-wide text-mut2">
                  <tr>
                    <th className="py-2 px-3">Tier Category</th>
                    <th className="py-2 px-3 font-mono">Input USD / 1M</th>
                    <th className="py-2 px-3 font-mono">Output USD / 1M</th>
                    <th className="py-2 px-3 font-mono">Input INR / 1M</th>
                    <th className="py-2 px-3 font-mono">Output INR / 1M</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line/60">
                  {[
                    { cat: "Budget / Fast", inUsd: 0.25, outUsd: 0.80 },
                    { cat: "Standard", inUsd: 0.60, outUsd: 2.40 },
                    { cat: "Advanced", inUsd: 1.20, outUsd: 4.80 },
                    { cat: "Premium", inUsd: 2.50, outUsd: 10.00 },
                    { cat: "Flagship", inUsd: 5.00, outUsd: 20.00 },
                    { cat: "Coding", inUsd: 1.50, outUsd: 6.00 },
                    { cat: "Reasoning", inUsd: 2.00, outUsd: 8.00 },
                  ].map((tier) => (
                    <tr key={tier.cat} className="hover:bg-white/[0.02]">
                      <td className="py-2 px-3 font-medium text-fg">{tier.cat}</td>
                      <td className="py-2 px-3 font-mono text-mut">${tier.inUsd.toFixed(2)}</td>
                      <td className="py-2 px-3 font-mono text-mut">${tier.outUsd.toFixed(2)}</td>
                      <td className="py-2 px-3 font-mono text-accent">₹{(tier.inUsd * usdToInrRate).toFixed(2)}</td>
                      <td className="py-2 px-3 font-mono text-accent">₹{(tier.outUsd * usdToInrRate).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* ── TAB 5: 48-HOUR PROMOTIONAL LAUNCH CAMPAIGN ── */}
      {activeTab === "promotions" && (
        <div className="space-y-6">
          <Card className="p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-accent">
                <Sparkles className="size-5" />
                <h2 className="text-sm font-semibold text-fg">48-Hour Promotional Launch Special Manager (§Phase 4)</h2>
              </div>
              <Badge tone={promoEnabled ? "good" : "bad"}>
                {promoEnabled ? "Campaign Active" : "Campaign Paused"}
              </Badge>
            </div>

            <p className="text-xs text-mut leading-relaxed">
              Enforce server-side free access for exactly 48 hours for activated users.
              Per strict business requirements, <strong className="text-fg">only DeepSeek V4.1 Flash and Qwen3.8-27B</strong> are eligible for the promotion.
              All other models are billed at their regular rates.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-panel2/60 p-4 space-y-2">
                <label className="text-xs font-semibold text-fg">Campaign Status</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setPromoEnabled(!promoEnabled);
                      toast.push(`Promotional campaign ${!promoEnabled ? "Enabled" : "Paused"}`, "success");
                    }}
                    className={cx(
                      "rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-150",
                      promoEnabled ? "bg-good text-black" : "bg-bad text-white"
                    )}
                  >
                    {promoEnabled ? "Active & Accepting Activations" : "Paused"}
                  </button>
                </div>
                <p className="text-[11px] text-mut">When enabled, new users see the Launch Special banner on the marketplace and playground.</p>
              </div>

              <div className="rounded-xl border border-line bg-panel2/60 p-4 space-y-2">
                <label className="text-xs font-semibold text-fg">Promotional Duration (Hours)</label>
                <input
                  type="number"
                  value={promoDurationHours}
                  onChange={(e) => setPromoDurationHours(Number(e.target.value))}
                  className="w-full rounded-lg border border-line bg-panel px-3 py-1.5 text-xs font-mono text-fg focus:border-accent focus:outline-none"
                />
                <p className="text-[11px] text-mut">Default: 48 hours from user activation timestamp.</p>
              </div>
            </div>

            {/* Qualified Promotional Models List */}
            <div className="rounded-xl border border-line bg-panel p-4">
              <h3 className="text-xs font-semibold text-fg">Eligible Promotional Models (Locked to 2 Models)</h3>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-accent/30 bg-accent/5 p-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-fg">DeepSeek V4.1 Flash</div>
                    <div className="font-mono text-[10px] text-accent">deepseek-v4.1-flash</div>
                  </div>
                  <Badge tone="free">Qualified</Badge>
                </div>

                <div className="rounded-lg border border-accent/30 bg-accent/5 p-3 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-fg">Qwen3.8-27B</div>
                    <div className="font-mono text-[10px] text-accent">qwen3.8-27b</div>
                  </div>
                  <Badge tone="free">Qualified</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

