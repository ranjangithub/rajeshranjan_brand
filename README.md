# Rajesh Ranjan — Personal Brand Site

Personal website for Rajesh Ranjan: Enterprise AI leader, Responsible AI practitioner, and agentic SDLC pioneer.

**Live at:** your Vercel deployment URL

## Stack

- **Next.js 15** — App Router, static generation
- **TypeScript** — full type safety
- **Tailwind CSS v4** — utility styling
- **Markdown** — all content in `content/` directory (no database)
- **gray-matter** — frontmatter parsing
- **react-markdown + remark-gfm** — markdown rendering
- **Deployed on Vercel**

## Content Structure

All content lives in `content/` and is tracked in git — GitHub IS the CMS.

```
content/
├── posts/          # Blog posts (*.md)
├── daily/          # Daily AI intelligence briefings (YYYY-MM-DD.md)
└── about.md        # About page content
```

### Adding a Blog Post

Create `content/posts/your-slug.md`:

```markdown
---
title: "Your Post Title"
date: "2026-05-17"
excerpt: "A short description shown in card previews."
tags: [GenerativeAI, ResponsibleAI, EnterpriseAI]
featured: false
---

Your content in Markdown here.
```

### Adding a Daily Briefing

Daily briefings are auto-generated from the `dailytechdose` repo:

```bash
# In dailytechdose/
node scripts/publish-to-brand.js           # today
node scripts/publish-to-brand.js 2026-05-18  # specific date
```

This reads `data/daily/YYYY-MM-DD.md`, extracts all signals with sources,
and writes a public newsletter to `content/daily/YYYY-MM-DD.md` with full
SEO frontmatter (title, excerpt, tags, readTime, signalCount, og meta).

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3003
```

## Deploy to Vercel

1. Push this repo to GitHub
2. Import in [vercel.com](https://vercel.com)
3. Deploy — zero config needed (Next.js auto-detected)

No environment variables required. All content is in markdown files.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, latest daily intel, recent blog posts |
| `/about` | Full about page with bio, expertise, skills grid |
| `/blog` | Blog listing with tag sidebar |
| `/blog/[slug]` | Individual blog post |
| `/daily` | Daily AI intelligence briefing listing |
| `/daily/[slug]` | Individual briefing |
| `/tags` | All topics and hashtags |
