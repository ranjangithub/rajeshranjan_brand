import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tutorials",
  description: "Hands-on tutorials on Agentic AI, blockchain, RAG, and enterprise architecture by Rajesh Ranjan.",
};

const WRITTEN_GUIDES = [
  {
    title: "How I Built DailyTechDose — From Idea to Working AI App",
    description: "The full build story: design thinking, architecture decisions, the Karpathy 1.0/2.0/3.0 framework applied in practice, the LLM Wiki pattern, and why Markdown files beat a database for AI-native apps.",
    format: "25-min read + full code walkthrough",
    level: "Intermediate",
    tags: ["#AgenticAI", "#ClaudeCode", "#NextJS", "#gstack"],
    href: "https://ranjangithub.github.io/how-i-built-dailytechdose/",
    live: true,
  },
  {
    title: "Claude Code · gstack Founder Story",
    description: "How a SaaS founder went from Claude Code frustration to a full AI workflow. Covers the gstack setup, skill composition, and the workflow patterns that stuck.",
    format: "12-min read + 45-min hands-on",
    level: "Beginner",
    tags: ["#ClaudeCode", "#AgenticSDLC", "#gstack"],
    href: "https://ranjangithub.github.io/gstack-founder-story/",
    live: true,
  },
  {
    title: "What is gstack? Garry Tan's Claude Code Skill System Explained",
    description: "gstack is a directory of SKILL.md files that give Claude Code named, reusable workflows. Built by Garry Tan. Here's the philosophy behind it and why it works.",
    format: "10-min read",
    level: "Beginner",
    tags: ["#gstack", "#ClaudeCode", "#AgenticAI"],
    href: "https://ranjangithub.github.io/what-is-gstack/",
    live: true,
  },
  {
    title: "gstack Skill Reference — All 23 Skills and When to Use Each",
    description: "Complete reference for all 23 gstack skills, organized by phase: Think, Plan, Build, Test, Ship, Operate. Every skill, what it does, and when to use it.",
    format: "Reference guide",
    level: "Intermediate",
    tags: ["#gstack", "#AgenticSDLC", "#ClaudeCode"],
    href: "https://ranjangithub.github.io/gstack-skill-reference/",
    live: true,
  },
  {
    title: "Anatomy of a Complex gstack Skill: Inside /ship",
    description: "A deep dive into the /ship command — every layer of the SKILL.md file dissected. Understand how production-grade agentic workflows are structured.",
    format: "15-min read",
    level: "Intermediate",
    tags: ["#gstack", "#AgenticAI", "#AIcoding"],
    href: "https://ranjangithub.github.io/anatomy-of-a-gstack-skill/",
    live: true,
  },
];

const COMING_SOON = [
  { title: "/plan-eng-review — System Architecture Before You Build", tags: ["#AIArchitecture", "#AgenticSDLC"] },
  { title: "/investigate — Four-Phase Debugging Methodology", tags: ["#AIcoding", "#AgenticAI"] },
  { title: "Building a 47-Scene Narrative Tutorial with gstack", tags: ["#AgenticSDLC", "#Blockchain"] },
];

const OPEN_SOURCE = [
  {
    name: "blockchain-story",
    description: "47-scene interactive narrative teaching blockchain from first principles — SHA-256, mining, smart contracts, DeFi AMMs, and The Merge. 25 in-browser demos using real crypto libraries.",
    stars: "Next.js 15 · TypeScript · Framer Motion",
    tags: ["#Blockchain", "#Web3", "#DeFi"],
    github: "https://github.com/ranjangithub/blockchain-story",
    live: "https://blockchain-story-vercel.vercel.app/",
    featured: true,
  },
  {
    name: "Llamaindex_Langchain",
    description: "Detailed working example of RAG pipelines using LlamaIndex and LangChain — document ingestion, vector retrieval, and LLM orchestration in a Jupyter notebook.",
    stars: "Python · Jupyter",
    tags: ["#RAG", "#LlamaIndex", "#LangChain"],
    github: "https://github.com/ranjangithub/Llamaindex_Langchain",
    live: null,
    featured: false,
  },
  {
    name: "hardhat-hackathon-boilerplate",
    description: "Smart contract development starter using Hardhat — local Ethereum network, contract deployment, and a minimal frontend for hackathon use.",
    stars: "JavaScript · Hardhat",
    tags: ["#Blockchain", "#SmartContracts", "#Web3"],
    github: "https://github.com/ranjangithub/hardhat-hackathon-boilerplate",
    live: null,
    featured: false,
  },
  {
    name: "image-to-image-AI",
    description: "Colab notebook for generating visually similar images using AI — demonstrates image embedding, similarity search, and generative model pipelines.",
    stars: "Python · Jupyter · Colab",
    tags: ["#GenerativeAI", "#MLOps"],
    github: "https://github.com/ranjangithub/image-to-image-AI",
    live: null,
    featured: false,
  },
  {
    name: "SaaSCognitoDemo",
    description: "End-to-end SaaS authentication demo using AWS Cognito — user pools, identity pools, JWT flows, and protected API routes.",
    stars: "TypeScript · AWS",
    tags: ["#EnterpriseAI", "#CloudNative"],
    github: "https://github.com/ranjangithub/SaaSCognitoDemo",
    live: null,
    featured: false,
  },
  {
    name: "react-flask-todo",
    description: "Full-stack task manager with a React frontend and Flask backend — REST API design, CORS setup, and state management patterns.",
    stars: "Python · React",
    tags: ["#APIDesign", "#CloudNative"],
    github: "https://github.com/ranjangithub/react-flask-todo",
    live: null,
    featured: false,
  },
];

export default function TutorialsPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 56, borderBottom: "1px solid var(--border)", paddingBottom: 36 }}>
        <span style={{ display: "block", fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 8 }}>
          Learn by Building
        </span>
        <h1 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "2.2rem", fontWeight: 900, color: "var(--navy)", marginBottom: 14 }}>
          Tutorials &amp; Open Source
        </h1>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "var(--muted)", maxWidth: 600, lineHeight: 1.7 }}>
          Hands-on guides and open-source projects on Agentic AI, blockchain, RAG pipelines, and enterprise architecture.
          All code is public — fork, adapt, and build on it.
        </p>
      </div>

      {/* Written Guides */}
      <section style={{ marginBottom: 64 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <h2 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", letterSpacing: ".1em", margin: 0 }}>
            Written Guides
          </h2>
          <a href="https://ranjangithub.github.io" target="_blank" rel="noreferrer" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".72rem", fontWeight: 700, color: "var(--orange)", letterSpacing: ".04em" }}>
            ranjangithub.github.io →
          </a>
        </div>
        <div className="grid-2" style={{ marginBottom: 24 }}>
          {WRITTEN_GUIDES.map((guide) => (
            <a key={guide.title} href={guide.href} target="_blank" rel="noreferrer"
              className="postcard-default"
              style={{
                display: "block",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "28px",
                textDecoration: "none",
                boxShadow: "var(--shadow)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {guide.tags.map((t) => (
                    <span key={t} style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".68rem", fontWeight: 700, color: "var(--orange)", background: "rgba(224,123,57,.08)", padding: "2px 8px", borderRadius: 20 }}>{t}</span>
                  ))}
                </div>
                <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".68rem", fontWeight: 700, background: "rgba(74,124,89,.12)", color: "var(--green)", padding: "2px 9px", borderRadius: 20, flexShrink: 0, marginLeft: 8 }}>
                  {guide.level}
                </span>
              </div>
              <h3 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.05rem", fontWeight: 800, color: "var(--navy)", marginBottom: 10, lineHeight: 1.35 }}>
                {guide.title}
              </h3>
              <p style={{ fontFamily: "Georgia, serif", fontSize: ".88rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
                {guide.description}
              </p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".75rem", color: "var(--muted)" }}>{guide.format}</span>
                <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", fontWeight: 700, color: "var(--orange)" }}>Read →</span>
              </div>
            </a>
          ))}
        </div>

        {/* Coming soon */}
        <div style={{ background: "var(--card-bg)", border: "1px solid var(--border)", borderRadius: 8, padding: "20px 24px" }}>
          <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 14 }}>
            Coming Soon
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {COMING_SOON.map((item) => (
              <div key={item.title} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--border)", flexShrink: 0 }} />
                <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".88rem", color: "var(--muted)", fontWeight: 600 }}>{item.title}</span>
                <div style={{ display: "flex", gap: 5, marginLeft: "auto" }}>
                  {item.tags.map((t) => (
                    <span key={t} style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".65rem", color: "var(--muted)", background: "var(--border)", padding: "1px 7px", borderRadius: 20 }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Projects / Open Source */}
      <section>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <h2 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", fontWeight: 800, color: "var(--navy)", textTransform: "uppercase", letterSpacing: ".1em", margin: 0 }}>
            Open Source Projects
          </h2>
          <a href="https://github.com/ranjangithub" target="_blank" rel="noreferrer" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".72rem", fontWeight: 700, color: "var(--orange)", letterSpacing: ".04em" }}>
            github.com/ranjangithub →
          </a>
        </div>

        {/* Featured: blockchain-story */}
        <div
          className="postcard-featured"
          style={{
            background: "var(--navy)",
            borderRadius: 8,
            padding: "36px",
            boxShadow: "var(--shadow)",
            marginBottom: 24,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange)", background: "rgba(224,123,57,.15)", padding: "3px 10px", borderRadius: 20 }}>
              Featured · Interactive Tutorial
            </span>
            <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", color: "rgba(255,255,255,.4)" }}>{OPEN_SOURCE[0].stars}</span>
          </div>
          <h3 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.4rem", fontWeight: 900, color: "#fff", marginBottom: 12, lineHeight: 1.25 }}>
            blockchain-story — From Satoshi to DeFi
          </h3>
          <p style={{ fontFamily: "Georgia, serif", fontSize: ".95rem", color: "rgba(255,255,255,.7)", lineHeight: 1.7, marginBottom: 20, maxWidth: 680 }}>
            {OPEN_SOURCE[0].description}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", gap: 8 }}>
              {OPEN_SOURCE[0].tags.map((t) => (
                <span key={t} style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".7rem", fontWeight: 600, color: "rgba(255,255,255,.6)", background: "rgba(255,255,255,.08)", padding: "2px 10px", borderRadius: 20 }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <a href={OPEN_SOURCE[0].github} target="_blank" rel="noreferrer" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", fontWeight: 700, color: "rgba(255,255,255,.5)", textDecoration: "none" }}>
                GitHub →
              </a>
              <a href={OPEN_SOURCE[0].live!} target="_blank" rel="noreferrer" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".82rem", fontWeight: 700, color: "var(--orange)", textDecoration: "none" }}>
                Live Demo →
              </a>
            </div>
          </div>
        </div>

        {/* Other repos grid */}
        <div className="grid-2" style={{ gap: 20 }}>
          {OPEN_SOURCE.slice(1).map((repo) => (
            <a key={repo.name} href={repo.github} target="_blank" rel="noreferrer"
              className="postcard-default"
              style={{
                display: "block",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "22px 24px",
                textDecoration: "none",
                boxShadow: "var(--shadow)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".95rem", fontWeight: 800, color: "var(--navy)", margin: 0 }}>{repo.name}</p>
                <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".68rem", color: "var(--muted)", flexShrink: 0, marginLeft: 8 }}>{repo.stars}</span>
              </div>
              <p style={{ fontFamily: "Georgia, serif", fontSize: ".85rem", color: "var(--muted)", lineHeight: 1.65, marginBottom: 14 }}>{repo.description}</p>
              <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
                {repo.tags.map((t) => (
                  <span key={t} style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".65rem", fontWeight: 600, color: "var(--orange)", background: "rgba(224,123,57,.07)", padding: "2px 8px", borderRadius: 20 }}>{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div style={{ marginTop: 64, background: "var(--navy)", borderRadius: 8, padding: 32 }} className="cta-row">
        <div>
          <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: 6 }}>All code is open source</p>
          <p style={{ fontFamily: "Georgia, serif", fontSize: ".88rem", color: "rgba(255,255,255,.6)", fontStyle: "italic" }}>Fork it, adapt it, build on it. Pull requests welcome.</p>
        </div>
        <a href="https://github.com/ranjangithub" target="_blank" rel="noreferrer" style={{
          fontFamily: "'Trebuchet MS', sans-serif",
          fontWeight: 700,
          fontSize: ".85rem",
          background: "var(--orange)",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: 4,
          textDecoration: "none",
          flexShrink: 0,
        }}>View on GitHub →</a>
      </div>
    </div>
  );
}
