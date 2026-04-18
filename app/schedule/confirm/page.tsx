"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import { Suspense } from "react";

const BARNABY_IMG = "/pets/Barnaby.jpg";
const LUNA_IMG = "/pets/Luna.jpg";

function ConfirmContent() {
  const searchParams = useSearchParams();
  const [shareRecords, setShareRecords] = useState(false);
  const pet = searchParams.get("pet") || "Barnaby";
  const dateStr = searchParams.get("date") || "";
  const time = searchParams.get("time") || "11:15 AM";

  const petImg = pet === "Luna" ? LUNA_IMG : BARNABY_IMG;
  const petBreed = pet === "Luna" ? "Persian Cat · Female · 2 yrs" : "Golden Retriever · Male · 3 yrs";
  const petProfile =
    pet === "Luna"
      ? "Grooming profile: silky long coat, calm temperament"
      : "Grooming profile: double coat, gentle temperament";

  const dateObj = dateStr ? new Date(dateStr + "T00:00:00") : null;
  const formattedDate = dateObj
    ? dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "—";
  const dayOfWeek = dateObj
    ? dateObj.toLocaleDateString("en-US", { weekday: "long" })
    : "";

  const paymentParams = `?pet=${encodeURIComponent(pet)}&date=${encodeURIComponent(dateStr)}&time=${encodeURIComponent(time)}`;

  return (
    <>
      <Header />

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
        {/* Editorial Header */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
            Almost <span className="text-primary italic">There.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl mt-4 max-w-2xl font-light">
            Review your bespoke sanctuary reservation. One final touch before {pet}&apos;s radiance is
            restored.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Stepper Navigation */}
          <aside className="lg:col-span-3 sticky top-40">
            <div className="space-y-12">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-bold shadow-sm ring-4 ring-surface">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">Step 01</p>
                  <h3 className="text-on-surface font-semibold">Select Companion</h3>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-bold shadow-sm ring-4 ring-surface">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">Step 02</p>
                  <h3 className="text-on-surface font-semibold">Reserve Moment</h3>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shadow-xl ring-4 ring-surface animate-pulse">03</div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">Step 03</p>
                  <h3 className="text-on-surface font-semibold">Confirm Care</h3>
                </div>
              </div>
              <div className="flex items-center gap-6 opacity-40">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold ring-4 ring-surface">04</div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-on-surface-variant">Step 04</p>
                  <h3 className="text-on-surface-variant font-semibold">Secure Payment</h3>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Form Column */}
          <section className="lg:col-span-6 space-y-10">
            {/* Section 1 — Your Companion */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-6">
                Your Companion
              </p>
              <div className="flex items-center gap-6 bg-surface-container-lowest p-6 rounded-lg ring-2 ring-primary/20">
                <img src={petImg} alt={pet} className="w-20 h-20 rounded-xl object-cover shadow-md flex-shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-xl font-headline font-bold text-on-surface">{pet}</h3>
                    <span className="inline-block px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-xs font-bold uppercase tracking-widest">
                      Selected Companion
                    </span>
                  </div>
                  <p className="text-sm text-on-surface-variant">{petBreed}</p>
                  <p className="text-xs text-on-surface-variant/60 mt-1 italic">{petProfile}</p>
                </div>
                <span className="material-symbols-outlined text-primary flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </div>

            {/* Section 2 — The Moment */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-6">
                The Moment
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            </div>

            {/* Section 3 — Your Details */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-6">
                Your Details
              </p>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">Full Name</label>
                  <input type="text" defaultValue="Maria Santos" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-5 py-3.5 text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">Phone</label>
                    <input type="tel" defaultValue="+63 917 234 5678" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-5 py-3.5 text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">Email</label>
                    <input type="email" defaultValue="maria.santos@email.com" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-5 py-3.5 text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 — Special Requests */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <div className="flex justify-between items-start mb-6">
                <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">Special Requests</p>
                <span className="text-xs text-on-surface-variant italic">Optional</span>
              </div>
              <textarea
                rows={4}
                placeholder={`Share any notes for your groomer — sensitivities, preferred techniques, or anything that would help us craft a perfect sanctuary experience for ${pet}...`}
                className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-lg px-5 py-4 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none leading-relaxed"
              />
            </div>

            {/* Section 5 — Share Care History */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-1">
                    Care History
                  </p>
                  <h3 className="font-headline font-bold text-on-surface text-base leading-snug mb-1">
                    Share {pet}&apos;s records with The Amber Sanctuary
                  </h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    Allow the groomer to view {pet}&apos;s past visit history, coat notes, and service preferences before your session. Helps them deliver a more personalized experience.
                  </p>
                </div>
                <button
                  onClick={() => setShareRecords((v) => !v)}
                  className={`relative w-12 h-7 rounded-full transition-all flex-shrink-0 mt-1 active:scale-95 ${
                    shareRecords ? "bg-primary" : "bg-surface-container-highest"
                  }`}
                >
                  <span
                    className={`absolute top-1.5 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${
                      shareRecords ? "left-7" : "left-1.5"
                    }`}
                  />
                </button>
              </div>

              {shareRecords && (
                <div className="mt-5 space-y-3">
                  <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
                    Records that will be shared
                  </p>
                  {[
                    {
                      date: "Nov 14, 2024",
                      summary: "Royal Bath & Silk Cut",
                      services: ["Full bath", "Silk cut", "Nail trim", "Ear cleaning"],
                    },
                    {
                      date: "Jul 3, 2024",
                      summary: "Full Groom + De-shed Treatment",
                      services: ["Full bath", "Summer trim", "De-shed treatment"],
                    },
                  ].map((record) => (
                    <div
                      key={record.date}
                      className="bg-surface-container-lowest rounded-xl p-4 flex items-start gap-3"
                    >
                      <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-2 mb-1.5">
                          <p className="font-label font-bold text-sm text-on-surface">
                            {record.summary}
                          </p>
                          <p className="text-xs text-on-surface-variant flex-shrink-0">{record.date}</p>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {record.services.map((svc) => (
                            <span
                              key={svc}
                              className="px-2 py-0.5 bg-surface-container rounded-full text-xs font-label text-on-surface-variant"
                            >
                              {svc}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                  <p className="text-[10px] text-on-surface-variant/60 italic">
                    * Records are shared only with The Amber Sanctuary for this booking and are not stored by PurrBook.
                  </p>
                </div>
              )}
            </div>

            {/* Section 6 — The PurrBook Promise */}
            <div className="bg-surface-container-lowest border border-outline-variant/10 p-8 rounded-xl">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-on-tertiary-container" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                </div>
                <div>
                  <h3 className="font-headline font-bold text-on-surface">The PurrBook Promise</h3>
                  <p className="text-xs text-on-surface-variant mt-0.5">Every reservation is protected and guaranteed.</p>
                </div>
              </div>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">event_available</span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Free Cancellation</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">Cancel or reschedule at no charge up to 24 hours before your session begins.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">shield</span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Care Guarantee</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">If your companion isn&apos;t treated to our editorial standard, we&apos;ll make it right — no questions asked.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">lock</span>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Secure Payment</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">Your payment details are encrypted and never stored. Pay at the sanctuary on the day.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex justify-between items-center pt-8 border-t border-outline-variant/10">
              <Link href="/schedule" className="flex items-center gap-2 text-on-surface-variant font-label text-sm uppercase tracking-widest hover:text-on-surface transition-colors active:scale-95">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back to Timing
              </Link>
              <Link
                href={`/schedule/payment${paymentParams}`}
                className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-12 py-4 rounded-full font-label font-bold tracking-wide uppercase active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                Proceed to Payment
              </Link>
            </div>
          </section>

          {/* Reservation Sidebar */}
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
                <div className="flex justify-between items-center">
                  <span className="text-sm text-on-surface-variant">Base Service</span>
                  <span className="text-sm font-semibold">₱7,000.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-on-surface-variant">Grooming Materials</span>
                  <span className="text-sm font-semibold">₱800.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-on-surface-variant">PurrBook Fee</span>
                  <span className="text-sm font-semibold">₱400.00</span>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center text-primary">
                  <span className="text-sm font-bold uppercase tracking-widest">Total</span>
                  <span className="text-2xl font-headline font-extrabold">₱8,200.00</span>
                </div>
                <p className="text-[10px] text-on-surface-variant/60 italic text-right">*Finalize payment on the next step</p>
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

export default function ScheduleConfirmPage() {
  return (
    <Suspense>
      <ConfirmContent />
    </Suspense>
  );
}
