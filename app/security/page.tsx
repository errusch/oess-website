"use client";
export default function Security() {
  return (
    <div style={{ maxWidth: 980, margin: "0 auto", padding: "82px 24px 100px" }}>
      <div style={{ maxWidth: 760, marginBottom: 40 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Security</div>
        <h1 style={{ fontSize: "clamp(42px, 6vw, 70px)", lineHeight: 0.98, letterSpacing: "-0.04em", margin: "0 0 16px" }}>
          Your business should not have to trust my cloud.
        </h1>
        <p style={{ fontSize: 20, color: "var(--muted)", lineHeight: 1.8, maxWidth: 700, margin: 0 }}>
          The point of OESS is architectural simplicity: the system lives on your
          side, on a dedicated machine in your environment, around your accounts.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18, marginBottom: 38 }}>
        {[
          { title: "Runs in your environment", body: "OESS is deployed on a dedicated machine on your side instead of routing your business through a vendor-hosted app." },
          { title: "Your accounts stay yours", body: "The setup is designed around your model accounts and integrations, not a proprietary OESS-hosted control plane." },
          { title: "Support is explicit", body: "If support or troubleshooting requires access, that is a support event, not a hidden background dependency." },
          { title: "No inflated claims", body: "I am not going to sell you fake zero-trust language. The honest claim is simpler: the system is designed to live on your side." },
        ].map(item => (
          <div key={item.title} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 24, padding: 24 }}>
            <h3 style={{ fontSize: 28, lineHeight: 1.04, letterSpacing: "-0.03em", margin: "0 0 10px" }}>{item.title}</h3>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, margin: 0 }}>{item.body}</p>
          </div>
        ))}
      </div>

      <div style={{ border: "1px solid var(--border)", background: "rgba(255,248,236,0.03)", borderRadius: 28, padding: 28, marginBottom: 34 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 14 }}>What I tell clients directly</div>
        <div style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.9 }}>
          <p style={{ marginTop: 0 }}>
            OESS is more private than a normal SaaS workflow because the system is
            deployed on your side. That matters.
          </p>
          <p>
            It is not “zero trust magic.” If I am supporting or troubleshooting
            your deployment, that is still a trust relationship with scoped access.
            I think that is the honest way to describe it.
          </p>
          <p style={{ marginBottom: 0 }}>
            If you want the strongest privacy posture, the answer is tighter
            operational discipline, fewer unnecessary integrations, and a system
            boundary you actually understand.
          </p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }} className="security-grid">
        <div style={{ padding: 24, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Security baseline</div>
          <div style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: 15 }}>
            <p style={{ marginTop: 0 }}>Private deployment in your environment</p>
            <p>Owner-controlled model and integration accounts</p>
            <p>Scoped support and maintenance access</p>
            <p style={{ marginBottom: 0 }}>No OESS-hosted business-data platform</p>
          </div>
        </div>
        <div style={{ padding: 24, background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>Questions</div>
          <p style={{ fontSize: 15, color: "var(--muted)", margin: 0, lineHeight: 1.8 }}>
            If you need a more technical security conversation before buying,
            email <a href="mailto:errusch@gmail.com" style={{ color: "var(--accent)" }}>errusch@gmail.com</a>.
            I would rather answer the real concern than hide it behind generic trust copy.
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
