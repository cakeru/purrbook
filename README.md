# PurrBook

An editorial-grade pet grooming booking platform for discerning pet owners. Built with Next.js 16 App Router, React 19, TypeScript, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** React 19, Tailwind CSS v4
- **Language:** TypeScript 5
- **Maps:** Leaflet 1.9.4
- **Fonts:** Plus Jakarta Sans, Be Vietnam Pro (via Google Fonts)
- **Icons:** Material Symbols Outlined (via Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm / bun)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build    # Production build
npm run start    # Start production server (requires build first)
npm run lint     # Run ESLint
```

## Project Structure

```
app/
  layout.tsx              # Root layout — fonts, metadata
  page.tsx                # Homepage
  globals.css             # Design tokens (@theme) + custom utilities
  profile/page.tsx        # User profile & booking history
  schedule/
    page.tsx              # Step 02 — Reserve Moment
    confirm/page.tsx      # Step 03 — Confirm Care
    confirmed/page.tsx    # Booking success screen
  search/page.tsx         # Search & browse groomers
  shop-details/page.tsx   # Individual groomer profile
components/
  Map.tsx                 # Leaflet map (client component)
  MapWrapper.tsx          # Typed wrapper for Map
public/
  purrbook.png            # Logo
  purrbook_homepage.png   # Hero image
```

## Booking Flow

```
Search → Shop Details → Schedule (Step 02) → Confirm (Step 03) → Confirmed
```
