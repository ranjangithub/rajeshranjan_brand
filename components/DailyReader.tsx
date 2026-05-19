"use client";

import { useState } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDate } from "@/lib/utils";

export interface SignalBlock {
  number: number;
  title: string;
  content: string;
}

export interface DailyReaderProps {
  currentSlug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  signals: SignalBlock[];
  executiveSummary: string[];
  sections: {
    quickHits: string;
    research: string;
    governance: string;
    driveTime: string;
  };
  allBriefings: Array<{ slug: string; date: string; title: string }>;
}

const TABS = [
  { id: "quick-hits", label: "⚡ Quick Hits", key: "quickHits" as const },
  { id: "research",   label: "🔬 Research",   key: "research"  as const },
  { id: "governance", label: "🛡 Gov Watch",  key: "governance" as const },
  { id: "drivetime",  label: "🎙 Drive Time", key: "driveTime" as const },
] as const;

type TabId = (typeof TABS)[number]["id"];

const BODY_FONT = "var(--font-inter), Inter, system-ui, -apple-system, sans-serif";

function MD({ children }: { children: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h2: ({ children }) => (
          <h2 style={{ fontFamily: BODY_FONT, fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-.015em", color: "var(--navy)", marginTop: "2rem", marginBottom: ".55rem", paddingBottom: ".4rem", borderBottom: "1px solid var(--border)", lineHeight: 1.3 }}>
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 style={{ fontFamily: BODY_FONT, fontSize: "1rem", fontWeight: 600, color: "var(--orange)", marginTop: "1.4rem", marginBottom: ".4rem", lineHeight: 1.35 }}>
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p style={{ fontFamily: BODY_FONT, fontSize: "1rem", color: "var(--text)", lineHeight: 1.78, marginBottom: "1rem" }}>
            {children}
          </p>
        ),
        strong: ({ children }) => (
          <strong style={{ color: "var(--navy)", fontWeight: 700 }}>{children}</strong>
        ),
        blockquote: ({ children }) => (
          <blockquote style={{ borderLeft: "3px solid var(--orange)", padding: ".7rem 1.1rem", margin: "1rem 0", color: "var(--muted)", fontStyle: "italic", background: "rgba(224,123,57,.04)", borderRadius: "0 4px 4px 0" }}>
            {children}
          </blockquote>
        ),
        ul: ({ children }) => (
          <ul style={{ paddingLeft: "1.5rem", marginBottom: "1rem" }}>{children}</ul>
        ),
        li: ({ children }) => (
          <li style={{ fontFamily: BODY_FONT, fontSize: ".97rem", color: "var(--text)", lineHeight: 1.72, marginBottom: ".4rem" }}>{children}</li>
        ),
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noreferrer" style={{ color: "var(--orange)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
            {children}
          </a>
        ),
        hr: () => <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "1.4rem 0" }} />,
        code: ({ children }) => (
          <code style={{ background: "#f0ece4", padding: ".15rem .4rem", borderRadius: 3, fontSize: ".86em", fontFamily: "'Courier New', monospace", color: "var(--navy)" }}>
            {children}
          </code>
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

export function DailyReader({
  currentSlug,
  title,
  date,
  readTime,
  signals,
  executiveSummary,
  sections,
  allBriefings,
}: DailyReaderProps) {
  const [activeSignal, setActiveSignal] = useState(0);
  const [activeTab, setActiveTab] = useState<TabId | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const signal = signals[activeSignal] ?? null;
  const total = signals.length;

  function goSignal(i: number) {
    setActiveSignal(Math.max(0, Math.min(total - 1, i)));
    setActiveTab(null);
  }

  return (
    <div className="daily-layout">

      {/* ── Sidebar ─────────────────────────────────────── */}
      <aside className={`daily-sidebar-wrap${sidebarOpen === false ? " sidebar-collapsed" : ""}`}>
        {/* Signal index */}
        {signals.length > 0 && (
          <div style={{ padding: "14px 14px 16px", flex: 1 }}>
            <p style={{ fontFamily: BODY_FONT, fontSize: ".65rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
              10 Signals
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {signals.map((s, i) => (
                <button
                  key={s.number}
                  onClick={() => goSignal(i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    padding: "6px 8px",
                    borderRadius: 4,
                    border: activeTab === null && activeSignal === i
                      ? "1px solid rgba(26,58,42,.25)"
                      : "1px solid transparent",
                    background: activeTab === null && activeSignal === i
                      ? "rgba(26,58,42,.08)"
                      : "transparent",
                    cursor: "pointer",
                    fontFamily: BODY_FONT,
                    fontSize: ".73rem",
                    lineHeight: 1.4,
                    color: activeTab === null && activeSignal === i ? "var(--navy)" : "var(--muted)",
                    fontWeight: activeTab === null && activeSignal === i ? 700 : 500,
                  }}
                >
                  <span style={{ color: "var(--orange)", fontWeight: 800, marginRight: 5 }}>{s.number}.</span>
                  <span style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {s.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Archive */}
        <div style={{ padding: "14px 14px 16px", borderTop: "1px solid var(--border)" }}>
          <p style={{ fontFamily: BODY_FONT, fontSize: ".65rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 10 }}>
            Archive
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {allBriefings.map((b) => (
              <Link
                key={b.slug}
                href={`/daily/${b.slug}`}
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: ".75rem",
                  fontWeight: b.slug === currentSlug ? 700 : 500,
                  color: b.slug === currentSlug ? "var(--orange)" : "var(--muted)",
                  background: b.slug === currentSlug ? "rgba(224,123,57,.1)" : "transparent",
                  padding: "5px 8px",
                  borderRadius: 4,
                  textDecoration: "none",
                  border: b.slug === currentSlug ? "1px solid rgba(224,123,57,.25)" : "1px solid transparent",
                }}
              >
                {formatDate(b.date)}
                {b.slug === currentSlug && (
                  <span style={{ marginLeft: 5, fontSize: ".6rem", color: "var(--orange)", fontWeight: 800 }}>●</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </aside>

      {/* ── Main ────────────────────────────────────────── */}
      <main className="daily-main-wrap">

        {/* Mobile sidebar toggle */}
        <button
          className="daily-sidebar-toggle-btn"
          onClick={() => setSidebarOpen((o) => !o)}
        >
          {sidebarOpen ? "▲ Hide Signals" : "▼ Show Signals & Archive"}
        </button>

        {/* Header bar */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid var(--border)", background: "var(--surface)", flexShrink: 0, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: BODY_FONT, fontSize: ".7rem", fontWeight: 700, color: "var(--orange)", letterSpacing: ".1em", textTransform: "uppercase", marginBottom: 6 }}>
              Daily Dose
            </p>
            <p style={{ fontFamily: BODY_FONT, fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)", fontWeight: 800, letterSpacing: "-.02em", color: "var(--navy)", lineHeight: 1.2 }}>
              {title.split(" — ")[0]}
            </p>
          </div>
          <span style={{ fontFamily: BODY_FONT, fontSize: ".72rem", color: "var(--muted)" }}>{readTime}</span>
        </div>

        {/* Tab bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 24px", borderBottom: "1px solid var(--border)", background: "var(--surface)", flexShrink: 0, overflowX: "auto" }}>
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(isActive ? null : tab.id)}
                style={{
                  fontFamily: BODY_FONT,
                  fontSize: ".72rem",
                  fontWeight: 700,
                  letterSpacing: ".04em",
                  padding: "5px 14px",
                  borderRadius: 20,
                  border: isActive ? "1px solid var(--orange)" : "1px solid var(--border)",
                  background: isActive ? "var(--orange)" : "var(--surface)",
                  color: isActive ? "#fff" : "var(--muted)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all .15s",
                }}
              >
                {tab.label}
              </button>
            );
          })}
          {activeTab !== null && (
            <button
              onClick={() => setActiveTab(null)}
              style={{
                fontFamily: BODY_FONT,
                fontSize: ".72rem",
                fontWeight: 700,
                padding: "5px 14px",
                borderRadius: 20,
                border: "1px solid var(--border)",
                background: "var(--surface)",
                color: "var(--navy)",
                cursor: "pointer",
                whiteSpace: "nowrap",
                marginLeft: 4,
              }}
            >
              ← Signals
            </button>
          )}
        </div>

        {/* Content area */}
        <div className="daily-content-scroll">
          <div style={{ maxWidth: 760, margin: "0 auto" }}>

            {activeTab === null ? (
              signal ? (
                <>
                  {/* Signal header + nav */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <div style={{ flex: 1, minWidth: 0, marginRight: 16 }}>
                      <span style={{ fontFamily: BODY_FONT, fontSize: ".7rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange)" }}>
                        Signal {signal.number} / {total}
                      </span>
                      <h2 style={{ fontFamily: BODY_FONT, fontSize: "clamp(1.25rem, 2.5vw, 1.55rem)", fontWeight: 800, letterSpacing: "-.025em", color: "var(--navy)", marginTop: 6, lineHeight: 1.22 }}>
                        {signal.title}
                      </h2>
                    </div>
                    <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                      <button
                        onClick={() => goSignal(activeSignal - 1)}
                        disabled={activeSignal === 0}
                        style={{
                          fontFamily: BODY_FONT,
                          fontSize: ".72rem",
                          fontWeight: 700,
                          padding: "6px 14px",
                          borderRadius: 20,
                          border: "1px solid var(--border)",
                          background: "var(--surface)",
                          color: activeSignal === 0 ? "var(--border)" : "var(--navy)",
                          cursor: activeSignal === 0 ? "not-allowed" : "pointer",
                        }}
                      >
                        ← Prev
                      </button>
                      <button
                        onClick={() => goSignal(activeSignal + 1)}
                        disabled={activeSignal === total - 1}
                        style={{
                          fontFamily: BODY_FONT,
                          fontSize: ".72rem",
                          fontWeight: 700,
                          padding: "6px 14px",
                          borderRadius: 20,
                          border: "1px solid var(--border)",
                          background: "var(--surface)",
                          color: activeSignal === total - 1 ? "var(--border)" : "var(--navy)",
                          cursor: activeSignal === total - 1 ? "not-allowed" : "pointer",
                        }}
                      >
                        Next →
                      </button>
                    </div>
                  </div>

                  {/* Signal dots progress */}
                  <div style={{ display: "flex", gap: 5, marginBottom: 24 }}>
                    {signals.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goSignal(i)}
                        style={{
                          width: i === activeSignal ? 20 : 8,
                          height: 8,
                          borderRadius: 4,
                          background: i === activeSignal ? "var(--orange)" : "var(--border)",
                          border: "none",
                          cursor: "pointer",
                          padding: 0,
                          transition: "width .2s, background .2s",
                        }}
                      />
                    ))}
                  </div>

                  {/* Signal content */}
                  <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "24px 28px", boxShadow: "var(--shadow)" }}>
                    <MD>{signal.content}</MD>
                  </div>

                </>

              ) : (
                <p style={{ color: "var(--muted)", fontFamily: BODY_FONT, fontStyle: "italic" }}>No signals found in this briefing.</p>
              )
            ) : (
              /* Section content */
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: "24px 28px", boxShadow: "var(--shadow)" }}>
                {sections[TABS.find(t => t.id === activeTab)!.key] ? (
                  <MD>{sections[TABS.find(t => t.id === activeTab)!.key]}</MD>
                ) : (
                  <p style={{ color: "var(--muted)", fontFamily: BODY_FONT, fontStyle: "italic", textAlign: "center", padding: "40px 0" }}>
                    No content for this section in today&apos;s briefing.
                  </p>
                )}
              </div>
            )}

            {/* LinkedIn footer */}
            <div style={{ marginTop: 32, padding: "20px 24px", background: "var(--navy)", borderRadius: 8 }} className="cta-row">
              <p style={{ fontFamily: BODY_FONT, fontSize: ".88rem", color: "rgba(255,255,255,.7)", fontStyle: "italic" }}>
                Follow the conversation on LinkedIn
              </p>
              <a href="https://www.linkedin.com/in/ranjanemail/" target="_blank" rel="noreferrer" style={{
                fontFamily: BODY_FONT,
                fontWeight: 700,
                fontSize: ".82rem",
                background: "#0a66c2",
                color: "#fff",
                padding: "8px 18px",
                borderRadius: 4,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 6,
                flexShrink: 0,
              }}>
                <span style={{ fontWeight: 900 }}>in</span> Connect
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
