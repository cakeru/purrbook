"use client";

import { useState } from "react";
import { type PetProfile, type WeightEntry } from "@/lib/pets";

type Edits = {
  weight: string;
  groomerNotes: string;
  newWeightMonth: string;
  newWeightKg: string;
  newCareNote: string;
};

export default function PetEditPanel({ pet }: { pet: Pick<PetProfile, "name" | "weight" | "grooming" | "weightHistory"> }) {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [weightHistory, setWeightHistory] = useState<WeightEntry[]>(pet.weightHistory);
  const [form, setForm] = useState<Edits>({
    weight: pet.weight,
    groomerNotes: pet.grooming.groomerNotes,
    newWeightMonth: "",
    newWeightKg: "",
    newCareNote: "",
  });

  function set<K extends keyof Edits>(key: K, val: string) {
    setForm((prev) => ({ ...prev, [key]: val }));
  }

  function addWeightEntry() {
    const kg = parseFloat(form.newWeightKg);
    if (!form.newWeightMonth || isNaN(kg)) return;
    setWeightHistory((prev) => [...prev, { month: form.newWeightMonth, weight: kg }]);
    set("newWeightMonth", "");
    set("newWeightKg", "");
  }

  function handleSave() {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
      setOpen(false);
    }, 1800);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="border-2 border-primary text-primary px-8 py-3 rounded-full font-label font-bold tracking-wide active:scale-95 transition-all hover:bg-primary/5"
      >
        Edit Profile
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-200 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[480px] bg-surface-container-lowest border-l border-outline-variant/15 shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="px-6 py-5 border-b border-outline-variant/10 flex items-center justify-between flex-shrink-0">
          <div>
            <p className="font-headline font-bold text-lg text-on-surface">Edit Profile</p>
            <p className="text-sm text-on-surface-variant mt-0.5">{pet.name}</p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-on-surface-variant text-lg">close</span>
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">

          {/* Weight */}
          <section>
            <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">Current Weight</p>
            <div className="flex items-center gap-3 bg-surface-container-low rounded-xl p-4">
              <button
                onClick={() => set("weight", String(Math.max(0, parseFloat(form.weight) - 0.5).toFixed(1)))}
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-all active:scale-95 flex-shrink-0"
              >
                <span className="material-symbols-outlined text-on-surface-variant text-base">remove</span>
              </button>
              <div className="flex-1 text-center">
                <p className="text-3xl font-headline font-extrabold text-primary">{parseFloat(form.weight).toFixed(1)}</p>
                <p className="text-xs text-on-surface-variant mt-0.5">kilograms</p>
              </div>
              <button
                onClick={() => set("weight", String((parseFloat(form.weight) + 0.5).toFixed(1)))}
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-all active:scale-95 flex-shrink-0"
              >
                <span className="material-symbols-outlined text-on-surface-variant text-base">add</span>
              </button>
            </div>
          </section>

          {/* Log weight entry */}
          <section>
            <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">Log Weight Entry</p>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Month (e.g. Dec 2024)"
                  value={form.newWeightMonth}
                  onChange={(e) => set("newWeightMonth", e.target.value)}
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm text-on-surface font-label placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="number"
                  placeholder="Weight (kg)"
                  value={form.newWeightKg}
                  onChange={(e) => set("newWeightKg", e.target.value)}
                  step="0.1"
                  min="0"
                  className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm text-on-surface font-label placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <button
                onClick={addWeightEntry}
                disabled={!form.newWeightMonth || !form.newWeightKg}
                className="w-full py-2.5 rounded-full border border-primary text-primary font-label font-bold text-sm hover:bg-primary/5 active:scale-95 transition-all disabled:opacity-40 disabled:pointer-events-none"
              >
                Add Entry
              </button>
              {weightHistory.length > 0 && (
                <div className="space-y-1.5 mt-1">
                  {[...weightHistory].reverse().slice(0, 3).map((e, i) => (
                    <div key={i} className="flex items-center justify-between px-3 py-2 bg-surface-container-low rounded-lg">
                      <span className="text-xs text-on-surface-variant font-label">{e.month}</span>
                      <span className="text-xs font-label font-bold text-on-surface">{e.weight} kg</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Groomer Notes */}
          <section>
            <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">Groomer Notes</p>
            <textarea
              value={form.groomerNotes}
              onChange={(e) => set("groomerNotes", e.target.value)}
              rows={4}
              placeholder="Special instructions for groomers…"
              className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm text-on-surface font-label placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </section>

          {/* Care Note */}
          <section>
            <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">Add Care Note</p>
            <textarea
              value={form.newCareNote}
              onChange={(e) => set("newCareNote", e.target.value)}
              rows={3}
              placeholder="Observed behaviour, food changes, new symptoms…"
              className="w-full bg-surface-container-low border border-outline-variant/20 rounded-xl px-4 py-3 text-sm text-on-surface font-label placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </section>

        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-outline-variant/10 flex-shrink-0">
          {saved ? (
            <div className="flex items-center justify-center gap-2 py-3 bg-tertiary-container rounded-full">
              <span className="material-symbols-outlined text-on-tertiary-container text-base" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              <p className="text-sm font-label font-bold text-on-tertiary-container">Profile updated</p>
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-3 rounded-full border border-outline-variant/30 text-on-surface-variant font-label font-bold text-sm hover:bg-surface-container active:scale-95 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="flex-1 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-label font-bold text-sm active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                Save Changes
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
