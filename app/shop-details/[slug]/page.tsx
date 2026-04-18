import Link from "next/link";
import { notFound } from "next/navigation";
import { getShopBySlug, SHOPS } from "@/lib/shops";
import Header from "@/components/Header";
import GallerySection from "./GallerySection";

export function generateStaticParams() {
  return SHOPS.map((s) => ({ slug: s.slug }));
}

export default async function ShopDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const shop = getShopBySlug(slug);
  if (!shop) notFound();

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
              />
            </div>
            <div className="absolute -bottom-10 left-10 bg-surface-container-lowest p-8 rounded-lg editorial-shadow max-w-md">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-tertiary-container/20 text-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  {shop.category}
                </span>
                <div className="flex items-center text-tertiary ml-auto">
                  <span
                    className="material-symbols-outlined text-sm"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                  <span className="text-sm font-bold ml-1">{shop.rating}</span>
                </div>
              </div>
              <h1 className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mb-3 leading-tight">
                {shop.label.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-primary italic">
                  {shop.label.split(" ").at(-1)}.
                </span>
              </h1>
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                {shop.longDescription}
              </p>
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
                <h3 className="font-headline font-bold text-lg">{shop.services[0]} Care</h3>
                <p className="text-xs text-on-surface-variant">
                  {shop.detailServices[0].description}
                </p>
              </div>
            </div>
            {shop.amenities.includes("Live Camera") && (
              <div className="bg-secondary-container/30 rounded-lg p-6 flex flex-col justify-between">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  camera_outdoor
                </span>
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

        <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Service Menu & Gallery */}
          <div className="lg:col-span-2 space-y-16">
            {/* Gallery */}
            <div>
              <h2 className="font-headline text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
                The Experience{" "}
                <span className="h-px bg-outline-variant flex-grow opacity-30"></span>
              </h2>
              <GallerySection images={shop.gallery} shopName={shop.label} />
            </div>

            {/* Service List */}
            <div>
              <h2 className="font-headline text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
                Boutique Services{" "}
                <span className="h-px bg-outline-variant flex-grow opacity-30"></span>
              </h2>
              <div className="space-y-4">
                {shop.detailServices.map((svc) => (
                  <div
                    key={svc.name}
                    className="group bg-surface hover:bg-surface-container-low p-6 rounded-lg transition-all duration-300 flex justify-between items-center cursor-pointer active:scale-95"
                  >
                    <div className="flex gap-6 items-center">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${svc.colorClass}`}>
                        <span className="material-symbols-outlined text-2xl">{svc.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-headline font-bold text-lg text-on-surface">
                          {svc.name}
                        </h4>
                        <p className="text-sm text-on-surface-variant max-w-md">
                          {svc.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-headline font-black text-xl text-primary">{svc.price}</p>
                      <p className="text-xs uppercase tracking-widest text-outline">{svc.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-surface-container-lowest rounded-lg editorial-shadow p-8 space-y-8 border border-outline-variant/10">
              <div>
                <h3 className="font-headline font-extrabold text-xl mb-2">Schedule Visit</h3>
                <p className="text-xs text-on-surface-variant font-medium">
                  Select your preferred date and time
                </p>
              </div>

              {/* Date Selection */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold">April 2026</span>
                  <div className="flex gap-2">
                    <button className="material-symbols-outlined text-sm p-1 rounded-full border border-outline-variant/20 active:scale-95 transition-all">
                      chevron_left
                    </button>
                    <button className="material-symbols-outlined text-sm p-1 rounded-full border border-outline-variant/20 active:scale-95 transition-all">
                      chevron_right
                    </button>
                  </div>
                </div>
                <div className="flex justify-between">
                  {[
                    { day: "MON", date: 20 },
                    { day: "TUE", date: 21 },
                    { day: "WED", date: 22 },
                    { day: "THU", date: 23 },
                    { day: "FRI", date: 24 },
                  ].map(({ day, date }, i) => (
                    <div
                      key={day}
                      className="flex flex-col items-center gap-2 cursor-pointer active:scale-95 transition-all"
                    >
                      <span className="text-[10px] text-outline font-bold">{day}</span>
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full text-xs font-bold transition-colors ${
                          i === 1
                            ? "bg-primary text-on-primary"
                            : "border border-outline-variant/20 hover:bg-primary-container/20"
                        }`}
                      >
                        {date}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div>
                <span className="text-xs font-bold text-outline mb-3 block uppercase tracking-widest">
                  Available Slots
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM"].map((time, i) => (
                    <button
                      key={time}
                      className={`py-2.5 rounded-full text-xs font-bold transition-all active:scale-95 ${
                        i === 2
                          ? "border border-primary text-primary bg-primary-container/10"
                          : "border border-outline-variant/20 hover:bg-surface-container-high"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/10">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-xs text-on-surface-variant block">Starting from</span>
                    <span className="text-2xl font-black text-on-surface">{shop.price.replace("From ", "")}</span>
                  </div>
                  <button className="text-primary text-xs font-bold underline decoration-2 underline-offset-4">
                    Add service
                  </button>
                </div>
                <Link
                  href="/schedule"
                  className="block w-full text-center bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 rounded-full font-headline font-bold text-lg hover:shadow-lg transition-all active:scale-95"
                >
                  Confirm Appointment
                </Link>
                <Link
                  href={`/messages?shop=${shop.slug}`}
                  className="block w-full text-center py-3.5 border-2 border-primary text-primary rounded-full font-label font-bold text-sm hover:bg-primary/5 transition-all active:scale-95"
                >
                  Message this Sanctuary
                </Link>
              </div>

              <div className="bg-surface-container-low p-4 rounded-lg flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-xl">
                  verified_user
                </span>
                <p className="text-[11px] text-on-secondary-fixed-variant leading-normal">
                  Your booking includes PurrBook&apos;s Editorial Protection. Free cancellation
                  up to 24 hours before your slot.
                </p>
              </div>
            </div>
          </div>
        </div>
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
