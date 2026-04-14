import Link from 'next/link';
export default function ShopDetailsPage() {
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
<main className="pt-24 pb-20">
{/* Hero Section: Cover Image & Shop Info */}
<section className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 md:grid-cols-12 gap-12 items-end mb-20">
<div className="md:col-span-8 relative">
<div className="overflow-hidden rounded-xl h-[500px]">
<img alt="The Amber Sanctuary interior" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" data-alt="Lush boutique pet sanctuary interior with warm sunlight streaming through large windows, soft textures, and organic wood accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDFBDi6HGQzCXzH1h2bmS3hhikx9iL0u1UG3R3hKN9Nj16HJCLEE6mF7-31XeBEjO_peslKJ4UI9YH6U1zE4oRL6iSbOtmrQXOeJAitq445-AfaL764IrDuTLF94uqKgfb9_-3XFP8GNhzQqPGdY4Cg8T_vaNWdtwdYSECPkRJ-lCIH4tuHvEAVI82U4gRaRDvrtMcXDBAd3P4G9GvVW6fqrz1CepWIk99T9hqF1b6gN1kSE-C4bVE7gYaIoL_MAm_2F4bt_7D9ks8"/>
</div>
<div className="absolute -bottom-10 left-10 bg-surface-container-lowest p-8 rounded-lg editorial-shadow max-w-md">
<div className="flex items-center gap-2 mb-2">
<span className="bg-tertiary-container/20 text-tertiary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Premium Care</span>
<div className="flex items-center text-primary ml-auto">
<span className="material-symbols-outlined text-sm" style={{"fontVariationSettings": '\'FILL\' 1'}}>star</span>
<span className="text-sm font-bold ml-1">4.9</span>
</div>
</div>
<h1 className="font-headline text-4xl font-bold text-on-surface tracking-tight mb-3 leading-tight">The Amber Sanctuary</h1>
<p className="text-on-surface-variant text-sm leading-relaxed mb-4">A sensory-driven grooming experience designed for the modern pet. Where botanical treatments meet boutique care.</p>
<div className="flex items-center gap-4 text-xs font-semibold text-on-surface-variant">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">location_on</span> San Vicente, Tarlac City, Tarlac</span>
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-base">schedule</span> 09:00 - 19:00</span>
</div>
</div>
</div>
{/* Bento-style Feature Cards */}
<div className="md:col-span-4 grid grid-cols-2 gap-4 h-[400px]">
<div className="col-span-2 bg-surface-container-low rounded-lg p-6 flex flex-col justify-between">
<span className="material-symbols-outlined text-primary text-3xl">spa</span>
<div>
<h3 className="font-headline font-bold text-lg">Botanical Spa</h3>
<p className="text-xs text-on-surface-variant">Custom essential oil blends for every coat type.</p>
</div>
</div>
<div className="bg-secondary-container/30 rounded-lg p-6 flex flex-col justify-between">
<span className="material-symbols-outlined text-secondary text-3xl">camera_outdoor</span>
<h3 className="font-headline font-bold text-sm">Live Stream</h3>
</div>
<div className="bg-tertiary-container/20 rounded-lg p-6 flex flex-col justify-between">
<span className="material-symbols-outlined text-tertiary text-3xl">shutter_speed</span>
<h3 className="font-headline font-bold text-sm">Quiet Mode</h3>
</div>
</div>
</section>
<div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
{/* Service Menu & Content */}
<div className="lg:col-span-2 space-y-16">
{/* Gallery Section (Asymmetric) */}
<div>
<h2 className="font-headline text-2xl font-extrabold mb-8 flex items-center gap-3">
                        The Experience <span className="h-px bg-outline-variant flex-grow opacity-30"></span>
</h2>
<div className="grid grid-cols-4 gap-4 auto-rows-[150px]">
<div className="col-span-2 row-span-2 rounded-lg overflow-hidden">
<img alt="Golden retriever bath treatment" className="w-full h-full object-cover" data-alt="Close up of a fluffy golden retriever getting a gentle bubble bath in a modern porcelain tub" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmhn7TOJ6QFaE6qe4Mamra_nGzeJK8LQbh56MAWL2LGHtm7HjSR2Oc9IIBp7EgWqZdIEAruy6s7h4PJRBPhuxyp2esd_kI4PkVkKIjKzZWCz6nZzreNxkJJ7TbFQvq_CGgJm1GiXwzgJFUfSCfKFRaa-5LtYF1M6muusH7VodonIt4lp1sQExa9WPeK9Ajb3TrtkiTFV3bdwRPWB8fU2DaFiD41ykdpNm2WjbkiX39pvDXxxUS26cFA-mubeXY44oP02S2BZkCfq1P"/>
</div>
<div className="col-span-2 row-span-1 rounded-lg overflow-hidden">
<img alt="Grooming tools flat lay" className="w-full h-full object-cover" data-alt="Minimalist pet grooming salon tools arranged neatly on a light wood surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvG0-KqArCtg9dcQuf75NtsMKESlDrRO2barclty9eNBl8e_dLef7AEQLULkwHCNhzxQBi7HnNvPTp2pJqLYPdh_6zp3gLYBo928pgpKcR-Ba257vpNxniDTiLYiIgq8q2IECiMa6W8QWQbYPG3pVnZT6IgLUlh_ghN6j2XhQQxeJsBH2x9FEGAEJYCtt7McNgXN-QgfuLB8tupzsLlR1ReMJTMjxMca4cJ0t2LajVeGzozAUYkhbGDDqfJkudwUc46UBgIGXbYq7i"/>
</div>
<div className="col-span-1 row-span-1 rounded-lg overflow-hidden">
<img alt="White dog being brushed" className="w-full h-full object-cover" data-alt="A small white dog being carefully brushed in a sun-drenched pet salon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5my65sJ8LuTDgNALA6SovYxEd_t-EnyUoYJ6nNYqJlAb_87muSy3ympQ4MXVQO_3C6stP8ageniejiY2Iaea7X3xKye-icUfh1rK0qXHdejfy9QWmhbDDVGZnHzHgvbV3u9QGZqEu6_5kDLp-IiGqf-JvjmrNnat6mXXEf-zFruDZXdOYcFKWk72N4ne71DgIud_BJpilGP11zmagJIWNfYL6qgqszCNdw4lm1ym4GX3kDzkJ4f-dUDcHgVUTwuWRU1Ro6VgIJk9Z"/>
</div>
<div className="col-span-1 row-span-1 rounded-lg overflow-hidden relative group">
<img alt="Groomer styling a poodle" className="w-full h-full object-cover" data-alt="Professional groomer working with a calm poodle in a high-end pet spa" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ1CTSZCBkxhoD3uEXwlzEGNaoD5WKT38r81u5yNLY-qfYzqIFIBa4DSpybWhTA-2fMvouhjbUQx0Jzvy_1Q9bI-XO7MurndbMBhH5Sb7HrWLWH5lF7lsgJ1cQ9Aqj1_0MDk80K4_9YqrlGb2-Aygkbg0W_Kx1NR0l-PbE9U6qfKHZ8hNmHGqAf24Yu0wXlmtCmGz76RkwVuT1X14HORMBSO7xnaWkumdXlPW_PDANjQ6Z9wuzYYKXF9bAl647J89GF-AVMIL1Ea06"/>
<div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<span className="text-on-primary font-bold text-sm">+12 Photos</span>
</div>
</div>
</div>
</div>
{/* Service List (Clean, No Dividers) */}
<div>
<h2 className="font-headline text-2xl font-extrabold mb-8 flex items-center gap-3">
                        Boutique Services <span className="h-px bg-outline-variant flex-grow opacity-30"></span>
</h2>
<div className="space-y-4">
{/* Service Item */}
<div className="group bg-surface hover:bg-surface-container-low p-6 rounded-lg transition-all duration-300 flex justify-between items-center cursor-pointer active:scale-95">
<div className="flex gap-6 items-center">
<div className="w-16 h-16 bg-primary-container/20 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-primary text-2xl">wash</span>
</div>
<div>
<h4 className="font-headline font-bold text-lg text-on-surface">The Signature Soak</h4>
<p className="text-sm text-on-surface-variant max-w-md">Double organic wash, botanical mask, blow-dry, and ear hygiene.</p>
</div>
</div>
<div className="text-right">
<p className="font-headline font-black text-xl text-primary">₱4,800</p>
<p className="text-xs uppercase tracking-widest text-outline">60 MIN</p>
</div>
</div>
<div className="group bg-surface hover:bg-surface-container-low p-6 rounded-lg transition-all duration-300 flex justify-between items-center cursor-pointer active:scale-95">
<div className="flex gap-6 items-center">
<div className="w-16 h-16 bg-secondary-container/20 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-secondary text-2xl">content_cut</span>
</div>
<div>
<h4 className="font-headline font-bold text-lg text-on-surface">Editorial Styling</h4>
<p className="text-sm text-on-surface-variant max-w-md">Precision hand-scissoring, breed-specific shaping, and finishing fragrance.</p>
</div>
</div>
<div className="text-right">
<p className="font-headline font-black text-xl text-primary">₱6,800</p>
<p className="text-xs uppercase tracking-widest text-outline">120 MIN</p>
</div>
</div>
<div className="group bg-surface hover:bg-surface-container-low p-6 rounded-lg transition-all duration-300 flex justify-between items-center cursor-pointer active:scale-95">
<div className="flex gap-6 items-center">
<div className="w-16 h-16 bg-tertiary-container/20 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-tertiary text-2xl">pets</span>
</div>
<div>
<h4 className="font-headline font-bold text-lg text-on-surface">Puppy’s First Spa</h4>
<p className="text-sm text-on-surface-variant max-w-md">Desensitization focused session with gentle products and treats.</p>
</div>
</div>
<div className="text-right">
<p className="font-headline font-black text-xl text-primary">₱3,700</p>
<p className="text-xs uppercase tracking-widest text-outline">45 MIN</p>
</div>
</div>
</div>
</div>
</div>
{/* Booking Widget (Sticky Sidebar) */}
<div className="lg:col-span-1">
<div className="sticky top-32 bg-surface-container-lowest rounded-lg editorial-shadow p-8 space-y-8 border border-outline-variant/10">
<div>
<h3 className="font-headline font-extrabold text-xl mb-2">Schedule Visit</h3>
<p className="text-xs text-on-surface-variant font-medium">Select your preferred date and time</p>
</div>
{/* Date Selection (Pebble chips) */}
<div>
<div className="flex justify-between items-center mb-4">
<span className="text-sm font-bold">November 2024</span>
<div className="flex gap-2">
<button className="material-symbols-outlined text-sm p-1 rounded-full border border-outline-variant/20 active:scale-95 transition-all">chevron_left</button>
<button className="material-symbols-outlined text-sm p-1 rounded-full border border-outline-variant/20 active:scale-95 transition-all">chevron_right</button>
</div>
</div>
<div className="flex justify-between">
<div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-all">
<span className="text-[10px] text-outline font-bold">MON</span>
<div className="w-10 h-10 flex items-center justify-center rounded-full text-xs font-bold border border-outline-variant/20 hover:bg-primary-container/20 transition-colors">12</div>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-all">
<span className="text-[10px] text-outline font-bold">TUE</span>
<div className="w-10 h-10 flex items-center justify-center rounded-full text-xs font-bold bg-primary text-on-primary">13</div>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-all">
<span className="text-[10px] text-outline font-bold">WED</span>
<div className="w-10 h-10 flex items-center justify-center rounded-full text-xs font-bold border border-outline-variant/20 hover:bg-primary-container/20 transition-colors">14</div>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-all">
<span className="text-[10px] text-outline font-bold">THU</span>
<div className="w-10 h-10 flex items-center justify-center rounded-full text-xs font-bold border border-outline-variant/20 hover:bg-primary-container/20 transition-colors">15</div>
</div>
<div className="flex flex-col items-center gap-2 group cursor-pointer active:scale-95 transition-all">
<span className="text-[10px] text-outline font-bold">FRI</span>
<div className="w-10 h-10 flex items-center justify-center rounded-full text-xs font-bold border border-outline-variant/20 hover:bg-primary-container/20 transition-colors">16</div>
</div>
</div>
</div>
{/* Time Slots */}
<div>
<span className="text-xs font-bold text-outline mb-3 block uppercase tracking-widest">Available Slots</span>
<div className="grid grid-cols-2 gap-2">
<button className="py-2.5 rounded-full border border-outline-variant/20 text-xs font-bold hover:bg-surface-container-high transition-all active:scale-95">09:30 AM</button>
<button className="py-2.5 rounded-full border border-outline-variant/20 text-xs font-bold hover:bg-surface-container-high transition-all active:scale-95">11:00 AM</button>
<button className="py-2.5 rounded-full border border-primary text-primary bg-primary-container/10 text-xs font-bold">01:30 PM</button>
<button className="py-2.5 rounded-full border border-outline-variant/20 text-xs font-bold hover:bg-surface-container-high transition-all active:scale-95">03:00 PM</button>
</div>
</div>
<div className="pt-4 border-t border-outline-variant/10">
<div className="flex justify-between items-end mb-6">
<div>
<span className="text-xs text-on-surface-variant block">Estimated Total</span>
<span className="text-2xl font-black text-on-surface">₱6,800.00</span>
</div>
<button className="text-primary text-xs font-bold underline decoration-2 underline-offset-4">Add service</button>
</div>
<Link href="/schedule" className="block w-full text-center bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 rounded-full font-headline font-bold text-lg hover:shadow-lg transition-all active:scale-95">
                            Confirm Appointment
                        </Link>
</div>
<div className="bg-surface-container-low p-4 rounded-lg flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-xl">verified_user</span>
<p className="text-[11px] text-on-secondary-fixed-variant leading-normal">Your booking includes PurrBook' Editorial Protection. Free cancellation up to 24 hours before your slot.</p>
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
                © 2024 PurrBook Editorial Pet Care. All rights reserved.
            </div>
</div>
</footer>
    </>
  );
}
