"use client";

const controlItems = [
  "Cloud account or Mac Mini you control",
  "Model and integration accounts in your name",
  "Scoped support access when needed",
  "No OESS platform sitting between you and the system",
];

export default function Security() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "82px 24px 100px" }}>
      <div style={{ maxWidth: 760, marginBottom: 34 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
          Security
        </div>
        <h1 style={{ fontSize: "clamp(42px, 6vw, 70px)", lineHeight: 0.98, letterSpacing: "-0.04em", margin: "0 0 16px" }}>
          A simpler control model.
        </h1>
        <p style={{ fontSize: 20, color: "var(--muted)", lineHeight: 1.8, maxWidth: 720, margin: 0 }}>
          We install the system in infrastructure you control. You keep the accounts, the hardware, and the decision rights.
        </p>
      </div>

      <div style={{ border: "1px solid var(--border)", background: "rgba(255,248,236,0.03)", borderRadius: 28, padding: 28, marginBottom: 24 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>
          How access works
        </div>
        <div style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.9 }}>
          <p style={{ marginTop: 0 }}>
            This does not run inside a shared OESS platform.
          </p>
          <p style={{ marginBottom: 0 }}>
            If setup or support requires access, it should be explicit, limited to the part being worked on, and easy to remove.
          </p>
        </div>
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
            Before you buy
          </div>
          <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.8 }}>
            If you want to walk through the access model before moving forward, email <a href="mailto:eric@oessai.com" style={{ color: "var(--accent)" }}>eric@oessai.com</a>.
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
