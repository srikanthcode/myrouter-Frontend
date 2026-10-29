export class ApiError extends Error {
  code: string;
  status: number;
  requestId?: string;
  retryAfter?: number;
  details?: unknown;
  constructor(message: string, code: string, status: number, requestId?: string, retryAfter?: number, details?: unknown) {
    super(message);
    this.code = code;
    this.status = status;
    this.requestId = requestId;
    this.retryAfter = retryAfter;
    this.details = details;
  }
}

interface ApiOptions extends Omit<RequestInit, "body"> {
  body?: unknown;
}

export async function api<T = unknown>(path: string, opts: ApiOptions = {}): Promise<T> {
  const headers: Record<string, string> = { ...(opts.headers as Record<string, string> | undefined) };
  let body: BodyInit | undefined;
  if (opts.body !== undefined) {
    headers["content-type"] = "application/json";
    body = JSON.stringify(opts.body);
  }
  const res = await fetch(`/api${path}`, { ...opts, headers, body, credentials: "include" });
  const json = await res.json().catch(() => null);
  if (!res.ok) {
    const err = (json as { error?: { code?: string; message?: string; request_id?: string; details?: unknown } })?.error;
    const retryAfter = Number(res.headers.get("retry-after") ?? "");
    throw new ApiError(
      err?.message ?? `Request failed (${res.status})`,
      err?.code ?? "unknown_error",
      res.status,
      err?.request_id,
      Number.isFinite(retryAfter) && retryAfter > 0 ? retryAfter : undefined,
      err?.details,
    );
  }
  return json as T;
}

export function formatINR(paise: number): string {
  const major = paise / 100;
  return `₹${new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(major)}`;
}

export function formatCompactINR(paise: number): string {
  const rupees = paise / 100;
  const abs = Math.abs(rupees);
  if (abs >= 10_000_000) return `₹${(rupees / 10_000_000).toFixed(2)}Cr`;
  if (abs >= 100_000) return `₹${(rupees / 100_000).toFixed(2)}L`;
  if (abs >= 1_000) return `₹${(rupees / 1_000).toFixed(1)}K`;
  return formatINR(paise);
}

export function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime();
  const s = Math.floor(diff / 1000);
  if (s < 60) return `${s}s ago`;
  const m = Math.floor(s / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  return new Date(iso).toLocaleDateString();
}

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}