import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import AIChatWidget from "@/components/AIChatWidget";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-plus-jakarta-sans",
});

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "PurrBook | Premium Pet Grooming",
  description: "Discover editorial-grade grooming and curated pet care experiences.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${beVietnamPro.variable} bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container`}
        style={
          {
            "--font-headline": "var(--font-plus-jakarta-sans)",
            "--font-body": "var(--font-be-vietnam-pro)",
            "--font-label": "var(--font-plus-jakarta-sans)",
          } as React.CSSProperties
        }
      >
        {children}
        <AIChatWidget />
      </body>
    </html>
  );
}
