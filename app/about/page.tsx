"use client";
import Link from "next/link";

const trustPoints = [
  ["What we do", "We install an AI Chief of Staff in your environment and tune it around one meaningful bottleneck first."],
  ["What stays yours", "The infrastructure, accounts, and decision rights stay with you."],
  ["How we work", "We keep the first scope tight, then stay close through live use so it becomes genuinely useful."],
  ["What we are not", "Not a generic chatbot, not another dashboard, and not a hidden platform layer."],
];

export default function About() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "82px 24px 100px" }}>
      <div style={{ marginBottom: 34, maxWidth: 760 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
          About OESS
        </div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 0.98, letterSpacing: "-0.04em", margin: "0 0 18px" }}>
          A hands-on setup partner for executive AI.
        </h1>
        <p style={{ fontSize: 20, color: "var(--muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
          We help founders and executives install private AI operating systems without giving up control.
        </p>
      </div>

      <div style={{ display: "grid", gap: 18, marginBottom: 36, color: "var(--muted)", fontSize: 17, lineHeight: 1.9 }}>
        <p style={{ margin: 0 }}>
          The point is simple: remove a recurring executive bottleneck without forcing you onto somebody else&apos;s platform.
        </p>
        <p style={{ margin: 0 }}>
          We usually start with inbox cleanup, meeting prep, follow-through, scheduling, or research. Then we stay close until it works in real use.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 40 }} className="about-grid">
        {trustPoints.map(([title, copy]) => (
          <div key={title} style={{ border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 24, padding: 24 }}>
            <h2 style={{ fontSize: 28, lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 10px" }}>{title}</h2>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.8, fontSize: 15 }}>{copy}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 20, padding: 28, background: "rgba(255,248,236,0.03)", border: "1px solid var(--border)", borderRadius: 28, marginBottom: 40 }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 24, fontWeight: 800, color: "#16110b" }}>
          ER
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 20 }}>Eric Rusch</div>
          <div style={{ fontSize: 15, color: "var(--muted)", marginTop: 2 }}>
            Founder, OESS. Built for buyers who want a hands-on setup partner and a cleaner control model.
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Link href="/contact" style={{
          background: "var(--accent)", color: "#16110b", padding: "15px 24px", borderRadius: 999,
          fontWeight: 700, fontSize: 15, display: "inline-block",
        }}>
          Request a Free Assessment
        </Link>
        <Link href="/pricing" style={{
          background: "rgba(255,248,236,0.03)", border: "1px solid var(--border)", color: "var(--foreground)",
          padding: "15px 24px", borderRadius: 999, fontWeight: 600, fontSize: 15, display: "inline-block",
        }}>
          Review Pricing
        </Link>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .about-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
