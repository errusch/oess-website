"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/security", label: "Security" },
  { href: "/faq", label: "FAQ" },
];

const ctaLabel = "Request a Free Assessment";
const brandLabel = "Openclaw Executive Setup Service";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(15,13,10,0.72)",
        backdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(255,241,219,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: 15,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            maxWidth: 280,
            color: "var(--foreground)",
          }}
        >
          {brandLabel}
        </Link>

        <div style={{ display: "flex", gap: 24, alignItems: "center" }} className="desktop-nav">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontSize: 13, color: "var(--muted)", transition: "color 0.15s", letterSpacing: "0.02em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            style={{
              background: "var(--accent)",
              color: "#16110b",
              padding: "9px 18px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 700,
              transition: "background 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-strong)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
          >
            {ctaLabel}
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--foreground)",
            cursor: "pointer",
            fontSize: 20,
            padding: 4,
          }}
          className="mobile-menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div
          style={{
            background: "rgba(23,18,13,0.96)",
            borderTop: "1px solid rgba(255,241,219,0.08)",
            padding: "16px 24px 22px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
          className="mobile-nav"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 15, color: "var(--muted)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            style={{
              background: "var(--accent)",
              color: "#16110b",
              padding: "10px 18px",
              borderRadius: 999,
              fontSize: 14,
              fontWeight: 700,
              textAlign: "center",
            }}
          >
            {ctaLabel}
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (max-width: 520px) {
          nav a[href="/"] {
            font-size: 12px !important;
            max-width: 210px !important;
          }
        }
      `}</style>
    </nav>
  );
}
