"use client";

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

// ─── Suggested prompts ────────────────────────────────────────────────────────
const SUGGESTED_PROMPTS = [
  "When is Barnaby's next grooming?",
  "Tips for Luna's Persian coat",
  "Recommend a cat-friendly sanctuary",
  "How do I prep for a grooming visit?",
];

// ─── Simulated AI responses ───────────────────────────────────────────────────
function getAIResponse(message: string): string {
  const q = message.toLowerCase();

  // Barnaby-specific
  if (q.includes("barnaby")) {
    if (q.includes("next") || q.includes("due") || q.includes("when") || q.includes("groom")) {
      return "Based on Barnaby's double coat and his last session on Nov 14, his next grooming is due around Dec 26, 2024 — a standard 6-week cycle for Golden Retrievers.\n\nWould you like to schedule that at The Amber Sanctuary or explore other studios?";
    }
    if (q.includes("coat") || q.includes("brush") || q.includes("shed")) {
      return "Barnaby has a dense double coat that sheds seasonally. A few tips:\n\n• Brush him 3–4x a week with a slicker brush\n• During shedding season, add a de-shedding treatment at his grooming session\n• His groomer Camille recommends lavender-scented products — he responds well to them\n• Avoid shaving the coat — it disrupts the natural insulation layer";
    }
    return "Barnaby is your 3-year-old Golden Retriever — 8 grooming sessions on record across 4 sanctuaries. His next visit is Nov 14. He's gentle, loves water, and does best with warm water and lavender products. What would you like to know?";
  }

  // Luna-specific
  if (q.includes("luna")) {
    if (q.includes("coat") || q.includes("brush") || q.includes("mat") || q.includes("tangle")) {
      return "Luna's silky long Persian coat needs extra attention:\n\n• Brush daily with a wide-tooth comb to prevent matting\n• Focus on the neck and belly — those areas mat fastest\n• Use a leave-in detangling spray between sessions\n• Her groomer Sofia recommends cool water and a low-heat diffuser instead of a loud dryer\n\nHer next full groom is due around Jan 2025.";
    }
    if (q.includes("next") || q.includes("due") || q.includes("when") || q.includes("groom")) {
      return "Luna's last session was Nov 21 — a Breed-Specific Cut at Pet Station Grooming Salon. Based on her long Persian coat, her next full groom is recommended around January 2025 (5–6 week cycle).\n\nSofia Ramos, the feline specialist there, is her regular groomer.";
    }
    return "Luna is your 2-year-old Persian Cat — calm, indoor, and loves a quiet grooming environment. She has 3 sessions on record. Her coat is silky long and requires grooming every 5–6 weeks. What would you like to know about her care?";
  }

  // Sanctuary recommendations
  if (q.includes("recommend") || q.includes("sanctuary") || q.includes("salon") || q.includes("studio") || q.includes("where")) {
    if (q.includes("cat") || q.includes("persian") || q.includes("feline")) {
      return "For cats, I'd recommend:\n\n• Pet Station Grooming Salon (0.7 km, from ₱480) — feline specialist on staff, Luna's go-to\n• Vet Soucier Veterinary & Grooming (0.4 km, from ₱480) — great if you want vet and grooming in one visit\n• Petorria Animal Clinic & Grooming (0.3 km, from ₱460) — calm, low-stress handling technique\n\nWould you like to book one of these?";
    }
    if (q.includes("dog") || q.includes("golden") || q.includes("retriever") || q.includes("barnaby")) {
      return "For dogs, top picks:\n\n• Sniff Pet Salon & Hotel (0.5 km, from ₱450) ★ 4.9 — live camera, luxury suite, organic treats\n• The Amber Sanctuary — Barnaby's regular spot, known for the Silk Cut technique\n• Pet Station Grooming Salon (0.7 km, from ₱480) — expert stylists, breed-specific cuts\n\nSniff is our highest-rated studio in Tarlac City.";
    }
    return "Top-rated sanctuaries near you in Tarlac City:\n\n• Sniff Pet Salon & Hotel (0.5 km, ★ 4.9) — full service, live camera, boarding\n• Petvetgo Animal Clinic & Wellness (0.9 km, ★ 4.9) — holistic + preventive care\n• Vet Soucier Veterinary & Grooming (0.4 km, ★ 4.8) — vet and grooming combined\n\nWant me to narrow it down by service type?";
  }

  // Grooming frequency
  if (q.includes("often") || q.includes("frequen") || q.includes("how many") || q.includes("every")) {
    return "Grooming frequency by coat type:\n\n• Double coats (Golden, Husky): every 6–8 weeks\n• Long coats (Persian, Maltese): every 4–6 weeks\n• Curly/wavy coats (Poodle, Doodle): every 6–8 weeks\n• Short coats: every 8–12 weeks\n\nBarnaby's double coat is on a 6-week schedule. Luna's Persian coat is best at 5–6 weeks.";
  }

  // Pre-appointment prep
  if (q.includes("prep") || q.includes("before") || q.includes("appointment") || q.includes("ready")) {
    return "Before a grooming appointment:\n\n1. Brush out tangles the night before — mats are harder to remove when set\n2. Skip the bath — your groomer will bathe them properly\n3. Light exercise beforehand helps them settle\n4. Bring care notes — allergies, sensitivities, preferred products\n5. Arrive 5 minutes early to let them acclimate\n\nFor Barnaby, remind the groomer about his nail-trim sensitivity. For Luna, mention the cool water preference.";
  }

  // Booking
  if (q.includes("book") || q.includes("schedule") || q.includes("reserve") || q.includes("appointment")) {
    return "To book a session, head to the Schedule page — select your companion, pick a date and time, then confirm your details.\n\nWould you like me to suggest a sanctuary for the booking? I can recommend based on your pet's breed and coat type.";
  }

  // Pricing
  if (q.includes("price") || q.includes("cost") || q.includes("how much") || q.includes("₱")) {
    return "Grooming prices in Tarlac City:\n\n• Basic bath & brush: ₱380–₱480\n• Full groom with breed styling: ₱450–₱650\n• De-shedding / spa treatments: ₱500–₱750\n• Cat grooming: ₱400–₱600\n\nSniff Pet Salon starts from ₱450, Pet Station from ₱480. Prices vary by breed size and coat complexity.";
  }

  // Products / shampoo
  if (q.includes("product") || q.includes("shampoo") || q.includes("conditioner") || q.includes("safe")) {
    return "Groomer-recommended products for home use:\n\n• Oatmeal shampoo — gentle for sensitive skin, safe for all breeds\n• Detangling spray — essential for long coats like Luna's\n• Leave-in conditioner — great for Persian coats between sessions\n• Avoid human shampoos — the pH is too alkaline for pet skin\n\nBarnaby's team uses Lavender Shampoo + Oat Conditioner. Luna's groomer recommends Silk Protein Shampoo.";
  }

  // Health / vet
  if (q.includes("vet") || q.includes("vaccine") || q.includes("health") || q.includes("sick")) {
    return "For health and vet care in Tarlac City:\n\n• Paws & Furs Animal Clinic (0.2 km) — wellness checks, vaccinations\n• Vet Soucier Veterinary & Grooming (0.4 km) — licensed vets + grooming\n• Petvetgo Animal Clinic & Wellness (0.9 km) — holistic and preventive care\n\nBarnaby's DHPP booster is due in October 2025. Luna's feline distemper booster is due September 2025.";
  }

  // Default
  return "I'm here to help with everything pet care in Tarlac City — grooming schedules, sanctuary recommendations, coat care tips, pre-visit prep, and more.\n\nTry asking about Barnaby, Luna, or a specific sanctuary!";
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const replyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-scroll on new message or typing indicator
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [messages, typing]);

  // Focus input when opened; clear pending reply timer on close/unmount
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 120);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) clearTimeout(replyTimerRef.current);
    };
  }, []);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim() || typing) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: "user", content: text.trim() },
    ]);
    setInput("");
    setTyping(true);

    replyTimerRef.current = setTimeout(() => {
      const response = getAIResponse(text);
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: (Date.now() + 1).toString(), role: "assistant", content: response },
      ]);
    }, 900);
  }, [typing]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") sendMessage(input);
  }

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-end gap-3">
      {/* Chat Panel */}
      {open && (
        <div
          className="bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/15 w-[380px] flex flex-col overflow-hidden"
          style={{ height: "520px" }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-primary-dim px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-on-primary/15 flex items-center justify-center flex-shrink-0">
                <span
                  className="material-symbols-outlined text-on-primary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
              </div>
              <div>
                <p className="font-label font-bold text-on-primary text-sm leading-tight">
                  PurrBook AI
                </p>
                <p className="text-on-primary/70 text-xs">Your pet care companion</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-full hover:bg-on-primary/10 flex items-center justify-center transition-colors active:scale-95 flex-shrink-0"
            >
              <span className="material-symbols-outlined text-on-primary text-base">
                close
              </span>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4 min-h-0">
            {/* Welcome bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span
                  className="material-symbols-outlined text-primary text-xs"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
              </div>
              <div className="bg-surface-container-low rounded-2xl rounded-tl-sm px-4 py-3 max-w-[272px]">
                <p className="text-sm text-on-surface leading-relaxed">
                  Hello! I&rsquo;m your PurrBook AI — ask me anything about Barnaby, Luna,
                  grooming schedules, or finding the perfect sanctuary.
                </p>
              </div>
            </div>

            {/* Suggested prompts (shown until first user message) */}
            {messages.length === 0 && (
              <div className="space-y-2 pl-9">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    className="w-full text-left text-xs text-primary font-label font-bold border border-primary/25 rounded-xl px-4 py-2.5 hover:bg-primary/5 hover:border-primary/50 transition-all active:scale-[0.98]"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Message history */}
            {messages.map((msg) =>
              msg.role === "user" ? (
                <div key={msg.id} className="flex justify-end">
                  <div className="bg-primary text-on-primary rounded-2xl rounded-tr-sm px-4 py-3 max-w-[272px] text-sm leading-relaxed">
                    {msg.content}
                  </div>
                </div>
              ) : (
                <div key={msg.id} className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span
                      className="material-symbols-outlined text-primary text-xs"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      auto_awesome
                    </span>
                  </div>
                  <div className="bg-surface-container-low rounded-2xl rounded-tl-sm px-4 py-3 max-w-[272px] text-sm text-on-surface leading-relaxed whitespace-pre-line">
                    {msg.content}
                  </div>
                </div>
              )
            )}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span
                    className="material-symbols-outlined text-primary text-xs"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    auto_awesome
                  </span>
                </div>
                <div className="bg-surface-container-low rounded-2xl rounded-tl-sm px-4 py-3.5">
                  <div className="flex gap-1 items-center">
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/50 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/50 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/50 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input row */}
          <div className="px-3 py-3 border-t border-outline-variant/10 flex gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about your pets or sanctuaries…"
              className="flex-1 bg-surface-container-low rounded-full px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || typing}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-dim text-on-primary flex items-center justify-center disabled:opacity-40 active:scale-95 transition-all flex-shrink-0"
            >
              <span className="material-symbols-outlined text-base">send</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating trigger button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close AI assistant" : "Open PurrBook AI assistant"}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dim text-on-primary shadow-lg shadow-primary/30 flex items-center justify-center active:scale-95 transition-all hover:shadow-xl hover:shadow-primary/40"
      >
        <span
          className="material-symbols-outlined text-2xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          {open ? "close" : "auto_awesome"}
        </span>
      </button>
    </div>
  );
}
