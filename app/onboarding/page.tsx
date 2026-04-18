"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SHOPS } from "@/lib/shops";

const FEATURED_SHOPS = SHOPS.filter((s) => s.featured).concat(SHOPS.filter((s) => !s.featured)).slice(0, 3);

const DOG_BREEDS = ["Golden Retriever", "Labrador Retriever", "Shih Tzu", "Poodle", "Pomeranian", "Aspin (Mixed Breed)", "Other"];
const CAT_BREEDS = ["Persian", "Scottish Fold", "Siamese", "Maine Coon", "Puspin (Mixed Breed)", "Other"];

type Species = "dog" | "cat" | null;

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [species, setSpecies] = useState<Species>(null);
  const [petName, setPetName] = useState("");
  const [breed, setBreed] = useState("");
  const [chosenShop, setChosenShop] = useState<string | null>(null);

  function canProceedStep1() {
    return species !== null && petName.trim().length > 0 && breed.length > 0;
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      {/* Minimal header */}
      <header className="px-8 py-5 flex items-center justify-between border-b border-outline-variant/10 bg-surface-container-lowest">
        <Link href="/" className="flex items-center gap-2 active:scale-95 transition-all">
          <img src="/purrbook.png" alt="PurrBook" className="h-7 w-auto" />
          <span className="font-headline font-extrabold text-lg text-primary italic">PurrBook</span>
        </Link>
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                n === step ? "w-8 bg-primary" : n < step ? "w-4 bg-primary/40" : "w-4 bg-surface-container-highest"
              }`}
            />
          ))}
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-6 py-12">
        {/* ── Step 1: Add your companion ── */}
        {step === 1 && (
          <div className="w-full max-w-lg">
            <div className="mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest mb-4">
                Step 1 of 3
              </span>
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
                Meet your <span className="text-primary italic">companion.</span>
              </h1>
              <p className="text-on-surface-variant mt-3 font-light">
                Tell us about your pet so we can personalise their sanctuary experience.
              </p>
            </div>

            <div className="space-y-6">
              {/* Species picker */}
              <div>
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                  What kind of companion?
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {(["dog", "cat"] as Species[]).map((s) => (
                    <button
                      key={s!}
                      onClick={() => { setSpecies(s); setBreed(""); }}
                      className={`p-6 rounded-2xl border-2 transition-all active:scale-95 flex flex-col items-center gap-3 ${
                        species === s
                          ? "border-primary bg-primary/5"
                          : "border-outline-variant/20 hover:border-primary/30 bg-surface-container-lowest"
                      }`}
                    >
                      <span
                        className={`material-symbols-outlined text-4xl ${species === s ? "text-primary" : "text-on-surface-variant"}`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {s === "dog" ? "pets" : "set_meal"}
                      </span>
                      <span className={`font-headline font-bold text-lg capitalize ${species === s ? "text-primary" : "text-on-surface"}`}>
                        {s}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Pet&apos;s Name
                </label>
                <input
                  type="text"
                  value={petName}
                  onChange={(e) => setPetName(e.target.value)}
                  placeholder="e.g. Barnaby"
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-5 py-3.5 text-on-surface font-body text-sm placeholder:text-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>

              {/* Breed */}
              {species && (
                <div>
                  <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                    Breed
                  </label>
                  <select
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-5 py-3.5 text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                  >
                    <option value="">Select a breed…</option>
                    {(species === "dog" ? DOG_BREEDS : CAT_BREEDS).map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              )}

              <button
                disabled={!canProceedStep1()}
                onClick={() => setStep(2)}
                className="w-full py-4 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-label font-bold tracking-wide uppercase active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none mt-2"
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* ── Step 2: Pick a sanctuary ── */}
        {step === 2 && (
          <div className="w-full max-w-2xl">
            <div className="mb-10">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest mb-4">
                Step 2 of 3
              </span>
              <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
                Choose a <span className="text-primary italic">sanctuary.</span>
              </h1>
              <p className="text-on-surface-variant mt-3 font-light">
                Pick your favourite sanctuary for {petName || "your companion"}&apos;s first visit.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {FEATURED_SHOPS.map((shop) => (
                <button
                  key={shop.slug}
                  onClick={() => setChosenShop(shop.slug)}
                  className={`w-full flex items-center gap-5 p-5 rounded-2xl border-2 transition-all active:scale-95 text-left ${
                    chosenShop === shop.slug
                      ? "border-primary bg-primary/5"
                      : "border-outline-variant/20 hover:border-primary/30 bg-surface-container-lowest"
                  }`}
                >
                  <img
                    src={shop.image}
                    alt={shop.label}
                    className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-headline font-bold text-on-surface text-base leading-tight">{shop.label}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">{shop.address}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="inline-flex items-center gap-1 text-tertiary">
                        <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-xs font-bold">{shop.rating}</span>
                      </span>
                      <span className="text-outline-variant">·</span>
                      <span className="text-xs text-on-surface-variant">{shop.price}</span>
                    </div>
                  </div>
                  {chosenShop === shop.slug && (
                    <span className="material-symbols-outlined text-primary flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>
                      check_circle
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-4 rounded-full border-2 border-outline-variant/30 text-on-surface-variant font-label font-bold active:scale-95 transition-all hover:border-primary hover:text-primary"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-[2] py-4 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-label font-bold tracking-wide uppercase active:scale-95 transition-all shadow-lg shadow-primary/20"
              >
                {chosenShop ? "Continue" : "Skip for Now"}
              </button>
            </div>
          </div>
        )}

        {/* ── Step 3: All set ── */}
        {step === 3 && (
          <div className="w-full max-w-lg text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full bg-tertiary-container flex items-center justify-center shadow-xl shadow-tertiary-container/30 animate-pulse">
                <span
                  className="material-symbols-outlined text-on-tertiary-container text-5xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  pets
                </span>
              </div>
            </div>

            <span className="inline-block px-5 py-2 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-xs font-bold uppercase tracking-widest mb-6">
              You&apos;re all set
            </span>

            <h1 className="text-4xl md:text-5xl font-headline font-extrabold text-on-surface tracking-tight leading-tight mb-4">
              Welcome to PurrBook,{" "}
              <span className="text-primary italic">{petName || "friend"}.</span>
            </h1>

            <p className="text-on-surface-variant font-light leading-relaxed mb-10">
              {petName ? `${petName}'s` : "Your companion's"} profile is ready. Discover sanctuaries, book sessions, and track every care moment — all in one place.
            </p>

            <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-6 mb-8 text-left space-y-3">
              {species && (
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {species === "dog" ? "pets" : "set_meal"}
                  </span>
                  <span className="text-sm text-on-surface-variant">Companion</span>
                  <span className="ml-auto font-label font-bold text-sm text-on-surface">
                    {petName} · {breed}
                  </span>
                </div>
              )}
              {chosenShop && (
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>storefront</span>
                  <span className="text-sm text-on-surface-variant">Favourite Sanctuary</span>
                  <span className="ml-auto font-label font-bold text-sm text-on-surface">
                    {FEATURED_SHOPS.find((s) => s.slug === chosenShop)?.label}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/search"
                className="flex-1 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-label font-bold tracking-wide uppercase active:scale-95 transition-all shadow-lg shadow-primary/20 text-center"
              >
                Explore Sanctuaries
              </Link>
              <Link
                href="/profile"
                className="flex-1 py-4 rounded-full border-2 border-primary text-primary font-label font-bold active:scale-95 transition-all text-center"
              >
                View Profile
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
