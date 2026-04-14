import Link from 'next/link';

export default function ProfilePage() {
  return (
    <>
      {/* TopNavBar */}
<header className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-stone-900/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(48,51,48,0.06)]">
<nav className="flex justify-between items-center px-12 py-4 max-w-screen-2xl mx-auto font-['Plus_Jakarta_Sans'] tracking-tight">
<div className="flex items-center gap-12">
<div className="flex items-center gap-2">
<img src="/purrbook.png" alt="PurrBook logo" className="h-8 w-auto" />
<span className="text-2xl font-bold italic text-amber-900 dark:text-amber-100">PurrBook</span>
</div>
<div className="hidden md:flex items-center gap-8">
<Link className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors" href="/">Explore</Link>
<Link className="text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors" href="/search">Search</Link>
<Link className="text-amber-900 dark:text-amber-100 border-b-2 border-amber-700 pb-1 font-semibold" href="/profile">Profile</Link>
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

<main className="pt-24 pb-16">

{/* Cover Banner */}
<div className="max-w-screen-xl mx-auto px-12 pt-8 relative">
<div className="h-44 rounded-2xl overflow-hidden relative organic-mask-2 bg-gradient-to-br from-primary to-primary-dim">
<div className="absolute -top-8 -right-8 w-48 h-48 bg-primary-container/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 -left-8 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl"></div>
</div>
<img
  src="/purrbook_profile.jpg"
  alt="Maria Santos"
  data-alt="Warm portrait photo of a young woman smiling softly, natural lighting, editorial style"
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
<span className="material-symbols-outlined text-sm text-tertiary" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span>
<span className="text-tertiary font-bold">Verified</span>
</div>
</div>
<button className="py-2.5 px-6 rounded-xl border-2 border-outline-variant text-on-surface font-bold text-sm hover:border-primary hover:text-primary transition-all active:scale-95">
Edit Profile
</button>
</div>

<div className="max-w-screen-xl mx-auto px-12">
<div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 items-start">

{/* LEFT: Sticky Profile Card */}
<aside className="sticky top-28">
<div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-6">

{/* Stats */}
<div className="flex border-b border-outline-variant/10 pb-5 mb-5">
<div className="flex-1 text-center">
<p className="text-2xl font-headline font-bold text-on-surface">12</p>
<p className="text-xs text-on-surface-variant mt-0.5">Bookings</p>
</div>
<div className="w-px bg-outline-variant/20"></div>
<div className="flex-1 text-center">
<p className="text-2xl font-headline font-bold text-on-surface">3</p>
<p className="text-xs text-on-surface-variant mt-0.5">Pets</p>
</div>
<div className="w-px bg-outline-variant/20"></div>
<div className="flex-1 text-center">
<p className="text-2xl font-headline font-bold text-on-surface">4</p>
<p className="text-xs text-on-surface-variant mt-0.5">Saved</p>
</div>
</div>

{/* Info rows */}
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-base">schedule</span>
<span>Member since January 2024</span>
</div>
<div className="flex items-center gap-3 text-sm text-on-surface-variant">
<span className="material-symbols-outlined text-base text-tertiary" style={{"fontVariationSettings": "'FILL' 1"}}>verified</span>
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
<h2 className="text-base font-headline font-bold text-on-surface">My Companions</h2>
<button className="text-primary font-label text-xs font-bold uppercase tracking-widest active:scale-95 transition-all">+ Introduce a Muse</button>
</div>
<div className="flex flex-wrap gap-3">
<div className="flex items-center gap-3 bg-surface-container-lowest border border-outline-variant/10 rounded-xl px-4 py-3 hover:border-primary transition-all active:scale-95 cursor-pointer group">
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqPLXkvBImvBgNNsUjdng4AAKjaYGdFqtuMjNkth3AvE0-I7rl15nOw3OK6HjgSrDG0LlRmOVKuVMN_O81glZEttBwTv2sVGzDA9Rgr-mds3DoEkSu0Zg2Rg8pWCYJ5-uuu-djeMf3YI5WKuuzlUV8kOUm9ROWhnlkzmSkZkx9uu4cOWoEuRzbHYXd0w1C_S4Dj-m9KcDIMJYyf16pKM4V9LQEA9bJIvxUgqZD0TI9rvXQUg6KJ5_9wdSmPjmNOj0Pryufghzvzg7B" alt="Barnaby" data-alt="Close-up of a fluffy golden retriever puppy with warm amber fur, soft natural light" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
<div>
<p className="font-headline font-bold text-on-surface text-sm">Barnaby</p>
<p className="text-xs text-on-surface-variant">Golden Retriever · Male · 3 yrs</p>
</div>
<Link href="/schedule" className="ml-2 text-xs text-primary font-bold hover:underline whitespace-nowrap">Reserve →</Link>
</div>
<div className="flex items-center gap-3 bg-surface-container-lowest border border-outline-variant/10 rounded-xl px-4 py-3 hover:border-primary transition-all active:scale-95 cursor-pointer group">
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8gXkBB2zCRyHuJgng0VEl8TBTyvK8uhhA4p_2Wv5aD-W_F70oZX_bIJBpGenzMsR7GYGmkzWl46LWRMGnkvWnZ6WjTiHeXqeKZ1rfvUSF4rBg-toFHc3bNoBV158JmYisXNILjCeeMddzcloHxa_1fOmYm3oUAVWnvv3Dzy-j6woh5UCgukJohBO0CJw5yaidq8cJyLrpbNthJWsgd79Ahnp0OoSuHRWkhpoHAh8GfC1OiFpshz_Nt33Q8tESCGgD2PFQKogSjvLf" alt="Luna" data-alt="Elegant white Persian cat with silky long fur, studio portrait with soft ambient lighting" className="w-10 h-10 rounded-lg object-cover flex-shrink-0" />
<div>
<p className="font-headline font-bold text-on-surface text-sm">Luna</p>
<p className="text-xs text-on-surface-variant">Persian Cat · Female · 2 yrs</p>
</div>
<Link href="/schedule" className="ml-2 text-xs text-primary font-bold hover:underline whitespace-nowrap">Reserve →</Link>
</div>
<div className="flex items-center gap-3 bg-surface-container-lowest border-2 border-dashed border-outline-variant rounded-xl px-4 py-3 hover:border-primary hover:bg-primary-container/10 transition-all active:scale-95 cursor-pointer group">
<div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 group-hover:bg-primary-container transition-colors">
<span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-base">add</span>
</div>
<p className="text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors">Introduce a New Muse</p>
</div>
</div>
</section>

{/* Upcoming Appointments */}
<section className="border-b border-outline-variant/10 pb-8">
<div className="flex justify-between items-center mb-4">
<h2 className="text-base font-headline font-bold text-on-surface">Reserved Moments</h2>
<Link href="/schedule" className="text-primary font-label text-xs font-bold uppercase tracking-widest hover:underline">View All</Link>
</div>
<div className="divide-y divide-outline-variant/10">
<div className="flex items-center justify-between py-4 gap-4">
<div className="flex items-center gap-4 min-w-0">
<div className="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-on-tertiary-container text-base" style={{"fontVariationSettings": "'FILL' 1"}}>spa</span>
</div>
<div className="min-w-0">
<div className="flex flex-wrap items-center gap-2 mb-0.5">
<h3 className="font-headline font-bold text-on-surface text-sm">Sniff Pet Salon & Hotel</h3>
<span className="bg-tertiary-container text-on-tertiary-container text-xs font-bold px-2 py-0.5 rounded-full whitespace-nowrap">Confirmed</span>
</div>
<p className="text-xs text-on-surface-variant truncate">"Royal Bath & Silk Cut" · Barnaby · Nov 14, 2024 · 11:15 AM</p>
</div>
</div>
<Link href="/schedule" className="text-primary font-label font-bold text-xs hover:underline whitespace-nowrap flex-shrink-0 active:scale-95 transition-all">Refine →</Link>
</div>
<div className="flex items-center justify-between py-4 gap-4">
<div className="flex items-center gap-4 min-w-0">
<div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-on-secondary-container text-base" style={{"fontVariationSettings": "'FILL' 1"}}>content_cut</span>
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
<h2 className="text-base font-headline font-bold text-on-surface">Saved Sanctuaries</h2>
<Link href="/search" className="text-primary font-label text-xs font-bold uppercase tracking-widest hover:underline">Discover More</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
{/* Sniff */}
<Link href="/shop-details" className="flex gap-4 p-3 rounded-xl border border-outline-variant/10 hover:border-primary bg-surface-container-lowest transition-all active:scale-95 group">
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCisizYA-UKaamDX6kW2add7sLhz-gimLA8hOCnbob3P_RE4FhUbTNHknE7mMITNtfW-VqTnESl5ig227WhCgc4NAEVgX5HBaRHi47Te7hJB66IomFrdyWErSzKLiQt4oZOdUkv12bD4bFMWDOrg8nAeAzZrNEPPCLgFyizmgYGt2Sy4hUID8LKfl9MyJ-zpowB5l9lpn64_KPngpltPs7vIXa-lvrqULibCFzIEbizpw6ZaDQsyO3DzMD-m1iyRVL5clEcZzuDKpR2" alt="Sniff Pet Salon" data-alt="Interior of a luxury pet grooming studio with white marble counters, brass hardware, and minimalist wooden shelving" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
<div className="flex flex-col justify-between py-0.5 min-w-0">
<div>
<p className="font-headline font-bold text-on-surface text-sm group-hover:text-primary transition-colors">Sniff Pet Salon & Hotel</p>
<p className="text-xs text-on-surface-variant mt-0.5">San Vicente · Tarlac City</p>
</div>
<div className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-xs" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="text-xs font-bold text-on-surface">4.9</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant ml-auto self-center flex-shrink-0 text-base group-hover:text-primary transition-colors">chevron_right</span>
</Link>
{/* Vet Soucier */}
<Link href="/shop-details" className="flex gap-4 p-3 rounded-xl border border-outline-variant/10 hover:border-primary bg-surface-container-lowest transition-all active:scale-95 group">
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD9OTcCHwYhTAYeRgmlAvpMCP6fXRTN6u4mniB5rO1-omCJkM-6ly7SySSvWMe8FmFFI6cJ0e31ova3gJI5I-37sLEDn0Hu_K2LEQ7ZnMHM0D5HObxgpcl5E2fDMCSImzIx09nqWxusRoQQRvsHO0hTlszDa-JgUXEZvzXYqkrZyESUmZDduAU5MNKxcz_PDRdgmz8k4hVtc5MiSFXMBAb51mRzjtFlltLo0-iEN9M14y0O_vvmJOHEXMjpOOio-sxNHeWH1x8Zu-D" alt="Vet Soucier" data-alt="A stylish modern dog grooming station with sleek metal tubs and designer pet hair products in aesthetic packaging" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
<div className="flex flex-col justify-between py-0.5 min-w-0">
<div>
<p className="font-headline font-bold text-on-surface text-sm group-hover:text-primary transition-colors">Vet Soucier Veterinary & Grooming</p>
<p className="text-xs text-on-surface-variant mt-0.5">Tarlac City</p>
</div>
<div className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-xs" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
<span className="text-xs font-bold text-on-surface">4.8</span>
</div>
</div>
<span className="material-symbols-outlined text-on-surface-variant ml-auto self-center flex-shrink-0 text-base group-hover:text-primary transition-colors">chevron_right</span>
</Link>
{/* Petorria */}
<Link href="/shop-details" className="flex gap-4 p-3 rounded-xl border border-outline-variant/10 hover:border-primary bg-surface-container-lowest transition-all active:scale-95 group">
<img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDT48xD8i_fFqMT5oji6et_7cF6boFYVww5YaRsXMrEHRj1NFiKpAKnL6X1eDPkXbzL2WyVRsPlWv43hLuxMqD7mOp_iMTFPwXPS9RczIjUCo6zMV5vR9yBq8S8_6sqHva0glprtyCzgDfwqPqrcbg73UQPoH_q7jJC1eVFH1FwW_JLnwmy3cwHOOFxOrw1E-DfPdgz8EjgB8u1yzmPV7V1efwNvwP3rVCvlKlOUCUZ1n1KvcrJOIIVu1Vh4iI3Yvhl8FqFafpBR6yJ" alt="Petorria" data-alt="Cozy pet boutique interior with soft ambient lighting and premium pet accessories displayed on floating wooden shelves" className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
<div className="flex flex-col justify-between py-0.5 min-w-0">
<div>
<p className="font-headline font-bold text-on-surface text-sm group-hover:text-primary transition-colors">Petorria Animal Clinic & Grooming</p>
<p className="text-xs text-on-surface-variant mt-0.5">Tarlac City</p>
</div>
<div className="flex items-center gap-1 text-tertiary">
<span className="material-symbols-outlined text-xs" style={{"fontVariationSettings": "'FILL' 1"}}>star</span>
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

{/* Footer */}
<footer className="w-full mt-20 bg-stone-100 dark:bg-stone-950">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-16 gap-8 border-t border-stone-200/20 max-w-screen-2xl mx-auto">
<div className="flex flex-col items-center md:items-start gap-4">
<span className="text-lg font-black text-amber-900 dark:text-amber-200">PurrBook</span>
<p className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500">© 2024 PurrBook Editorial Pet Care. All rights reserved.</p>
</div>
<div className="flex gap-8">
<a className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500 hover:text-amber-600 transition-colors" href="#">About Us</a>
<a className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500 hover:text-amber-600 transition-colors" href="#">Services</a>
<a className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500 hover:text-amber-600 transition-colors" href="#">Privacy Policy</a>
<a className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500 hover:text-amber-600 transition-colors" href="#">Terms of Service</a>
<a className="font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest text-stone-500 hover:text-amber-600 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>
    </>
  );
}
