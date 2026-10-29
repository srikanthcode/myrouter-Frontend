import Link from "next/link";
import { ArrowRight, Check, Clock3, Infinity as InfinityIcon, ShieldCheck } from "lucide-react";
import { Badge, Card } from "@/components/ui";
import { TEXT_PLANS, usd } from "@/components/text-reply/catalog";
import {
  PolicyRow,
  PreviewNotice,
  SectionHeading,
  TextPageHeading,
  ctaPrimary,
  ctaSecondary,
  ctaSmall,
} from "@/components/text-reply/ui";

const unlimited = TEXT_PLANS.find((plan) => plan.id === "text-unlimited") ?? TEXT_PLANS[TEXT_PLANS.length - 1];

export default function TextFairUsePage() {
  return (
    <div className="space-y-6">
      <TextPageHeading
        eyebrow="Text & Reply"
        title="Fair use, stated before launch."
        description="Text Unlimited is not for sale. This page records the safeguards that must be published and supportable before any unlimited plan is offered."
        actions={
          <Link href="/dashboard/text/plans" className={ctaSmall}>
            Back to plans
          </Link>
        }
      />

      <PreviewNotice>
        This policy is a product preview, not a live contract. No unlimited subscription can be purchased and no limits
        below are active billing terms.
      </PreviewNotice>

      <Card className="relative overflow-hidden p-5 sm:p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.07),transparent_55%)]"
        />
        <div className="relative flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg border border-line2 bg-white/[0.04] text-mut">
                <InfinityIcon size={18} aria-hidden="true" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-xl font-semibold tracking-[-0.03em] text-fg">{unlimited.name}</h2>
                  <Badge tone="warn">Not for sale</Badge>
                </div>
                <p className="mt-0.5 text-[11.5px] text-mut2">Preview tier · {usd(unlimited.priceUsd)} / month shown for comparison only</p>
              </div>
            </div>
            <p className="mt-4 text-[12.5px] leading-relaxed text-mut">
              “Unlimited” cannot mean unbounded concurrency, unbounded output, or immunity from abuse controls. We will
              only sell an unlimited plan once its fair-use boundary, output cap, rate limits, concurrency, and capacity
              behavior are explicit.
            </p>
          </div>
          <div className="grid shrink-0 grid-cols-2 gap-3 lg:w-72">
            <div className="rounded-lg border border-line bg-ink2 px-3.5 py-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Availability</p>
              <p className="mt-1 text-[12.5px] font-medium text-fg">Not scheduled</p>
            </div>
            <div className="rounded-lg border border-line bg-ink2 px-3.5 py-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Checkout</p>
              <p className="mt-1 text-[12.5px] font-medium text-fg">Disabled</p>
            </div>
          </div>
        </div>
      </Card>

      <section className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="p-5">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-accent" aria-hidden="true" />
            <h2 className="text-[13px] font-semibold text-fg">Safeguards that must be published first</h2>
          </div>
          <div className="mt-2">
            <PolicyRow
              title="Fair-use boundary"
              body="What ordinary high-volume use looks like, and the point at which usage is considered abnormal rather than fair."
              pending="To be published"
            />
            <PolicyRow
              title="Maximum output per reply"
              body="A clear ceiling on generated length so one request cannot consume capacity without bound."
              pending="To be published"
            />
            <PolicyRow
              title="Rate and concurrency limits"
              body="Requests per minute, concurrent requests, and queue behavior, stated per plan rather than discovered in production."
              pending="To be published"
            />
            <PolicyRow
              title="Abuse detection"
              body="How automated account creation, limit circumvention, resale, and deliberate capacity exhaustion are detected and handled."
              pending="To be published"
            />
            <PolicyRow
              title="Capacity controls"
              body="What happens during peak demand: queueing, temporary 429 responses, or a documented fallback model. Never a silent downgrade."
            />
            <PolicyRow
              title="Notice and remedy"
              body="How a customer is told that a limit was reached and how to appeal or change plans. No unexplained throttling."
            />
          </div>
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <div className="flex items-center gap-2">
              <Clock3 size={16} className="text-warn" aria-hidden="true" />
              <h2 className="text-[13px] font-semibold text-fg">Why it is not for sale</h2>
            </div>
            <p className="mt-2 text-[12px] leading-relaxed text-mut">
              Offering “unlimited” before these controls exist would make the price a promise the product cannot keep.
              The plan stays visible so the comparison is honest, but its checkout is disabled.
            </p>
            <div className="mt-4 rounded-lg border border-warn/20 bg-warn/[0.04] px-3.5 py-3">
              <p className="text-[11px] leading-relaxed text-mut">
                <span className="font-medium text-fg">Status:</span> limits not published, billing provider not connected,
                and no launch date has been set.
              </p>
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="text-[13px] font-semibold text-fg">What will not change silently</h2>
            <ul className="mt-3 space-y-2.5">
              {[
                "A purchased allowance will not be shortened without notice.",
                "A reply will not be charged twice because a stream was retried.",
                "Failed requests will not consume a reply.",
                "A limit will be visible before checkout, not only after it is hit.",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-[11.5px] leading-relaxed text-mut">
                  <Check size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-3">
        <SectionHeading
          title="What counts as abuse"
          body="Fair use protects ordinary high-volume work. It does not permit bypassing the controls that keep the service available."
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Circumventing limits", body: "Creating accounts or rotating keys to avoid an allowance, rate limit, or suspension." },
            { title: "Reselling raw access", body: "Repackaging the service as an unlimited pass without a separate agreement." },
            { title: "Capacity exhaustion", body: "Deliberately flooding concurrency or output length to degrade the service for others." },
            { title: "Automated misuse", body: "Using automation to evade abuse checks, caps, or queue controls." },
          ].map((item) => (
            <Card key={item.title} className="p-4">
              <h3 className="text-[12.5px] font-semibold text-fg">{item.title}</h3>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-mut">{item.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-4 rounded-xl border border-line bg-panel px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-[14px] font-semibold text-fg">Need a plan that is available today?</h2>
          <p className="mt-1 text-[12px] text-mut">Compare monthly allowances up to 10,000 replies, or use token-based billing.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/dashboard/text/plans" className={ctaPrimary}>
            Compare monthly plans
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/dashboard/text/payg" className={ctaSecondary}>
            Pay as you go
          </Link>
        </div>
      </div>
    </div>
  );
}
