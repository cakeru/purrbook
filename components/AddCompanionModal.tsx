"use client";

import { useState } from "react";

type Variant = "card" | "button";

export default function AddCompanionModal({ variant = "button" }: { variant?: Variant }) {
  const [open, setOpen] = useState(false);
  const [species, setSpecies] = useState<"dog" | "cat">("dog");
  const [gender, setGender] = useState<"male" | "female">("male");

  function closeModal() {
    setOpen(false);
  }

  return (
    <>
      {/* Trigger */}
      {variant === "card" ? (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 bg-surface-container-lowest border-2 border-dashed border-outline-variant rounded-xl px-4 py-3 hover:border-primary hover:bg-primary-container/10 transition-all active:scale-95 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 group-hover:bg-primary-container transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-base">
              add
            </span>
          </div>
          <p className="text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors">
            Introduce a New Companion
          </p>
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="text-primary font-label text-sm font-bold uppercase tracking-widest active:scale-95 transition-all hover:text-primary-dim"
        >
          + Introduce a New Companion
        </button>
      )}

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={closeModal}
        >
          <div
            className="bg-surface-container-lowest rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-outline-variant/10">
              <div>
                <p className="text-xs font-label font-bold uppercase tracking-widest text-primary mb-0.5">
                  New Companion
                </p>
                <h2 className="font-headline font-bold text-on-surface text-xl">
                  Introduce Your Companion
                </h2>
              </div>
              <button
                onClick={closeModal}
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors active:scale-95"
              >
                <span className="material-symbols-outlined text-on-surface-variant text-base">
                  close
                </span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Photo Upload */}
              <div>
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                  Photo
                </label>
                <div className="border-2 border-dashed border-outline-variant/40 rounded-xl p-8 flex flex-col items-center gap-3 hover:border-primary/40 transition-colors cursor-pointer bg-surface-container-low group">
                  <div className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-2xl">
                      add_a_photo
                    </span>
                  </div>
                  <p className="text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors">
                    Upload a photo
                  </p>
                  <p className="text-xs text-on-surface-variant/60">JPG or PNG, up to 5 MB</p>
                </div>
              </div>

              {/* Species Toggle */}
              <div>
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                  Species
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setSpecies("dog")}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all active:scale-95 ${species === "dog" ? "border-primary bg-primary/5" : "border-outline-variant/20 hover:border-primary/40"}`}
                  >
                    <span
                      className={`material-symbols-outlined text-xl ${species === "dog" ? "text-primary" : "text-on-surface-variant"}`}
                      style={{ fontVariationSettings: species === "dog" ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      pets
                    </span>
                    <span
                      className={`font-label font-bold text-sm ${species === "dog" ? "text-on-surface" : "text-on-surface-variant"}`}
                    >
                      Dog
                    </span>
                    {species === "dog" && (
                      <span
                        className="material-symbols-outlined text-primary text-base ml-auto"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                    )}
                  </button>
                  <button
                    onClick={() => setSpecies("cat")}
                    className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all active:scale-95 ${species === "cat" ? "border-primary bg-primary/5" : "border-outline-variant/20 hover:border-primary/40"}`}
                  >
                    <span
                      className={`material-symbols-outlined text-xl ${species === "cat" ? "text-primary" : "text-on-surface-variant"}`}
                      style={{ fontVariationSettings: species === "cat" ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      cruelty_free
                    </span>
                    <span
                      className={`font-label font-bold text-sm ${species === "cat" ? "text-on-surface" : "text-on-surface-variant"}`}
                    >
                      Cat
                    </span>
                    {species === "cat" && (
                      <span
                        className="material-symbols-outlined text-primary text-base ml-auto"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                    )}
                  </button>
                </div>
              </div>

              {/* Name & Breed */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Barnaby"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Breed
                  </label>
                  <input
                    type="text"
                    placeholder={species === "dog" ? "e.g. Golden Retriever" : "e.g. Persian Cat"}
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Gender & Age */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                    Gender
                  </label>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setGender("male")}
                      className={`flex-1 py-3 rounded-lg border-2 font-label font-bold text-sm transition-all active:scale-95 ${gender === "male" ? "border-primary bg-primary/5 text-primary" : "border-outline-variant/20 text-on-surface-variant hover:border-primary/40"}`}
                    >
                      Male
                    </button>
                    <button
                      onClick={() => setGender("female")}
                      className={`flex-1 py-3 rounded-lg border-2 font-label font-bold text-sm transition-all active:scale-95 ${gender === "female" ? "border-primary bg-primary/5 text-primary" : "border-outline-variant/20 text-on-surface-variant hover:border-primary/40"}`}
                    >
                      Female
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Age
                  </label>
                  <input
                    type="number"
                    min={0}
                    max={30}
                    placeholder="e.g. 3"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Weight & Coat Type */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Weight
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      min={0}
                      placeholder="e.g. 28"
                      className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all pr-12"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-on-surface-variant font-label font-bold">
                      kg
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Coat Type{" "}
                    <span className="normal-case tracking-normal font-normal text-on-surface-variant/50 ml-1">
                      Optional
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Double coat"
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Notes for Groomer{" "}
                  <span className="normal-case tracking-normal font-normal text-on-surface-variant/50 ml-1">
                    Optional
                  </span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Any sensitivities, preferred handling techniques, or things your groomer should know…"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-4 py-3 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none leading-relaxed"
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={closeModal}
                  className="flex-1 py-3.5 rounded-full border-2 border-outline-variant text-on-surface font-label font-bold tracking-wide uppercase active:scale-95 transition-all hover:border-primary hover:text-primary"
                >
                  Cancel
                </button>
                <button
                  onClick={closeModal}
                  className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-label font-bold tracking-wide uppercase active:scale-95 transition-all shadow-lg shadow-primary/20"
                >
                  Add Companion
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
