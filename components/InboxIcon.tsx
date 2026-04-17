"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SEED_THREADS } from "@/lib/messages";

const totalUnread = SEED_THREADS.reduce((sum, t) => sum + t.unreadCount, 0);

export default function InboxIcon() {
  const pathname = usePathname();
  const active = pathname === "/messages";

  return (
    <Link href="/messages" className="relative p-2 rounded-full hover:bg-stone-100/50 transition-all active:scale-95 flex items-center justify-center">
      <span
        className={`material-symbols-outlined transition-colors ${
          active ? "text-primary" : ""
        }`}
      >
        inbox
      </span>
      {totalUnread > 0 && (
        <span className="absolute top-1 right-1 min-w-[16px] h-4 px-1 rounded-full bg-primary text-on-primary text-[10px] font-label font-bold flex items-center justify-center leading-none">
          {totalUnread > 9 ? "9+" : totalUnread}
        </span>
      )}
    </Link>
  );
}
