"use client";
import Link from "next/link";
import { useId, useState } from "react";

const faqs = [
  {
    q: "What are you selling?",
    a: "We install and support your AI Chief of Staff in your environment. It handles the administrative work that keeps coming back to you, so fewer hours disappear into inbox cleanup, meeting prep, follow-through, scheduling, and research drag.",
  },
  {
    q: "How is it different from ChatGPT?",
    a: "ChatGPT waits for you to open it and drive every interaction yourself. This system is set up around recurring work so context, drafts, prep, and follow-through show up where you need them instead of living in another tab.",
  },
  {
    q: "What does setup look like?",
    a: "We start with the single biggest drag on your week, install the system in a cloud account or on a Mac Mini you own, and keep the first scope tight enough to matter quickly. Most buyers should see something useful within a few days, then we stay close for the first two weeks to tune it around real work.",
  },
  {
    q: "Who owns the machine and accounts?",
    a: "You do. You own the cloud account or Mac Mini, and the model and integration accounts stay in your name. We handle setup and support, but the control model stays with you.",
  },
  {
    q: "Can I use my own AI models?",
    a: "Yes. We use your accounts, not ours. If you already have preferred model providers or account constraints, we work inside those instead of forcing you onto a hidden platform layer.",
  },
  {
    q: "Is my data safe?",
    a: "It runs in infrastructure you control, which is a stronger starting point than handing the whole workflow to a SaaS vendor. If support requires access to troubleshoot something, we ask first and keep that access explicit instead of pretending it does not exist.",
  },
  {
    q: "What if I want to cancel?",
    a: "You keep what you own. If you stop Ongoing Care, we stop supporting the system, but the hardware and accounts remain yours. There is no platform in the middle that disappears and takes your setup with it.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. You need to be able to explain how the work currently happens and where it keeps falling back on you. We handle the technical setup, edge cases, and maintenance work.",
  },
  {
    q: "How quickly does it start working?",
    a: "Usually within the first few days. Morning briefs, meeting prep, research pulls, and follow-through support are often the fastest wins because they remove visible friction immediately.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div style={{ borderTop: "1px solid rgba(255,241,219,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls={contentId}
        style={{
          width: "100%",
          textAlign: "left",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "24px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 16,
        }}
      >
        <span style={{ fontSize: 18, lineHeight: 1.45 }}>{q}</span>
        <span style={{ color: "var(--accent)", fontSize: 20, flexShrink: 0, marginTop: -2, fontWeight: 700 }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div id={contentId} style={{ paddingBottom: 24, fontSize: 16, color: "var(--muted)", lineHeight: 1.85 }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "82px 24px 100px" }}>
      <div style={{ maxWidth: 720, marginBottom: 34 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>FAQ</div>
        <h1 style={{ fontSize: "clamp(42px, 6vw, 70px)", lineHeight: 0.98, letterSpacing: "-0.04em", margin: "0 0 16px" }}>
          Questions you should ask before you buy.
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 19, lineHeight: 1.8, margin: 0 }}>
          If your question is not here, email us directly. We will answer it
          without the canned sales routine.
        </p>
      </div>

      <div style={{ border: "1px solid var(--border)", background: "rgba(255,248,236,0.03)", borderRadius: 28, padding: "0 26px" }}>
        {faqs.map((f) => (
          <FAQItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>

      <section
        style={{
          maxWidth: 680,
          margin: "28px auto 0",
          textAlign: "center",
          border: "1px solid var(--border)",
          background: "rgba(255,248,236,0.03)",
          borderRadius: 28,
          padding: "28px 24px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            lineHeight: 1.04,
            letterSpacing: "-0.03em",
            margin: "0 0 12px",
          }}
        >
          If the questions are answered, the next step is simple.
        </h2>
        <p
          style={{
            margin: "0 auto 22px",
            maxWidth: 520,
            color: "var(--muted)",
            fontSize: 17,
            lineHeight: 1.8,
          }}
        >
          Tell us what keeps landing back on you and we will tell you whether
          this is the right fit.
        </p>
        <Link
          href="/contact"
          style={{
            background: "var(--accent)",
            color: "#16110b",
            padding: "15px 24px",
            borderRadius: 999,
            fontWeight: 700,
            fontSize: 15,
            display: "inline-block",
          }}
        >
          Request an Assessment
        </Link>
      </section>
    </div>
  );
}
