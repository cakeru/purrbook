"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { api } from "@/lib/api";
import BookingDetailPanel from "./BookingDetailPanel";

type BookingStatus = "all" | "upcoming" | "completed" | "cancelled";

const TABS: { label: string; value: BookingStatus }[] = [
  { label: "All", value: "all" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

function StatusChip({ status }: { status: string }) {
  const styles: Record<string, string> = {
    upcoming: "bg-tertiary-container text-on-tertiary-container",
    completed: "bg-surface-container-highest text-on-surface-variant",
    cancelled: "bg-error/10 text-error",
  };
  const labels: Record<string, string> = {
    upcoming: "Upcoming",
    completed: "Completed",
    cancelled: "Cancelled",
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-label font-bold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function BookingCard({ booking, onSelect }: { booking: any; onSelect: (b: any) => void }) {
  const petColor = booking.petSpecies === "dog"
    ? "bg-tertiary-container text-on-tertiary-container"
    : "bg-secondary-container text-on-secondary-container";

  return (
    <div
      className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 px-5 py-4 flex items-center gap-4 hover:-translate-y-0.5 transition-all duration-200 shadow-sm cursor-pointer"
      onClick={() => onSelect(booking)}
    >
      {/* Shop thumbnail */}
      <img
        src={booking.shopImage}
        alt={booking.shopName}
        className="w-14 h-14 rounded-xl object-cover flex-shrink-0"
      />

      {/* Center info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <p className="font-headline font-bold text-sm text-on-surface truncate">
            {booking.shopName}
          </p>
          <StatusChip status={booking.status} />
        </div>
        <p className="text-sm text-on-surface-variant truncate">{booking.service}</p>
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-label font-bold ${petColor}`}>
            <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              {booking.petSpecies === "dog" ? "pets" : "set_meal"}
            </span>
            {booking.petName}
          </span>
          <span className="text-xs text-on-surface-variant">
            {booking.date} · {booking.time}
          </span>
          <span className="text-xs text-on-surface-variant hidden sm:inline">
            {booking.duration}
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="text-right flex-shrink-0 hidden sm:block">
        <p className="font-headline font-bold text-base text-on-surface">
          ₱{booking.price.toLocaleString()}
        </p>
        <p className="text-xs text-on-surface-variant mt-0.5">#{booking.refNumber}</p>
      </div>

      {/* Secondary actions for completed/cancelled */}
      {booking.status === "completed" && (
        <div className="flex flex-col gap-2 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          <Link
            href={`/schedule?shop=${booking.shopSlug}`}
            className="px-4 py-2 bg-gradient-to-r from-primary to-primary-dim text-on-primary rounded-full font-label font-bold text-xs active:scale-95 transition-all shadow shadow-primary/20 text-center"
          >
            Rebook
          </Link>
          <Link
            href="/reviews"
            className="px-4 py-2 border border-outline-variant/30 text-on-surface-variant rounded-full font-label font-bold text-xs hover:border-primary hover:text-primary transition-all active:scale-95 text-center"
          >
            Leave Review
          </Link>
        </div>
      )}
      {booking.status === "cancelled" && (
        <div className="flex-shrink-0" onClick={(e) => e.stopPropagation()}>
          <Link
            href={`/schedule?shop=${booking.shopSlug}`}
            className="px-4 py-2 bg-gradient-to-r from-primary to-primary-dim text-on-primary rounded-full font-label font-bold text-xs active:scale-95 transition-all shadow shadow-primary/20 text-center"
          >
            Rebook
          </Link>
        </div>
      )}

      {/* Chevron hint */}
      <span className="material-symbols-outlined text-on-surface-variant text-base flex-shrink-0">
        chevron_right
      </span>
    </div>
  );
}

export default function BookingsPage() {
  const [bookings, setBookings] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<BookingStatus>("all");
  const [selectedBooking, setSelectedBooking] = useState<any | null>(null);

  useEffect(() => {
    api.get<{ bookings: any[] }>("/bookings").then(({ bookings: rows }) => {
      setBookings(rows.map((b) => ({
        id: b.id,
        refNumber: b.refNumber,
        shopName: b.providerName ?? "",
        shopSlug: b.providerSlug ?? b.providerId ?? "",
        shopImage: b.shopImage ?? "/purrbook.png",
        service: b.serviceName ?? "",
        petName: b.petName ?? "",
        petSpecies: b.petSpecies ?? "dog",
        date: b.scheduledDate ?? "",
        time: b.scheduledTime ?? "",
        duration: b.durationMins ? `${b.durationMins} min` : "",
        price: Math.round((b.priceCentavos ?? 0) / 100),
        status: (b.status === "confirmed" ? "upcoming" : b.status) as BookingStatus,
        paymentStatus: b.paymentStatus,
      })));
    }).catch(console.error);
  }, []);

  async function handleCancel(id: string) {
    try {
      await api.patch(`/bookings/${id}/cancel`);
      setBookings((prev) => prev.map((b) => b.id === id ? { ...b, status: "cancelled" as BookingStatus } : b));
    } catch (err) {
      console.error("Cancel failed", err);
    }
  }

  const filtered = activeTab === "all"
    ? bookings
    : bookings.filter((b) => b.status === activeTab);

  function countFor(tab: UserBookingStatus | "all") {
    return tab === "all" ? bookings.length : bookings.filter((b) => b.status === tab).length;
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-12 max-w-4xl mx-auto">

        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-headline font-bold text-on-surface tracking-tight">
            My Bookings
          </h1>
          <p className="text-on-surface-variant mt-1 text-sm font-body">
            Your appointment history across all sanctuaries
          </p>
        </div>

        {/* Tab bar */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/10 p-1 inline-flex gap-1 mb-6 flex-wrap">
          {TABS.map((tab) => {
            const active = activeTab === tab.value;
            return (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-label font-bold text-sm transition-all active:scale-95 ${
                  active
                    ? "bg-primary text-on-primary shadow-md shadow-primary/20"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
              >
                {tab.label}
                <span className={`inline-flex items-center justify-center w-5 h-5 rounded-full text-xs font-label font-bold ${
                  active ? "bg-on-primary/20 text-on-primary" : "bg-surface-container text-on-surface-variant"
                }`}>
                  {countFor(tab.value)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Booking list */}
        {filtered.length === 0 ? (
          <div className="py-20 text-center">
            <span className="material-symbols-outlined text-5xl text-on-surface-variant/30 block mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
              spa
            </span>
            <p className="text-on-surface-variant font-label font-bold">
              No {activeTab === "all" ? "" : activeTab} bookings yet.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((booking) => (
              <BookingCard key={booking.id} booking={booking} onSelect={setSelectedBooking} />
            ))}
          </div>
        )}

      </main>

      <BookingDetailPanel
        booking={selectedBooking}
        onClose={() => setSelectedBooking(null)}
        onCancel={handleCancel}
      />
    </>
  );
}
