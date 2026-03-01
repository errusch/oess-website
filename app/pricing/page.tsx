"use client";
import { useState } from "react";
import Link from "next/link";

const tiers = [
  {
    name: "Foundation",
    monthly: 297,
    tag: "For founders getting started",
    features: [
      "Email triage and prioritization",
      "Calendar sync and management",
      "Morning briefing, daily",
      "Single AI model (Claude or GPT-4)",
      "OpenClaw on your existing Mac",
      "Email support",
    ],
    cta: "Start with Foundation",
    highlight: false,
  },
  {
    name: "Professional",
    monthly: 597,
    tag: "Most popular",
    features: [
      "Everything in Foundation",
      "Multi-model agent routing",
      "Meeting prep and research",
      "Contact management (CRM-light)",
      "Custom workflows",
      "Priority support (24hr response)",
    ],
    cta: "Start with Professional",
    highlight: true,
  },
  {
    name: "Executive",
    monthly: 997,
    tag: "For serious operations",
    features: [
      "Everything in Professional",
      "Dedicated Mac Mini (shipped and configured)",
      "Overnight autonomous ops",
      "Custom scheduled task library",
      "Security monitoring and alerts",
      "Weekly ops review call",
    ],
    cta: "Start with Executive",
    highlight: false,
  },
  {
    name: "Command",
    monthly: 4997,
    tag: "Full-stack AI ops team",
    features: [
      "Everything in Executive",
      "Mac Studio (shipped and configured)",
      "Six-model concurrent agent team",
      "White-glove onboarding and setup",
      "Direct Slack and Telegram channel",
      "SLA: 2hr response, 24/7",
    ],
    cta: "Contact for Command",
    highlight: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  function price(monthly: number) {
    const p = annual ? Math.round(monthly * 0.9) : monthly;
    return p.toLocaleString();
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
          Simple, transparent pricing.
        </h1>
        <p style={{ color: "#777", fontSize: 17, maxWidth: 480, margin: "0 auto 40px" }}>
          Pick the tier that fits your operation. Upgrade or cancel anytime. No hidden fees.
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <span style={{ fontSize: 14, color: annual ? "#555" : "#ededed" }}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            style={{
              width: 48, height: 26, borderRadius: 13,
              background: annual ? "#c9a84c" : "#2a2a2a",
              border: "none", cursor: "pointer", position: "relative", transition: "background 0.2s",
            }}>
            <span style={{
              position: "absolute", top: 3, left: annual ? 25 : 3, width: 20, height: 20,
              borderRadius: "50%", background: "#fff", transition: "left 0.2s",
            }} />
          </button>
          <span style={{ fontSize: 14, color: annual ? "#ededed" : "#555" }}>
            Annual <span style={{ color: "#c9a84c", fontWeight: 600 }}>save 10%</span>
          </span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
        {tiers.map(t => (
          <div key={t.name} style={{
            background: t.highlight ? "#161610" : "#111111",
            border: `1px solid ${t.highlight ? "#c9a84c" : "#1f1f1f"}`,
            borderRadius: 12, padding: 32, position: "relative", display: "flex", flexDirection: "column",
          }}>
            {t.highlight && (
              <div style={{
                position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)",
                background: "#c9a84c", color: "#0a0a0a", fontSize: 11, fontWeight: 700,
                padding: "4px 14px", borderRadius: 100, letterSpacing: "0.08em", whiteSpace: "nowrap",
              }}>
                MOST POPULAR
              </div>
            )}
            <div style={{ fontSize: 11, color: "#666", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>{t.tag}</div>
            <div style={{ fontSize: 22, fontWeight: 800, marginBottom: 4 }}>{t.name}</div>
            <div style={{ marginBottom: 28 }}>
              <span style={{ fontSize: 40, fontWeight: 800, color: t.highlight ? "#c9a84c" : "#ededed", letterSpacing: "-0.02em" }}>${price(t.monthly)}</span>
              <span style={{ fontSize: 14, color: "#555" }}>/mo{annual ? " (billed annually)" : ""}</span>
            </div>
            <div style={{ flex: 1 }}>
              {t.features.map(f => (
                <div key={f} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#c9a84c", fontSize: 14, marginTop: 1, flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: 13, color: "#999", lineHeight: 1.5 }}>{f}</span>
                </div>
              ))}
            </div>
            <Link href="/contact" style={{
              display: "block", textAlign: "center", marginTop: 28,
              background: t.highlight ? "#c9a84c" : "transparent",
              color: t.highlight ? "#0a0a0a" : "#ededed",
              border: t.highlight ? "none" : "1px solid #2a2a2a",
              padding: "12px 20px", borderRadius: 8, fontWeight: 600, fontSize: 14,
              transition: "background 0.15s, border-color 0.15s",
            }}
              onMouseEnter={e => {
                if (t.highlight) (e.currentTarget as HTMLAnchorElement).style.background = "#e0c068";
                else (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c9a84c";
              }}
              onMouseLeave={e => {
                if (t.highlight) (e.currentTarget as HTMLAnchorElement).style.background = "#c9a84c";
                else (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a";
              }}>
              {t.cta}
            </Link>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: 56, padding: "40px 32px", background: "#111111", border: "1px solid #1f1f1f", borderRadius: 12 }}>
        <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Not sure which tier fits?</h3>
        <p style={{ color: "#666", fontSize: 14, margin: "0 auto 24px", maxWidth: 400 }}>
          Book a 20-minute call. Walk through your current stack and weekly pain points. No sales pitch.
        </p>
        <Link href="/contact" style={{
          background: "transparent", border: "1px solid #c9a84c", color: "#c9a84c",
          padding: "12px 28px", borderRadius: 8, fontWeight: 600, fontSize: 14, display: "inline-block",
          transition: "background 0.15s, color 0.15s",
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "#c9a84c"; (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c"; }}>
          Schedule a call
        </Link>
      </div>
    </div>
  );
}
