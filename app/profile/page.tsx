"use client";

import { useState } from "react";
import Link from "next/link";
import AddCompanionModal, { type Pet } from "@/components/AddCompanionModal";
import Header from "@/components/Header";
import { PETS } from "@/lib/pets";

const SEED_COMPANIONS: (Pet & { image: string; href?: string })[] = PETS.map((p) => ({
  name: p.name,
  breed: p.breed,
  species: p.species,
  gender: p.gender,
  age: p.age,
  weight: p.weight,
  coatType: p.coatType,
  notes: "",
  image: p.image,
  href: `/pets/${p.id}`,
}));

export default function ProfilePage() {
  const [companions, setCompanions] = useState(SEED_COMPANIONS);

  function handleAddCompanion(pet: Pet) {
    setCompanions((prev) => [...prev, { ...pet, image: "" }]);
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
            alt="Maria Santos"
            className="absolute bottom-0 left-20 w-20 h-20 rounded-full object-cover ring-4 ring-surface shadow-xl translate-y-1/2"
          />
        </div>

        {/* Name Strip */}
        <div className="max-w-screen-xl mx-auto px-12 flex items-end justify-between pt-14 pb-6">
          <div>
            <h1 className="text-2xl font-headline font-bold text-on-surface">Maria Santos</h1>
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
                    <p className="text-2xl font-headline font-bold text-on-surface">4</p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link href="/shop-details/sniff-pet-salon-hotel" className="flex gap-4 p-3 rounded-xl border border-outline-variant/10 hover:border-primary bg-surface-container-lowest transition-all active:scale-95 group">
                    <img
                      src="/studios/sniff-pet-salon-hotel.jpg"
                      alt="Sniff Pet Salon"
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col justify-between py-0.5 min-w-0">
                      <div>
                        <p className="font-headline font-bold text-on-surface text-sm group-hover:text-primary transition-colors">Sniff Pet Salon & Hotel</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">San Vicente · Tarlac City</p>
                      </div>
                      <div className="flex items-center gap-1 text-tertiary">
                        <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-xs font-bold text-on-surface">4.9</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant ml-auto self-center flex-shrink-0 text-base group-hover:text-primary transition-colors">chevron_right</span>
                  </Link>
                  <Link href="/shop-details/vet-soucier-veterinary-grooming" className="flex gap-4 p-3 rounded-xl border border-outline-variant/10 hover:border-primary bg-surface-container-lowest transition-all active:scale-95 group">
                    <img
                      src="/studios/vet-soucier-veterinary-grooming.jpg"
                      alt="Vet Soucier"
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col justify-between py-0.5 min-w-0">
                      <div>
                        <p className="font-headline font-bold text-on-surface text-sm group-hover:text-primary transition-colors">Vet Soucier Veterinary & Grooming</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">Tarlac City</p>
                      </div>
                      <div className="flex items-center gap-1 text-tertiary">
                        <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-xs font-bold text-on-surface">4.8</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant ml-auto self-center flex-shrink-0 text-base group-hover:text-primary transition-colors">chevron_right</span>
                  </Link>
                  <Link href="/shop-details/petorria-animal-clinic-grooming" className="flex gap-4 p-3 rounded-xl border border-outline-variant/10 hover:border-primary bg-surface-container-lowest transition-all active:scale-95 group">
                    <img
                      src="/studios/petorria-animal-clinic-grooming.jpg"
                      alt="Petorria"
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex flex-col justify-between py-0.5 min-w-0">
                      <div>
                        <p className="font-headline font-bold text-on-surface text-sm group-hover:text-primary transition-colors">Petorria Animal Clinic & Grooming</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">Tarlac City</p>
                      </div>
                      <div className="flex items-center gap-1 text-tertiary">
                        <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="text-xs font-bold text-on-surface">4.8</span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant ml-auto self-center flex-shrink-0 text-base group-hover:text-primary transition-colors">chevron_right</span>
                  </Link>
                </div>
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
