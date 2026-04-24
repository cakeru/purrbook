"use client";

import Link from "next/link";

function parsePrice(price: string): number {
  return parseFloat(price.replace(/[₱,]/g, "")) || 0;
}

export default function BookingWidget({
  shop,
  selectedServices,
}: {
  shop: any;
  selectedServices: any[];
}) {
  const total = selectedServices.reduce((sum, s) => sum + parsePrice(s.price), 0);
  const hasSelection = selectedServices.length > 0;

  const serviceLabel =
    selectedServices.length === 1
      ? selectedServices[0].name
      : `${selectedServices.length} services`;

  const scheduleHref = hasSelection
    ? `/schedule?shop=${shop.slug}&service=${encodeURIComponent(serviceLabel)}&price=${encodeURIComponent(`₱${total.toLocaleString()}`)}`
    : "#";

  return (
    <div className="sticky top-32 bg-surface-container-lowest rounded-lg editorial-shadow p-8 space-y-8 border border-outline-variant/10">
      <div>
        <h3 className="font-headline font-extrabold text-xl mb-2">Schedule Visit</h3>
        <p className="text-xs text-on-surface-variant font-medium">
          Select one or more services, then confirm your appointment
        </p>
      </div>

      {/* Selected Services */}
      {hasSelection ? (
        <div className="space-y-2 max-h-52 overflow-y-auto pr-1">
          {selectedServices.map((svc) => (
            <div key={svc.name} className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary/15">
              <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${svc.colorClass}`}>
                <span className="material-symbols-outlined text-base">{svc.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-label font-bold text-xs text-on-surface leading-tight truncate">{svc.name}</p>
                <p className="text-[10px] text-on-surface-variant">{svc.duration}</p>
              </div>
              <p className="font-headline font-bold text-sm text-primary flex-shrink-0">{svc.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-outline-variant/40 text-on-surface-variant">
          <span className="material-symbols-outlined text-xl opacity-50">arrow_back</span>
          <p className="text-sm font-medium">Select services from the list</p>
        </div>
      )}

      <div className="pt-4 border-t border-outline-variant/10">
        <div className="flex justify-between items-end mb-6">
          <div>
            <span className="text-xs text-on-surface-variant block">
              {hasSelection ? `${selectedServices.length} service${selectedServices.length > 1 ? "s" : ""} selected` : "Starting from"}
            </span>
            <span className="text-2xl font-black text-on-surface">
              {hasSelection ? `₱${total.toLocaleString()}` : (shop.startingPrice ?? shop.price ?? "—").replace("From ", "")}
            </span>
          </div>
        </div>

        {hasSelection ? (
          <Link
            href={scheduleHref}
            className="block w-full text-center bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 rounded-full font-headline font-bold text-lg hover:shadow-lg transition-all active:scale-95"
          >
            Confirm Appointment
          </Link>
        ) : (
          <div className="w-full text-center bg-surface-container-high text-on-surface-variant py-4 rounded-full font-headline font-bold text-lg cursor-not-allowed opacity-50 select-none">
            Confirm Appointment
          </div>
        )}

        <Link
          href={`/messages?shop=${shop.slug}`}
          className="block w-full text-center py-3.5 border-2 border-primary text-primary rounded-full font-label font-bold text-sm hover:bg-primary/5 transition-all active:scale-95 mt-3"
        >
          Message this Sanctuary
        </Link>
      </div>

      <div className="bg-surface-container-low p-4 rounded-lg flex items-start gap-3">
        <span className="material-symbols-outlined text-secondary text-xl">
          verified_user
        </span>
        <p className="text-[11px] text-on-secondary-fixed-variant leading-normal">
          Your booking includes PurrBook&apos;s Editorial Protection. Free cancellation
          up to 24 hours before your slot.
        </p>
      </div>
    </div>
  );
}
