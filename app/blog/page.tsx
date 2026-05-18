import type { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { getAllPosts, getAllTags } from "@/lib/content";

export const metadata: Metadata = { title: "Blog" };

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags().slice(0, 20);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 24px" }}>
      {/* Header */}
      <div style={{ marginBottom: 48, borderBottom: "1px solid var(--border)", paddingBottom: 32 }}>
        <span style={{ display: "block", fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".72rem", fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 8 }}>
          Writing &amp; Analysis
        </span>
        <h1 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "2.2rem", fontWeight: 900, color: "var(--navy)", marginBottom: 12 }}>Blog</h1>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "1rem", color: "var(--muted)", maxWidth: 560, lineHeight: 1.7 }}>
          Long-form analysis on Generative AI, Responsible AI governance, agentic SDLC, enterprise architecture, and the engineering leadership decisions that matter.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 56 }}>
        {/* Posts */}
        <div>
          {posts.length === 0 ? (
            <div style={{ padding: "48px 0", color: "var(--muted)", fontFamily: "Georgia, serif", fontStyle: "italic", lineHeight: 1.7 }}>
              <p>No posts yet. Add markdown files to <code>content/posts/</code> with this frontmatter:</p>
              <pre style={{ marginTop: 16, background: "#f0ece4", padding: 16, borderRadius: 6, fontSize: ".85rem", color: "var(--navy)" }}>{`---
title: Your Post Title
date: 2026-05-17
excerpt: A short description.
tags: [GenerativeAI, ResponsibleAI]
featured: false
---

Your content here.`}</pre>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
              {posts.map((p) => <PostCard key={p.slug} post={p} />)}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {/* Tag filter */}
          {tags.length > 0 && (
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, padding: 20 }}>
              <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 14 }}>
                Browse by Topic
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {tags.map(({ tag, count }) => (
                  <span key={tag} style={{
                    fontFamily: "'Trebuchet MS', sans-serif",
                    fontSize: ".72rem",
                    fontWeight: 600,
                    color: "var(--navy)",
                    background: "rgba(26,58,92,.07)",
                    padding: "4px 10px",
                    borderRadius: 20,
                    border: "1px solid rgba(26,58,92,.1)",
                  }}>{tag} <span style={{ color: "var(--muted)", fontSize: ".65rem" }}>({count})</span></span>
                ))}
              </div>
            </div>
          )}

          {/* About blurb */}
          <div style={{ background: "var(--navy)", borderRadius: 8, padding: 20, color: "#fff" }}>
            <p style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".7rem", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: 12 }}>
              About the Author
            </p>
            <p style={{ fontFamily: "Georgia, serif", fontSize: ".85rem", color: "rgba(255,255,255,.7)", lineHeight: 1.7 }}>
              Rajesh Ranjan Kumar writes at the intersection of enterprise AI, responsible governance, and agentic software engineering.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
