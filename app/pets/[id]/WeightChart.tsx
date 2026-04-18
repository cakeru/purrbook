"use client";

import type { WeightEntry } from "@/lib/pets";

export default function WeightChart({ data }: { data: WeightEntry[] }) {
  const max = Math.max(...data.map((d) => d.weight));
  const latest = data[data.length - 1];

  return (
    <div>
      <div className="flex items-end justify-between mb-2">
        <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant">
          Weight History
        </p>
        <span className="text-sm font-headline font-bold text-primary">
          {latest.weight} kg current
        </span>
      </div>
      <div className="flex items-end gap-3 h-28">
        {data.map((entry) => {
          const pct = (entry.weight / max) * 100;
          const shortMonth = entry.month.split(" ")[0];
          return (
            <div key={entry.month} className="flex flex-col items-center gap-1 flex-1">
              <span className="text-[10px] text-on-surface-variant font-label font-bold">
                {entry.weight}
              </span>
              <div
                className="w-full bg-primary rounded-t-lg transition-all"
                style={{ height: `${pct}%` }}
              />
              <span className="text-[10px] text-on-surface-variant font-label">{shortMonth}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
