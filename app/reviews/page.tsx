"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { REVIEWS, type UserReview } from "@/lib/reviews";
import { BOOKINGS } from "@/lib/bookings";

function StarRating({ rating, interactive = false, onChange }: {
  rating: number;
  interactive?: boolean;
  onChange?: (r: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => {
        const filled = n <= (interactive ? (hovered || rating) : rating);
        return (
          <span
            key={n}
            onClick={() => interactive && onChange?.(n)}
            onMouseEnter={() => interactive && setHovered(n)}
            onMouseLeave={() => interactive && setHovered(0)}
            className={`material-symbols-outlined text-xl transition-colors ${
              filled ? "text-tertiary" : "text-outline-variant"
            } ${interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""}`}
            style={{ fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0" }}
          >
            star
          </span>
        );
      })}
    </div>
  );
}

function ReviewCard({ review }: { review: UserReview }) {
  const petColor = review.petName === "Luna"
    ? "bg-secondary-container text-on-secondary-container"
    : "bg-tertiary-container text-on-tertiary-container";
  return (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-6 space-y-4 shadow-sm hover:-translate-y-0.5 transition-all duration-200">
      <div className="flex items-start gap-4">
        <img
          src={review.shopImage}
          alt={review.shopName}
          className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="font-headline font-bold text-sm text-on-surface">{review.shopName}</p>
          <p className="text-xs text-on-surface-variant mt-0.5">{review.service} · {review.date}</p>
          <div className="mt-2">
            <StarRating rating={review.rating} />
          </div>
        </div>
      </div>
      <p className="text-sm text-on-surface-variant font-body leading-relaxed italic">
        &ldquo;{review.body}&rdquo;
      </p>
      <div className="flex items-center gap-2 pt-1">
        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-label font-bold ${petColor}`}>
          {review.petName}
        </span>
        <span className="text-xs text-on-surface-variant">attended by {review.staffName}</span>
      </div>
    </div>
  );
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<UserReview[]>(REVIEWS);
  const [modalBookingId, setModalBookingId] = useState<string | null>(null);
  const [draftRating, setDraftRating] = useState(5);
  const [draftBody, setDraftBody] = useState("");

  const reviewedIds = new Set(reviews.map((r) => r.bookingId));
  const pendingBookings = BOOKINGS.filter(
    (b) => b.status === "completed" && !reviewedIds.has(b.id)
  );
  const modalBooking = BOOKINGS.find((b) => b.id === modalBookingId) ?? null;

  function submitReview() {
    if (!modalBooking || !draftBody.trim()) return;
    const newReview: UserReview = {
      id: `rv-${Date.now()}`,
      bookingId: modalBooking.id,
      shopSlug: modalBooking.shopSlug,
      shopName: modalBooking.shopName,
      shopImage: modalBooking.shopImage,
      service: modalBooking.service,
      petName: modalBooking.petName,
      rating: draftRating,
      body: draftBody.trim(),
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      staffName: "The Team",
    };
    setReviews((prev) => [newReview, ...prev]);
    setModalBookingId(null);
    setDraftRating(5);
    setDraftBody("");
  }

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 px-12 max-w-3xl mx-auto space-y-10">

        {/* Page header */}
        <div>
          <h1 className="text-3xl font-headline font-bold text-on-surface tracking-tight">
            My Reviews
          </h1>
          <p className="text-on-surface-variant mt-1 text-sm font-body">
            Your experiences across PurrBook sanctuaries
          </p>
        </div>

        {/* Pending — write a review */}
        {pendingBookings.length > 0 && (
          <section>
            <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-4">
              Awaiting Your Review
            </p>
            <div className="space-y-3">
              {pendingBookings.map((booking) => {
                const petColor = booking.petSpecies === "cat"
                  ? "bg-secondary-container text-on-secondary-container"
                  : "bg-tertiary-container text-on-tertiary-container";
                return (
                  <div
                    key={booking.id}
                    className="bg-surface-container-lowest rounded-2xl border border-outline-variant/10 px-5 py-4 flex items-center gap-4 shadow-sm"
                  >
                    <img
                      src={booking.shopImage}
                      alt={booking.shopName}
                      className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-headline font-bold text-sm text-on-surface">{booking.shopName}</p>
                      <p className="text-xs text-on-surface-variant mt-0.5">{booking.service} · {booking.date}</p>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-label font-bold mt-1.5 ${petColor}`}>
                        {booking.petName}
                      </span>
                    </div>
                    <button
                      onClick={() => { setModalBookingId(booking.id); setDraftRating(5); setDraftBody(""); }}
                      className="px-4 py-2 border border-outline-variant/30 text-on-surface-variant rounded-full font-label font-bold text-xs hover:border-primary hover:text-primary transition-all active:scale-95 flex-shrink-0"
                    >
                      Write Review
                    </button>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Submitted reviews */}
        <section>
          <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-4">
            {reviews.length} Review{reviews.length !== 1 ? "s" : ""}
          </p>
          {reviews.length === 0 ? (
            <div className="py-16 text-center">
              <span className="material-symbols-outlined text-5xl text-on-surface-variant/30 block mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                star
              </span>
              <p className="text-on-surface-variant font-label font-bold">No reviews yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
            </div>
          )}
        </section>

      </main>

      {/* Write Review Modal */}
      {modalBookingId && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-inverse-surface/40 backdrop-blur-sm"
            onClick={() => setModalBookingId(null)}
          />
          <div className="relative bg-surface-container-lowest rounded-3xl border border-outline-variant/10 shadow-2xl w-full max-w-lg">
            <div className="px-7 py-6 border-b border-outline-variant/10 flex items-center justify-between">
              <div>
                <h3 className="font-headline font-bold text-lg text-on-surface">Write a Review</h3>
                {modalBooking && (
                  <p className="text-xs text-on-surface-variant mt-0.5">
                    {modalBooking.shopName} · {modalBooking.service}
                  </p>
                )}
              </div>
              <button
                onClick={() => setModalBookingId(null)}
                className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-on-surface-variant text-base">close</span>
              </button>
            </div>

            <div className="px-7 py-6 space-y-5">
              <div>
                <label className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant block mb-3">
                  Your Rating
                </label>
                <StarRating rating={draftRating} interactive onChange={setDraftRating} />
              </div>
              <div>
                <label className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant block mb-2">
                  Your Review
                </label>
                <textarea
                  value={draftBody}
                  onChange={(e) => setDraftBody(e.target.value)}
                  placeholder="Share your experience…"
                  rows={4}
                  className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl px-4 py-3 text-sm font-body focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 transition-all resize-none"
                />
              </div>
            </div>

            <div className="px-7 py-5 border-t border-outline-variant/10 flex gap-3">
              <button
                onClick={() => setModalBookingId(null)}
                className="flex-1 border border-outline-variant/30 text-on-surface-variant rounded-full py-3 font-label font-bold text-sm hover:border-primary hover:text-primary transition-all active:scale-95"
              >
                Cancel
              </button>
              <button
                onClick={submitReview}
                disabled={!draftBody.trim()}
                className="flex-1 bg-gradient-to-r from-primary to-primary-dim text-on-primary rounded-full py-3 font-label font-bold text-sm active:scale-95 transition-all shadow-lg shadow-primary/20 disabled:opacity-40 disabled:pointer-events-none"
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
