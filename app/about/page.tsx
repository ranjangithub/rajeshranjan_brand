import type { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { getAbout } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

const SKILLS = [
  { group: "Generative AI & Agents", items: ["LLM Architecture", "Agentic SDLC", "RAG Pipelines", "AI Evals", "LangChain / LangGraph", "LlamaIndex", "Prompt Engineering"] },
  { group: "Responsible AI & Governance", items: ["NIST AI RMF", "EU AI Act", "OWASP LLM Top 10", "AI Security", "Prompt Injection Defense", "Model Risk Management", "Human Oversight Frameworks"] },
  { group: "Enterprise Architecture", items: ["Cloud-Native Design", "Microservices", "API Gateway Patterns", "Data Sovereignty", "MLOps", "AI Observability", "LLM Gateway Patterns"] },
  { group: "Other Domains", items: ["Blockchain / Web3", "Decentralized Identity", "Verifiable Credentials", "Aviation Technology", "EdTech", "FinTech", "HealthTech"] },
];

export default function AboutPage() {
  const aboutContent = getAbout();

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      {/* Page header */}
      <div style={{ marginBottom: 56, borderBottom: "1px solid var(--border)", paddingBottom: 48 }}>
        <span className="section-label">About</span>
        <h1 style={{
          fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 900,
          color: "var(--text)",
          lineHeight: 1.2,
          marginBottom: 16,
        }}>
          Rajesh Ranjan
        </h1>
        <div className="divider" />
        <p style={{ fontFamily: "Georgia, serif", fontSize: "1.05rem", color: "var(--muted)", fontStyle: "italic", maxWidth: 620, lineHeight: 1.7 }}>
          Strategic Enterprise Architect · Technology Leader · Enterprise AI Practitioner
        </p>
      </div>

      <div className="grid-main-sidebar">
        {/* Main bio */}
        <div>
          <div className="prose-brand">
            <ReactMarkdown>{aboutContent}</ReactMarkdown>
          </div>
        </div>

        {/* Sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {/* Quick facts */}
          <div style={{ background: "var(--navy)", borderRadius: 8, padding: 24, color: "#fff" }}>
            <p style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontSize: ".78rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 16 }}>
              Quick Facts
            </p>
            {[
              ["📍", "New York City Metro Area"],
              ["💡", "Enterprise AI Practitioner"],
              ["🏢", "CertOnce · ZipiLipi.ai · Verizon"],
              ["🎙️", "Speaker & Advisor"],
            ].map(([icon, fact]) => (
              <div key={fact} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: "1rem" }}>{icon}</span>
                <span style={{ fontFamily: "Georgia, serif", fontSize: ".88rem", color: "rgba(255,255,255,.75)", lineHeight: 1.4 }}>{fact}</span>
              </div>
            ))}
          </div>

          {/* Focus Areas */}
          <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 8, padding: 24 }}>
            <p style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontSize: ".78rem", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 16 }}>
              Focus Areas
            </p>
            {[
              "Agentic AI & SDLC",
              "Responsible AI & Governance",
              "AI Security & Prompt Defense",
              "Enterprise Architecture",
              "Observability & Evals",
              "Blockchain & Decentralized Identity",
            ].map((t) => (
              <div key={t} style={{ fontFamily: "Georgia, serif", fontSize: ".88rem", color: "var(--text)", padding: "7px 0", borderBottom: "1px solid var(--border)", lineHeight: 1.4 }}>
                {t}
              </div>
            ))}
          </div>

          {/* Connect */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="https://www.linkedin.com/in/ranjanemail/" target="_blank" rel="noreferrer" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "#0a66c2",
              color: "#fff",
              fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
              fontWeight: 700,
              fontSize: ".9rem",
              padding: "13px 20px",
              borderRadius: 6,
              textDecoration: "none",
              letterSpacing: ".03em",
              boxShadow: "0 2px 12px rgba(10,102,194,.3)",
            }}>
              <span style={{ fontWeight: 900, fontSize: "1.05rem" }}>in</span> Connect on LinkedIn
            </a>
            <a href="https://github.com/ranjangithub" target="_blank" rel="noreferrer" style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "var(--card-bg)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
              fontWeight: 700,
              fontSize: ".88rem",
              padding: "11px 20px",
              borderRadius: 6,
              textDecoration: "none",
            }}>
              GitHub →
            </a>
          </div>

          {/* Daily Intel CTA */}
          <div style={{ background: "var(--orange)", borderRadius: 8, padding: 24, textAlign: "center" }}>
            <p style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontWeight: 900, fontSize: "1rem", color: "#fff", marginBottom: 8 }}>
              Daily Dose
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: ".82rem", color: "rgba(255,255,255,.85)", marginBottom: 16, lineHeight: 1.5 }}>
              Daily briefings on Agentic AI, Responsible AI, and enterprise architecture.
            </p>
            <a href="/daily" style={{
              display: "block",
              background: "#fff",
              color: "var(--orange)",
              fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
              fontWeight: 700,
              fontSize: ".88rem",
              padding: "10px 20px",
              borderRadius: 4,
              textDecoration: "none",
              letterSpacing: ".04em",
            }}>
              Read Daily Dose →
            </a>
          </div>
        </aside>
      </div>

      {/* Skills grid */}
      <div style={{ marginTop: 72, borderTop: "1px solid var(--border)", paddingTop: 56 }}>
        <span className="section-label">Expertise</span>
        <h2 className="section-title">Domain Expertise</h2>
        <div className="divider" />
        <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "var(--muted)", maxWidth: 640, marginBottom: 36, lineHeight: 1.7 }}>
          Two decades of hands-on work across enterprise architecture, AI governance, and emerging technology platforms.
        </p>
        <div className="grid-4">
          {SKILLS.map(({ group, items }) => (
            <div key={group} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 8, padding: 20 }}>
              <p style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontSize: ".8rem", fontWeight: 700, color: "var(--text)", marginBottom: 14, letterSpacing: ".04em" }}>{group}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                {items.map((item) => (
                  <li key={item} style={{ fontFamily: "Georgia, serif", fontSize: ".84rem", color: "var(--muted)", display: "flex", gap: 6, alignItems: "baseline", lineHeight: 1.5 }}>
                    <span style={{ color: "var(--orange)", fontSize: ".6rem", flexShrink: 0 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Patents */}
      <div style={{ marginTop: 64, borderTop: "1px solid var(--border)", paddingTop: 48 }}>
        <span className="section-label">Patents</span>
        <h2 className="section-title">US Patents</h2>
        <div className="divider" />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { id: "US 9544317", title: "Identification of potential fraudulent website activity", year: "Jan 2017" },
            { id: "US 14/588071", title: "Rule Configuration Framework for Communication Protocols", year: "Dec 2014" },
          ].map(({ id, title, year }) => (
            <div key={id} style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 8, padding: "18px 24px", display: "flex", gap: 20, alignItems: "center" }}>
              <div style={{
                background: "var(--navy)",
                color: "#fff",
                fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
                fontWeight: 700,
                fontSize: ".75rem",
                letterSpacing: ".06em",
                padding: "6px 12px",
                borderRadius: 4,
                flexShrink: 0,
              }}>{id}</div>
              <div>
                <p style={{ fontFamily: "Georgia, serif", fontSize: ".95rem", color: "var(--text)", margin: 0, lineHeight: 1.4 }}>{title}</p>
                <p style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontSize: ".78rem", color: "var(--muted)", margin: "4px 0 0" }}>{year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
