import Link from "next/link";
import Header from "@/components/Header";

export default function ScheduleConfirmedPage() {
  return (
    <>
      <Header />

      <main className="pt-24">
        {/* Success Hero */}
        <section className="pt-20 pb-24 px-6 md:px-12 max-w-screen-2xl mx-auto text-center">
          {/* Animated check icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-tertiary-container flex items-center justify-center shadow-xl shadow-tertiary-container/40 animate-pulse">
              <span
                className="material-symbols-outlined text-on-tertiary-container text-5xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>
          </div>

          {/* Pill badge */}
          <span className="inline-block px-5 py-2 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-xs font-bold uppercase tracking-widest mb-8">
            Booking Confirmed
          </span>

          {/* h1 */}
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-tight mb-4">
            Your Sanctuary <span className="text-primary italic">Awaits.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-on-surface-variant text-lg mt-4 mb-2 font-light">
            Barnaby's bespoke grooming session has been secured.
          </p>

          {/* Reference number */}
          <p className="font-label font-bold tracking-widest text-primary text-sm uppercase mb-12">
            Ref #PB-20241114-0042
          </p>

          {/* Booking Summary Card */}
          <div className="max-w-lg mx-auto bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-8 text-left mb-16 shadow-[0_8px_32px_rgba(48,51,48,0.06)]">
            <h3 className="font-headline font-bold text-on-surface text-center mb-6 text-lg">
              Booking Summary
            </h3>
            <div className="space-y-0">
              <div className="flex justify-between items-center border-b border-outline-variant/10 py-4">
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                  Sanctuary
                </span>
                <span className="text-sm font-semibold text-right">The Amber Sanctuary</span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant/10 py-4">
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                  Service
                </span>
                <span className="text-sm font-semibold text-right max-w-[200px]">
                  The "Royal Bath" &amp; Silk Cut
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant/10 py-4">
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                  Companion
                </span>
                <span className="text-sm font-semibold">Barnaby</span>
              </div>
              <div className="flex justify-between items-center border-b border-outline-variant/10 py-4">
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                  Date &amp; Time
                </span>
                <span className="text-sm font-semibold">Nov 14, 2024 · 11:15 AM</span>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                  Total
                </span>
                <span className="text-xl font-headline font-extrabold text-primary">₱8,200.00</span>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-row flex-wrap gap-4 justify-center">
            <button className="border-2 border-primary text-primary px-10 py-4 rounded-full font-label font-bold uppercase tracking-wide active:scale-95 transition-all inline-flex items-center gap-3">
              <span className="material-symbols-outlined text-base">calendar_add_on</span>
              Add to Calendar
            </button>
            <Link
              href="/profile"
              className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-10 py-4 rounded-full font-label font-bold uppercase tracking-wide active:scale-95 transition-all shadow-lg shadow-primary/20 inline-flex items-center gap-3"
            >
              <span className="material-symbols-outlined text-base">person</span>
              View My Bookings
            </Link>
          </div>
        </section>

        {/* While You Wait */}
        <section className="bg-surface-container-low py-24">
          <div className="px-6 md:px-12 max-w-screen-2xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest mb-4">
                For the Discerning Owner
              </span>
              <h2 className="text-4xl font-headline font-bold tracking-tight text-on-surface">
                While You Wait
              </h2>
              <p className="text-on-surface-variant mt-3 max-w-md mx-auto font-light">
                Curated guidance to make Barnaby's sanctuary experience truly exceptional.
              </p>
            </div>

            {/* 3-col card grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 — Pre-Visit Grooming Tips */}
              <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 space-y-5">
                <div className="w-12 h-12 rounded-full bg-primary-container/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl">spa</span>
                </div>
                <div>
                  <span className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
                    Preparation
                  </span>
                  <h3 className="text-xl font-headline font-bold text-on-surface mt-1">
                    Pre-Visit Grooming Tips
                  </h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Give Barnaby a light brush-out the evening before to remove surface tangles — this
                  helps your groomer achieve a flawless finish without added stress. Avoid bathing
                  at home 48 hours prior so the coat's natural oils remain intact for the sanctuary
                  treatment.
                </p>
                <div className="pt-2 border-t border-outline-variant/10">
                  <p className="text-xs text-on-surface-variant/70 italic">
                    "A well-prepared coat is a groomer's greatest canvas."
                  </p>
                </div>
              </div>

              {/* Card 2 — What to Bring */}
              <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 space-y-5">
                <div className="w-12 h-12 rounded-full bg-secondary-container/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-xl">backpack</span>
                </div>
                <div>
                  <span className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
                    Arrival Guide
                  </span>
                  <h3 className="text-xl font-headline font-bold text-on-surface mt-1">
                    What to Bring
                  </h3>
                </div>
                <ul className="text-sm text-on-surface-variant leading-relaxed space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">
                      check_small
                    </span>
                    A favourite toy or comfort item to ease settling in
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">
                      check_small
                    </span>
                    Any veterinary notes on skin sensitivities or allergies
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">
                      check_small
                    </span>
                    Your booking reference:{" "}
                    <strong className="text-on-surface font-bold">Ref #PB-20241114-0042</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5 flex-shrink-0">
                      check_small
                    </span>
                    Arrive 10 minutes early to allow calm acclimatisation
                  </li>
                </ul>
              </div>

              {/* Card 3 — Meet Your Groomer */}
              <div className="bg-surface-container-lowest rounded-xl p-8 border border-outline-variant/10 space-y-5">
                <div className="w-12 h-12 rounded-full bg-tertiary-container/40 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary text-xl">
                    person_celebrate
                  </span>
                </div>
                <div>
                  <span className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
                    Your Team
                  </span>
                  <h3 className="text-xl font-headline font-bold text-on-surface mt-1">
                    Meet Your Groomer
                  </h3>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  The Amber Sanctuary's senior groomer, Ana, holds a decade of breed-specific
                  expertise. Known for a calm, intuitive approach with large breeds, she treats each
                  session as a collaborative ritual — your pet's comfort is the throughline of every
                  technique she employs.
                </p>
                <div className="flex items-center gap-3 pt-3 border-t border-outline-variant/10">
                  <div className="w-8 h-8 rounded-full bg-primary-container/30 flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-primary text-sm"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      star
                    </span>
                  </div>
                  <p className="text-xs text-on-surface-variant">
                    4.9 rating · 200+ sessions · Golden Retriever specialist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full bg-stone-100 dark:bg-stone-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 border-t border-stone-200/20 max-w-screen-2xl mx-auto">
          <div className="text-lg font-black text-amber-900 dark:text-amber-200 uppercase tracking-tighter">
            PurrBook
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest">
            <a className="text-stone-500 hover:text-amber-600 transition-colors" href="#">
              About Us
            </a>
            <a className="text-stone-500 hover:text-amber-600 transition-colors" href="#">
              Services
            </a>
            <a className="text-stone-500 hover:text-amber-600 transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-stone-500 hover:text-amber-600 transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-stone-500 hover:text-amber-600 transition-colors" href="#">
              Contact
            </a>
          </div>
          <div className="text-stone-500 text-[10px] uppercase tracking-[0.2em] opacity-80">
            © 2024 PurrBook Editorial Pet Care. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
