"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    companySize: "",
    tier: "",
    bottleneck: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`OESS Inquiry from ${form.name}${form.tier ? ` (${form.tier})` : ""}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nRole: ${form.role || "Not specified"}\nCompany size: ${form.companySize || "Not specified"}\nInterested in: ${form.tier || "Not specified"}\nBiggest bottleneck: ${form.bottleneck || "Not specified"}\n\n${form.message}`
    );
    window.location.href = `mailto:errusch@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const inputStyle = {
    width: "100%",
    background: "rgba(255,248,236,0.03)",
    border: "1px solid var(--border)",
    borderRadius: 18,
    padding: "14px 16px",
    fontSize: 15,
    color: "var(--foreground)",
    outline: "none",
    transition: "border-color 0.15s",
    boxSizing: "border-box" as const,
  };

  const labelStyle = {
    display: "block", fontSize: 13, fontWeight: 600, color: "var(--muted)", marginBottom: 8,
  };

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "82px 24px 100px" }}>
      <div style={{ maxWidth: 720, marginBottom: 42 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Contact</div>
        <h1 style={{ fontSize: "clamp(42px, 6vw, 70px)", lineHeight: 0.98, letterSpacing: "-0.04em", margin: "0 0 16px" }}>
          Request an OESS fit assessment.
        </h1>
        <p style={{ color: "var(--muted)", fontSize: 19, lineHeight: 1.8, margin: 0 }}>
          Tell me what is still sitting on your plate. If OESS is a fit, I will
          tell you where to start. If it is the wrong answer, I will tell you that too.
        </p>
      </div>

      {sent ? (
        <div style={{ padding: 34, background: "rgba(255,248,236,0.03)", border: "1px solid var(--border)", borderRadius: 28, maxWidth: 720 }}>
          <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 12px" }}>Your email client should be open now.</h2>
          <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
            Send the drafted note and I&apos;ll reply directly. If your mail client
            did not open, email <a href="mailto:errusch@gmail.com" style={{ color: "var(--accent)" }}>errusch@gmail.com</a>.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 0.82fr", gap: 24 }} className="contact-grid">
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18, border: "1px solid var(--border)", background: "rgba(255,248,236,0.03)", borderRadius: 28, padding: 28 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="contact-form-grid">
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  required type="text" placeholder="Your name" value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  required type="email" placeholder="you@company.com" value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="contact-form-grid">
              <div>
                <label style={labelStyle}>Role</label>
                <input
                  type="text" placeholder="CEO, Founder, President, Partner..." value={form.role}
                  onChange={e => setForm(f => ({ ...f, role: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Company size</label>
                <select
                  value={form.companySize}
                  onChange={e => setForm(f => ({ ...f, companySize: e.target.value }))}
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="">Choose one</option>
                  <option>Solo / fractional</option>
                  <option>2-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-150 employees</option>
                  <option>150+ employees</option>
                </select>
              </div>
            </div>

            <div>
              <label style={labelStyle}>Interested in</label>
              <select
                value={form.tier}
                onChange={e => setForm(f => ({ ...f, tier: e.target.value }))}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                <option value="">Choose one</option>
                <option>Foundation ($297/mo)</option>
                <option>Professional ($597/mo)</option>
                <option>Executive ($997/mo)</option>
                <option>Command (custom)</option>
                <option>Not sure yet</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>Biggest weekly bottleneck</label>
              <select
                value={form.bottleneck}
                onChange={e => setForm(f => ({ ...f, bottleneck: e.target.value }))}
                style={{ ...inputStyle, cursor: "pointer" }}
              >
                <option value="">Choose one</option>
                <option>Inbox overload</option>
                <option>Scheduling / calendar coordination</option>
                <option>Meeting prep and follow-up</option>
                <option>Research backlog</option>
                <option>Context switching / follow-through</option>
                <option>Too many things; no clear support layer</option>
              </select>
            </div>

            <div>
              <label style={labelStyle}>What is the actual problem?</label>
              <textarea
                required rows={7} placeholder="Tell me what keeps falling on you: inbox volume, scheduling chaos, poor follow-through, research backlog, or something else."
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                style={{ ...inputStyle, resize: "vertical", minHeight: 160 }}
              />
            </div>

            <button type="submit" style={{
              background: "var(--accent)", color: "#16110b", border: "none", borderRadius: 999,
              padding: "15px 24px", fontSize: 15, fontWeight: 700, cursor: "pointer", alignSelf: "flex-start",
            }}>
              Draft my assessment request
            </button>
          </form>

          <div style={{ border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 28, padding: 24, alignSelf: "start" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>What happens next</div>
            <div style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8 }}>
              <p style={{ marginTop: 0 }}>
                I review the inquiry, decide whether the fit is real, and reply
                directly. If it makes sense, the next step is a focused assessment
                call, not a generic demo.
              </p>
              <p>
                The best inquiries are concrete. Tell me what work is still sitting
                on the executive that should have been delegated, systematized, or
                removed already.
              </p>
              <p>
                The point of the call is not to impress you with tooling. It is to
                figure out whether the system can remove real operational drag from
                your business.
              </p>
              <p style={{ marginBottom: 0 }}>
                Direct email: <a href="mailto:errusch@gmail.com" style={{ color: "var(--accent)" }}>errusch@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .contact-grid,
          .contact-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
