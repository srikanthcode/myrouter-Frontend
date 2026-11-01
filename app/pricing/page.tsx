import type { Metadata } from "next";
import { PageHeader, PublicShell } from "@/components/PublicShell";
import { fetchJson } from "@/lib/server-api";
import { PricingContent } from "./PricingContent";

export const metadata: Metadata = {
  title: "ProRouter Pricing — Transparent Token Pricing, Free Tier & Pay-As-You-Go",
  description:
    "Pay-as-you-go AI model inference. Free tier available. Paid models billed per million tokens in INR and USD straight from your wallet with zero markup, no subscription minimums, and instant top-ups.",
  keywords: [
    "AI API pricing",
    "cheap LLM API",
    "DeepSeek pricing",
    "Claude pricing",
    "AI token cost",
    "pay as you go AI",
    "ProRouter pricing",
    "India AI API pricing",
    "USD AI API pricing",
  ],
  alternates: {
    canonical: "https://www.prorouter.in/pricing",
  },
  openGraph: {
    title: "ProRouter Pricing — Transparent Token Pricing & Free Tier",
    description: "Pay for what you use. Free models cost nothing; paid models billed per million tokens in INR and USD.",
    url: "https://www.prorouter.in/pricing",
    siteName: "ProRouter",
    type: "website",
  },
};

interface AstraPromo {
  available: boolean;
  campaign: {
    name: string;
    originalPricePaise: number;
    originalPriceFormatted: string;
    discountPercent: number;
    promoPricePaise: number;
    promoPriceFormatted: string;
    trialDays: number;
    endsAt: string | null;
    active: boolean;
  } | null;
  entitlement: { activatedAt: string; expiresAt: string; daysLeft: number } | null;
  myCode: string | null;
}

export default async function PricingPage() {
  const astra = await fetchJson<AstraPromo>("/promotions/astra").catch(() => null);
  const campaign = astra?.available ? astra.campaign : null;

  return (
    <PublicShell>
      <PageHeader
        eyebrow="Pricing"
        title="Pay for what you use. Nothing else."
        subtitle="Free models are genuinely free, subject to plan rate limits and the shared queue. Paid models are billed per million tokens straight from your wallet in INR or USD — no seat fees, no minimums."
      />
      <PricingContent campaign={campaign} />
    </PublicShell>
  );
}
