export type NotifType = "booking" | "reminder" | "message";

export type AppNotification = {
  id: string;
  type: NotifType;
  title: string;
  body: string;
  timestamp: string; // ISO
  read: boolean;
  href?: string;
};

export const SEED_NOTIFICATIONS: AppNotification[] = [
  {
    id: "n1",
    type: "booking",
    title: "Appointment Confirmed",
    body: "Barnaby's grooming session at Sniff Pet Salon is confirmed for Nov 14 · 10:00 AM.",
    timestamp: "2024-11-13T09:15:00.000Z",
    read: true,
  },
  {
    id: "n2",
    type: "reminder",
    title: "Session Tomorrow",
    body: "Luna's bath & blowout at Puffs n Furr is tomorrow at 2:00 PM. Don't forget!",
    timestamp: "2024-11-13T08:00:00.000Z",
    read: false,
  },
  {
    id: "n3",
    type: "message",
    title: "New Message",
    body: "Sniff Pet Salon replied to your message about Barnaby's appointment.",
    timestamp: "2024-11-13T07:42:00.000Z",
    read: false,
    href: "/messages?shop=sniff-pet-salon-hotel",
  },
  {
    id: "n4",
    type: "booking",
    title: "Appointment Confirmed",
    body: "Luna's spa session at The Pet Station is confirmed for Nov 21 · 2:00 PM.",
    timestamp: "2024-11-11T14:30:00.000Z",
    read: true,
  },
  {
    id: "n5",
    type: "reminder",
    title: "Upcoming Grooming",
    body: "Barnaby's grooming at The Pet Station is in 3 days. Your companion is excited!",
    timestamp: "2024-11-10T10:00:00.000Z",
    read: true,
  },
];

export function formatNotifTime(iso: string): string {
  const date = new Date(iso);
  const now = new Date("2024-11-13T12:00:00.000Z"); // fixed "now" matching seed data
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays === 1) return "Yesterday";
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
