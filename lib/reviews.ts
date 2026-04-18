export type UserReview = {
  id: string;
  bookingId: string;
  shopSlug: string;
  shopName: string;
  shopImage: string;
  service: string;
  petName: string;
  rating: number;
  body: string;
  date: string;
  staffName: string;
};

export const REVIEWS: UserReview[] = [
  {
    id: "rv-001",
    bookingId: "bk-003",
    shopSlug: "sniff-pet-salon-hotel",
    shopName: "Sniff Pet Salon & Hotel",
    shopImage: "/studios/sniff-pet-salon-hotel.jpg",
    service: "Royal Bath & Silk Cut",
    petName: "Barnaby",
    rating: 5,
    body: "Barnaby came home looking absolutely radiant — the silk cut was immaculate and he smelled incredible for days. Camille clearly has a gift for reading a dog's temperament. Will be back without question.",
    date: "Nov 15, 2024",
    staffName: "Camille Reyes",
  },
  {
    id: "rv-002",
    bookingId: "bk-004",
    shopSlug: "puffs-n-furr-pet-grooming",
    shopName: "Puffs n Furr Pet Grooming",
    shopImage: "/studios/puffs-n-furr-pet-grooming.jpg",
    service: "Breed-Specific Cut",
    petName: "Luna",
    rating: 4,
    body: "Luna is notoriously fussy during grooming sessions but the team here kept her calm throughout. The breed-specific cut was well done — could have trimmed the tail feathering a touch more, but overall a lovely experience.",
    date: "Oct 3, 2024",
    staffName: "Sofia Ramos",
  },
  {
    id: "rv-003",
    bookingId: "bk-005",
    shopSlug: "chimichooms-ph",
    shopName: "CHIMICHOOMS PH",
    shopImage: "/studios/chimichooms-ph.jpg",
    service: "Aromatherapy Bath & Trim",
    petName: "Barnaby",
    rating: 5,
    body: "The aromatherapy bath was a revelation — Barnaby was visibly relaxed from start to finish. The attention to detail on the trim was exceptional and the studio itself has a beautiful, calm energy. Highly recommend.",
    date: "Sep 19, 2024",
    staffName: "Marco Villanueva",
  },
];
