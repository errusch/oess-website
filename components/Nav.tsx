"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
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
      background: "rgba(15,13,10,0.72)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid rgba(255,241,219,0.08)",
    }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: 20, letterSpacing: "-0.03em" }}>
          <span style={{ color: "var(--accent)" }}>OESS</span>
        </Link>

        {/* Desktop */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: 13, color: "var(--muted)", transition: "color 0.15s", letterSpacing: "0.02em" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" style={{
            background: "var(--accent)", color: "#16110b", padding: "9px 18px", borderRadius: 999,
            fontSize: 13, fontWeight: 700, transition: "background 0.15s"
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-strong)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}>
            Request Assessment
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} style={{ display: "none", background: "none", border: "none", color: "var(--foreground)", cursor: "pointer", fontSize: 20, padding: 4 }} className="mobile-menu-btn">
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div style={{ background: "rgba(23,18,13,0.96)", borderTop: "1px solid rgba(255,241,219,0.08)", padding: "16px 24px", display: "flex", flexDirection: "column", gap: 16 }} className="mobile-nav">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{ fontSize: 15, color: "var(--muted)" }}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{ background: "var(--accent)", color: "#16110b", padding: "10px 18px", borderRadius: 999, fontSize: 14, fontWeight: 700, textAlign: "center" }}>
            Request Assessment
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
