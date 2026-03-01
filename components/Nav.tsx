"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/security", label: "Security" },
  { href: "/faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(10,10,10,0.95)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid #1f1f1f",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em" }}>
          <span style={{ color: "#c9a84c" }}>OESS</span>
        </Link>

        {/* Desktop */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: 14, color: "#a1a1a1", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ededed")}
              onMouseLeave={e => (e.currentTarget.style.color = "#a1a1a1")}>
              {l.label}
            </Link>
          ))}
          <Link href="/pricing" style={{
            background: "#c9a84c", color: "#0a0a0a", padding: "8px 18px", borderRadius: 6,
            fontSize: 13, fontWeight: 600, transition: "background 0.15s"
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#e0c068")}
            onMouseLeave={e => (e.currentTarget.style.background = "#c9a84c")}>
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", color: "#ededed", cursor: "pointer", fontSize: 20, padding: 4 }} className="mobile-menu-btn">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div style={{ background: "#111111", borderTop: "1px solid #1f1f1f", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 }} className="mobile-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: 15, color: "#a1a1a1" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/pricing" onClick={() => setOpen(false)} style={{ background: "#c9a84c", color: "#0a0a0a", padding: "10px 18px", borderRadius: 6, fontSize: 14, fontWeight: 600, textAlign: "center" }}>
            Get Started
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
