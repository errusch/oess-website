"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          role: form.role,
          message: form.message,
        }),
      });

      const data = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to send assessment request.");
      }

      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send assessment request.");
    } finally {
      setSubmitting(false);
    }
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
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--muted)",
    marginBottom: 8,
  };

  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "82px 24px 100px" }}>
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "1.02fr 0.98fr",
          gap: 24,
          alignItems: "start",
          marginBottom: 32,
        }}
        className="contact-hero-grid"
      >
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
            Contact
          </div>
          <h1 style={{ fontSize: "clamp(42px, 6vw, 70px)", lineHeight: 0.98, letterSpacing: "-0.04em", margin: "0 0 16px", maxWidth: 720 }}>
            Request a Free Assessment.
          </h1>
          <p style={{ color: "var(--muted)", fontSize: 19, lineHeight: 1.8, margin: "0 0 18px", maxWidth: 680 }}>
            Tell us what keeps landing back on you. We will tell you where we would start and whether the fit is real.
          </p>
          <p style={{ color: "var(--muted-2)", fontSize: 15, lineHeight: 1.8, margin: 0, maxWidth: 640 }}>
            A few concrete details are enough.
          </p>
        </div>

        <div
          style={{
            border: "1px solid var(--border)",
            background: "linear-gradient(180deg, rgba(210,170,109,0.1), rgba(255,248,236,0.03))",
            borderRadius: 28,
            padding: 24,
          }}
        >
          <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
            Best notes include
          </div>
          <div style={{ display: "grid", gap: 12, color: "var(--muted)", fontSize: 15, lineHeight: 1.8 }}>
            <p style={{ margin: 0 }}>The recurring work that keeps bouncing back to you.</p>
            <p style={{ margin: 0 }}>Where the drag shows up most.</p>
            <p style={{ margin: 0 }}>Whether you are leaning cloud or Mac Mini.</p>
            <p style={{ margin: 0, color: "var(--foreground)", fontWeight: 700 }}>
              If the fit is real, the next step is a short assessment call.
            </p>
          </div>
        </div>
      </section>

      {sent ? (
        <div style={{ padding: 34, background: "rgba(255,248,236,0.03)", border: "1px solid var(--border)", borderRadius: 28, maxWidth: 720 }}>
          <div style={{ fontSize: 32, marginBottom: 16 }}>✓</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 12px" }}>
            Your request is in.
          </h2>
          <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.8, margin: 0 }}>
            We&apos;ll review the fit and reply directly. If you need to reach us immediately, email <a href="mailto:eric@oessai.com" style={{ color: "var(--accent)" }}>eric@oessai.com</a>.
          </p>
        </div>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 0.84fr", gap: 24 }} className="contact-grid">
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              border: "1px solid var(--border)",
              background: "rgba(255,248,236,0.03)",
              borderRadius: 28,
              padding: 28,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="contact-form-grid">
              <div>
                <label style={labelStyle}>Name</label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={labelStyle}>Email</label>
                <input
                  required
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  style={inputStyle}
                />
              </div>
            </div>

            <div>
              <label style={labelStyle}>Role</label>
              <input
                type="text"
                placeholder="CEO, Founder, President, Partner..."
                value={form.role}
                onChange={(e) => setForm((f) => ({ ...f, role: e.target.value }))}
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>What is the actual problem?</label>
              <textarea
                required
                rows={7}
                placeholder="Tell us what keeps landing back on you. If you already know you want cloud or Mac Mini, include that too."
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                style={{ ...inputStyle, resize: "vertical", minHeight: 160 }}
              />
            </div>

            {error ? (
              <div
                style={{
                  border: "1px solid rgba(255,120,120,0.22)",
                  background: "rgba(120,18,18,0.18)",
                  color: "rgb(255,220,220)",
                  borderRadius: 18,
                  padding: "12px 14px",
                  fontSize: 14,
                  lineHeight: 1.6,
                }}
              >
                {error}
              </div>
            ) : null}

            <button
              type="submit"
              style={{
                background: "var(--accent)",
                color: "#16110b",
                border: "none",
                borderRadius: 999,
                padding: "15px 24px",
                fontSize: 15,
                fontWeight: 700,
                cursor: submitting ? "wait" : "pointer",
                alignSelf: "flex-start",
                opacity: submitting ? 0.8 : 1,
              }}
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Request a Free Assessment"}
            </button>
          </form>

          <div style={{ display: "grid", gap: 18, alignSelf: "start" }}>
            <div style={{ border: "1px solid var(--border)", background: "var(--surface)", borderRadius: 28, padding: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                What happens next
              </div>
              <div style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8 }}>
                <p style={{ marginTop: 0 }}>
                  We read every inquiry ourselves. If the fit is real, we reply directly and set up a short assessment call.
                </p>
                <p style={{ marginBottom: 0 }}>
                  Direct email: <a href="mailto:eric@oessai.com" style={{ color: "var(--accent)" }}>eric@oessai.com</a>
                </p>
              </div>
            </div>

            <div style={{ border: "1px solid var(--border)", background: "rgba(255,248,236,0.03)", borderRadius: 28, padding: 24 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 12 }}>
                Good fit notes usually sound like
              </div>
              <div style={{ display: "grid", gap: 10, color: "var(--muted)", fontSize: 15, lineHeight: 1.75 }}>
                <p style={{ margin: 0 }}>
                  “I still spend too much time in my inbox.”
                </p>
                <p style={{ margin: 0 }}>
                  “Meeting prep and follow-up keep landing back on me.”
                </p>
                <p style={{ margin: 0 }}>
                  “I know where the problem is. I do not want to build the fix myself.”
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .contact-hero-grid,
          .contact-grid,
          .contact-form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
