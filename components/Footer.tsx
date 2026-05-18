"use client";
import Link from "next/link";

const HASHTAGS = [
  "#GenerativeAI", "#AgenticAI", "#ResponsibleAI", "#AIGovernance", "#AISafety",
  "#AISecurity", "#PromptInjection", "#OWASPTop10", "#NISTAI", "#EUAIAct",
  "#AIEthics", "#AgenticSDLC", "#AIcoding", "#ClaudeCode", "#GitHubCopilot",
  "#Cursor", "#Codex", "#LangChain", "#LangGraph", "#LangSmith", "#LlamaIndex",
  "#RAG", "#VectorDB", "#AIEvals", "#MLOps", "#AIObservability", "#AIArchitecture",
  "#EnterpriseAI", "#AIProductivity", "#PromptEngineering", "#LLM", "#GPT",
  "#Claude", "#Gemini", "#OpenAI", "#Anthropic", "#GoogleDeepMind",
  "#AIStartups", "#DigitalTransformation", "#CloudNative", "#Blockchain",
  "#Web3", "#DecentralizedIdentity", "#VerifiableCredentials", "#DIDs", "#SSI",
  "#FinTech", "#HealthTech", "#EdTech", "#Aviation", "#Avgeek",
  "#TechLeadership", "#CTO", "#EngineeringLeader", "#SoftwareArchitecture",
  "#DataSovereignty", "#AIRegulation", "#FutureOfWork", "#HumanInTheLoop",
  "#AIAdoption", "#AIBias", "#Explainability", "#ModelRisk", "#AIFinOps",
];

const navSections = [
  {
    label: "Content",
    links: [
      { href: "/", label: "Home" },
      { href: "/blog", label: "Blog" },
      { href: "/daily", label: "Daily Intel" },
      { href: "/tags", label: "All Topics" },
    ],
  },
  {
    label: "About",
    links: [
      { href: "/about", label: "About Rajesh" },
      { href: "/about#expertise", label: "Expertise" },
      { href: "/about#speaking", label: "Speaking" },
      { href: "/about#contact", label: "Contact" },
    ],
  },
  {
    label: "Connect",
    links: [
      { href: "https://www.linkedin.com/in/ranjanemail/", label: "LinkedIn" },
      { href: "https://twitter.com/rajeshranjankr", label: "X / Twitter" },
      { href: "https://github.com/ranjangstack", label: "GitHub" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "rgba(255,255,255,.7)", marginTop: 80 }}>
      {/* Hashtag cloud */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,.08)", padding: "48px 0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <p style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            fontSize: ".72rem",
            fontWeight: 700,
            letterSpacing: ".14em",
            textTransform: "uppercase",
            color: "var(--orange)",
            marginBottom: 20,
          }}>
            Topics &amp; Hashtags
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 8px" }}>
            {HASHTAGS.map((tag) => (
              <Link
                key={tag}
                href={`/tags#${tag.replace("#", "")}`}
                style={{
                  fontFamily: "'Trebuchet MS', sans-serif",
                  fontSize: ".78rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,.65)",
                  background: "rgba(255,255,255,.06)",
                  padding: "4px 10px",
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,.1)",
                  textDecoration: "none",
                  transition: "all .15s",
                  letterSpacing: ".01em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "var(--orange)";
                  (e.currentTarget as HTMLElement).style.color = "#fff";
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--orange)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,.06)";
                  (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,.65)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,.1)";
                }}
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div style={{ padding: "40px 0 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40, marginBottom: 40 }}>
            {/* Brand */}
            <div>
              <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1rem", fontWeight: 800, color: "#fff", marginBottom: 8 }}>
                Rajesh Ranjan
              </p>
              <p style={{ fontFamily: "Georgia, serif", fontSize: ".88rem", lineHeight: 1.7, color: "rgba(255,255,255,.55)", fontStyle: "italic" }}>
                Enterprise AI architect, Responsible AI practitioner, and agentic SDLC pioneer. Writing at the intersection of AI, governance, and engineering leadership.
              </p>
            </div>

            {navSections.map((section) => (
              <div key={section.label}>
                <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 12 }}>
                  {section.label}
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {section.links.map(({ href, label }) => (
                    <li key={href}>
                      <Link href={href} target={href.startsWith("http") ? "_blank" : undefined}
                        style={{ fontSize: ".85rem", color: "rgba(255,255,255,.6)", textDecoration: "none", transition: "color .15s" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", paddingTop: 20, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontSize: ".8rem", color: "rgba(255,255,255,.35)" }}>
              © {new Date().getFullYear()} Rajesh Ranjan · All content is my own view.
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: ".78rem", color: "rgba(255,255,255,.3)", fontStyle: "italic" }}>
              Built with Next.js · Content in Markdown · Hosted on Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
