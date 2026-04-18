"use client";

import { useState, useEffect } from "react";

export default function PetPhotoGallery({ photos, petName }: { photos: string[]; petName: string }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? 0 : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxIndex, photos.length]);

  return (
    <>
      {/* Thumbnail strip */}
      <div className="flex gap-3 overflow-x-auto pb-1">
        {photos.map((src, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden active:scale-95 transition-all ring-2 ring-transparent hover:ring-primary/40 focus:outline-none"
          >
            <img
              src={src}
              alt={`${petName} photo ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            className="absolute inset-0 w-full h-full cursor-default"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          />

          {/* Close */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all active:scale-95 z-10"
          >
            <span className="material-symbols-outlined text-white text-xl">close</span>
          </button>

          {/* Index indicator */}
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-label font-bold z-10">
            {lightboxIndex + 1} / {photos.length}
          </span>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length); }}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all active:scale-95 z-10"
          >
            <span className="material-symbols-outlined text-white text-xl">chevron_left</span>
          </button>

          {/* Image */}
          <img
            src={photos[lightboxIndex]}
            alt={`${petName} photo ${lightboxIndex + 1}`}
            className="relative z-10 max-w-2xl w-full max-h-[80vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % photos.length); }}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all active:scale-95 z-10"
          >
            <span className="material-symbols-outlined text-white text-xl">chevron_right</span>
          </button>
        </div>
      )}
    </>
  );
}
