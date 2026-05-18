import type { Metadata } from "next";
import Link from "next/link";
import { getAllTags, getAllPosts, getAllDailyBriefings } from "@/lib/content";

export const metadata: Metadata = { title: "All Topics" };

const STATIC_TAGS = [
  { group: "AI & Agents", tags: ["#GenerativeAI", "#AgenticAI", "#LLM", "#RAG", "#VectorDB", "#PromptEngineering", "#AIEvals", "#AIObservability", "#ModelRouting", "#Guardrails", "#LangChain", "#LangGraph", "#LangSmith", "#LlamaIndex", "#MLOps", "#AIFinOps"] },
  { group: "AI Coding & SDLC", tags: ["#AgenticSDLC", "#AIcoding", "#ClaudeCode", "#GitHubCopilot", "#Cursor", "#Codex", "#AICodeReview", "#AIPairProgramming", "#AITesting", "#AI Documentation"] },
  { group: "Responsible AI", tags: ["#ResponsibleAI", "#AIGovernance", "#AISafety", "#AIEthics", "#AIBias", "#Explainability", "#HumanInTheLoop", "#AITransparency", "#ModelRisk", "#AIAccountability"] },
  { group: "AI Security & Policy", tags: ["#AISecurity", "#PromptInjection", "#OWASPTop10", "#NISTAI", "#EUAIAct", "#ISOAIStandards", "#AIRegulation", "#DataSovereignty", "#PrivacyAI", "#AICompliance"] },
  { group: "Enterprise & Architecture", tags: ["#EnterpriseAI", "#AIArchitecture", "#CloudNative", "#DigitalTransformation", "#SoftwareArchitecture", "#APIDesign", "#Microservices", "#DataGovernance", "#AIAdoption", "#FutureOfWork"] },
  { group: "Web3 & Identity", tags: ["#Blockchain", "#Web3", "#DecentralizedIdentity", "#VerifiableCredentials", "#DIDs", "#SSI", "#DeFi", "#SmartContracts", "#NFTs", "#Web3Governance"] },
  { group: "Sectors", tags: ["#FinTech", "#HealthTech", "#EdTech", "#LegalTech", "#GovTech", "#InsurTech", "#Aviation", "#Avgeek", "#AviationTech", "#SpaceTech"] },
  { group: "Leadership", tags: ["#TechLeadership", "#CTO", "#EngineeringLeader", "#ProductLeadership", "#AIStrategy", "#Innovation", "#StartupLife", "#VentureCapital", "#EngineeringCulture"] },
];

export default function TagsPage() {
  const contentTags = getAllTags();
  const posts = getAllPosts();
  const daily = getAllDailyBriefings();

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 52, borderBottom: "1px solid var(--border)", paddingBottom: 32 }}>
        <span style={{ display: "block", fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 8 }}>
          Browse by Topic
        </span>
        <h1 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "2.2rem", fontWeight: 900, color: "var(--navy)", marginBottom: 12 }}>All Topics</h1>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "var(--muted)", maxWidth: 560, lineHeight: 1.7 }}>
          Every topic, hashtag, and area of focus. {posts.length + daily.length} articles spanning AI, governance, blockchain, aviation, and enterprise technology.
        </p>
      </div>

      {/* Content-derived tags */}
      {contentTags.length > 0 && (
        <div style={{ marginBottom: 56 }}>
          <h2 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", fontWeight: 800, color: "var(--navy)", marginBottom: 20, textTransform: "uppercase", letterSpacing: ".08em" }}>
            From My Articles
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {contentTags.map(({ tag, count }) => (
              <span key={tag} style={{
                fontFamily: "'Trebuchet MS', sans-serif",
                fontSize: ".82rem",
                fontWeight: 700,
                color: "var(--navy)",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                padding: "6px 14px",
                borderRadius: 20,
                boxShadow: "var(--shadow)",
              }}>
                {tag}
                <span style={{ marginLeft: 6, color: "var(--orange)", fontSize: ".72rem" }}>({count})</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Static tag groups */}
      <div style={{ display: "flex", flexDirection: "column", gap: 44 }}>
        {STATIC_TAGS.map(({ group, tags }) => (
          <div key={group}>
            <h2 style={{
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: ".75rem",
              fontWeight: 700,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "var(--orange)",
              marginBottom: 16,
              paddingBottom: 8,
              borderBottom: "1px solid var(--border)",
            }}>{group}</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 8px" }}>
              {tags.map((tag) => (
                <span
                  key={tag}
                  id={tag.replace("#", "")}
                  className="tag-pill-hover"
                  style={{
                    fontFamily: "'Trebuchet MS', sans-serif",
                    fontSize: ".82rem",
                    fontWeight: 600,
                    color: "var(--text)",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "6px 16px",
                    borderRadius: 20,
                    cursor: "default",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* LinkedIn nudge */}
      <div style={{ marginTop: 64, background: "var(--navy)", borderRadius: 8, padding: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 800, fontSize: "1rem", color: "#fff", marginBottom: 6 }}>Follow the conversation on LinkedIn</p>
          <p style={{ fontFamily: "Georgia, serif", fontSize: ".88rem", color: "rgba(255,255,255,.6)", fontStyle: "italic" }}>Daily posts on AI, governance, and enterprise engineering.</p>
        </div>
        <a href="https://www.linkedin.com/in/ranjanemail/" target="_blank" rel="noreferrer" style={{
          fontFamily: "'Trebuchet MS', sans-serif",
          fontWeight: 700,
          fontSize: ".85rem",
          background: "var(--orange)",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: 4,
          textDecoration: "none",
          flexShrink: 0,
        }}>Connect on LinkedIn →</a>
      </div>
    </div>
  );
}
