"use client";

import Map, { ShopMarker } from "./Map";

interface MapWrapperProps {
  center?: [number, number];
  zoom?: number;
  markers?: ShopMarker[];
}

export default function MapWrapper(props: MapWrapperProps) {
  return <Map {...props} />;
}
