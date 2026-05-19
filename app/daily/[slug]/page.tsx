import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDailyBriefing, getAllDailySlugs, getAllDailyBriefings } from "@/lib/content";
import { DailyReader, type SignalBlock } from "@/components/DailyReader";

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
      url: `https://rajeshranjan.vercel.app/daily/${post.slug}`,
    },
    alternates: {
      canonical: `https://rajeshranjan.vercel.app/daily/${post.slug}`,
    },
  };
}

// ── Parsers (run at build time) ──────────────────────────────────────────────

function parseSignals(content: string): SignalBlock[] {
  const match = content.match(/## Today['']s \d+ AI Stories\n([\s\S]*?)(?=\n## ⚡|\n## Quick|\n---\n---|\n## Stay Ahead|$)/);
  if (!match) return [];
  const parts = match[1].split(/(?=### \d+\. )/);
  return parts
    .filter((p) => /^### \d+\./.test(p.trim()))
    .map((part) => {
      const header = part.match(/^### (\d+)\.\s+(.+)/);
      if (!header) return null;
      return { number: parseInt(header[1]), title: header[2].trim(), content: part.trim() };
    })
    .filter(Boolean) as SignalBlock[];
}

function parseSection(content: string, heading: string): string {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const m = content.match(new RegExp(`## ${escaped}[^\\n]*\\n([\\s\\S]*?)(?=\\n## [^#]|\\n---\\n---\\n## |$)`));
  return m ? m[1].trim() : "";
}

function parseExecutiveSummary(content: string): string[] {
  const m = content.match(/## What Matters Today\n([\s\S]*?)(?=\n---|\n## [A-Z🎙🛡🔬⚡]|$)/);
  if (!m) return [];
  return m[1]
    .split("\n")
    .filter((l) => l.trim().startsWith("- "))
    .map((l) => l.replace(/^- /, "").replace(/\*\*/g, "").trim())
    .filter(Boolean);
}

// ─────────────────────────────────────────────────────────────────────────────

export default async function DailyBriefingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getDailyBriefing(slug);
  if (!post) notFound();

  const allBriefings = getAllDailyBriefings().map((b) => ({
    slug: b.slug,
    date: b.date,
    title: b.title,
  }));

  const signals = parseSignals(post.content);
  const executiveSummary = parseExecutiveSummary(post.content);

  const sections = {
    quickHits:  parseSection(post.content, "⚡ Quick Hits"),
    research:   parseSection(post.content, "🔬 Research Worth Reading"),
    governance: parseSection(post.content, "🛡 Responsible AI & Governance"),
    driveTime:  parseSection(post.content, "🎙 Drive Time with Rajesh"),
  };

  return (
    <DailyReader
      currentSlug={slug}
      title={post.title}
      date={post.date}
      readTime={post.readTime ?? ""}
      tags={post.tags}
      signals={signals}
      executiveSummary={executiveSummary}
      sections={sections}
      allBriefings={allBriefings}
    />
  );
}
