"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What are you actually selling?",
    a: "A managed AI chief-of-staff deployment. The machine, the setup, the workflow design, and the support are bundled into one service instead of being sold as separate pieces you have to coordinate yourself.",
  },
  {
    q: "How is it different from ChatGPT?",
    a: "ChatGPT is something you open and talk to. OESS is something that stays embedded in the workflow. The goal is not better chatting. The goal is less founder drag.",
  },
  {
    q: "What does setup look like?",
    a: "We map the workflow first, then wire the system around the highest-friction tasks. Hardware, deployment, and support are part of the service from the start. The first useful output should show up fast, not after months of implementation.",
  },
  {
    q: "Can I use my own AI models?",
    a: "Yes. The system is designed around owner-controlled accounts and model access. The point is to keep the setup private and under your control, not to force you through a proprietary OESS model layer.",
  },
  {
    q: "Is my data safe?",
    a: "Safer than a normal SaaS workflow, yes. The stronger claim is architectural: the system lives on your side. The honest caveat is that support and troubleshooting are still trust relationships, not magic privacy theater.",
  },
  {
    q: "What if I want to cancel?",
    a: "The exact offboarding path depends on the tier and whether hardware is leased, but the goal is straightforward: clear terms, no fake lock-in, and no surprise dependency on hidden OESS infrastructure.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. You need enough operational maturity to explain your workflow clearly. The technical setup is the part OESS is meant to absorb for you.",
  },
  {
    q: "How quickly does it start working?",
    a: "The first useful output should land quickly. The initial target is usually morning briefing, inbox triage, and meeting prep, because those are the fastest routes to visible relief.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderTop: "1px solid rgba(255,241,219,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer",
          padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16,
        }}>
        <span style={{ fontSize: 18, lineHeight: 1.45 }}>{q}</span>
        <span style={{ color: "var(--accent)", fontSize: 20, flexShrink: 0, marginTop: -2, fontWeight: 700 }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 24, fontSize: 16, color: "var(--muted)", lineHeight: 1.85 }}>
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
          The common questions, answered plainly.
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 19, lineHeight: 1.8, margin: 0 }}>
          If your question is not here, email me directly and I will give you a
          real answer instead of a canned sales response.
        </p>
      </div>

      <div style={{ border: "1px solid var(--border)", background: "rgba(255,248,236,0.03)", borderRadius: 28, padding: "0 26px" }}>
        {faqs.map(f => (
          <FAQItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </div>
  );
}
