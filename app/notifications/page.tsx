"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import { formatNotifTime, type AppNotification } from "@/lib/notifications";
import { api } from "@/lib/api";

const TYPE_ICON: Record<AppNotification["type"], string> = {
  booking: "calendar_month",
  reminder: "alarm",
  message: "chat",
};

const TYPE_COLOR: Record<AppNotification["type"], string> = {
  booking: "bg-tertiary-container text-on-tertiary-container",
  reminder: "bg-secondary-container text-on-secondary-container",
  message: "bg-primary/10 text-primary",
};

function groupNotifications(notifs: AppNotification[]) {
  const today: AppNotification[] = [];
  const yesterday: AppNotification[] = [];
  const earlier: AppNotification[] = [];

  const now = new Date("2024-11-13T12:00:00.000Z");
  const todayStart = new Date(now);
  todayStart.setHours(0, 0, 0, 0);
  const yesterdayStart = new Date(todayStart);
  yesterdayStart.setDate(yesterdayStart.getDate() - 1);

  for (const n of notifs) {
    const d = new Date(n.timestamp);
    if (d >= todayStart) today.push(n);
    else if (d >= yesterdayStart) yesterday.push(n);
    else earlier.push(n);
  }
  return { today, yesterday, earlier };
}

function NotifCard({
  notif,
  onRead,
}: {
  notif: AppNotification;
  onRead: (id: string) => void;
}) {
  const content = (
    <div
      onClick={() => onRead(notif.id)}
      className={`flex items-start gap-4 px-5 py-4 rounded-2xl border transition-all cursor-pointer active:scale-[0.99] hover:-translate-y-0.5 duration-150 ${
        notif.read
          ? "bg-surface-container-lowest border-outline-variant/10"
          : "bg-primary/5 border-primary/15"
      }`}
    >
      {/* Icon */}
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${TYPE_COLOR[notif.type]}`}>
        <span
          className="material-symbols-outlined text-base"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {TYPE_ICON[notif.type]}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <p className={`text-sm font-label font-bold leading-snug ${notif.read ? "text-on-surface" : "text-on-surface"}`}>
            {notif.title}
          </p>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="text-xs text-on-surface-variant">{formatNotifTime(notif.timestamp)}</span>
            {!notif.read && (
              <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            )}
          </div>
        </div>
        <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">{notif.body}</p>
      </div>
    </div>
  );

  if (notif.href) {
    return <Link href={notif.href}>{content}</Link>;
  }
  return content;
}

function Section({ label, notifs, onRead }: { label: string; notifs: AppNotification[]; onRead: (id: string) => void }) {
  if (notifs.length === 0) return null;
  return (
    <div>
      <p className="text-xs font-label font-bold uppercase tracking-widest text-on-surface-variant mb-3 px-1">
        {label}
      </p>
      <div className="space-y-3">
        {notifs.map((n) => (
          <NotifCard key={n.id} notif={n} onRead={onRead} />
        ))}
      </div>
    </div>
  );
}

export default function NotificationsPage() {
  const [notifs, setNotifs] = useState<AppNotification[]>([]);

  useEffect(() => {
    api.get<{ notifications: any[] }>("/notifications").then(({ notifications: rows }) => {
      setNotifs(rows.map((n) => ({
        id: n.id,
        type: (n.type?.includes("message") ? "message" : n.type?.includes("reminder") ? "reminder" : "booking") as AppNotification["type"],
        title: n.title,
        body: n.body,
        href: n.href ?? undefined,
        read: n.read,
        timestamp: n.createdAt,
      })));
    }).catch(console.error);
  }, []);

  const unread = notifs.filter((n) => !n.read).length;
  const { today, yesterday, earlier } = groupNotifications(notifs);

  async function markRead(id: string) {
    setNotifs((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
    await api.patch(`/notifications/${id}/read`).catch(console.error);
  }

  async function markAllRead() {
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
    await api.patch("/notifications/read-all").catch(console.error);
  }

  return (
    <>
      <Header />

      <main className="pt-32 pb-20 px-6 md:px-12 max-w-2xl mx-auto">
        {/* Page header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-headline font-bold text-on-surface tracking-tight flex items-center gap-3">
              Notifications
              {unread > 0 && (
                <span className="bg-primary text-on-primary text-xs font-label font-bold px-2.5 py-1 rounded-full leading-none">
                  {unread}
                </span>
              )}
            </h1>
            <p className="text-sm text-on-surface-variant mt-1 font-body">
              Updates on your bookings, reminders, and messages
            </p>
          </div>
          {unread > 0 && (
            <button
              onClick={markAllRead}
              className="text-xs font-label font-bold text-primary hover:underline active:scale-95 transition-all"
            >
              Mark all as read
            </button>
          )}
        </div>

        {notifs.length === 0 ? (
          <div className="py-20 text-center">
            <span
              className="material-symbols-outlined text-5xl text-on-surface-variant/30 block mb-4"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              notifications
            </span>
            <p className="font-label font-bold text-on-surface-variant">You&apos;re all caught up.</p>
          </div>
        ) : (
          <div className="space-y-8">
            <Section label="Today" notifs={today} onRead={markRead} />
            <Section label="Yesterday" notifs={yesterday} onRead={markRead} />
            <Section label="Earlier" notifs={earlier} onRead={markRead} />
          </div>
        )}
      </main>
    </>
  );
}
