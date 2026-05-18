import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getDailyBriefing, getAllDailySlugs } from "@/lib/content";

export async function generateStaticParams() {
  return getAllDailySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getDailyBriefing(slug);
  if (!post) return { title: "Briefing not found" };
  return {
    title: post.title + " | Rajesh Ranjan",
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Rajesh Ranjan"],
      tags: post.tags,
      url: `https://rajeshranjan.com/daily/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@rajesh_ranjan",
    },
    alternates: {
      canonical: `https://rajeshranjan.com/daily/${post.slug}`,
    },
  };
}

const TAG_COLORS: Record<string, string> = {
  "Generative AI":   "rgba(200,84,26,.12)",
  "Enterprise AI":   "rgba(26,58,92,.08)",
  "Agentic AI":      "rgba(139,92,246,.1)",
  "Responsible AI":  "rgba(239,68,68,.1)",
  "AI Security":     "rgba(239,68,68,.1)",
  "AI Coding":       "rgba(16,185,129,.1)",
  "AI FinOps":       "rgba(245,158,11,.1)",
  "LLMs":            "rgba(59,130,246,.1)",
  "Open Source AI":  "rgba(16,185,129,.1)",
  "AI Regulation":   "rgba(239,68,68,.1)",
  "AI Architecture": "rgba(245,158,11,.1)",
};

function tagColor(tag: string) {
  return TAG_COLORS[tag] ?? "rgba(26,58,92,.07)";
}

function formatDate(dateStr: string) {
  try {
    const d = new Date(dateStr + "T12:00:00");
    return d.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
  } catch {
    return dateStr;
  }
}

export default async function DailyBriefingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getDailyBriefing(slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: 820, margin: "0 auto", padding: "48px 24px 80px" }}>
      {/* Breadcrumb */}
      <nav style={{
        fontFamily: "'Trebuchet MS', sans-serif",
        fontSize: ".78rem",
        color: "var(--muted)",
        marginBottom: 28,
        display: "flex",
        gap: 8,
        alignItems: "center",
      }}>
        <Link href="/" style={{ color: "var(--orange)", textDecoration: "none" }}>Home</Link>
        <span style={{ opacity: .5 }}>›</span>
        <Link href="/daily" style={{ color: "var(--orange)", textDecoration: "none" }}>Daily Intel</Link>
        <span style={{ opacity: .5 }}>›</span>
        <span>{post.date}</span>
      </nav>

      {/* Article header */}
      <header style={{ marginBottom: 40, paddingBottom: 32, borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
          <span style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            fontSize: ".68rem",
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--orange)",
            background: "rgba(200,84,26,.08)",
            padding: "3px 12px",
            borderRadius: 20,
          }}>Daily GenAI Intel</span>
          {post.signalCount && (
            <span style={{
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: ".68rem",
              fontWeight: 700,
              color: "var(--navy)",
              background: "rgba(26,58,92,.08)",
              padding: "3px 12px",
              borderRadius: 20,
              border: "1px solid rgba(26,58,92,.1)",
            }}>{post.signalCount} signals</span>
          )}
        </div>

        <h1 style={{
          fontFamily: "'Trebuchet MS', sans-serif",
          fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
          fontWeight: 900,
          color: "var(--navy)",
          lineHeight: 1.2,
          marginBottom: 16,
        }}>
          {post.title}
        </h1>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          color: "var(--muted)",
          fontFamily: "'Trebuchet MS', sans-serif",
          fontSize: ".82rem",
          marginBottom: 18,
          alignItems: "center",
        }}>
          <span style={{ fontWeight: 700, color: "var(--navy)" }}>Rajesh Ranjan</span>
          <span style={{ opacity: .4 }}>·</span>
          <span>{formatDate(post.date)}</span>
          <span style={{ opacity: .4 }}>·</span>
          <span>{post.readTime}</span>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {post.tags.map((t) => (
            <span key={t} style={{
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: ".68rem",
              fontWeight: 600,
              color: "var(--navy)",
              background: tagColor(t),
              padding: "3px 10px",
              borderRadius: 20,
              border: "1px solid rgba(26,58,92,.08)",
            }}>{t}</span>
          ))}
        </div>
      </header>

      {/* Article content */}
      <article className="prose-brand">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.7rem", fontWeight: 900, color: "var(--navy)", marginTop: 40, marginBottom: 12, lineHeight: 1.2 }}>
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.25rem", fontWeight: 800, color: "var(--navy)", marginTop: 36, marginBottom: 10, paddingTop: 28, borderTop: "1px solid var(--border)" }}>
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "var(--navy)", marginTop: 24, marginBottom: 8 }}>
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p style={{ fontFamily: "Georgia, serif", fontSize: ".95rem", color: "var(--text)", lineHeight: 1.85, marginBottom: 16 }}>
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong style={{ fontWeight: 700, color: "var(--navy)" }}>{children}</strong>
            ),
            ul: ({ children }) => (
              <ul style={{ paddingLeft: 20, marginBottom: 16, lineHeight: 1.8 }}>{children}</ul>
            ),
            ol: ({ children }) => (
              <ol style={{ paddingLeft: 20, marginBottom: 16, lineHeight: 1.8 }}>{children}</ol>
            ),
            li: ({ children }) => (
              <li style={{ fontFamily: "Georgia, serif", fontSize: ".93rem", color: "var(--text)", marginBottom: 6 }}>
                {children}
              </li>
            ),
            blockquote: ({ children }) => (
              <blockquote style={{
                borderLeft: "3px solid var(--orange)",
                paddingLeft: 18,
                margin: "20px 0",
                background: "rgba(200,84,26,.04)",
                borderRadius: "0 6px 6px 0",
                padding: "14px 18px",
              }}>
                {children}
              </blockquote>
            ),
            a: ({ href, children }) => (
              <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "var(--orange)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                {children}
              </a>
            ),
            hr: () => (
              <hr style={{ border: "none", borderTop: "1px solid var(--border)", margin: "28px 0" }} />
            ),
            code: ({ children }) => (
              <code style={{ background: "rgba(26,58,92,.07)", color: "var(--navy)", padding: "1px 5px", borderRadius: 4, fontFamily: "monospace", fontSize: ".88em" }}>
                {children}
              </code>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>

      {/* Footer */}
      <div style={{
        marginTop: 56,
        padding: "28px 0 0",
        borderTop: "2px solid var(--border)",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}>
        {/* Subscribe prompt */}
        <div style={{
          background: "var(--navy)",
          borderRadius: 10,
          padding: "24px 28px",
          display: "flex",
          alignItems: "center",
          gap: 20,
          flexWrap: "wrap",
        }}>
          <div style={{ flex: 1, minWidth: 220 }}>
            <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 6 }}>
              Get This Daily
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: ".9rem", color: "rgba(255,255,255,.8)", lineHeight: 1.6 }}>
              10 AI signals curated from 30+ sources, delivered every morning. No hype, every claim sourced.
            </p>
          </div>
          <a
            href="mailto:ranjanemail@gmail.com?subject=Subscribe to Daily AI Intel"
            style={{
              display: "inline-block",
              background: "var(--orange)",
              color: "#fff",
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: ".82rem",
              fontWeight: 700,
              padding: "11px 22px",
              borderRadius: 6,
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}>
            📬 Subscribe Free
          </a>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Link href="/daily" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 700, fontSize: ".85rem", color: "var(--orange)", textDecoration: "none" }}>
            ← All Briefings
          </Link>
          <Link href="/blog" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 700, fontSize: ".85rem", color: "var(--orange)", textDecoration: "none" }}>
            Essays & Deep Dives →
          </Link>
        </div>
      </div>
    </div>
  );
}
