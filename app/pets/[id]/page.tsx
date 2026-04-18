import Link from "next/link";
import { notFound } from "next/navigation";
import { getPetById, PETS } from "@/lib/pets";
import Header from "@/components/Header";
import PetCareSection from "./PetCareSection";
import PetPhotoGallery from "./PetPhotoGallery";
import WeightChart from "./WeightChart";

export function generateStaticParams() {
  return PETS.map((p) => ({ id: p.id }));
}

export default async function PetPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const pet = getPetById(id);
  if (!pet) notFound();

  const apt = pet.upcomingAppointment;
  const genderIcon = pet.gender === "male" ? "male" : "female";
  const ageLabel = parseInt(pet.age) === 1 ? "year" : "years";

  return (
    <>
      <Header />

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-screen-2xl mx-auto">
        {/* Back Breadcrumb */}
        <Link
          href="/profile"
          className="inline-flex items-center gap-2 text-on-surface-variant font-label text-sm uppercase tracking-widest hover:text-on-surface transition-colors active:scale-95 mb-10"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Profile
        </Link>

        {/* Editorial Header */}
        <header className="mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label text-xs font-bold uppercase tracking-widest mb-6">
            Companion Profile
          </span>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-tight">
            {pet.name}.{" "}
            <span className="text-primary italic">{pet.breed}.</span>
          </h1>
          <p className="text-on-surface-variant text-lg mt-4 font-light">
            {pet.age} {ageLabel} · {pet.gender.charAt(0).toUpperCase() + pet.gender.slice(1)} · {pet.coatType} · {pet.grooming.temperament.split(",")[0]}
          </p>
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="/schedule"
              className="bg-gradient-to-r from-primary to-primary-dim text-on-primary px-8 py-3 rounded-full font-label font-bold tracking-wide active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Book a Grooming
            </Link>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-full font-label font-bold tracking-wide active:scale-95 transition-all">
              Edit Profile
            </button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4 sticky top-40 space-y-4">
            {/* Pet Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-2xl overflow-hidden">
              <div className="overflow-hidden organic-mask-1 h-64">
                <img
                  src={pet.image}
                  alt={pet.name}
                  data-alt={`Portrait of ${pet.name}, a ${pet.breed}`}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-headline font-bold text-on-surface">{pet.name}</h2>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-xs font-bold uppercase tracking-widest">
                    <span
                      className="material-symbols-outlined text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      verified
                    </span>
                    Verified
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base">pets</span>
                    <span className="text-on-surface-variant">Breed</span>
                    <span className="font-semibold text-on-surface ml-auto">{pet.breed}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base">cake</span>
                    <span className="text-on-surface-variant">Age</span>
                    <span className="font-semibold text-on-surface ml-auto">
                      {pet.age} {ageLabel} old
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base">
                      {genderIcon}
                    </span>
                    <span className="text-on-surface-variant">Gender</span>
                    <span className="font-semibold text-on-surface ml-auto">
                      {pet.gender.charAt(0).toUpperCase() + pet.gender.slice(1)}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base">
                      monitor_weight
                    </span>
                    <span className="text-on-surface-variant">Weight</span>
                    <span className="font-semibold text-on-surface ml-auto">{pet.weight} kg</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base">
                      calendar_month
                    </span>
                    <span className="text-on-surface-variant">On PurrBook</span>
                    <span className="font-semibold text-on-surface ml-auto">{pet.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base">cake</span>
                    <span className="text-on-surface-variant">Birthday</span>
                    <span className="font-semibold text-on-surface ml-auto text-right">{pet.birthday}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base">pin</span>
                    <span className="text-on-surface-variant flex-shrink-0">Microchip</span>
                    <span className="font-mono font-semibold text-on-surface ml-auto text-xs text-right">{pet.microchipId}</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm">
                    <span className="material-symbols-outlined text-primary text-base mt-0.5">local_hospital</span>
                    <span className="text-on-surface-variant flex-shrink-0">Vet</span>
                    <div className="ml-auto text-right">
                      <p className="font-semibold text-on-surface">{pet.vetClinic.name}</p>
                      <p className="text-xs text-on-surface-variant">{pet.vetClinic.phone}</p>
                    </div>
                  </div>
                  {pet.insurance && (
                    <div className="flex items-center gap-3 text-sm">
                      <span className="material-symbols-outlined text-primary text-base">shield</span>
                      <span className="text-on-surface-variant">Insurance</span>
                      <span className="font-semibold text-on-surface ml-auto">{pet.insurance}</span>
                    </div>
                  )}
                </div>
                <div className="pt-4 border-t border-outline-variant/10">
                  <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                    Traits
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pet.traits.map((trait) => (
                      <span
                        key={trait}
                        className="bg-surface-container rounded-full px-3 py-1 text-xs font-label font-bold text-on-surface"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-surface-container-low rounded-xl p-5">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-headline font-extrabold text-primary">{pet.sessions}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Sessions</p>
                </div>
                <div>
                  <p className="text-2xl font-headline font-extrabold text-primary">{pet.sanctuaries}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Sanctuaries</p>
                </div>
                <div>
                  <p className="text-2xl font-headline font-extrabold text-primary">{pet.nextVisit}</p>
                  <p className="text-xs text-on-surface-variant mt-0.5">Next Visit</p>
                </div>
              </div>
            </div>

            {/* Book CTA */}
            <Link
              href="/schedule"
              className="block text-center bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 rounded-full font-label font-bold tracking-wide uppercase active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              Book a Grooming
            </Link>
          </aside>

          {/* Main Content */}
          <section className="lg:col-span-8 space-y-10">
            {/* Photo Gallery */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-6">
                Photo Gallery
              </p>
              <PetPhotoGallery photos={[pet.image, ...pet.photos]} petName={pet.name} />
            </div>

            {/* Grooming Profile */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-6">
                Grooming Profile
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-surface-container-lowest p-5 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    Coat Type
                  </p>
                  <p className="font-bold text-on-surface">{pet.coatType}</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    Sensitivity
                  </p>
                  <p className="font-bold text-on-surface">{pet.grooming.sensitivity}</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    Preferred Style
                  </p>
                  <p className="font-bold text-on-surface">{pet.grooming.preferredStyle}</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    Temperament
                  </p>
                  <p className="font-bold text-on-surface">{pet.grooming.temperament}</p>
                </div>
                <div className="bg-surface-container-lowest p-5 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-widest mb-1">
                    Weight
                  </p>
                  <p className="font-bold text-on-surface">{pet.weight} kg</p>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-lg p-5">
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                  Groomer Notes
                </p>
                <p className="text-sm text-on-surface-variant leading-relaxed italic">
                  &ldquo;{pet.grooming.groomerNotes}&rdquo;
                </p>
              </div>
            </div>

            {/* Vaccination & Health Records */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-6">
                Vaccination & Health Records
              </p>
              <div className="space-y-3">
                {pet.vaccinations.map((v) => {
                  const chipClass =
                    v.status === "current"
                      ? "bg-tertiary-container text-on-tertiary-container"
                      : v.status === "due_soon"
                      ? "bg-secondary-container text-on-secondary-container"
                      : "bg-error/10 text-error";
                  const statusLabel =
                    v.status === "current" ? "Current" : v.status === "due_soon" ? "Due Soon" : "Overdue";
                  return (
                    <div
                      key={v.name}
                      className="bg-surface-container-lowest rounded-xl px-5 py-4 flex items-center gap-4"
                    >
                      <span
                        className="material-symbols-outlined text-primary text-base flex-shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        vaccines
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-label font-bold text-sm text-on-surface">{v.name}</p>
                        <p className="text-xs text-on-surface-variant mt-0.5">
                          Given {v.date} · Next due {v.nextDue}
                        </p>
                      </div>
                      <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-label font-bold flex-shrink-0 ${chipClass}`}>
                        {statusLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Weight History */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <WeightChart data={pet.weightHistory} />
            </div>

            {/* Upcoming Appointment */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary mb-6">
                Next Sanctuary Visit
              </p>
              <div className="bg-surface-container-lowest p-6 rounded-lg flex items-center gap-6">
                <div className="flex flex-col items-center bg-primary text-on-primary rounded-xl px-5 py-4 flex-shrink-0 min-w-[72px] text-center">
                  <span className="text-3xl font-headline font-extrabold leading-none">{apt.day}</span>
                  <span className="text-xs font-label font-bold uppercase tracking-widest mt-1 text-on-primary/80">
                    {apt.month}
                  </span>
                  <span className="text-xs text-on-primary/60 mt-0.5">{apt.year}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-headline font-bold text-on-surface text-lg">{apt.service}</p>
                  <p className="text-sm text-on-surface-variant mt-0.5">
                    {apt.location} · {apt.address}
                  </p>
                  <p className="text-xs text-on-surface-variant mt-1">
                    {apt.time} · {apt.duration}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-3 flex-shrink-0">
                  <span
                    className={`inline-block px-3 py-1 rounded-full font-label text-xs font-bold uppercase tracking-widest ${apt.status === "Confirmed" ? "bg-tertiary-container text-on-tertiary-container" : "bg-secondary-container text-on-secondary-container"}`}
                  >
                    {apt.status}
                  </span>
                  <Link
                    href="/schedule"
                    className="text-xs text-primary font-label font-bold hover:underline active:scale-95 transition-all"
                  >
                    Manage →
                  </Link>
                </div>
              </div>
            </div>

            {/* Care Record — client component handles tab state */}
            <PetCareSection records={pet.careRecords} />

            {/* AI Recommendations */}
            <div className="bg-surface-container-lowest border border-primary/10 p-8 rounded-xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    auto_awesome
                  </span>
                  <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">
                    AI Care Recommendations
                  </p>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label text-xs font-bold uppercase tracking-widest">
                  Powered by PurrBook AI
                </span>
              </div>
              <div className="space-y-4">
                <div className="bg-surface-container-low p-5 rounded-xl flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    schedule
                  </span>
                  <div>
                    <p className="text-sm font-bold text-on-surface mb-1">Next Grooming Due</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {pet.ai.nextGroomingReason}
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    wb_sunny
                  </span>
                  <div>
                    <p className="text-sm font-bold text-on-surface mb-1">Seasonal Tip</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {pet.ai.seasonalTip}
                    </p>
                  </div>
                </div>
                <div className="bg-surface-container-low p-5 rounded-xl flex items-start gap-4">
                  <span
                    className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    vaccines
                  </span>
                  <div>
                    <p className="text-sm font-bold text-on-surface mb-1">Health Reminder</p>
                    <p className="text-sm text-on-surface-variant leading-relaxed">
                      {pet.ai.healthReminder}
                    </p>
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
          <div className="text-lg font-black text-amber-900 dark:text-amber-200 uppercase tracking-tighter">
            PurrBook
          </div>
          <div className="flex flex-wrap justify-center gap-8 font-['Be_Vietnam_Pro'] text-sm uppercase tracking-widest">
            {["About Us", "Services", "Privacy Policy", "Terms of Service", "Contact"].map(
              (label) => (
                <a key={label} className="text-stone-500 hover:text-amber-600 transition-colors" href="#">
                  {label}
                </a>
              )
            )}
          </div>
          <div className="text-stone-500 text-[10px] uppercase tracking-[0.2em] opacity-80">
            © 2024 PurrBook Editorial Pet Care. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
