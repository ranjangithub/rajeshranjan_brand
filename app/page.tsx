import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { getAllPosts, getAllDailyBriefings } from "@/lib/content";

const FOCUS_AREAS = [
  { icon: "🤖", title: "Agentic AI & SDLC", desc: "Building agentic systems that work safely in production — coding agents, autonomous workflows, and human-in-the-loop architectures." },
  { icon: "🛡️", title: "Responsible AI", desc: "Translating NIST AI RMF, EU AI Act, and OWASP LLM Top 10 into engineering controls that actually enforce governance." },
  { icon: "🔐", title: "AI Security", desc: "Prompt injection defense, model risk management, guardrails, adversarial robustness for production LLM systems." },
  { icon: "🏗️", title: "Enterprise Architecture", desc: "RAG pipelines, evals, observability, and AI infrastructure that auditors and regulators can verify." },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 4);
  const recentPosts = posts.slice(0, 3);
  const dailyBriefings = getAllDailyBriefings().slice(0, 3);

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 50%, var(--green) 100%)", padding: "96px 0 88px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 15% 50%, rgba(224,123,57,.15) 0%, transparent 50%), radial-gradient(circle at 85% 20%, rgba(255,255,255,.05) 0%, transparent 40%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <div style={{ maxWidth: 720 }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
              fontSize: ".75rem",
              fontWeight: 700,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "#f4b07a",
              background: "rgba(224,123,57,.22)",
              border: "1px solid rgba(224,123,57,.4)",
              padding: "5px 14px",
              borderRadius: 20,
              marginBottom: 28,
            }}>Enterprise AI · Responsible AI · Agentic SDLC</div>

            <h1 style={{
              fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: "-.02em",
            }}>
              Rajesh Ranjan
            </h1>

            <p style={{ fontFamily: "Georgia, serif", fontSize: "1.15rem", color: "rgba(255,255,255,.85)", lineHeight: 1.75, maxWidth: 600, marginBottom: 12 }}>
              Enterprise AI architect with 20+ years building systems at scale.
              I write daily on Generative AI, responsible AI governance, agentic SDLC,
              and the engineering controls that make AI trustworthy in production.
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: ".95rem", color: "rgba(255,255,255,.55)", fontStyle: "italic", marginBottom: 40 }}>
              Verizon · CertOnce · ZipiLipi.ai · AWS ML Specialist · 2 US Patents
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/daily" style={{
                fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
                fontWeight: 700,
                fontSize: ".95rem",
                letterSpacing: ".04em",
                background: "var(--orange)",
                color: "#fff",
                padding: "13px 30px",
                borderRadius: 4,
                textDecoration: "none",
              }}>Read Daily AI Intel →</Link>
              <Link href="/about" style={{
                fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
                fontWeight: 700,
                fontSize: ".95rem",
                letterSpacing: ".04em",
                background: "rgba(255,255,255,.12)",
                border: "2px solid rgba(255,255,255,.4)",
                color: "#fff",
                padding: "13px 30px",
                borderRadius: 4,
                textDecoration: "none",
              }}>About Me</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tagline strip ────────────────────────────────────── */}
      <div style={{ background: "var(--orange)", padding: "20px 0", textAlign: "center" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "#fff", fontStyle: "italic", letterSpacing: ".02em" }}>
            <strong style={{ fontStyle: "normal" }}>"</strong>Powerful AI is not the problem.
            Unaccountable AI is.<strong style={{ fontStyle: "normal" }}>"</strong>
            <span style={{ marginLeft: 12, fontStyle: "normal", fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".85rem", opacity: .85 }}>
              — 10 AI signals curated daily from 30+ sources
            </span>
          </p>
        </div>
      </div>

      {/* ── Focus areas ──────────────────────────────────────── */}
      <section style={{ padding: "80px 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span className="section-label">What I Write About</span>
            <h2 className="section-title" style={{ margin: "0 auto" }}>Enterprise AI in the real world</h2>
            <div className="divider" style={{ margin: "18px auto 0" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {FOCUS_AREAS.map(({ icon, title, desc }) => (
              <div key={title} style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: "28px 24px",
              }}>
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontSize: ".95rem", fontWeight: 700, color: "var(--text)", marginBottom: 8, lineHeight: 1.3 }}>{title}</h3>
                <p style={{ fontFamily: "Georgia, serif", fontSize: ".88rem", color: "var(--muted)", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Daily Intel ──────────────────────────────────────── */}
      {dailyBriefings.length > 0 && (
        <section style={{ padding: "72px 0", background: "var(--navy)" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 40 }}>
              <div>
                <span className="section-label" style={{ color: "#f4b07a" }}>Daily Briefings</span>
                <h2 style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 900, color: "#fff", lineHeight: 1.25 }}>
                  Daily AI Intelligence
                </h2>
                <div style={{ width: 52, height: 4, background: "var(--orange)", borderRadius: 2, marginTop: 16 }} />
              </div>
              <Link href="/daily" style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontSize: ".88rem", fontWeight: 700, color: "var(--orange)", textDecoration: "none", marginTop: 6 }}>
                All briefings →
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {dailyBriefings.map((b) => (
                <Link key={b.slug} href={`/daily/${b.slug}`} style={{ textDecoration: "none" }}>
                  <div className="card-dark-hover" style={{
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.1)",
                    borderRadius: 8,
                    padding: 24,
                    height: "100%",
                  }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                      <span style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontSize: ".68rem", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--orange)", background: "rgba(200,84,26,.2)", padding: "2px 8px", borderRadius: 20 }}>Daily Intel</span>
                      <span style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontSize: ".75rem", color: "rgba(255,255,255,.45)" }}>{b.date}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontSize: ".98rem", fontWeight: 700, color: "#fff", lineHeight: 1.35, marginBottom: 10 }}>{b.title}</h3>
                    <p style={{ fontFamily: "Georgia, serif", fontSize: ".84rem", color: "rgba(255,255,255,.55)", lineHeight: 1.7 }}>{b.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── About strip ──────────────────────────────────────── */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "72px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <span className="section-label">About Me</span>
            <h2 className="section-title">Rajesh Ranjan</h2>
            <div className="divider" />
            <p className="section-sub" style={{ marginBottom: 12 }}>
              Strategic Enterprise Architect with 20+ years building software systems at scale.
              Led cloud transformation of 40+ applications at Verizon, built Generative AI platforms
              at ZipiLipi.ai, and deployed Ethereum-based credentialing infrastructure at CertOnce.
            </p>
            <p className="section-sub" style={{ marginBottom: 28 }}>
              Holds 2 US patents. AWS Certified ML Specialist. Writes daily on Responsible AI,
              agentic systems, and enterprise AI governance.
            </p>
            <Link href="/about" style={{
              fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
              fontWeight: 700,
              fontSize: ".88rem",
              letterSpacing: ".04em",
              color: "var(--orange)",
              textDecoration: "none",
              borderBottom: "2px solid var(--orange)",
              paddingBottom: 2,
            }}>Full bio →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { num: "20+", label: "Years in Enterprise Tech" },
              { num: "40+", label: "Apps Migrated to Cloud" },
              { num: "2", label: "US Patents" },
              { num: "Daily", label: "AI Intelligence Reports" },
            ].map(({ num, label }) => (
              <div key={label} style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 8, padding: "20px 16px", textAlign: "center" }}>
                <p style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontSize: "1.8rem", fontWeight: 900, color: "var(--orange)", lineHeight: 1, marginBottom: 8 }}>{num}</p>
                <p style={{ fontFamily: "Georgia, serif", fontSize: ".78rem", color: "var(--muted)", fontStyle: "italic", lineHeight: 1.4 }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Blog Posts ───────────────────────────────────────── */}
      {recentPosts.length > 0 && (
        <section style={{ padding: "80px 0" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 44 }}>
              <div>
                <span className="section-label">Writing &amp; Analysis</span>
                <h2 className="section-title">From the Blog</h2>
                <div className="divider" />
              </div>
              <Link href="/blog" style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontSize: ".88rem", fontWeight: 700, color: "var(--orange)", textDecoration: "none", marginTop: 6 }}>
                All posts →
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
              {recentPosts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
