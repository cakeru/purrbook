"use client";

import { useState } from "react";
import CareRecordTimeline from "@/components/CareRecordTimeline";
import { type CareRecord, type Filter } from "@/lib/pets";

const TABS: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Grooming", value: "grooming" },
  { label: "Vet Visits", value: "vet" },
];

export default function PetCareSection({ records }: { records: CareRecord[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  return (
    <div className="bg-surface-container-low p-8 rounded-xl">
      <div className="flex items-center justify-between mb-6">
        <p className="text-xs font-headline font-bold uppercase tracking-widest text-primary">
          Care Record
        </p>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label text-xs font-bold uppercase tracking-widest">
          <span
            className="material-symbols-outlined text-xs"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
          Verified by PurrBook
        </span>
      </div>
      <div className="flex gap-2 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setFilter(tab.value)}
            className={`px-4 py-1.5 rounded-full font-label text-xs font-bold uppercase tracking-widest transition-colors active:scale-95 ${
              filter === tab.value
                ? "bg-primary text-on-primary"
                : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <CareRecordTimeline records={records} filter={filter} />
    </div>
  );
}
