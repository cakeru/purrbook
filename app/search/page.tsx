import Link from 'next/link';
import MapWrapper from '@/components/MapWrapper';

const TARLAC_SHOPS = [
  { position: [15.478, 120.592] as [number, number], label: 'Sniff Pet Salon & Hotel', rating: 4.9, distance: '0.5 km', hours: 'Open until 7PM', href: '/shop-details' },
  { position: [15.4765, 120.602] as [number, number], label: 'Pet Station Grooming Salon', rating: 4.7, distance: '0.7 km', hours: 'Open until 6PM', href: '/shop-details' },
  { position: [15.47, 120.589] as [number, number], label: 'St. Bernard\'s Pet Shop', rating: 4.8, distance: '1.5 km', hours: 'Open until 8PM', href: '/shop-details' },
  { position: [15.475, 120.597] as [number, number], label: 'Paws & Furs Animal Clinic', rating: 4.6, distance: '0.2 km', hours: 'Open until 6PM', href: '/shop-details' },
  { position: [15.481, 120.599] as [number, number], label: 'Pups n Furr Pet Grooming', rating: 4.5, distance: '0.8 km', hours: 'Open until 5PM', href: '/shop-details' },
  { position: [15.473, 120.594] as [number, number], label: 'Vet Soucier Veterinary & Grooming', rating: 4.8, distance: '0.4 km', hours: 'Open until 7PM', href: '/shop-details' },
  { position: [15.479, 120.604] as [number, number], label: 'Petvetgo Animal Clinic & Wellness', rating: 4.9, distance: '0.9 km', hours: 'Open until 6PM', href: '/shop-details' },
  { position: [15.474, 120.591] as [number, number], label: 'CHIMICHOOMS PH', rating: 4.7, distance: '0.6 km', hours: 'Open until 7PM', href: '/shop-details' },
  { position: [15.482, 120.595] as [number, number], label: 'Paws & Claws Pet Supplies', rating: 4.6, distance: '0.8 km', hours: 'Open until 6PM', href: '/shop-details' },
  { position: [15.477, 120.598] as [number, number], label: 'Petorria Animal Clinic & Grooming', rating: 4.8, distance: '0.3 km', hours: 'Open until 7PM', href: '/shop-details' },
  { position: [15.471, 120.601] as [number, number], label: 'Matias Pet Shop', rating: 4.5, distance: '1.1 km', hours: 'Open until 6PM', href: '/shop-details' },
  { position: [15.480, 120.588] as [number, number], label: 'J.&.D Petshop', rating: 4.4, distance: '0.7 km', hours: 'Open until 5PM', href: '/shop-details' },
  { position: [15.483, 120.603] as [number, number], label: 'Angeles Pet Care Center Tarlac', rating: 4.7, distance: '1.0 km', hours: 'Open until 7PM', href: '/shop-details' },
];

export default function SearchPage() {
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
</div>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-4 text-stone-600 dark:text-stone-400">
<span className="material-symbols-outlined hover:bg-stone-100/50 p-2 rounded-full transition-all">notifications</span>
<span className="material-symbols-outlined hover:bg-stone-100/50 p-2 rounded-full transition-all">pets</span>
</div>
<Link href="/search" className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-8 py-3 rounded-full font-label font-bold tracking-wide active:scale-95 transition-all shadow-lg shadow-primary/20">Book Now</Link>
</div>
</nav>
</header>
<main className="pt-24 min-h-screen">

<div className="max-w-screen-2xl mx-auto px-12 pt-8 flex flex-col md:flex-row gap-12">
{/* Filters Sidebar */}
<aside className="w-full md:w-80 flex-shrink-0">
<div className="sticky top-32 space-y-4">

<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-6 space-y-6">
<p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface-variant">Refine Your Search</p>

{/* Location */}
<div className="border-b border-outline-variant/10 pb-6">
<div className="relative">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">location_on</span>
<input className="w-full bg-surface-container-low border-none rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-primary/40 font-body" placeholder="Where is your pet?" type="text"/>
</div>
</div>

{/* Category Filter */}
<div className="space-y-4 border-b border-outline-variant/10 pb-6">
<p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface-variant">Service Type</p>
<div className="flex flex-wrap gap-2">
<button className="px-5 py-2 rounded-full bg-primary text-on-primary font-label text-sm font-medium active:scale-95 transition-all">Grooming</button>
<button className="px-5 py-2 rounded-full bg-surface-container-highest text-on-surface font-label text-sm font-medium hover:bg-surface-container-high transition-all active:scale-95">Boarding</button>
<button className="px-5 py-2 rounded-full bg-surface-container-highest text-on-surface font-label text-sm font-medium hover:bg-surface-container-high transition-all active:scale-95">Therapy</button>
<button className="px-5 py-2 rounded-full bg-surface-container-highest text-on-surface font-label text-sm font-medium hover:bg-surface-container-high transition-all active:scale-95">Training</button>
</div>
</div>

{/* Range Filter */}
<div className="space-y-4 border-b border-outline-variant/10 pb-6">
<div className="flex justify-between items-center">
<p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface-variant">Distance Range</p>
<span className="text-primary font-semibold text-sm">15 km</span>
</div>
<input className="w-full h-1 bg-surface-container-high rounded-full appearance-none accent-primary cursor-pointer" type="range"/>
</div>

{/* Amenities Toggle */}
<div className="space-y-4">
<p className="font-label font-bold text-xs uppercase tracking-widest text-on-surface-variant">Sanctuary Perks</p>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/40" type="checkbox"/>
<span className="text-on-surface group-hover:text-primary transition-colors text-sm">Organic Treats Included</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input checked className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/40" type="checkbox"/>
<span className="text-on-surface group-hover:text-primary transition-colors text-sm">24/7 Live Camera Access</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/40" type="checkbox"/>
<span className="text-on-surface group-hover:text-primary transition-colors text-sm">Luxury Suite Upgrades</span>
</label>
</div>
</div>
</div>

{/* Map Toggle */}
<button className="w-full py-4 rounded-xl bg-surface-container-lowest border border-outline-variant/15 flex items-center justify-center gap-3 hover:bg-white transition-all active:scale-95 shadow-[0_8px_32px_rgba(48,51,48,0.04)]">
<span className="material-symbols-outlined text-primary">map</span>
<span className="font-label font-bold text-sm text-on-surface">Switch to Interactive Map</span>
</button>

</div>
</aside>
{/* Results */}
<section className="flex-grow pb-24">
<div className="flex justify-between items-end mb-10">
<div className="space-y-3">
<span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest">Tarlac City, Philippines</span>
<h2 className="text-4xl font-headline font-bold text-on-surface tracking-tight">13 Sanctuaries Found</h2>
<p className="text-on-surface-variant text-sm">Curated venues available near you — sorted by proximity</p>
</div>
<div className="flex items-center gap-4 bg-surface-container-low p-1 rounded-full">
<button className="bg-surface-container-lowest px-6 py-2 rounded-full font-label text-sm font-semibold shadow-sm active:scale-95 transition-all">Grid View</button>
<button className="px-6 py-2 rounded-full font-label text-sm font-semibold text-on-surface-variant hover:text-on-surface transition-all active:scale-95">Map Split</button>
</div>
</div>
{/* Bento Grid of Shops */}
<div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
{/* Shop Card 1: Featured */}
<div className="group bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-[0_12px_40px_rgba(48,51,48,0.08)] transition-all duration-500 xl:col-span-2 flex flex-col lg:flex-row border border-outline-variant/5">
<div className="lg:w-2/5 h-80 lg:h-auto overflow-hidden relative">
<img alt="Modern pet grooming spa interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="luxury pet grooming studio with white marble floors, gold accents, and a professionally groomed golden retriever sitting on a velvet ottoman" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5aMG7PkZKuqy9TcX-YwdIgbHiIoRuyAq2DjVVf3NEs9tyvPlOo9_FUaA3cGuVd86Au6vVYB89SyWXPV1aYSH3_iOcQO28K-oCO5RZcGWKcdcGM39cl_TqCcwDowUeW3ktWQjQlXH-hJbEVHPq1IjpkO4W-mdYXGKql6dm56XrYr0hF_3EMS-bD5aQDlzUYMwEjz0_Xv3uZaw-1oZGA5OOZ1GyICSSSzwRE7exi0LBXn3sGmlTy2mPeVEsDQhfuVM90AbQX6w_YgGh"/>
<div className="absolute top-6 left-6 bg-tertiary-fixed text-on-tertiary-fixed px-4 py-1.5 rounded-full font-label text-xs font-bold uppercase tracking-widest shadow-lg">Featured Studio</div>
</div>
<div className="p-10 flex flex-col justify-between lg:w-3/5">
<div>
<div className="flex justify-between items-start mb-4">
<h3 className="text-3xl font-headline font-bold text-on-surface">Sniff Pet Salon & Hotel</h3>
<div className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.9</span>
</div>
</div>
<p className="text-on-surface-variant leading-relaxed text-lg mb-8 italic">"Full-service pet salon and hotel in Tarlac City — grooming, boarding, and daycare all under one roof."</p>
<div className="flex gap-4 mb-8">
<span className="flex items-center gap-2 text-sm text-on-surface font-medium bg-surface-container-low px-4 py-2 rounded-full">
<span className="material-symbols-outlined text-primary scale-75">scuba_diving</span> Ozone Bath
                                    </span>
<span className="flex items-center gap-2 text-sm text-on-surface font-medium bg-surface-container-low px-4 py-2 rounded-full">
<span className="material-symbols-outlined text-primary scale-75">brush</span> Hand Stripping
                                    </span>
</div>
</div>
<div className="flex items-center justify-between border-t border-outline-variant/10 pt-6">
<div>
<p className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest mb-1">Pricing</p>
<p className="text-2xl font-headline font-bold text-primary">From ₱6,800</p>
</div>
<Link href="/shop-details" className="bg-primary text-on-primary px-8 py-3 rounded-full font-label font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">Book Studio</Link>
</div>
</div>
</div>
{/* Shop Card 2 */}
<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
<img alt="Dog being groomed" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="close up of a professional groomer gently washing a white fluffy dog in a modern copper bathtub with soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCax9xrHUKSV0jb9-W7slGUygZjNXvdACyRuRtImSstGKH_eJk_ilV5RlFsoM21d7M-Y12J2OXchJZw6mv9xVeA-nhD4cMei6dvpZHIvGivHg3mGa1yKuREB2MP5SeRoJvUh6z7HgR32x1AmDEYNsi-CVaZc-mDGULM-7cf12i41OktYR-0LkyhRbOTsh1DFTUipUKwfhmBF2s0u_rBYvAlQRTdFfTHkdAwXzGTsgyr0_wK6Z-ZFYwk9vNTdkpW8obC-AmVcIBxf2Vg"/>
<div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary tracking-widest uppercase">Tarlac City</div>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Boutique Grooming</span>
<div className="flex items-center gap-1 text-tertiary text-sm">
<span className="material-symbols-outlined text-base" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.8</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">Pups n Furr Pet Grooming</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Friendly neighborhood grooming with gentle handling and personalized care for all breeds and sizes.</p>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-base">near_me</span>
<span className="font-medium">1.9 km away</span>
</div>
<Link href="/shop-details" className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">Reserve →</Link>
</div>
</div>
{/* Shop Card 3 */}
<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
<img alt="Groomed pet" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="a small toy poodle with an editorial level haircut sitting on a minimalist white stool against a soft beige studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeDLCsZCI5xub3OrGKUTxV0eG-cgsl0rkIXo2JOwMB2BGWCZ88TofPNWIoT3g4tdTOJnEYbCGVleiwbRkH6rP-hayYcdr0Nx51txyfvprckoDWxplHGMKYBqZGX59qc4xt0VKjnqp5NerDwyU2KihXK_-baUS6nofeU2RSiPvRMeiakqm804YLgJNM3gt_tuBJpIM201nVLy1kHQzxKTz714Fa_fJofZAmeEtzpR7_PXOmonww1szQZ1FeORmYECRUNhJEcwv2PL-Y"/>
<div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary tracking-widest uppercase">Tarlac City</div>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Veterinary & Grooming</span>
<div className="flex items-center gap-1 text-tertiary text-sm">
<span className="material-symbols-outlined text-base" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.7</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">Vet Soucier Veterinary & Grooming</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Combined veterinary clinic and grooming center offering comprehensive pet health and beauty care.</p>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-base">near_me</span>
<span className="font-medium">1.3 km away</span>
</div>
<Link href="/shop-details" className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">Reserve →</Link>
</div>
</div>
{/* Shop Card 4 */}
<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
<img alt="Pet Station Grooming Salon" data-alt="Interior of a luxury pet grooming studio with white marble counters, brass hardware, and minimalist wooden shelving" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCisizYA-UKaamDX6kW2add7sLhz-gimLA8hOCnbob3P_RE4FhUbTNHknE7mMITNtfW-VqTnESl5ig227WhCgc4NAEVgX5HBaRHi47Te7hJB66IomFrdyWErSzKLiQt4oZOdUkv12bD4bFMWDOrg8nAeAzZrNEPPCLgFyizmgYGt2Sy4hUID8LKfl9MyJ-zpowB5l9lpn64_KPngpltPs7vIXa-lvrqULibCFzIEbizpw6ZaDQsyO3DzMD-m1iyRVL5clEcZzuDKpR2"/>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">San Sebastian</span>
<div className="flex items-center gap-1 text-tertiary text-sm">
<span className="material-symbols-outlined text-base" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.7</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">Pet Station Grooming Salon</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Professional grooming services with expert stylists trained in breed-specific cuts and premium treatments.</p>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-base">near_me</span>
<span className="font-medium">0.7 km away</span>
</div>
<Link href="/shop-details" className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">Reserve →</Link>
</div>
</div>
{/* Shop Card 5 */}
<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
<img alt="Paws and Furs Animal Clinic" data-alt="A stylish modern dog grooming station with sleek metal tubs and designer pet hair products in aesthetic packaging" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD9OTcCHwYhTAYeRgmlAvpMCP6fXRTN6u4mniB5rO1-omCJkM-6ly7SySSvWMe8FmFFI6cJ0e31ova3gJI5I-37sLEDn0Hu_K2LEQ7ZnMHM0D5HObxgpcl5E2fDMCSImzIx09nqWxusRoQQRvsHO0hTlszDa-JgUXEZvzXYqkrZyESUmZDduAU5MNKxcz_PDRdgmz8k4hVtc5MiSFXMBAb51mRzjtFlltLo0-iEN9M14y0O_vvmJOHEXMjpOOio-sxNHeWH1x8Zu-D"/>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Sto. Cristo</span>
<div className="flex items-center gap-1 text-tertiary text-sm">
<span className="material-symbols-outlined text-base" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.6</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">Paws & Furs Animal Clinic</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Animal clinic offering wellness checks, vaccinations, and professional grooming all in one convenient location.</p>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-base">near_me</span><span className="font-medium">0.2 km away</span></div>
<Link href="/shop-details" className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">Reserve →</Link>
</div>
</div>
{/* Shop Card 6 */}
<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
<img alt="St. Bernard's Pet Shop" data-alt="Cozy pet boutique interior with soft ambient lighting and premium pet accessories displayed on floating wooden shelves" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT48xD8i_fFqMT5oji6et_7cF6boFYVww5YaRsXMrEHRj1NFiKpAKnL6X1eDPkXbzL2WyVRsPlWv43hLuxMqD7mOp_iMTFPwXPS9RczIjUCo6zMV5vR9yBq8S8_6sqHva0glprtyCzgDfwqPqrcbg73UQPoH_q7jJC1eVFH1FwW_JLnwmy3cwHOOFxOrw1E-DfPdgz8EjgB8u1yzmPV7V1efwNvwP3rVCvlKlOUCUZ1n1KvcrJOIIVu1Vh4iI3Yvhl8FqFafpBR6yJ"/>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Matatalaib</span>
<div className="flex items-center gap-1 text-tertiary text-sm">
<span className="material-symbols-outlined text-base" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.8</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">St. Bernard&#39;s Pet Shop</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Trusted pet shop and grooming center in Matatalaib with quality care and affordable rates for all pets.</p>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-base">near_me</span><span className="font-medium">1.5 km away</span></div>
<Link href="/shop-details" className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">Reserve →</Link>
</div>
</div>
{/* Shop Card 7 */}
<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
<img alt="Petvetgo Animal Clinic" data-alt="Bright modern veterinary clinic interior with clean white surfaces and a calm dog resting on an examination table" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5aMG7PkZKuqy9TcX-YwdIgbHiIoRuyAq2DjVVf3NEs9tyvPlOo9_FUaA3cGuVd86Au6vVYB89SyWXPV1aYSH3_iOcQO28K-oCO5RZcGWKcdcGM39cl_TqCcwDowUeW3ktWQjQlXH-hJbEVHPq1IjpkO4W-mdYXGKql6dm56XrYr0hF_3EMS-bD5aQDlzUYMwEjz0_Xv3uZaw-1oZGA5OOZ1GyICSSSzwRE7exi0LBXn3sGmlTy2mPeVEsDQhfuVM90AbQX6w_YgGh"/>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Sto. Cristo</span>
<div className="flex items-center gap-1 text-tertiary text-sm">
<span className="material-symbols-outlined text-base" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.9</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">Petvetgo Animal Clinic & Wellness</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Modern wellness center focused on preventive care and professional grooming for your beloved pet.</p>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-base">near_me</span><span className="font-medium">0.9 km away</span></div>
<Link href="/shop-details" className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">Reserve →</Link>
</div>
</div>
{/* Shop Card 8 */}
<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
<img alt="CHIMICHOOMS PH" data-alt="Whimsical pet grooming studio with pastel walls, fluffy rugs, and an adorably styled pomeranian posing on a plush salon chair" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCisizYA-UKaamDX6kW2add7sLhz-gimLA8hOCnbob3P_RE4FhUbTNHknE7mMITNtfW-VqTnESl5ig227WhCgc4NAEVgX5HBaRHi47Te7hJB66IomFrdyWErSzKLiQt4oZOdUkv12bD4bFMWDOrg8nAeAzZrNEPPCLgFyizmgYGt2Sy4hUID8LKfl9MyJ-zpowB5l9lpn64_KPngpltPs7vIXa-lvrqULibCFzIEbizpw6ZaDQsyO3DzMD-m1iyRVL5clEcZzuDKpR2"/>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">San Vicente</span>
<div className="flex items-center gap-1 text-tertiary text-sm">
<span className="material-symbols-outlined text-base" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.7</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">CHIMICHOOMS PH</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Specialty pet grooming shop offering unique styling and pampering services for your furry companions.</p>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-base">near_me</span><span className="font-medium">0.6 km away</span></div>
<Link href="/shop-details" className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">Reserve →</Link>
</div>
</div>
{/* Shop Card 9 */}
<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
<img alt="Paws and Claws Pet Supplies" data-alt="Bright airy pet supplies shop with neatly arranged shelves of premium pet food, colorful leashes, and artisanal pet accessories" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD9OTcCHwYhTAYeRgmlAvpMCP6fXRTN6u4mniB5rO1-omCJkM-6ly7SySSvWMe8FmFFI6cJ0e31ova3gJI5I-37sLEDn0Hu_K2LEQ7ZnMHM0D5HObxgpcl5E2fDMCSImzIx09nqWxusRoQQRvsHO0hTlszDa-JgUXEZvzXYqkrZyESUmZDduAU5MNKxcz_PDRdgmz8k4hVtc5MiSFXMBAb51mRzjtFlltLo0-iEN9M14y0O_vvmJOHEXMjpOOio-sxNHeWH1x8Zu-D"/>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">San Sebastian</span>
<div className="flex items-center gap-1 text-tertiary text-sm">
<span className="material-symbols-outlined text-base" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.6</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">Paws &amp; Claws Pet Supplies</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Complete pet supplies store with grooming services, stocking premium food, accessories, and health products.</p>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-base">near_me</span><span className="font-medium">0.8 km away</span></div>
<Link href="/shop-details" className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">Reserve →</Link>
</div>
</div>
{/* Shop Card 10 */}
<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
<img alt="Petorria Animal Clinic and Grooming" data-alt="Warm modern veterinary clinic reception area with natural wood paneling, lush plants, and a relaxed golden retriever waiting calmly on a bench" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT48xD8i_fFqMT5oji6et_7cF6boFYVww5YaRsXMrEHRj1NFiKpAKnL6X1eDPkXbzL2WyVRsPlWv43hLuxMqD7mOp_iMTFPwXPS9RczIjUCo6zMV5vR9yBq8S8_6sqHva0glprtyCzgDfwqPqrcbg73UQPoH_q7jJC1eVFH1FwW_JLnwmy3cwHOOFxOrw1E-DfPdgz8EjgB8u1yzmPV7V1efwNvwP3rVCvlKlOUCUZ1n1KvcrJOIIVu1Vh4iI3Yvhl8FqFafpBR6yJ"/>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Tarlac City</span>
<div className="flex items-center gap-1 text-tertiary text-sm">
<span className="material-symbols-outlined text-base" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.8</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">Petorria Animal Clinic &amp; Grooming</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Full-service animal clinic and grooming center providing medical care, wellness checks, and top-tier grooming.</p>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-base">near_me</span><span className="font-medium">0.3 km away</span></div>
<Link href="/shop-details" className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">Reserve →</Link>
</div>
</div>
{/* Shop Card 11 */}
<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
<img alt="Matias Pet Shop" data-alt="Charming neighborhood pet shop with a handpainted wooden sign, baskets of organic dog treats, and sunlight streaming through the front window" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeDLCsZCI5xub3OrGKUTxV0eG-cgsl0rkIXo2JOwMB2BGWCZ88TofPNWIoT3g4tdTOJnEYbCGVleiwbRkH6rP-hayYcdr0Nx51txyfvprckoDWxplHGMKYBqZGX59qc4xt0VKjnqp5NerDwyU2KihXK_-baUS6nofeU2RSiPvRMeiakqm804YLgJNM3gt_tuBJpIM201nVLy1kHQzxKTz714Fa_fJofZAmeEtzpR7_PXOmonww1szQZ1FeORmYECRUNhJEcwv2PL-Y"/>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Tarlac City</span>
<div className="flex items-center gap-1 text-tertiary text-sm">
<span className="material-symbols-outlined text-base" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.5</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">Matias Pet Shop</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Community-trusted pet shop offering a wide range of pet supplies, food, and accessories at affordable prices.</p>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-base">near_me</span><span className="font-medium">1.1 km away</span></div>
<Link href="/shop-details" className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">Reserve →</Link>
</div>
</div>
{/* Shop Card 12 */}
<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
<img alt="J and D Petshop" data-alt="Cozy family-run pet shop with colorful bird cages, terrariums, and a tabby cat lounging lazily on the store counter" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5aMG7PkZKuqy9TcX-YwdIgbHiIoRuyAq2DjVVf3NEs9tyvPlOo9_FUaA3cGuVd86Au6vVYB89SyWXPV1aYSH3_iOcQO28K-oCO5RZcGWKcdcGM39cl_TqCcwDowUeW3ktWQjQlXH-hJbEVHPq1IjpkO4W-mdYXGKql6dm56XrYr0hF_3EMS-bD5aQDlzUYMwEjz0_Xv3uZaw-1oZGA5OOZ1GyICSSSzwRE7exi0LBXn3sGmlTy2mPeVEsDQhfuVM90AbQX6w_YgGh"/>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Tarlac City</span>
<div className="flex items-center gap-1 text-tertiary text-sm">
<span className="material-symbols-outlined text-base" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.4</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">J.&amp;.D Petshop</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Neighborhood pet shop with a friendly atmosphere, stocking essentials and treats for all types of pets.</p>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-base">near_me</span><span className="font-medium">0.7 km away</span></div>
<Link href="/shop-details" className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">Reserve →</Link>
</div>
</div>
{/* Shop Card 13 */}
<div className="bg-surface-container-lowest rounded-lg p-6 flex flex-col group border border-outline-variant/5">
<div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative">
<img alt="Angeles Pet Care Center Tarlac" data-alt="Spacious professional pet care center with a dedicated grooming suite, waiting area with plush seating, and a friendly staff member attending to a fluffy shih tzu" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCax9xrHUKSV0jb9-W7slGUygZjNXvdACyRuRtImSstGKH_eJk_ilV5RlFsoM21d7M-Y12J2OXchJZw6mv9xVeA-nhD4cMei6dvpZHIvGivHg3mGa1yKuREB2MP5SeRoJvUh6z7HgR32x1AmDEYNsi-CVaZc-mDGULM-7cf12i41OktYR-0LkyhRbOTsh1DFTUipUKwfhmBF2s0u_rBYvAlQRTdFfTHkdAwXzGTsgyr0_wK6Z-ZFYwk9vNTdkpW8obC-AmVcIBxf2Vg"/>
<button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-primary hover:bg-white transition-all active:scale-95 shadow-sm">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
<div className="flex-grow">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-label font-bold text-on-surface-variant uppercase tracking-widest">Tarlac City</span>
<div className="flex items-center gap-1 text-tertiary text-sm">
<span className="material-symbols-outlined text-base" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="font-bold">4.7</span>
</div>
</div>
<h3 className="text-xl font-headline font-bold text-on-surface mb-2">Angeles Pet Care Center Tarlac</h3>
<p className="text-sm text-on-surface-variant line-clamp-2 mb-6">Dedicated pet care center offering grooming, veterinary consultations, and wellness services for all breeds.</p>
</div>
<div className="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<div className="flex items-center gap-1.5 text-sm text-on-surface-variant"><span className="material-symbols-outlined text-base">near_me</span><span className="font-medium">1.0 km away</span></div>
<Link href="/shop-details" className="bg-surface-container-low text-on-surface px-5 py-2 rounded-full font-label font-bold text-sm group-hover:bg-primary group-hover:text-on-primary transition-all active:scale-95">Reserve →</Link>
</div>
</div>
{/* Map Integration Section */}
<div className="xl:col-span-2 bg-surface-container-low rounded-xl p-2 h-96 relative overflow-hidden group">
<MapWrapper center={[15.4755, 120.5963]} zoom={14} markers={TARLAC_SHOPS} />
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="bg-white/90 backdrop-blur-xl p-8 rounded-xl shadow-2xl text-center max-w-sm pointer-events-auto">
<span className="material-symbols-outlined text-4xl text-primary mb-4">map</span>
<h4 className="text-xl font-headline font-bold text-on-surface mb-2">Discover Near You</h4>
<p className="text-sm text-on-surface-variant mb-6">Toggle the interactive map to see real-time availability in your immediate neighborhood.</p>
<button className="bg-on-surface text-surface px-8 py-3 rounded-full font-label font-bold hover:bg-black transition-all active:scale-95">Expand Map View</button>
</div>
</div>
</div>
</div>
</section>
</div>
</main>
{/* Footer */}
<footer className="w-full mt-20 bg-stone-100 dark:bg-stone-950">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 border-t border-stone-200/20 max-w-screen-2xl mx-auto">
<span className="text-lg font-black text-amber-900 dark:text-amber-200 font-headline uppercase tracking-widest italic">PurrBook</span>
<div className="flex flex-wrap justify-center gap-10 font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest">
<a className="text-stone-500 dark:text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors opacity-80 hover:opacity-100" href="#">About Us</a>
<a className="text-stone-500 dark:text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors opacity-80 hover:opacity-100" href="#">Services</a>
<a className="text-stone-500 dark:text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
<a className="text-stone-500 dark:text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
<a className="text-stone-500 dark:text-stone-500 hover:text-amber-600 dark:hover:text-amber-400 transition-colors opacity-80 hover:opacity-100" href="#">Contact</a>
</div>
<p className="text-stone-500 dark:text-stone-500 text-xs font-['Be_Vietnam_Pro'] uppercase tracking-widest text-center md:text-right">
                © 2024 PurrBook Editorial Pet Care. All rights reserved.
            </p>
</div>
</footer>
    </>
  );
}
