import Link from "next/link";
import CareRecordTimeline from "@/components/CareRecordTimeline";

export default function BarnabysPage() {
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
                className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors"
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
        {/* Back Breadcrumb */}
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 text-on-surface-variant font-label text-sm uppercase tracking-widest hover:text-on-surface transition-colors active:scale-95 mb-10"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Profile
        </Link>

        {/* Editorial Header */}
        <header className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest mb-6">
            Companion Profile
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
            Barnaby. <span className="text-primary italic">Golden Retriever.</span>
          </h1>
          <p className="text-on-surface-variant text-lg mt-4 font-light">
            3 years · Male · Double coat · Gentle temperament
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="/schedule"
              className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-8 py-3 rounded-full font-label font-bold tracking-wide active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Book a Grooming
            </Link>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-label font-bold tracking-wide active:scale-95 transition-all">
              Edit Profile
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4 sticky top-40 space-y-4">
            {/* Pet Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl overflow-hidden">
              <div className="overflow-hidden organic-mask-1 h-64">
                <img
                  src="/pets/Barnaby.jpg"
                  alt="Barnaby"
                  data-alt="Close up of a golden retriever smiling in soft morning light in a cozy living room setting"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-headline font-bold text-on-surface">Barnaby</h2>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-xs font-bold uppercase tracking-widest">
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                    Verified
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base">pets</span>
                    <span className="text-on-surface-variant">Breed</span>
                    <span className="font-semibold text-on-surface ml-auto">Golden Retriever</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base">cake</span>
                    <span className="text-on-surface-variant">Age</span>
                    <span className="font-semibold text-on-surface ml-auto">3 years old</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base">male</span>
                    <span className="text-on-surface-variant">Gender</span>
                    <span className="font-semibold text-on-surface ml-auto">Male</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base">
                      monitor_weight
                    </span>
                    <span className="text-on-surface-variant">Weight</span>
                    <span className="font-semibold text-on-surface ml-auto">28 kg</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base">
                      calendar_month
                    </span>
                    <span className="text-on-surface-variant">On PurrBook</span>
                    <span className="font-semibold text-on-surface ml-auto">Jan 2024</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-outline-variant/10">
                  <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                    Traits
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-surface-container rounded-full px-3 py-1 text-xs font-label font-bold text-on-surface">
                      Double Coat
                    </span>
                    <span className="bg-surface-container rounded-full px-3 py-1 text-xs font-label font-bold text-on-surface">
                      Gentle Temperament
                    </span>
                    <span className="bg-surface-container rounded-full px-3 py-1 text-xs font-label font-bold text-on-surface">
                      Loves Water
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-surface-container-low rounded-xl p-5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-headline font-extrabold text-primary">8</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Sessions</p>
                </div>
                <div>
                  <p className="text-2xl font-headline font-extrabold text-primary">4</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Sanctuaries</p>
                </div>
                <div>
                  <p className="text-2xl font-headline font-extrabold text-primary">Nov 14</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Next Visit</p>
                </div>
              </div>
            </div>

            {/* Book CTA */}
            <Link
              href="/schedule"
              className="block text-center bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 rounded-full font-label font-bold tracking-wide uppercase active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Book a Grooming
            </Link>
          </aside>

          {/* Main Content */}
          <section className="lg:col-span-8 space-y-10">
            {/* Grooming Profile */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-6">
                Grooming Profile
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-surface-container-lowest p-5 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    Coat Type
                  </p>
                  <p className="font-bold text-on-surface">Double coat, medium-long</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    Sensitivity
                  </p>
                  <p className="font-bold text-on-surface">None noted</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    Preferred Style
                  </p>
                  <p className="font-bold text-on-surface">Silk Cut finish</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    Temperament
                  </p>
                  <p className="font-bold text-on-surface">Gentle, good with strangers</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    Weight
                  </p>
                  <p className="font-bold text-on-surface">
                    28 kg{" "}
                    <span className="text-xs font-normal text-on-surface-variant">
                      (as of Nov 14, 2024)
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-lg p-5">
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                  Groomer Notes
                </p>
                <p className="text-sm text-on-surface-variant leading-relaxed italic">
                  "Barnaby responds well to warm water and lavender-scented products. Slight anxiety
                  with nail trims — recommend breaks between paws. Loves praise and treats during
                  blow-dry."
                </p>
              </div>
            </div>

            {/* Upcoming Appointment */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-6">
                Next Sanctuary Visit
              </p>
              <div className="bg-surface-container-lowest p-6 rounded-lg flex items-center gap-6">
                <div className="flex flex-col items-center bg-primary text-on-primary rounded-xl px-5 py-4 flex-shrink-0 min-w-[72px] text-center">
                  <span className="text-3xl font-headline font-extrabold leading-none">14</span>
                  <span className="text-xs font-label font-bold uppercase tracking-widest mt-1 text-on-primary/80">
                    Nov
                  </span>
                  <span className="text-xs text-on-primary/60 mt-0.5">2024</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-headline font-bold text-on-surface text-lg">
                    The "Royal Bath" &amp; Silk Cut
                  </p>
                  <p className="text-sm text-on-surface-variant mt-0.5">
                    The Amber Sanctuary · San Vicente, Tarlac City
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1">11:15 AM · ~90 min session</p>
                </div>
                <div className="flex flex-col items-end gap-3 flex-shrink-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-xs font-bold uppercase tracking-widest">
                    Confirmed
                  </span>
                  <Link
                    href="/schedule"
                    className="text-xs text-primary font-label font-bold hover:underline active:scale-95 transition-all"
                  >
                    Manage →
                  </Link>
                </div>
              </div>
            </div>

            {/* Smart Vet Record */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">
                  Care Record
                </p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-xs font-bold uppercase tracking-widest">
                  <span
                    className="material-symbols-outlined text-xs"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                  Verified by PurrBook
                </span>
              </div>
              <div className="flex gap-2 mb-6">
                <span className="bg-primary text-on-primary px-4 py-1.5 rounded-full font-label text-xs font-bold uppercase tracking-widest cursor-default">
                  All
                </span>
                <span className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-surface-container-high transition-colors">
                  Grooming
                </span>
                <span className="bg-surface-container text-on-surface-variant px-4 py-1.5 rounded-full font-label text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-surface-container-high transition-colors">
                  Vet Visits
                </span>
              </div>
              <CareRecordTimeline />
            </div>

            {/* AI Recommendations */}
            <div className="bg-surface-container-lowest border border-primary/10 p-8 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    auto_awesome
                  </span>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">
                    AI Care Recommendations
                  </p>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label text-xs font-bold uppercase tracking-widest">
                  Powered by PurrBook AI
                </span>
              </div>
              <div className="space-y-4">
                <div className="bg-surface-container-low p-5 rounded-xl flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    schedule
                  </span>
                  <div>
                    <p className="text-sm font-bold text-on-surface mb-1">Next Grooming Due</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Based on Barnaby's double coat and last visit on Nov 14, his next session is
                      due around <span className="font-bold text-on-surface">Dec 26, 2024</span>{" "}
                      (6-week cycle).
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    wb_sunny
                  </span>
                  <div>
                    <p className="text-sm font-bold text-on-surface mb-1">Seasonal Tip</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Dry season ahead in Tarlac City. Consider a hydrating treatment and increased
                      brushing frequency to prevent matting in Barnaby's double coat.
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    vaccines
                  </span>
                  <div>
                    <p className="text-sm font-bold text-on-surface mb-1">Health Reminder</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      Barnaby's next DHPP booster is due in{" "}
                      <span className="font-bold text-on-surface">October 2025</span>. Schedule a
                      vet check at least 2 weeks in advance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
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
