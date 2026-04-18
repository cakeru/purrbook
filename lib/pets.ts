// ─── Types ────────────────────────────────────────────────────────────────────
export type Filter = "all" | "grooming" | "vet";

export type Vaccination = {
  name: string;
  date: string;
  nextDue: string;
  status: "current" | "due_soon" | "overdue";
};

export type WeightEntry = {
  month: string;
  weight: number;
};

export type CareRecord = {
  id: string;
  type: "grooming" | "vet";
  icon: string;
  provider: string;
  date: string;
  summary: string;
  attendant: { name: string; role: string; rating: number };
  services: string[];
  products: string[];
  notes: string;
  nextRecommended: string;
};

export type UpcomingAppointment = {
  day: string;
  month: string;
  year: string;
  service: string;
  location: string;
  address: string;
  time: string;
  duration: string;
  status: "Confirmed" | "Pending";
};

export type PetProfile = {
  id: string;
  name: string;
  breed: string;
  species: "dog" | "cat";
  gender: "male" | "female";
  age: string;
  weight: string;
  coatType: string;
  image: string;
  joinDate: string;
  traits: string[];
  sessions: number;
  sanctuaries: number;
  nextVisit: string;
  grooming: {
    sensitivity: string;
    preferredStyle: string;
    temperament: string;
    groomerNotes: string;
  };
  upcomingAppointment: UpcomingAppointment;
  careRecords: CareRecord[];
  ai: {
    nextGroomingReason: string;
    seasonalTip: string;
    healthReminder: string;
  };
  birthday: string;
  microchipId: string;
  insurance?: string;
  vetClinic: { name: string; phone: string };
  vaccinations: Vaccination[];
  weightHistory: WeightEntry[];
  photos: string[];
};

// ─── Care Records ─────────────────────────────────────────────────────────────
const BARNABY_RECORDS: CareRecord[] = [
  {
    id: "nov-14-2024",
    type: "grooming",
    icon: "content_cut",
    provider: "The Amber Sanctuary",
    date: "Nov 14, 2024",
    summary: "Royal Bath & Silk Cut · Double coat, no mats",
    attendant: { name: "Camille Reyes", role: "Senior Groomer", rating: 5 },
    services: [
      "Full bath & blow-dry",
      "Silk Cut trim",
      "Nail trim",
      "Ear cleaning",
      "Teeth brushing",
    ],
    products: ["Lavender Shampoo", "Oat Conditioner", "Coat Serum"],
    notes:
      "Barnaby was calm throughout. No matting found. Slight sensitivity near left ear — cleaned gently. Coat is in excellent condition.",
    nextRecommended: "Dec 26, 2024 (6-week cycle)",
  },
  {
    id: "oct-2-2024",
    type: "vet",
    icon: "vaccines",
    provider: "Paws & Furs Animal Clinic",
    date: "Oct 2, 2024",
    summary: "Annual vaccine · Rabies + DHPP booster",
    attendant: { name: "Dr. Lena Cruz", role: "Veterinarian", rating: 5 },
    services: ["Rabies vaccine", "DHPP booster", "Weight check", "General physical exam"],
    products: ["Rabies vaccine (Nobivac)", "DHPP (Vanguard Plus)"],
    notes:
      "Barnaby is in excellent health. Weight stable at 28 kg. No abnormalities detected. Vaccine site normal. Next vaccines due Oct 2025.",
    nextRecommended: "Oct 2, 2025 (annual booster)",
  },
  {
    id: "sep-18-2024",
    type: "grooming",
    icon: "content_cut",
    provider: "Sniff Pet Salon & Hotel",
    date: "Sep 18, 2024",
    summary: "Express groom · Gentle handling noted",
    attendant: { name: "Marco Villanueva", role: "Groomer", rating: 4 },
    services: ["Bath & blow-dry", "Nail trim", "Ear cleaning"],
    products: ["Oatmeal Shampoo", "Detangling Spray"],
    notes:
      "Express session completed in 45 mins. Minor tangling at the flanks — combed out. Barnaby responded well to handling. Recommend full groom next visit.",
    nextRecommended: "Nov 2024 (full groom due)",
  },
  {
    id: "aug-5-2024",
    type: "vet",
    icon: "medical_services",
    provider: "Petvetgo Animal Clinic",
    date: "Aug 5, 2024",
    summary: "Check-up · Healthy weight, clean ears",
    attendant: { name: "Dr. Paolo Mendez", role: "Veterinarian", rating: 5 },
    services: ["Routine check-up", "Ear examination", "Weight & vitals", "Dental inspection"],
    products: ["Ear cleaning solution"],
    notes:
      "All vitals normal. Ears clean with no signs of infection. Teeth show mild tartar — recommend dental chews. Weight at 27.8 kg, within healthy range.",
    nextRecommended: "Feb 2025 (semi-annual check)",
  },
  {
    id: "jul-3-2024",
    type: "grooming",
    icon: "content_cut",
    provider: "The Amber Sanctuary",
    date: "Jul 3, 2024",
    summary: "Full groom · Summer trim, de-shed treatment",
    attendant: { name: "Camille Reyes", role: "Senior Groomer", rating: 5 },
    services: [
      "Full bath & blow-dry",
      "Summer trim",
      "De-shed treatment",
      "Nail trim",
      "Ear cleaning",
    ],
    products: ["De-shedding Shampoo", "Furminator Conditioner", "Finishing Spray"],
    notes:
      "Heavy shedding season — de-shed treatment removed significant undercoat. Coat looks much lighter. Barnaby tolerated the Furminator well. Recommended monthly de-sheds through summer.",
    nextRecommended: "Aug 2024 (monthly de-shed)",
  },
  {
    id: "may-20-2024",
    type: "vet",
    icon: "vaccines",
    provider: "St. Bernard's Pet Shop",
    date: "May 20, 2024",
    summary: "Flea & tick prevention · Monthly treatment",
    attendant: { name: "Dr. Ana Soriano", role: "Veterinarian", rating: 4 },
    services: ["Flea & tick topical application", "Skin inspection", "Weight check"],
    products: ["Frontline Plus (monthly topical)"],
    notes:
      "No signs of fleas or ticks. Skin healthy, no irritation. Frontline Plus applied between shoulder blades. Next application due June 20, 2024.",
    nextRecommended: "Jun 20, 2024 (monthly topical)",
  },
];

const LUNA_RECORDS: CareRecord[] = [
  {
    id: "nov-21-2024",
    type: "grooming",
    icon: "content_cut",
    provider: "Pet Station Grooming Salon",
    date: "Nov 21, 2024",
    summary: "Breed-Specific Cut · Full coat styling for Persian",
    attendant: { name: "Sofia Ramos", role: "Feline Specialist", rating: 5 },
    services: [
      "Full bath & blow-dry",
      "Persian breed cut",
      "Dematting",
      "Nail trim",
      "Ear cleaning",
    ],
    products: ["Silk Protein Shampoo", "Detangling Conditioner", "Finishing Spray"],
    notes:
      "Luna was calm and cooperative throughout. Light matting found near the neck — resolved gently. Coat is silky and in excellent condition post-session.",
    nextRecommended: "Jan 2025 (6-week cycle for long-coat breeds)",
  },
  {
    id: "sep-10-2024",
    type: "vet",
    icon: "vaccines",
    provider: "Vet Soucier Veterinary & Grooming",
    date: "Sep 10, 2024",
    summary: "Annual wellness check · Healthy vitals",
    attendant: { name: "Dr. Reina Villanueva", role: "Veterinarian", rating: 5 },
    services: [
      "Annual wellness exam",
      "Weight & vitals",
      "Dental check",
      "Feline distemper booster",
    ],
    products: ["Feline Distemper Vaccine (Felocell 4)"],
    notes:
      "Luna is in excellent health. Weight at 4 kg, ideal for Persian breed. Coat condition praised. No dental issues noted. Annual booster administered without complications.",
    nextRecommended: "Sep 2025 (annual booster)",
  },
  {
    id: "aug-3-2024",
    type: "grooming",
    icon: "content_cut",
    provider: "Pet Station Grooming Salon",
    date: "Aug 3, 2024",
    summary: "Sanitary trim & express bath",
    attendant: { name: "Sofia Ramos", role: "Feline Specialist", rating: 5 },
    services: ["Sanitary trim", "Express bath & dry", "Nail filing"],
    products: ["Hypoallergenic Shampoo", "Leave-in Conditioner"],
    notes:
      "Short session for maintenance grooming. Luna tolerates the dryer well now compared to earlier visits. No tangling found. Coat growing nicely from last cut.",
    nextRecommended: "Sep 2024 (monthly maintenance)",
  },
];

// ─── Pet Data ─────────────────────────────────────────────────────────────────
export const PETS: PetProfile[] = [
  {
    id: "barnaby",
    name: "Barnaby",
    breed: "Golden Retriever",
    species: "dog",
    gender: "male",
    age: "3",
    weight: "28",
    coatType: "Double coat",
    image: "/pets/Barnaby.jpg",
    joinDate: "Jan 2024",
    traits: ["Double Coat", "Gentle Temperament", "Loves Water"],
    sessions: 8,
    sanctuaries: 4,
    nextVisit: "Nov 14",
    grooming: {
      sensitivity: "None noted",
      preferredStyle: "Silk Cut finish",
      temperament: "Gentle, good with strangers",
      groomerNotes:
        "Barnaby responds well to warm water and lavender-scented products. Slight anxiety with nail trims — recommend breaks between paws. Loves praise and treats during blow-dry.",
    },
    upcomingAppointment: {
      day: "14",
      month: "Nov",
      year: "2024",
      service: 'The "Royal Bath" & Silk Cut',
      location: "The Amber Sanctuary",
      address: "San Vicente, Tarlac City",
      time: "11:15 AM",
      duration: "~90 min session",
      status: "Confirmed",
    },
    careRecords: BARNABY_RECORDS,
    ai: {
      nextGroomingReason:
        "Based on Barnaby's double coat and last visit on Nov 14, his next session is due around Dec 26, 2024 (6-week cycle).",
      seasonalTip:
        "Dry season ahead in Tarlac City. Consider a hydrating treatment and increased brushing frequency to prevent matting in Barnaby's double coat.",
      healthReminder:
        "Barnaby's next DHPP booster is due in October 2025. Schedule a vet check at least 2 weeks in advance.",
    },
    birthday: "March 15, 2021",
    microchipId: "985 121 012 345 678",
    insurance: "PawShield PH",
    vetClinic: { name: "Paws & Furs Animal Clinic", phone: "+63 920 123 4567" },
    vaccinations: [
      { name: "Rabies", date: "Oct 2, 2024", nextDue: "Oct 2, 2025", status: "current" },
      { name: "DHLPP", date: "Oct 2, 2024", nextDue: "Oct 2, 2025", status: "current" },
      { name: "Bordetella", date: "Apr 5, 2024", nextDue: "Apr 5, 2025", status: "due_soon" },
      { name: "Leptospirosis", date: "Oct 2, 2024", nextDue: "Oct 2, 2025", status: "current" },
    ],
    weightHistory: [
      { month: "May 2024", weight: 22 },
      { month: "Jun 2024", weight: 23.5 },
      { month: "Jul 2024", weight: 25 },
      { month: "Aug 2024", weight: 26.5 },
      { month: "Sep 2024", weight: 27.8 },
      { month: "Nov 2024", weight: 28 },
    ],
    photos: [
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80",
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=800&q=80",
    ],
  },
  {
    id: "luna",
    name: "Luna",
    breed: "Persian Cat",
    species: "cat",
    gender: "female",
    age: "2",
    weight: "4",
    coatType: "Silky long coat",
    image: "/pets/Luna.jpg",
    joinDate: "Mar 2024",
    traits: ["Long Coat", "Calm Temperament", "Indoor Cat"],
    sessions: 3,
    sanctuaries: 2,
    nextVisit: "Nov 21",
    grooming: {
      sensitivity: "Mild — prefers cool water",
      preferredStyle: "Full Persian breed cut",
      temperament: "Calm, prefers quiet environments",
      groomerNotes:
        "Luna responds best to a calm, unhurried approach. Cool water preferred. Avoid loud dryers — use low-heat diffuser. Requires gentle detangling around the neck and belly.",
    },
    upcomingAppointment: {
      day: "21",
      month: "Nov",
      year: "2024",
      service: "Breed-Specific Cut",
      location: "Pet Station Grooming Salon",
      address: "San Sebastian Rd, Tarlac City",
      time: "10:30 AM",
      duration: "~75 min session",
      status: "Pending",
    },
    careRecords: LUNA_RECORDS,
    ai: {
      nextGroomingReason:
        "Based on Luna's long Persian coat and last session on Nov 21, her next full groom is recommended around January 2025 to maintain coat health.",
      seasonalTip:
        "Dry season can cause static and frizz in Persian coats. A weekly brushing routine and a light leave-in conditioner will keep Luna's coat smooth and tangle-free.",
      healthReminder:
        "Luna's annual feline distemper booster is due in September 2025. Schedule 2 weeks in advance at Vet Soucier or your preferred clinic.",
    },
    birthday: "June 4, 2022",
    microchipId: "985 121 098 765 432",
    insurance: "PawShield PH",
    vetClinic: { name: "Petvetgo Animal Clinic & Wellness", phone: "+63 921 234 5678" },
    vaccinations: [
      { name: "Rabies", date: "Sep 10, 2024", nextDue: "Sep 10, 2025", status: "current" },
      { name: "FVRCP", date: "Mar 15, 2024", nextDue: "Mar 15, 2025", status: "due_soon" },
      { name: "FeLV", date: "Sep 10, 2024", nextDue: "Sep 10, 2025", status: "current" },
    ],
    weightHistory: [
      { month: "May 2024", weight: 3.5 },
      { month: "Jun 2024", weight: 3.6 },
      { month: "Jul 2024", weight: 3.7 },
      { month: "Aug 2024", weight: 3.8 },
      { month: "Sep 2024", weight: 3.9 },
      { month: "Nov 2024", weight: 4 },
    ],
    photos: [
      "https://images.unsplash.com/photo-1518791841217-8f162f1912da?w=800&q=80",
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=800&q=80",
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&q=80",
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
export function getPetById(id: string): PetProfile | undefined {
  return PETS.find((p) => p.id === id);
}
