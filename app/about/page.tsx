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
      <div style={{ marginBottom: 56, borderBottom: "1px solid var(--border)", paddingBottom: 40 }}>
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
        <h1 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "2.4rem", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 16 }}>
          Rajesh Ranjan Kumar
        </h1>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "1.1rem", color: "var(--muted)", fontStyle: "italic", maxWidth: 600, lineHeight: 1.7 }}>
          Enterprise AI architect · Responsible AI practitioner · Agentic SDLC pioneer
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 64 }}>
        {/* Main bio */}
        <div>
          {aboutContent ? (
            <div className="prose-brand">
              <ReactMarkdown>{aboutContent}</ReactMarkdown>
            </div>
          ) : (
            <div className="prose-brand">
              <h2 id="about">My Work</h2>
              <p>
                I am Rajesh Ranjan Kumar — an enterprise technology leader focused on the intersection of
                Generative AI, agentic systems, and responsible AI governance. For over two decades I have
                built complex software systems for enterprises across banking, insurance, aviation, and
                public sector.
              </p>
              <p>
                Today my primary focus is helping engineering leaders and CTOs navigate the transition
                to agentic AI: how to deploy AI coding agents safely, how to build observable and
                auditable AI systems, and how to translate governance frameworks like the NIST AI RMF
                and EU AI Act into engineering controls that actually work.
              </p>

              <h2 id="expertise">Areas of Expertise</h2>
              <p>
                My work spans five intersecting domains: Generative AI and agentic systems,
                Responsible AI and governance, enterprise software architecture, blockchain and
                decentralized identity, and aviation technology. I write and speak on all five.
              </p>

              <h2 id="speaking">Speaking &amp; Writing</h2>
              <p>
                I publish daily AI intelligence briefings covering the strategic signals that matter
                to CTOs, architects, and Responsible AI leaders — filtered for enterprise SDLC impact,
                governance implications, and architectural significance. No hype. No vendor press releases.
              </p>
              <p>
                I speak on agentic AI deployment, responsible AI governance, and the future of software
                engineering in AI-native enterprises. Available for conferences, executive roundtables,
                and advisory engagements.
              </p>

              <h2 id="contact">Get in Touch</h2>
              <p>
                Connect on{" "}
                <a href="https://linkedin.com/in/rajeshranjankumar" target="_blank" rel="noreferrer">LinkedIn</a>
                {" "}or{" "}
                <a href="https://twitter.com/rajeshranjankr" target="_blank" rel="noreferrer">X / Twitter</a>.
                For advisory, speaking, or collaboration inquiries, reach out via LinkedIn.
              </p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {/* Quick facts */}
          <div style={{ background: "var(--navy)", borderRadius: 8, padding: 24, color: "#fff" }}>
            <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 16 }}>
              Quick Facts
            </p>
            {[
              ["📍", "Based in USA"],
              ["💼", "Enterprise AI Architect"],
              ["✍️", "Author & Blogger"],
              ["🎙️", "Speaker & Advisor"],
              ["✈️", "Avgeek"],
            ].map(([icon, fact]) => (
              <div key={fact} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontSize: "1rem" }}>{icon}</span>
                <span style={{ fontFamily: "Georgia, serif", fontSize: ".88rem", color: "rgba(255,255,255,.75)" }}>{fact}</span>
              </div>
            ))}
          </div>

          {/* Domains */}
          <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: 24 }}>
            <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 16 }}>
              I Write About
            </p>
            {["Generative AI & Agents", "Responsible AI", "AI Governance", "Enterprise SDLC", "Blockchain & Identity", "Aviation Technology", "AI Security"].map((t) => (
              <div key={t} style={{ fontFamily: "Georgia, serif", fontSize: ".85rem", color: "var(--text)", padding: "6px 0", borderBottom: "1px solid var(--border)", lineHeight: 1.4 }}>
                {t}
              </div>
            ))}
          </div>

          {/* Connect */}
          <div style={{ background: "rgba(200,84,26,.06)", border: "1px solid rgba(200,84,26,.2)", borderRadius: 8, padding: 24 }}>
            <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 16 }}>
              Connect
            </p>
            {[
              { href: "https://linkedin.com/in/rajeshranjankumar", label: "LinkedIn" },
              { href: "https://twitter.com/rajeshranjankr", label: "X / Twitter" },
              { href: "https://github.com/ranjangstack", label: "GitHub" },
            ].map(({ href, label }) => (
              <a key={href} href={href} target="_blank" rel="noreferrer" style={{
                display: "block",
                fontFamily: "'Trebuchet MS', sans-serif",
                fontWeight: 700,
                fontSize: ".85rem",
                color: "var(--orange)",
                textDecoration: "none",
                padding: "6px 0",
                borderBottom: "1px solid rgba(200,84,26,.15)",
              }}>{label} →</a>
            ))}
          </div>
        </aside>
      </div>

      {/* Skills grid */}
      <div style={{ marginTop: 72, borderTop: "1px solid var(--border)", paddingTop: 56 }}>
        <h2 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.3rem", fontWeight: 900, color: "var(--navy)", marginBottom: 32 }}>
          Skills &amp; Expertise
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {SKILLS.map(({ group, items }) => (
            <div key={group} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: 20 }}>
              <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", fontWeight: 700, color: "var(--navy)", marginBottom: 14, letterSpacing: ".02em" }}>{group}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                {items.map((item) => (
                  <li key={item} style={{ fontFamily: "Georgia, serif", fontSize: ".82rem", color: "var(--muted)", display: "flex", gap: 6, alignItems: "baseline" }}>
                    <span style={{ color: "var(--orange)", fontSize: ".6rem", flexShrink: 0 }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
