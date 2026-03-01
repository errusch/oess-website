"use client";
import Link from "next/link";

const features = [
  {
    icon: "🌙",
    title: "Agents work while you sleep",
    body: "Overnight task queues run while you're offline. Wake up to research completed, emails drafted, and your day already organized. OESS runs on your hardware — no cloud dependency, no idle timeout.",
  },
  {
    icon: "📬",
    title: "Email handles itself",
    body: "AI reads, triages, and drafts replies to your inbox before you open it. High-priority items surface. Noise gets filtered. You respond to what matters, skip the rest.",
  },
  {
    icon: "🎙️",
    title: "Voice-first control",
    body: "Tell your agent what you need in plain language. Via Telegram, voice message, or direct command. No dashboards to click through. It either does it or tells you why it can't.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 24px 80px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#161616", border: "1px solid #2a2a2a", borderRadius: 100, padding: "6px 16px", fontSize: 12, color: "#c9a84c", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 32 }}>
          OpenClaw Executive Setup Service
        </div>
        <h1 style={{ fontSize: "clamp(40px, 7vw, 80px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", margin: "0 0 24px" }}>
          Get 40 hours back<br />
          <span style={{ color: "#c9a84c" }}>every week.</span>
        </h1>
        <p style={{ fontSize: "clamp(16px, 2.5vw, 22px)", color: "#888", lineHeight: 1.6, maxWidth: 640, margin: "0 auto 48px" }}>
          OESS wires OpenClaw into your daily operations. AI agents handle email, calendar, research, and workflows. You set it up once. It runs from there.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/pricing" style={{
            background: "#c9a84c", color: "#0a0a0a", padding: "14px 32px", borderRadius: 8,
            fontWeight: 700, fontSize: 16, transition: "background 0.15s", display: "inline-block",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#e0c068")}
            onMouseLeave={e => (e.currentTarget.style.background = "#c9a84c")}>
            See Pricing
          </Link>
          <Link href="/about" style={{
            background: "transparent", color: "#ededed", padding: "14px 32px", borderRadius: 8,
            fontWeight: 600, fontSize: 16, border: "1px solid #2a2a2a", transition: "border-color 0.15s", display: "inline-block",
          }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "#c9a84c")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "#2a2a2a")}>
            How it works
          </Link>
        </div>
      </section>

      {/* Divider stat bar */}
      <section style={{ borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f", background: "#0d0d0d" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px", display: "flex", justifyContent: "center", gap: "clamp(32px, 6vw, 80px)", flexWrap: "wrap" }}>
          {[["40 hrs", "Recovered per week"], ["1 day", "Setup time"], ["6 models", "Working in parallel"], ["24/7", "Autonomous ops"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 800, color: "#c9a84c", letterSpacing: "-0.02em" }}>{num}</div>
              <div style={{ fontSize: 12, color: "#555", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px" }}>
            Your operations, automated.
          </h2>
          <p style={{ color: "#666", fontSize: 16, maxWidth: 480, margin: "0 auto" }}>
            Three things that drain founders every day. OESS handles all of them.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {features.map(f => (
            <div key={f.title} style={{
              background: "#111111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 32,
              transition: "border-color 0.15s",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "#c9a84c")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#1f1f1f")}>
              <div style={{ fontSize: 32, marginBottom: 20 }}>{f.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 12, letterSpacing: "-0.01em" }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: "#777", lineHeight: 1.7 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section style={{ background: "#0d0d0d", borderTop: "1px solid #1f1f1f", borderBottom: "1px solid #1f1f1f" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 24px" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, letterSpacing: "-0.02em", margin: "0 0 16px" }}>
              Up and running in a day.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 0, position: "relative" }}>
            {[
              { step: "01", title: "Discovery call", body: "We map your tools, calendar, email, and workflows. Understand what wastes your time." },
              { step: "02", title: "Hardware setup", body: "We configure your Mac Mini or use your existing machine. Install OpenClaw. Pair your node." },
              { step: "03", title: "Agent wiring", body: "Connect your accounts. Configure agents for email, calendar, research. Run a test overnight batch." },
              { step: "04", title: "Handoff", body: "You get a brief walkthrough. Then it runs. You have a direct channel if anything needs attention." },
            ].map((s, i) => (
              <div key={s.step} style={{ padding: "32px 28px", borderLeft: i === 0 ? "none" : "1px solid #1f1f1f" }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#c9a84c", letterSpacing: "0.12em", marginBottom: 16 }}>STEP {s.step}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 700, margin: "0 auto", padding: "96px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 20 }}>
          Ready to stop doing work<br />an agent can handle?
        </h2>
        <p style={{ color: "#666", fontSize: 16, marginBottom: 40, lineHeight: 1.6 }}>
          Starts at $297/month. Setup in one day. Cancel anytime.
        </p>
        <Link href="/pricing" style={{
          background: "#c9a84c", color: "#0a0a0a", padding: "16px 40px", borderRadius: 8,
          fontWeight: 700, fontSize: 17, display: "inline-block", transition: "background 0.15s",
        }}
          onMouseEnter={e => (e.currentTarget.style.background = "#e0c068")}
          onMouseLeave={e => (e.currentTarget.style.background = "#c9a84c")}>
          View Plans
        </Link>
      </section>
    </div>
  );
}
