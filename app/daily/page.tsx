import type { Metadata } from "next";
import Link from "next/link";
import { getAllDailyBriefings } from "@/lib/content";

export const metadata: Metadata = {
  title: "Daily AI Intel | Rajesh Ranjan",
  description:
    "Daily briefings on Generative AI, agentic systems, Responsible AI governance, AI security, and enterprise architecture — curated for CTOs, architects, and engineering leaders. No hype. Every claim sourced.",
  openGraph: {
    title: "Daily AI Intel | Rajesh Ranjan",
    description:
      "10 strategic AI signals every morning — enterprise AI, governance, agentic systems, architecture. For CTOs, architects, and engineering leaders.",
    type: "website",
  },
};

const TAG_COLORS: Record<string, string> = {
  "Generative AI":  "rgba(200,84,26,.12)",
  "Enterprise AI":  "rgba(26,58,92,.08)",
  "Agentic AI":     "rgba(139,92,246,.1)",
  "Responsible AI": "rgba(239,68,68,.1)",
  "AI Security":    "rgba(239,68,68,.1)",
  "AI Coding":      "rgba(16,185,129,.1)",
  "AI FinOps":      "rgba(245,158,11,.1)",
  "LLMs":           "rgba(59,130,246,.1)",
  "Open Source AI": "rgba(16,185,129,.1)",
  "AI Regulation":  "rgba(239,68,68,.1)",
  "AI Architecture":"rgba(245,158,11,.1)",
};

function tagColor(tag: string) {
  return TAG_COLORS[tag] ?? "rgba(26,58,92,.07)";
}

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  } catch {
    return dateStr;
  }
}

export default function DailyPage() {
  const briefings = getAllDailyBriefings();

  // Collect unique tags
  const allTags = Array.from(
    new Set(briefings.flatMap((b) => b.tags))
  );

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      {/* Hero header */}
      <div style={{ marginBottom: 48, paddingBottom: 40, borderBottom: "1px solid var(--border)" }}>
        <span style={{
          display: "inline-block",
          fontFamily: "'Trebuchet MS', sans-serif",
          fontSize: ".72rem",
          fontWeight: 700,
          letterSpacing: ".16em",
          textTransform: "uppercase",
          color: "var(--orange)",
          background: "rgba(200,84,26,.1)",
          padding: "3px 12px",
          borderRadius: 20,
          marginBottom: 16,
        }}>
          Daily GenAI Intelligence
        </span>
        <h1 style={{
          fontFamily: "'Trebuchet MS', sans-serif",
          fontSize: "2.6rem",
          fontWeight: 900,
          color: "var(--navy)",
          marginBottom: 14,
          lineHeight: 1.1,
        }}>
          AI Stories That Matter
        </h1>
        <p style={{
          fontFamily: "Georgia, serif",
          fontSize: "1.05rem",
          color: "var(--muted)",
          maxWidth: 640,
          lineHeight: 1.8,
          marginBottom: 24,
        }}>
          10 strategic AI signals every morning — curated from 30+ sources for CTOs, architects,
          and engineering leaders. Enterprise AI, governance, agentic systems, and architecture.
          No hype. Every claim sourced.
        </p>

        {/* Subscribe CTA */}
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 12,
          background: "var(--navy)",
          borderRadius: 8,
          padding: "14px 24px",
        }}>
          <span style={{ fontSize: "1.1rem" }}>📬</span>
          <div>
            <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", fontWeight: 700, color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: ".1em", marginBottom: 2 }}>
              Get this in your inbox
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: ".9rem", color: "#fff" }}>
              Daily briefings, delivered every morning →{" "}
              <a href="mailto:ranjanemail@gmail.com?subject=Subscribe to Daily AI Intel"
                style={{ color: "var(--orange)", fontWeight: 700, textDecoration: "none" }}>
                Subscribe free
              </a>
            </p>
          </div>
        </div>
      </div>

      {briefings.length === 0 ? (
        <div style={{ padding: "48px 0", color: "var(--muted)", fontFamily: "Georgia, serif", fontStyle: "italic", lineHeight: 1.7 }}>
          <p>No briefings yet. Files in <code>content/daily/</code> appear here automatically.</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 56 }}>
          {/* Main list */}
          <div>
            {/* Stats bar */}
            <div style={{
              display: "flex",
              gap: 24,
              marginBottom: 32,
              padding: "12px 16px",
              background: "rgba(26,58,92,.04)",
              borderRadius: 8,
              border: "1px solid var(--border)",
            }}>
              <div>
                <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.3rem", fontWeight: 900, color: "var(--navy)" }}>
                  {briefings.length}
                </span>
                <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".75rem", color: "var(--muted)", marginLeft: 6 }}>
                  briefings
                </span>
              </div>
              <div style={{ width: 1, background: "var(--border)" }} />
              <div>
                <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.3rem", fontWeight: 900, color: "var(--navy)" }}>
                  {briefings.reduce((s, b) => s + (b.signalCount ?? 0), 0)}
                </span>
                <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".75rem", color: "var(--muted)", marginLeft: 6 }}>
                  AI signals curated
                </span>
              </div>
              <div style={{ width: 1, background: "var(--border)" }} />
              <div>
                <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.3rem", fontWeight: 900, color: "var(--navy)" }}>
                  30+
                </span>
                <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".75rem", color: "var(--muted)", marginLeft: 6 }}>
                  sources scanned daily
                </span>
              </div>
            </div>

            {/* Briefing cards */}
            {briefings.map((b, i) => (
              <Link key={b.slug} href={`/daily/${b.slug}`} style={{ display: "block", textDecoration: "none" }}>
                <article className="card-slide-hover" style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "28px 32px",
                  marginBottom: 20,
                  boxShadow: "var(--shadow)",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Latest badge */}
                  {i === 0 && (
                    <div style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: "var(--orange)",
                      color: "#fff",
                      fontFamily: "'Trebuchet MS', sans-serif",
                      fontSize: ".62rem",
                      fontWeight: 700,
                      letterSpacing: ".12em",
                      textTransform: "uppercase",
                      padding: "4px 12px",
                      borderBottomLeftRadius: 8,
                    }}>Latest</div>
                  )}

                  {/* Top row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{
                        fontFamily: "'Trebuchet MS', sans-serif",
                        fontSize: ".68rem",
                        fontWeight: 700,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--orange)",
                        background: "rgba(200,84,26,.08)",
                        padding: "3px 10px",
                        borderRadius: 20,
                      }}>Daily Intel</span>
                      <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".8rem", color: "var(--muted)" }}>
                        {formatDate(b.date)}
                      </span>
                    </div>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      {b.signalCount && (
                        <span style={{
                          fontFamily: "'Trebuchet MS', sans-serif",
                          fontSize: ".7rem",
                          fontWeight: 700,
                          color: "var(--navy)",
                          background: "rgba(26,58,92,.08)",
                          padding: "3px 10px",
                          borderRadius: 20,
                          border: "1px solid rgba(26,58,92,.12)",
                        }}>
                          {b.signalCount} signals
                        </span>
                      )}
                      <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", color: "var(--muted)" }}>
                        {b.readTime}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h2 style={{
                    fontFamily: "'Trebuchet MS', sans-serif",
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    color: "var(--navy)",
                    marginBottom: 10,
                    lineHeight: 1.3,
                  }}>{b.title}</h2>

                  {/* Excerpt */}
                  <p style={{
                    fontFamily: "Georgia, serif",
                    fontSize: ".9rem",
                    color: "var(--muted)",
                    lineHeight: 1.75,
                    marginBottom: 16,
                  }}>{b.excerpt}</p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {b.tags.slice(0, 5).map((t) => (
                      <span key={t} style={{
                        fontFamily: "'Trebuchet MS', sans-serif",
                        fontSize: ".67rem",
                        fontWeight: 600,
                        color: "var(--navy)",
                        background: tagColor(t),
                        padding: "3px 9px",
                        borderRadius: 20,
                        border: "1px solid rgba(26,58,92,.08)",
                      }}>{t}</span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Sidebar */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Sticky CTA */}
            <div style={{
              background: "var(--navy)",
              borderRadius: 10,
              padding: "24px 20px",
              color: "#fff",
              position: "sticky",
              top: 24,
            }}>
              <p style={{
                fontFamily: "'Trebuchet MS', sans-serif",
                fontSize: ".68rem",
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--orange)",
                marginBottom: 12,
              }}>What&apos;s Inside Each Briefing</p>

              {[
                ["🎯", "Top 10 Strategic Signals"],
                ["⚡", "Quick Hits Roundup"],
                ["🛡", "Responsible AI Watch"],
                ["🤖", "Agentic SDLC Watch"],
                ["🏗", "Architecture Notes"],
                ["🔬", "Research Watch"],
                ["🎙", "Drive Time Talk Track"],
                ["💼", "LinkedIn Content Ideas"],
              ].map(([icon, item]) => (
                <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 10 }}>
                  <span style={{ fontSize: ".85rem", marginTop: 1 }}>{icon}</span>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: ".84rem", color: "rgba(255,255,255,.75)", lineHeight: 1.4 }}>{item}</span>
                </div>
              ))}

              <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,.1)" }}>
                <p style={{ fontFamily: "Georgia, serif", fontSize: ".84rem", color: "rgba(255,255,255,.6)", lineHeight: 1.6, marginBottom: 10 }}>
                  Curated from 30+ AI labs, developer tools, governance bodies, and research feeds.
                </p>
                <a
                  href="mailto:ranjanemail@gmail.com?subject=Subscribe to Daily AI Intel"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "var(--orange)",
                    color: "#fff",
                    fontFamily: "'Trebuchet MS', sans-serif",
                    fontSize: ".78rem",
                    fontWeight: 700,
                    padding: "10px 16px",
                    borderRadius: 6,
                    textDecoration: "none",
                    letterSpacing: ".05em",
                  }}>
                  📬 Subscribe Free →
                </a>
              </div>
            </div>

            {/* Topics covered */}
            <div style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "20px",
            }}>
              <p style={{
                fontFamily: "'Trebuchet MS', sans-serif",
                fontSize: ".68rem",
                fontWeight: 700,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 12,
              }}>Topics Covered</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {allTags.map((t) => (
                  <span key={t} style={{
                    fontFamily: "'Trebuchet MS', sans-serif",
                    fontSize: ".67rem",
                    fontWeight: 600,
                    color: "var(--navy)",
                    background: tagColor(t),
                    padding: "3px 9px",
                    borderRadius: 20,
                    border: "1px solid rgba(26,58,92,.08)",
                  }}>{t}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
