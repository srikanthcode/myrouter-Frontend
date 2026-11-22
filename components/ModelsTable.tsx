"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  Eye,
  FileCode2,
  FileText,
  Filter,
  Image as ImageIcon,
  Play,
  Search,
  SlidersHorizontal,
  Sparkles,
  Terminal,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import type { ModelSummary, ProviderSummary } from "@/lib/server-api";
import { compactNumber } from "@/lib/server-api";
import { cx } from "@/lib/api";
import { Badge, Button, Modal } from "@/components/ui";

interface ModelsTableProps {
  initialModels: ModelSummary[];
  initialProviders?: ProviderSummary[];
  initialCurrency?: "INR" | "USD";
  initialCategory?: string;
  initialQuery?: string;
}

const CATEGORY_TABS = [
  { key: "", label: "All Models" },
  { key: "coding", label: "Coding & Agents" },
  { key: "reasoning", label: "Reasoning" },
  { key: "vision", label: "Vision & Multimodal" },
  { key: "fast", label: "Fast & Low Latency" },
  { key: "long_context", label: "Long Context" },
  { key: "general", label: "General Purpose" },
  { key: "research", label: "Research & Analysis" },
  { key: "multilingual", label: "Indic & Multilingual" },
  { key: "math_science", label: "Math & Science" },
];

export function ModelsTable({
  initialModels,
  initialProviders = [],
  initialCurrency = "INR",
  initialCategory = "",
  initialQuery = "",
}: ModelsTableProps) {
  const [currency, setCurrency] = useState<"INR" | "USD">(initialCurrency);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [tierFilter, setTierFilter] = useState<"all" | "promo_free" | "paid">("all");
  const [selectedProvider, setSelectedProvider] = useState<string>("");
  const [selectedCapability, setSelectedCapability] = useState<string>("");
  const [sortBy, setSortBy] = useState<"rank" | "score" | "lowest_input" | "lowest_output" | "highest_context" | "alphabetical">("rank");
  const [pageSize, setPageSize] = useState<number>(50);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [curlModel, setCurlModel] = useState<ModelSummary | null>(null);
  const [curlCopied, setCurlCopied] = useState(false);

  // Compute unique providers for dropdown filter
  const uniqueProviders = useMemo(() => {
    const map = new Map<string, string>();
    for (const m of initialModels) {
      if (m.providerSlug && m.providerName) {
        map.set(m.providerSlug, m.providerName);
      }
    }
    return Array.from(map.entries()).sort((a, b) => a[1].localeCompare(b[1]));
  }, [initialModels]);

  // Filter and sort models
  const filteredModels = useMemo(() => {
    return initialModels.filter((m) => {
      // 1. Text search
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = m.name.toLowerCase().includes(q);
        const matchesSlug = m.slug.toLowerCase().includes(q);
        const matchesDesc = m.description.toLowerCase().includes(q);
        const matchesProvider = m.providerName?.toLowerCase().includes(q) || m.providerSlug?.toLowerCase().includes(q);
        const matchesCanonical = m.canonicalModelId?.toLowerCase().includes(q);
        if (!matchesName && !matchesSlug && !matchesDesc && !matchesProvider && !matchesCanonical) {
          return false;
        }
      }

      // 2. Category
      if (selectedCategory && m.category !== selectedCategory) {
        return false;
      }

      // 3. Provider
      if (selectedProvider && m.providerSlug !== selectedProvider && m.providerName?.toLowerCase() !== selectedProvider.toLowerCase()) {
        return false;
      }

      // 4. Capability filter
      if (selectedCapability) {
        if (selectedCapability === "reasoning" && !m.capabilities?.reasoning) return false;
        if (selectedCapability === "vision" && !m.capabilities?.vision) return false;
        if (selectedCapability === "toolCalls" && !m.capabilities?.toolCalls) return false;
        if (selectedCapability === "streaming" && !m.capabilities?.streaming) return false;
      }

      // 5. Tier filter
      const isDailyFree = m.slug === "deepseek-v4.1-flash" || m.slug === "qwen3.8-27b";
      if (tierFilter === "promo_free" && !isDailyFree) return false;
      if (tierFilter === "paid" && isDailyFree) return false;

      return true;
    }).sort((a, b) => {
      const isPromoA = a.slug === "deepseek-v4.1-flash" || a.slug === "qwen3.8-27b";
      const isPromoB = b.slug === "deepseek-v4.1-flash" || b.slug === "qwen3.8-27b";

      // Keep designated daily free models prioritized on default sort
      if (sortBy === "rank") {
        if (isPromoA && !isPromoB) return -1;
        if (!isPromoA && isPromoB) return 1;
        return a.rank - b.rank;
      }
      if (sortBy === "score") {
        const scoreA = a.benchmarks?.[0]?.score ?? a.rating ?? 0;
        const scoreB = b.benchmarks?.[0]?.score ?? b.rating ?? 0;
        return scoreB - scoreA;
      }
      if (sortBy === "lowest_input") {
        const inA = a.customerPricingUsd?.inputPerMillion ?? (a.pricing.inputPerMillion / 8000);
        const inB = b.customerPricingUsd?.inputPerMillion ?? (b.pricing.inputPerMillion / 8000);
        return inA - inB;
      }
      if (sortBy === "lowest_output") {
        const outA = a.customerPricingUsd?.outputPerMillion ?? (a.pricing.outputPerMillion / 8000);
        const outB = b.customerPricingUsd?.outputPerMillion ?? (b.pricing.outputPerMillion / 8000);
        return outA - outB;
      }
      if (sortBy === "highest_context") {
        return b.contextWindow - a.contextWindow;
      }
      if (sortBy === "alphabetical") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [initialModels, searchQuery, selectedCategory, selectedProvider, selectedCapability, tierFilter, sortBy]);

  // Pagination calculation
  const totalItems = filteredModels.length;
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const paginatedModels = useMemo(() => {
    if (pageSize >= 500) return filteredModels;
    const start = (currentPage - 1) * pageSize;
    return filteredModels.slice(start, start + pageSize);
  }, [filteredModels, currentPage, pageSize]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleTierChange = (tier: "all" | "promo_free" | "paid") => {
    setTierFilter(tier);
    setCurrentPage(1);
  };

  const copyToClipboard = (text: string, id: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const getCurlSnippet = (modelId: string) => {
    return `curl https://www.prorouter.in/v1/chat/completions \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer $PROROUTER_API_KEY" \\
  -d '{
    "model": "${modelId}",
    "messages": [
      {"role": "user", "content": "Hello ProRouter!"}
    ]
  }'`;
  };

  return (
    <div className="space-y-6">
      {/* ── Search, Controls & Filters Bar ── */}
      <div className="rounded-2xl border border-line/80 bg-panel/90 p-4 shadow-sm backdrop-blur-xs space-y-4">
        {/* Top Search & Primary Controls */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-mut2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search 500+ models by official name, canonical ID, provider, or architecture…"
              className="w-full rounded-xl border border-line bg-panel2/60 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-fg placeholder:text-mut2 focus:outline-hidden focus:border-accent/80 transition-colors font-mono"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-mut hover:text-fg font-mono"
              >
                Clear
              </button>
            )}
          </div>

          {/* Currency Toggle & Quick Sort */}
          <div className="flex items-center gap-2.5 shrink-0 self-end lg:self-auto">
            {/* Currency Switcher */}
            <div className="inline-flex rounded-xl border border-line bg-panel2/80 p-1 shadow-inner">
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={cx(
                  "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200",
                  currency === "INR"
                    ? "bg-accent text-accent-ink shadow-xs"
                    : "text-mut hover:text-fg"
                )}
              >
                <span>🇮🇳</span> INR (₹)
              </button>
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={cx(
                  "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all duration-200",
                  currency === "USD"
                    ? "bg-accent text-accent-ink shadow-xs"
                    : "text-mut hover:text-fg"
                )}
              >
                <span>🇺🇸</span> USD ($)
              </button>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1.5 bg-panel2/80 border border-line rounded-xl px-2.5 py-1.5">
              <SlidersHorizontal className="size-3.5 text-mut2" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs font-medium text-fg focus:outline-hidden cursor-pointer"
              >
                <option value="rank" className="bg-panel text-fg">Rank (Default)</option>
                <option value="score" className="bg-panel text-fg">Intelligence Score</option>
                <option value="lowest_input" className="bg-panel text-fg">Lowest Input Price</option>
                <option value="lowest_output" className="bg-panel text-fg">Lowest Output Price</option>
                <option value="highest_context" className="bg-panel text-fg">Highest Context</option>
                <option value="alphabetical" className="bg-panel text-fg">Alphabetical</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filters Row: Tier, Provider, Capability, Page Size */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-line/50">
          <div className="flex flex-wrap items-center gap-2">
            {/* Entitlement Filter */}
            <div className="inline-flex rounded-lg border border-line bg-panel2/50 p-0.5">
              <button
                onClick={() => handleTierChange("all")}
                className={cx(
                  "rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
                  tierFilter === "all"
                    ? "bg-accent text-accent-ink shadow-xs font-semibold"
                    : "text-mut hover:text-fg"
                )}
              >
                All Models ({initialModels.length})
              </button>
              <button
                onClick={() => handleTierChange("promo_free")}
                className={cx(
                  "inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-semibold transition-colors cursor-pointer",
                  tierFilter === "promo_free"
                    ? "bg-accent text-accent-ink shadow-xs"
                    : "text-accent hover:bg-accent/10"
                )}
              >
                <Sparkles className="size-3" />
                1M Free/Day (2 Models)
              </button>
              <button
                onClick={() => handleTierChange("paid")}
                className={cx(
                  "rounded-md px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
                  tierFilter === "paid"
                    ? "bg-accent text-accent-ink shadow-xs font-semibold"
                    : "text-mut hover:text-fg"
                )}
              >
                Paid ({initialModels.length - 2})
              </button>
            </div>

            {/* Provider Filter */}
            <select
              value={selectedProvider}
              onChange={(e) => {
                setSelectedProvider(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border border-line bg-panel2/60 px-2.5 py-1 text-xs text-fg focus:outline-hidden cursor-pointer"
            >
              <option value="">All Providers ({uniqueProviders.length})</option>
              {uniqueProviders.map(([slug, name]) => (
                <option key={slug} value={slug} className="bg-panel text-fg">{name}</option>
              ))}
            </select>

            {/* Capability Filter */}
            <select
              value={selectedCapability}
              onChange={(e) => {
                setSelectedCapability(e.target.value);
                setCurrentPage(1);
              }}
              className="rounded-lg border border-line bg-panel2/60 px-2.5 py-1 text-xs text-fg focus:outline-hidden cursor-pointer"
            >
              <option value="">All Capabilities</option>
              <option value="reasoning" className="bg-panel text-fg">Reasoning</option>
              <option value="toolCalls" className="bg-panel text-fg">Tool Calling</option>
              <option value="vision" className="bg-panel text-fg">Vision / Multimodal</option>
              <option value="streaming" className="bg-panel text-fg">Streaming</option>
            </select>
          </div>

          {/* Model Count & Page Sizer */}
          <div className="flex items-center gap-3 text-xs text-mut">
            <span>
              Showing <strong className="text-fg font-mono">{filteredModels.length}</strong> models
            </span>
            <div className="flex items-center gap-1 border border-line rounded-lg bg-panel2/60 px-2 py-0.5">
              <span className="text-[11px] text-mut2">Page:</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="bg-transparent text-xs font-mono text-fg cursor-pointer focus:outline-hidden"
              >
                <option value={25} className="bg-panel text-fg">25</option>
                <option value={50} className="bg-panel text-fg">50</option>
                <option value={100} className="bg-panel text-fg">100</option>
                <option value={600} className="bg-panel text-fg">All (500+)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category Horizontal Filter Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {CATEGORY_TABS.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key || "all"}
                onClick={() => handleCategoryChange(cat.key)}
                className={cx(
                  "whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-medium transition-colors shrink-0 cursor-pointer",
                  isActive
                    ? "bg-accent text-accent-ink font-semibold shadow-xs"
                    : "bg-panel2/80 text-mut hover:text-fg hover:bg-panel2 border border-line/60"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Swiss-Style Structured Data Table ── */}
      <div className="rounded-2xl border border-line/80 bg-panel shadow-md overflow-hidden backdrop-blur-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-line bg-panel2/60 text-[11px] font-mono uppercase tracking-wider text-mut2">
                <th scope="col" className="py-3 px-3.5 w-12 text-center">#</th>
                <th scope="col" className="py-3 px-4 min-w-[280px]">Model & Canonical ID</th>
                <th scope="col" className="py-3 px-4 min-w-[200px]">
                  Pricing / 1M Tokens
                  <span className="block text-[10px] lowercase text-mut normal-case font-sans">
                    {currency === "INR" ? "Input / Output (₹ INR)" : "Input / Output ($ USD)"}
                  </span>
                </th>
                <th scope="col" className="py-3 px-3 min-w-[100px] text-center">Context</th>
                <th scope="col" className="py-3 px-3 min-w-[130px]">Capabilities</th>
                <th scope="col" className="py-3 px-3 min-w-[90px] text-center">Status</th>
                <th scope="col" className="py-3 px-4 w-32 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/60 text-xs">
              {paginatedModels.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-mut">
                    <p className="text-sm font-medium text-fg">No models found matching your filters.</p>
                    <p className="text-xs text-mut2 mt-1">Try clearing your search terms or selecting another category.</p>
                    <button
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedCategory("");
                        setTierFilter("all");
                        setSelectedProvider("");
                        setSelectedCapability("");
                      }}
                      className="mt-3 inline-flex items-center gap-1.5 text-xs text-accent hover:underline font-medium"
                    >
                      Reset all filters
                    </button>
                  </td>
                </tr>
              ) : (
                paginatedModels.map((m, idx) => {
                  const globalIdx = (currentPage - 1) * pageSize + idx + 1;
                  const isDailyFree = m.slug === "deepseek-v4.1-flash" || m.slug === "qwen3.8-27b";
                  const canonicalId = m.canonicalModelId || m.slug;

                  // Extract prices
                  const inputUsd = m.customerPricingUsd?.inputPerMillion ?? (m.pricing.inputPerMillion / 8000);
                  const outputUsd = m.customerPricingUsd?.outputPerMillion ?? (m.pricing.outputPerMillion / 8000);
                  const cachedUsd = m.customerPricingUsd?.cachedInputPerMillion ?? (inputUsd * 0.5);
                  const inputInr = (m.pricing.inputPerMillion / 100);
                  const outputInr = (m.pricing.outputPerMillion / 100);
                  const cachedInr = (inputInr * 0.5);

                  // Formatting display string
                  const formattedInPrice = currency === "INR" ? `₹${inputInr.toFixed(2)}` : `$${inputUsd.toFixed(2)}`;
                  const formattedOutPrice = currency === "INR" ? `₹${outputInr.toFixed(2)}` : `$${outputUsd.toFixed(2)}`;
                  const formattedCachedPrice = currency === "INR" ? `₹${cachedInr.toFixed(2)}` : `$${cachedUsd.toFixed(2)}`;

                  return (
                    <tr
                      key={m.slug}
                      className={cx(
                        "group hover:bg-white/[0.03] transition-colors duration-150",
                        isDailyFree && "bg-accent/[0.03] border-l-2 border-l-accent"
                      )}
                    >
                      {/* 1. Rank Column */}
                      <td className="py-3 px-3.5 text-center font-mono text-[11px] text-mut2">
                        {globalIdx}
                      </td>

                      {/* 2. Model & Canonical ID */}
                      <td className="py-3 px-4">
                        <div className="flex items-start gap-2.5">
                          {/* Clean Provider Badge */}
                          <div className="size-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold shrink-0 border border-line bg-panel2/80 text-fg mt-0.5">
                            {m.providerName ? m.providerName.slice(0, 2).toUpperCase() : "PR"}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <Link
                                href={`/models/${m.slug}`}
                                className="font-semibold text-fg hover:text-accent transition-colors duration-150 text-[13.5px]"
                              >
                                {m.name}
                              </Link>

                              {/* Daily Free Entitlement Badge */}
                              {isDailyFree && (
                                <span className="inline-flex items-center gap-1 rounded bg-accent/20 border border-accent/40 px-1.5 py-0.5 text-[10px] font-bold text-accent tracking-wide">
                                  <Sparkles className="size-2.5" />
                                  1M FREE / DAY
                                </span>
                              )}
                            </div>

                            {/* Canonical ID with 1-Click Copy */}
                            <div className="flex items-center gap-1.5 mt-1">
                              <button
                                onClick={() => copyToClipboard(canonicalId, `copy-${m.slug}`)}
                                title="Click to copy canonical model ID"
                                className="group/copy inline-flex items-center gap-1 font-mono text-[11px] text-mut hover:text-fg transition-colors rounded px-1 py-0.5 hover:bg-panel2 border border-transparent hover:border-line"
                              >
                                <span>{canonicalId}</span>
                                {copiedId === `copy-${m.slug}` ? (
                                  <Check className="size-3 text-good" />
                                ) : (
                                  <Copy className="size-3 opacity-0 group-hover/copy:opacity-100 transition-opacity text-mut2" />
                                )}
                              </button>
                              <span className="text-mut2 text-[10px]">·</span>
                              <span className="text-[10.5px] text-mut">{m.providerName}</span>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* 3. Pricing / 1M Tokens */}
                      <td className="py-3 px-4">
                        {isDailyFree ? (
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-accent font-mono text-[13px]">
                                {currency === "INR" ? "₹0.00" : "$0.00"}
                              </span>
                              <span className="rounded bg-accent/20 text-accent px-1 py-0.2 text-[9.5px] font-bold">
                                1M / day
                              </span>
                            </div>
                            <div className="text-[10px] text-mut font-mono">
                              spillover: {formattedInPrice} in / {formattedOutPrice} out
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <div className="flex items-baseline gap-1.5 font-mono text-[12.5px] font-semibold text-fg tabular-nums">
                              <span className="text-fg">{formattedInPrice}</span>
                              <span className="text-mut2 text-[10.5px] font-normal">in</span>
                              <span className="text-mut2">/</span>
                              <span className="text-fg">{formattedOutPrice}</span>
                              <span className="text-mut2 text-[10.5px] font-normal">out</span>
                            </div>
                            <div className="text-[10px] text-mut2 flex items-center gap-1 font-mono">
                              <span>cached: {formattedCachedPrice}</span>
                            </div>
                          </div>
                        )}
                      </td>

                      {/* 4. Context Window */}
                      <td className="py-3 px-3 text-center">
                        <span className="inline-flex items-center justify-center rounded-md bg-panel2/80 border border-line px-2 py-0.5 font-mono text-[11px] text-fg">
                          {compactNumber(m.contextWindow)}
                        </span>
                      </td>

                      {/* 5. Capabilities */}
                      <td className="py-3 px-3">
                        <div className="flex flex-wrap items-center gap-1">
                          {m.capabilities?.reasoning && (
                            <span className="inline-flex items-center gap-0.5 rounded px-1.5 py-0.2 text-[9.5px] bg-panel2 text-fg border border-line">
                              <Brain className="size-2.5 text-accent" /> Reasoning
                            </span>
                          )}
                          {m.capabilities?.toolCalls && (
                            <span className="inline-flex items-center gap-0.5 rounded px-1.5 py-0.2 text-[9.5px] bg-panel2 text-fg border border-line">
                              <FileCode2 className="size-2.5 text-accent" /> Tools
                            </span>
                          )}
                          {m.capabilities?.vision && (
                            <span className="inline-flex items-center gap-0.5 rounded px-1.5 py-0.2 text-[9.5px] bg-panel2 text-fg border border-line">
                              <Eye className="size-2.5 text-accent" /> Vision
                            </span>
                          )}
                          {m.capabilities?.streaming && (
                            <span className="inline-flex items-center gap-0.5 rounded px-1.5 py-0.2 text-[9.5px] bg-panel2 text-fg border border-line">
                              <Zap className="size-2.5 text-accent" /> Stream
                            </span>
                          )}
                        </div>
                      </td>

                      {/* 6. Availability Status */}
                      <td className="py-3 px-3 text-center">
                        <span className="inline-flex items-center gap-1 text-[11px] text-good font-mono">
                          <span className="size-1.5 rounded-full bg-good" />
                          Active
                        </span>
                      </td>

                      {/* 7. Action Column */}
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          {/* Quick API Curl Modal Button */}
                          <button
                            onClick={() => {
                              setCurlModel(m);
                              setCurlCopied(false);
                            }}
                            title="View API curl example"
                            className="inline-flex size-7 items-center justify-center rounded-lg border border-line bg-panel2/80 text-mut hover:text-fg hover:border-line2 transition-colors cursor-pointer"
                          >
                            <Terminal className="size-3" />
                          </button>

                          {/* Playground Link */}
                          <Link
                            href={`/chat?model=${m.slug}`}
                            title="Test model in playground"
                            className="inline-flex size-7 items-center justify-center rounded-lg border border-line bg-panel2/80 text-mut hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
                          >
                            <Play className="size-3 fill-current" />
                          </Link>

                          {/* Detail Link */}
                          <Link
                            href={`/models/${m.slug}`}
                            className="inline-flex items-center gap-1 rounded-lg border border-line bg-panel2 px-2 py-1 text-xs font-medium text-fg hover:border-accent/50 transition-colors cursor-pointer"
                          >
                            <span>View</span>
                            <ArrowRight className="size-3 text-mut2 group-hover:text-accent transition-colors" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* ── Table Pagination Controls ── */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-line bg-panel2/40 text-xs text-mut">
            <div>
              Showing <strong className="text-fg font-mono">{(currentPage - 1) * pageSize + 1}</strong> to{" "}
              <strong className="text-fg font-mono">{Math.min(currentPage * pageSize, totalItems)}</strong> of{" "}
              <strong className="text-fg font-mono">{totalItems}</strong> models
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="rounded-lg border border-line bg-panel2 px-3 py-1 font-medium text-fg disabled:opacity-40 disabled:pointer-events-none hover:bg-white/[0.06] transition-colors cursor-pointer"
              >
                Previous
              </button>

              <span className="px-2 font-mono text-xs text-mut2">
                Page <strong className="text-fg">{currentPage}</strong> of <strong>{totalPages}</strong>
              </span>

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="rounded-lg border border-line bg-panel2 px-3 py-1 font-medium text-fg disabled:opacity-40 disabled:pointer-events-none hover:bg-white/[0.06] transition-colors cursor-pointer"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── API Usage Code Snippet Modal ── */}
      <Modal
        open={!!curlModel}
        onClose={() => setCurlModel(null)}
        title={curlModel ? `API Usage: ${curlModel.name}` : "API Usage"}
      >
        {curlModel && (
          <div className="space-y-4">
            <div>
              <p className="text-xs text-mut">
                ProRouter provides 100% OpenAI-compatible endpoints. Point your existing SDK or curl to our gateway:
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="text-[11px] font-mono text-mut">Canonical Model ID:</span>
                <code className="rounded bg-panel2 px-2 py-0.5 font-mono text-xs text-accent border border-line">
                  {curlModel.canonicalModelId || curlModel.slug}
                </code>
              </div>
            </div>

            <div className="relative rounded-xl border border-line bg-panel2/90 p-3 font-mono text-xs text-fg overflow-x-auto">
              <pre className="text-[11.5px] leading-relaxed">
                {getCurlSnippet(curlModel.canonicalModelId || curlModel.slug)}
              </pre>
              <button
                onClick={() => {
                  copyToClipboard(getCurlSnippet(curlModel.canonicalModelId || curlModel.slug), "modal-curl");
                  setCurlCopied(true);
                  setTimeout(() => setCurlCopied(false), 2000);
                }}
                className="absolute top-2.5 right-2.5 rounded-lg border border-line bg-panel px-2.5 py-1 text-xs text-mut hover:text-fg transition-colors flex items-center gap-1.5"
              >
                {curlCopied ? <Check className="size-3 text-good" /> : <Copy className="size-3" />}
                <span>{curlCopied ? "Copied" : "Copy curl"}</span>
              </button>
            </div>

            <div className="flex justify-between items-center pt-2">
              <Link
                href={`/chat?model=${curlModel.slug}`}
                className="text-xs text-accent hover:underline flex items-center gap-1"
              >
                <span>Open in Playground</span>
                <ArrowRight className="size-3" />
              </Link>
              <Button size="sm" onClick={() => setCurlModel(null)}>
                Close
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
