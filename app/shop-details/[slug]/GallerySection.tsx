"use client";

import { useState, useEffect } from "react";

export default function GallerySection({ images, shopName }: { images: string[]; shopName: string }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightboxIndex, images.length]);

  return (
    <>
      {/* 4-image masonry grid */}
      <div className="grid grid-cols-4 gap-4 auto-rows-[150px]">
        <div
          className="col-span-2 row-span-2 rounded-lg overflow-hidden cursor-pointer"
          onClick={() => setLightboxIndex(0)}
        >
          <img
            alt={`${shopName} gallery 1`}
            className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            src={images[0]}
          />
        </div>
        <div
          className="col-span-2 row-span-1 rounded-lg overflow-hidden cursor-pointer"
          onClick={() => setLightboxIndex(1)}
        >
          <img
            alt={`${shopName} gallery 2`}
            className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            src={images[1]}
          />
        </div>
        <div
          className="col-span-1 row-span-1 rounded-lg overflow-hidden cursor-pointer"
          onClick={() => setLightboxIndex(2)}
        >
          <img
            alt={`${shopName} gallery 3`}
            className="w-full h-full object-cover hover:opacity-90 transition-opacity"
            src={images[2]}
          />
        </div>
        <div
          className="col-span-1 row-span-1 rounded-lg overflow-hidden relative group cursor-pointer"
          onClick={() => setLightboxIndex(0)}
        >
          <img
            alt={`${shopName} gallery 4`}
            className="w-full h-full object-cover transition-opacity group-hover:opacity-80"
            src={images[3]}
          />
          <div className="absolute inset-0 bg-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-on-primary font-bold text-sm">View All</span>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4">
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
            {lightboxIndex + 1} / {images.length}
          </span>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length); }}
            className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all active:scale-95 z-10"
          >
            <span className="material-symbols-outlined text-white text-xl">chevron_left</span>
          </button>

          {/* Main image */}
          <img
            src={images[lightboxIndex]}
            alt={`${shopName} gallery ${lightboxIndex + 1}`}
            className="relative z-10 max-w-3xl w-full max-h-[70vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length); }}
            className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all active:scale-95 z-10"
          >
            <span className="material-symbols-outlined text-white text-xl">chevron_right</span>
          </button>

          {/* Thumbnail strip */}
          <div className="relative z-10 flex gap-3 mt-4" onClick={(e) => e.stopPropagation()}>
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`w-16 h-12 rounded-lg overflow-hidden transition-all active:scale-95 ${
                  i === lightboxIndex ? "ring-2 ring-white" : "opacity-50 hover:opacity-80"
                }`}
              >
                <img src={src} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
