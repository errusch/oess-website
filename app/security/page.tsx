"use client";
export default function Security() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#c9a84c", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Security</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 20px" }}>
          Your data stays on your hardware.
        </h1>
        <p style={{ fontSize: 18, color: "#777", lineHeight: 1.6, maxWidth: 600 }}>
          OESS runs on equipment you own, at your location. There is no central server. No cloud database. No vendor holding your business data.
        </p>
      </div>

      {/* Key principles */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20, marginBottom: 64 }}>
        {[
          { icon: "🔒", title: "On-premise only", body: "All agents run on your Mac. Data is processed locally. Nothing is sent to a central OESS server." },
          { icon: "🔐", title: "AES-256 encryption", body: "Data at rest is encrypted with AES-256. All remote connections use TLS 1.2 or higher. No exceptions." },
          { icon: "🚫", title: "No AI training on your data", body: "Your emails, meetings, and documents are never used to train AI models. That data is yours, period." },
          { icon: "🗝️", title: "1Password credential vaults", body: "Every credential is stored in a 1Password vault — not in plaintext config files or environment variables." },
        ].map(item => (
          <div key={item.title} style={{ background: "#111111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28 }}>
            <div style={{ fontSize: 28, marginBottom: 16 }}>{item.icon}</div>
            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 10 }}>{item.title}</h3>
            <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{item.body}</p>
          </div>
        ))}
      </div>

      {/* Technical details */}
      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 32 }}>Technical specifics</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid #1f1f1f", borderRadius: 12, overflow: "hidden" }}>
          {[
            ["Encryption in transit", "TLS 1.2 minimum for all API calls. TLS 1.3 preferred where supported."],
            ["Encryption at rest", "AES-256 for stored credentials, cached data, and local knowledge bases."],
            ["Credential storage", "1Password CLI integration. No credentials in code, config files, or logs."],
            ["Node monitoring", "OpenClaw node pairing for real-time status monitoring and health checks."],
            ["Access control", "Owner-only operations require explicit approval. Audit log captures all security-relevant events."],
            ["AI model privacy", "All AI API calls are made with your own API keys. OESS never proxies your model requests."],
          ].map(([label, detail], i) => (
            <div key={label} style={{
              display: "flex", gap: 24, padding: "20px 24px",
              borderTop: i > 0 ? "1px solid #1a1a1a" : "none",
              flexWrap: "wrap",
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#ededed", minWidth: 200, flexShrink: 0 }}>{label}</div>
              <div style={{ fontSize: 13, color: "#666", flex: 1, lineHeight: 1.6 }}>{detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Incident response */}
      <div style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 28, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20 }}>Incident response</h2>
        <p style={{ color: "#666", fontSize: 15, marginBottom: 32, lineHeight: 1.6 }}>
          If a security issue is identified — on our end or yours — this is the process:
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { step: "1. Contain", body: "Isolate the affected system or account. Revoke active credentials if necessary. Stop the bleeding first." },
            { step: "2. Assess", body: "Determine scope: what was accessed, what was exposed, what the attack vector was." },
            { step: "3. Notify", body: "Contact the client within 2 hours of confirmed incident. No waiting until everything is resolved." },
            { step: "4. Fix", body: "Patch the vulnerability, rotate credentials, harden the configuration." },
            { step: "5. Document", body: "Write up what happened, how it was resolved, and what changed to prevent recurrence." },
          ].map(({ step, body }) => (
            <div key={step} style={{ display: "flex", gap: 20, padding: "20px 24px", background: "#111111", border: "1px solid #1f1f1f", borderRadius: 10, alignItems: "flex-start" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#c9a84c", minWidth: 80, flexShrink: 0, paddingTop: 2 }}>{step}</div>
              <div style={{ fontSize: 14, color: "#888", lineHeight: 1.6 }}>{body}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "28px 32px", background: "#111111", border: "1px solid #1f1f1f", borderRadius: 12 }}>
        <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>Questions about security?</h3>
        <p style={{ fontSize: 14, color: "#666", marginBottom: 0, lineHeight: 1.6 }}>
          Email <a href="mailto:errusch@gmail.com" style={{ color: "#c9a84c" }}>errusch@gmail.com</a> directly. Security questions get a response within 24 hours.
        </p>
      </div>
    </div>
  );
}
