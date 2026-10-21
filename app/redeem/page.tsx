import Link from "next/link";
import type { Metadata } from "next";
import { Gift } from "lucide-react";
import { PageHeader, PublicShell } from "@/components/PublicShell";
import { Badge, Card } from "@/components/ui";
import { fetchJson } from "@/lib/server-api";
import { RedeemForm } from "./RedeemForm";

export const metadata: Metadata = {
  title: "Redeem a code",
  description: "Redeem an Astra referral or gift code to activate your trial.",
};

interface AstraPromo {
  available: boolean;
  campaign: { name: string; trialDays: number; discountPercent: number; promoPriceFormatted: string; originalPriceFormatted: string } | null;
}

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function RedeemPage({ searchParams }: { searchParams: SearchParams }) {
  const sp = await searchParams;
  const raw = sp.code;
  const defaultCode = (Array.isArray(raw) ? raw[0] : raw) ?? "";
  const astra = await fetchJson<AstraPromo>("/promotions/astra");
  const campaign = astra?.available ? astra.campaign : null;

  return (
    <PublicShell>
      <PageHeader
        eyebrow="Promotions"
        title="Redeem a code."
        subtitle="Got a referral or gift code? Enter it below to activate your Astra trial."
      >
        {campaign && (
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="accent">{campaign.name}</Badge>
            <Badge tone="neutral">{campaign.trialDays}-day trial</Badge>
            <Badge tone="good">{campaign.discountPercent}% off after trial</Badge>
          </div>
        )}
      </PageHeader>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <RedeemForm defaultCode={defaultCode} />

        <Card className="mt-8 max-w-md p-5">
          <div className="flex items-start gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-ink2">
              <Gift className="size-4 text-accent" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-sm font-semibold">No code yet?</h2>
              <p className="mt-2 text-[13px] leading-relaxed text-mut">
                Every eligible account gets a personal referral code on the{" "}
                <Link
                  href="/dashboard/referrals"
                  className="text-accent underline-offset-2 transition-colors duration-200 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  referrals page
                </Link>
                . Share it — when someone redeems it, they get Astra access and you can track redemptions from your dashboard.
              </p>
              <Link
                href="/pricing"
                className="mt-4 inline-flex h-9 cursor-pointer items-center rounded-lg border border-line2 bg-white/[0.04] px-4 text-[13px] font-medium text-fg transition-colors duration-200 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                See pricing
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </PublicShell>
  );
}
