"use client";

import { useState, useRef, useEffect } from "react";

const MENU_ITEMS = [
  { icon: "person", label: "My Profile", href: "/profile" },
  { icon: "calendar_month", label: "My Bookings", href: "/bookings" },
  { icon: "star", label: "My Reviews", href: "/reviews" },
  { icon: "settings", label: "Settings", href: "/settings" },
  { icon: "edit", label: "Edit Profile", href: "/auth" },
];

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={wrapperRef} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-9 h-9 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-900 font-['Plus_Jakarta_Sans'] font-bold text-sm flex items-center justify-center transition-all active:scale-95"
        aria-label="Account menu"
      >
        MS
      </button>

      <div
        className={`absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden transition-all duration-150 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-1 pointer-events-none"
        }`}
        style={{ zIndex: 9999 }}
      >
        {MENU_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-sm font-['Plus_Jakarta_Sans'] text-stone-700 hover:bg-stone-50 transition-colors w-full"
          >
            <span className="material-symbols-outlined text-[18px] text-stone-400">
              {item.icon}
            </span>
            {item.label}
          </a>
        ))}
        <hr className="border-stone-100 mx-4" />
        <button
          onClick={() => { setOpen(false); window.location.assign("/"); }}
          className="flex items-center gap-3 px-4 py-3 text-sm font-['Plus_Jakarta_Sans'] text-stone-700 hover:bg-stone-50 transition-colors w-full text-left"
        >
          <span className="material-symbols-outlined text-[18px] text-stone-400">
            logout
          </span>
          Log Out
        </button>
      </div>
    </div>
  );
}
