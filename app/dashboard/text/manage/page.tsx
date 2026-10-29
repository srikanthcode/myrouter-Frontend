"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, Clock3, CreditCard, RefreshCw, ShieldCheck, TriangleAlert } from "lucide-react";
import { Badge, Button, Card, Modal, useToast } from "@/components/ui";
import { TEXT_PLANS, usd, type MonthlyPlan } from "@/components/text-reply/catalog";
import {
  PreviewNotice,
  SectionHeading,
  TextPageHeading,
  ctaSecondary,
  ctaSmall,
} from "@/components/text-reply/ui";

const PREVIEW_PLANS = TEXT_PLANS.filter((plan) => plan.status === "preview");

export default function TextManagePage() {
  const toast = useToast();
  const [planId, setPlanId] = useState("text-plus");
  const [status, setStatus] = useState<"active" | "canceled">("active");
  const [pendingPlan, setPendingPlan] = useState<MonthlyPlan | null>(null);
  const [cancelOpen, setCancelOpen] = useState(false);
  const plan = PREVIEW_PLANS.find((item) => item.id === planId) ?? PREVIEW_PLANS[0];

  const previewSaved = () => toast.push("Preview only — no changes were saved.", "info");

  return (
    <div className="space-y-6">
      <TextPageHeading
        eyebrow="Text & Reply · Subscription preview"
        title="Manage your subscription."
        description="Review the renewal date and price, compare monthly plans, and preview cancellation. Nothing on this screen calls a billing API."
        actions={
          <>
            <Link href="/dashboard/text/usage" className={ctaSmall}>
              View usage
            </Link>
            <Link href="/dashboard/text/plans" className={ctaSecondary}>
              Compare plans
            </Link>
          </>
        }
      />

      <PreviewNotice>
        This is a frontend preview. Changing a plan or canceling here updates only local preview state; it does not
        create, change, or cancel a real subscription and does not take a payment.
      </PreviewNotice>

      {status === "canceled" ? (
        <div className="flex flex-col gap-3 rounded-xl border border-warn/25 bg-warn/[0.045] px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2 text-[12px] leading-relaxed text-mut">
            <TriangleAlert size={15} className="mt-0.5 shrink-0 text-warn" aria-hidden="true" />
            Preview cancellation scheduled. Access would continue until 1 Nov 2026, and the plan would not renew.
          </p>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setStatus("active");
              previewSaved();
            }}
          >
            <RefreshCw size={14} aria-hidden="true" />
            Reactivate Plan
          </Button>
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
        <Card className="p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-mut2">Current subscription</p>
              <div className="mt-1 flex flex-wrap items-center gap-2">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-fg">{plan.name}</h2>
                <Badge tone={status === "active" ? "accent" : "warn"}>
                  {status === "active" ? "Active preview" : "Cancels 1 Nov 2026"}
                </Badge>
              </div>
              <p className="mt-1 text-[11.5px] text-mut2">{plan.tagline}</p>
            </div>
            <Badge tone="neutral">Preview</Badge>
          </div>

          <div className="mt-5 grid gap-3 border-y border-line py-4 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Price</p>
              <p className="mt-1 text-[13px] font-medium text-fg">{usd(plan.priceUsd)} / month</p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">Reply allowance</p>
              <p className="mt-1 text-[13px] font-medium text-fg">
                {plan.replies === null ? "Not published" : `${plan.replies.toLocaleString()} / month`}
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-mut2">
                {status === "active" ? "Renews" : "Access ends"}
              </p>
              <p className="mt-1 text-[13px] font-medium text-fg">1 Nov 2026</p>
            </div>
          </div>

          <ul className="mt-4 space-y-2">
            {plan.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-[12px] text-mut">
                <Check size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-lg border border-line bg-ink2 px-3.5 py-3">
            <div className="flex items-start gap-2">
              <Clock3 size={14} className="mt-0.5 shrink-0 text-mut2" aria-hidden="true" />
              <p className="text-[11px] leading-relaxed text-mut2">
                {status === "active"
                  ? "The subscription renews monthly until canceled. A plan change would take effect at the next confirmed billing event."
                  : "Cancellation is scheduled for the end of the current period. Replies remain available until then in this preview."}
              </p>
            </div>
          </div>

          {status === "active" ? (
            <Button variant="danger" className="mt-5" onClick={() => setCancelOpen(true)}>
              Cancel Subscription
            </Button>
          ) : null}
        </Card>

        <div className="space-y-4">
          <Card className="p-5">
            <div className="flex items-center gap-2">
              <CreditCard size={16} className="text-mut2" aria-hidden="true" />
              <h2 className="text-[13px] font-semibold text-fg">Billing details</h2>
            </div>
            <dl className="mt-3 space-y-3 text-[12px]">
              <div className="flex items-center justify-between gap-3">
                <dt className="text-mut">Payment method</dt>
                <dd className="text-right font-medium text-fg">No provider connected</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-mut">Next charge</dt>
                <dd className="text-right font-medium text-fg">$0.00 until connected</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-mut">Subscription ID</dt>
                <dd className="font-mono text-[10.5px] text-mut2">sub_preview_text</dd>
              </div>
              <div className="flex items-center justify-between gap-3">
                <dt className="text-mut">Billing status</dt>
                <dd className="text-right">
                  <Badge tone="warn">Preview only</Badge>
                </dd>
              </div>
            </dl>
            <div className="mt-4 flex items-start gap-2 border-t border-line pt-4">
              <ShieldCheck size={14} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
              <p className="text-[11px] leading-relaxed text-mut2">
                Invoices, payment methods, and tax details appear only after the provider is connected.
              </p>
            </div>
          </Card>

          <Card className="p-5">
            <h2 className="text-[13px] font-semibold text-fg">Cancel or reactivate</h2>
            <p className="mt-1.5 text-[11.5px] leading-relaxed text-mut">
              {status === "active"
                ? "Cancellation keeps access through the paid period and prevents the next renewal."
                : "Reactivating in this preview removes the scheduled cancellation."}
            </p>
            {status === "active" ? (
              <Button variant="secondary" size="sm" className="mt-3" onClick={() => setCancelOpen(true)}>
                Preview cancellation
              </Button>
            ) : (
              <Button
                variant="secondary"
                size="sm"
                className="mt-3"
                onClick={() => {
                  setStatus("active");
                  previewSaved();
                }}
              >
                <RefreshCw size={14} aria-hidden="true" />
                Reactivate Plan
              </Button>
            )}
          </Card>
        </div>
      </div>

      <section className="space-y-3">
        <SectionHeading
          title="Change monthly plan"
          body="Available plans are shown with price and reply allowance. Changing plans here is a preview; no proration or charge is calculated."
        />
        <div className="grid gap-3 md:grid-cols-3">
          {PREVIEW_PLANS.map((option) => {
            const current = option.id === plan.id;
            return (
              <Card
                key={option.id}
                className={current ? "border-accent/30 bg-accent/[0.035] p-4" : "p-4"}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-[13px] font-semibold text-fg">{option.name}</h3>
                    <p className="mt-0.5 text-[10.5px] text-mut2">
                      {option.replies === null ? "Fair use" : `${option.replies.toLocaleString()} replies / month`}
                    </p>
                  </div>
                  {current ? <Badge tone="accent">Current</Badge> : null}
                </div>
                <p className="mt-3 text-xl font-semibold tracking-[-0.04em] text-fg">
                  {usd(option.priceUsd)}
                  <span className="ml-1 text-[10px] font-normal text-mut2">/ month</span>
                </p>
                <Button
                  variant={current ? "secondary" : "outline"}
                  size="sm"
                  className="mt-3 w-full"
                  disabled={current}
                  onClick={() => setPendingPlan(option)}
                >
                  {current ? "Current plan" : "Preview change"}
                </Button>
              </Card>
            );
          })}
        </div>
        <p className="text-[10.5px] text-mut2">
          Text Unlimited is excluded because it is not for sale.{" "}
          <Link href="/dashboard/text/fair-use" className="text-mut underline-offset-4 hover:text-fg hover:underline">
            Read the fair-use policy
          </Link>
          .
        </p>
      </section>

      <Modal open={cancelOpen} onClose={() => setCancelOpen(false)} title={`Cancel ${plan.name}?`}>
        <p className="text-[13px] leading-relaxed text-mut">
          In a live subscription, cancellation would keep access until 1 Nov 2026 and stop the next renewal. This
          preview does not contact a payment provider.
        </p>
        <div className="mt-4 rounded-lg border border-line bg-ink2 px-3.5 py-3 text-[11.5px] text-mut2">
          Any unused replies would remain usable until the period ends. No refund is calculated here.
        </div>
        <div className="mt-5 flex justify-end gap-2">
          <Button variant="ghost" onClick={() => setCancelOpen(false)}>
            Keep plan
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              setStatus("canceled");
              setCancelOpen(false);
              previewSaved();
            }}
          >
            Simulate cancellation
          </Button>
        </div>
      </Modal>

      <Modal open={pendingPlan !== null} onClose={() => setPendingPlan(null)} title={pendingPlan ? `Switch to ${pendingPlan.name}?` : "Switch plan?"}>
        {pendingPlan ? (
          <>
            <p className="text-[13px] leading-relaxed text-mut">
              The preview would show {pendingPlan.name} at {usd(pendingPlan.priceUsd)} per month with{" "}
              {pendingPlan.replies === null ? "a fair-use allowance" : `${pendingPlan.replies.toLocaleString()} replies`}.
            </p>
            <div className="mt-4 rounded-lg border border-line bg-ink2 px-3.5 py-3 text-[11.5px] text-mut2">
              Proration, tax, and the effective date are provider calculations and are not shown in this preview.
            </div>
            <div className="mt-5 flex justify-end gap-2">
              <Button variant="ghost" onClick={() => setPendingPlan(null)}>
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setPlanId(pendingPlan.id);
                  setPendingPlan(null);
                  toast.push("Preview only — no changes were saved.", "info");
                }}
              >
                Preview plan change
              </Button>
            </div>
          </>
        ) : null}
      </Modal>
    </div>
  );
}
