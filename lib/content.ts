import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  type: "blog" | "daily" | "note";
  readTime?: string;
  featured?: boolean;
  signalCount?: number;
}

export interface Post extends PostMeta {
  content: string;
}

// ── Helpers ──────────────────────────────────────────────────────────

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const mins = Math.max(1, Math.round(words / 200));
  return `${mins} min read`;
}

function parsePost(dir: string, filename: string, type: PostMeta["type"]): Post {
  const filepath = path.join(dir, filename);
  const raw = fs.readFileSync(filepath, "utf-8");
  const { data, content } = matter(raw);
  const slug = filename.replace(/\.md$/, "");
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ? String(data.date) : "",
    excerpt: data.excerpt ?? content.slice(0, 200).replace(/[#*`]/g, "").trim() + "…",
    tags: Array.isArray(data.tags) ? data.tags : [],
    type,
    readTime: data.readTime ?? estimateReadTime(content),
    featured: data.featured ?? false,
    signalCount: typeof data.signalCount === "number" ? data.signalCount : undefined,
    content,
  };
}

// ── Blog Posts ────────────────────────────────────────────────────────

export function getAllPosts(): PostMeta[] {
  const dir = path.join(CONTENT_DIR, "posts");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parsePost(dir, f, "blog"))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPost(slug: string): Post | null {
  const filepath = path.join(CONTENT_DIR, "posts", `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;
  return parsePost(path.join(CONTENT_DIR, "posts"), `${slug}.md`, "blog");
}

export function getAllPostSlugs(): string[] {
  const dir = path.join(CONTENT_DIR, "posts");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

// ── Daily Briefings ───────────────────────────────────────────────────

export function getAllDailyBriefings(): PostMeta[] {
  const dir = path.join(CONTENT_DIR, "daily");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.includes("-raw"))
    .map((f) => parsePost(dir, f, "daily"))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getDailyBriefing(slug: string): Post | null {
  const filepath = path.join(CONTENT_DIR, "daily", `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;
  return parsePost(path.join(CONTENT_DIR, "daily"), `${slug}.md`, "daily");
}

export function getAllDailySlugs(): string[] {
  const dir = path.join(CONTENT_DIR, "daily");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") && !f.includes("-raw"))
    .map((f) => f.replace(/\.md$/, ""));
}

// ── About ─────────────────────────────────────────────────────────────

export function getAbout(): string {
  const filepath = path.join(CONTENT_DIR, "about.md");
  if (!fs.existsSync(filepath)) return "";
  const { content } = matter(fs.readFileSync(filepath, "utf-8"));
  return content;
}

// ── Tags ──────────────────────────────────────────────────────────────

export function getAllTags(): { tag: string; count: number }[] {
  const posts = [...getAllPosts(), ...getAllDailyBriefings()];
  const freq: Record<string, number> = {};
  posts.forEach((p) => p.tags.forEach((t) => { freq[t] = (freq[t] ?? 0) + 1; }));
  return Object.entries(freq)
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}
