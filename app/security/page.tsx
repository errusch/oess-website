"use client";
import Link from "next/link";

const controlItems = [
  "Cloud account or Mac Mini you control",
  "Model and integration accounts in your name",
  "No OESS platform sitting between you and the system",
  "Access can stay narrow, explicit, and removable",
];

const comparison = [
  {
    option: "DIY OpenClaw setup",
    strength: "Maximum control and flexibility.",
    tradeoff: "You own the setup work, the debugging, the tuning, and the upkeep.",
  },
  {
    option: "Shared AI SaaS",
    strength: "Fastest path to generic functionality.",
    tradeoff: "Less privacy, less control, and weaker alignment with how your business already runs.",
  },
  {
    option: "OESS",
    strength: "Private control with hands-on implementation.",
    tradeoff: "Higher-touch, narrower, and built for buyers who care more about fit and control than lowest price.",
  },
];

export default function Security() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "82px 24px 100px" }}>
      <div style={{ maxWidth: 780, marginBottom: 34 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
          Security
        </div>
        <h1 style={{ fontSize: "clamp(42px, 6vw, 70px)", lineHeight: 0.98, letterSpacing: "-0.04em", margin: "0 0 16px" }}>
          A simpler control model.
        </h1>
        <p style={{ fontSize: 20, color: "var(--muted)", lineHeight: 1.8, maxWidth: 760, margin: 0 }}>
          We install the system in infrastructure you control. You keep the accounts, the hardware, and the decision rights. That is the point.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 24 }} className="security-grid">
        <div style={{ padding: 24, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
            What stays under your control
          </div>
          <div style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: 15, display: "grid", gap: 10 }}>
            {controlItems.map((item) => (
              <p key={item} style={{ margin: 0 }}>{item}</p>
            ))}
          </div>
        </div>
        <div style={{ padding: 24, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
            How support access works
          </div>
          <div style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8 }}>
            <p style={{ marginTop: 0 }}>
              This does not run inside a shared OESS platform.
            </p>
            <p style={{ marginBottom: 0 }}>
              If support needs access, it should be explicit, limited, and easy to remove when the job is done.
            </p>
          </div>
        </div>
      </div>

      <div style={{ border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 28, padding: 28 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
          Before you buy
        </div>
        <p style={{ fontSize: 16, color: "var(--muted)", margin: "0 0 18px", lineHeight: 1.8, maxWidth: 720 }}>
          If you want to talk through privacy, access, deployment model, or where support begins and ends, request a free assessment and tell us what you want covered.
        </p>
        <Link
          href="/contact"
          style={{
            display: "inline-block",
            background: "var(--accent)",
            color: "#16110b",
            padding: "12px 18px",
            borderRadius: 999,
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          Request a Free Assessment
        </Link>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .security-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
