"use client";
import Link from "next/link";

export default function About() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "82px 24px 100px" }}>
      <div style={{ marginBottom: 42, maxWidth: 760 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>About OESS</div>
        <h1 style={{ fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 0.98, letterSpacing: "-0.04em", margin: "0 0 18px" }}>
          I built this because I got tired of doing founder work badly.
        </h1>
        <p style={{ fontSize: 20, color: "var(--muted)", lineHeight: 1.8, margin: 0, maxWidth: 700 }}>
          Not strategy. Not product. Not sales. The constant drag underneath all
          of it: email, scheduling, follow-up, prep, reminders, and the mental
          overhead of keeping too much in my head.
        </p>
      </div>

      <div style={{ fontSize: 18, lineHeight: 1.95, color: "var(--muted)", marginBottom: 40 }}>
        <p>I started in IT and spent the next 15+ years moving deeper into systems, process improvement, rollout work, and business operations. So when that problem got annoying enough, I stopped pretending I would eventually get more organized and built a system instead.</p>

        <p>That system now reads my inbox before I do, prepares me for meetings, pulls research when I flag something, and keeps work moving in the background while I&apos;m offline. It is not magic. It is just useful in the exact places where most founders quietly lose time every day.</p>

        <p>Once I started using it, the reaction from other operators was always the same: <em>How do I get that without spending six months building it?</em></p>

        <p>OESS is the answer to that question. I take the system I built for myself, adapt it to your workflow, deploy it with hardware included in your environment, and get it running fast enough to matter.</p>

        <p>This is not a SaaS company pretending to be hands-on. It is a founder-run managed deployment for people who would rather buy back focus than become part-time AI infrastructure hobbyists.</p>

        <p>The reason I think this works is that I do not come at the problem from one side only. I have worked in network support, enterprise software support, process leadership, automation initiatives, consulting, and operations. I understand the technical buildout, but I also understand the operational reality of overloaded teams, broken follow-through, and work that keeps rolling uphill back to the executive.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 40 }} className="about-grid">
        {[
          ["What I believe", "Founders should spend their best hours on decisions, leverage, and movement. Not inbox cleanup."],
          ["What OESS is", "A private AI operating layer installed around your real workflow, with hardware and support wrapped into the offer."],
          ["What OESS is not", "Not a generic chatbot. Not a dashboard product. Not a magic autonomy promise."],
          ["Why trust me with it", "Because I have spent years translating business requirements into technical execution, stabilizing rollouts, reducing manual work, and improving how teams actually operate."],
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
          <div style={{ fontSize: 15, color: "var(--muted)", marginTop: 2 }}>Founder, OESS. 15+ years across IT, systems, process improvement, and business operations.</div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Link href="/pricing" style={{
          background: "var(--accent)", color: "#16110b", padding: "15px 24px", borderRadius: 999,
          fontWeight: 700, fontSize: 15, display: "inline-block",
        }}>
          View pricing
        </Link>
        <Link href="/contact" style={{
          background: "rgba(255,248,236,0.03)", border: "1px solid var(--border)", color: "var(--foreground)",
          padding: "15px 24px", borderRadius: 999, fontWeight: 600, fontSize: 15, display: "inline-block",
        }}>
          Talk to Eric
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
