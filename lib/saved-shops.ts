import { useState, useEffect } from "react";

const KEY = "purrbook_saved";

function getSlugs(): string[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(KEY) ?? "[]"); } catch { return []; }
}

function setSlugs(slugs: string[]) {
  localStorage.setItem(KEY, JSON.stringify(slugs));
}

export function useSavedShops() {
  const [saved, setSaved] = useState<string[]>([]);

  useEffect(() => {
    setSaved(getSlugs());
  }, []);

  function toggle(slug: string) {
    const current = getSlugs();
    const next = current.includes(slug)
      ? current.filter((s) => s !== slug)
      : [...current, slug];
    setSlugs(next);
    setSaved(next);
  }

  return {
    saved,
    toggle,
    isSaved: (slug: string) => saved.includes(slug),
  };
}
