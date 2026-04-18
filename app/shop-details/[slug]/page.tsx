import Link from "next/link";
import { notFound } from "next/navigation";
import { getShopBySlug, SHOPS } from "@/lib/shops";
import Header from "@/components/Header";
import GallerySection from "./GallerySection";
import BookingWidget from "./BookingWidget";

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
            <div id="services">
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
            <BookingWidget shop={shop} />
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
