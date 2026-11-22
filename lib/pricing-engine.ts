// Centralized Pricing & Promotion Definitions for Web Frontend
export type PricingCategory =
  | "budget"
  | "standard"
  | "advanced"
  | "coding"
  | "reasoning"
  | "premium"
  | "frontier"
  | "multimodal";

export type PricingStatus = "approved" | "pricing_pending" | "disabled" | "draft";

export interface PricingConfigOptions {
  operationalReserve?: number;
  targetGrossMargin?: number;
  modelMarkup?: number;
  providerMarkup?: number;
  minSellingPriceUsd?: number;
  maxApprovedMargin?: number;
  manualPriceOverrideUsd?: number | null;
}

export const DEFAULT_OPERATIONAL_RESERVE = 0.10; // 10%
export const DEFAULT_TARGET_GROSS_MARGIN = 0.30; // 30%
export const DEFAULT_MIN_SELLING_PRICE_USD = 0.05;
export const DEFAULT_MAX_APPROVED_MARGIN = 0.85;

export const DEFAULT_USD_TO_INR_MARKET_RATE = 88.0;
export const DEFAULT_USD_TO_INR_DISPLAY_RATE = 97.0;
export const DEFAULT_USD_TO_INR_RATE = DEFAULT_USD_TO_INR_DISPLAY_RATE;

export interface TokenPriceCalculation {
  upstreamCostUsdPer1M: number;
  customerPriceUsdPer1M: number;
  customerPriceInrPaisePer1M: number;
  marginPercent: number;
  operationalReservePercent: number;
  isOverride: boolean;
  status: PricingStatus;
}

export function calculateTokenPrice(
  upstreamCostUsdPer1M: number | null | undefined,
  options: PricingConfigOptions = {},
  usdToInrRate = DEFAULT_USD_TO_INR_DISPLAY_RATE
): TokenPriceCalculation {
  if (
    upstreamCostUsdPer1M === null ||
    upstreamCostUsdPer1M === undefined ||
    upstreamCostUsdPer1M < 0 ||
    isNaN(upstreamCostUsdPer1M)
  ) {
    return {
      upstreamCostUsdPer1M: 0,
      customerPriceUsdPer1M: 0,
      customerPriceInrPaisePer1M: 0,
      marginPercent: 0,
      operationalReservePercent: (options.operationalReserve ?? DEFAULT_OPERATIONAL_RESERVE) * 100,
      isOverride: false,
      status: "pricing_pending",
    };
  }

  if (
    options.manualPriceOverrideUsd !== undefined &&
    options.manualPriceOverrideUsd !== null &&
    options.manualPriceOverrideUsd >= 0
  ) {
    const override = options.manualPriceOverrideUsd;
    const margin = override > 0 ? (override - upstreamCostUsdPer1M) / override : 0;
    const inrPaise = Math.ceil(override * usdToInrRate * 100);
    return {
      upstreamCostUsdPer1M: upstreamCostUsdPer1M,
      customerPriceUsdPer1M: Number(override.toFixed(4)),
      customerPriceInrPaisePer1M: inrPaise,
      marginPercent: Number((margin * 100).toFixed(2)),
      operationalReservePercent: (options.operationalReserve ?? DEFAULT_OPERATIONAL_RESERVE) * 100,
      isOverride: true,
      status: "approved",
    };
  }

  if (upstreamCostUsdPer1M === 0) {
    return {
      upstreamCostUsdPer1M: 0,
      customerPriceUsdPer1M: 0,
      customerPriceInrPaisePer1M: 0,
      marginPercent: 0,
      operationalReservePercent: (options.operationalReserve ?? DEFAULT_OPERATIONAL_RESERVE) * 100,
      isOverride: false,
      status: "pricing_pending",
    };
  }

  const opReserve = Math.max(0, options.operationalReserve ?? DEFAULT_OPERATIONAL_RESERVE);
  const targetMargin = Math.min(
    options.maxApprovedMargin ?? DEFAULT_MAX_APPROVED_MARGIN,
    Math.max(0.01, options.targetGrossMargin ?? DEFAULT_TARGET_GROSS_MARGIN)
  );
  const modelMarkup = options.modelMarkup ?? 0;
  const providerMarkup = options.providerMarkup ?? 0;
  const minFloor = options.minSellingPriceUsd ?? DEFAULT_MIN_SELLING_PRICE_USD;

  const totalReserveAndMarkup = 1 + opReserve + modelMarkup + providerMarkup;
  const costWithReserve = upstreamCostUsdPer1M * totalReserveAndMarkup;
  const denominator = 1 - targetMargin;
  const rawPrice = costWithReserve / denominator;
  const finalPrice = Math.max(minFloor, rawPrice);

  const realizedMargin = (finalPrice - upstreamCostUsdPer1M) / finalPrice;
  const inrPaise = Math.ceil(finalPrice * usdToInrRate * 100);

  return {
    upstreamCostUsdPer1M: Number(upstreamCostUsdPer1M.toFixed(4)),
    customerPriceUsdPer1M: Number(finalPrice.toFixed(4)),
    customerPriceInrPaisePer1M: inrPaise,
    marginPercent: Number((realizedMargin * 100).toFixed(2)),
    operationalReservePercent: Number((opReserve * 100).toFixed(2)),
    isOverride: false,
    status: "approved",
  };
}

export function calculateSellingPrice(
  upstreamCostUsd: number,
  targetGrossMargin = DEFAULT_TARGET_GROSS_MARGIN,
  floorPriceUsd = DEFAULT_MIN_SELLING_PRICE_USD,
  operationalReserve = DEFAULT_OPERATIONAL_RESERVE
): number {
  if (upstreamCostUsd <= 0) return floorPriceUsd;
  const costWithReserve = upstreamCostUsd * (1 + operationalReserve);
  const rawPrice = costWithReserve / (1 - Math.min(DEFAULT_MAX_APPROVED_MARGIN, Math.max(0.05, targetGrossMargin)));
  const finalPrice = Math.max(rawPrice, floorPriceUsd);
  return Number(finalPrice.toFixed(4));
}

export function usdToInrPaise(usdAmount: number, usdToInrRate = DEFAULT_USD_TO_INR_DISPLAY_RATE): number {
  return Math.round(usdAmount * usdToInrRate * 100);
}

export function inrPaiseToUsd(paise: number, usdToInrRate = DEFAULT_USD_TO_INR_DISPLAY_RATE): number {
  const rupees = paise / 100;
  return Number((rupees / usdToInrRate).toFixed(4));
}

// ── Permanent Daily Free-Token Entitlement Policy ──
export const DAILY_FREE_ALLOWANCE_TOKENS = 1_000_000;
export const DEFAULT_DAILY_FREE_TOKENS = DAILY_FREE_ALLOWANCE_TOKENS;

export const DAILY_FREE_ELIGIBLE_MODELS = [
  "deepseek-v4.1-flash",
  "qwen3.8-27b",
] as const;

export type DailyFreeEligibleModel = (typeof DAILY_FREE_ELIGIBLE_MODELS)[number];
export const PROMOTIONAL_CANONICAL_MODELS = DAILY_FREE_ELIGIBLE_MODELS;
export type PromotionalCanonicalModel = DailyFreeEligibleModel;

export const PROMOTIONAL_48H_MODELS = new Set<string>([
  "deepseek-v4.1-flash",
  "deepseek-v4.1-flash-1017",
  "qwen3.8-27b",
  "qwen/qwen3.8-27b",
  "qwen3.2-27b",
]);

export function resolveDailyFreeEligibleId(identifier: string): DailyFreeEligibleModel | null {
  if (!identifier) return null;
  const clean = identifier.trim().toLowerCase();

  if (
    clean.includes("qwen-2.5-coder") ||
    clean.includes("qwen2.5-coder") ||
    clean.includes("deepseek-v4-pro") ||
    clean.includes("deepseek-r1") ||
    clean.includes("deepseek-v3")
  ) {
    return null;
  }

  if (
    clean === "deepseek-v4.1-flash" ||
    clean === "deepseek-v4.1-flash-1017" ||
    clean === "deepseek-ai/deepseek-v4.1-flash-1017" ||
    clean === "deepseek-ai/deepseek-v4.1-flash" ||
    clean === "prorouter/deepseek-v4.1-flash"
  ) {
    return "deepseek-v4.1-flash";
  }

  if (
    clean === "qwen3.8-27b" ||
    clean === "qwen-3.8-27b" ||
    clean === "qwen/qwen3.8-27b" ||
    clean === "groq/qwen3.8-27b" ||
    clean === "qwen3.2-27b" ||
    clean === "qwen-3.2-27b" ||
    clean === "qwen/qwen3.2-27b"
  ) {
    return "qwen3.8-27b";
  }

  return null;
}

export function isDailyFreeEligible(identifier: string): boolean {
  return resolveDailyFreeEligibleId(identifier) !== null;
}

export function resolvePromotionalCanonicalId(identifier: string): PromotionalCanonicalModel | null {
  return resolveDailyFreeEligibleId(identifier);
}

export function isStrictlyPromotionalEligible(identifier: string): boolean {
  return resolveDailyFreeEligibleId(identifier) !== null;
}

export function getTodayUtcKey(d = new Date()): string {
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function getNextUtcResetTime(d = new Date()): Date {
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + 1, 0, 0, 0, 0));
}

export const PROMO_DURATION_MS = 24 * 60 * 60 * 1000;

export function isPromotionActive(activatedAt: Date | string | null): {
  active: boolean;
  remainingMs: number;
  remainingFormatted: string;
  expiresAt: Date | null;
  eligibleCanonicalModels: readonly string[];
} {
  const now = new Date();
  const nextReset = getNextUtcResetTime(now);
  const remainingMs = Math.max(0, nextReset.getTime() - now.getTime());
  const hours = Math.floor(remainingMs / (1000 * 60 * 60));
  const minutes = Math.floor((remainingMs % (1000 * 60 * 60)) / (1000 * 60));

  return {
    active: true,
    remainingMs,
    remainingFormatted: `${hours}h ${minutes}m left (resets at 00:00 UTC)`,
    expiresAt: nextReset,
    eligibleCanonicalModels: DAILY_FREE_ELIGIBLE_MODELS,
  };
}

export function isPromotionalModel(modelId: string): boolean {
  return isStrictlyPromotionalEligible(modelId);
}

export function formatPricingDisplay(
  inputUsd: number,
  outputUsd: number,
  currency: "USD" | "INR" = "USD",
  usdToInrRate = DEFAULT_USD_TO_INR_DISPLAY_RATE
): string {
  if (currency === "INR") {
    const inrIn = (inputUsd * usdToInrRate).toFixed(2);
    const inrOut = (outputUsd * usdToInrRate).toFixed(2);
    return `₹${inrIn} In | ₹${inrOut} Out`;
  }
  return `$${inputUsd.toFixed(2)} In | $${outputUsd.toFixed(2)} Out`;
}

export function formatCachedPricingDisplay(
  cachedUsd: number,
  currency: "USD" | "INR" = "USD",
  usdToInrRate = DEFAULT_USD_TO_INR_DISPLAY_RATE
): string {
  if (currency === "INR") {
    const inr = (cachedUsd * usdToInrRate).toFixed(2);
    return `₹${inr} Cached`;
  }
  return `$${cachedUsd.toFixed(2)} Cached`;
}
