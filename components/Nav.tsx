import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/daily", label: "Daily Intel" },
  { href: "/blog", label: "Blog" },
  { href: "/tags", label: "Topics" },
];

export function Nav() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "#ffffff",
      borderBottom: "1px solid var(--border)",
      boxShadow: "0 2px 12px rgba(44,44,44,.06)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          {/* Brand */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <div style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "var(--navy)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
              fontWeight: 700,
              fontSize: ".95rem",
              flexShrink: 0,
              letterSpacing: "-.01em",
            }}>RR</div>
            <div>
              <div style={{
                fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
                fontSize: "1rem",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.2,
              }}>
                Rajesh <span style={{ color: "var(--orange)" }}>Ranjan</span>
              </div>
              <div style={{
                fontFamily: "Georgia, serif",
                fontSize: ".68rem",
                color: "var(--muted)",
                fontStyle: "italic",
                letterSpacing: ".03em",
              }}>Enterprise AI · Responsible AI</div>
            </div>
          </Link>

          {/* Nav links */}
          <nav style={{ display: "flex", gap: 4, alignItems: "center" }}>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="nav-link"
                style={{
                  fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
                  fontSize: ".88rem",
                  fontWeight: 600,
                  color: "var(--muted)",
                  padding: "6px 14px",
                  borderRadius: 4,
                  textDecoration: "none",
                }}
              >
                {label}
              </Link>
            ))}

            <Link href="/daily"
              className="nav-cta"
              style={{
                fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
                fontWeight: 700,
                fontSize: ".88rem",
                letterSpacing: ".04em",
                background: "var(--orange)",
                color: "#fff",
                padding: "8px 20px",
                borderRadius: 4,
                textDecoration: "none",
                marginLeft: 8,
              }}
            >
              Get Early Access
            </Link>

            <div style={{ display: "flex", gap: 12, marginLeft: 12, paddingLeft: 12, borderLeft: "1px solid var(--border)" }}>
              <a href="https://www.linkedin.com/in/ranjanemail/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                className="nav-social"
                style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontWeight: 700, color: "var(--muted)", fontSize: "1rem" }}
              >in</a>
              <a href="https://twitter.com/rajeshranjankr" target="_blank" rel="noreferrer" aria-label="X / Twitter"
                className="nav-social"
                style={{ fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif", fontWeight: 700, color: "var(--muted)", fontSize: ".95rem" }}
              >𝕏</a>
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
}
