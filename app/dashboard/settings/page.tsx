"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ApiError, api, formatINR } from "@/lib/api";
import { Badge, Button, Card, Input, Skeleton, useToast } from "@/components/ui";
import { useSession } from "@/components/DashboardShell";

export default function SettingsPage() {
  const toast = useToast();
  const { me, loading, refresh } = useSession();

  const [name, setName] = useState("");
  const [savingName, setSavingName] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [savingPassword, setSavingPassword] = useState(false);

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
          <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-line pt-4">
            <Badge tone={me.astra.active ? "good" : "neutral"}>Astra: {me.astra.active ? "active" : "not active"}</Badge>
            {me.astra.active && me.astra.expiresAt && (
              <span className="text-[12.5px] text-mut">expires {new Date(me.astra.expiresAt).toLocaleDateString()}</span>
            )}
            <Link href="/dashboard/astra" className="inline-flex items-center gap-1.5 text-[12.5px] text-accent transition-colors duration-200 hover:text-accent2">
              Manage Astra <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          </div>
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
