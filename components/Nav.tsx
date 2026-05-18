import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/daily", label: "Daily Intel" },
  { href: "/tags", label: "Topics" },
];

export function Nav() {
  return (
    <header style={{ background: "var(--navy)", borderBottom: "3px solid var(--orange)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", flexDirection: "column", textDecoration: "none" }}>
            <span style={{ fontFamily: "'Trebuchet MS', sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "#fff", letterSpacing: "-.01em", lineHeight: 1.2 }}>
              Rajesh Ranjan Kumar
            </span>
            <span style={{ fontFamily: "Georgia, serif", fontSize: ".72rem", color: "rgba(255,255,255,.6)", fontStyle: "italic" }}>
              Enterprise AI · Responsible AI · Agentic SDLC
            </span>
          </Link>

          {/* Nav links */}
          <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: "'Trebuchet MS', sans-serif",
                  fontSize: ".82rem",
                  fontWeight: 600,
                  letterSpacing: ".05em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.8)",
                  padding: "6px 14px",
                  borderRadius: 4,
                  textDecoration: "none",
                  transition: "background .15s, color .15s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.background = "rgba(255,255,255,.12)";
                  (e.target as HTMLElement).style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.background = "transparent";
                  (e.target as HTMLElement).style.color = "rgba(255,255,255,.8)";
                }}
              >
                {label}
              </Link>
            ))}

            {/* Social icons */}
            <div style={{ display: "flex", gap: 12, marginLeft: 12, paddingLeft: 12, borderLeft: "1px solid rgba(255,255,255,.15)" }}>
              <a href="https://linkedin.com/in/rajeshranjankumar" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                style={{ color: "rgba(255,255,255,.6)", fontSize: "1.1rem", transition: "color .15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}
              >in</a>
              <a href="https://twitter.com/rajeshranjankr" target="_blank" rel="noreferrer" aria-label="X / Twitter"
                style={{ color: "rgba(255,255,255,.6)", fontSize: "1rem", transition: "color .15s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,.6)")}
              >𝕏</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
