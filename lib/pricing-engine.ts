// Centralized Pricing & Promotion Definitions for Web Frontend
export const DEFAULT_USD_TO_INR_RATE = 80; // $1 USD = ₹80 INR
export const DEFAULT_TARGET_GROSS_MARGIN = 0.45; // 45% gross margin

export interface CreditPackage {
  id: string;
  name: string;
  usdAmount: number;
  inrPricePaise: number;
  inrFormatted: string;
  usdFormatted: string;
  bonusPercent: number;
  popular?: boolean;
}

export const CREDIT_PACKAGES: CreditPackage[] = [
  { id: "pkg_starter", name: "Starter", usdAmount: 5, inrPricePaise: 40000, inrFormatted: "₹400", usdFormatted: "$5", bonusPercent: 0 },
  { id: "pkg_basic", name: "Basic", usdAmount: 10, inrPricePaise: 80000, inrFormatted: "₹800", usdFormatted: "$10", bonusPercent: 0, popular: true },
  { id: "pkg_growth", name: "Growth", usdAmount: 25, inrPricePaise: 200000, inrFormatted: "₹2,000", usdFormatted: "$25", bonusPercent: 0 },
  { id: "pkg_pro", name: "Pro", usdAmount: 50, inrPricePaise: 400000, inrFormatted: "₹4,000", usdFormatted: "$50", bonusPercent: 0 },
  { id: "pkg_business", name: "Business", usdAmount: 100, inrPricePaise: 800000, inrFormatted: "₹8,000", usdFormatted: "$100", bonusPercent: 0 },
];

export function calculateSellingPrice(
  upstreamCostUsd: number,
  targetGrossMargin = DEFAULT_TARGET_GROSS_MARGIN,
  floorPriceUsd = 0.10,
): number {
  if (upstreamCostUsd <= 0) return floorPriceUsd;
  const rawPrice = upstreamCostUsd / (1 - Math.min(0.95, Math.max(0.05, targetGrossMargin)));
  const finalPrice = Math.max(rawPrice, floorPriceUsd);
  return Number(finalPrice.toFixed(4));
}

export function usdToInrPaise(usdAmount: number, usdToInrRate = DEFAULT_USD_TO_INR_RATE): number {
  return Math.round(usdAmount * usdToInrRate * 100);
}

export function inrPaiseToUsd(paise: number, usdToInrRate = DEFAULT_USD_TO_INR_RATE): number {
  const rupees = paise / 100;
  return Number((rupees / usdToInrRate).toFixed(4));
}

export const PROMOTIONAL_48H_MODELS = new Set<string>([
  "deepseek-v4.1-flash",
  "deepseek-v4.1-flash-1017",
  "qwen-2.5-coder-32b",
  "qwen3.8-27b",
]);
