"use client";

import { useState, useEffect, useCallback } from "react";
import { api } from "@/lib/api";

interface DevMessage {
  id: string;
  type: "email" | "sms";
  to: string;
  subject?: string;
  body: string;
  htmlBody?: string;
  createdAt: string;
}

function timeAgo(iso: string) {
  const diff = Math.floor((Date.now() - new Date(iso).getTime()) / 1000);
  if (diff < 60) return `${diff}s ago`;
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export default function DevMailbox() {
  const [messages, setMessages] = useState<DevMessage[]>([]);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const fetchMessages = useCallback(async () => {
    try {
      const data = await api.get<{ messages: DevMessage[] }>("/dev/messages");
      setMessages(data.messages);
      setVisible(true);
    } catch {
      // Endpoint not available (production) — hide permanently
      setVisible(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
    const id = setInterval(fetchMessages, 3000);
    return () => clearInterval(id);
  }, [fetchMessages]);

  const handleClear = async () => {
    try {
      await api.delete("/dev/messages");
      setMessages([]);
      setExpanded(null);
    } catch {}
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
      {/* Panel */}
      {open && (
        <div className="pointer-events-auto w-[26rem] max-h-[560px] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-outline-variant/30 bg-surface-container-lowest">

          {/* Dev warning banner */}
          <div className="bg-amber-500 px-4 py-2.5 flex items-center gap-2 shrink-0">
            <span className="material-symbols-outlined text-white" style={{ fontSize: 16 }}>warning</span>
            <p className="text-white font-label font-bold text-xs uppercase tracking-widest leading-none">
              Development &amp; Testing Mode — not real messages
            </p>
          </div>

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-outline-variant/20 shrink-0">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: 18 }}>inbox</span>
              <h3 className="font-headline font-bold text-sm text-on-surface">Dev Mailbox</h3>
              {messages.length > 0 && (
                <span className="bg-primary text-on-primary text-[10px] font-label font-bold rounded-full px-2 py-0.5">
                  {messages.length}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              {messages.length > 0 && (
                <button
                  onClick={handleClear}
                  className="text-xs text-on-surface-variant hover:text-on-surface font-label font-bold uppercase tracking-widest transition-colors"
                >
                  Clear all
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                className="text-on-surface-variant hover:text-on-surface transition-colors"
              >
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>close</span>
              </button>
            </div>
          </div>

          {/* Message list */}
          <div className="flex-1 overflow-y-auto divide-y divide-outline-variant/10">
            {messages.length === 0 ? (
              <div className="py-14 px-6 text-center space-y-2">
                <span className="material-symbols-outlined text-outline-variant block" style={{ fontSize: 40 }}>mail_outline</span>
                <p className="text-on-surface-variant text-sm font-body">No simulated messages yet.</p>
                <p className="text-on-surface-variant text-xs font-body">Complete a booking to see emails and SMS here.</p>
              </div>
            ) : (
              messages.map((msg) => (
                <div
                  key={msg.id}
                  className="px-4 py-3 space-y-1.5 hover:bg-surface-container-low transition-colors cursor-pointer"
                  onClick={() => setExpanded(expanded === msg.id ? null : msg.id)}
                >
                  {/* Type + time row */}
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-label font-bold uppercase tracking-widest ${
                      msg.type === "email"
                        ? "bg-secondary-container text-on-secondary-container"
                        : "bg-tertiary-container text-on-tertiary-container"
                    }`}>
                      <span className="material-symbols-outlined" style={{ fontSize: 12 }}>
                        {msg.type === "email" ? "mail" : "sms"}
                      </span>
                      {msg.type}
                    </span>
                    <span className="text-[11px] text-on-surface-variant font-body">{timeAgo(msg.createdAt)}</span>
                  </div>

                  {/* Recipient */}
                  <p className="text-xs text-on-surface-variant font-body leading-tight">
                    <span className="font-bold text-on-surface">To:</span> {msg.to}
                  </p>

                  {/* Subject (email only) */}
                  {msg.subject && (
                    <p className="text-sm font-label font-bold text-on-surface leading-snug truncate">{msg.subject}</p>
                  )}

                  {/* Body preview (SMS or collapsed email) */}
                  {expanded !== msg.id && !msg.subject && (
                    <p className="text-xs text-on-surface-variant font-body line-clamp-2">{msg.body}</p>
                  )}

                  {/* Expand chevron */}
                  <div className="flex justify-end">
                    <span className="material-symbols-outlined text-on-surface-variant" style={{ fontSize: 14 }}>
                      {expanded === msg.id ? "expand_less" : "expand_more"}
                    </span>
                  </div>

                  {/* Expanded content */}
                  {expanded === msg.id && (
                    <div className="mt-1 pt-3 border-t border-outline-variant/20">
                      {msg.htmlBody ? (
                        <iframe
                          srcDoc={msg.htmlBody}
                          className="w-full rounded-lg border border-outline-variant/20"
                          style={{ height: 220 }}
                          sandbox="allow-same-origin"
                          title="Email preview"
                        />
                      ) : (
                        <p className="text-sm text-on-surface font-body whitespace-pre-wrap leading-relaxed">{msg.body}</p>
                      )}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="pointer-events-auto flex items-center gap-2 bg-on-surface text-surface-container-lowest px-4 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all active:scale-95 font-label font-bold text-sm"
      >
        <span className="material-symbols-outlined" style={{ fontSize: 18 }}>
          {open ? "close" : "mail"}
        </span>
        Dev Mailbox
        {messages.length > 0 && (
          <span className="bg-amber-500 text-white text-[10px] rounded-full px-2 py-0.5 min-w-[1.25rem] text-center font-label font-bold">
            {messages.length}
          </span>
        )}
      </button>
    </div>
  );
}
