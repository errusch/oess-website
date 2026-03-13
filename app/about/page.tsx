"use client";
import Link from "next/link";

export default function About() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "82px 24px 100px" }}>
      <div style={{ marginBottom: 34, maxWidth: 760 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
          About OESS
        </div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 0.98, letterSpacing: "-0.04em", margin: "0 0 18px" }}>
          I built this because I got tired of being the backup system.
        </h1>
        <p style={{ fontSize: 20, color: "var(--muted)", lineHeight: 1.8, margin: 0, maxWidth: 720 }}>
          The work under the work kept coming back to me: inbox cleanup,
          meeting prep, follow-up, scheduling, reminders, and too much context
          living in my head.
        </p>
      </div>

      <div style={{ display: "grid", gap: 18, marginBottom: 36, color: "var(--muted)", fontSize: 17, lineHeight: 1.9 }}>
        <p style={{ margin: 0 }}>
          I spent years across IT, systems, process improvement, support, and
          operations. Eventually I stopped pretending I was going to get more
          organized by force of will and built a system instead.
        </p>
        <p style={{ margin: 0 }}>
          The version I use for myself reads inbox context before I do, prepares
          me for meetings, pulls research when something needs a decision, and
          keeps follow-through from disappearing. It is not magic. It is useful
          in the places leaders quietly lose time every week.
        </p>
        <p style={{ margin: 0 }}>
          OESS exists for founders and executives who want that relief without
          spending months building it themselves. We install the system in your
          environment, adapt it to the way you work, and stay close until it is
          useful in real conditions.
        </p>
        <p style={{ margin: 0 }}>
          This is a founder-run service, not a SaaS company pretending to be
          hands-on. We handle the setup and support so you do not end up
          babysitting another tool.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 40 }} className="about-grid">
        {[
          ["What we believe", "Your best hours should go to decisions, momentum, and real conversations. Not inbox cleanup and coordination drag."],
          ["What OESS is", "A hands-on service that installs your AI Chief of Staff around the way you already work."],
          ["What OESS is not", "Not another dashboard. Not a generic chatbot. Not a fantasy about AI running your company without your judgment."],
          ["Why trust us with it", "We know both sides of the problem: how to build the system and how to make it hold up under real operating mess."],
        ].map(([title, copy]) => (
          <div key={title} style={{ border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 24, padding: 24 }}>
            <h2 style={{ fontSize: 28, lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 10px" }}>{title}</h2>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.8, fontSize: 15 }}>{copy}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 0, display: "flex", alignItems: "center", gap: 20, padding: 28, background: "rgba(255,248,236,0.03)", border: "1px solid var(--border)", borderRadius: 28, marginBottom: 40 }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 24, fontWeight: 800, color: "#16110b" }}>
          ER
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 20 }}>Eric Rusch</div>
          <div style={{ fontSize: 15, color: "var(--muted)", marginTop: 2 }}>
            Founder, OESS. 15+ years across IT, systems, process improvement, and operations.
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Link href="/contact" style={{
          background: "var(--accent)", color: "#16110b", padding: "15px 24px", borderRadius: 999,
          fontWeight: 700, fontSize: 15, display: "inline-block",
        }}>
          Request an Assessment
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
