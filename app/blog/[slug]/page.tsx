import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { formatDate } from "@/lib/utils";
import { getPost, getAllPostSlugs } from "@/lib/content";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "56px 24px 80px" }}>
      {/* Breadcrumb */}
      <nav style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", color: "var(--muted)", marginBottom: 32, display: "flex", gap: 8 }}>
        <Link href="/" style={{ color: "var(--orange)", textDecoration: "none" }}>Home</Link>
        <span>›</span>
        <Link href="/blog" style={{ color: "var(--orange)", textDecoration: "none" }}>Blog</Link>
        <span>›</span>
        <span>{post.title}</span>
      </nav>

      {/* Post header */}
      <header style={{ marginBottom: 44, paddingBottom: 32, borderBottom: "1px solid var(--border)" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
          {post.tags.map((t) => (
            <span key={t} style={{
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: ".7rem",
              fontWeight: 700,
              color: "var(--orange)",
              background: "rgba(200,84,26,.08)",
              padding: "3px 10px",
              borderRadius: 20,
              letterSpacing: ".03em",
            }}>{t}</span>
          ))}
        </div>
        <h1 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "2.1rem", fontWeight: 900, color: "var(--navy)", lineHeight: 1.2, marginBottom: 16 }}>
          {post.title}
        </h1>
        <div style={{ display: "flex", gap: 20, color: "var(--muted)", fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".82rem" }}>
          <span>By Rajesh Ranjan</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* Content */}
      <article className="prose-brand">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </article>

      {/* Footer nav */}
      <div style={{ marginTop: 56, paddingTop: 32, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between" }}>
        <Link href="/blog" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 700, fontSize: ".85rem", color: "var(--orange)", textDecoration: "none" }}>
          ← All posts
        </Link>
        <Link href="/daily" style={{ fontFamily: "'Trebuchet MS', sans-serif", fontWeight: 700, fontSize: ".85rem", color: "var(--orange)", textDecoration: "none" }}>
          Daily Dose →
        </Link>
      </div>
    </div>
  );
}
