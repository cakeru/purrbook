"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { SEED_NOTIFICATIONS, formatNotifTime, AppNotification } from "@/lib/notifications";

const TYPE_ICON: Record<AppNotification["type"], string> = {
  booking: "calendar_month",
  reminder: "alarm",
  message: "chat",
};

export default function NotificationBell() {
  const [notifs, setNotifs] = useState<AppNotification[]>(SEED_NOTIFICATIONS);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifs.filter((n) => !n.read).length;

  // Click-outside closes the panel
  useEffect(() => {
    if (!open) return;
    function onMouseDown(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  const markRead = useCallback((id: string) => {
    setNotifs((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  }, []);

  const markAllRead = useCallback(() => {
    setNotifs((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  function handleNotifClick(notif: AppNotification) {
    markRead(notif.id);
    setOpen(false);
    if (notif.href) window.location.assign(notif.href);
  }

  return (
    <div ref={wrapperRef} className="relative">
      {/* Bell button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative p-2 rounded-full hover:bg-stone-100/50 transition-all active:scale-95"
        aria-label="Notifications"
      >
        <span className="material-symbols-outlined">notifications</span>
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-600 border-2 border-white" />
        )}
      </button>

      {/* Dropdown panel — always in DOM, shown/hidden via opacity + pointer-events */}
      <div
        className={`absolute top-full right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden transition-all duration-150 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
        style={{ zIndex: 9999 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-stone-100">
          <span className="font-['Plus_Jakarta_Sans'] font-bold text-sm text-stone-800">
            Notifications
          </span>
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="text-xs font-['Plus_Jakarta_Sans'] font-semibold text-amber-700 hover:text-amber-900 transition-colors"
            >
              Mark all read
            </button>
          )}
        </div>

        {/* List */}
        <div className="max-h-96 overflow-y-auto">
          {notifs.length === 0 ? (
            <p className="py-10 text-center text-sm text-stone-400">
              You&apos;re all caught up
            </p>
          ) : (
            notifs.map((notif) => (
              <button
                key={notif.id}
                onClick={() => handleNotifClick(notif)}
                className={`w-full flex items-start gap-3 px-4 py-3.5 text-left transition-colors border-b border-stone-100 last:border-0 hover:bg-stone-50 ${
                  !notif.read ? "bg-amber-50" : "bg-white"
                }`}
              >
                <span
                  className={`material-symbols-outlined text-[20px] mt-0.5 shrink-0 ${
                    !notif.read ? "text-amber-700" : "text-stone-400"
                  }`}
                >
                  {TYPE_ICON[notif.type]}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-0.5">
                    <span
                      className={`font-['Plus_Jakarta_Sans'] font-bold text-xs ${
                        !notif.read ? "text-amber-800" : "text-stone-700"
                      }`}
                    >
                      {notif.title}
                    </span>
                    <span className="text-[10px] text-stone-400 shrink-0">
                      {formatNotifTime(notif.timestamp)}
                    </span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
                    {notif.body}
                  </p>
                </div>
                {!notif.read && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-600 mt-2 shrink-0" />
                )}
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
