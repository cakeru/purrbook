"use client";

import { useState } from "react";
import Header from "@/components/Header";

const NOTIFICATION_PREFS = [
  { id: "booking_confirm", label: "Booking Confirmations", description: "When your appointment is confirmed by the salon", defaultOn: true },
  { id: "reminders", label: "Appointment Reminders", description: "Day-before reminder for upcoming sessions", defaultOn: true },
  { id: "messages", label: "New Messages", description: "When a salon replies to your message", defaultOn: true },
  { id: "promos", label: "Promotions & Offers", description: "Deals and seasonal offers from your saved sanctuaries", defaultOn: false },
];

export default function SettingsPage() {
  const [notifs, setNotifs] = useState<Record<string, boolean>>(
    Object.fromEntries(NOTIFICATION_PREFS.map((n) => [n.id, n.defaultOn]))
  );
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-12 max-w-2xl mx-auto space-y-6">
        <div className="mb-8">
          <h1 className="text-3xl font-['Plus_Jakarta_Sans'] font-bold text-amber-900 dark:text-amber-100 tracking-tight">
            Settings
          </h1>
          <p className="text-stone-500 mt-1 text-sm">
            Manage your account and preferences
          </p>
        </div>

        {/* Account */}
        <section className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-stone-100 dark:border-stone-800">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-stone-800 dark:text-stone-100">
              Account
            </h2>
            <p className="text-xs text-stone-400 mt-0.5">Your personal information</p>
          </div>
          <div className="divide-y divide-stone-100 dark:divide-stone-800">
            {[
              { label: "Name", value: "Maria Santos" },
              { label: "Email", value: "maria@example.com" },
              { label: "Phone", value: "+63 917 123 4567" },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between px-6 py-4">
                <div>
                  <p className="text-xs font-['Plus_Jakarta_Sans'] font-bold uppercase tracking-widest text-stone-400">
                    {row.label}
                  </p>
                  <p className="text-sm font-['Plus_Jakarta_Sans'] text-stone-700 dark:text-stone-300 mt-0.5">
                    {row.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-stone-100 dark:border-stone-800">
            <a
              href="/auth"
              className="text-sm font-['Plus_Jakarta_Sans'] font-semibold text-amber-700 hover:text-amber-900 transition-colors"
            >
              Edit profile →
            </a>
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-stone-100 dark:border-stone-800">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-stone-800 dark:text-stone-100">
              Notifications
            </h2>
            <p className="text-xs text-stone-400 mt-0.5">Choose which alerts you receive</p>
          </div>
          <div className="divide-y divide-stone-100 dark:divide-stone-800">
            {NOTIFICATION_PREFS.map((pref) => (
              <div key={pref.id} className="flex items-center justify-between gap-4 px-6 py-4">
                <div>
                  <p className="font-['Plus_Jakarta_Sans'] font-semibold text-sm text-stone-700 dark:text-stone-300">
                    {pref.label}
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">{pref.description}</p>
                </div>
                <button
                  onClick={() => setNotifs((prev) => ({ ...prev, [pref.id]: !prev[pref.id] }))}
                  className={`relative w-10 h-6 rounded-full transition-all flex-shrink-0 active:scale-95 ${
                    notifs[pref.id] ? "bg-amber-600" : "bg-stone-200"
                  }`}
                >
                  <span
                    className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${
                      notifs[pref.id] ? "left-5" : "left-1"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* App Preferences */}
        <section className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-700 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-stone-100 dark:border-stone-800">
            <h2 className="font-['Plus_Jakarta_Sans'] font-bold text-base text-stone-800 dark:text-stone-100">
              App Preferences
            </h2>
            <p className="text-xs text-stone-400 mt-0.5">Display and behavior settings</p>
          </div>
          <div className="flex items-center justify-between gap-4 px-6 py-4">
            <div>
              <p className="font-['Plus_Jakarta_Sans'] font-semibold text-sm text-stone-700 dark:text-stone-300">
                Dark Mode
              </p>
              <p className="text-xs text-stone-400 mt-0.5">Switch to a darker interface</p>
            </div>
            <button
              onClick={() => setDarkMode((v) => !v)}
              className={`relative w-10 h-6 rounded-full transition-all flex-shrink-0 active:scale-95 ${
                darkMode ? "bg-amber-600" : "bg-stone-200"
              }`}
            >
              <span
                className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all ${
                  darkMode ? "left-5" : "left-1"
                }`}
              />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
