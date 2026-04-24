"use client";

import { useState } from "react";
import BookingWidget from "./BookingWidget";

export default function ShopBookingFlow({ shop }: { shop: any }) {
  const [selectedServices, setSelectedServices] = useState<any[]>([]);

  function toggleService(svc: any) {
    setSelectedServices((prev) =>
      prev.some((s) => s.name === svc.name)
        ? prev.filter((s) => s.name !== svc.name)
        : [...prev, svc]
    );
  }

  return (
    <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-3 gap-16">
      {/* Service List */}
      <div className="lg:col-span-2" id="services">
        <h2 className="font-headline text-2xl font-bold tracking-tight mb-8 flex items-center gap-3">
          Boutique Services{" "}
          <span className="h-px bg-outline-variant flex-grow opacity-30"></span>
        </h2>
        <div className="space-y-4">
          {(shop.detailServices ?? []).map((svc: any) => {
            const isSelected = selectedServices.some((s) => s.name === svc.name);
            return (
              <div
                key={svc.name}
                onClick={() => toggleService(svc)}
                className={`group relative p-6 rounded-lg transition-all duration-300 flex justify-between items-center cursor-pointer active:scale-95 ${
                  isSelected
                    ? "bg-surface-container-low ring-2 ring-primary"
                    : "bg-surface hover:bg-surface-container-low"
                }`}
              >
                <div className="flex gap-6 items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${svc.colorClass}`}>
                    <span className="material-symbols-outlined text-2xl">{svc.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline font-bold text-lg text-on-surface">{svc.name}</h4>
                    <p className="text-sm text-on-surface-variant max-w-md">{svc.description}</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0 ml-4 flex items-center gap-4">
                  <div>
                    <p className="font-headline font-black text-xl text-primary">{svc.price}</p>
                    <p className="text-xs uppercase tracking-widest text-outline">{svc.duration}</p>
                  </div>
                  <div className={`w-6 h-6 flex items-center justify-center transition-opacity ${isSelected ? "opacity-100" : "opacity-0"}`}>
                    <span
                      className="material-symbols-outlined text-primary text-2xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Booking Widget */}
      <div className="lg:col-span-1">
        <BookingWidget shop={shop} selectedServices={selectedServices} />
      </div>
    </div>
  );
}
