"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";
import { Input } from "@/components/ui";
import { TEXT_PAYG, compact, usd } from "@/components/text-reply/catalog";
import { ctaPrimary, ctaSmall } from "@/components/text-reply/ui";

function toInt(value: string, max: number): number {
  const parsed = Number.parseInt(value.replace(/[^\d]/g, ""), 10);
  if (!Number.isFinite(parsed) || parsed < 0) return 0;
  return Math.min(parsed, max);
}

export function PaygEstimator() {
  const [replies, setReplies] = useState("1000");
  const [inputTokens, setInputTokens] = useState("1200");
  const [outputTokens, setOutputTokens] = useState("800");

  const replyCount = toInt(replies, 10_000_000);
  const inputPerReply = toInt(inputTokens, 10_000_000);
  const outputPerReply = toInt(outputTokens, 10_000_000);

  const monthlyInput = replyCount * inputPerReply;
  const monthlyOutput = replyCount * outputPerReply;
  const inputCost = (monthlyInput / 1_000_000) * TEXT_PAYG.inputUsdPerMillion;
  const outputCost = (monthlyOutput / 1_000_000) * TEXT_PAYG.outputUsdPerMillion;
  const total = inputCost + outputCost;
  const perReply = replyCount > 0 ? total / replyCount : 0;
  const precise = (value: number) => usd(value, value > 0 && value < 1 ? 4 : 2);

  return (
    <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-xl border border-line bg-panel p-5">
        <div className="flex items-center gap-2">
          <Calculator size={16} className="text-accent" aria-hidden="true" />
          <h3 className="text-[13px] font-semibold text-fg">Estimate pay-as-you-go usage</h3>
        </div>
        <p className="mt-1 text-[11.5px] leading-relaxed text-mut2">
          Use your own assumptions. This is a calculator, not a quote or a prediction of model usage.
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Input
            label="Replies / month"
            inputMode="numeric"
            value={replies}
            onChange={(event) => setReplies(event.target.value)}
            hint="Completed responses"
          />
          <Input
            label="Input tokens / reply"
            inputMode="numeric"
            value={inputTokens}
            onChange={(event) => setInputTokens(event.target.value)}
            hint="Prompt + context"
          />
          <Input
            label="Output tokens / reply"
            inputMode="numeric"
            value={outputTokens}
            onChange={(event) => setOutputTokens(event.target.value)}
            hint="Generated answer"
          />
        </div>
        <div className="mt-4 rounded-lg border border-line bg-ink2 px-3.5 py-3">
          <p className="text-[11px] leading-relaxed text-mut2">
            Formula: (input tokens × ${TEXT_PAYG.inputUsdPerMillion.toFixed(2)} + output tokens × $
            {TEXT_PAYG.outputUsdPerMillion.toFixed(2)}) per 1M tokens, multiplied across replies.
          </p>
        </div>
      </div>

      <div className="flex flex-col rounded-xl border border-accent/25 bg-accent/[0.045] p-5">
        <p className="font-mono text-[9.5px] uppercase tracking-[0.16em] text-mut2">Estimated monthly cost</p>
        <p className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-fg">{precise(total)}</p>
        <p className="mt-1 text-[11.5px] text-mut">
          {replyCount.toLocaleString()} replies · {compact(monthlyInput)} input · {compact(monthlyOutput)} output tokens
        </p>
        <div className="mt-4 space-y-2 border-t border-line pt-4 text-[12px]">
          <div className="flex justify-between gap-4 text-mut">
            <span>Input at ${TEXT_PAYG.inputUsdPerMillion.toFixed(2)} / 1M</span>
            <span className="font-mono text-fg">{precise(inputCost)}</span>
          </div>
          <div className="flex justify-between gap-4 text-mut">
            <span>Output at ${TEXT_PAYG.outputUsdPerMillion.toFixed(2)} / 1M</span>
            <span className="font-mono text-fg">{precise(outputCost)}</span>
          </div>
          <div className="flex justify-between gap-4 text-mut">
            <span>Average per reply</span>
            <span className="font-mono text-fg">{precise(perReply)}</span>
          </div>
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <Link href="/dashboard/wallet" className={ctaPrimary}>
            Add Balance
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/dashboard/text/plans" className={ctaSmall}>
            Compare monthly plans
          </Link>
        </div>
        <p className="mt-2 text-[10px] leading-relaxed text-mut2">
          Billing is not connected in this preview. No balance is added and no charge is made.
        </p>
      </div>
    </div>
  );
}
