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
          The honest version
        </div>
        <div style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.9 }}>
          <p style={{ marginTop: 0 }}>
            This is more private than a normal SaaS workflow because it runs on
            your side. That matters.
          </p>
          <p>
            If we are supporting or troubleshooting your setup, that can still
            require scoped access. We would rather say that directly than hide it
            behind vague trust language.
          </p>
          <p style={{ marginBottom: 0 }}>
            If you want the strongest privacy posture, keep the setup simple,
            keep ownership clean, and avoid unnecessary integrations.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 24 }} className="security-grid">
        <div style={{ padding: 24, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
            What stays with you
          </div>
          <div style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: 15, display: "grid", gap: 10 }}>
            <p style={{ margin: 0 }}>Cloud account or Mac Mini you control</p>
            <p style={{ margin: 0 }}>Model and integration accounts in your name</p>
            <p style={{ margin: 0 }}>Explicit support access instead of hidden dependency</p>
            <p style={{ margin: 0 }}>No platform fee sitting between you and your system</p>
          </div>
        </div>
        <div style={{ padding: 24, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
            Questions before buying
          </div>
          <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.8 }}>
            If you need a deeper security conversation before moving forward,
            email <a href="mailto:errusch@gmail.com" style={{ color: "var(--accent)" }}>errusch@gmail.com</a>.
            We would rather answer the real concern directly than hide behind
            generic trust copy.
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
