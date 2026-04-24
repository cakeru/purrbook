"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("Please fill in all required fields.");
      return;
    }
    if (mode === "signup") {
      if (!name.trim()) {
        setError("Please enter your full name.");
        return;
      }
      if (password !== confirmPassword) {
        setError("Passwords don't match.");
        return;
      }
      if (password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
    }

    setLoading(true);
    try {
      const base = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/v1";
      const endpoint = mode === "signup" ? "/auth/signup" : "/auth/login";
      const body = mode === "signup" ? { name, email, password } : { email, password };
      const res = await fetch(`${base}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong");
      localStorage.setItem("purrbook_token", data.accessToken);
      localStorage.setItem("purrbook_user", JSON.stringify(data.user));
      router.push(mode === "signup" ? "/onboarding" : "/profile");
    } catch (err: any) {
      setError(err.message ?? "Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-stone-900/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(48,51,48,0.06)]">
        <nav className="flex justify-between items-center px-12 py-4 max-w-screen-2xl mx-auto font-['Plus_Jakarta_Sans'] tracking-tight">
          <Link href="/" className="flex items-center gap-2">
            <img src="/purrbook.png" alt="PurrBook logo" className="h-8 w-auto" />
            <span className="text-2xl font-bold italic text-amber-900 dark:text-amber-100">
              PurrBook
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-on-surface-variant">
              {mode === "login" ? "New to PurrBook?" : "Already have an account?"}
            </span>
            <button
              onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(""); }}
              className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-6 py-2.5 rounded-full font-label font-bold tracking-wide active:scale-95 transition-all shadow-lg shadow-primary/20 text-sm"
            >
              {mode === "login" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </nav>
      </header>

      <main className="min-h-screen flex items-center justify-center pt-24 pb-16 px-6">
        <div className="w-full max-w-md">
          {/* Editorial Header */}
          <div className="mb-10">
            <p className="text-xs font-label font-bold uppercase tracking-widest text-primary mb-3">
              {mode === "login" ? "Welcome Back" : "Create Account"}
            </p>
            <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
              {mode === "login" ? (
                <>Your Companions <span className="text-primary italic">Await.</span></>
              ) : (
                <>Begin the <span className="text-primary italic">Journey.</span></>
              )}
            </h1>
            <p className="text-on-surface-variant text-base mt-3 font-light">
              {mode === "login"
                ? "Sign in to manage your bookings, companions, and sanctuaries."
                : "Join PurrBook and give your pet the bespoke care they deserve."}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-8 shadow-[0_8px_40px_rgba(48,51,48,0.06)]">
            <form onSubmit={handleSubmit} className="space-y-5">
              {mode === "signup" && (
                <div>
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Maria Santos"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3.5 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="maria@email.com"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3.5 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3.5 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              {mode === "signup" && (
                <div>
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3.5 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              )}

              {error && (
                <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
                  {error}
                </p>
              )}

              {mode === "login" && (
                <div className="flex justify-end">
                  <button type="button" className="text-xs text-primary font-bold hover:underline">
                    Forgot password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-label font-bold tracking-wide uppercase active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-on-primary/40 border-t-on-primary rounded-full animate-spin" />
                    {mode === "login" ? "Signing In..." : "Creating Account..."}
                  </>
                ) : (
                  mode === "login" ? "Sign In" : "Create Account"
                )}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-outline-variant/10 text-center">
              <p className="text-sm text-on-surface-variant">
                {mode === "login" ? "Don't have an account? " : "Already have an account? "}
                <button
                  onClick={() => { setMode(mode === "login" ? "signup" : "login"); setError(""); }}
                  className="text-primary font-bold hover:underline"
                >
                  {mode === "login" ? "Sign up for free" : "Sign in"}
                </button>
              </p>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex justify-center gap-6 mt-8 opacity-50">
            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
              Secure Login
            </div>
            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              Privacy Protected
            </div>
            <div className="flex items-center gap-2 text-xs text-on-surface-variant">
              <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
              Pet-First Platform
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-stone-100 dark:bg-stone-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-8 border-t border-stone-200/20 max-w-screen-2xl mx-auto">
          <div className="text-lg font-black text-amber-900 dark:text-amber-200 uppercase tracking-tighter">
            PurrBook
          </div>
          <div className="text-stone-500 text-[10px] uppercase tracking-[0.2em] opacity-80">
            © 2024 PurrBook Editorial Pet Care. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
