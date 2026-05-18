import Link from "next/link";
import type { PostMeta } from "@/lib/content";

interface PostCardProps {
  post: PostMeta;
  basePath?: string;
  variant?: "default" | "compact" | "featured";
}

export function PostCard({ post, basePath = "/blog", variant = "default" }: PostCardProps) {
  const href = `${basePath}/${post.slug}`;

  if (variant === "compact") {
    return (
      <Link href={href} style={{ display: "block", textDecoration: "none" }}>
        <div style={{
          padding: "16px 0",
          borderBottom: "1px solid var(--border)",
          transition: "all .15s",
        }}
          onMouseEnter={(e) => (e.currentTarget.style.paddingLeft = "8px")}
          onMouseLeave={(e) => (e.currentTarget.style.paddingLeft = "0")}
        >
          <div style={{ display: "flex", gap: 12, alignItems: "baseline", marginBottom: 4 }}>
            <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".75rem", color: "var(--muted)", flexShrink: 0 }}>
              {post.date}
            </span>
            <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".92rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1.3 }}>
              {post.title}
            </span>
          </div>
          {post.tags.slice(0, 3).map((t) => (
            <span key={t} style={{
              display: "inline-block",
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: ".68rem",
              fontWeight: 600,
              background: "rgba(200,84,26,.08)",
              color: "var(--orange)",
              padding: "2px 8px",
              borderRadius: 20,
              marginRight: 4,
              letterSpacing: ".02em",
            }}>{t}</span>
          ))}
        </div>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link href={href} style={{ display: "block", textDecoration: "none", height: "100%" }}>
        <article style={{
          background: "var(--navy)",
          borderRadius: 8,
          padding: "32px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          boxShadow: "var(--shadow)",
          transition: "transform .2s, box-shadow .2s",
        }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-h)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)";
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <span style={{
              fontFamily: "'Trebuchet MS', sans-serif",
              fontSize: ".7rem",
              fontWeight: 700,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "var(--orange)",
              background: "rgba(200,84,26,.15)",
              padding: "3px 10px",
              borderRadius: 20,
            }}>Featured</span>
            <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", color: "rgba(255,255,255,.5)" }}>{post.readTime}</span>
          </div>
          <h3 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.25rem", fontWeight: 800, color: "#fff", marginBottom: 12, lineHeight: 1.3, flex: 1 }}>
            {post.title}
          </h3>
          <p style={{ fontFamily: "Georgia, serif", fontSize: ".9rem", color: "rgba(255,255,255,.65)", lineHeight: 1.7, marginBottom: 20 }}>
            {post.excerpt}
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {post.tags.slice(0, 3).map((t) => (
                <span key={t} style={{
                  fontFamily: "'Trebuchet MS', sans-serif",
                  fontSize: ".68rem",
                  fontWeight: 600,
                  color: "rgba(255,255,255,.6)",
                  background: "rgba(255,255,255,.08)",
                  padding: "2px 8px",
                  borderRadius: 20,
                }}>{t}</span>
              ))}
            </div>
            <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".8rem", color: "rgba(255,255,255,.4)" }}>{post.date}</span>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={href} style={{ display: "block", textDecoration: "none", height: "100%" }}>
      <article style={{
        background: "var(--surface)",
        borderRadius: 8,
        border: "1px solid var(--border)",
        padding: "28px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "var(--shadow)",
        transition: "transform .2s, box-shadow .2s",
      }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
          (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-h)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow)";
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {post.tags.slice(0, 2).map((t) => (
              <span key={t} style={{
                fontFamily: "'Trebuchet MS', sans-serif",
                fontSize: ".68rem",
                fontWeight: 700,
                color: "var(--orange)",
                background: "rgba(200,84,26,.08)",
                padding: "2px 8px",
                borderRadius: 20,
                letterSpacing: ".02em",
              }}>{t}</span>
            ))}
          </div>
          <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".75rem", color: "var(--muted)" }}>{post.readTime}</span>
        </div>
        <h3 style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.05rem", fontWeight: 800, color: "var(--navy)", marginBottom: 10, lineHeight: 1.35 }}>
          {post.title}
        </h3>
        <p style={{ fontFamily: "Georgia, serif", fontSize: ".88rem", color: "var(--muted)", lineHeight: 1.7, flex: 1, marginBottom: 16 }}>
          {post.excerpt}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
          <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".75rem", color: "var(--muted)" }}>{post.date}</span>
          <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: ".78rem", fontWeight: 700, color: "var(--orange)" }}>Read →</span>
        </div>
      </article>
    </Link>
  );
}
