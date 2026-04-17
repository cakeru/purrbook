"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import MapWrapper from "@/components/MapWrapper";
import { SHOPS, MAP_MARKERS } from "@/lib/shops";

const SERVICE_TYPES = ["Grooming", "Boarding", "Therapy", "Training"];
const AMENITY_OPTIONS = [
  { key: "Organic Treats", label: "Organic Treats Included" },
  { key: "Live Camera", label: "24/7 Live Camera Access" },
  { key: "Luxury Suite", label: "Luxury Suite Upgrades" },
];

export default function SearchPage() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [maxDistance, setMaxDistance] = useState(20);
  const [activeAmenities, setActiveAmenities] = useState<Set<string>>(new Set());
  const [locationQuery, setLocationQuery] = useState("");
  const [showMap, setShowMap] = useState(false);

  function toggleAmenity(key: string) {
    setActiveAmenities((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  }

  const filteredShops = useMemo(() => {
    return SHOPS.filter((shop) => {
      if (locationQuery && !shop.label.toLowerCase().includes(locationQuery.toLowerCase())) {
        return false;
      }
      if (activeService && !shop.services.includes(activeService)) {
        return false;
      }
      if (parseFloat(shop.distance) > maxDistance) {
        return false;
      }
      for (const amenity of activeAmenities) {
        if (!shop.amenities.includes(amenity)) return false;
      }
      return true;
    });
  }, [locationQuery, activeService, maxDistance, activeAmenities]);

  const featuredShop = filteredShops.find((s) => s.featured);
  const regularShops = filteredShops.filter((s) => !s.featured);

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-stone-900/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(48,51,48,0.06)]">
        <nav className="flex justify-between items-center px-12 py-4 max-w-screen-2xl mx-auto font-['Plus_Jakarta_Sans'] tracking-tight">
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-2">
              <img src="/purrbook.png" alt="PurrBook logo" className="h-8 w-auto" />
              <span className="text-2xl font-bold italic text-amber-900 dark:text-amber-100">PurrBook</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors" href="/">Explore</Link>
              <Link className="text-amber-900 dark:text-amber-100 border-b-2 border-amber-700 pb-1 font-semibold transition-all" href="/search">Search</Link>
              <Link className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors" href="/profile">Profile</Link>
              <Link className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors" href="/subscriptions">Subscriptions</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-stone-600 dark:text-stone-400">
              <span className="material-symbols-outlined hover:bg-stone-100/50 p-2 rounded-full transition-all">notifications</span>
              <Link href="/messages"><span className="material-symbols-outlined hover:bg-stone-100/50 p-2 rounded-full transition-all">inbox</span></Link>
            </div>
            <Link href="/search" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-8 py-3 rounded-full font-label font-bold tracking-wide active:scale-95 transition-all shadow-lg shadow-primary/20">
              Book Now
            </Link>
          </div>
        </nav>
      </header>

      <main className="pt-24 min-h-screen">
        <div className="max-w-screen-2xl mx-auto px-12 pt-8 flex flex-col md:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-80 flex-shrink-0">
            <div className="sticky top-32 space-y-4">
              <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-6 space-y-6">
                <p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface-variant">
                  Refine Your Search
                </p>

                {/* Location */}
                <div className="border-b border-outline-variant/10 pb-6">
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">location_on</span>
                    <input
                      className="w-full bg-surface-container-low border-none rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-primary/40 font-body text-sm focus:outline-none"
                      placeholder="Search by name..."
                      type="text"
                      value={locationQuery}
                      onChange={(e) => setLocationQuery(e.target.value)}
                    />
                  </div>
                </div>

                {/* Service Type */}
                <div className="space-y-4 border-b border-outline-variant/10 pb-6">
                  <p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface-variant">Service Type</p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICE_TYPES.map((type) => (
                      <button
                        key={type}
                        onClick={() => setActiveService(activeService === type ? null : type)}
                        className={`px-5 py-2 rounded-full font-label text-sm font-medium active:scale-95 transition-all ${
                          activeService === type
                            ? "bg-primary text-on-primary"
                            : "bg-surface-container-highest text-on-surface hover:bg-surface-container-high"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Distance Range */}
                <div className="space-y-4 border-b border-outline-variant/10 pb-6">
                  <div className="flex justify-between items-center">
                    <p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface-variant">Distance Range</p>
                    <span className="text-primary font-semibold text-sm">{maxDistance} km</span>
                  </div>
                  <input
                    className="w-full h-1 bg-surface-container-high rounded-full appearance-none accent-primary cursor-pointer"
                    type="range"
                    min={0}
                    max={20}
                    step={0.5}
                    value={maxDistance}
                    onChange={(e) => setMaxDistance(parseFloat(e.target.value))}
                  />
                </div>

                {/* Amenities */}
                <div className="space-y-4">
                  <p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface-variant">Sanctuary Perks</p>
                  <div className="space-y-3">
                    {AMENITY_OPTIONS.map(({ key, label }) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={activeAmenities.has(key)}
                          onChange={() => toggleAmenity(key)}
                          className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/40"
                        />
                        <span className="text-on-surface group-hover:text-primary transition-colors text-sm">
                          {label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Map Toggle */}
              <button
                onClick={() => setShowMap((v) => !v)}
                className="w-full py-4 rounded-xl bg-surface-container-lowest border border-outline-variant/15 flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-95 shadow-[0_8px_32px_rgba(48,51,48,0.04)]"
              >
                <span className="material-symbols-outlined text-primary">map</span>
                <span className="font-label font-bold text-sm text-on-surface">
                  {showMap ? "Hide Map" : "Switch to Interactive Map"}
                </span>
              </button>
            </div>
          </aside>

          {/* Results */}
          <section className="flex-grow pb-24">
            <div className="flex justify-between items-end mb-10">
              <div className="space-y-3">
                <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest">
                  Tarlac City, Philippines
                </span>
                <h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight">
                  {filteredShops.length} {filteredShops.length === 1 ? "Sanctuary" : "Sanctuaries"} Found
                </h2>
                <p className="text-on-surface-variant text-sm">
                  {filteredShops.length > 0
                    ? "Curated venues available near you — sorted by proximity"
                    : "Try adjusting your filters to find more options"}
                </p>
              </div>
              <div className="flex items-center gap-4 bg-surface-container-low p-1 rounded-full">
                <button
                  onClick={() => setShowMap(false)}
                  className={`px-6 py-2 rounded-full font-label text-sm font-semibold active:scale-95 transition-all ${!showMap ? "bg-surface-container-lowest shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
                >
                  Grid View
                </button>
                <button
                  onClick={() => setShowMap(true)}
                  className={`px-6 py-2 rounded-full font-label text-sm font-semibold active:scale-95 transition-all ${showMap ? "bg-surface-container-lowest shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
                >
                  Map Split
                </button>
              </div>
            </div>

            {/* Map View */}
            {showMap && (
              <div className="mb-10 rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm" style={{ height: 400 }}>
                <MapWrapper markers={MAP_MARKERS} />
              </div>
            )}

            {/* No Results */}
            {filteredShops.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 text-on-surface-variant">
                <span className="material-symbols-outlined text-5xl mb-4 opacity-30">search_off</span>
                <p className="font-headline font-bold text-xl mb-2">No sanctuaries match your filters</p>
                <p className="text-sm">Try widening your distance range or removing some filters.</p>
                <button
                  onClick={() => { setActiveService(null); setMaxDistance(20); setActiveAmenities(new Set()); setLocationQuery(""); }}
                  className="mt-6 px-6 py-2.5 rounded-full bg-primary text-on-primary font-label font-bold text-sm active:scale-95 transition-all"
                >
                  Clear All Filters
                </button>
              </div>
            )}

            {/* Shop Grid */}
            {filteredShops.length > 0 && (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                {/* Featured Card */}
                {featuredShop && (
                  <div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-[0_12px_40px_rgba(48,51,48,0.08)] transition-all duration-500 xl:col-span-2 flex flex-col lg:flex-row border border-outline-variant/5">
                    <div className="lg:w-2/5 h-80 lg:h-auto overflow-hidden relative">
                      <img
                        alt={featuredShop.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        src={featuredShop.image}
                      />
                      <div className="absolute top-6 left-6 bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1.5 rounded-full font-label text-xs font-bold uppercase tracking-widest shadow-lg">
                        Featured Studio
                      </div>
                    </div>
                    <div className="p-10 flex flex-col justify-between lg:w-3/5">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-3xl font-headline font-bold text-on-surface">{featuredShop.label}</h3>
                          <div className="flex items-center gap-1 text-tertiary">
                            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                            <span className="font-bold">{featuredShop.rating}</span>
                          </div>
                        </div>
                        <p className="text-on-surface-variant leading-relaxed text-lg mb-8 italic">
                          &quot;{featuredShop.description}&quot;
                        </p>
                        <div className="flex gap-4 mb-8">
                          <span className="flex items-center gap-2 text-sm text-on-surface font-medium bg-surface-container-low px-4 py-2 rounded-full">
                            <span className="material-symbols-outlined text-primary scale-75">scuba_diving</span>
                            Ozone Bath
                          </span>
                          <span className="flex items-center gap-2 text-sm text-on-surface font-medium bg-surface-container-low px-4 py-2 rounded-full">
                            <span className="material-symbols-outlined text-primary scale-75">brush</span>
                            Hand Stripping
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between border-t border-outline-variant/10 pt-6">
                        <div>
                          <p className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest mb-1">Pricing</p>
                          <p className="text-2xl font-headline font-bold text-primary">{featuredShop.price}</p>
                        </div>
                        <Link href={featuredShop.href} className="bg-primary text-on-primary px-8 py-3 rounded-full font-label font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
                          Book Studio
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Regular Cards */}
                {regularShops.map((shop) => (
                  <div key={shop.id} className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
                      <img
                        alt={shop.label}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        src={shop.image}
                      />
                      <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary tracking-widest uppercase">
                        {shop.category}
                      </div>
                      <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
                        <span className="material-symbols-outlined">favorite</span>
                      </button>
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">
                          {shop.hours}
                        </span>
                        <div className="flex items-center gap-1 text-tertiary text-sm">
                          <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="font-bold">{shop.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-headline font-bold text-on-surface mb-2">{shop.label}</h3>
                      <p className="text-sm text-on-surface-variant line-clamp-2 mb-6">{shop.description}</p>
                    </div>
                    <div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
                      <div className="flex items-center gap-1.5 text-sm text-on-surface-variant">
                        <span className="material-symbols-outlined text-base">near_me</span>
                        <span className="font-medium">{shop.distance} km away</span>
                      </div>
                      <Link href={shop.href} className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">
                        Reserve →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
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
