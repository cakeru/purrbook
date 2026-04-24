"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AddCompanionModal, { type Pet } from "@/components/AddCompanionModal";
import Header from "@/components/Header";
import { api, getStoredUser } from "@/lib/api";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [companions, setCompanions] = useState<(Pet & { id?: string; image: string; href?: string })[]>([]);
  const [savedShops, setSavedShops] = useState<any[]>([]);
  const [subPlan, setSubPlan] = useState<"flexible" | "annual" | null>(null);

  useEffect(() => {
    setUser(getStoredUser());

    api.get<{ pets: any[] }>("/pets").then(({ pets }) => {
      setCompanions(pets.map((p) => ({
        id: p.id,
        name: p.name,
        breed: p.breed ?? "",
        species: p.species,
        gender: p.gender ?? "male",
        age: p.ageYears ?? "0",
        weight: p.weightKg ?? "0",
        coatType: p.coatType ?? "",
        notes: "",
        image: p.imageUrl ?? "",
        href: `/pets/${p.id}`,
      })));
    }).catch(console.error);

    api.get<{ shops: any[] }>("/shops/saved").then(({ shops }) => setSavedShops(shops)).catch(console.error);

    api.get<{ subscription: any }>("/subscriptions").then(({ subscription }) => {
      if (subscription) setSubPlan(subscription.plan as "flexible" | "annual");
    }).catch(console.error);
  }, []);

  async function handleAddCompanion(pet: Pet) {
    try {
      const { pet: created } = await api.post<{ pet: any }>("/pets", {
        name: pet.name,
        species: pet.species,
        breed: pet.breed,
        gender: pet.gender,
        ageYears: pet.age,
        weightKg: pet.weight,
        coatType: pet.coatType,
      });
      setCompanions((prev) => [...prev, { ...pet, id: created.id, image: "", href: `/pets/${created.id}` }]);
    } catch (err) {
      console.error("Add companion failed", err);
    }
  }

  return (
    <>
      <Header />

      <main className="pt-24 pb-16">
        {/* Cover Banner */}
        <div className="max-w-screen-xl mx-auto px-12 pt-8 relative">
          <div className="h-44 rounded-2xl overflow-hidden relative organic-mask-2 bg-gradient-to-br from-primary to-primary-dim">
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-8 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl" />
          </div>
          <img
            src="/purrbook_profile.jpg"
            alt={user?.name ?? "Profile"}
            className="absolute bottom-0 left-20 w-20 h-20 rounded-full object-cover ring-4 ring-surface shadow-xl translate-y-1/2"
          />
        </div>

        {/* Name Strip */}
        <div className="max-w-screen-xl mx-auto px-12 flex items-end justify-between pt-14 pb-6">
          <div>
            <h1 className="text-2xl font-headline font-bold text-on-surface">{user?.name ?? "—"}</h1>
            <div className="flex items-center gap-2 text-on-surface-variant text-sm mt-1">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span>Tarlac City, Philippines</span>
              <span className="mx-1 text-outline-variant">·</span>
              <span className="material-symbols-outlined text-sm text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              <span className="text-tertiary font-bold">Verified</span>
            </div>
          </div>
          <Link
            href="/auth"
            className="py-2.5 px-6 rounded-xl border-2 border-outline-variant text-on-surface font-bold text-sm hover:border-primary hover:text-primary transition-all active:scale-95"
          >
            Edit Profile
          </Link>
        </div>

        <div className="max-w-screen-xl mx-auto px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">
            {/* LEFT: Sticky Profile Card */}
            <aside className="sticky top-28">
              <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-6">
                <div className="flex border-b border-outline-variant/10 pb-5 mb-5">
                  <div className="flex-1 text-center">
                    <p className="text-2xl font-headline font-bold text-on-surface">12</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">Bookings</p>
                  </div>
                  <div className="w-px bg-outline-variant/20" />
                  <div className="flex-1 text-center">
                    <p className="text-2xl font-headline font-bold text-on-surface">{companions.length}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">Pets</p>
                  </div>
                  <div className="w-px bg-outline-variant/20" />
                  <div className="flex-1 text-center">
                    <p className="text-2xl font-headline font-bold text-on-surface">{savedShops.length}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">Saved</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    <span>Member since January 2024</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-on-surface-variant">
                    <span className="material-symbols-outlined text-base text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    <span>Identity verified</span>
                  </div>
                  {subPlan && (
                    <div className="flex items-center gap-3 text-sm">
                      <span className="material-symbols-outlined text-base text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>workspace_premium</span>
                      <Link href="/subscriptions" className="font-label font-bold text-primary hover:underline">
                        {subPlan === "annual" ? "Annual Plan" : "Flexible Plan"}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </aside>

            {/* RIGHT: Content */}
            <div className="space-y-8">
              {/* My Companions */}
              <section className="border-b border-outline-variant/10 pb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-headline font-bold text-on-surface tracking-tight">My Companions</h2>
                  <AddCompanionModal variant="button" onAdd={handleAddCompanion} />
                </div>
                <div className="flex flex-wrap gap-3">
                  {companions.map((pet) => {
                    const cardClass =
                      "flex items-center gap-3 bg-surface-container-lowest border border-outline-variant/10 rounded-xl px-4 py-3 hover:border-primary transition-all active:scale-95 cursor-pointer group";
                    const inner = (
                      <>
                        {pet.image ? (
                          <img
                            src={pet.image}
                            alt={pet.name}
                            className="w-10 h-10 rounded-lg object-cover flex-shrink-0"
                          />
                        ) : (
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <span
                              className="material-symbols-outlined text-primary text-base"
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              {pet.species === "cat" ? "cruelty_free" : "pets"}
                            </span>
                          </div>
                        )}
                        <div className="flex-1">
                          <p className="font-headline font-bold text-on-surface text-sm group-hover:text-primary transition-colors">
                            {pet.name}
                          </p>
                          <p className="text-xs text-on-surface-variant">
                            {pet.breed || (pet.species === "cat" ? "Cat" : "Dog")}
                            {pet.gender ? ` · ${pet.gender.charAt(0).toUpperCase() + pet.gender.slice(1)}` : ""}
                            {pet.age ? ` · ${pet.age} yrs` : ""}
                          </p>
                        </div>
                        <span className="ml-2 text-xs text-primary font-bold whitespace-nowrap">
                          {pet.href ? "View →" : "Reserve →"}
                        </span>
                      </>
                    );
                    return pet.href ? (
                      <Link key={pet.name} href={pet.href} className={cardClass}>
                        {inner}
                      </Link>
                    ) : (
                      <Link key={pet.name} href="/schedule" className={cardClass}>
                        {inner}
                      </Link>
                    );
                  })}
                  <AddCompanionModal variant="card" onAdd={handleAddCompanion} />
                </div>
              </section>

              {/* Upcoming Appointments */}
              <section className="border-b border-outline-variant/10 pb-8">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-headline font-bold text-on-surface tracking-tight">Reserved Moments</h2>
                  <Link href="/schedule" className="text-primary font-label text-xs font-bold uppercase tracking-widest hover:underline">View All</Link>
                </div>
                <div className="divide-y divide-outline-variant/10">
                  <div className="flex items-center justify-between py-4 gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-on-tertiary-container text-base" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <h3 className="font-headline font-bold text-on-surface text-sm">Sniff Pet Salon & Hotel</h3>
                          <span className="bg-tertiary-container text-on-tertiary-container text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Confirmed</span>
                        </div>
                        <p className="text-xs text-on-surface-variant truncate">&quot;Royal Bath & Silk Cut&quot; · Barnaby · Nov 14, 2024 · 11:15 AM</p>
                      </div>
                    </div>
                    <Link href="/schedule" className="text-primary font-label font-bold text-xs hover:underline whitespace-nowrap flex-shrink-0 active:scale-95 transition-all">Refine →</Link>
                  </div>
                  <div className="flex items-center justify-between py-4 gap-4">
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
                        <span className="material-symbols-outlined text-on-secondary-container text-base" style={{ fontVariationSettings: "'FILL' 1" }}>content_cut</span>
                      </div>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-0.5">
                          <h3 className="font-headline font-bold text-on-surface text-sm">Pet Station Grooming Salon</h3>
                          <span className="bg-secondary-container text-on-secondary-container text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Pending</span>
                        </div>
                        <p className="text-xs text-on-surface-variant truncate">Breed-Specific Cut · Luna · Nov 21, 2024 · 10:30 AM</p>
                      </div>
                    </div>
                    <Link href="/schedule" className="text-primary font-label font-bold text-xs hover:underline whitespace-nowrap flex-shrink-0 active:scale-95 transition-all">Refine →</Link>
                  </div>
                </div>
              </section>

              {/* Saved Sanctuaries */}
              <section>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-headline font-bold text-on-surface tracking-tight">Saved Sanctuaries</h2>
                  <Link href="/search" className="text-primary font-label text-xs font-bold uppercase tracking-widest hover:underline">Discover More</Link>
                </div>
                {savedShops.length === 0 ? (
                  <div className="py-8 text-center bg-surface-container-lowest rounded-xl border border-outline-variant/10">
                    <span className="material-symbols-outlined text-3xl text-on-surface-variant/30 block mb-2">favorite</span>
                    <p className="text-sm text-on-surface-variant font-label">No saved sanctuaries yet.</p>
                    <Link href="/search" className="text-primary text-xs font-label font-bold mt-1 inline-block hover:underline">Browse sanctuaries →</Link>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {savedShops.map((shop) => (
                      <div key={shop.slug} className="flex gap-4 p-3 rounded-xl border border-outline-variant/10 hover:border-primary bg-surface-container-lowest transition-all group">
                        <Link href={`/shop-details/${shop.slug}`} className="flex gap-4 flex-1 min-w-0 items-center active:scale-95 transition-all">
                          <img
                            src={shop.imageUrl ?? "/purrbook.png"}
                            alt={shop.name ?? shop.label}
                            className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                          />
                          <div className="flex flex-col justify-between py-0.5 min-w-0 flex-1">
                            <p className="font-headline font-bold text-on-surface text-sm group-hover:text-primary transition-colors truncate">{shop.name ?? shop.label}</p>
                            <div className="flex items-center gap-1 text-tertiary mt-1">
                              <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                              <span className="text-xs font-bold text-on-surface">{parseFloat(String(shop.rating ?? 0)).toFixed(1)}</span>
                            </div>
                          </div>
                          <span className="material-symbols-outlined text-on-surface-variant self-center flex-shrink-0 text-base group-hover:text-primary transition-colors">chevron_right</span>
                        </Link>
                        <button
                          onClick={() => async () => { await api.delete(`/shops/${shop.slug}/save`).catch(console.error); setSavedShops((prev) => prev.filter((s) => s.slug !== shop.slug)); }}
                          className="flex-shrink-0 self-center w-8 h-8 rounded-full flex items-center justify-center hover:bg-error/5 transition-all active:scale-95"
                          aria-label="Remove from saved"
                        >
                          <span className="material-symbols-outlined text-base text-error" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full mt-20 bg-stone-100 dark:bg-stone-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 border-t border-stone-200/20 max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-lg font-black text-amber-900 dark:text-amber-200">PurrBook</span>
            <p className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500">
              © 2024 PurrBook Editorial Pet Care. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8">
            {["About Us", "Services", "Privacy Policy", "Terms of Service", "Contact"].map((label) => (
              <a key={label} className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500 hover:text-amber-600 transition-colors" href="#">
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
