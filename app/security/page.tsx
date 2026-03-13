"use client";
export default function Security() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "82px 24px 100px" }}>
      <div style={{ maxWidth: 760, marginBottom: 34 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
          Security
        </div>
        <h1 style={{ fontSize: "clamp(42px, 6vw, 70px)", lineHeight: 0.98, letterSpacing: "-0.04em", margin: "0 0 16px" }}>
          You should not have to hand your business to another platform.
        </h1>
        <p style={{ fontSize: 20, color: "var(--muted)", lineHeight: 1.8, maxWidth: 720, margin: 0 }}>
          We install the system in a cloud account you own or on a Mac Mini you
          control. You keep the hardware, the accounts, and the decision rights.
        </p>
      </div>

      <div style={{ border: "1px solid var(--border)", background: "rgba(255,248,236,0.03)", borderRadius: 28, padding: 28, marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
          How access works
        </div>
        <div style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.9 }}>
          <p style={{ marginTop: 0 }}>
            This runs in a cloud account you own or on a Mac Mini you control.
            It does not live inside a shared OESS platform.
          </p>
          <p>
            If we are setting things up, supporting an issue, or troubleshooting
            a problem, we may need limited access to the part we are working on.
            That access should be explicit and scoped.
          </p>
          <p style={{ marginBottom: 0 }}>
            If privacy is your top concern, the cleanest setup is usually the
            strongest one: your account, your hardware, and only the
            integrations you actually need.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 24 }} className="security-grid">
        <div style={{ padding: 24, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
            What you control
          </div>
          <div style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: 15, display: "grid", gap: 10 }}>
            <p style={{ margin: 0 }}>Cloud account or Mac Mini you control</p>
            <p style={{ margin: 0 }}>Model and integration accounts in your name</p>
            <p style={{ margin: 0 }}>Scoped support access when needed</p>
            <p style={{ margin: 0 }}>No platform fee sitting between you and your system</p>
          </div>
        </div>
        <div style={{ padding: 24, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
            Questions before buying
          </div>
          <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.8 }}>
            If you want to talk through security before moving forward, email{" "}
            <a href="mailto:eric@oessai.com" style={{ color: "var(--accent)" }}>eric@oessai.com</a>.
            We are happy to walk you through the setup directly.
          </p>
        </div>
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
