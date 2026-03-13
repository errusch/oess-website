"use client";
import Link from "next/link";
import { useId, useState } from "react";

const faqs = [
  {
    q: "What are you selling?",
    a: "We install and support your AI Chief of Staff in your environment so recurring admin work stops bouncing back to you.",
  },
  {
    q: "How is it different from ChatGPT?",
    a: "ChatGPT waits for you to open it and drive every interaction. This system is installed around recurring work so prep, drafts, and follow-through show up where you need them.",
  },
  {
    q: "What does setup look like?",
    a: "We start with one meaningful bottleneck, install the system in a cloud account or on a Mac Mini you own, and keep the first scope tight.",
  },
  {
    q: "Who owns the machine and accounts?",
    a: "You do. You own the cloud account or Mac Mini, and the model and integration accounts stay in your name.",
  },
  {
    q: "Can I use my own AI models?",
    a: "Yes. We work inside your accounts and constraints instead of forcing you onto a hidden platform layer.",
  },
  {
    q: "Is my data safe?",
    a: "Your data stays in infrastructure you control, which is a cleaner setup than handing the whole workflow to someone else's platform. If we ever need access to troubleshoot something, we ask first and keep that access clear.",
  },
  {
    q: "What if I want to cancel?",
    a: "You keep what you own. If you stop Ongoing Care, support ends, but the hardware and accounts remain yours.",
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
          Questions before you buy.
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 19, lineHeight: 1.8, margin: 0 }}>
          If your question is not here, email us directly. We will answer it plainly.
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
          If the fit is real, the next step is simple.
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
          Tell us what keeps landing back on you and we will tell you where we would start.
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
          Request a Free Assessment
        </Link>
      </section>
    </div>
  );
}
