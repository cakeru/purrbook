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

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-headline font-bold text-on-surface tracking-tight">
            Settings
          </h1>
          <p className="text-on-surface-variant mt-1 text-sm font-body">
            Manage your account and preferences
          </p>
        </div>

        {/* Account */}
        <section className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant/10">
            <h2 className="font-headline font-bold text-base text-on-surface">Account</h2>
            <p className="text-xs text-on-surface-variant mt-0.5">Your personal information</p>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {[
              { label: "Name", value: "Maria Santos" },
              { label: "Email", value: "maria@example.com" },
              { label: "Phone", value: "+63 917 123 4567" },
            ].map((row) => (
              <div key={row.label} className="flex items-center px-6 py-4">
                <div>
                  <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
                    {row.label}
                  </p>
                  <p className="text-sm font-body text-on-surface mt-0.5">{row.value}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 border-t border-outline-variant/10">
            <a
              href="/auth"
              className="text-sm font-label font-bold text-primary hover:opacity-80 transition-opacity"
            >
              Edit profile →
            </a>
          </div>
        </section>

        {/* Notifications */}
        <section className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant/10">
            <h2 className="font-headline font-bold text-base text-on-surface">Notifications</h2>
            <p className="text-xs text-on-surface-variant mt-0.5">Choose which alerts you receive</p>
          </div>
          <div className="divide-y divide-outline-variant/10">
            {NOTIFICATION_PREFS.map((pref) => (
              <div key={pref.id} className="flex items-center justify-between gap-4 px-6 py-4">
                <div>
                  <p className="font-label font-bold text-sm text-on-surface">{pref.label}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">{pref.description}</p>
                </div>
                <button
                  onClick={() => setNotifs((prev) => ({ ...prev, [pref.id]: !prev[pref.id] }))}
                  className={`relative w-10 h-6 rounded-full transition-all flex-shrink-0 active:scale-95 ${
                    notifs[pref.id] ? "bg-primary" : "bg-surface-container-highest"
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
        <section className="bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-outline-variant/10">
            <h2 className="font-headline font-bold text-base text-on-surface">App Preferences</h2>
            <p className="text-xs text-on-surface-variant mt-0.5">Display and behavior settings</p>
          </div>
          <div className="flex items-center justify-between gap-4 px-6 py-4">
            <div>
              <p className="font-label font-bold text-sm text-on-surface">Dark Mode</p>
              <p className="text-xs text-on-surface-variant mt-0.5">Switch to a darker interface</p>
            </div>
            <button
              onClick={() => setDarkMode((v) => !v)}
              className={`relative w-10 h-6 rounded-full transition-all flex-shrink-0 active:scale-95 ${
                darkMode ? "bg-primary" : "bg-surface-container-highest"
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
