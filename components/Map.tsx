"use client";

import { useEffect, useRef } from "react";

export interface ShopMarker {
  position: [number, number];
  label: string;
  rating?: number;
  distance?: string;
  hours?: string;
  href?: string;
}

interface MapProps {
  center?: [number, number];
  zoom?: number;
  markers?: ShopMarker[];
}

function buildPopupHtml(marker: ShopMarker): string {
  const stars = marker.rating
    ? "★".repeat(Math.floor(marker.rating)) + (marker.rating % 1 >= 0.5 ? "½" : "")
    : "";

  return `
    <div style="font-family: 'Be Vietnam Pro', sans-serif; min-width: 180px; padding: 4px 2px;">
      <p style="font-weight: 800; font-size: 15px; margin: 0 0 4px; color: #303330;">${marker.label}</p>
      ${marker.rating ? `<p style="margin: 0 0 4px; color: #845500; font-size: 13px; font-weight: 600;">${stars} ${marker.rating}</p>` : ""}
      ${marker.distance ? `<p style="margin: 0 0 2px; font-size: 12px; color: #5d605c;">📍 ${marker.distance} away</p>` : ""}
      ${marker.hours ? `<p style="margin: 0 0 8px; font-size: 12px; color: #5d605c;">🕐 ${marker.hours}</p>` : ""}
      ${marker.href ? `<a href="${marker.href}" style="display:inline-block; background:#914d00; color:#fff7f4; padding: 6px 14px; border-radius: 999px; font-size: 12px; font-weight: 700; text-decoration: none;">View Details →</a>` : ""}
    </div>
  `;
}

export default function Map({ center = [15.4755, 120.5963], zoom = 14, markers = [] }: MapProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<unknown>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let isMounted = true;

    import("leaflet").then((L) => {
      if (!isMounted || !containerRef.current) return;

      const map = L.map(containerRef.current, {
        center,
        zoom,
        scrollWheelZoom: false,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const icon = L.icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      markers.forEach((m) => {
        L.marker(m.position, { icon }).addTo(map).bindPopup(buildPopupHtml(m), { maxWidth: 240 });
      });

      mapRef.current = map;
    });

    return () => {
      isMounted = false;
      if (mapRef.current) {
        (mapRef.current as { remove: () => void }).remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
}
