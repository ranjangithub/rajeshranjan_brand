import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { getAllPosts, getAllDailyBriefings } from "@/lib/content";

const EXPERTISE = [
  "Generative AI", "Agentic SDLC", "Responsible AI", "AI Governance",
  "AI Security", "Enterprise Architecture", "RAG & LLMOps", "AI Evals",
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 6);
  const featuredPost = posts.find((p) => p.featured) ?? posts[0];
  const recentPosts = posts.filter((p) => p.slug !== featuredPost?.slug).slice(0, 4);
  const dailyBriefings = getAllDailyBriefings().slice(0, 3);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)", padding: "72px 0 64px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 60, alignItems: "center" }}>
          <div>
            <span style={{
              display: "inline-block",
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: ".72rem",
              fontWeight: 700,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--orange)",
              marginBottom: 16,
            }}>Enterprise AI · Responsible AI · Agentic SDLC</span>

            <h1 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "2.6rem", fontWeight: 900, color: "var(--navy)", lineHeight: 1.15, marginBottom: 20 }}>
              AI that works in the real world.<br />
              <span style={{ color: "var(--orange)" }}>Governed. Secure. Auditable.</span>
            </h1>

            <p style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 560, marginBottom: 28 }}>
              I am Rajesh Ranjan Kumar — enterprise AI architect, Responsible AI practitioner,
              and agentic SDLC pioneer. I write on how AI is reshaping software engineering,
              governance, and the future of regulated enterprise systems.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
              {EXPERTISE.map((e) => (
                <span key={e} style={{
                  fontFamily: "'Trebuchet MS', sans-serif",
                  fontSize: ".78rem",
                  fontWeight: 600,
                  color: "var(--navy)",
                  background: "rgba(26,58,92,.07)",
                  padding: "5px 14px",
                  borderRadius: 20,
                  border: "1px solid rgba(26,58,92,.12)",
                }}>{e}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12 }}>
              <Link href="/about" style={{
                fontFamily: "'Trebuchet MS', sans-serif",
                fontWeight: 700,
                fontSize: ".88rem",
                background: "var(--navy)",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: 4,
                textDecoration: "none",
                letterSpacing: ".03em",
              }}>About Me</Link>
              <Link href="/daily" style={{
                fontFamily: "'Trebuchet MS', sans-serif",
                fontWeight: 700,
                fontSize: ".88rem",
                background: "var(--orange)",
                color: "#fff",
                padding: "12px 28px",
                borderRadius: 4,
                textDecoration: "none",
                letterSpacing: ".03em",
              }}>Daily AI Intel →</Link>
            </div>
          </div>

          {/* Profile card */}
          <div style={{
            background: "var(--bg)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: 32,
            boxShadow: "var(--shadow)",
            textAlign: "center",
          }}>
            <div style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              background: "var(--navy)",
              margin: "0 auto 16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.2rem",
              color: "#fff",
              fontFamily: "'Trebuchet MS', sans-serif",
              fontWeight: 900,
            }}>RR</div>
            <h2 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1rem", fontWeight: 800, color: "var(--navy)", marginBottom: 4 }}>
              Rajesh Ranjan Kumar
            </h2>
            <p style={{ fontFamily: "Georgia, serif", fontSize: ".82rem", color: "var(--muted)", fontStyle: "italic", marginBottom: 20 }}>
              Enterprise AI Architect &amp; Author
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["🤖", "Generative AI & Agentic Systems"],
                ["🛡️", "Responsible AI & Governance"],
                ["✈️", "Aviation Technology"],
                ["🔗", "Blockchain & Decentralized Identity"],
              ].map(([icon, label]) => (
                <div key={label} style={{ display: "flex", gap: 10, alignItems: "center", background: "var(--surface)", padding: "8px 12px", borderRadius: 6, border: "1px solid var(--border)" }}>
                  <span style={{ fontSize: "1rem" }}>{icon}</span>
                  <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", color: "var(--text)" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Daily Intel ──────────────────────────────────────── */}
      {dailyBriefings.length > 0 && (
        <section style={{ padding: "64px 0", background: "var(--navy)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 32 }}>
              <div>
                <span style={{
                  display: "block",
                  fontFamily: "'Trebuchet MS', sans-serif",
                  fontSize: ".72rem",
                  fontWeight: 700,
                  letterSpacing: ".16em",
                  textTransform: "uppercase",
                  color: "var(--orange)",
                  marginBottom: 6,
                }}>Daily GenAI Intelligence</span>
                <h2 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "#fff" }}>
                  Latest AI Briefings
                </h2>
              </div>
              <Link href="/daily" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".82rem", fontWeight: 700, color: "var(--orange)", textDecoration: "none" }}>
                All briefings →
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {dailyBriefings.map((b) => (
                <Link key={b.slug} href={`/daily/${b.slug}`} style={{ textDecoration: "none" }}>
                  <div style={{
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.1)",
                    borderRadius: 8,
                    padding: 24,
                    transition: "all .2s",
                  }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.1)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.05)";
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                      <span style={{
                        fontFamily: "'Trebuchet MS', sans-serif",
                        fontSize: ".68rem",
                        fontWeight: 700,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "var(--orange)",
                        background: "rgba(200,84,26,.2)",
                        padding: "2px 8px",
                        borderRadius: 20,
                      }}>Daily Intel</span>
                      <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".75rem", color: "rgba(255,255,255,.45)" }}>{b.date}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".98rem", fontWeight: 700, color: "#fff", lineHeight: 1.35, marginBottom: 10 }}>{b.title}</h3>
                    <p style={{ fontFamily: "Georgia, serif", fontSize: ".84rem", color: "rgba(255,255,255,.55)", lineHeight: 1.65 }}>{b.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Blog Posts ───────────────────────────────────────── */}
      <section style={{ padding: "72px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 36 }}>
            <div>
              <span style={{
                display: "block",
                fontFamily: "'Trebuchet MS', sans-serif",
                fontSize: ".72rem",
                fontWeight: 700,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                color: "var(--orange)",
                marginBottom: 6,
              }}>Writing &amp; Analysis</span>
              <h2 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "var(--navy)" }}>
                Latest from the Blog
              </h2>
            </div>
            <Link href="/blog" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".82rem", fontWeight: 700, color: "var(--orange)", textDecoration: "none" }}>
              All posts →
            </Link>
          </div>

          {posts.length === 0 ? (
            <div style={{ padding: "48px 0", textAlign: "center", color: "var(--muted)", fontFamily: "Georgia, serif", fontStyle: "italic" }}>
              Posts coming soon. Add markdown files to <code>content/posts/</code>.
            </div>
          ) : (
            <div>
              {featuredPost && (
                <div style={{ marginBottom: 32 }}>
                  <PostCard post={featuredPost} variant="featured" />
                </div>
              )}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
                {recentPosts.map((p) => (
                  <PostCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── About strip ──────────────────────────────────────── */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "56px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
          <div>
            <span style={{
              display: "block",
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: ".72rem",
              fontWeight: 700,
              letterSpacing: ".16em",
              textTransform: "uppercase",
              color: "var(--orange)",
              marginBottom: 10,
            }}>About</span>
            <h2 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.5rem", fontWeight: 900, color: "var(--navy)", marginBottom: 16 }}>
              Enterprise AI at the frontier of governance and engineering
            </h2>
            <p style={{ fontFamily: "Georgia, serif", fontSize: ".95rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>
              Two decades of experience building software systems, and the last several years at the intersection of AI, enterprise architecture, and responsible AI governance.
              I work with CTOs, architects, and engineering leaders navigating the agentic AI transition.
            </p>
            <Link href="/about" style={{
              fontFamily: "'Trebuchet MS', sans-serif",
              fontWeight: 700,
              fontSize: ".85rem",
              color: "var(--orange)",
              textDecoration: "none",
              letterSpacing: ".03em",
              borderBottom: "2px solid var(--orange)",
              paddingBottom: 2,
            }}>Read my full story →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { num: "20+", label: "Years in Enterprise Tech" },
              { num: "∞", label: "AI Briefings Published" },
              { num: "5", label: "Domains: AI · Blockchain · Aviation · Governance · SDLC" },
              { num: "Daily", label: "GenAI Intelligence Reports" },
            ].map(({ num, label }) => (
              <div key={label} style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "20px 16px",
                textAlign: "center",
              }}>
                <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.8rem", fontWeight: 900, color: "var(--navy)", marginBottom: 4 }}>{num}</p>
                <p style={{ fontFamily: "Georgia, serif", fontSize: ".78rem", color: "var(--muted)", fontStyle: "italic", lineHeight: 1.4 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
