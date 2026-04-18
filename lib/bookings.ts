export type UserBookingStatus = "upcoming" | "completed" | "cancelled";

export type UserBooking = {
  id: string;
  refNumber: string;
  shopSlug: string;
  shopName: string;
  shopImage: string;
  shopAddress: string;
  petName: string;
  petSpecies: "dog" | "cat";
  service: string;
  date: string;
  time: string;
  duration: string;
  price: number;
  status: UserBookingStatus;
};

export const BOOKINGS: UserBooking[] = [
  {
    id: "bk-001",
    refNumber: "PB-20241128-0051",
    shopSlug: "the-amber-sanctuary",
    shopName: "The Amber Sanctuary",
    shopImage: "/studios/sniff-pet-salon-hotel.jpg",
    shopAddress: "127 San Vicente, Tarlac City, 2300 Tarlac",
    petName: "Barnaby",
    petSpecies: "dog",
    service: "Royal Bath & Silk Cut",
    date: "Nov 28, 2024",
    time: "10:00 AM",
    duration: "90 min",
    price: 1200,
    status: "upcoming",
  },
  {
    id: "bk-002",
    refNumber: "PB-20241203-0058",
    shopSlug: "sniff-pet-salon-hotel",
    shopName: "Sniff Pet Salon & Hotel",
    shopImage: "/studios/sniff-pet-salon-hotel.jpg",
    shopAddress: "127 San Vicente, Tarlac City, 2300 Tarlac",
    petName: "Luna",
    petSpecies: "cat",
    service: "Feline Silk Blowout",
    date: "Dec 3, 2024",
    time: "2:00 PM",
    duration: "60 min",
    price: 850,
    status: "upcoming",
  },
  {
    id: "bk-003",
    refNumber: "PB-20241114-0042",
    shopSlug: "sniff-pet-salon-hotel",
    shopName: "Sniff Pet Salon & Hotel",
    shopImage: "/studios/sniff-pet-salon-hotel.jpg",
    shopAddress: "127 San Vicente, Tarlac City, 2300 Tarlac",
    petName: "Barnaby",
    petSpecies: "dog",
    service: "Royal Bath & Silk Cut",
    date: "Nov 14, 2024",
    time: "11:15 AM",
    duration: "90 min",
    price: 1200,
    status: "completed",
  },
  {
    id: "bk-004",
    refNumber: "PB-20241002-0031",
    shopSlug: "puffs-n-furr-pet-grooming",
    shopName: "Puffs n Furr Pet Grooming",
    shopImage: "/studios/puffs-n-furr-pet-grooming.jpg",
    shopAddress: "56 Luna St, Tarlac City, 2300 Tarlac",
    petName: "Luna",
    petSpecies: "cat",
    service: "Breed-Specific Cut",
    date: "Oct 2, 2024",
    time: "3:30 PM",
    duration: "60 min",
    price: 650,
    status: "completed",
  },
  {
    id: "bk-005",
    refNumber: "PB-20240918-0024",
    shopSlug: "chimichooms-ph",
    shopName: "CHIMICHOOMS PH",
    shopImage: "/studios/chimichooms-ph.jpg",
    shopAddress: "77 Rizal Ave, Tarlac City, 2300 Tarlac",
    petName: "Barnaby",
    petSpecies: "dog",
    service: "Aromatherapy Bath & Trim",
    date: "Sep 18, 2024",
    time: "9:00 AM",
    duration: "75 min",
    price: 950,
    status: "completed",
  },
  {
    id: "bk-006",
    refNumber: "PB-20241101-0047",
    shopSlug: "pet-station-grooming-salon",
    shopName: "Pet Station Grooming Salon",
    shopImage: "/studios/pet-station-grooming-salon.jpg",
    shopAddress: "43 San Sebastian Rd, Tarlac City, 2300 Tarlac",
    petName: "Barnaby",
    petSpecies: "dog",
    service: "Full Groom & Spa",
    date: "Nov 1, 2024",
    time: "1:00 PM",
    duration: "120 min",
    price: 1500,
    status: "cancelled",
  },
  {
    id: "bk-007",
    refNumber: "PB-20240825-0019",
    shopSlug: "st-bernards-pet-shop",
    shopName: "St. Bernard's Pet Shop",
    shopImage: "/studios/st-bernards-pet-shop.jpg",
    shopAddress: "88 Matatalaib, Sto. Cristo, Tarlac City, 2300 Tarlac",
    petName: "Luna",
    petSpecies: "cat",
    service: "Feline De-shedding Treatment",
    date: "Aug 25, 2024",
    time: "4:00 PM",
    duration: "45 min",
    price: 550,
    status: "cancelled",
  },
];
