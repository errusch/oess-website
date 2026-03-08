"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,241,219,0.08)", padding: "44px 24px", marginTop: 96 }}>
      <div style={{ maxWidth: 1120, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
            <span style={{ color: "var(--accent)" }}>OESS</span>
          </div>
          <p style={{ fontSize: 13, color: "var(--muted-2)", maxWidth: 320, lineHeight: 1.7 }}>
            Private AI chief of staff systems for founder-led teams. Hardware included. Tuned to your workflow.
          </p>
        </div>
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Product</div>
            {[["Pricing", "/pricing"], ["FAQ", "/faq"]].map(([label, href]) => (
              <div key={href} style={{ marginBottom: 8 }}>
                <Link href={href} style={{ fontSize: 13, color: "var(--muted-2)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-2)")}>
                  {label}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Company</div>
            {[["About", "/about"], ["Security", "/security"]].map(([label, href]) => (
              <div key={href} style={{ marginBottom: 8 }}>
                <Link href={href} style={{ fontSize: 13, color: "var(--muted-2)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted-2)")}>
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1120, margin: "32px auto 0", paddingTop: 24, borderTop: "1px solid rgba(255,241,219,0.06)", fontSize: 12, color: "var(--muted-2)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span>© {new Date().getFullYear()} OESS. All rights reserved.</span>
        <span>Built by a founder, for founders who should not be doing admin.</span>
      </div>
    </footer>
  );
}
