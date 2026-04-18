"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { type UserBooking, type UserBookingStatus } from "@/lib/bookings";

const STATUS_STYLES: Record<UserBookingStatus, string> = {
  upcoming: "bg-tertiary-container text-on-tertiary-container",
  completed: "bg-surface-container-highest text-on-surface-variant",
  cancelled: "bg-error/10 text-error",
};

const STATUS_LABELS: Record<UserBookingStatus, string> = {
  upcoming: "Upcoming",
  completed: "Completed",
  cancelled: "Cancelled",
};

export default function BookingDetailPanel({
  booking,
  onClose,
  onCancel,
}: {
  booking: UserBooking | null;
  onClose: () => void;
  onCancel: (id: string) => void;
}) {
  const [confirming, setConfirming] = useState(false);

  useEffect(() => {
    setConfirming(false);
  }, [booking]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-inverse-surface/30 z-40 transition-opacity duration-200 ${booking ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[480px] bg-surface-container-lowest border-l border-outline-variant/15 shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-out ${booking ? "translate-x-0" : "translate-x-full"}`}
      >
        {!booking ? null : (
          <>
            {/* Header */}
            <div className="px-6 py-5 border-b border-outline-variant/10 flex items-center justify-between flex-shrink-0">
              <div>
                <p className="font-headline font-bold text-lg text-on-surface">{booking.shopName}</p>
                <p className="text-sm text-on-surface-variant mt-0.5">#{booking.refNumber}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-label font-bold capitalize ${STATUS_STYLES[booking.status]}`}>
                  {STATUS_LABELS[booking.status]}
                </span>
                <button
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined text-on-surface-variant text-lg">close</span>
                </button>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">

              {/* Sanctuary */}
              <section>
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">Sanctuary</p>
                <div className="bg-surface-container-low rounded-xl overflow-hidden">
                  <img
                    src={booking.shopImage}
                    alt={booking.shopName}
                    data-alt={`${booking.shopName} pet grooming salon exterior`}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <p className="font-headline font-bold text-on-surface">{booking.shopName}</p>
                    <div className="flex items-start gap-2 mt-1.5">
                      <span className="material-symbols-outlined text-primary text-base flex-shrink-0 mt-0.5">location_on</span>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{booking.shopAddress}</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Companion */}
              <section>
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">Companion</p>
                <div className="bg-surface-container-low rounded-xl p-4 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${booking.petSpecies === "dog" ? "bg-tertiary-container text-on-tertiary-container" : "bg-secondary-container text-on-secondary-container"}`}>
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {booking.petSpecies === "dog" ? "pets" : "set_meal"}
                    </span>
                  </div>
                  <div>
                    <p className="font-headline font-bold text-on-surface">{booking.petName}</p>
                    <p className="text-sm text-on-surface-variant capitalize">{booking.petSpecies}</p>
                  </div>
                </div>
              </section>

              {/* Appointment */}
              <section>
                <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3">Appointment</p>
                <div className="bg-surface-container-low rounded-xl p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-on-surface-variant">Service</span>
                    <span className="text-sm font-label font-bold text-on-surface">{booking.service}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-on-surface-variant">Date & Time</span>
                    <span className="text-sm font-label font-bold text-on-surface">{booking.date} · {booking.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-on-surface-variant">Duration</span>
                    <span className="text-sm font-label font-bold text-on-surface">{booking.duration}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-outline-variant/10 pt-3">
                    <span className="text-sm font-bold text-on-surface">Total</span>
                    <span className="text-lg font-headline font-extrabold text-primary">₱{booking.price.toLocaleString()}</span>
                  </div>
                </div>
              </section>

            </div>

            {/* Footer actions */}
            <div className="px-6 py-5 border-t border-outline-variant/10 flex-shrink-0">
              {booking.status === "upcoming" && !confirming && (
                <button
                  onClick={() => setConfirming(true)}
                  className="w-full py-3 rounded-full border border-outline-variant/30 text-error font-label font-bold text-sm hover:bg-error/5 active:scale-95 transition-all"
                >
                  Cancel Appointment
                </button>
              )}

              {booking.status === "upcoming" && confirming && (
                <div className="space-y-3">
                  <p className="text-center text-sm font-label font-bold text-on-surface">Are you sure you want to cancel?</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => { onCancel(booking.id); onClose(); }}
                      className="flex-1 py-3 rounded-full bg-error text-white font-label font-bold text-sm active:scale-95 transition-all"
                    >
                      Yes, Cancel
                    </button>
                    <button
                      onClick={() => setConfirming(false)}
                      className="flex-1 py-3 rounded-full border border-outline-variant/30 text-on-surface font-label font-bold text-sm hover:bg-surface-container active:scale-95 transition-all"
                    >
                      Keep It
                    </button>
                  </div>
                </div>
              )}

              {booking.status === "completed" && (
                <div className="flex gap-3">
                  <Link
                    href={`/schedule?shop=${booking.shopSlug}`}
                    className="flex-1 py-3 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-label font-bold text-sm active:scale-95 transition-all shadow-lg shadow-primary/20 text-center"
                  >
                    Rebook
                  </Link>
                  <Link
                    href="/reviews"
                    className="flex-1 py-3 rounded-full border border-outline-variant/30 text-on-surface-variant font-label font-bold text-sm hover:border-primary hover:text-primary active:scale-95 transition-all text-center"
                  >
                    Leave a Review
                  </Link>
                </div>
              )}

              {booking.status === "cancelled" && (
                <Link
                  href={`/schedule?shop=${booking.shopSlug}`}
                  className="block w-full py-3 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary font-label font-bold text-sm active:scale-95 transition-all shadow-lg shadow-primary/20 text-center"
                >
                  Rebook
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
