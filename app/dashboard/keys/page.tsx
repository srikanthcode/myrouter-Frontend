"use client";

import { useCallback, useEffect, useState } from "react";
import { Activity, Ban, CheckCircle2, KeyRound } from "lucide-react";
import { ApiError, api, formatINR, timeAgo } from "@/lib/api";
import { Badge, Button, Card, CopyButton, EmptyState, Input, Modal, Skeleton, useToast } from "@/components/ui";
import { useSession } from "@/components/DashboardShell";

interface ApiKey {
  id: string;
  name: string;
  prefix: string;
  createdAt: string;
  expiresAt: string | null;
  revokedAt: string | null;
  lastUsedAt: string | null;
  requestCount: number;
  spendPaise: number;
  spendingLimitPaise: number | null;
  allowedModels: string[] | null;
}

export default function KeysPage() {
  const toast = useToast();
  const { refresh } = useSession();
  const [keys, setKeys] = useState<ApiKey[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [createOpen, setCreateOpen] = useState(false);
  const [secret, setSecret] = useState<{ name: string; value: string; rotated: boolean } | null>(null);
  const [confirmRevoke, setConfirmRevoke] = useState<ApiKey | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await api<{ items: ApiKey[] }>("/keys");
      setKeys(Array.isArray(res?.items) ? res.items : Array.isArray(res) ? (res as unknown as ApiKey[]) : []);
      setError(null);
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Could not load your API keys.");
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function revoke(key: ApiKey) {
    try {
      await api(`/keys/${key.id}`, { method: "DELETE" });
      toast.push(`Revoked “${key.name}”.`, "success");
      setConfirmRevoke(null);
      await load();
      await refresh();
    } catch (e) {
      toast.push(e instanceof ApiError ? e.message : "Could not revoke the key.", "error");
    }
  }

  async function rotate(key: ApiKey) {
    try {
      const res = await api<{ key: ApiKey; secret: string }>(`/keys/${key.id}/rotate`, { method: "POST" });
      setSecret({ name: res.key.name, value: res.secret, rotated: true });
      try {
        window.localStorage.setItem("prorouter_playground_key", res.secret);
        window.localStorage.setItem("prorouter_api_key", res.secret);
      } catch {}
      await load();
    } catch (e) {
      toast.push(e instanceof ApiError ? e.message : "Could not rotate the key.", "error");
    }
  }

  const active = (keys ?? []).filter((k) => !k.revokedAt);

  return (
    <div className="fade-up space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">API Keys</h1>
          <p className="mt-1 text-[13.5px] text-mut">Keys authenticate your requests. The secret is shown once — store it in a secret manager.</p>
        </div>
        <Button onClick={() => setCreateOpen(true)}>Create API key</Button>
      </div>

      {error && (
        <div className="rounded-xl border border-bad/30 bg-bad/10 p-4 text-sm text-bad" role="alert">{error}</div>
      )}

      {keys === null ? (
        <div className="space-y-3">{[0, 1].map((i) => <Skeleton key={i} className="h-24 w-full" />)}</div>
      ) : keys.length === 0 ? (
        <EmptyState
          icon={<KeyRound className="size-6" strokeWidth={1.75} />}
          title="No API keys yet"
          body="Create your first key to start calling the API. You can give each key its own name, expiry, spending limit and model allow-list."
          action={<Button onClick={() => setCreateOpen(true)}>Create API key</Button>}
        />
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Total keys", value: String(keys.length), icon: KeyRound },
              { label: "Active", value: String(active.length), icon: CheckCircle2 },
              { label: "Revoked", value: String(keys.length - active.length), icon: Ban },
              { label: "Requests", value: keys.reduce((a, k) => a + k.requestCount, 0).toLocaleString(), icon: Activity },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <Card key={s.label} className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-[11.5px] uppercase tracking-wide text-mut2">{s.label}</div>
                    <Icon className="size-3.5 shrink-0 text-mut2" strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div className="mt-1.5 font-mono text-lg font-semibold tabular-nums">{s.value}</div>
                </Card>
              );
            })}
          </div>

          <Card>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[13px]">
                <thead className="text-[11px] uppercase tracking-wide text-mut2">
                  <tr className="border-b border-line">
                    <th scope="col" className="px-5 py-3 font-medium">Name</th>
                    <th scope="col" className="px-3 py-3 font-medium">Key</th>
                    <th scope="col" className="px-3 py-3 font-medium">Created</th>
                    <th scope="col" className="px-3 py-3 font-medium">Last used</th>
                    <th scope="col" className="px-3 py-3 font-medium">Requests</th>
                    <th scope="col" className="px-3 py-3 font-medium">Spend</th>
                    <th scope="col" className="px-3 py-3 font-medium">Expires</th>
                    <th scope="col" className="px-3 py-3 font-medium">Status</th>
                    <th scope="col" className="px-5 py-3 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {keys.map((k) => (
                    <tr key={k.id} className="border-b border-line/60 transition-colors duration-200 last:border-0 hover:bg-white/[0.03]">
                      <td className="px-5 py-3">
                        <div className="font-medium">{k.name}</div>
                        {k.allowedModels && k.allowedModels.length > 0 && (
                          <div className="mt-1 text-[11.5px] uppercase tracking-wide text-mut2">{k.allowedModels.length} model{k.allowedModels.length === 1 ? "" : "s"} allowed</div>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 font-mono text-[12px] text-mut">{k.prefix}…</td>
                      <td className="whitespace-nowrap px-3 py-3 text-mut">{timeAgo(k.createdAt)}</td>
                      <td className="whitespace-nowrap px-3 py-3 text-mut">{k.lastUsedAt ? timeAgo(k.lastUsedAt) : "never"}</td>
                      <td className="px-3 py-3 font-mono tabular-nums">{k.requestCount.toLocaleString()}</td>
                      <td className="whitespace-nowrap px-3 py-3 font-mono tabular-nums">
                        {formatINR(k.spendPaise)}
                        {k.spendingLimitPaise != null && <span className="text-[11.5px] text-mut2"> / {formatINR(k.spendingLimitPaise)}</span>}
                      </td>
                      <td className="whitespace-nowrap px-3 py-3 text-mut">{k.expiresAt ? new Date(k.expiresAt).toLocaleDateString() : "never"}</td>
                      <td className="px-3 py-3">
                        <Badge tone={k.revokedAt ? "bad" : "good"}>{k.revokedAt ? "revoked" : "active"}</Badge>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex justify-end gap-2">
                          <Button size="sm" variant="ghost" onClick={() => void rotate(k)} disabled={!!k.revokedAt}>Rotate</Button>
                          <Button size="sm" variant="danger" onClick={() => setConfirmRevoke(k)} disabled={!!k.revokedAt}>Revoke</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      )}

      <CreateKeyModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onCreated={(name, value) => {
          setCreateOpen(false);
          setSecret({ name, value, rotated: false });
          try {
            window.localStorage.setItem("prorouter_playground_key", value);
            window.localStorage.setItem("prorouter_api_key", value);
          } catch {}
          void load();
          void refresh();
        }}
      />

      <Modal open={!!secret} onClose={() => setSecret(null)} title={secret?.rotated ? "Key rotated" : "API key created"}>
        <p className="text-[13px] text-mut">
          {secret?.rotated ? "The previous secret is now invalid. Copy the new one." : "Copy this secret now — it will not be shown again."}
        </p>
        <div className="mt-3 flex items-center gap-2">
          <Input readOnly value={secret?.value ?? ""} aria-label="API key secret" className="font-mono text-[12.5px] text-accent" />
          <CopyButton value={secret?.value ?? ""} label="Copy API key" className="shrink-0" />
        </div>
        <div className="mt-4 flex justify-end">
          <Button onClick={() => setSecret(null)}>Done</Button>
        </div>
      </Modal>

      <Modal open={!!confirmRevoke} onClose={() => setConfirmRevoke(null)} title="Revoke API key">
        <p className="text-[13px] text-mut">
          Revoking <span className="font-medium text-fg">{confirmRevoke?.name}</span> immediately stops it from authenticating. Any integration using it will
          start receiving <span className="font-mono text-[12px]">invalid_api_key</span>. This cannot be undone.
        </p>
        <div className="mt-5 flex justify-end gap-2">
          <Button variant="ghost" onClick={() => setConfirmRevoke(null)}>Cancel</Button>
          <Button variant="danger" onClick={() => confirmRevoke && void revoke(confirmRevoke)}>Revoke key</Button>
        </div>
      </Modal>
    </div>
  );
}

function CreateKeyModal({ open, onClose, onCreated }: { open: boolean; onClose: () => void; onCreated: (name: string, secret: string) => void }) {
  const toast = useToast();
  const [name, setName] = useState("");
  const [expiresInDays, setExpiresInDays] = useState("");
  const [spendingLimit, setSpendingLimit] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (open) {
      setName("");
      setExpiresInDays("");
      setSpendingLimit("");
    }
  }, [open]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    try {
      const res = await api<{ key: ApiKey; secret: string }>("/keys", {
        method: "POST",
        body: {
          name: name.trim(),
          expiresInDays: expiresInDays ? Number(expiresInDays) : null,
          spendingLimitPaise: spendingLimit ? Math.round(Number(spendingLimit) * 100) : null,
        },
      });
      onCreated(res.key.name, res.secret);
    } catch (err) {
      toast.push(err instanceof ApiError ? err.message : "Could not create the key.", "error");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Modal open={open} onClose={onClose} title="Create API key">
      <form onSubmit={submit} className="space-y-4">
        <Input label="Name" placeholder="Production backend" value={name} onChange={(e) => setName(e.target.value)} maxLength={64} required hint="A label so you can recognise this key later." />
        <Input
          label="Expires in (days)"
          type="number"
          min={1}
          max={3650}
          placeholder="Never"
          value={expiresInDays}
          onChange={(e) => setExpiresInDays(e.target.value)}
          hint="Leave blank for a key that never expires."
        />
        <Input
          label="Spending limit (₹)"
          type="number"
          min={0}
          step="0.01"
          placeholder="No limit"
          value={spendingLimit}
          onChange={(e) => setSpendingLimit(e.target.value)}
          hint="Optional cap on how much this key may spend."
        />
        <div className="flex justify-end gap-2 pt-1">
          <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
          <Button type="submit" loading={busy} disabled={!name.trim()}>Create key</Button>
        </div>
      </form>
    </Modal>
  );
}
