import Link from "next/link";
import MapWrapper from "@/components/MapWrapper";
import Header from "@/components/Header";
import { MAP_MARKERS } from "@/lib/shops";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-12 py-16 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6 space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest">
              Premium Pet Care
            </span>
            <h1 className="text-7xl font-headline font-extrabold text-on-surface leading-[1.1] tracking-tighter">
              Elevated Sanctuary for your <span className="text-primary italic">best friend.</span>
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed">
              Discover editorial-grade grooming and curated pet care experiences. We treat every
              visitor like the star of their own story.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <Link
                href="/search"
                className="bg-primary text-on-primary px-10 py-4 rounded-full font-label font-bold text-lg active:scale-95 transition-all"
              >
                Start Exploring
              </Link>
              <button className="bg-surface-container-highest text-on-surface px-10 py-4 rounded-full font-label font-bold text-lg active:scale-95 transition-all">
                Our Services
              </button>
            </div>
          </div>
          <div className="md:col-span-6 relative">
            <div className="relative z-10 organic-mask-1 overflow-hidden shadow-2xl">
              <img
                alt="Beautiful pet"
                className="w-full h-[600px] object-cover"
                src="/purrbook_homepage.png"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 z-20 bg-surface-container-lowest p-6 rounded-lg shadow-xl max-w-xs border border-outline-variant/15">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                </div>
                <div>
                  <p className="font-headline font-bold text-on-surface">Top Rated 2024</p>
                  <p className="text-xs text-on-surface-variant">
                    Voted #1 Pet Sanctuary in Tarlac City
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </section>
        {/* Top Rated Shops Bento Grid */}
        <section className="bg-surface-container-low py-24">
          <div className="px-12 max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div className="space-y-4">
                <h2 className="text-4xl font-headline font-bold tracking-tight">
                  Top-Rated Grooming Suites
                </h2>
                <p className="text-on-surface-variant max-w-md">
                  Our hand-picked selection of the most prestigious grooming establishments in your
                  area.
                </p>
              </div>
              <Link
                href="/search"
                className="text-primary font-label font-bold text-sm uppercase tracking-widest border-b-2 border-primary/20 pb-1 hover:border-primary transition-all"
              >
                View All Studios
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Shop Card 1 */}
              <div className="group bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-outline-variant/10">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Grooming Shop 1"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Interior of a luxury pet grooming studio with white marble counters, brass hardware, and minimalist wooden shelving"
                    src="/studios/sniff-pet-salon-hotel.jpg"
                  />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary tracking-widest uppercase">
                    San Vicente
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-headline font-bold">Sniff Pet Salon & Hotel</h3>
                    <div className="flex items-center gap-1 text-tertiary">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-bold">4.9</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Full-service pet salon and hotel offering grooming, boarding, and daycare. A
                    one-stop haven for your pet in Tarlac City.
                  </p>
                  <Link
                    href="/shop-details/sniff-pet-salon-hotel"
                    className="w-full py-4 rounded-full bg-surface-container-low font-bold text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-all"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
              {/* Shop Card 2 */}
              <div className="group bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-outline-variant/10">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Grooming Shop 2"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="A stylish modern dog grooming station with sleek metal tubs and designer pet hair products in aesthetic packaging"
                    src="/studios/pet-station-grooming-salon.jpg"
                  />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary tracking-widest uppercase">
                    San Sebastian
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-headline font-bold">Pet Station Grooming Salon</h3>
                    <div className="flex items-center gap-1 text-tertiary">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-bold">4.7</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Professional grooming services with expert stylists trained in breed-specific
                    cuts and premium treatments.
                  </p>
                  <Link
                    href="/shop-details/pet-station-grooming-salon"
                    className="w-full py-4 rounded-full bg-surface-container-low font-bold text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-all"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
              {/* Shop Card 3 */}
              <div className="group bg-surface-container-lowest rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 border border-outline-variant/10">
                <div className="h-64 overflow-hidden relative">
                  <img
                    alt="Grooming Shop 3"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-alt="Cozy pet boutique interior with soft ambient lighting and premium pet accessories displayed on floating wooden shelves"
                    src="/studios/st-bernards-pet-shop.jpg"
                  />
                  <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary tracking-widest uppercase">
                    Sto. Cristo
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-headline font-bold">St. Bernard's Pet Shop</h3>
                    <div className="flex items-center gap-1 text-tertiary">
                      <span
                        className="material-symbols-outlined text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                      <span className="font-bold">4.8</span>
                    </div>
                  </div>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Trusted pet shop and grooming center in Matatalaib, serving the community with
                    quality care and affordable rates.
                  </p>
                  <Link
                    href="/shop-details/st-bernards-pet-shop"
                    className="w-full py-4 rounded-full bg-surface-container-low font-bold text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-all"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Interactive Map Section */}
        <section className="px-12 py-24 max-w-screen-2xl mx-auto">
          <div className="bg-surface-container-low rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row h-[700px]">
            <div className="w-full md:w-1/3 p-12 bg-surface-container-lowest flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-headline font-bold tracking-tight mb-4">
                  Studios Nearby
                </h2>
                <p className="text-on-surface-variant mb-8">
                  We've mapped out the finest pet care experts in your neighborhood.
                </p>
                <div className="space-y-3 overflow-y-auto max-h-80 pr-1">
                  <div className="flex items-start gap-4 p-4 rounded-lg bg-surface-container-low border-l-4 border-primary">
                    <span className="material-symbols-outlined text-primary">location_on</span>
                    <div>
                      <p className="font-bold">Sniff Pet Salon & Hotel</p>
                      <p className="text-xs text-on-surface-variant">0.5 km • Open until 7PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold">Vet Soucier Veterinary & Grooming</p>
                      <p className="text-xs text-on-surface-variant">0.4 km • Open until 7PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold">Paws & Furs Animal Clinic</p>
                      <p className="text-xs text-on-surface-variant">0.2 km • Open until 6PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold">Pet Station Grooming Salon</p>
                      <p className="text-xs text-on-surface-variant">0.7 km • Open until 6PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold">Pups n Furr Pet Grooming</p>
                      <p className="text-xs text-on-surface-variant">0.8 km • Open until 5PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold">Petvetgo Animal Clinic & Wellness</p>
                      <p className="text-xs text-on-surface-variant">0.9 km • Open until 6PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold">St. Bernard&#39;s Pet Shop</p>
                      <p className="text-xs text-on-surface-variant">1.5 km • Open until 8PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold">CHIMICHOOMS PH</p>
                      <p className="text-xs text-on-surface-variant">0.6 km • Open until 7PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold">Paws &amp; Claws Pet Supplies</p>
                      <p className="text-xs text-on-surface-variant">0.8 km • Open until 6PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold">Petorria Animal Clinic &amp; Grooming</p>
                      <p className="text-xs text-on-surface-variant">0.3 km • Open until 7PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold">Matias Pet Shop</p>
                      <p className="text-xs text-on-surface-variant">1.1 km • Open until 6PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold">J.&amp;.D Petshop</p>
                      <p className="text-xs text-on-surface-variant">0.7 km • Open until 5PM</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-on-surface-variant">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold">Angeles Pet Care Center Tarlac</p>
                      <p className="text-xs text-on-surface-variant">1.0 km • Open until 7PM</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-8 border-t border-outline-variant/10">
                <Link
                  href="/search"
                  className="w-full py-4 rounded-full border-2 border-primary text-primary font-bold active:scale-95 transition-all"
                >
                  Search Another Area
                </Link>
              </div>
            </div>
            <div className="flex-1 relative overflow-hidden min-h-0">
              <MapWrapper center={[15.4755, 120.5963]} zoom={14} markers={MAP_MARKERS} />
            </div>
          </div>
        </section>
        {/* Newsletter / Editorial CTA */}
        <section className="px-12 py-24">
          <div className="max-w-screen-2xl mx-auto organic-mask-2 bg-primary text-on-primary p-20 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-container/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="relative z-10 md:w-1/2 space-y-6">
              <h2 className="text-5xl font-headline font-extrabold leading-tight">
                The Weekly Whiskers <br />
                Editorial
              </h2>
              <p className="text-primary-container font-label uppercase tracking-widest text-sm font-bold">
                Expert advice, curated style, and pet news.
              </p>
              <p className="text-lg opacity-90 leading-relaxed">
                Join 15,000+ pet owners who receive our boutique grooming guides and health tips
                every Sunday morning.
              </p>
              <div className="flex gap-4 pt-4">
                <input
                  className="bg-primary-dim border-none rounded-full px-8 py-4 w-full text-on-primary placeholder:text-on-primary/50 focus:ring-2 focus:ring-primary-container transition-all"
                  placeholder="Your email address"
                  type="email"
                />
                <button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-full font-bold whitespace-nowrap active:scale-95 transition-all">
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="relative z-10 md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  alt="Pet Care 1"
                  className="rounded-lg shadow-xl aspect-square object-cover -rotate-3"
                  data-alt="Close up of a fluffy dog being pampered with a soft brush, warm natural lighting"
                  src="/editorial/editorial1.png"
                />
                <img
                  alt="Pet Care 2"
                  className="rounded-lg shadow-xl aspect-square object-cover translate-y-8 rotate-3"
                  data-alt="A small white dog wearing a designer pet sweater looking stylish in a modern living room"
                  src="/editorial/editorial2.jpg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full mt-20 bg-stone-100 dark:bg-stone-950">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 border-t border-stone-200/20 max-w-screen-2xl mx-auto">
          <div className="flex flex-col items-center md:items-start gap-4">
            <span className="text-lg font-black text-amber-900 dark:text-amber-200">PurrBook</span>
            <p className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500">
              © 2024 PurrBook Editorial Pet Care. All rights reserved.
            </p>
          </div>
          <div className="flex gap-8">
            <a
              className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500 hover:text-amber-600 transition-colors"
              href="#"
            >
              About Us
            </a>
            <a
              className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500 hover:text-amber-600 transition-colors"
              href="#"
            >
              Services
            </a>
            <a
              className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500 hover:text-amber-600 transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500 hover:text-amber-600 transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500 hover:text-amber-600 transition-colors"
              href="#"
            >
              Contact
            </a>
          </div>
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-stone-200/50 flex items-center justify-center text-amber-800 cursor-pointer hover:bg-amber-100 transition-all">
              <span className="material-symbols-outlined text-lg">public</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-stone-200/50 flex items-center justify-center text-amber-800 cursor-pointer hover:bg-amber-100 transition-all">
              <span className="material-symbols-outlined text-lg">mail</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
