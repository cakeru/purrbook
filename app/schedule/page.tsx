"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import AddCompanionModal from "@/components/AddCompanionModal";
import Header from "@/components/Header";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const TIME_SLOTS = [
  { label: "09:00 AM", available: true },
  { label: "10:30 AM", available: true },
  { label: "11:15 AM", available: true },
  { label: "01:45 PM", available: true },
  { label: "03:00 PM", available: true },
  { label: "04:30 PM", available: false },
];

type CalendarDay =
  | { type: "padding" }
  | { type: "day"; day: number; isPast: boolean };

function buildCalendar(month: number, year: number): CalendarDay[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const firstDay = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Mon-based: Mon=0 … Sun=6
  const startDow = (firstDay.getDay() + 6) % 7;
  const days: CalendarDay[] = [];

  for (let i = 0; i < startDow; i++) {
    days.push({ type: "padding" });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    const date = new Date(year, month, d);
    days.push({ type: "day", day: d, isPast: date < today });
  }
  return days;
}

function formatDateParam(day: number, month: number, year: number): string {
  const mm = String(month + 1).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

function formatDateDisplay(day: number, month: number, year: number): string {
  const d = new Date(year, month, day);
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function ScheduleContent() {
  const router = useRouter();
  const params = useSearchParams();
  const now = new Date();

  const serviceParam = params.get("service") ?? "The \u201cRoyal Bath\u201d & Silk Cut";
  const priceParam = params.get("price") ?? "\u20b18,200.00";
  const shopParam = params.get("shop") ?? "";

  const [selectedPet, setSelectedPet] = useState<"Barnaby" | "Luna">("Barnaby");
  const [currentMonth, setCurrentMonth] = useState(now.getMonth());
  const [currentYear, setCurrentYear] = useState(now.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const calendarDays = buildCalendar(currentMonth, currentYear);

  function prevMonth() {
    const today = new Date();
    if (currentYear > today.getFullYear() || currentMonth > today.getMonth()) {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear((y) => y - 1);
      } else {
        setCurrentMonth((m) => m - 1);
      }
      setSelectedDay(null);
    }
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
    setSelectedDay(null);
  }

  function handleConfirm() {
    if (!selectedDay || !selectedTime) return;
    const date = formatDateParam(selectedDay, currentMonth, currentYear);
    router.push(
      `/schedule/confirm?pet=${encodeURIComponent(selectedPet)}&date=${encodeURIComponent(date)}&time=${encodeURIComponent(selectedTime)}&service=${encodeURIComponent(serviceParam)}&price=${encodeURIComponent(priceParam)}&shop=${encodeURIComponent(shopParam)}`
    );
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const isCurrentMonthToday =
    currentMonth === now.getMonth() && currentYear === now.getFullYear();

  const canGoBack =
    currentYear > today.getFullYear() ||
    (currentYear === today.getFullYear() && currentMonth > today.getMonth());

  const canConfirm = selectedDay !== null && selectedTime !== null;

  const displayDate =
    selectedDay !== null
      ? formatDateDisplay(selectedDay, currentMonth, currentYear)
      : "—";

  return (
    <>
      <Header />

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
        {/* Editorial Header */}
        <header className="mb-16">
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
            Refine Their <span className="text-primary italic">Radiance.</span>
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl mt-4 max-w-2xl font-light">
            Experience the &quot;Tactile Sanctuary&quot; – a bespoke grooming journey tailored for the
            discerning pet owner.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Stepper Navigation */}
          <aside className="lg:col-span-3 sticky top-40">
            <div className="space-y-12">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container font-bold shadow-sm ring-4 ring-surface">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                </div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">Step 01</p>
                  <h3 className="text-on-surface font-semibold">Select Companion</h3>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold shadow-xl ring-4 ring-surface animate-pulse">02</div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">Step 02</p>
                  <h3 className="text-on-surface font-semibold">Reserve Moment</h3>
                </div>
              </div>
              <div className="flex items-center gap-6 group opacity-40">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">03</div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest">Step 03</p>
                  <h3 className="text-on-surface font-semibold">Confirm Care</h3>
                </div>
              </div>
              <div className="flex items-center gap-6 group opacity-40">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center font-bold">04</div>
                <div>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest">Step 04</p>
                  <h3 className="text-on-surface font-semibold">Secure Payment</h3>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Form Canvas */}
          <section className="lg:col-span-6 space-y-12">
            {/* Pet Selection */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <div className="flex justify-between items-end mb-8">
                <h2 className="text-2xl font-headline font-bold text-on-surface">Choose Your Companion</h2>
                <AddCompanionModal variant="button" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Barnaby */}
                <button
                  onClick={() => setSelectedPet("Barnaby")}
                  className={`relative group cursor-pointer overflow-hidden rounded-lg bg-surface-container-lowest p-4 transition-all active:scale-95 ${
                    selectedPet === "Barnaby" ? "ring-2 ring-primary" : "hover:bg-surface-container"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      alt="Barnaby"
                      className={`w-16 h-16 rounded-md object-cover transition-all duration-500 ${selectedPet === "Barnaby" ? "grayscale-0" : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"}`}
                      src="/pets/Barnaby.jpg"
                    />
                    <div>
                      <h4 className="font-bold text-on-surface">Barnaby</h4>
                      <p className="text-xs text-on-surface-variant uppercase tracking-tighter">Golden Retriever</p>
                    </div>
                  </div>
                  {selectedPet === "Barnaby" && (
                    <div className="absolute top-4 right-4">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                  )}
                </button>

                {/* Luna */}
                <button
                  onClick={() => setSelectedPet("Luna")}
                  className={`relative group cursor-pointer overflow-hidden rounded-lg bg-surface-container-lowest p-4 transition-all active:scale-95 ${
                    selectedPet === "Luna" ? "ring-2 ring-primary" : "hover:bg-surface-container"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      alt="Luna"
                      className={`w-16 h-16 rounded-md object-cover transition-all duration-500 ${selectedPet === "Luna" ? "grayscale-0" : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"}`}
                      src="/pets/Luna.jpg"
                    />
                    <div>
                      <h4 className="font-bold text-on-surface">Luna</h4>
                      <p className="text-xs text-on-surface-variant uppercase tracking-tighter">Persian Cat</p>
                    </div>
                  </div>
                  {selectedPet === "Luna" && (
                    <div className="absolute top-4 right-4">
                      <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    </div>
                  )}
                </button>
              </div>
            </div>

            {/* Calendar & Time */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Calendar */}
                <div className="bg-surface-container-lowest p-6 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-6 px-2">
                    <h3 className="font-headline font-bold">
                      {MONTH_NAMES[currentMonth]} {currentYear}
                    </h3>
                    <div className="flex gap-2">
                      <button
                        onClick={prevMonth}
                        disabled={!canGoBack}
                        className="w-8 h-8 flex items-center justify-center hover:bg-surface-container rounded-full active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                      >
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                      </button>
                      <button
                        onClick={nextMonth}
                        className="w-8 h-8 flex items-center justify-center hover:bg-surface-container rounded-full active:scale-95 transition-all"
                      >
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold text-on-surface-variant uppercase mb-4">
                    <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {calendarDays.map((cell, idx) => {
                      if (cell.type === "padding") {
                        return <span key={`pad-${idx}`} />;
                      }
                      const isSelected = selectedDay === cell.day;
                      const isToday =
                        isCurrentMonthToday &&
                        cell.day === now.getDate() &&
                        !cell.isPast;
                      return (
                        <button
                          key={cell.day}
                          disabled={cell.isPast}
                          onClick={() => setSelectedDay(cell.day)}
                          className={`p-2 text-sm rounded-full transition-all active:scale-95 ${
                            cell.isPast
                              ? "text-on-surface-variant/30 cursor-not-allowed"
                              : isSelected
                              ? "bg-primary text-on-primary font-bold shadow-md"
                              : isToday
                              ? "ring-2 ring-primary/40 font-semibold hover:bg-primary-container/20"
                              : "hover:bg-primary-container/20"
                          }`}
                        >
                          {cell.day}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Time Slots */}
                <div className="bg-surface-container-low p-6 rounded-lg">
                  <h3 className="font-headline font-bold mb-6">Available Moments</h3>
                  <div className="flex flex-wrap gap-3">
                    {TIME_SLOTS.map(({ label, available }) => {
                      const isSelected = selectedTime === label;
                      return (
                        <button
                          key={label}
                          disabled={!available}
                          onClick={() => setSelectedTime(label)}
                          className={`px-5 py-2 text-sm rounded-full transition-all active:scale-95 ${
                            !available
                              ? "opacity-30 cursor-not-allowed border border-outline-variant/15"
                              : isSelected
                              ? "bg-primary text-on-primary font-bold shadow-md"
                              : "bg-surface-container-lowest border border-outline-variant/15 hover:border-primary"
                          }`}
                        >
                          {label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between pt-8 border-t border-outline-variant/10">
              <Link href="/search" className="text-on-surface-variant font-label text-sm uppercase tracking-widest hover:text-on-surface">
                Cancel
              </Link>
              <button
                onClick={handleConfirm}
                disabled={!canConfirm}
                className="bg-on-surface text-surface px-12 py-4 rounded-full font-label font-bold uppercase tracking-widest hover:bg-primary transition-all shadow-lg active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-on-surface"
              >
                Confirm Your Sanctuary
              </button>
            </div>
          </section>

          {/* Summary Sidebar */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-surface-container-highest/30 backdrop-blur-md p-8 rounded-xl border border-outline-variant/10">
              <h3 className="text-xl font-headline font-bold mb-8">Reservation Details</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Service</span>
                  <span className="text-sm font-semibold text-right max-w-[180px]">{serviceParam}</span>
                </div>
                {shopParam && (
                  <div className="flex justify-between items-start">
                    <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Shop</span>
                    <span className="text-sm font-semibold text-right max-w-[180px] capitalize">{shopParam.replace(/-/g, " ")}</span>
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Companion</span>
                  <span className="text-sm font-semibold">{selectedPet}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Date</span>
                  <span className="text-sm font-semibold">{displayDate}</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Time</span>
                  <span className="text-sm font-semibold">{selectedTime ?? "—"}</span>
                </div>
                <div className="pt-6 border-t border-outline-variant/20">
                  <div className="flex justify-between items-center text-primary">
                    <span className="text-sm font-bold uppercase tracking-widest">Total Estimate</span>
                    <span className="text-2xl font-headline font-extrabold">{priceParam.startsWith("₱") ? priceParam : `₱${priceParam}`}</span>
                  </div>
                  <p className="text-[10px] text-on-surface-variant/60 mt-2 italic text-right">*Taxes and materials included</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 grayscale opacity-50">
              <span className="material-symbols-outlined text-4xl">verified_user</span>
              <p className="text-[10px] uppercase font-bold leading-tight tracking-widest">Professional handling <br /> certified by PurrBook</p>
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

export default function SchedulePage() {
  return (
    <Suspense>
      <ScheduleContent />
    </Suspense>
  );
}
