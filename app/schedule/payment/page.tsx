"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import PaymentMethodSelector from "@/components/PaymentMethodSelector";

const BARNABY_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAqPLXkvBImvBgNNsUjdng4AAKjaYGdFqtuMjNkth3AvE0-I7rl15nOw3OK6HjgSrDG0LlRmOVKuVMN_O81glZEttBwTv2sVGzDA9Rgr-mds3DoEkSu0Zg2Rg8pWCYJ5-uuu-djeMf3YI5WKuuzlUV8kOUm9ROWhnlkzmSkZkx9uu4cOWoEuRzbHYXd0w1C_S4Dj-m9KcDIMJYyf16pKM4V9LQEA9bJIvxUgqZD0TI9rvXQUg6KJ5_9wdSmPjmNOj0Pryufghzvzg7B";
const LUNA_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA8gXkBB2zCRyHuJgng0VEl8TBTyvK8uhhA4p_2Wv5aD-W_F70oZX_bIJBpGenzMsR7GYGmkzWl46LWRMGnkvWnZ6WjTiHeXqeKZ1rfvUSF4rBg-toFHc3bNoBV158JmYisXNILjCeeMddzcloHxa_1fOmYh3oUAVWnvv3Dzy-j6woh5UCgukJohBO0CJw5yaidq8cJyLrpbNthJWsgd79Ahnp0OoSuHRWkhpoHAh8GfC1OiFpshz_Nt33Q8tESCGgD2PFQKogSjvLf";

function PaymentContent() {
  const searchParams = useSearchParams();
  const pet = searchParams.get("pet") || "Barnaby";
  const dateStr = searchParams.get("date") || "";
  const time = searchParams.get("time") || "11:15 AM";

  const petImg = pet === "Luna" ? LUNA_IMG : BARNABY_IMG;

  const dateObj = dateStr ? new Date(dateStr + "T00:00:00") : null;
  const formattedDate = dateObj
    ? dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "—";
  const dayOfWeek = dateObj
    ? dateObj.toLocaleDateString("en-US", { weekday: "long" })
    : "";

  const confirmParams = `?pet=${encodeURIComponent(pet)}&date=${encodeURIComponent(dateStr)}&time=${encodeURIComponent(time)}`;

  return (
    <>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-stone-900/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(48,51,48,0.06)]">
        <nav className="flex justify-between items-center px-12 py-4 max-w-screen-2xl mx-auto font-['Plus_Jakarta_Sans'] tracking-tight">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <img src="/purrbook.png" alt="PurrBook logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold italic text-amber-900 dark:text-amber-100">PurrBook</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors" href="/">Explore</Link>
              <Link className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors" href="/search">Search</Link>
              <Link className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors" href="/profile">Profile</Link>
              <Link className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors" href="/subscriptions">Subscriptions</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-stone-600 dark:text-stone-400">
              <span className="material-symbols-outlined hover:bg-stone-100/50 p-2 rounded-full transition-all">notifications</span>
              <span className="material-symbols-outlined hover:bg-stone-100/50 p-2 rounded-full transition-all">pets</span>
            </div>
            <Link href="/search" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-8 py-3 rounded-full font-label font-bold tracking-wide active:scale-95 transition-all shadow-lg shadow-primary/20">
              Book Now
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
            Almost <span className="text-primary italic">Done.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl mt-4 max-w-2xl font-light">
            One final step. Choose how you&apos;d like to secure {pet}&apos;s sanctuary moment.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Stepper */}
          <aside className="lg:col-span-3 sticky top-40">
            <div className="space-y-12">
              {[
                { n: "01", label: "Select Companion", done: true },
                { n: "02", label: "Reserve Moment", done: true },
                { n: "03", label: "Confirm Care", done: true },
              ].map(({ n, label, done }) => (
                <div key={n} className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-bold shadow-sm ring-4 ring-surface">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div>
                    <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">Step {n}</p>
                    <h3 className="text-on-surface font-semibold">{label}</h3>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shadow-xl ring-4 ring-surface animate-pulse">04</div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">Step 04</p>
                  <h3 className="text-on-surface font-semibold">Secure Payment</h3>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <section className="lg:col-span-6 space-y-10">
            {/* Order Summary */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-6">Order Summary</p>
              <div className="flex items-center gap-6 bg-surface-container-lowest p-5 rounded-lg mb-6">
                <img src={petImg} alt={pet} className="w-16 h-16 rounded-xl object-cover shadow-md flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-headline font-bold text-on-surface">{pet}</h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-xs font-bold uppercase tracking-widest">Companion</span>
                  </div>
                  <p className="text-sm text-on-surface-variant">{pet === "Luna" ? "Persian Cat" : "Golden Retriever"} · The &quot;Royal Bath&quot; &amp; Silk Cut</p>
                </div>
                <span className="material-symbols-outlined text-primary flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-surface-container-lowest p-5 rounded-lg text-center">
                  <span className="material-symbols-outlined text-primary text-2xl mb-2 block">calendar_month</span>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Date</p>
                  <p className="font-headline font-bold text-on-surface">{formattedDate}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{dayOfWeek}</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-lg text-center">
                  <span className="material-symbols-outlined text-primary text-2xl mb-2 block">schedule</span>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Time</p>
                  <p className="font-headline font-bold text-on-surface">{time}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">~90 min session</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-lg text-center">
                  <span className="material-symbols-outlined text-primary text-2xl mb-2 block">storefront</span>
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">Sanctuary</p>
                  <p className="font-headline font-bold text-on-surface text-sm leading-tight">The Amber Sanctuary</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">San Vicente, Tarlac City</p>
                </div>
              </div>

              <div className="bg-surface-container-lowest rounded-lg p-5 space-y-3">
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">Price Breakdown</p>
                <div className="flex justify-between items-center"><span className="text-sm text-on-surface-variant">Base Service</span><span className="text-sm font-semibold">₱7,000.00</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-on-surface-variant">Grooming Materials</span><span className="text-sm font-semibold">₱800.00</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-on-surface-variant">PurrBook Fee</span><span className="text-sm font-semibold">₱400.00</span></div>
                <div className="pt-3 border-t border-outline-variant/20 flex justify-between items-center text-primary">
                  <span className="text-sm font-bold uppercase tracking-widest">Total</span>
                  <span className="text-2xl font-headline font-extrabold">₱8,200.00</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-6">Choose Payment Method</p>
              <PaymentMethodSelector />
            </div>

            {/* Security Badges */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "lock", label: "256-bit Encrypted" },
                { icon: "verified_user", label: "PurrBook Guarantee" },
                { icon: "shield", label: "PCI-DSS Compliant" },
              ].map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 bg-surface-container-lowest rounded-full px-4 py-2 border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>{icon}</span>
                  <span className="text-xs font-label font-bold text-on-surface">{label}</span>
                </div>
              ))}
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-center pt-8 border-t border-outline-variant/10">
              <Link href={`/schedule/confirm${confirmParams}`} className="flex items-center gap-2 text-on-surface-variant font-label text-sm uppercase tracking-widest hover:text-on-surface transition-colors active:scale-95">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back to Confirm
              </Link>
              <Link href="/schedule/confirmed" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-12 py-4 rounded-full font-label font-bold tracking-wide uppercase active:scale-95 transition-all shadow-lg shadow-primary/20">
                Complete Reservation
              </Link>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-6 sticky top-40">
            <div className="bg-surface-container-highest/30 backdrop-blur-md p-8 rounded-xl border border-outline-variant/10">
              <h3 className="text-xl font-headline font-bold mb-8">Reservation Details</h3>
              <div className="space-y-5">
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Service</span>
                  <span className="text-sm font-semibold text-right max-w-[140px]">The &quot;Royal Bath&quot; &amp; Silk Cut</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Companion</span>
                  <span className="text-sm font-semibold">{pet}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Date</span>
                  <span className="text-sm font-semibold">{formattedDate}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Time</span>
                  <span className="text-sm font-semibold">{time}</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-outline-variant/20 space-y-3">
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-4">Price Breakdown</p>
                <div className="flex justify-between items-center"><span className="text-sm text-on-surface-variant">Base Service</span><span className="text-sm font-semibold">₱7,000.00</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-on-surface-variant">Grooming Materials</span><span className="text-sm font-semibold">₱800.00</span></div>
                <div className="flex justify-between items-center"><span className="text-sm text-on-surface-variant">PurrBook Fee</span><span className="text-sm font-semibold">₱400.00</span></div>
                <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center text-primary">
                  <span className="text-sm font-bold uppercase tracking-widest">Total</span>
                  <span className="text-2xl font-headline font-extrabold">₱8,200.00</span>
                </div>
                <p className="text-[10px] text-on-surface-variant/60 italic text-right">*Charged upon reservation confirmation</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-5 bg-surface-container-lowest rounded-xl border border-outline-variant/10">
              <span className="material-symbols-outlined text-primary text-3xl flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
              <div>
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface">Protected by PurrBook</p>
                <p className="text-[10px] text-on-surface-variant mt-0.5 leading-relaxed">Your booking is covered by our care guarantee and secure handling policy.</p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <footer className="w-full mt-20 bg-stone-100 dark:bg-stone-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 border-t border-stone-200/20 max-w-screen-2xl mx-auto">
          <div className="text-lg font-black text-amber-900 dark:text-amber-200 uppercase tracking-tighter">PurrBook</div>
          <div className="flex flex-wrap justify-center gap-8 font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest">
            <a className="text-stone-500 hover:text-amber-600 transition-colors" href="#">About Us</a>
            <a className="text-stone-500 hover:text-amber-600 transition-colors" href="#">Services</a>
            <a className="text-stone-500 hover:text-amber-600 transition-colors" href="#">Privacy Policy</a>
            <a className="text-stone-500 hover:text-amber-600 transition-colors" href="#">Terms of Service</a>
            <a className="text-stone-500 hover:text-amber-600 transition-colors" href="#">Contact</a>
          </div>
          <div className="text-stone-500 text-[10px] uppercase tracking-[0.2em] opacity-80">© 2024 PurrBook Editorial Pet Care. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}

export default function SchedulePaymentPage() {
  return (
    <Suspense>
      <PaymentContent />
    </Suspense>
  );
}
