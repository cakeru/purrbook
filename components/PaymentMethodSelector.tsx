"use client";

import { useState } from "react";

type PaymentMethod = "gcash" | "maya" | "card" | "cash";

const methods: { id: PaymentMethod; icon: string; label: string; subtext: string }[] = [
  { id: "gcash", icon: "payments", label: "GCash", subtext: "Instant transfer via GCash" },
  { id: "maya", icon: "account_balance_wallet", label: "Maya", subtext: "Pay with Maya (PayMaya)" },
  {
    id: "card",
    icon: "credit_card",
    label: "Credit / Debit Card",
    subtext: "Visa, Mastercard, JCB",
  },
  {
    id: "cash",
    icon: "storefront",
    label: "Cash on Arrival",
    subtext: "Pay at the sanctuary on the day",
  },
];

export default function PaymentMethodSelector() {
  const [selected, setSelected] = useState<PaymentMethod>("gcash");

  return (
    <div className="space-y-6">
      {/* Method Buttons */}
      <div className="grid grid-cols-2 gap-3">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => setSelected(method.id)}
            className={`bg-surface-container-lowest border-2 rounded-xl p-5 cursor-pointer transition-all active:scale-95 text-left ${
              selected === method.id
                ? "border-primary ring-2 ring-primary/20"
                : "border-outline-variant/20 hover:border-primary/40"
            }`}
          >
            <span
              className={`material-symbols-outlined text-2xl mb-2 block ${selected === method.id ? "text-primary" : "text-on-surface-variant"}`}
              style={{ fontVariationSettings: selected === method.id ? "'FILL' 1" : "'FILL' 0" }}
            >
              {method.icon}
            </span>
            <p
              className={`font-label font-bold text-sm ${selected === method.id ? "text-on-surface" : "text-on-surface-variant"}`}
            >
              {method.label}
            </p>
            <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
              {method.subtext}
            </p>
          </button>
        ))}
      </div>

      {/* Method Detail Form */}
      <div className="bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-6">
        {selected === "gcash" && (
          <div className="space-y-4">
            <p className="text-xs font-label font-bold uppercase tracking-widest text-primary mb-4">
              GCash Details
            </p>
            <div>
              <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                GCash Mobile Number
              </label>
              <input
                type="tel"
                defaultValue="+63 917 234 5678"
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-5 py-3.5 text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              A payment request will be sent to your GCash number. Approve it within 10 minutes to
              secure your booking.
            </p>
          </div>
        )}

        {selected === "maya" && (
          <div className="space-y-4">
            <p className="text-xs font-label font-bold uppercase tracking-widest text-primary mb-4">
              Maya Details
            </p>
            <div>
              <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Maya Mobile Number or Email
              </label>
              <input
                type="text"
                defaultValue="+63 917 234 5678"
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-5 py-3.5 text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              A Maya payment link will be sent to your registered mobile or email. Complete payment
              within 10 minutes.
            </p>
          </div>
        )}

        {selected === "card" && (
          <div className="space-y-4">
            <p className="text-xs font-label font-bold uppercase tracking-widest text-primary mb-4">
              Card Details
            </p>
            <div>
              <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Card Number
              </label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-5 py-3.5 text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all tracking-widest"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  placeholder="MM / YY"
                  maxLength={7}
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-5 py-3.5 text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
              <div>
                <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                  CVV
                </label>
                <input
                  type="password"
                  placeholder="•••"
                  maxLength={4}
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-5 py-3.5 text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-2">
                Cardholder Name
              </label>
              <input
                type="text"
                placeholder="As it appears on your card"
                className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg px-5 py-3.5 text-on-surface font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
            </div>
          </div>
        )}

        {selected === "cash" && (
          <div className="flex items-start gap-4">
            <span
              className="material-symbols-outlined text-primary flex-shrink-0 mt-0.5"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              info
            </span>
            <div className="space-y-2">
              <p className="text-sm font-bold text-on-surface">Cash on Arrival Selected</p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                You'll settle the full amount of{" "}
                <span className="font-bold text-primary">₱8,200.00</span> at the sanctuary on the
                day of your appointment. Please bring exact change or a GCash QR backup.
              </p>
              <p className="text-xs text-on-surface-variant/70 italic leading-relaxed mt-2">
                Note: Cash on Arrival reservations are held for 30 minutes past your scheduled time.
                We recommend arriving punctually to honor your bespoke moment.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
