"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is OESS?",
    a: "OESS (OpenClaw Executive Setup Service) is a done-for-you AI operations setup. We install and configure OpenClaw on hardware you own, connect it to your email, calendar, and tools, and set up AI agents to handle the daily administrative work that eats your time. You get the result — an automated ops layer — without the months it would take to build it yourself.",
  },
  {
    q: "How is it different from ChatGPT?",
    a: "ChatGPT is a conversation tool. You open it, ask it something, and it responds. OESS is infrastructure. The agents run continuously in the background, watching your inbox, managing your calendar, queuing research tasks overnight, and handling workflows without you prompting them. It's the difference between a smart assistant you have to wake up versus one that's already done the work when you sit down.",
  },
  {
    q: "What does setup look like?",
    a: "It starts with a discovery call — usually 45 minutes. We map your current tools, email volume, calendar patterns, and biggest time drains. Then we configure OpenClaw on your hardware (or ship you a Mac Mini if you're on Executive tier or above), connect your accounts, test the agent workflows, and run a trial overnight batch. Most clients are fully operational within one business day of hardware access.",
  },
  {
    q: "Can I use my own AI models?",
    a: "Yes. OESS uses your own API keys for Anthropic, OpenAI, Google, or whatever models you want to run. The agents route tasks to the appropriate model based on what the task requires. You control the model mix. Your usage costs go directly to the model providers — OESS does not mark up API costs.",
  },
  {
    q: "Is my data safe?",
    a: "All agents run on your hardware at your location. Your email, calendar data, and documents are processed locally and are never sent to an OESS server. Credentials are stored in a 1Password vault. All API calls use TLS 1.2+. Your data is not used to train any AI model. See the Security page for full technical details.",
  },
  {
    q: "What if I want to cancel?",
    a: "Cancel anytime with 30 days notice. There's no long-term contract and no cancellation fee. The hardware is yours. The OpenClaw installation stays on your machine — you're not locked into OESS to keep it running. We'll provide documentation so you can manage it yourself if you prefer.",
  },
  {
    q: "Do I need technical skills?",
    a: "No. That's the point. You need to be able to follow a checklist to share account access, and you need to be comfortable with the idea that software is running on your machine. The actual configuration — the complex parts — is what OESS handles. Day-to-day, you interact with your agents through Telegram or email like you would any assistant.",
  },
  {
    q: "How quickly does it start working?",
    a: "The first useful output typically comes on the morning after setup — your morning briefing, inbox triage, and calendar prep for the day. Full automation builds over the first week as the agents learn your preferences and patterns. Most clients recover 10+ hours in week one and continue improving from there.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #1a1a1a" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left", background: "none", border: "none", cursor: "pointer",
          padding: "24px 0", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16,
        }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: "#ededed", lineHeight: 1.4 }}>{q}</span>
        <span style={{ color: "#c9a84c", fontSize: 20, flexShrink: 0, marginTop: -2 }}>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 24, fontSize: 15, color: "#777", lineHeight: 1.8 }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ marginBottom: 56 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#c9a84c", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>FAQ</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
          Common questions.
        </h1>
        <p style={{ color: "#666", fontSize: 17 }}>
          If yours isn&apos;t here, email <a href="mailto:errusch@gmail.com" style={{ color: "#c9a84c" }}>errusch@gmail.com</a>.
        </p>
      </div>

      <div style={{ border: "1px solid #1f1f1f", borderRadius: 12, padding: "0 24px" }}>
        {faqs.map(f => (
          <FAQItem key={f.q} q={f.q} a={f.a} />
        ))}
      </div>
    </div>
  );
}
