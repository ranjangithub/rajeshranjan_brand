"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/daily", label: "Daily Dose" },
  { href: "/blog", label: "Blog" },
  { href: "/tutorials", label: "Tutorials" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Close drawer on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isOpen]);

  function closeMenu() { setIsOpen(false); }

  return (
    <header
      ref={headerRef}
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#ffffff",
        borderBottom: "1px solid var(--border)",
        boxShadow: "0 2px 12px rgba(44,44,44,.06)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

          {/* Brand */}
          <Link href="/" onClick={closeMenu} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
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

          {/* Desktop nav links */}
          <nav className="nav-menu">
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
            <div style={{ display: "flex", gap: 12, marginLeft: 12, paddingLeft: 12, borderLeft: "1px solid var(--border)" }}>
              <a href="https://www.linkedin.com/in/ranjanemail/" target="_blank" rel="noreferrer" aria-label="LinkedIn"
                style={{
                  fontFamily: "'Trebuchet MS', 'Gill Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: ".8rem",
                  color: "#fff",
                  background: "#0a66c2",
                  width: 28,
                  height: 28,
                  borderRadius: 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  flexShrink: 0,
                }}
              >in</a>
            </div>
          </nav>

          {/* Hamburger (mobile only) */}
          <button
            className="nav-hamburger-btn"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={`nav-mobile-drawer${isOpen ? " is-open" : ""}`}>
        {links.map(({ href, label }) => (
          <Link key={href} href={href} className="nav-mobile-link" onClick={closeMenu}>
            {label}
          </Link>
        ))}
        <a
          href="https://www.linkedin.com/in/ranjanemail/"
          target="_blank"
          rel="noreferrer"
          className="nav-mobile-link"
          onClick={closeMenu}
          style={{ color: "#0a66c2", fontWeight: 700, borderBottom: "none", marginTop: 8 }}
        >
          <span style={{ fontWeight: 900 }}>in</span> Connect on LinkedIn
        </a>
      </div>
    </header>
  );
}
