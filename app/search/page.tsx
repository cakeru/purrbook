"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import MapWrapper from "@/components/MapWrapper";

type Shop = {
  id: number;
  position: [number, number];
  label: string;
  rating: number;
  distance: string;
  hours: string;
  href: string;
  category: string;
  description: string;
  price: string;
  services: string[];
  amenities: string[];
  image: string;
  featured?: boolean;
};

const TARLAC_SHOPS: Shop[] = [
  {
    id: 0,
    position: [15.478, 120.592],
    label: "Sniff Pet Salon & Hotel",
    rating: 4.9,
    distance: "0.5",
    hours: "Open until 7PM",
    href: "/shop-details",
    category: "Full-Service Hotel",
    description:
      "Full-service pet salon and hotel in Tarlac City — grooming, boarding, and daycare all under one roof.",
    price: "From ₱6,800",
    services: ["Grooming", "Boarding"],
    amenities: ["Live Camera", "Luxury Suite", "Organic Treats"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5aMG7PkZKuqy9TcX-YwdIgbHiIoRuyAq2DjVVf3NEs9tyvPlOo9_FUaA3cGuVd86Au6vVYB89SyWXPV1aYSH3_iOcQO28K-oCO5RZcGWKcdcGM39cl_TqCcwDowUeW3ktWQjQlXH-hJbEVHPq1IjpkO4W-mdYXGKql6dm56XrYr0hF_3EMS-bD5aQDlzUYMwEjz0_Xv3uZaw-1oZGA5OOZ1GyICSSSzwRE7exi0LBXn3sGmlTy2mPeVEsDQhfuVM90AbQX6w_YgGh",
    featured: true,
  },
  {
    id: 1,
    position: [15.4765, 120.602],
    label: "Pet Station Grooming Salon",
    rating: 4.7,
    distance: "0.7",
    hours: "Open until 6PM",
    href: "/shop-details",
    category: "San Sebastian",
    description:
      "Professional grooming services with expert stylists trained in breed-specific cuts and premium treatments.",
    price: "From ₱3,200",
    services: ["Grooming", "Training"],
    amenities: ["Organic Treats"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCisizYA-UKaamDX6kW2add7sLhz-gimLA8hOCnbob3P_RE4FhUbTNHknE7mMITNtfW-VqTnESl5ig227WhCgc4NAEVgX5HBaRHi47Te7hJB66IomFrdyWErSzKLiQt4oZOdUkv12bD4bFMWDOrg8nAeAzZrNEPPCLgFyizmgYGt2Sy4hUID8LKfl9MyJ-zpowB5l9lpn64_KPngpltPs7vIXa-lvrqULibCFzIEbizpw6ZaDQsyO3DzMD-m1iyRVL5clEcZzuDKpR2",
  },
  {
    id: 2,
    position: [15.47, 120.589],
    label: "St. Bernard's Pet Shop",
    rating: 4.8,
    distance: "1.5",
    hours: "Open until 8PM",
    href: "/shop-details",
    category: "Boutique Shop",
    description:
      "Cozy pet boutique offering premium grooming, curated pet accessories, and personalized care for all breeds.",
    price: "From ₱2,800",
    services: ["Grooming"],
    amenities: ["Organic Treats"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDT48xD8i_fFqMT5oji6et_7cF6boFYVww5YaRsXMrEHRj1NFiKpAKnL6X1eDPkXbzL2WyVRsPlWv43hLuxMqD7mOp_iMTFPwXPS9RczIjUCo6zMV5vR9yBq8S8_6sqHva0glprtyCzgDfwqPqrcbg73UQPoH_q7jJC1eVFH1FwW_JLnwmy3cwHOOFxOrw1E-DfPdgz8EjgB8u1yzmPV7V1efwNvwP3rVCvlKlOUCUZ1n1KvcrJOIIVu1Vh4iI3Yvhl8FqFafpBR6yJ",
  },
  {
    id: 3,
    position: [15.475, 120.597],
    label: "Paws & Furs Animal Clinic",
    rating: 4.6,
    distance: "0.2",
    hours: "Open until 6PM",
    href: "/shop-details",
    category: "Sto. Cristo",
    description:
      "Animal clinic offering wellness checks, vaccinations, and professional grooming all in one convenient location.",
    price: "From ₱2,500",
    services: ["Grooming", "Therapy"],
    amenities: ["Live Camera"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAD9OTcCHwYhTAYeRgmlAvpMCP6fXRTN6u4mniB5rO1-omCJkM-6ly7SySSvWMe8FmFFI6cJ0e31ova3gJI5I-37sLEDn0Hu_K2LEQ7ZnMHM0D5HObxgpcl5E2fDMCSImzIx09nqWxusRoQQRvsHO0hTlszDa-JgUXEZvzXYqkrZyESUmZDduAU5MNKxcz_PDRdgmz8k4hVtc5MiSFXMBAb51mRzjtFlltLo0-iEN9M14y0O_vvmJOHEXMjpOOio-sxNHeWH1x8Zu-D",
  },
  {
    id: 4,
    position: [15.481, 120.599],
    label: "Pups n Furr Pet Grooming",
    rating: 4.5,
    distance: "0.8",
    hours: "Open until 5PM",
    href: "/shop-details",
    category: "Boutique Grooming",
    description:
      "Friendly neighborhood grooming with gentle handling and personalized care for all breeds and sizes.",
    price: "From ₱1,800",
    services: ["Grooming"],
    amenities: ["Organic Treats"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCax9xrHUKSV0jb9-W7slGUygZjNXvdACyRuRtImSstGKH_eJk_ilV5RlFsoM21d7M-Y12J2OXchJZw6mv9xVeA-nhD4cMei6dvpZHIvGivHg3mGa1yKuREB2MP5SeRoJvUh6z7HgR32x1AmDEYNsi-CVaZc-mDGULM-7cf12i41OktYR-0LkyhRbOTsh1DFTUipUKwfhmBF2s0u_rBYvAlQRTdFfTHkdAwXzGTsgyr0_wK6Z-ZFYwk9vNTdkpW8obC-AmVcIBxf2Vg",
  },
  {
    id: 5,
    position: [15.473, 120.594],
    label: "Vet Soucier Veterinary & Grooming",
    rating: 4.8,
    distance: "0.4",
    hours: "Open until 7PM",
    href: "/shop-details",
    category: "Veterinary & Grooming",
    description:
      "Combined veterinary clinic and grooming center offering comprehensive pet health and beauty care.",
    price: "From ₱3,500",
    services: ["Grooming", "Therapy"],
    amenities: ["Live Camera"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeDLCsZCI5xub3OrGKUTxV0eG-cgsl0rkIXo2JOwMB2BGWCZ88TofPNWIoT3g4tdTOJnEYbCGVleiwbRkH6rP-hayYcdr0Nx51txyfvprckoDWxplHGMKYBqZGX59qc4xt0VKjnqp5NerDwyU2KihXK_-baUS6nofeU2RSiPvRMeiakqm804YLgJNM3gt_tuBJpIM201nVLy1kHQzxKTz714Fa_fJofZAmeEtzpR7_PXOmonww1szQZ1FeORmYECRUNhJEcwv2PL-Y",
  },
  {
    id: 6,
    position: [15.479, 120.604],
    label: "Petvetgo Animal Clinic & Wellness",
    rating: 4.9,
    distance: "0.9",
    hours: "Open until 6PM",
    href: "/shop-details",
    category: "Animal Wellness",
    description:
      "Modern animal clinic focused on preventive care, grooming, and holistic wellness treatments.",
    price: "From ₱4,000",
    services: ["Grooming", "Therapy"],
    amenities: ["Live Camera", "Organic Treats"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCax9xrHUKSV0jb9-W7slGUygZjNXvdACyRuRtImSstGKH_eJk_ilV5RlFsoM21d7M-Y12J2OXchJZw6mv9xVeA-nhD4cMei6dvpZHIvGivHg3mGa1yKuREB2MP5SeRoJvUh6z7HgR32x1AmDEYNsi-CVaZc-mDGULM-7cf12i41OktYR-0LkyhRbOTsh1DFTUipUKwfhmBF2s0u_rBYvAlQRTdFfTHkdAwXzGTsgyr0_wK6Z-ZFYwk9vNTdkpW8obC-AmVcIBxf2Vg",
  },
  {
    id: 7,
    position: [15.474, 120.591],
    label: "CHIMICHOOMS PH",
    rating: 4.7,
    distance: "0.6",
    hours: "Open until 7PM",
    href: "/shop-details",
    category: "Boutique Grooming",
    description:
      "Trendy boutique grooming salon known for creative styling and gentle breed-specific treatments.",
    price: "From ₱2,200",
    services: ["Grooming"],
    amenities: ["Organic Treats"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDT48xD8i_fFqMT5oji6et_7cF6boFYVww5YaRsXMrEHRj1NFiKpAKnL6X1eDPkXbzL2WyVRsPlWv43hLuxMqD7mOp_iMTFPwXPS9RczIjUCo6zMV5vR9yBq8S8_6sqHva0glprtyCzgDfwqPqrcbg73UQPoH_q7jJC1eVFH1FwW_JLnwmy3cwHOOFxOrw1E-DfPdgz8EjgB8u1yzmPV7V1efwNvwP3rVCvlKlOUCUZ1n1KvcrJOIIVu1Vh4iI3Yvhl8FqFafpBR6yJ",
  },
  {
    id: 8,
    position: [15.482, 120.595],
    label: "Paws & Claws Pet Supplies",
    rating: 4.6,
    distance: "0.8",
    hours: "Open until 6PM",
    href: "/shop-details",
    category: "Pet Supplies & Grooming",
    description:
      "One-stop shop for premium pet supplies, grooming services, and expert pet care advice.",
    price: "From ₱1,500",
    services: ["Grooming"],
    amenities: ["Organic Treats"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAD9OTcCHwYhTAYeRgmlAvpMCP6fXRTN6u4mniB5rO1-omCJkM-6ly7SySSvWMe8FmFFI6cJ0e31ova3gJI5I-37sLEDn0Hu_K2LEQ7ZnMHM0D5HObxgpcl5E2fDMCSImzIx09nqWxusRoQQRvsHO0hTlszDa-JgUXEZvzXYqkrZyESUmZDduAU5MNKxcz_PDRdgmz8k4hVtc5MiSFXMBAb51mRzjtFlltLo0-iEN9M14y0O_vvmJOHEXMjpOOio-sxNHeWH1x8Zu-D",
  },
  {
    id: 9,
    position: [15.477, 120.598],
    label: "Petorria Animal Clinic & Grooming",
    rating: 4.8,
    distance: "0.3",
    hours: "Open until 7PM",
    href: "/shop-details",
    category: "Clinic & Grooming",
    description:
      "Trusted animal clinic combining veterinary services with professional grooming and wellness care.",
    price: "From ₱3,000",
    services: ["Grooming", "Therapy"],
    amenities: ["Live Camera"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeDLCsZCI5xub3OrGKUTxV0eG-cgsl0rkIXo2JOwMB2BGWCZ88TofPNWIoT3g4tdTOJnEYbCGVleiwbRkH6rP-hayYcdr0Nx51txyfvprckoDWxplHGMKYBqZGX59qc4xt0VKjnqp5NerDwyU2KihXK_-baUS6nofeU2RSiPvRMeiakqm804YLgJNM3gt_tuBJpIM201nVLy1kHQzxKTz714Fa_fJofZAmeEtzpR7_PXOmonww1szQZ1FeORmYECRUNhJEcwv2PL-Y",
  },
  {
    id: 10,
    position: [15.471, 120.601],
    label: "Matias Pet Shop",
    rating: 4.5,
    distance: "1.1",
    hours: "Open until 6PM",
    href: "/shop-details",
    category: "Pet Shop & Grooming",
    description:
      "Family-run pet shop with affordable grooming services, pet accessories, and knowledgeable staff.",
    price: "From ₱1,200",
    services: ["Grooming", "Boarding"],
    amenities: ["Organic Treats"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCisizYA-UKaamDX6kW2add7sLhz-gimLA8hOCnbob3P_RE4FhUbTNHknE7mMITNtfW-VqTnESl5ig227WhCgc4NAEVgX5HBaRHi47Te7hJB66IomFrdyWErSzKLiQt4oZOdUkv12bD4bFMWDOrg8nAeAzZrNEPPCLgFyizmgYGt2Sy4hUID8LKfl9MyJ-zpowB5l9lpn64_KPngpltPs7vIXa-lvrqULibCFzIEbizpw6ZaDQsyO3DzMD-m1iyRVL5clEcZzuDKpR2",
  },
  {
    id: 11,
    position: [15.48, 120.588],
    label: "J.&.D Petshop",
    rating: 4.4,
    distance: "0.7",
    hours: "Open until 5PM",
    href: "/shop-details",
    category: "Pet Shop",
    description:
      "Budget-friendly pet shop and grooming center with reliable services for everyday pet care needs.",
    price: "From ₱900",
    services: ["Grooming"],
    amenities: [],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCax9xrHUKSV0jb9-W7slGUygZjNXvdACyRuRtImSstGKH_eJk_ilV5RlFsoM21d7M-Y12J2OXchJZw6mv9xVeA-nhD4cMei6dvpZHIvGivHg3mGa1yKuREB2MP5SeRoJvUh6z7HgR32x1AmDEYNsi-CVaZc-mDGULM-7cf12i41OktYR-0LkyhRbOTsh1DFTUipUKwfhmBF2s0u_rBYvAlQRTdFfTHkdAwXzGTsgyr0_wK6Z-ZFYwk9vNTdkpW8obC-AmVcIBxf2Vg",
  },
  {
    id: 12,
    position: [15.483, 120.603],
    label: "Angeles Pet Care Center Tarlac",
    rating: 4.7,
    distance: "1.0",
    hours: "Open until 7PM",
    href: "/shop-details",
    category: "Full-Service Pet Care",
    description:
      "Comprehensive pet care center offering grooming, boarding, training, and veterinary consultations.",
    price: "From ₱2,800",
    services: ["Grooming", "Boarding", "Training", "Therapy"],
    amenities: ["Live Camera", "Luxury Suite"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDT48xD8i_fFqMT5oji6et_7cF6boFYVww5YaRsXMrEHRj1NFiKpAKnL6X1eDPkXbzL2WyVRsPlWv43hLuxMqD7mOp_iMTFPwXPS9RczIjUCo6zMV5vR9yBq8S8_6sqHva0glprtyCzgDfwqPqrcbg73UQPoH_q7jJC1eVFH1FwW_JLnwmy3cwHOOFxOrw1E-DfPdgz8EjgB8u1yzmPV7V1efwNvwP3rVCvlKlOUCUZ1n1KvcrJOIIVu1Vh4iI3Yvhl8FqFafpBR6yJ",
  },
];

const SERVICE_TYPES = ["Grooming", "Boarding", "Therapy", "Training"];
const AMENITY_OPTIONS = [
  { key: "Organic Treats", label: "Organic Treats Included" },
  { key: "Live Camera", label: "24/7 Live Camera Access" },
  { key: "Luxury Suite", label: "Luxury Suite Upgrades" },
];

// Map data for the Leaflet component (same positions, no extra fields needed)
const MAP_SHOPS = TARLAC_SHOPS.map((s) => ({
  position: s.position,
  label: s.label,
  rating: s.rating,
  distance: s.distance + " km",
  hours: s.hours,
  href: s.href,
}));

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
    return TARLAC_SHOPS.filter((shop) => {
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
              <span className="material-symbols-outlined hover:bg-stone-100/50 p-2 rounded-full transition-all">pets</span>
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
                <MapWrapper markers={MAP_SHOPS} />
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
