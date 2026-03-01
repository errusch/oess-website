"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #1f1f1f", padding: "40px 24px", marginTop: 80 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
            <span style={{ color: "#c9a84c" }}>OESS</span>
          </div>
          <p style={{ fontSize: 13, color: "#666", maxWidth: 280, lineHeight: 1.6 }}>
            OpenClaw Executive Setup Service. AI agents built for founders who have better things to do than manage their inbox.
          </p>
        </div>
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#c9a84c", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Product</div>
            {[["Pricing", "/pricing"], ["FAQ", "/faq"]].map(([label, href]) => (
              <div key={href} style={{ marginBottom: 8 }}>
                <Link href={href} style={{ fontSize: 13, color: "#666" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#ededed")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#666")}>
                  {label}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: "#c9a84c", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>Company</div>
            {[["About", "/about"], ["Security", "/security"]].map(([label, href]) => (
              <div key={href} style={{ marginBottom: 8 }}>
                <Link href={href} style={{ fontSize: 13, color: "#666" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#ededed")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#666")}>
                  {label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "32px auto 0", paddingTop: 24, borderTop: "1px solid #1a1a1a", fontSize: 12, color: "#444", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
        <span>© {new Date().getFullYear()} OESS. All rights reserved.</span>
        <span>Built by a founder, for founders.</span>
      </div>
    </footer>
  );
}
