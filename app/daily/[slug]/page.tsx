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
  return { title: `Daily Intel — ${post.date}`, description: post.excerpt };
}

export default async function DailyBriefingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getDailyBriefing(slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "56px 24px 80px" }}>
      {/* Breadcrumb */}
      <nav style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", color: "var(--muted)", marginBottom: 32, display: "flex", gap: 8 }}>
        <Link href="/" style={{ color: "var(--orange)", textDecoration: "none" }}>Home</Link>
        <span>›</span>
        <Link href="/daily" style={{ color: "var(--orange)", textDecoration: "none" }}>Daily Intel</Link>
        <span>›</span>
        <span>{post.date}</span>
      </nav>

      {/* Header */}
      <header style={{ marginBottom: 44, paddingBottom: 32, borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
          <span style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            fontSize: ".7rem",
            fontWeight: 700,
            letterSpacing: ".12em",
            textTransform: "uppercase",
            color: "var(--orange)",
            background: "rgba(200,84,26,.08)",
            padding: "3px 10px",
            borderRadius: 20,
          }}>Daily GenAI Intel</span>
          <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".82rem", color: "var(--muted)", display: "flex", alignItems: "center" }}>{post.date}</span>
        </div>
        <h1 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.9rem", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 14 }}>
          {post.title}
        </h1>
        <div style={{ display: "flex", gap: 16, color: "var(--muted)", fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".82rem", marginBottom: 16 }}>
          <span>Rajesh Ranjan Kumar</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {post.tags.map((t) => (
            <span key={t} style={{
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: ".7rem",
              fontWeight: 600,
              color: "var(--navy)",
              background: "rgba(26,58,92,.07)",
              padding: "3px 10px",
              borderRadius: 20,
              border: "1px solid rgba(26,58,92,.1)",
            }}>{t}</span>
          ))}
        </div>
      </header>

      {/* Content */}
      <article className="prose-brand">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </article>

      <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between" }}>
        <Link href="/daily" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 700, fontSize: ".85rem", color: "var(--orange)", textDecoration: "none" }}>
          ← All briefings
        </Link>
        <Link href="/blog" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 700, fontSize: ".85rem", color: "var(--orange)", textDecoration: "none" }}>
          Blog →
        </Link>
      </div>
    </div>
  );
}
