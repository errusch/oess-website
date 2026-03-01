"use client";
import Link from "next/link";

export default function About() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#c9a84c", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>About OESS</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.1, margin: "0 0 24px" }}>
          Built for myself first.
        </h1>
        <p style={{ fontSize: 20, color: "#888", lineHeight: 1.6 }}>
          Then I realized every founder I know has the same problem.
        </p>
      </div>

      <div style={{ fontSize: 17, lineHeight: 1.8, color: "#c0c0c0" }}>
        <p>I was spending three hours a day on email, calendar, and admin.</p>

        <p>Not responding to hard things — just processing. Reading and deciding what to do with routine stuff. Booking meetings. Triaging notifications. Following up on threads that had been sitting for a week. The kind of work that feels necessary but produces nothing.</p>

        <p>I&apos;m a developer. I had been watching AI tooling get genuinely capable. So I did what any engineer does when something annoys them: I built a system to fix it.</p>

        <p>OpenClaw runs on a Mac Mini in my office. It reads my email before I wake up. It drafts replies, flags the two things that actually need my attention, and archives the rest. It manages my calendar, preps for meetings, and runs overnight research batches on things I flagged during the day. By the time I sit down with coffee, most of the day is already set up.</p>

        <p>I started talking about it with other founders and got the same reaction every time: <em>"How do I get that?"</em></p>

        <p>OESS is the answer to that question. I take the system I built for myself, configure it for your specific operation, and set it running on your hardware. It stays on your machine. Your data doesn&apos;t leave your network. You get the same setup I use, minus the six months I spent building it.</p>

        <p>This is not a SaaS product. There is no dashboard to log into. There is no team of account managers. There is a system that runs, and a direct line to me when something needs adjustment.</p>

        <p style={{ color: "#ededed", fontWeight: 600 }}>
          If you&apos;re spending hours a day on things that feel like work but aren&apos;t really your work, that&apos;s the problem OESS solves.
        </p>
      </div>

      <div style={{ marginTop: 56, display: "flex", alignItems: "center", gap: 20, padding: 28, background: "#111111", border: "1px solid #1f1f1f", borderRadius: 12 }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#c9a84c", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 22, fontWeight: 800, color: "#0a0a0a" }}>
          ER
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 16 }}>Eric Rusch</div>
          <div style={{ fontSize: 13, color: "#666", marginTop: 2 }}>Founder, OESS &amp; OpenClaw</div>
        </div>
      </div>

      <div style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Link href="/pricing" style={{
          background: "#c9a84c", color: "#0a0a0a", padding: "13px 28px", borderRadius: 8,
          fontWeight: 700, fontSize: 15, display: "inline-block", transition: "background 0.15s",
        }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#e0c068")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.background = "#c9a84c")}>
          View pricing
        </Link>
        <Link href="/contact" style={{
          background: "transparent", border: "1px solid #2a2a2a", color: "#ededed",
          padding: "13px 28px", borderRadius: 8, fontWeight: 600, fontSize: 15, display: "inline-block",
          transition: "border-color 0.15s",
        }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#c9a84c")}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a")}>
          Get in touch
        </Link>
      </div>
    </div>
  );
}
