"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check, Copy, HelpCircle, Key, ShieldCheck, UserCheck } from "lucide-react";
import { ApiError, api, formatINR } from "@/lib/api";
import { Badge, Button, Card, Input, Skeleton, useToast } from "@/components/ui";
import { useSession, getDeterministicAccountNumber, getDeterministicUserId } from "@/components/DashboardShell";

export default function SettingsPage() {
  const toast = useToast();
  const { me, loading, refresh } = useSession();

  const [name, setName] = useState("");
  const [savingName, setSavingName] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyVal = async (field: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      toast.push(`Copied ${field} to clipboard`, "success");
      setTimeout(() => setCopiedField(null), 1800);
    } catch {}
  };

  useEffect(() => {
    if (me) setName(me.user.name ?? "");
  }, [me?.user.name]);

  async function saveProfile(e: React.FormEvent) {
    e.preventDefault();
    setSavingName(true);
    try {
      await api("/auth/profile", { method: "PATCH", body: { name: name.trim() } });
      toast.push("Profile updated.", "success");
      await refresh();
    } catch (err) {
      toast.push(err instanceof ApiError ? err.message : "Could not update your profile.", "error");
    } finally {
      setSavingName(false);
    }
  }

  async function savePassword(e: React.FormEvent) {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.push("New passwords do not match.", "error");
      return;
    }
    setSavingPassword(true);
    try {
      await api("/auth/password", { method: "POST", body: { currentPassword, newPassword } });
      toast.push("Password changed.", "success");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err) {
      toast.push(err instanceof ApiError ? err.message : "Could not change your password.", "error");
    } finally {
      setSavingPassword(false);
    }
  }

  if (loading && !me) return <div className="space-y-4">{[0, 1].map((i) => <Skeleton key={i} className="h-40 w-full" />)}</div>;
  if (!me) return <div className="rounded-xl border border-warn/30 bg-warn/10 p-4 text-sm text-warn" role="alert">You are not signed in.</div>;

  return (
    <div className="fade-up space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">Settings</h1>
        <p className="mt-1 text-[13.5px] text-mut">Manage your profile, password and account.</p>
      </div>

      {/* Account Identity & Permanent Support Credentials */}
      <Card className="border-accent/40 bg-gradient-to-br from-panel via-panel to-accent/[0.04]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-line px-5 py-3.5 gap-2">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="size-4.5 text-accent" />
            <div>
              <h2 className="text-sm font-semibold text-fg">Account Identity &amp; Support Credentials</h2>
              <p className="text-[12px] text-mut">Permanent system identifiers for real-time support, issue resolution, and segregated billing.</p>
            </div>
          </div>
          <Badge tone="accent">Production Verified</Badge>
        </div>
        <div className="p-5 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Account Number Card */}
            <div className="rounded-xl border border-line bg-ink2/70 p-4 transition-colors hover:border-accent/50">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-wider text-mut2">Account Number</span>
                <span className="rounded bg-accent/10 border border-accent/25 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-accent">
                  Institutional Account #
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="font-mono text-base font-semibold tracking-wider text-fg sm:text-lg">
                  {me.user.accountNumber || getDeterministicAccountNumber(me.user.email)}
                </span>
                <button
                  type="button"
                  onClick={() => copyVal("Account Number", me.user.accountNumber || getDeterministicAccountNumber(me.user.email))}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line bg-panel2/80 px-2.5 py-1.5 text-xs font-medium text-fg transition-colors hover:border-accent hover:text-accent"
                  title="Copy Account Number"
                >
                  {copiedField === "Account Number" ? (
                    <>
                      <Check className="size-3.5 text-good" />
                      <span className="text-good font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5 text-mut" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="mt-2 text-[11px] text-mut2">
                Quote this identifier to ProRouter Technical Support to quickly trace requests, resolve billing issues, or debug specific model routing.
              </p>
            </div>

            {/* Primary User UUID Card */}
            <div className="rounded-xl border border-line bg-ink2/70 p-4 transition-colors hover:border-accent/50">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium uppercase tracking-wider text-mut2">Primary User ID</span>
                <span className="rounded bg-white/[0.05] border border-line px-1.5 py-0.5 font-mono text-[10px] text-mut">
                  Primary UUID
                </span>
              </div>
              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="font-mono text-sm font-semibold tracking-wide text-fg/90 truncate sm:text-base">
                  {me.user.id || getDeterministicUserId(me.user.email)}
                </span>
                <button
                  type="button"
                  onClick={() => copyVal("User ID", me.user.id || getDeterministicUserId(me.user.email))}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-line bg-panel2/80 px-2.5 py-1.5 text-xs font-medium text-fg transition-colors hover:border-accent hover:text-accent"
                  title="Copy User ID"
                >
                  {copiedField === "User ID" ? (
                    <>
                      <Check className="size-3.5 text-good" />
                      <span className="text-good font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5 text-mut" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <p className="mt-2 text-[11px] text-mut2">
                Canonical deterministic account identifier attached to your API keys, rate limiters, and real-time usage telemetry streams.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Account summary */}
      <Card>
        <div className="border-b border-line px-5 py-3.5">
          <h2 className="text-sm font-semibold">Account</h2>
        </div>
        <div className="px-5 py-5">
          <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="text-[11.5px] uppercase tracking-wide text-mut2">Email</dt>
              <dd className="mt-1 break-all text-[13px]">{me.user.email}</dd>
            </div>
            <div>
              <dt className="text-[11.5px] uppercase tracking-wide text-mut2">Role</dt>
              <dd className="mt-1"><Badge tone={me.user.role === "admin" ? "accent" : "neutral"}>{me.user.role}</Badge></dd>
            </div>
            <div>
              <dt className="text-[11.5px] uppercase tracking-wide text-mut2">Plan</dt>
              <dd className="mt-1 text-[13px]">{me.plan?.name ?? "Free"}</dd>
            </div>
            <div>
              <dt className="text-[11.5px] uppercase tracking-wide text-mut2">Wallet balance</dt>
              <dd className="mt-1 font-mono text-[13px] tabular-nums">{formatINR(me.balancePaise)}</dd>
            </div>
          </dl>
        </div>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        {/* Profile */}
        <Card>
          <div className="border-b border-line px-5 py-3.5">
            <h2 className="text-sm font-semibold">Profile</h2>
            <p className="mt-1 text-[12.5px] text-mut">Your display name appears in the dashboard and on invoices.</p>
          </div>
          <form onSubmit={saveProfile} className="space-y-4 px-5 py-5">
            <Input label="Display name" value={name} onChange={(e) => setName(e.target.value)} maxLength={80} placeholder="Ada Lovelace" />
            <Input label="Email" value={me.user.email} disabled hint="Email changes are not supported yet — contact support if you need to change it." />
            <Button type="submit" loading={savingName}>Save profile</Button>
          </form>
        </Card>

        {/* Password */}
        <Card>
          <div className="border-b border-line px-5 py-3.5">
            <h2 className="text-sm font-semibold">Password</h2>
            <p className="mt-1 text-[12.5px] text-mut">At least 8 characters, including a letter and a number.</p>
          </div>
          <form onSubmit={savePassword} className="space-y-4 px-5 py-5">
            <Input label="Current password" type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} autoComplete="current-password" required />
            <Input label="New password" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} autoComplete="new-password" required />
            <Input
              label="Confirm new password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              error={confirmPassword && newPassword !== confirmPassword ? "Passwords do not match." : undefined}
              required
            />
            <Button type="submit" loading={savingPassword} disabled={!currentPassword || !newPassword}>Change password</Button>
          </form>
        </Card>
      </div>

      {/* Security links */}
      <Card>
        <div className="border-b border-line px-5 py-3.5">
          <h2 className="text-sm font-semibold">Security &amp; keys</h2>
        </div>
        <div className="grid gap-3 px-5 py-5 sm:grid-cols-3">
          <Link href="/dashboard/keys" className="group flex items-start justify-between gap-3 rounded-lg border border-line p-4 transition-colors duration-200 hover:border-accent/40">
            <div>
              <div className="text-[13.5px] font-medium">API keys</div>
              <p className="mt-1 text-[12.5px] text-mut">Create, rotate and revoke keys.</p>
            </div>
            <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-mut2 transition-colors duration-200 group-hover:text-accent" aria-hidden="true" />
          </Link>
          <Link href="/security" className="group flex items-start justify-between gap-3 rounded-lg border border-line p-4 transition-colors duration-200 hover:border-accent/40">
            <div>
              <div className="text-[13.5px] font-medium">Security practices</div>
              <p className="mt-1 text-[12.5px] text-mut">How we protect your account.</p>
            </div>
            <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-mut2 transition-colors duration-200 group-hover:text-accent" aria-hidden="true" />
          </Link>
          <Link href="/privacy" className="group flex items-start justify-between gap-3 rounded-lg border border-line p-4 transition-colors duration-200 hover:border-accent/40">
            <div>
              <div className="text-[13.5px] font-medium">Privacy</div>
              <p className="mt-1 text-[12.5px] text-mut">What we store and for how long.</p>
            </div>
            <ArrowRight className="mt-0.5 size-3.5 shrink-0 text-mut2 transition-colors duration-200 group-hover:text-accent" aria-hidden="true" />
          </Link>
        </div>
      </Card>
    </div>
  );
}
