// ─── Types ────────────────────────────────────────────────────────────────────
export type ServiceItem = {
  icon: string;
  colorClass: string;
  name: string;
  description: string;
  price: string;
  duration: string;
};

export type Shop = {
  id: number;
  slug: string;
  label: string;
  position: [number, number];
  rating: number;
  distance: string;
  hours: string;
  href: string;
  category: string;
  description: string;
  longDescription: string;
  price: string;
  services: string[];
  amenities: string[];
  image: string;
  gallery: string[];
  address: string;
  openHours: string;
  detailServices: ServiceItem[];
  featured?: boolean;
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
/** Pinned Unsplash pet photo URLs — always return the same image. */
const u = (id: string, w: number, h: number) =>
  `https://images.unsplash.com/${id}?w=${w}&h=${h}&fit=crop&auto=format`;

// A pool of 12 vetted pet / grooming Unsplash photo IDs
const P = {
  goldenBath: "photo-1587300003388-59208cc962cb",
  dogGroom: "photo-1596492784531-6e6eb5ea9993",
  fluffyDog: "photo-1583511655857-d19b40a7a54e",
  shibas: "photo-1548199973-03cce0bbc87b",
  funnyDog: "photo-1517849845537-4d257902454a",
  dogBath: "photo-1576201836106-db1758fd1c97",
  orangeCat: "photo-1574158622682-e40e69881006",
  catPet: "photo-1558788353-f76d92427f16",
  goldenHappy: "photo-1534361960057-19f4434e8a28",
  bulldog: "photo-1593134257782-e89567b7718a",
  whiteCat: "photo-1601758003122-53c40e686a19",
  husky: "photo-1537123547273-e59f4b5c4dc5",
};

/** Build a 4-slot gallery array for the detail page grid. */
const gallery = (a: string, b: string, c: string, d: string): string[] => [
  u(a, 600, 600),
  u(b, 600, 300),
  u(c, 300, 300),
  u(d, 300, 300),
];

// ─── Service packages ─────────────────────────────────────────────────────────
// Prices based on Tarlac City averages:
//   Small breed dogs:   ₱400 – ₱500
//   Medium/Large dogs:  ₱600 – ₱750+
//   Cat grooming:       ₱400 – ₱600
//   Home service:       ₱450 – ₱750

const SERVICES_PREMIUM: ServiceItem[] = [
  {
    icon: "wash",
    colorClass: "text-primary bg-primary-container/20",
    name: "The Signature Soak",
    description:
      "Double organic wash, botanical mask, blow-dry, and ear hygiene.",
    price: "₱480",
    duration: "60 MIN",
  },
  {
    icon: "content_cut",
    colorClass: "text-secondary bg-secondary-container/20",
    name: "Editorial Styling",
    description:
      "Precision hand-scissoring, breed-specific shaping, and finishing fragrance.",
    price: "₱650",
    duration: "120 MIN",
  },
  {
    icon: "pets",
    colorClass: "text-tertiary bg-tertiary-container/20",
    name: "Puppy's First Spa",
    description:
      "Desensitization-focused session with gentle products and treats.",
    price: "₱400",
    duration: "45 MIN",
  },
  {
    icon: "handyman",
    colorClass: "text-primary bg-primary-container/20",
    name: "Nail Trim & Ear Clean",
    description:
      "Precision nail filing, grinding, and gentle ear cleaning using botanical solutions.",
    price: "₱180",
    duration: "20 MIN",
  },
  {
    icon: "dentistry",
    colorClass: "text-secondary bg-secondary-container/20",
    name: "Dental Brushing",
    description:
      "Gentle teeth brushing with pet-safe enzymatic toothpaste. Essential for oral hygiene.",
    price: "₱150",
    duration: "15 MIN",
  },
  {
    icon: "air",
    colorClass: "text-tertiary bg-tertiary-container/20",
    name: "De-shedding Treatment",
    description:
      "High-velocity drying and thorough brush-out to remove seasonal undercoat.",
    price: "₱550",
    duration: "60 MIN",
  },
];

const SERVICES_CLINIC: ServiceItem[] = [
  {
    icon: "ecg_heart",
    colorClass: "text-primary bg-primary-container/20",
    name: "Wellness Consultation",
    description:
      "Comprehensive health check, weight monitoring, and nutritional guidance.",
    price: "₱500",
    duration: "30 MIN",
  },
  {
    icon: "vaccines",
    colorClass: "text-secondary bg-secondary-container/20",
    name: "Vaccination Package",
    description:
      "Core and non-core vaccines tailored to your pet's age and lifestyle.",
    price: "₱450",
    duration: "45 MIN",
  },
  {
    icon: "wash",
    colorClass: "text-tertiary bg-tertiary-container/20",
    name: "Medical Grooming",
    description:
      "Therapeutic bath with medicated shampoo, drying, and coat treatment.",
    price: "₱520",
    duration: "90 MIN",
  },
  {
    icon: "stethoscope",
    colorClass: "text-primary bg-primary-container/20",
    name: "Annual Check-up",
    description:
      "Full physical exam by our in-house veterinarian including vitals and health assessment.",
    price: "₱600",
    duration: "45 MIN",
  },
  {
    icon: "dentistry",
    colorClass: "text-secondary bg-secondary-container/20",
    name: "Dental Scaling",
    description:
      "Professional plaque and tartar removal under light sedation for a clean, healthy mouth.",
    price: "₱1,200",
    duration: "60 MIN",
  },
  {
    icon: "medication",
    colorClass: "text-tertiary bg-tertiary-container/20",
    name: "Deworming Package",
    description:
      "Broad-spectrum deworming treatment with follow-up schedule and parasite prevention guidance.",
    price: "₱350",
    duration: "20 MIN",
  },
];

const SERVICES_SHOP: ServiceItem[] = [
  {
    icon: "wash",
    colorClass: "text-primary bg-primary-container/20",
    name: "Basic Bath & Brush",
    description:
      "Gentle bath, blow-dry, brushing, and light trimming for all breeds.",
    price: "₱400",
    duration: "45 MIN",
  },
  {
    icon: "air",
    colorClass: "text-secondary bg-secondary-container/20",
    name: "De-shedding Treatment",
    description:
      "Professional de-shedding shampoo, high-velocity drying, and thorough brush-out.",
    price: "₱600",
    duration: "60 MIN",
  },
  {
    icon: "content_cut",
    colorClass: "text-tertiary bg-tertiary-container/20",
    name: "Nail & Ear Care",
    description:
      "Nail clipping, grinding, ear cleaning, and paw balm application.",
    price: "₱180",
    duration: "20 MIN",
  },
  {
    icon: "pets",
    colorClass: "text-primary bg-primary-container/20",
    name: "Full Groom Package",
    description:
      "Bath, haircut, nail trim, ear clean, and finishing spray — everything in one visit.",
    price: "₱850",
    duration: "120 MIN",
  },
  {
    icon: "dentistry",
    colorClass: "text-secondary bg-secondary-container/20",
    name: "Teeth Brushing",
    description:
      "Quick but effective brushing with pet-safe toothpaste. Great as a recurring add-on.",
    price: "₱150",
    duration: "15 MIN",
  },
  {
    icon: "bug_report",
    colorClass: "text-tertiary bg-tertiary-container/20",
    name: "Flea & Tick Treatment",
    description:
      "Medicated bath and topical application to eliminate and prevent flea and tick infestations.",
    price: "₱480",
    duration: "45 MIN",
  },
];

export const SHOPS: Shop[] = [
  {
    id: 0,
    slug: "sniff-pet-salon-hotel",
    label: "Sniff Pet Salon & Hotel",
    position: [15.478, 120.592],
    rating: 4.9,
    distance: "0.5",
    hours: "Open until 7PM",
    href: "/shop-details/sniff-pet-salon-hotel",
    category: "Full-Service Hotel",
    description:
      "Full-service pet salon and hotel in Tarlac City — grooming, boarding, and daycare all under one roof.",
    longDescription:
      "Full-service pet salon and hotel in Tarlac City — grooming, boarding, and daycare all under one roof. Your pet gets a personalized care plan from check-in to check-out.",
    price: "From ₱450",
    services: ["Grooming", "Boarding"],
    amenities: ["Live Camera", "Luxury Suite", "Organic Treats"],
    image: "/studios/sniff-pet-salon-hotel.jpg",
    gallery: gallery(P.goldenBath, P.dogGroom, P.fluffyDog, P.shibas),
    address: "127 San Vicente, Tarlac City, 2300 Tarlac",
    openHours: "09:00 – 19:00",
    detailServices: SERVICES_PREMIUM,
    featured: true,
  },
  {
    id: 1,
    slug: "pet-station-grooming-salon",
    label: "Pet Station Grooming Salon",
    position: [15.4765, 120.602],
    rating: 4.7,
    distance: "0.7",
    hours: "Open until 6PM",
    href: "/shop-details/pet-station-grooming-salon",
    category: "San Sebastian",
    description:
      "Professional grooming services with expert stylists trained in breed-specific cuts and premium treatments.",
    longDescription:
      "Professional grooming services with expert stylists trained in breed-specific cuts and premium treatments. Every session ends with a signature finishing spray and bow.",
    price: "From ₱480",
    services: ["Grooming", "Training"],
    amenities: ["Organic Treats"],
    image: "/studios/pet-station-grooming-salon.jpg",
    gallery: gallery(P.dogGroom, P.fluffyDog, P.shibas, P.funnyDog),
    address: "43 San Sebastian Rd, Tarlac City, 2300 Tarlac",
    openHours: "09:00 – 18:00",
    detailServices: SERVICES_PREMIUM,
  },
  {
    id: 2,
    slug: "st-bernards-pet-shop",
    label: "St. Bernard's Pet Shop",
    position: [15.47, 120.589],
    rating: 4.8,
    distance: "1.5",
    hours: "Open until 8PM",
    href: "/shop-details/st-bernards-pet-shop",
    category: "Boutique Shop",
    description:
      "Cozy pet boutique offering premium grooming, curated pet accessories, and personalized care for all breeds.",
    longDescription:
      "Cozy pet boutique offering premium grooming, curated pet accessories, and personalized care for all breeds. A neighborhood favorite with a warm, welcoming atmosphere.",
    price: "From ₱400",
    services: ["Grooming"],
    amenities: ["Organic Treats"],
    image: "/studios/st-bernards-pet-shop.jpg",
    gallery: gallery(P.fluffyDog, P.shibas, P.funnyDog, P.dogBath),
    address: "88 Matatalaib, Sto. Cristo, Tarlac City, 2300 Tarlac",
    openHours: "09:00 – 20:00",
    detailServices: SERVICES_SHOP,
  },
  {
    id: 3,
    slug: "paws-furs-animal-clinic",
    label: "Paws & Furs Animal Clinic",
    position: [15.475, 120.597],
    rating: 4.6,
    distance: "0.2",
    hours: "Open until 6PM",
    href: "/shop-details/paws-furs-animal-clinic",
    category: "Sto. Cristo",
    description:
      "Animal clinic offering wellness checks, vaccinations, and professional grooming all in one convenient location.",
    longDescription:
      "Animal clinic offering wellness checks, vaccinations, and professional grooming all in one convenient location. Their licensed vets and groomers work as one seamless team.",
    price: "From ₱450",
    services: ["Grooming", "Therapy"],
    amenities: ["Live Camera"],
    image: "/studios/paws-furs-animal-clinic.jpg",
    gallery: gallery(P.orangeCat, P.catPet, P.goldenBath, P.goldenHappy),
    address: "12 Zamora St, Sto. Cristo, Tarlac City, 2300 Tarlac",
    openHours: "08:00 – 18:00",
    detailServices: SERVICES_CLINIC,
  },
  {
    id: 4,
    slug: "puffs-n-furr-pet-grooming",
    label: "Puffs n Furr Pet Grooming",
    position: [15.481, 120.599],
    rating: 4.5,
    distance: "0.8",
    hours: "Open until 5PM",
    href: "/shop-details/puffs-n-furr-pet-grooming",
    category: "Boutique Grooming",
    description:
      "Friendly neighborhood grooming with gentle handling and personalized care for all breeds and sizes.",
    longDescription:
      "Friendly neighborhood grooming with gentle handling and personalized care for all breeds and sizes. Walk-ins welcome — no stressful wait times.",
    price: "From ₱420",
    services: ["Grooming"],
    amenities: ["Organic Treats"],
    image: "/studios/puffs-n-furr-pet-grooming.jpg",
    gallery: gallery(P.funnyDog, P.goldenBath, P.dogGroom, P.dogBath),
    address: "56 Luna St, Tarlac City, 2300 Tarlac",
    openHours: "09:00 – 17:00",
    detailServices: SERVICES_PREMIUM,
  },
  {
    id: 5,
    slug: "vet-soucier-veterinary-grooming",
    label: "Vet Soucier Veterinary & Grooming",
    position: [15.473, 120.594],
    rating: 4.8,
    distance: "0.4",
    hours: "Open until 7PM",
    href: "/shop-details/vet-soucier-veterinary-grooming",
    category: "Veterinary & Grooming",
    description:
      "Combined veterinary clinic and grooming center offering comprehensive pet health and beauty care.",
    longDescription:
      "Combined veterinary clinic and grooming center offering comprehensive pet health and beauty care. Backed by a team of licensed veterinarians and certified pet groomers.",
    price: "From ₱480",
    services: ["Grooming", "Therapy"],
    amenities: ["Live Camera"],
    image: "/studios/vet-soucier-veterinary-grooming.jpg",
    gallery: gallery(P.catPet, P.orangeCat, P.whiteCat, P.goldenHappy),
    address: "34 San Roque, Tarlac City, 2300 Tarlac",
    openHours: "08:00 – 19:00",
    detailServices: SERVICES_CLINIC,
  },
  {
    id: 6,
    slug: "petvetgo-animal-clinic-wellness",
    label: "Petvetgo Animal Clinic & Wellness",
    position: [15.479, 120.604],
    rating: 4.9,
    distance: "0.9",
    hours: "Open until 6PM",
    href: "/shop-details/petvetgo-animal-clinic-wellness",
    category: "Animal Wellness",
    description:
      "Modern animal clinic focused on preventive care, grooming, and holistic wellness treatments.",
    longDescription:
      "Modern animal clinic focused on preventive care, grooming, and holistic wellness treatments. Integrates traditional veterinary practice with alternative pet wellness approaches.",
    price: "From ₱500",
    services: ["Grooming", "Therapy"],
    amenities: ["Live Camera", "Organic Treats"],
    image: "/studios/petvetgo-animal-clinic-wellness.jpg",
    gallery: gallery(P.goldenHappy, P.dogGroom, P.goldenBath, P.orangeCat),
    address: "91 Del Pilar St, Tarlac City, 2300 Tarlac",
    openHours: "08:00 – 18:00",
    detailServices: SERVICES_CLINIC,
  },
  {
    id: 7,
    slug: "chimichooms-ph",
    label: "CHIMICHOOMS PH",
    position: [15.474, 120.591],
    rating: 4.7,
    distance: "0.6",
    hours: "Open until 7PM",
    href: "/shop-details/chimichooms-ph",
    category: "Boutique Grooming",
    description:
      "Trendy boutique grooming salon known for creative styling and gentle breed-specific treatments.",
    longDescription:
      "Trendy boutique grooming salon known for creative styling and gentle breed-specific treatments. Popular for creative cuts and fun, stress-free grooming sessions.",
    price: "From ₱450",
    services: ["Grooming"],
    amenities: ["Organic Treats"],
    image: "/studios/chimichooms-ph.jpg",
    gallery: gallery(P.shibas, P.funnyDog, P.fluffyDog, P.dogGroom),
    address: "77 Rizal Ave, Tarlac City, 2300 Tarlac",
    openHours: "09:00 – 19:00",
    detailServices: SERVICES_PREMIUM,
  },
  {
    id: 8,
    slug: "paws-claws-pet-supplies",
    label: "Paws & Claws Pet Supplies",
    position: [15.482, 120.595],
    rating: 4.6,
    distance: "0.8",
    hours: "Open until 6PM",
    href: "/shop-details/paws-claws-pet-supplies",
    category: "Pet Supplies & Grooming",
    description:
      "One-stop shop for premium pet supplies, grooming services, and expert pet care advice.",
    longDescription:
      "One-stop shop for premium pet supplies, grooming services, and expert pet care advice. Carries an extensive range of locally-sourced and imported pet products.",
    price: "From ₱400",
    services: ["Grooming"],
    amenities: ["Organic Treats"],
    image: "/studios/paws-claws-pet-supplies.png",
    gallery: gallery(P.bulldog, P.goldenBath, P.shibas, P.funnyDog),
    address: "15 Macabulos Dr, Tarlac City, 2300 Tarlac",
    openHours: "09:00 – 18:00",
    detailServices: SERVICES_SHOP,
  },
  {
    id: 9,
    slug: "petorria-animal-clinic-grooming",
    label: "Petorria Animal Clinic & Grooming",
    position: [15.477, 120.598],
    rating: 4.8,
    distance: "0.3",
    hours: "Open until 7PM",
    href: "/shop-details/petorria-animal-clinic-grooming",
    category: "Clinic & Grooming",
    description:
      "Trusted animal clinic combining veterinary services with professional grooming and wellness care.",
    longDescription:
      "Trusted animal clinic combining veterinary services with professional grooming and wellness care. Known for their calm, low-stress handling techniques for anxious pets.",
    price: "From ₱460",
    services: ["Grooming", "Therapy"],
    amenities: ["Live Camera"],
    image: "/studios/petorria-animal-clinic-grooming.jpg",
    gallery: gallery(P.dogBath, P.goldenHappy, P.orangeCat, P.catPet),
    address: "63 Burgos St, Tarlac City, 2300 Tarlac",
    openHours: "08:00 – 19:00",
    detailServices: SERVICES_CLINIC,
  },
  {
    id: 10,
    slug: "matias-pet-shop",
    label: "Matias Pet Shop",
    position: [15.471, 120.601],
    rating: 4.5,
    distance: "1.1",
    hours: "Open until 6PM",
    href: "/shop-details/matias-pet-shop",
    category: "Pet Shop & Grooming",
    description:
      "Family-run pet shop with affordable grooming services, pet accessories, and knowledgeable staff.",
    longDescription:
      "Family-run pet shop with affordable grooming services, pet accessories, and knowledgeable staff. Serving the Tarlac community for over a decade with genuine care.",
    price: "From ₱400",
    services: ["Grooming", "Boarding"],
    amenities: ["Organic Treats"],
    image: "/studios/matias-pet-shop.png",
    gallery: gallery(P.husky, P.fluffyDog, P.shibas, P.goldenBath),
    address: "22 Valdez St, Tarlac City, 2300 Tarlac",
    openHours: "09:00 – 18:00",
    detailServices: SERVICES_SHOP,
  },
  {
    id: 11,
    slug: "jd-petshop",
    label: "J.&.D Petshop",
    position: [15.48, 120.588],
    rating: 4.4,
    distance: "0.7",
    hours: "Open until 5PM",
    href: "/shop-details/jd-petshop",
    category: "Pet Shop",
    description:
      "Budget-friendly pet shop and grooming center with reliable services for everyday pet care needs.",
    longDescription:
      "Budget-friendly pet shop and grooming center with reliable services for everyday pet care needs. Great value without compromising the safety and comfort of your pet.",
    price: "From ₱380",
    services: ["Grooming"],
    amenities: [],
    image: "/studios/jd-petshop.jpg",
    gallery: gallery(P.funnyDog, P.shibas, P.fluffyDog, P.dogGroom),
    address: "48 Ligtasan Rd, Tarlac City, 2300 Tarlac",
    openHours: "09:00 – 17:00",
    detailServices: SERVICES_SHOP,
  },
  {
    id: 12,
    slug: "angeles-pet-care-center-tarlac",
    label: "Angeles Pet Care Center Tarlac",
    position: [15.483, 120.603],
    rating: 4.7,
    distance: "1.0",
    hours: "Open until 7PM",
    href: "/shop-details/angeles-pet-care-center-tarlac",
    category: "Full-Service Pet Care",
    description:
      "Comprehensive pet care center offering grooming, boarding, training, and veterinary consultations.",
    longDescription:
      "Comprehensive pet care center offering grooming, boarding, training, and veterinary consultations. One of the most complete pet facilities in Tarlac with over 15 years of service.",
    price: "From ₱490",
    services: ["Grooming", "Boarding", "Training", "Therapy"],
    amenities: ["Live Camera", "Luxury Suite"],
    image: "/studios/angeles-pet-care-center-tarlac.jpg",
    gallery: gallery(P.dogGroom, P.goldenBath, P.dogBath, P.goldenHappy),
    address: "105 MacArthur Hwy, Tarlac City, 2300 Tarlac",
    openHours: "08:00 – 19:00",
    detailServices: SERVICES_PREMIUM,
  },
];

export function getShopBySlug(slug: string): Shop | undefined {
  return SHOPS.find((s) => s.slug === slug);
}

export const MAP_MARKERS = SHOPS.map((s) => ({
  position: s.position,
  label: s.label,
  rating: s.rating,
  distance: s.distance + " km",
  hours: s.hours,
  href: s.href,
}));
