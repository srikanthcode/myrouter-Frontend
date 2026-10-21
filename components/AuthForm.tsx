"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, TriangleAlert } from "lucide-react";
import { api, ApiError } from "@/lib/api";
import { Button, IconButton, Input, useToast } from "./ui";
import { Logo } from "./Logo";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (mode === "signup") {
        await api("/auth/register", { method: "POST", body: { email, password, name: name || undefined } });
        toast.push("Account created — welcome to ProRouter!", "success");
      } else {
        await api("/auth/login", { method: "POST", body: { email, password } });
        toast.push("Signed in successfully.", "success");
      }
      router.push("/dashboard");
      router.refresh();
    } catch (err) {
      setError(err instanceof ApiError ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="fade-up w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <Logo size={36} />
        </div>
        <div className="rounded-2xl border border-line bg-panel p-6 shadow-xl sm:p-7">
          <h1 className="text-lg font-semibold tracking-tight">{mode === "signup" ? "Create your account" : "Welcome back"}</h1>
          <p className="mt-1 text-[13px] text-mut">{mode === "signup" ? "One API. Every Model. Free to start." : "Sign in to your ProRouter dashboard."}</p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            {mode === "signup" && <Input label="Name" placeholder="Ada Lovelace" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />}
            <Input label="Email" type="email" placeholder="you@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="email" />
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              hint={mode === "signup" ? "At least 8 characters with a letter and a number." : undefined}
              trailing={
                <IconButton label={showPassword ? "Hide password" : "Show password"} size="sm" type="button" onClick={() => setShowPassword((s) => !s)}>
                  {showPassword ? <EyeOff className="size-4" aria-hidden="true" /> : <Eye className="size-4" aria-hidden="true" />}
                </IconButton>
              }
            />
            {error && (
              <div className="flex items-start gap-2 rounded-lg border border-bad/30 bg-bad/10 px-3 py-2.5 text-[13px] text-bad" role="alert">
                <TriangleAlert className="mt-px size-4 shrink-0" aria-hidden="true" />
                {error}
              </div>
            )}
            <Button type="submit" className="w-full" loading={loading}>
              {mode === "signup" ? "Create account" : "Sign in"}
            </Button>
          </form>
          <p className="mt-5 text-center text-[13px] text-mut">
            {mode === "signup" ? (
              <>
                Already have an account?{" "}
                <Link href="/login" className="text-accent hover:underline">
                  Sign in
                </Link>
              </>
            ) : (
              <>
                New to ProRouter?{" "}
                <Link href="/signup" className="text-accent hover:underline">
                  Create an account
                </Link>
              </>
            )}
          </p>
        </div>
        <p className="mt-6 text-center text-xs text-mut2">
          By continuing you agree to our{" "}
          <Link href="/terms" className="underline transition-colors duration-200 hover:text-mut">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="underline transition-colors duration-200 hover:text-mut">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
