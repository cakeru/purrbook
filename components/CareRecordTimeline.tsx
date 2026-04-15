"use client";

import { useState } from "react";

type CareRecord = {
  id: string;
  type: "grooming" | "vet";
  icon: string;
  provider: string;
  date: string;
  summary: string;
  attendant: { name: string; role: string; rating: number };
  services: string[];
  products: string[];
  notes: string;
  nextRecommended: string;
};

const RECORDS: CareRecord[] = [
  {
    id: "nov-14-2024",
    type: "grooming",
    icon: "content_cut",
    provider: "The Amber Sanctuary",
    date: "Nov 14, 2024",
    summary: "Royal Bath & Silk Cut · Double coat, no mats",
    attendant: { name: "Camille Reyes", role: "Senior Groomer", rating: 5 },
    services: [
      "Full bath & blow-dry",
      "Silk Cut trim",
      "Nail trim",
      "Ear cleaning",
      "Teeth brushing",
    ],
    products: ["Lavender Shampoo", "Oat Conditioner", "Coat Serum"],
    notes:
      "Barnaby was calm throughout. No matting found. Slight sensitivity near left ear — cleaned gently. Coat is in excellent condition.",
    nextRecommended: "Dec 26, 2024 (6-week cycle)",
  },
  {
    id: "oct-2-2024",
    type: "vet",
    icon: "vaccines",
    provider: "Paws & Furs Animal Clinic",
    date: "Oct 2, 2024",
    summary: "Annual vaccine · Rabies + DHPP booster",
    attendant: { name: "Dr. Lena Cruz", role: "Veterinarian", rating: 5 },
    services: ["Rabies vaccine", "DHPP booster", "Weight check", "General physical exam"],
    products: ["Rabies vaccine (Nobivac)", "DHPP (Vanguard Plus)"],
    notes:
      "Barnaby is in excellent health. Weight stable at 28 kg. No abnormalities detected. Vaccine site normal. Next vaccines due Oct 2025.",
    nextRecommended: "Oct 2, 2025 (annual booster)",
  },
  {
    id: "sep-18-2024",
    type: "grooming",
    icon: "content_cut",
    provider: "Sniff Pet Salon & Hotel",
    date: "Sep 18, 2024",
    summary: "Express groom · Gentle handling noted",
    attendant: { name: "Marco Villanueva", role: "Groomer", rating: 4 },
    services: ["Bath & blow-dry", "Nail trim", "Ear cleaning"],
    products: ["Oatmeal Shampoo", "Detangling Spray"],
    notes:
      "Express session completed in 45 mins. Minor tangling at the flanks — combed out. Barnaby responded well to handling. Recommend full groom next visit.",
    nextRecommended: "Nov 2024 (full groom due)",
  },
  {
    id: "aug-5-2024",
    type: "vet",
    icon: "medical_services",
    provider: "Petvetgo Animal Clinic",
    date: "Aug 5, 2024",
    summary: "Check-up · Healthy weight, clean ears",
    attendant: { name: "Dr. Paolo Mendez", role: "Veterinarian", rating: 5 },
    services: ["Routine check-up", "Ear examination", "Weight & vitals", "Dental inspection"],
    products: ["Ear cleaning solution"],
    notes:
      "All vitals normal. Ears clean with no signs of infection. Teeth show mild tartar — recommend dental chews. Weight at 27.8 kg, within healthy range.",
    nextRecommended: "Feb 2025 (semi-annual check)",
  },
  {
    id: "jul-3-2024",
    type: "grooming",
    icon: "content_cut",
    provider: "The Amber Sanctuary",
    date: "Jul 3, 2024",
    summary: "Full groom · Summer trim, de-shed treatment",
    attendant: { name: "Camille Reyes", role: "Senior Groomer", rating: 5 },
    services: [
      "Full bath & blow-dry",
      "Summer trim",
      "De-shed treatment",
      "Nail trim",
      "Ear cleaning",
    ],
    products: ["De-shedding Shampoo", "Furminator Conditioner", "Finishing Spray"],
    notes:
      "Heavy shedding season — de-shed treatment removed significant undercoat. Coat looks much lighter. Barnaby tolerated the Furminator well. Recommended monthly de-sheds through summer.",
    nextRecommended: "Aug 2024 (monthly de-shed)",
  },
  {
    id: "may-20-2024",
    type: "vet",
    icon: "vaccines",
    provider: "St. Bernard's Pet Shop",
    date: "May 20, 2024",
    summary: "Flea & tick prevention · Monthly treatment",
    attendant: { name: "Dr. Ana Soriano", role: "Veterinarian", rating: 4 },
    services: ["Flea & tick topical application", "Skin inspection", "Weight check"],
    products: ["Frontline Plus (monthly topical)"],
    notes:
      "No signs of fleas or ticks. Skin healthy, no irritation. Frontline Plus applied between shoulder blades. Next application due June 20, 2024.",
    nextRecommended: "Jun 20, 2024 (monthly topical)",
  },
];

export default function CareRecordTimeline() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<CareRecord | null>(null);

  function openRecord(record: CareRecord) {
    setSelected(record);
    setOpen(true);
  }

  function closeModal() {
    setOpen(false);
    setSelected(null);
  }

  return (
    <>
      {/* Timeline */}
      <div className="space-y-5">
        {RECORDS.map((record) => (
          <button
            key={record.id}
            onClick={() => openRecord(record)}
            className="w-full flex items-start gap-4 text-left group hover:bg-surface-container rounded-xl p-3 -mx-3 transition-all active:scale-[0.99]"
          >
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${record.type === "grooming" ? "bg-tertiary-container text-on-tertiary-container" : "bg-secondary-container text-on-secondary-container"}`}
            >
              <span
                className="material-symbols-outlined text-sm"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {record.icon}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <p className="text-sm font-bold text-on-surface group-hover:text-primary transition-colors truncate">
                  {record.type === "grooming" ? "Grooming" : "Vet Visit"} · {record.provider}
                </p>
                <p className="text-xs text-on-surface-variant flex-shrink-0">{record.date}</p>
              </div>
              <p className="text-xs text-on-surface-variant mt-0.5">{record.summary}</p>
            </div>
            <span className="material-symbols-outlined text-on-surface-variant text-base flex-shrink-0 self-center group-hover:text-primary transition-colors">
              chevron_right
            </span>
          </button>
        ))}
      </div>

      {/* Modal Overlay */}
      {open && selected && (
        <div
          className="fixed inset-0 z-50 bg-on-surface/40 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={closeModal}
        >
          <div
            className="bg-surface-container-lowest rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between p-6 border-b border-outline-variant/10">
              <div className="flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 ${selected.type === "grooming" ? "bg-tertiary-container text-on-tertiary-container" : "bg-secondary-container text-on-secondary-container"}`}
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {selected.icon}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-label font-bold uppercase tracking-widest text-primary mb-0.5">
                    {selected.type === "grooming" ? "Grooming Session" : "Vet Visit"}
                  </p>
                  <h2 className="font-headline font-bold text-on-surface text-lg leading-tight">
                    {selected.provider}
                  </h2>
                  <p className="text-xs text-on-surface-variant mt-0.5">{selected.date}</p>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors active:scale-95 flex-shrink-0"
              >
                <span className="material-symbols-outlined text-on-surface-variant text-base">
                  close
                </span>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Attendant */}
              <div>
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                  {selected.type === "grooming" ? "Groomer" : "Attending Vet"}
                </p>
                <div className="flex items-center justify-between bg-surface-container-low rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span
                        className="material-symbols-outlined text-primary"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {selected.type === "grooming" ? "content_cut" : "stethoscope"}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold text-on-surface text-sm">{selected.attendant.name}</p>
                      <p className="text-xs text-on-surface-variant">{selected.attendant.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: selected.attendant.rating }).map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-tertiary text-sm"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        star
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                  Services Performed
                </p>
                <ul className="space-y-2">
                  {selected.services.map((service) => (
                    <li key={service} className="flex items-center gap-3 text-sm text-on-surface">
                      <span
                        className="material-symbols-outlined text-primary text-base flex-shrink-0"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              {selected.products.length > 0 && (
                <div>
                  <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                    Products Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selected.products.map((product) => (
                      <span
                        key={product}
                        className="bg-surface-container rounded-full px-3 py-1.5 text-xs font-label font-bold text-on-surface"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes */}
              <div>
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">
                  {selected.type === "grooming" ? "Groomer Notes" : "Vet Notes"}
                </p>
                <div className="bg-surface-container-low rounded-xl p-4 border-l-4 border-primary/30">
                  <p className="text-sm text-on-surface-variant leading-relaxed italic">
                    "{selected.notes}"
                  </p>
                </div>
              </div>

              {/* Next Recommended */}
              <div className="flex items-center gap-4 bg-primary/5 border border-primary/15 rounded-xl p-4">
                <span
                  className="material-symbols-outlined text-primary flex-shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  event_available
                </span>
                <div>
                  <p className="text-xs font-label font-bold uppercase tracking-widest text-primary mb-0.5">
                    Next Recommended
                  </p>
                  <p className="text-sm text-on-surface font-semibold">
                    {selected.nextRecommended}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
