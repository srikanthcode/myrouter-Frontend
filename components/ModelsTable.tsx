"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Code2,
  ExternalLink,
  Eye,
  FileCode2,
  FileText,
  Filter,
  Image as ImageIcon,
  Play,
  Search,
  SlidersHorizontal,
  Sparkles,
  Volume2,
  Zap,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";
import type { ModelSummary, ProviderSummary } from "@/lib/server-api";
import { compactNumber } from "@/lib/server-api";
import { cx } from "@/lib/api";

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
  { key: "reasoning", label: "Advanced Reasoning" },
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
  const [sortBy, setSortBy] = useState<"rank" | "score" | "lowest_input" | "lowest_output" | "highest_context" | "alphabetical">("rank");
  const [pageSize, setPageSize] = useState<number>(50);
  const [currentPage, setCurrentPage] = useState<number>(1);

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

      // 4. Tier filter
      const isPromo = m.slug === "deepseek-v4.1-flash" || m.slug === "qwen3.8-27b";
      if (tierFilter === "promo_free" && !isPromo) return false;
      if (tierFilter === "paid" && isPromo) return false;

      return true;
    }).sort((a, b) => {
      const isPromoA = a.slug === "deepseek-v4.1-flash" || a.slug === "qwen3.8-27b";
      const isPromoB = b.slug === "deepseek-v4.1-flash" || b.slug === "qwen3.8-27b";

      // Always elevate promotional models to the top when sorting by rank or default
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
  }, [initialModels, searchQuery, selectedCategory, selectedProvider, tierFilter, sortBy]);

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
              placeholder="Search 500+ models by name, slug, provider, or architecture…"
              className="w-full rounded-xl border border-line bg-panel2/60 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-fg placeholder:text-mut2 focus:outline-hidden focus:border-accent/80 transition-colors"
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

        {/* Tier & Access Filter Chips */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-line/50">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-mut2 mr-1">Access:</span>
            <button
              onClick={() => handleTierChange("all")}
              className={cx(
                "rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
                tierFilter === "all"
                  ? "bg-accent/20 text-accent border border-accent/40"
                  : "bg-panel2/60 text-mut border border-line hover:text-fg"
              )}
            >
              All Models ({initialModels.length})
            </button>
            <button
              onClick={() => handleTierChange("promo_free")}
              className={cx(
                "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-bold transition-colors cursor-pointer",
                tierFilter === "promo_free"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                  : "bg-panel2/60 text-mut border border-line hover:text-emerald-400"
              )}
            >
              <Sparkles className="size-3 text-emerald-400" />
              48H Free Launch (2 Canonical Models)
            </button>
            <button
              onClick={() => handleTierChange("paid")}
              className={cx(
                "rounded-lg px-2.5 py-1 text-xs font-medium transition-colors cursor-pointer",
                tierFilter === "paid"
                  ? "bg-accent/20 text-accent border border-accent/40"
                  : "bg-panel2/60 text-mut border border-line hover:text-fg"
              )}
            >
              Paid Models ({initialModels.length - 2})
            </button>
          </div>

          {/* Model Count & Page Sizer */}
          <div className="flex items-center gap-3 text-xs text-mut">
            <span>
              Showing <strong className="text-fg font-mono">{filteredModels.length}</strong> models
            </span>
            <div className="flex items-center gap-1 border border-line rounded-lg bg-panel2/60 px-2 py-0.5">
              <span className="text-[11px] text-mut2">Page size:</span>
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

      {/* ── Token Harbor Compact Horizontal Table Layout ── */}
      <div className="rounded-2xl border border-line/80 bg-panel shadow-md overflow-hidden backdrop-blur-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-line bg-panel2/60 text-[11px] font-mono uppercase tracking-wider text-mut2">
                <th scope="col" className="py-3 px-3.5 w-14 text-center">#</th>
                <th scope="col" className="py-3 px-4 min-w-[280px]">Model & Architecture</th>
                <th scope="col" className="py-3 px-4 min-w-[190px]">
                  Pricing / 1M Tokens
                  <span className="block text-[10px] lowercase text-mut normal-case font-sans">
                    {currency === "INR" ? "Input / Output (₹ INR)" : "Input / Output ($ USD)"}
                  </span>
                </th>
                <th scope="col" className="py-3 px-3 min-w-[110px] text-center">Context</th>
                <th scope="col" className="py-3 px-3 min-w-[100px] text-center">Modalities</th>
                <th scope="col" className="py-3 px-4 min-w-[120px] text-center">Intelligence</th>
                <th scope="col" className="py-3 px-4 w-28 text-right">Action</th>
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
                  const isPromo = m.slug === "deepseek-v4.1-flash" || m.slug === "qwen3.8-27b";

                  // Extract prices
                  const inputUsd = m.customerPricingUsd?.inputPerMillion ?? (m.pricing.inputPerMillion / 8000);
                  const outputUsd = m.customerPricingUsd?.outputPerMillion ?? (m.pricing.outputPerMillion / 8000);
                  const inputInr = (m.pricing.inputPerMillion / 100);
                  const outputInr = (m.pricing.outputPerMillion / 100);

                  // Formatting display string
                  const formattedInPrice = currency === "INR" ? `₹${inputInr.toFixed(2)}` : `$${inputUsd.toFixed(2)}`;
                  const formattedOutPrice = currency === "INR" ? `₹${outputInr.toFixed(2)}` : `$${outputUsd.toFixed(2)}`;

                  // Benchmarks extraction
                  const topBenchmark = m.benchmarks && m.benchmarks.length > 0 ? m.benchmarks[0] : null;

                  return (
                    <tr
                      key={m.slug}
                      className={cx(
                        "group hover:bg-white/[0.03] transition-colors duration-150",
                        isPromo && "bg-accent/[0.04] border-l-2 border-l-accent"
                      )}
                    >
                      {/* 1. Rank Column */}
                      <td className="py-3 px-3.5 text-center font-mono text-[11.5px] text-mut2 font-semibold">
                        {globalIdx <= 3 ? (
                          <span className={cx(
                            "inline-flex size-6 items-center justify-center rounded-full text-xs font-bold",
                            globalIdx === 1 && "bg-amber-500/20 text-amber-300 border border-amber-500/40",
                            globalIdx === 2 && "bg-slate-300/20 text-slate-200 border border-slate-300/40",
                            globalIdx === 3 && "bg-amber-700/20 text-amber-500 border border-amber-700/40"
                          )}>
                            {globalIdx}
                          </span>
                        ) : (
                          `#${globalIdx}`
                        )}
                      </td>

                      {/* 2. Model & Architecture Info */}
                      <td className="py-3 px-4">
                        <div className="flex items-start gap-2.5">
                          {/* Provider Brand Badge */}
                          <div className={cx(
                            "size-8 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 border uppercase font-mono shadow-xs mt-0.5",
                            m.providerSlug.includes("anthropic") && "bg-amber-900/20 border-amber-600/30 text-amber-300",
                            m.providerSlug.includes("openai") && "bg-emerald-900/20 border-emerald-600/30 text-emerald-300",
                            m.providerSlug.includes("deepseek") && "bg-sky-900/20 border-sky-600/30 text-sky-300",
                            m.providerSlug.includes("qwen") && "bg-purple-900/20 border-purple-600/30 text-purple-300",
                            m.providerSlug.includes("groq") && "bg-orange-900/20 border-orange-600/30 text-orange-300",
                            m.providerSlug.includes("requesty") && "bg-indigo-900/20 border-indigo-600/30 text-indigo-300",
                            m.providerSlug.includes("google") && "bg-blue-900/20 border-blue-600/30 text-blue-300",
                            m.providerSlug.includes("mistral") && "bg-amber-800/20 border-amber-500/30 text-amber-200",
                            !["anthropic", "openai", "deepseek", "qwen", "groq", "requesty", "google", "mistral"].some(p => m.providerSlug.includes(p)) &&
                              "bg-panel2 border-line text-mut2"
                          )}>
                            {m.providerName ? m.providerName.slice(0, 2) : "PR"}
                          </div>

                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-1.5">
                              <Link
                                href={`/models/${m.slug}`}
                                className="font-semibold text-fg hover:text-accent transition-colors duration-150 text-[13.5px] truncate"
                              >
                                {m.name}
                              </Link>

                              {/* Strict promotional badge ONLY for the two canonical models */}
                              {isPromo && (
                                <span className="inline-flex items-center gap-1 rounded-md bg-accent/20 border border-accent/40 px-2 py-0.5 text-[10px] font-bold text-accent uppercase tracking-wider animate-pulse">
                                  <Sparkles className="size-2.5" />
                                  48H FREE LAUNCH
                                </span>
                              )}

                              {m.pricingStatus === "pricing_pending" && (
                                <span className="rounded-md bg-amber-500/15 border border-amber-500/30 px-1.5 py-0.5 text-[9.5px] font-medium text-amber-300 uppercase">
                                  Pricing Pending
                                </span>
                              )}
                            </div>

                            {/* Canonical Slug & Provider Pill */}
                            <div className="flex flex-wrap items-center gap-2 mt-1">
                              <span className="font-mono text-[10.5px] text-mut2 tracking-tight">
                                {m.canonicalModelId || m.slug}
                              </span>
                              <span className="text-[10px] px-1.5 py-0.2 rounded-sm bg-white/[0.04] text-mut border border-line/40">
                                {m.providerName}
                              </span>
                            </div>

                            {/* Capability Feature Badges */}
                            <div className="flex flex-wrap items-center gap-1 mt-1.5">
                              {m.capabilities.reasoning && (
                                <span className="inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[9.5px] bg-purple-500/10 text-purple-300 border border-purple-500/20">
                                  <Brain className="size-2.5" /> Reasoning
                                </span>
                              )}
                              {m.capabilities.vision && (
                                <span className="inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[9.5px] bg-sky-500/10 text-sky-300 border border-sky-500/20">
                                  <Eye className="size-2.5" /> Vision
                                </span>
                              )}
                              {m.capabilities.toolCalls && (
                                <span className="inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[9.5px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                                  <FileCode2 className="size-2.5" /> Tools
                                </span>
                              )}
                              {m.capabilities.streaming && (
                                <span className="inline-flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[9.5px] bg-amber-500/10 text-amber-300 border border-amber-500/20">
                                  <Zap className="size-2.5" /> Stream
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* 3. Pricing / 1M Tokens (No context window conflation!) */}
                      <td className="py-3 px-4">
                        {isPromo ? (
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-1.5">
                              <span className="font-bold text-emerald-400 font-mono text-[13px]">
                                {currency === "INR" ? "₹0.00" : "$0.00"}
                              </span>
                              <span className="rounded bg-emerald-500/20 text-emerald-300 px-1 py-0.2 text-[9px] font-bold uppercase">
                                48h Free
                              </span>
                            </div>
                            <div className="text-[10.5px] text-mut font-mono">
                              post-launch: {formattedInPrice} in / {formattedOutPrice} out
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-1">
                            <div className="flex items-baseline gap-1.5 font-mono text-[13px] font-semibold text-fg tabular-nums">
                              <span className="text-fg">{formattedInPrice}</span>
                              <span className="text-mut2 text-[11px] font-normal">in</span>
                              <span className="text-mut2">/</span>
                              <span className="text-fg">{formattedOutPrice}</span>
                              <span className="text-mut2 text-[11px] font-normal">out</span>
                            </div>
                            <div className="text-[10px] text-mut2 flex items-center gap-1">
                              <span>per 1M tokens</span>
                              {currency === "INR" && (
                                <span className="text-emerald-400 font-medium">🇮🇳 ₹80/$1</span>
                              )}
                            </div>
                          </div>
                        )}
                      </td>

                      {/* 4. Dedicated Context Window Column */}
                      <td className="py-3 px-3 text-center">
                        {m.contextWindow >= 1000000 ? (
                          <span className="inline-flex items-center justify-center rounded-md bg-indigo-500/20 border border-indigo-500/40 px-2 py-1 font-mono text-[11px] font-bold text-indigo-300 shadow-xs shadow-indigo-500/10">
                            1M tokens
                          </span>
                        ) : m.contextWindow >= 200000 ? (
                          <span className="inline-flex items-center justify-center rounded-md bg-emerald-500/15 border border-emerald-500/30 px-2 py-1 font-mono text-[11px] font-semibold text-emerald-300">
                            {compactNumber(m.contextWindow)} tokens
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center rounded-md bg-white/[0.04] border border-line px-2 py-1 font-mono text-[11px] text-mut">
                            {compactNumber(m.contextWindow)} tokens
                          </span>
                        )}
                      </td>

                      {/* 5. Modalities Column */}
                      <td className="py-3 px-3 text-center">
                        <div className="inline-flex items-center justify-center gap-1.5 text-mut">
                          <span title="Text supported">
                            <FileText className="size-3.5 text-fg" />
                          </span>
                          {m.capabilities.vision ? (
                            <span title="Vision & Image supported">
                              <ImageIcon className="size-3.5 text-sky-400" />
                            </span>
                          ) : (
                            <span title="Text only" className="opacity-20">
                              <ImageIcon className="size-3.5 text-mut2" />
                            </span>
                          )}
                          {m.capabilities.audio ? (
                            <span title="Audio supported">
                              <Volume2 className="size-3.5 text-amber-400" />
                            </span>
                          ) : null}
                          {m.capabilities.toolCalls ? (
                            <span title="Code & Tools supported">
                              <Code2 className="size-3.5 text-emerald-400" />
                            </span>
                          ) : null}
                        </div>
                      </td>

                      {/* 6. Intelligence & Benchmark Score */}
                      <td className="py-3 px-4 text-center">
                        {topBenchmark ? (
                          <div className="inline-flex flex-col items-center">
                            <span className="font-mono text-[12.5px] font-bold text-accent">
                              {topBenchmark.score}%
                            </span>
                            <span className="text-[9.5px] text-mut2 tracking-tight">
                              {topBenchmark.name}
                            </span>
                          </div>
                        ) : (
                          <div className="inline-flex flex-col items-center">
                            <span className="font-mono text-[12px] font-semibold text-fg">
                              {m.rating}/100
                            </span>
                            <span className="text-[9.5px] text-mut2">Composite</span>
                          </div>
                        )}
                      </td>

                      {/* 7. Quick Action Column */}
                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <Link
                            href={`/chat?model=${m.slug}`}
                            title="Test model in playground"
                            className="inline-flex size-7 items-center justify-center rounded-lg border border-line bg-panel2/80 text-mut hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
                          >
                            <Play className="size-3 fill-current" />
                          </Link>
                          <Link
                            href={`/models/${m.slug}`}
                            className="inline-flex items-center gap-1 rounded-lg border border-line2 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-fg hover:bg-white/[0.08] hover:border-accent/50 transition-colors cursor-pointer"
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
    </div>
  );
}
