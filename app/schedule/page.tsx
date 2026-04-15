import Link from "next/link";
import AddCompanionModal from "@/components/AddCompanionModal";
export default function SchedulePage() {
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
        {/* Editorial Header */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
            Refine Their <span className="text-primary italic">Radiance.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl mt-4 max-w-2xl font-light">
            Experience the "Tactile Sanctuary" – a bespoke grooming journey tailored for the
            discerning pet owner.
          </p>
        </header>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Stepper Navigation (Editorial Timeline) */}
          <aside className="lg:col-span-3 sticky top-40">
            <div className="space-y-12">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-bold shadow-sm ring-4 ring-surface">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check
                  </span>
                </div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">
                    Step 01
                  </p>
                  <h3 className="text-on-surface font-semibold">Select Companion</h3>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shadow-xl ring-4 ring-surface animate-pulse">
                  02
                </div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">
                    Step 02
                  </p>
                  <h3 className="text-on-surface font-semibold">Reserve Moment</h3>
                </div>
              </div>
              <div className="flex items-center gap-6 group opacity-40">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">
                  03
                </div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest">
                    Step 03
                  </p>
                  <h3 className="text-on-surface font-semibold">Confirm Care</h3>
                </div>
              </div>
              <div className="flex items-center gap-6 group opacity-40">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">
                  04
                </div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest">
                    Step 04
                  </p>
                  <h3 className="text-on-surface font-semibold">Secure Payment</h3>
                </div>
              </div>
            </div>
          </aside>
          {/* Main Form Canvas */}
          <section className="lg:col-span-6 space-y-12">
            {/* Pet Selection (Bento Style) */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <div className="flex justify-between items-end mb-8">
                <h2 className="text-2xl font-headline font-bold text-on-surface">
                  Choose Your Companion
                </h2>
                <AddCompanionModal variant="button" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group cursor-pointer overflow-hidden rounded-lg bg-surface-container-lowest p-4 ring-2 ring-primary active:scale-95 transition-all">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Pet Profile"
                      className="w-16 h-16 rounded-md object-cover grayscale-0 group-hover:scale-110 transition-transform duration-500"
                      data-alt="Close up of a golden retriever smiling in soft morning light in a cozy living room setting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqPLXkvBImvBgNNsUjdng4AAKjaYGdFqtuMjNkth3AvE0-I7rl15nOw3OK6HjgSrDG0LlRmOVKuVMN_O81glZEttBwTv2sVGzDA9Rgr-mds3DoEkSu0Zg2Rg8pWCYJ5-uuu-djeMf3YI5WKuuzlUV8kOUm9ROWhnlkzmSkZkx9uu4cOWoEuRzbHYXd0w1C_S4Dj-m9KcDIMJYyf16pKM4V9LQEA9bJIvxUgqZD0TI9rvXQUg6KJ5_9wdSmPjmNOj0Pryufghzvzg7B"
                    />
                    <div>
                      <h4 className="font-bold text-on-surface">Barnaby</h4>
                      <p className="text-xs text-on-surface-variant uppercase tracking-tighter">
                        Golden Retriever
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span
                      className="material-symbols-outlined text-primary"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                </div>
                <div className="relative group cursor-pointer overflow-hidden rounded-lg bg-surface-container hover:bg-surface-container-lowest transition-all active:scale-95 p-4">
                  <div className="flex items-center gap-4">
                    <img
                      alt="Pet Profile"
                      className="w-16 h-16 rounded-md object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                      data-alt="Persian cat with long white fur sitting elegantly on a velvet stool in front of a warm window"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8gXkBB2zCRyHuJgng0VEl8TBTyvK8uhhA4p_2Wv5aD-W_F70oZX_bIJBpGenzMsR7GYGmkzWl46LWRMGnkvWnZ6WjTiHeXqeKZ1rfvUSF4rBg-toFHc3bNoBV158JmYisXNILjCeeMddzcloHxa_1fOmYm3oUAVWnvv3Dzy-j6woh5UCgukJohBO0CJw5yaidq8cJyLrpbNthJWsgd79Ahnp0OoSuHRWkhpoHAh8GfC1OiFpshz_Nt33Q8tESCGgD2PFQKogSjvLf"
                    />
                    <div>
                      <h4 className="font-bold text-on-surface">Luna</h4>
                      <p className="text-xs text-on-surface-variant uppercase tracking-tighter">
                        Persian Cat
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Calendar & Time (Glassmorphism Section) */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Custom Calendar UI */}
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-6 px-2">
                    <h3 className="font-headline font-bold">November 2024</h3>
                    <div className="flex gap-2">
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container rounded-full active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                      </button>
                      <button className="w-8 h-8 flex items-center justify-center hover:bg-surface-container rounded-full active:scale-95 transition-all">
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-on-surface-variant uppercase mb-4">
                    <span>Mo</span>
                    <span>Tu</span>
                    <span>We</span>
                    <span>Th</span>
                    <span>Fr</span>
                    <span>Sa</span>
                    <span>Su</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    <span className="p-3 text-sm text-on-surface-variant/30">28</span>
                    <span className="p-3 text-sm text-on-surface-variant/30">29</span>
                    <span className="p-3 text-sm text-on-surface-variant/30">30</span>
                    <span className="p-3 text-sm text-on-surface-variant/30">31</span>
                    <button className="p-3 text-sm hover:bg-primary-container/20 rounded-full active:scale-95 transition-all">
                      1
                    </button>
                    <button className="p-3 text-sm hover:bg-primary-container/20 rounded-full active:scale-95 transition-all">
                      2
                    </button>
                    <button className="p-3 text-sm hover:bg-primary-container/20 rounded-full active:scale-95 transition-all">
                      3
                    </button>
                    {/* More days... */}
                    <button className="p-3 text-sm bg-primary text-on-primary rounded-full font-bold">
                      14
                    </button>
                    <button className="p-3 text-sm hover:bg-primary-container/20 rounded-full active:scale-95 transition-all">
                      15
                    </button>
                    <button className="p-3 text-sm hover:bg-primary-container/20 rounded-full active:scale-95 transition-all">
                      16
                    </button>
                    <button className="p-3 text-sm hover:bg-primary-container/20 rounded-full active:scale-95 transition-all">
                      17
                    </button>
                  </div>
                </div>
                {/* Time Selection (River Stone Chips) */}
                <div className="bg-surface-container-low p-6 rounded-lg">
                  <h3 className="font-headline font-bold mb-6">Available Moments</h3>
                  <div className="flex flex-wrap gap-3">
                    <button className="px-5 py-2 bg-surface-container-lowest border border-outline-variant/15 text-sm rounded-full hover:border-primary transition-all active:scale-95">
                      09:00 AM
                    </button>
                    <button className="px-5 py-2 bg-surface-container-lowest border border-outline-variant/15 text-sm rounded-full hover:border-primary transition-all active:scale-95">
                      10:30 AM
                    </button>
                    <button className="px-5 py-2 bg-primary text-on-primary text-sm rounded-full font-bold shadow-md">
                      11:15 AM
                    </button>
                    <button className="px-5 py-2 bg-surface-container-lowest border border-outline-variant/15 text-sm rounded-full hover:border-primary transition-all active:scale-95">
                      01:45 PM
                    </button>
                    <button className="px-5 py-2 bg-surface-container-lowest border border-outline-variant/15 text-sm rounded-full hover:border-primary transition-all active:scale-95">
                      03:00 PM
                    </button>
                    <button className="px-5 py-2 opacity-30 cursor-not-allowed border border-outline-variant/15 text-sm rounded-full">
                      04:30 PM
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-8 border-t border-outline-variant/10">
              <button className="text-on-surface-variant font-label text-sm uppercase tracking-widest hover:text-on-surface">
                Cancel
              </button>
              <Link
                href="/schedule/confirm"
                className="bg-on-surface text-surface px-12 py-4 rounded-full font-label font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-lg active:scale-95"
              >
                Confirm Your Sanctuary
              </Link>
            </div>
          </section>
          {/* Summary Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-surface-container-highest/30 backdrop-blur-md p-8 rounded-xl border border-outline-variant/10">
              <h3 className="text-xl font-headline font-bold mb-8">Reservation Details</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                    Service
                  </span>
                  <span className="text-sm font-semibold text-right">
                    The "Royal Bath" &amp; Silk Cut
                  </span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                    Companion
                  </span>
                  <span className="text-sm font-semibold">Barnaby</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                    Date
                  </span>
                  <span className="text-sm font-semibold">Nov 14, 2024</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">
                    Time
                  </span>
                  <span className="text-sm font-semibold">11:15 AM</span>
                </div>
                <div className="pt-6 border-t border-outline-variant/20">
                  <div className="flex justify-between items-center text-primary">
                    <span className="text-sm font-bold uppercase tracking-widest">
                      Total Estimate
                    </span>
                    <span className="text-2xl font-headline font-extrabold">₱8,200.00</span>
                  </div>
                  <p className="text-[10px] text-on-surface-variant/60 mt-2 italic text-right">
                    *Taxes and materials included
                  </p>
                </div>
              </div>
            </div>
            {/* Trust Badge */}
            <div className="flex items-center gap-4 p-4 grayscale opacity-50">
              <span className="material-symbols-outlined text-4xl">verified_user</span>
              <p className="text-[10px] uppercase font-bold leading-tight tracking-widest">
                Professional handling <br /> certified by PurrBook
              </p>
            </div>
          </aside>
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
