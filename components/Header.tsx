"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import NotificationBell from "@/components/NotificationBell";
import InboxIcon from "@/components/InboxIcon";
import ProfileMenu from "@/components/ProfileMenu";

const NAV_LINKS = [
  { href: "/", label: "Explore" },
  { href: "/search", label: "Search" },
  { href: "/subscriptions", label: "Subscriptions" },
];

export default function Header() {
  const pathname = usePathname();

  function navClass(href: string) {
    const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
    return active
      ? "text-amber-900 dark:text-amber-100 border-b-2 border-amber-700 pb-1 font-semibold transition-all"
      : "text-stone-600 dark:text-stone-400 hover:text-amber-800 transition-colors";
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 dark:bg-stone-900/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(48,51,48,0.06)]">
      <nav className="flex justify-between items-center px-12 py-4 max-w-screen-2xl mx-auto font-['Plus_Jakarta_Sans'] tracking-tight">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <img src="/purrbook.png" alt="PurrBook logo" className="h-8 w-auto" />
            <span className="text-2xl font-bold italic text-amber-900 dark:text-amber-100">
              PurrBook
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={navClass(link.href)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-stone-600 dark:text-stone-400">
            <NotificationBell />
            <InboxIcon />
            <ProfileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}
