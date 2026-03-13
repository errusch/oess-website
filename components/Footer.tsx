"use client";
import Link from "next/link";

export default function Footer() {
  const brandLabel = "Openclaw Executive Setup Service";

  return (
    <footer style={{ borderTop: "1px solid rgba(255,241,219,0.08)", padding: "44px 24px", marginTop: 96 }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8, maxWidth: 320, lineHeight: 1.2 }}>
            <span style={{ color: "var(--accent)" }}>{brandLabel}</span>
          </div>
          <p style={{ fontSize: 13, color: "var(--muted-2)", maxWidth: 340, lineHeight: 1.7, margin: 0 }}>
            Private AI operating systems for founders and executives, installed in infrastructure they control.
          </p>
        </div>
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Explore</div>
            {[["Pricing", "/pricing"], ["About", "/about"], ["Security", "/security"], ["FAQ", "/faq"], ["Contact", "/contact"]].map(([label, href]) => (
              <div key={href} style={{ marginBottom: 8 }}>
                <Link
                  href={href}
                  style={{ fontSize: 13, color: "var(--muted-2)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted-2)")}
                >
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1120, margin: "32px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,241,219,0.06)", fontSize: 12, color: "var(--muted-2)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span>© {new Date().getFullYear()} {brandLabel}. All rights reserved.</span>
        <span>Cloud account or Mac Mini. Your setup, your accounts.</span>
      </div>
    </footer>
  );
}
