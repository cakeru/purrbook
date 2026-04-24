export type ShopReview = {
  consumerName: string;
  petName: string;
  petBreed: string;
  rating: number;
  body: string;
  date: string;
};

export const SHOP_REVIEWS: Record<string, ShopReview[]> = {
  "sniff-pet-salon-hotel": [
    { consumerName: "Camille R.", petName: "Barnaby", petBreed: "Golden Retriever", rating: 5, body: "Barnaby came out looking absolutely regal. The botanical soak left his coat silkier than I've ever seen — and he was visibly calm the entire time. This is our sanctuary now.", date: "Apr 14, 2026" },
    { consumerName: "Trisha M.", petName: "Mochi", petBreed: "Shih Tzu", rating: 5, body: "Booked the Editorial Styling for Mochi and honestly she looked like she stepped out of a pet magazine. The attention to breed-specific shaping is unmatched in Tarlac.", date: "Apr 9, 2026" },
    { consumerName: "Paolo V.", petName: "Kira", petBreed: "Siberian Husky", rating: 4, body: "Great experience overall. The de-shedding treatment made a huge difference — our floors have been fur-free for two weeks. Only minor note: wait time was a bit longer than expected.", date: "Mar 28, 2026" },
    { consumerName: "Lea G.", petName: "Churro", petBreed: "Toy Poodle", rating: 5, body: "Churro's Puppy First Spa session was perfect. The groomers were so patient and gentle — he didn't whimper once. We'll be coming back every month.", date: "Mar 15, 2026" },
  ],
  "pet-station-grooming-salon": [
    { consumerName: "Nico A.", petName: "Bruno", petBreed: "Labrador", rating: 5, body: "Incredibly professional team. Bruno is notoriously anxious around strangers but they handled him with such care. The finishing fragrance is subtle and lovely.", date: "Apr 11, 2026" },
    { consumerName: "Sofia E.", petName: "Luna", petBreed: "Persian Cat", rating: 4, body: "Luna usually hates grooming but she seemed at ease here. Coat came out beautifully fluffed. The nail trim was precise — no bleeding, no stress.", date: "Mar 30, 2026" },
    { consumerName: "Marco D.", petName: "Toto", petBreed: "Beagle", rating: 5, body: "Best grooming experience in Tarlac by far. Toto looked like a completely different dog. The staff clearly love what they do.", date: "Mar 20, 2026" },
  ],
  "st-bernards-pet-shop": [
    { consumerName: "Jessa P.", petName: "Cookie", petBreed: "Maltese", rating: 5, body: "Such a warm and welcoming team. Cookie always comes back smelling amazing and looking pristine. The full groom package is incredible value.", date: "Apr 12, 2026" },
    { consumerName: "Ryan C.", petName: "Spike", petBreed: "Bulldog", rating: 4, body: "Good service, solid grooming. Spike's wrinkles were cleaned properly which most salons miss. Will definitely return.", date: "Apr 1, 2026" },
    { consumerName: "Ana L.", petName: "Biscuit", petBreed: "Cocker Spaniel", rating: 5, body: "Biscuit's coat tangles easily but they handled it so carefully. Zero mats, zero tears — just a happy, fluffy dog.", date: "Mar 18, 2026" },
  ],
  "paws-furs-animal-clinic": [
    { consumerName: "Dr. Karen S.", petName: "Oreo", petBreed: "Domestic Shorthair", rating: 5, body: "As a vet tech myself, I'm incredibly selective. The wellness consultation here was thorough, unhurried, and evidence-based. Oreo's health plan was spot-on.", date: "Apr 10, 2026" },
    { consumerName: "Ben T.", petName: "Max", petBreed: "Dachshund", rating: 5, body: "Max had his annual check-up here. The vet took time to explain everything clearly and answered all my questions. The vaccination package was also very affordable.", date: "Mar 25, 2026" },
    { consumerName: "Diane R.", petName: "Cleo", petBreed: "Ragdoll Cat", rating: 4, body: "Clean facility, knowledgeable staff. Cleo's dental scaling was done smoothly. Recovery was quick and the follow-up call the next day was a lovely touch.", date: "Mar 10, 2026" },
  ],
  "puffs-n-furr-pet-grooming": [
    { consumerName: "Gab F.", petName: "Peanut", petBreed: "Pomeranian", rating: 5, body: "Peanut always looks like a show dog after every visit. The groomers here understand Pomeranian coats — they never over-trim the undercoat.", date: "Apr 13, 2026" },
    { consumerName: "Iris N.", petName: "Shadow", petBreed: "Black Labrador", rating: 4, body: "Very friendly staff and clean space. Shadow's de-shedding treatment was excellent — the high-velocity dryer made such a difference. Booking was seamless.", date: "Apr 2, 2026" },
    { consumerName: "Jun M.", petName: "Dumpling", petBreed: "Chow Chow", rating: 5, body: "Dumpling is a challenge to groom given his thick double coat. These groomers handled it expertly. He came home calm, clean, and tangle-free.", date: "Mar 21, 2026" },
  ],
  "vet-soucier-veterinary-grooming": [
    { consumerName: "Melissa A.", petName: "Ginger", petBreed: "Tabby Cat", rating: 5, body: "The medical grooming here is unlike anything else — medicated shampoo was chosen specifically for Ginger's sensitive skin. She stopped scratching within days.", date: "Apr 8, 2026" },
    { consumerName: "Erwin B.", petName: "Rex", petBreed: "German Shepherd", rating: 4, body: "Solid veterinary grooming. Rex had a skin condition and they recommended the right treatment. The consultation before grooming was a nice touch.", date: "Mar 27, 2026" },
  ],
  "petvetgo-animal-clinic-wellness": [
    { consumerName: "Christine L.", petName: "Pudding", petBreed: "French Bulldog", rating: 5, body: "Pudding's deworming package was handled professionally and the vet explained the full prevention schedule. The facility is spotlessly clean.", date: "Apr 7, 2026" },
    { consumerName: "Renz O.", petName: "Siopao", petBreed: "Shih Tzu Mix", rating: 5, body: "Brought Siopao in for his first annual check-up. The vet was gentle, thorough, and clearly loves animals. We left with a detailed health report.", date: "Mar 31, 2026" },
    { consumerName: "Abby C.", petName: "Nala", petBreed: "Maine Coon", rating: 4, body: "Great clinic overall. Nala's vaccination was quick and stress-free. Waiting area is comfortable and well-ventilated.", date: "Mar 14, 2026" },
  ],
  "chimichooms-ph": [
    { consumerName: "Jake S.", petName: "Tofu", petBreed: "Shiba Inu", rating: 3, body: "Decent grooming but the wait was longer than quoted. Tofu looked good but the styling wasn't quite what I expected from the photos online.", date: "Apr 5, 2026" },
    { consumerName: "Leah D.", petName: "Mango", petBreed: "Golden Mix", rating: 4, body: "Good value for the price. The bath and brush was thorough and Mango smelled great for days. Staff was friendly and communicative.", date: "Mar 22, 2026" },
  ],
  "paws-claws-pet-supplies": [
    { consumerName: "Fern T.", petName: "Potato", petBreed: "Corgi", rating: 5, body: "Potato's flea & tick treatment was done here and it was completely effective. The staff double-checked for any allergic reactions before applying. So thoughtful.", date: "Apr 6, 2026" },
    { consumerName: "Sam R.", petName: "Waffles", petBreed: "Miniature Schnauzer", rating: 4, body: "Quick, efficient, and affordable. Waffles got the nail & ear care and came out perfectly groomed. A reliable neighborhood option.", date: "Mar 29, 2026" },
  ],
  "petorria-animal-clinic-grooming": [
    { consumerName: "Nina C.", petName: "Coco", petBreed: "Maltipoo", rating: 5, body: "Coco's medical grooming here cleared up her skin issues within two weeks. The vet-groomer collaboration is what sets this place apart.", date: "Apr 9, 2026" },
    { consumerName: "Luis P.", petName: "Brownie", petBreed: "Beagle", rating: 5, body: "Annual check-up and dental scaling in one visit. Efficient, thorough, and Brownie handled it like a champ. The post-op care instructions were very clear.", date: "Apr 1, 2026" },
    { consumerName: "Grace T.", petName: "Snowball", petBreed: "American Eskimo", rating: 4, body: "Clean clinic, professional team. The wellness consultation was detailed — they even flagged a minor ear issue I hadn't noticed. Really impressed.", date: "Mar 16, 2026" },
  ],
  "matias-pet-shop": [
    { consumerName: "Carlo B.", petName: "Pancho", petBreed: "Aspin", rating: 5, body: "Pancho used to dread baths. The team here was so patient with him — now he doesn't whine at all. The basic bath is great quality for the price.", date: "Apr 11, 2026" },
    { consumerName: "Ysa M.", petName: "Latte", petBreed: "Bichon Frise", rating: 4, body: "Friendly staff, clean station, and Latte's coat looked fluffy and fresh. The teeth brushing add-on was a great suggestion from the groomer.", date: "Mar 24, 2026" },
  ],
  "jd-petshop": [
    { consumerName: "Toni F.", petName: "Choco", petBreed: "Labrador Mix", rating: 5, body: "Choco has a lot of energy and they handled him so well. The full groom package was worth every peso — he came back looking like a brand new dog.", date: "Apr 10, 2026" },
    { consumerName: "Hans L.", petName: "Polar", petBreed: "Samoyed", rating: 4, body: "Polar's thick coat is always a challenge. The de-shedding treatment was very effective. Took a bit longer than expected but the result was worth the wait.", date: "Mar 26, 2026" },
  ],
  "angeles-pet-care-center-tarlac": [
    { consumerName: "Ara D.", petName: "Mocha", petBreed: "Cavalier King Charles", rating: 5, body: "Mocha's editorial styling here is consistently flawless. The groomers remember her preferred cut every visit without me having to remind them. Truly personal service.", date: "Apr 14, 2026" },
    { consumerName: "Kiko R.", petName: "Pogi", petBreed: "Toy Poodle", rating: 5, body: "Pogi's signature soak left his curls perfectly defined. The botanical mask made a noticeable difference in coat texture. We won't go anywhere else.", date: "Apr 3, 2026" },
    { consumerName: "Bea S.", petName: "Truffle", petBreed: "Doodle Mix", rating: 5, body: "Truffle's de-shedding treatment was long overdue. The team was efficient, kind, and the finishing fragrance they used is absolutely divine.", date: "Mar 19, 2026" },
  ],
};

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
