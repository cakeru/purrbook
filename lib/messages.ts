// ─── Types ────────────────────────────────────────────────────────────────────
export type ThreadMessage = {
  id: string;
  sender: "user" | "shop";
  content: string;
  timestamp: string; // ISO 8601
};

export type MessageThread = {
  shopSlug: string;
  shopName: string;
  shopImage: string;
  shopCategory: string;
  shopAddress: string;
  messages: ThreadMessage[];
  unreadCount: number;
};

// ─── Seed data ────────────────────────────────────────────────────────────────
export const SEED_THREADS: MessageThread[] = [
  {
    shopSlug: "sniff-pet-salon-hotel",
    shopName: "Sniff Pet Salon & Hotel",
    shopImage: "/studios/sniff-pet-salon-hotel.jpg",
    shopCategory: "Full-Service Hotel",
    shopAddress: "127 San Vicente, Tarlac City",
    unreadCount: 1,
    messages: [
      {
        id: "sniff-1",
        sender: "user",
        content:
          "Hi! We're looking forward to Barnaby's session tomorrow. Any prep we should do tonight?",
        timestamp: "2024-11-13T18:42:00Z",
      },
      {
        id: "sniff-2",
        sender: "shop",
        content:
          "Hi Maria! Great to hear from you. For Barnaby's Royal Bath & Silk Cut, just make sure he's well-brushed beforehand to reduce any matting. Arrive about 10 minutes early so he can settle in. We have lavender treats ready for him!",
        timestamp: "2024-11-13T19:05:00Z",
      },
      {
        id: "sniff-3",
        sender: "shop",
        content:
          "Also, no need to bathe him at home — we'll take care of everything. See you tomorrow at 11:15 AM!",
        timestamp: "2024-11-13T19:06:00Z",
      },
    ],
  },
  {
    shopSlug: "pet-station-grooming-salon",
    shopName: "Pet Station Grooming Salon",
    shopImage: "/studios/pet-station-grooming-salon.jpg",
    shopCategory: "San Sebastian",
    shopAddress: "43 San Sebastian Rd, Tarlac City",
    unreadCount: 0,
    messages: [
      {
        id: "petstation-1",
        sender: "user",
        content:
          "Hello! I was wondering if Luna can get a full Persian breed cut on November 21? She has some matting near her neck that needs attention.",
        timestamp: "2024-11-16T10:15:00Z",
      },
      {
        id: "petstation-2",
        sender: "shop",
        content:
          "Hello Maria! Yes, absolutely — we have Sofia Ramos available on November 21 at 10:30 AM for Luna's Breed-Specific Cut. She specializes in Persian cats and will handle the matting gently. The session typically takes 75 minutes. Shall we confirm the booking?",
        timestamp: "2024-11-16T11:30:00Z",
      },
      {
        id: "petstation-3",
        sender: "user",
        content: "Yes please, go ahead and confirm! Is there anything I should bring?",
        timestamp: "2024-11-18T09:20:00Z",
      },
    ],
  },
];

// ─── Auto-reply logic ─────────────────────────────────────────────────────────
const SHOP_REPLIES: Record<string, (msg: string) => string> = {
  "sniff-pet-salon-hotel": (msg) => {
    const q = msg.toLowerCase();
    if (q.includes("hour") || q.includes("open") || q.includes("time") || q.includes("when"))
      return "We're open Monday to Saturday, 9:00 AM to 7:00 PM. Last grooming slot starts at 5:30 PM.";
    if (q.includes("price") || q.includes("cost") || q.includes("how much") || q.includes("₱"))
      return "Our grooming packages start from ₱450. The Royal Bath & Silk Cut for medium-to-large dogs is ₱650. Boarding starts at ₱800/night. Let us know your pet's breed for an exact quote!";
    if (q.includes("book") || q.includes("schedule") || q.includes("reserve") || q.includes("appointment"))
      return "You can book directly through PurrBook — just tap 'Confirm Appointment' on our page! If you need to adjust an existing booking, reply here and we'll sort it out.";
    if (q.includes("barnaby") || q.includes("golden") || q.includes("dog"))
      return "Barnaby is always a joy to have! We'll make sure his coat is in top condition. Camille will be his groomer again — she knows exactly how he likes things done.";
    if (q.includes("camera") || q.includes("watch") || q.includes("live") || q.includes("stream"))
      return "Yes! Our live camera feed is accessible through the PurrBook app. You'll get a link once Barnaby checks in. It covers the main grooming station.";
    if (q.includes("cancel") || q.includes("reschedule") || q.includes("change"))
      return "No problem! You can cancel or reschedule up to 24 hours before your slot with no charge. Just reply here or update through PurrBook.";
    if (q.includes("thank") || q.includes("great") || q.includes("perfect") || q.includes("see you"))
      return "Thank you, Maria! We look forward to seeing Barnaby. He's in great hands here 🐾";
    return "Thanks for your message, Maria! We'll get back to you shortly. If it's urgent, feel free to call us directly.";
  },

  "pet-station-grooming-salon": (msg) => {
    const q = msg.toLowerCase();
    if (q.includes("hour") || q.includes("open") || q.includes("time") || q.includes("when"))
      return "We're open Monday to Saturday, 9:00 AM to 6:00 PM. Sofia's feline appointments are usually in the morning slots.";
    if (q.includes("price") || q.includes("cost") || q.includes("how much") || q.includes("₱"))
      return "Luna's Breed-Specific Cut is ₱580, which includes a full bath, coat styling, nail trim, and ear cleaning. Additional dematting is ₱150 if the matting is extensive.";
    if (q.includes("luna") || q.includes("persian") || q.includes("cat"))
      return "Sofia has been grooming Persians for 6 years and is wonderful with anxious cats. She uses a low-heat diffuser and cool water — exactly what Luna prefers. Luna is in great hands!";
    if (q.includes("bring") || q.includes("prepare") || q.includes("need") || q.includes("what"))
      return "Just bring Luna in her carrier and any records of previous allergic reactions to products. No need to bathe her beforehand — we'll handle everything. Arrive 5 minutes early so she can settle.";
    if (q.includes("mat") || q.includes("tangle") || q.includes("knot"))
      return "Sofia handles matting with a wide-tooth comb and detangling spray before any trimming — never pulling or cutting without care first. Luna will be comfortable throughout.";
    if (q.includes("cancel") || q.includes("reschedule") || q.includes("change"))
      return "Of course! Please cancel or reschedule at least 24 hours before your slot. Reply here or update via PurrBook.";
    if (q.includes("confirm") || q.includes("yes") || q.includes("book") || q.includes("proceed"))
      return "Booking confirmed for Luna on November 21 at 10:30 AM with Sofia Ramos. You'll receive a PurrBook confirmation shortly. See you then!";
    if (q.includes("thank") || q.includes("great") || q.includes("perfect"))
      return "Thank you, Maria! Luna is lucky to have such an attentive owner. See you on the 21st!";
    return "Thanks for reaching out! We'll make sure Luna has a calm and comfortable grooming experience. Reply here if you have any other questions.";
  },
};

const DEFAULT_REPLY =
  "Thanks for your message! We'll get back to you as soon as possible. You can also call us directly for urgent inquiries.";

export function getShopReply(shopSlug: string, userMessage: string): string {
  const handler = SHOP_REPLIES[shopSlug];
  return handler ? handler(userMessage) : DEFAULT_REPLY;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
/** Format ISO timestamp for display: "Nov 13" or "11:05 AM" if today. */
export function formatMessageTime(iso: string): string {
  const date = new Date(iso);
  const now = new Date();
  const isToday =
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate();

  if (isToday) {
    return date.toLocaleTimeString("en-PH", { hour: "numeric", minute: "2-digit" });
  }
  return date.toLocaleDateString("en-PH", { month: "short", day: "numeric" });
}

/** Format ISO timestamp as a day separator label: "November 13, 2024". */
export function formatDaySeparator(iso: string): string {
  return new Date(iso).toLocaleDateString("en-PH", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
