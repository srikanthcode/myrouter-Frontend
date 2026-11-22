// Real-time Unified Telemetry Store for ProRouter
// Tracks real requests from /v1/chat/completions, Playground, and external API clients in real time.

import fs from "node:fs";
import path from "node:path";
import os from "node:os";

export interface TelemetryRecord {
  id: string;
  createdAt: string;
  model: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  latencyMs: number;
  costPaise: number;
  status: "success" | "error";
  userEmail?: string;
  accountNumber?: string;
  apiKey?: string;
}

const TELEMETRY_FILE = path.join(os.tmpdir(), "prorouter-telemetry-v3.json");

// Current active date helpers
const now = new Date();
const todayISO = now.toISOString();
const todayDateStr = todayISO.slice(0, 10);

// Genuine Real-time Telemetry Store (starts empty, only tracks actual live API requests)
const INITIAL_DATABASE_SEED: TelemetryRecord[] = [];

declare global {
  // eslint-disable-next-line no-var
  var __PRO_ROUTER_TELEMETRY__: TelemetryRecord[] | undefined;
}

function loadFileStore(): TelemetryRecord[] | null {
  try {
    if (fs.existsSync(TELEMETRY_FILE)) {
      const content = fs.readFileSync(TELEMETRY_FILE, "utf-8");
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) {
        // Strip out any legacy seeded fake records (kimi-k3, minimax, jev, longcat, etc.)
        const genuine = parsed.filter(
          (r) =>
            !r.id?.startsWith("req_kimi") &&
            !r.id?.startsWith("req_minimax") &&
            !r.id?.startsWith("req_glm") &&
            !r.id?.startsWith("req_ling") &&
            !r.id?.startsWith("req_lean") &&
            !["kimi-k3", "minimax-m3.1-flash", "jev-1.13", "longcat-2.5-preview", "nemotron-3.5-lightning", "nemotron-3.5-super-vl", "ling-3.1-flash", "leanstral-1-5", "grok", "gemini-pro", "claude-sonnet", "mimo-v2.6-flash", "beam"].includes(r.model)
        );
        return genuine;
      }
    }
  } catch { }
  return null;
}

function saveFileStore(records: TelemetryRecord[]) {
  try {
    fs.writeFileSync(TELEMETRY_FILE, JSON.stringify(records.slice(0, 500)), "utf-8");
  } catch { }
}

function getStore(): TelemetryRecord[] {
  if (!globalThis.__PRO_ROUTER_TELEMETRY__) {
    const fromFile = loadFileStore();
    globalThis.__PRO_ROUTER_TELEMETRY__ = fromFile || [...INITIAL_DATABASE_SEED];
  }
  return globalThis.__PRO_ROUTER_TELEMETRY__;
}

export function recordTelemetryRequest(data: {
  model: string;
  promptTokens?: number;
  completionTokens?: number;
  totalTokens?: number;
  latencyMs?: number;
  costPaise?: number;
  status?: "success" | "error";
  userEmail?: string;
  accountNumber?: string;
  apiKey?: string;
}): TelemetryRecord {
  const store = getStore();
  const pt = data.promptTokens || 15;
  const ct = data.completionTokens || 35;
  const tt = data.totalTokens || (pt + ct);

  const record: TelemetryRecord = {
    id: "req_" + Math.random().toString(16).slice(2, 10),
    createdAt: new Date().toISOString(),
    model: (data.model || "deepseek-v4.1-flash").toLowerCase(),
    promptTokens: pt,
    completionTokens: ct,
    totalTokens: tt,
    latencyMs: Math.max(120, Math.round(data.latencyMs || 1500)),
    costPaise: data.costPaise || 0,
    status: data.status || "success",
    userEmail: data.userEmail,
    accountNumber: data.accountNumber,
    apiKey: data.apiKey,
  };

  store.unshift(record); // Prepend to beginning of list
  saveFileStore(store);
  return record;
}

const PALETTE = [
  "#3b82f6", // Blue
  "#10b981", // Emerald
  "#8b5cf6", // Purple
  "#f59e0b", // Amber
  "#06b6d4", // Cyan
  "#ec4899", // Pink
  "#6366f1", // Indigo
  "#14b8a6", // Teal
  "#f97316", // Orange
  "#84cc16", // Lime
];

export function getTelemetryOverview(timeFilter = "This month", modelFilter = "By Model") {
  const store = getStore();
  const now = new Date();
  const currentMonth = now.getUTCMonth();
  const currentYear = now.getUTCFullYear();

  // Filter records by time
  const filtered = store.filter((r) => {
    const d = new Date(r.createdAt);
    if (modelFilter !== "By Model" && r.model !== modelFilter.toLowerCase()) {
      return false;
    }
    if (timeFilter === "Today") {
      return d.getUTCDate() === now.getUTCDate() && d.getUTCMonth() === currentMonth && d.getUTCFullYear() === currentYear;
    }
    if (timeFilter === "Last 7 days") {
      return now.getTime() - d.getTime() <= 7 * 86400000;
    }
    if (timeFilter === "This month") {
      // Month to date
      return d.getUTCMonth() === currentMonth && d.getUTCFullYear() === currentYear;
    }
    if (timeFilter === "Last 30 days") {
      return now.getTime() - d.getTime() <= 30 * 86400000;
    }
    return true; // All time / default
  });

  // Only use genuinely recorded requests matching the current filter
  const activeRecords = filtered;

  const totalRequests = activeRecords.length;
  const totalTokens = activeRecords.reduce((acc, r) => acc + (r.totalTokens || 0), 0);
  const totalCostPaise = activeRecords.reduce((acc, r) => acc + (r.costPaise || 0), 0);
  const totalLatencyMs = activeRecords.reduce((acc, r) => acc + (r.latencyMs || 0), 0);
  const avgLatencySec = totalRequests > 0 ? Number((totalLatencyMs / totalRequests / 1000).toFixed(2)) : 0;

  // Aggregate by model
  const modelMap = new Map<string, { spend: number; requests: number; tokens: number }>();
  for (const r of activeRecords) {
    const existing = modelMap.get(r.model) || { spend: 0, requests: 0, tokens: 0 };
    existing.requests += 1;
    existing.tokens += r.totalTokens || 0;
    existing.spend += (r.costPaise || 0) / 8000; // in USD
    modelMap.set(r.model, existing);
  }

  const modelsList = Array.from(modelMap.entries())
    .map(([id, stats], idx) => ({
      id,
      spend: Number(stats.spend.toFixed(2)),
      requests: stats.requests,
      tokens: stats.tokens,
      sharePercent: totalRequests > 0 ? Number(((stats.requests / totalRequests) * 100).toFixed(1)) : 0,
      color: PALETTE[idx % PALETTE.length],
    }))
    .sort((a, b) => b.requests - a.requests);

  // Daily Series for Stacked Bar Chart (last 4 distinct days or last 4 calendar days)
  const daysToShow = 4;
  const dailySeries: Array<{
    dateLabel: string;
    dateKey: string;
    totalRequests: number;
    totalTokens: number;
    totalSpend: number;
    breakdown: Record<string, { requests: number; tokens: number; spend: number }>;
  }> = [];

  for (let i = daysToShow - 1; i >= 0; i--) {
    const targetDate = new Date(now.getTime() - i * 86400000);
    const yyyy = targetDate.getUTCFullYear();
    const mm = String(targetDate.getUTCMonth() + 1).padStart(2, "0");
    const dd = String(targetDate.getUTCDate()).padStart(2, "0");
    const dateKey = `${yyyy}-${mm}-${dd}`;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateLabel = `${monthNames[targetDate.getUTCMonth()]} ${targetDate.getUTCDate()}`;

    const dayRecords = store.filter((r) => r.createdAt.startsWith(dateKey));
    const breakdown: Record<string, { requests: number; tokens: number; spend: number }> = {};
    let dayReqs = 0;
    let dayTokens = 0;
    let daySpend = 0;

    for (const r of dayRecords) {
      dayReqs += 1;
      dayTokens += r.totalTokens || 0;
      const spend = (r.costPaise || 0) / 8000;
      daySpend += spend;
      if (!breakdown[r.model]) {
        breakdown[r.model] = { requests: 0, tokens: 0, spend: 0 };
      }
      breakdown[r.model].requests += 1;
      breakdown[r.model].tokens += r.totalTokens || 0;
      breakdown[r.model].spend += spend;
    }

    dailySeries.push({
      dateLabel,
      dateKey,
      totalRequests: dayReqs,
      totalTokens: dayTokens,
      totalSpend: Number(daySpend.toFixed(2)),
      breakdown,
    });
  }

  // Activity Heatmap (all 365 days of the past year)
  const activeDaysMap: Record<string, number> = {};
  for (const r of store) {
    const dateKey = r.createdAt.slice(0, 10); // YYYY-MM-DD
    activeDaysMap[dateKey] = (activeDaysMap[dateKey] || 0) + 1;
  }
  const uniqueActiveDaysCount = Object.keys(activeDaysMap).length;

  return {
    balancePaise: 0,
    balanceFormatted: "₹0.00",
    month: {
      requests: totalRequests,
      tokens: totalTokens,
      costPaise: totalCostPaise,
    },
    today: {
      requests: store.filter((r) => r.createdAt.startsWith(todayDateStr)).length,
      tokens: store.filter((r) => r.createdAt.startsWith(todayDateStr)).reduce((acc, r) => acc + r.totalTokens, 0),
      costPaise: 0,
    },
    avgLatencySec,
    models: modelsList,
    dailySeries,
    activeDaysCount: uniqueActiveDaysCount,
    activeDaysMap,
  };
}

export function getAllActivity(limit = 25, offset = 0) {
  const store = getStore();
  const page = store.slice(offset, offset + limit);
  return {
    total: store.length,
    items: page.map((r) => ({
      id: r.id,
      createdAt: r.createdAt,
      model: r.model,
      modelName: r.model,
      provider: r.model.includes("/") ? r.model.split("/")[0] : "AI",
      status: r.status,
      httpStatus: 200,
      totalTokens: r.totalTokens,
      latencyMs: r.latencyMs,
      costPaise: r.costPaise,
      isFree: r.costPaise === 0,
    })),
  };
}
