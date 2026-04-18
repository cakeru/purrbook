"use client";

import { useState } from "react";
import Link from "next/link";
import { type Shop } from "@/lib/shops";

const DAYS = [
  { day: "MON", date: 20 },
  { day: "TUE", date: 21 },
  { day: "WED", date: 22 },
  { day: "THU", date: 23 },
  { day: "FRI", date: 24 },
];

const TIME_SLOTS = ["09:30 AM", "11:00 AM", "01:30 PM", "03:00 PM"];

export default function BookingWidget({ shop }: { shop: Shop }) {
  const [selectedDayIdx, setSelectedDayIdx] = useState(1);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[2]);

  const featuredService = shop.detailServices?.[0];
  const scheduleHref = `/schedule?shop=${shop.slug}&service=${encodeURIComponent(featuredService?.name ?? "")}&price=${encodeURIComponent(featuredService?.price ?? shop.price)}`;

  function scrollToServices() {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="sticky top-32 bg-surface-container-lowest rounded-lg editorial-shadow p-8 space-y-8 border border-outline-variant/10">
      <div>
        <h3 className="font-headline font-extrabold text-xl mb-2">Schedule Visit</h3>
        <p className="text-xs text-on-surface-variant font-medium">
          Select your preferred date and time
        </p>
      </div>

      {/* Date Selection */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-bold">April 2026</span>
          <div className="flex gap-2">
            <button className="material-symbols-outlined text-sm p-1 rounded-full border border-outline-variant/20 active:scale-95 transition-all">
              chevron_left
            </button>
            <button className="material-symbols-outlined text-sm p-1 rounded-full border border-outline-variant/20 active:scale-95 transition-all">
              chevron_right
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          {DAYS.map(({ day, date }, i) => (
            <button
              key={day}
              onClick={() => setSelectedDayIdx(i)}
              className="flex flex-col items-center gap-2 active:scale-95 transition-all"
            >
              <span className="text-[10px] text-outline font-bold">{day}</span>
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  selectedDayIdx === i
                    ? "bg-primary text-on-primary"
                    : "border border-outline-variant/20 hover:bg-primary-container/20"
                }`}
              >
                {date}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div>
        <span className="text-xs font-bold text-outline mb-3 block uppercase tracking-widest">
          Available Slots
        </span>
        <div className="grid grid-cols-2 gap-2">
          {TIME_SLOTS.map((time) => (
            <button
              key={time}
              onClick={() => setSelectedTime(time)}
              className={`py-2.5 rounded-full text-xs font-bold transition-all active:scale-95 ${
                selectedTime === time
                  ? "border border-primary text-primary bg-primary-container/10"
                  : "border border-outline-variant/20 hover:bg-surface-container-high"
              }`}
            >
              {time}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t border-outline-variant/10">
        <div className="flex justify-between items-end mb-6">
          <div>
            <span className="text-xs text-on-surface-variant block">Starting from</span>
            <span className="text-2xl font-black text-on-surface">{shop.price.replace("From ", "")}</span>
          </div>
          <button
            onClick={scrollToServices}
            className="text-primary text-xs font-bold underline decoration-2 underline-offset-4 active:scale-95 transition-all"
          >
            Add service
          </button>
        </div>
        <Link
          href={scheduleHref}
          className="block w-full text-center bg-gradient-to-r from-primary to-primary-dim text-on-primary py-4 rounded-full font-headline font-bold text-lg hover:shadow-lg transition-all active:scale-95"
        >
          Confirm Appointment
        </Link>
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
