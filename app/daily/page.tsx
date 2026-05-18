import type { Metadata } from "next";
import Link from "next/link";
import { getAllDailyBriefings } from "@/lib/content";

export const metadata: Metadata = { title: "Daily GenAI Intel" };

export default function DailyPage() {
  const briefings = getAllDailyBriefings();

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      <div style={{ marginBottom: 48, borderBottom: "1px solid var(--border)", paddingBottom: 32 }}>
        <span style={{ display: "block", fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 8 }}>
          Daily GenAI Intelligence
        </span>
        <h1 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "2.2rem", fontWeight: 900, color: "var(--navy)", marginBottom: 12 }}>Daily Intel</h1>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "var(--muted)", maxWidth: 600, lineHeight: 1.75 }}>
          Daily briefings on Generative AI, agentic systems, Responsible AI governance, AI security, and enterprise architecture — curated for CTOs, architects, and engineering leaders. No hype. Every claim sourced.
        </p>
      </div>

      {briefings.length === 0 ? (
        <div style={{ padding: "48px 0", color: "var(--muted)", fontFamily: "Georgia, serif", fontStyle: "italic", lineHeight: 1.7 }}>
          <p>No briefings yet. Add markdown files to <code>content/daily/</code> — the filename becomes the date slug (e.g. <code>2026-05-17.md</code>).</p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 56 }}>
          {/* Briefing list */}
          <div>
            {briefings.map((b) => (
              <Link key={b.slug} href={`/daily/${b.slug}`} style={{ display: "block", textDecoration: "none" }}>
                <article style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 8,
                  padding: "24px 28px",
                  marginBottom: 16,
                  boxShadow: "var(--shadow)",
                  transition: "transform .15s, box-shadow .15s",
                }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(4px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-h)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.transform = "translateX(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)";
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{
                        fontFamily: "'Trebuchet MS', sans-serif",
                        fontSize: ".68rem",
                        fontWeight: 700,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--orange)",
                        background: "rgba(200,84,26,.08)",
                        padding: "2px 8px",
                        borderRadius: 20,
                      }}>Daily Intel</span>
                      <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", color: "var(--muted)" }}>{b.date}</span>
                    </div>
                    <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".75rem", color: "var(--muted)" }}>{b.readTime}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.05rem", fontWeight: 800, color: "var(--navy)", marginBottom: 10, lineHeight: 1.35 }}>{b.title}</h2>
                  <p style={{ fontFamily: "Georgia, serif", fontSize: ".88rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: 12 }}>{b.excerpt}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {b.tags.slice(0, 4).map((t) => (
                      <span key={t} style={{
                        fontFamily: "'Trebuchet MS', sans-serif",
                        fontSize: ".68rem",
                        fontWeight: 600,
                        color: "var(--navy)",
                        background: "rgba(26,58,92,.07)",
                        padding: "2px 8px",
                        borderRadius: 20,
                      }}>{t}</span>
                    ))}
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Sidebar */}
          <aside style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ background: "var(--navy)", borderRadius: 8, padding: 24, color: "#fff", position: "sticky", top: 24 }}>
              <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 16 }}>
                What&apos;s Covered
              </p>
              {[
                "Top 10 Strategic Signals",
                "Enterprise SDLC Impact",
                "Responsible AI Watch",
                "Agentic SDLC Watch",
                "Architecture Notes",
                "Research Watch",
                "Drive Time Talk Track",
                "LinkedIn Content Ideas",
                "Final Watchlist",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                  <span style={{ color: "var(--orange)", fontSize: ".7rem" }}>▸</span>
                  <span style={{ fontFamily: "Georgia, serif", fontSize: ".84rem", color: "rgba(255,255,255,.7)" }}>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
