"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import { api } from "@/lib/api";
import Header from "@/components/Header";
import GallerySection from "./GallerySection";
import ShopBookingFlow from "./ShopBookingFlow";

const SERVICE_ICONS: Record<string, string> = {
  grooming: "content_cut",
  vet: "vaccines",
  boarding: "king_bed",
  daycare: "wb_sunny",
  training: "school",
};

const SERVICE_COLORS: Record<string, string> = {
  grooming: "bg-tertiary-container/20 text-tertiary",
  vet: "bg-secondary-container/30 text-secondary",
  boarding: "bg-tertiary-container/20 text-tertiary",
  daycare: "bg-primary/10 text-primary",
  training: "bg-secondary-container/30 text-secondary",
};

function mapShop(raw: any) {
  const detailServices = (raw.services ?? []).map((s: any) => {
    const cat = (s.category ?? "grooming").toLowerCase();
    const priceNum = Math.round((s.priceCentavos ?? 0) / 100);
    return {
      ...s,
      name: s.name,
      description: s.description ?? "",
      price: `₱${priceNum.toLocaleString()}`,
      duration: s.durationMins ? `${s.durationMins} min` : "",
      colorClass: SERVICE_COLORS[cat] ?? "bg-surface-container/30 text-on-surface-variant",
      icon: SERVICE_ICONS[cat] ?? "spa",
    };
  });

  const minPrice = detailServices.length > 0
    ? Math.min(...detailServices.map((s: any) => parseFloat(s.price.replace(/[₱,]/g, "")) || 0))
    : 0;

  const todayHours = (() => {
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const today = days[new Date().getDay()];
    const h = (raw.hours ?? []).find((h: any) => h.dayOfWeek === today);
    if (!h || h.isClosed) return "Closed today";
    return `Open ${h.openTime ?? "09:00"} – ${h.closeTime ?? "18:00"}`;
  })();

  return {
    ...raw,
    label: raw.name,
    category: raw.type,
    image: "/purrbook_homepage.png",
    longDescription: raw.description ?? "",
    openHours: todayHours,
    detailServices,
    startingPrice: minPrice > 0 ? `₱${minPrice.toLocaleString()}` : "—",
    gallery: [],
    amenities: raw.amenities ?? [],
  };
}

export default function ShopDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const [shop, setShop] = useState<any | null>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      api.get<{ shop: any }>(`/shops/${slug}`),
      api.get<{ reviews: any[] }>(`/shops/${slug}/reviews`),
    ])
      .then(([{ shop: raw }, { reviews: revs }]) => {
        setShop(mapShop(raw));
        setReviews(revs ?? []);
      })
      .catch(() => setShop(null))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <>
        <Header />
        <main className="pt-40 pb-20 px-12 max-w-screen-2xl mx-auto text-on-surface-variant text-sm">
          Loading sanctuary details…
        </main>
      </>
    );
  }

  if (!shop) {
    return (
      <>
        <Header />
        <main className="pt-40 pb-20 px-12 max-w-screen-2xl mx-auto">
          <p className="text-on-surface-variant text-sm">Sanctuary not found.</p>
          <Link href="/search" className="text-primary font-label font-bold text-sm mt-4 inline-block">← Back to Search</Link>
        </main>
      </>
    );
  }

  const avgRating = reviews.length
    ? (reviews.reduce((s: number, r: any) => s + r.rating, 0) / reviews.length).toFixed(1)
    : null;

  return (
    <>
      <Header />

      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-20">
          <div className="md:col-span-8 relative">
            <div className="overflow-hidden rounded-xl h-[500px]">
              <img
                alt={shop.label}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                src={shop.image}
                data-alt={`${shop.label} — ${shop.category} sanctuary in Tarlac City`}
              />
            </div>
            <div className="absolute -bottom-10 left-10 bg-surface-container-lowest p-8 rounded-lg editorial-shadow max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-tertiary-container/20 text-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {shop.category}
                </span>
                <div className="flex items-center text-tertiary ml-auto">
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  <span className="text-sm font-bold ml-1">{parseFloat(String(shop.rating ?? 0)).toFixed(1)}</span>
                </div>
              </div>
              <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-3 leading-tight">
                {shop.label.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-primary italic">{shop.label.split(" ").at(-1)}.</span>
              </h1>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">{shop.longDescription}</p>
              <div className="flex items-center gap-4 text-xs font-semibold text-on-surface-variant">
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">location_on</span>
                  {shop.address}
                </span>
                <span className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">schedule</span>
                  {shop.openHours}
                </span>
              </div>
            </div>
          </div>

          {/* Bento-style Feature Cards */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 h-[400px]">
            <div className="col-span-2 bg-surface-container-low rounded-lg p-6 flex flex-col justify-between">
              <span className="material-symbols-outlined text-primary text-3xl">spa</span>
              <div>
                <h3 className="font-headline font-bold text-lg">
                  {shop.detailServices[0]?.name ?? shop.category} Care
                </h3>
                <p className="text-xs text-on-surface-variant">
                  {shop.detailServices[0]?.description ?? "Premium bespoke care for your companion."}
                </p>
              </div>
            </div>
            {shop.amenities.includes("Live Camera") && (
              <div className="bg-secondary-container/30 rounded-lg p-6 flex flex-col justify-between">
                <span className="material-symbols-outlined text-secondary text-3xl">camera_outdoor</span>
                <h3 className="font-headline font-bold text-sm">Live Stream</h3>
              </div>
            )}
            {shop.amenities.includes("Luxury Suite") ? (
              <div className="bg-tertiary-container/20 rounded-lg p-6 flex flex-col justify-between">
                <span className="material-symbols-outlined text-tertiary text-3xl">king_bed</span>
                <h3 className="font-headline font-bold text-sm">Luxury Suite</h3>
              </div>
            ) : (
              <div className="bg-tertiary-container/20 rounded-lg p-6 flex flex-col justify-between">
                <span className="material-symbols-outlined text-tertiary text-3xl">shutter_speed</span>
                <h3 className="font-headline font-bold text-sm">Quiet Mode</h3>
              </div>
            )}
            {!shop.amenities.includes("Live Camera") && (
              <div className="col-span-2 bg-secondary-container/30 rounded-lg p-6 flex flex-col justify-between">
                <span className="material-symbols-outlined text-secondary text-3xl">pets</span>
                <h3 className="font-headline font-bold text-sm">Pet-Friendly</h3>
              </div>
            )}
          </div>
        </section>

        {/* Gallery */}
        {shop.gallery.length >= 4 && (
          <section className="max-w-screen-2xl mx-auto px-12 mb-16">
            <h2 className="font-headline text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
              The Experience{" "}
              <span className="h-px bg-outline-variant flex-grow opacity-30"></span>
            </h2>
            <GallerySection images={shop.gallery} shopName={shop.label} />
          </section>
        )}

        {/* Service Selection + Booking Widget */}
        <ShopBookingFlow shop={shop} />

        {/* Reviews */}
        {reviews.length > 0 && (
          <section className="max-w-screen-2xl mx-auto px-12 mt-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="font-headline text-2xl font-bold tracking-tight">What Pet Parents Say</h2>
                <p className="text-sm text-on-surface-variant mt-1">
                  {reviews.length} review{reviews.length !== 1 ? "s" : ""}{avgRating ? ` · ${avgRating} avg rating` : ""}
                </p>
              </div>
              {avgRating && (
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <span
                      key={n}
                      className="material-symbols-outlined text-xl text-tertiary"
                      style={{ fontVariationSettings: n <= Math.round(Number(avgRating)) ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      star
                    </span>
                  ))}
                  <span className="font-headline font-bold text-lg text-on-surface ml-1">{avgRating}</span>
                </div>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {reviews.map((review: any) => (
                <div key={review.id} className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-6 space-y-4 editorial-shadow">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-label font-bold text-sm text-on-surface">
                        {review.consumerName ?? "Pet Parent"}
                      </p>
                      {review.petName && (
                        <p className="text-xs text-on-surface-variant">{review.petName}{review.petBreed ? ` · ${review.petBreed}` : ""}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-0.5 flex-shrink-0">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span
                          key={n}
                          className="material-symbols-outlined text-sm text-tertiary"
                          style={{ fontVariationSettings: n <= review.rating ? "'FILL' 1" : "'FILL' 0" }}
                        >
                          star
                        </span>
                      ))}
                    </div>
                  </div>
                  {review.body && (
                    <p className="text-sm text-on-surface-variant font-body leading-relaxed italic">
                      &ldquo;{review.body}&rdquo;
                    </p>
                  )}
                  <p className="text-[10px] uppercase tracking-widest text-outline">
                    {review.date ?? new Date(review.createdAt).toLocaleDateString("en-PH", { month: "long", day: "numeric", year: "numeric" })}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full mt-20 bg-stone-100 dark:bg-stone-950 font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 border-t border-stone-200/20 max-w-screen-2xl mx-auto">
          <div className="text-lg font-black text-amber-900 dark:text-amber-200">PurrBook</div>
          <div className="flex flex-wrap justify-center gap-8 text-stone-500">
            <a className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">About Us</a>
            <a className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Services</a>
            <a className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Contact</a>
          </div>
          <div className="text-[10px] text-stone-500 text-center md:text-right normal-case tracking-normal">
            © 2026 PurrBook Editorial Pet Care. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
