"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", tier: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`OESS Inquiry from ${form.name}${form.tier ? ` (${form.tier})` : ""}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nInterested in: ${form.tier || "Not specified"}\n\n${form.message}`
    );
    window.location.href = `mailto:errusch@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputStyle = {
    width: "100%", background: "#111111", border: "1px solid #2a2a2a", borderRadius: 8,
    padding: "12px 16px", fontSize: 15, color: "#ededed", outline: "none",
    transition: "border-color 0.15s", boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block", fontSize: 13, fontWeight: 600, color: "#888", marginBottom: 8,
  };

  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "80px 24px" }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#c9a84c", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
        <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", margin: "0 0 16px" }}>
          Let&apos;s talk.
        </h1>
        <p style={{ color: "#666", fontSize: 16, lineHeight: 1.6 }}>
          Tell me what you&apos;re working with. I&apos;ll come back with an honest read on whether OESS makes sense for your situation.
        </p>
      </div>

      {sent ? (
        <div style={{ padding: 40, background: "#111111", border: "1px solid #1f1f1f", borderRadius: 12, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Opening your email client...</h2>
          <p style={{ color: "#666", fontSize: 14 }}>
            Your default email app should have opened with the message pre-filled. Send it and I&apos;ll reply within 24 hours.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            <div>
              <label style={labelStyle}>Name</label>
              <input
                required type="text" placeholder="Your name" value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = "#c9a84c")}
                onBlur={e => (e.currentTarget.style.borderColor = "#2a2a2a")}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                required type="email" placeholder="you@company.com" value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                style={inputStyle}
                onFocus={e => (e.currentTarget.style.borderColor = "#c9a84c")}
                onBlur={e => (e.currentTarget.style.borderColor = "#2a2a2a")}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Interested in</label>
            <select
              value={form.tier}
              onChange={e => setForm(f => ({ ...f, tier: e.target.value }))}
              style={{ ...inputStyle, cursor: "pointer" }}
              onFocus={e => (e.currentTarget.style.borderColor = "#c9a84c")}
              onBlur={e => (e.currentTarget.style.borderColor = "#2a2a2a")}
            >
              <option value="">Select a tier...</option>
              <option>Foundation ($297/mo)</option>
              <option>Professional ($597/mo)</option>
              <option>Executive ($997/mo)</option>
              <option>Command ($4,997/mo)</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div>
            <label style={labelStyle}>What&apos;s eating your time?</label>
            <textarea
              required rows={5} placeholder="Describe your current situation. What's taking the most time? What tools are you using? What would change if you had 10 more hours a week?"
              value={form.message}
              onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              style={{ ...inputStyle, resize: "vertical", minHeight: 120 }}
              onFocus={e => (e.currentTarget.style.borderColor = "#c9a84c")}
              onBlur={e => (e.currentTarget.style.borderColor = "#2a2a2a")}
            />
          </div>

          <button type="submit" style={{
            background: "#c9a84c", color: "#0a0a0a", border: "none", borderRadius: 8,
            padding: "14px 28px", fontSize: 16, fontWeight: 700, cursor: "pointer",
            transition: "background 0.15s", alignSelf: "flex-start",
          }}
            onMouseEnter={e => (e.currentTarget.style.background = "#e0c068")}
            onMouseLeave={e => (e.currentTarget.style.background = "#c9a84c")}>
            Send message
          </button>

          <p style={{ fontSize: 12, color: "#444", margin: 0 }}>
            This opens your email client with the message pre-filled. Sends to errusch@gmail.com.
          </p>
        </form>
      )}
    </div>
  );
}
