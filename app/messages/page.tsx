"use client";

import { Suspense, useState, useEffect, useRef, useCallback, type KeyboardEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import {
  SEED_THREADS,
  getShopReply,
  formatMessageTime,
  formatDaySeparator,
  type MessageThread,
  type ThreadMessage,
} from "@/lib/messages";

// ─── Thread List Item ─────────────────────────────────────────────────────────
function ThreadItem({
  thread,
  active,
  onClick,
}: {
  thread: MessageThread;
  active: boolean;
  onClick: () => void;
}) {
  const last = thread.messages[thread.messages.length - 1];
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 p-4 text-left transition-all hover:bg-surface-container-low rounded-xl ${active ? "bg-surface-container-low" : ""}`}
    >
      <div className="relative flex-shrink-0">
        <img
          src={thread.shopImage}
          alt={thread.shopName}
          data-alt={`${thread.shopName} thumbnail`}
          className="w-12 h-12 rounded-xl object-cover"
        />
        {thread.unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-tertiary border-2 border-surface-container-lowest" />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1 mb-0.5">
          <p className={`text-sm font-bold truncate ${active ? "text-primary" : "text-on-surface"}`}>
            {thread.shopName}
          </p>
          <p className="text-xs text-on-surface-variant flex-shrink-0">{formatMessageTime(last.timestamp)}</p>
        </div>
        <p className="text-xs text-on-surface-variant truncate">
          {last.sender === "user" ? "You: " : ""}
          {last.content}
        </p>
      </div>
    </button>
  );
}

// ─── Day Separator ────────────────────────────────────────────────────────────
function DaySeparator({ iso }: { iso: string }) {
  return (
    <div className="flex items-center gap-3 py-2">
      <div className="flex-1 h-px bg-outline-variant/30" />
      <span className="text-xs text-on-surface-variant font-label font-bold px-2 flex-shrink-0">
        {formatDaySeparator(iso)}
      </span>
      <div className="flex-1 h-px bg-outline-variant/30" />
    </div>
  );
}

// ─── Messages Client (reads useSearchParams) ──────────────────────────────────
function MessagesClient() {
  const searchParams = useSearchParams();
  const initialSlug = searchParams.get("shop");

  const [threads, setThreads] = useState<MessageThread[]>(() =>
    SEED_THREADS.map((t) => ({ ...t, messages: [...t.messages] }))
  );
  const [activeSlug, setActiveSlug] = useState<string | null>(
    initialSlug ?? SEED_THREADS[0]?.shopSlug ?? null
  );
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const replyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeThread = threads.find((t) => t.shopSlug === activeSlug) ?? null;

  // Clear unread when a thread is opened
  useEffect(() => {
    if (!activeSlug) return;
    setThreads((prev) =>
      prev.map((t) => (t.shopSlug === activeSlug ? { ...t, unreadCount: 0 } : t))
    );
    setTimeout(() => inputRef.current?.focus(), 80);
  }, [activeSlug]);

  // Scroll to bottom on new messages or typing indicator
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [activeThread?.messages, typing]);

  // Cleanup pending reply on unmount
  useEffect(() => {
    return () => {
      if (replyTimerRef.current) clearTimeout(replyTimerRef.current);
    };
  }, []);

  const sendMessage = useCallback(
    (text: string) => {
      if (!text.trim() || typing || !activeSlug) return;

      const userMsg: ThreadMessage = {
        id: Date.now().toString(),
        sender: "user",
        content: text.trim(),
        timestamp: new Date().toISOString(),
      };

      setThreads((prev) =>
        prev.map((t) =>
          t.shopSlug === activeSlug ? { ...t, messages: [...t.messages, userMsg] } : t
        )
      );
      setInput("");
      setTyping(true);

      replyTimerRef.current = setTimeout(() => {
        const reply: ThreadMessage = {
          id: (Date.now() + 1).toString(),
          sender: "shop",
          content: getShopReply(activeSlug, text),
          timestamp: new Date().toISOString(),
        };
        setTyping(false);
        setThreads((prev) =>
          prev.map((t) =>
            t.shopSlug === activeSlug ? { ...t, messages: [...t.messages, reply] } : t
          )
        );
      }, 1200);
    },
    [typing, activeSlug]
  );

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") sendMessage(input);
  }

  // Group messages by day for separators
  function groupByDay(messages: ThreadMessage[]) {
    const groups: { dayKey: string; messages: ThreadMessage[] }[] = [];
    for (const msg of messages) {
      const dayKey = msg.timestamp.slice(0, 10);
      const last = groups[groups.length - 1];
      if (last && last.dayKey === dayKey) {
        last.messages.push(msg);
      } else {
        groups.push({ dayKey, messages: [msg] });
      }
    }
    return groups;
  }

  const totalUnread = threads.reduce((n, t) => n + t.unreadCount, 0);

  return (
    <div className="flex h-[calc(100vh-64px)] mt-16">
      {/* ── Thread List (left) ── */}
      <div className={`w-full lg:w-[360px] flex-shrink-0 border-r border-outline-variant/15 flex flex-col bg-surface-container-lowest ${activeSlug ? "hidden lg:flex" : "flex"}`}>
        {/* List header */}
        <div className="px-5 py-5 border-b border-outline-variant/10 flex-shrink-0">
          <div className="flex items-center gap-2">
            <h1 className="font-headline font-bold text-on-surface text-2xl tracking-tight">
              Messages
            </h1>
            {totalUnread > 0 && (
              <span className="bg-tertiary text-on-primary rounded-full text-xs font-label font-bold px-2 py-0.5 leading-tight">
                {totalUnread}
              </span>
            )}
          </div>
        </div>

        {/* Thread list */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1">
          {threads.map((thread) => (
            <ThreadItem
              key={thread.shopSlug}
              thread={thread}
              active={thread.shopSlug === activeSlug}
              onClick={() => setActiveSlug(thread.shopSlug)}
            />
          ))}
        </div>
      </div>

      {/* ── Conversation Panel (right) ── */}
      {activeThread ? (
        <div className={`flex-1 flex flex-col min-w-0 bg-surface ${activeSlug ? "flex" : "hidden lg:flex"}`}>
          {/* Conversation header */}
          <div className="px-6 py-4 border-b border-outline-variant/10 bg-surface-container-lowest flex items-center gap-4 flex-shrink-0">
            <button
              onClick={() => setActiveSlug(null)}
              className="lg:hidden w-9 h-9 rounded-full hover:bg-surface-container flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-on-surface-variant text-xl">arrow_back</span>
            </button>
            <img
              src={activeThread.shopImage}
              alt={activeThread.shopName}
              data-alt={`${activeThread.shopName} photo`}
              className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <p className="font-headline font-bold text-on-surface text-base truncate">
                {activeThread.shopName}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="bg-secondary-container text-on-secondary-container text-xs font-label font-bold px-2 py-0.5 rounded-full">
                  {activeThread.shopCategory}
                </span>
                <span className="text-xs text-on-surface-variant truncate">
                  {activeThread.shopAddress}
                </span>
              </div>
            </div>
            <Link
              href="/schedule"
              className="hidden sm:block flex-shrink-0 bg-primary text-on-primary text-sm font-label font-bold px-5 py-2.5 rounded-full hover:bg-primary-dim active:scale-95 transition-all"
            >
              Book a Session
            </Link>
          </div>

          {/* Messages scroll area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-1 min-h-0">
            {groupByDay(activeThread.messages).map(({ dayKey, messages }) => (
              <div key={dayKey}>
                <DaySeparator iso={messages[0].timestamp} />
                <div className="space-y-3 mt-3">
                  {messages.map((msg) =>
                    msg.sender === "user" ? (
                      <div key={msg.id} className="flex justify-end">
                        <div className="max-w-[70%]">
                          <div className="bg-primary text-on-primary rounded-2xl rounded-tr-sm px-4 py-3 text-sm leading-relaxed">
                            {msg.content}
                          </div>
                          <p className="text-xs text-on-surface-variant text-right mt-1 px-1">
                            {formatMessageTime(msg.timestamp)}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div key={msg.id} className="flex items-end gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-xs font-bold text-on-surface-variant mb-5">
                          {activeThread.shopName.charAt(0)}
                        </div>
                        <div className="max-w-[70%]">
                          <div className="bg-surface-container-low text-on-surface rounded-2xl rounded-tl-sm px-4 py-3 text-sm leading-relaxed">
                            {msg.content}
                          </div>
                          <p className="text-xs text-on-surface-variant mt-1 px-1">
                            {formatMessageTime(msg.timestamp)}
                          </p>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div className="flex items-end gap-2.5 pt-1">
                <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center flex-shrink-0 text-xs font-bold text-on-surface-variant">
                  {activeThread.shopName.charAt(0)}
                </div>
                <div className="bg-surface-container-low rounded-2xl rounded-tl-sm px-4 py-3.5">
                  <div className="flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-on-surface-variant/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input row */}
          <div className="px-4 py-4 border-t border-outline-variant/10 bg-surface-container-lowest flex gap-3 flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Message ${activeThread.shopName}…`}
              className="flex-1 bg-surface-container-low rounded-full px-5 py-3 text-sm text-on-surface placeholder:text-on-surface-variant outline-none focus:ring-2 focus:ring-primary/30 transition-all"
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || typing}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-primary-dim text-on-primary flex items-center justify-center disabled:opacity-40 active:scale-95 transition-all flex-shrink-0"
            >
              <span className="material-symbols-outlined text-base">send</span>
            </button>
          </div>
        </div>
      ) : (
        /* Empty state */
        <div className="hidden lg:flex flex-1 flex-col items-center justify-center gap-4 text-center px-12 bg-surface">
          <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center">
            <span
              className="material-symbols-outlined text-on-surface-variant text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              chat
            </span>
          </div>
          <div>
            <p className="font-headline font-bold text-on-surface text-xl">Select a conversation</p>
            <p className="text-sm text-on-surface-variant mt-1 max-w-xs">
              Choose a sanctuary from the list to view your messages.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Page (server component wrapper) ─────────────────────────────────────────
export default function MessagesPage() {
  return (
    <>
      <Header />

      <Suspense fallback={<div className="h-screen flex items-center justify-center"><span className="text-on-surface-variant text-sm">Loading messages…</span></div>}>
        <MessagesClient />
      </Suspense>
    </>
  );
}
