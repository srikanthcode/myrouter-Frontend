import Link from "next/link";
import { ArrowRight, ChartColumn, Clock3, Gauge, ReceiptText, Settings2, TriangleAlert } from "lucide-react";
import { Badge, Card } from "@/components/ui";
import { TEXT_USAGE, compact, usd } from "@/components/text-reply/catalog";
import {
  PreviewNotice,
  RecentRepliesTable,
  ReplyChart,
  TextPageHeading,
  TextStat,
  UsageMeter,
  ctaPrimary,
  ctaSecondary,
  ctaSmall,
} from "@/components/text-reply/ui";

export default function TextUsagePage() {
  const usedPct = (TEXT_USAGE.repliesUsed / TEXT_USAGE.repliesIncluded) * 100;
  const remaining = Math.max(0, TEXT_USAGE.repliesIncluded - TEXT_USAGE.repliesUsed);
  return (
    <div className="space-y-6">
      <TextPageHeading
        eyebrow="Text & Reply"
        title="Usage dashboard."
        description="One view of the current subscription, replies consumed, remaining allowance, token totals, and recent requests."
        actions={
          <>
            <Link href="/dashboard/text/plans" className={ctaSmall}>
              Compare plans
            </Link>
            <Link href="/dashboard/text/manage" className={ctaPrimary}>
              <Settings2 size={14} aria-hidden="true" />
              Manage Subscription
            </Link>
          </>
        }
      />

      <PreviewNotice>
        These usage figures are development fixtures. They do not come from a live text-reply meter, and they are not
        used for authoritative billing.
      </PreviewNotice>

      <div className="flex flex-col gap-3 rounded-xl border border-warn/25 bg-warn/[0.045] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-2.5">
          <TriangleAlert size={16} className="mt-0.5 shrink-0 text-warn" aria-hidden="true" />
          <div>
            <p className="text-[12.5px] font-medium text-fg">You have used {usedPct.toFixed(1)}% of this month&apos;s replies.</p>
            <p className="mt-0.5 text-[11.5px] text-mut">
              {remaining.toLocaleString()} replies remain before the {TEXT_USAGE.renews} reset. An 80% warning is shown
              here; the limit state has its own screen.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-wrap gap-2">
          <Link href="/dashboard/text/limit" className={ctaSmall}>
            Preview limit state
          </Link>
        </div>
      </div>

      <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mut2">Current plan</p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-fg">{TEXT_USAGE.planName}</h2>
                <Badge tone="accent">Active preview</Badge>
              </div>
              <p className="mt-1 text-[11.5px] text-mut2">
                {usd(TEXT_USAGE.priceUsd)} / month · Renews {TEXT_USAGE.renews}
              </p>
            </div>
            <Badge tone="warn">Preview data</Badge>
          </div>
          <div className="mt-5">
            <UsageMeter used={TEXT_USAGE.repliesUsed} included={TEXT_USAGE.repliesIncluded} />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-line pt-4 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Period start</p>
              <p className="mt-1 text-[12.5px] font-medium text-fg">{TEXT_USAGE.periodStart}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Estimated spend</p>
              <p className="mt-1 text-[12.5px] font-medium text-fg">{usd(TEXT_USAGE.priceUsd)}</p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Overage this period</p>
              <p className="mt-1 text-[12.5px] font-medium text-fg">$0.00</p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <Link href="/dashboard/text/manage" className={ctaSecondary}>
              Manage subscription
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
            <Link href="/dashboard/text/payg" className={ctaSmall}>
              Switch to PAYG
            </Link>
          </div>
        </Card>

        <ReplyChart />
      </section>

      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <TextStat
          label="Replies used"
          value={TEXT_USAGE.repliesUsed.toLocaleString()}
          detail={`${usedPct.toFixed(1)}% of ${TEXT_USAGE.repliesIncluded.toLocaleString()} included`}
          icon={<Gauge size={16} />}
        />
        <TextStat
          label="Replies remaining"
          value={remaining.toLocaleString()}
          detail={`Resets ${TEXT_USAGE.renews}`}
          icon={<Clock3 size={16} />}
        />
        <TextStat
          label="Input tokens"
          value={compact(TEXT_USAGE.inputTokens)}
          detail={`Output ${compact(TEXT_USAGE.outputTokens)}`}
          icon={<ChartColumn size={16} />}
        />
        <TextStat
          label="Estimated spend"
          value={usd(TEXT_USAGE.priceUsd)}
          detail="Monthly subscription · no overage"
          icon={<ReceiptText size={16} />}
        />
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <RecentRepliesTable />
        <Card className="p-5">
          <h2 className="text-[13px] font-semibold text-fg">How the allowance works</h2>
          <ul className="mt-3 space-y-3">
            {[
              "One successfully completed response counts as one reply.",
              "A conversation can contain multiple replies.",
              "Failed requests do not consume the allowance.",
              "Streaming counts once when the response completes.",
              "At 80% the dashboard warns; at 100% new replies stop until renewal, upgrade, or a switch to PAYG.",
            ].map((item) => (
              <li key={item} className="flex gap-2 text-[11.5px] leading-relaxed text-mut">
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <Link href="/dashboard/text/fair-use" className={`${ctaSmall} mt-4`}>
            Fair-use policy
          </Link>
        </Card>
      </section>
    </div>
  );
}
