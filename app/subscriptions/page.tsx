import Link from "next/link";

export default function SubscriptionsPage() {
  return (
    <>
      {/* TopNavBar */}
      <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-stone-900/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(48,51,48,0.06)]">
        <nav className="flex justify-between items-center px-12 py-4 max-w-screen-2xl mx-auto font-['Plus_Jakarta_Sans'] tracking-tight">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <img src="/purrbook.png" alt="PurrBook logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold italic text-amber-900 dark:text-amber-100">
                PurrBook
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors"
                href="/"
              >
                Explore
              </Link>
              <Link
                className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors"
                href="/search"
              >
                Search
              </Link>
              <Link
                className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors"
                href="/profile"
              >
                Profile
              </Link>
              <Link
                className="text-amber-900 dark:text-amber-100 border-b-2 border-amber-700 pb-1 font-semibold transition-all"
                href="/subscriptions"
              >
                Subscriptions
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-stone-600 dark:text-stone-400">
              <span className="material-symbols-outlined hover:bg-stone-100/50 p-2 rounded-full transition-all">
                notifications
              </span>
              <span className="material-symbols-outlined hover:bg-stone-100/50 p-2 rounded-full transition-all">
                pets
              </span>
            </div>
            <Link
              href="/search"
              className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-8 py-3 rounded-full font-label font-bold tracking-wide active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
        {/* Editorial Header */}
        <header className="mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest mb-6">
            Membership Plans
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
            Grooming, <span className="text-primary italic">On Autopilot.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl mt-4 max-w-2xl font-light leading-relaxed">
            PurrBook handles the scheduling so you never have to think about it. Choose how you'd
            like to pay — per visit or upfront for the year.
          </p>
          <p className="text-sm text-on-surface-variant/60 mt-3 max-w-xl italic">
            Grooming fees are paid directly to your chosen salon. Your PurrBook plan covers
            auto-scheduling, smart records, and platform benefits only.
          </p>
        </header>

        {/* Plan Cards */}
        <section className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Flexible Plan */}
            <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl p-8 flex flex-col hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
              <p className="text-xs font-label font-bold uppercase tracking-widest text-primary mb-2">
                Flexible Plan
              </p>
              <h2 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight mb-3">
                Pay Per
                <br />
                Appointment
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-8">
                Auto-scheduled, charged only when confirmed. Perfect if your calendar is anything
                but predictable.
              </p>

              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-primary text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      calendar_month
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">
                      Auto-scheduled, 1 week in advance
                    </p>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                      We create your next appointment automatically — you just show up.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-primary text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      credit_card
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Charged only when confirmed</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                      No upfront payment. Billed only when your next appointment is scheduled and
                      confirmed.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-primary text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      refresh
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">Skip or reschedule anytime</p>
                    <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                      Plans change. Modify or skip without hassle — no penalties, no questions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-surface-container-low rounded-xl">
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                  Who Loves Flexible
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      pets
                    </span>
                    Pet owners who want auto-scheduling with pay-per-visit
                  </li>
                  <li className="flex items-start gap-2 text-xs text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      pets
                    </span>
                    New to PurrBook or trying different cadences
                  </li>
                  <li className="flex items-start gap-2 text-xs text-on-surface-variant">
                    <span
                      className="material-symbols-outlined text-primary text-sm flex-shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      pets
                    </span>
                    Varied schedules or travel often
                  </li>
                </ul>
              </div>

              <Link
                href="/search"
                className="mt-6 block text-center bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 rounded-full font-label font-bold tracking-wide uppercase active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                Start Flexible
              </Link>
            </div>

            {/* Annual Plan */}
            <div className="bg-primary text-on-primary rounded-2xl p-8 flex flex-col shadow-2xl shadow-primary/30 hover:-translate-y-1 transition-all duration-300 relative">
              <div className="absolute top-6 right-6">
                <span className="inline-block px-3 py-1 rounded-full bg-on-primary/20 text-on-primary font-label text-xs font-bold uppercase tracking-widest">
                  Best Value
                </span>
              </div>
              <p className="text-xs font-label font-bold uppercase tracking-widest text-on-primary/60 mb-2">
                Annual Plan
              </p>
              <h2 className="text-3xl font-headline font-extrabold text-on-primary tracking-tight mb-3">
                Pay in Advance
                <br />
                for a Year
              </h2>
              <p className="text-sm text-on-primary/70 leading-relaxed mb-8">
                Lock in your rate, set your cadence once, and let PurrBook manage your entire year
                of grooming automatically.
              </p>

              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-on-primary/15 flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-on-primary text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      lock
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-primary">Price locked for 12 months</p>
                    <p className="text-xs text-on-primary/70 leading-relaxed mt-0.5">
                      Enjoy the same rates all year. No seasonal or surge increases — ever.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-on-primary/15 flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-on-primary text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      shield
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-primary">
                      Refundable for unused appointments
                    </p>
                    <p className="text-xs text-on-primary/70 leading-relaxed mt-0.5">
                      Life happens. Any remaining appointments are fully refundable — no lock-in
                      traps.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-on-primary/15 flex items-center justify-center flex-shrink-0">
                    <span
                      className="material-symbols-outlined text-on-primary text-base"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      calendar_month
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-primary">
                      Auto-scheduled for the whole year
                    </p>
                    <p className="text-xs text-on-primary/70 leading-relaxed mt-0.5">
                      Set your frequency once and we'll handle your entire year. Truly set it and
                      forget it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 bg-on-primary/10 rounded-xl">
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-primary/60 mb-3">
                  Who Loves Annual
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs text-on-primary/80">
                    <span
                      className="material-symbols-outlined text-on-primary text-sm flex-shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      pets
                    </span>
                    Pet parents who love routine and reliability
                  </li>
                  <li className="flex items-start gap-2 text-xs text-on-primary/80">
                    <span
                      className="material-symbols-outlined text-on-primary text-sm flex-shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      pets
                    </span>
                    Want protection from seasonal surges
                  </li>
                  <li className="flex items-start gap-2 text-xs text-on-primary/80">
                    <span
                      className="material-symbols-outlined text-on-primary text-sm flex-shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      pets
                    </span>
                    Owners who prefer to set it and forget it
                  </li>
                </ul>
              </div>

              <Link
                href="/search"
                className="mt-6 block text-center bg-on-primary text-primary py-4 rounded-full font-label font-bold tracking-wide uppercase active:scale-95 transition-all shadow-lg"
              >
                Start Annual Plan
              </Link>
            </div>
          </div>
        </section>

        {/* Smart Vet Record */}
        <section className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest">
                Included in Every Plan
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight leading-tight">
                Smart Vet <span className="text-primary italic">Record.</span>
              </h2>
              <p className="text-on-surface-variant leading-relaxed">
                Every salon visit and vet appointment is logged directly on PurrBook by the
                provider. Your pet's full health and grooming history — always up to date, always in
                your pocket.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Bring your companion to any new vet or groomer and share a complete, verified care
                record in seconds. No more digging through receipts or trying to remember the last
                vaccine date.
              </p>
              <div className="flex items-start gap-4 pt-2">
                <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center flex-shrink-0">
                  <span
                    className="material-symbols-outlined text-on-tertiary-container text-base"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    auto_awesome
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">
                    AI-Powered Care Recommendations
                  </p>
                  <p className="text-xs text-on-surface-variant leading-relaxed mt-0.5">
                    Based on your pet's record, PurrBook surfaces personalized grooming frequency
                    suggestions, health flags, and seasonal care tips — so you always stay one step
                    ahead.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 overflow-hidden shadow-xl">
                {/* Record Header */}
                <div className="flex items-center justify-between p-6 border-b border-outline-variant/10">
                  <div className="flex items-center gap-4">
                    <img
                      src="/pets/Barnaby.jpg"
                      alt="Barnaby"
                      data-alt="Golden retriever close-up in warm light"
                      className="w-12 h-12 rounded-xl object-cover"
                    />
                    <div>
                      <h3 className="font-headline font-bold text-on-surface">Barnaby</h3>
                      <p className="text-xs text-on-surface-variant">
                        Golden Retriever · Male · 3 yrs
                      </p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-xs font-bold uppercase tracking-widest">
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                    Verified Record
                  </span>
                </div>

                {/* Timeline */}
                <div className="p-6 space-y-5">
                  <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
                    Care Timeline
                  </p>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        content_cut
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-bold text-on-surface">
                          Grooming · The Amber Sanctuary
                        </p>
                        <p className="text-xs text-on-surface-variant flex-shrink-0">
                          Nov 14, 2024
                        </p>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Royal Bath &amp; Silk Cut · Double coat, no mats
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        vaccines
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-bold text-on-surface">
                          Vet Visit · Paws &amp; Furs Animal Clinic
                        </p>
                        <p className="text-xs text-on-surface-variant flex-shrink-0">Oct 2, 2024</p>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Annual vaccine · Rabies + DHPP booster
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        content_cut
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-bold text-on-surface">
                          Grooming · Sniff Pet Salon &amp; Hotel
                        </p>
                        <p className="text-xs text-on-surface-variant flex-shrink-0">
                          Sep 18, 2024
                        </p>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Express groom · Gentle handling noted
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center flex-shrink-0">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        medical_services
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-sm font-bold text-on-surface">
                          Vet Visit · Petvetgo Animal Clinic
                        </p>
                        <p className="text-xs text-on-surface-variant flex-shrink-0">Aug 5, 2024</p>
                      </div>
                      <p className="text-xs text-on-surface-variant mt-0.5">
                        Check-up · Healthy weight, clean ears
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Recommendation */}
                <div className="mx-6 mb-6 p-5 bg-surface-container-low border border-primary/10 rounded-xl">
                  <div className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined text-primary flex-shrink-0"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      auto_awesome
                    </span>
                    <div>
                      <p className="text-xs font-label font-bold uppercase tracking-widest text-primary mb-1">
                        AI Recommendation
                      </p>
                      <p className="text-sm text-on-surface-variant leading-relaxed">
                        Barnaby's double coat typically needs grooming every 6–8 weeks. His next
                        session is due around{" "}
                        <span className="font-bold text-on-surface">Dec 26, 2024</span>. Consider a
                        de-shed treatment before the dry season.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-24">
          <h2 className="text-4xl font-headline font-bold tracking-tight mb-4 text-center">
            How It Works.
          </h2>
          <p className="text-on-surface-variant text-center max-w-xl mx-auto mb-16">
            Three steps and your pet's grooming is handled — every time, without lifting a finger.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="text-center space-y-5">
              <div className="relative inline-flex mx-auto">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    tune
                  </span>
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center font-label">
                  01
                </span>
              </div>
              <h3 className="font-headline font-bold text-on-surface text-lg">
                Set Your Frequency
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Choose how often you'd like your pet groomed — weekly, bi-weekly, or monthly. Pick
                your plan and preferred salon.
              </p>
            </div>
            <div className="text-center space-y-5">
              <div className="relative inline-flex mx-auto">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    auto_awesome
                  </span>
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center font-label">
                  02
                </span>
              </div>
              <h3 className="font-headline font-bold text-on-surface text-lg">
                We Handle the Scheduling
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                PurrBook automatically books your next appointment with your chosen salon. You'll
                get a confirmation and reminder — nothing more to do.
              </p>
            </div>
            <div className="text-center space-y-5">
              <div className="relative inline-flex mx-auto">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-primary text-2xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    health_and_safety
                  </span>
                </div>
                <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-on-primary text-xs font-bold flex items-center justify-center font-label">
                  03
                </span>
              </div>
              <h3 className="font-headline font-bold text-on-surface text-lg">
                Every Visit is Recorded
              </h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                The salon logs the session to your Smart Vet Record. Your pet's care history grows
                automatically, ready to share with any vet or groomer.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="mb-8">
          <div className="organic-mask-2 bg-primary text-on-primary p-16 md:p-20 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-fixed/20 rounded-full blur-3xl"></div>
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="space-y-4 max-w-xl">
                <h2 className="text-4xl md:text-5xl font-headline font-extrabold tracking-tight leading-tight">
                  Never miss a<br />
                  grooming day again.
                </h2>
                <p className="text-on-primary/70 text-lg font-light leading-relaxed">
                  Start with Flexible and pay only when an appointment confirms — no upfront
                  commitment, no risk.
                </p>
              </div>
              <div className="flex flex-col gap-4 flex-shrink-0">
                <Link
                  href="/search"
                  className="bg-on-primary text-primary px-10 py-4 rounded-full font-label font-bold text-lg active:scale-95 transition-all text-center whitespace-nowrap"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/search"
                  className="border-2 border-on-primary/30 text-on-primary px-10 py-4 rounded-full font-label font-bold text-lg active:scale-95 transition-all text-center whitespace-nowrap hover:border-on-primary/60"
                >
                  Browse Sanctuaries
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full mt-20 bg-stone-100 dark:bg-stone-950">
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
