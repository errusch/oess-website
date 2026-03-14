"use client";
import Link from "next/link";

const process = [
  ["01", "Choose the bottleneck", "We start with the recurring work that keeps bouncing back to you."],
  ["02", "Install in your environment", "We set it up in a cloud account or on a Mac Mini you control."],
  ["03", "Tune it in live use", "We stay close for the first two weeks so it keeps working in real conditions."],
];

const controlPoints = [
  "Cloud account or Mac Mini you control",
  "Your model and app accounts stay yours",
  "No hidden platform in the middle",
  "Two weeks of hands-on support after install",
];

const useCases = [
  {
    title: "Inbox triage",
    body: "Clean up the daily pile, surface what needs you, and stop low-value replies from eating executive time.",
  },
  {
    title: "Meeting prep",
    body: "Pull context, notes, loose ends, and talking points together before the meeting starts.",
  },
  {
    title: "Research pulls",
    body: "Turn open questions into usable briefs instead of another tab graveyard you have to sort later.",
  },
  {
    title: "Follow-through",
    body: "Catch reminders, drafts, handoffs, and next steps before they quietly bounce back onto your plate.",
  },
];

const comparisonRows = [
  {
    option: "DIY OpenClaw",
    fit: "Good if you want to own every detail.",
    tradeoff: "You do the setup, debugging, tuning, and upkeep yourself.",
  },
  {
    option: "Shared AI SaaS",
    fit: "Good if you want something generic fast.",
    tradeoff: "Less control and a looser fit to how you already work.",
  },
  {
    option: "OESS",
    fit: "Good if you want private control without building it yourself.",
    tradeoff: "Higher-touch and narrower by design.",
  },
];

const ctaLabel = "Request a Free Assessment";

export default function Home() {
  return (
    <div>
      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "84px 24px 28px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1.15fr) minmax(320px, 0.85fr)",
            gap: 32,
            alignItems: "start",
          }}
          className="hero-grid"
        >
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(255,248,236,0.04)",
                border: "1px solid rgba(255,241,219,0.1)",
                color: "var(--accent)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              For founders and executives
            </div>
            <h1
              style={{
                fontSize: "clamp(50px, 8vw, 94px)",
                lineHeight: 0.96,
                letterSpacing: "-0.04em",
                margin: "0 0 20px",
                maxWidth: 760,
              }}
            >
              Your private AI Chief of Staff.
            </h1>
            <p
              style={{
                fontSize: "clamp(18px, 2.2vw, 24px)",
                lineHeight: 1.55,
                color: "var(--muted)",
                maxWidth: 680,
                margin: "0 0 16px",
              }}
            >
              We install it in your environment so inbox triage, meeting prep, research, and follow-through stop consuming the best hours of your week.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginBottom: 12,
              }}
            >
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
                {ctaLabel}
              </Link>
              <Link
                href="/pricing"
                style={{
                  border: "1px solid var(--border)",
                  background: "rgba(255,248,236,0.03)",
                  color: "var(--foreground)",
                  padding: "15px 24px",
                  borderRadius: 999,
                  fontWeight: 600,
                  fontSize: 15,
                  display: "inline-block",
                }}
              >
                Review Pricing
              </Link>
            </div>
          </div>

          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(255,248,236,0.08), rgba(255,248,236,0.03))",
              border: "1px solid var(--border)",
              borderRadius: 28,
              padding: 24,
              boxShadow: "var(--shadow)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at top right, rgba(210,170,109,0.22), transparent 35%)",
                pointerEvents: "none",
              }}
            />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 18,
                }}
              >
                One concrete example
              </div>
              {[
                [
                  "6:30 AM",
                  "Builds your decision brief",
                  "The day starts with priorities, risks, and the few items that actually need you.",
                ],
                [
                  "Before first meeting",
                  "Pulls the missing context together",
                  "Relevant notes, loose ends, and talking points are waiting before the meeting starts.",
                ],
                [
                  "During the day",
                  "Catches follow-through before it slips",
                  "Drafts, reminders, and admin cleanup stop bouncing back to you by default.",
                ],
                [
                  "Overnight",
                  "Keeps background work moving",
                  "Research pulls, prep work, and cleanup continue while you are offline.",
                ],
              ].map(([time, title, copy], index) => (
                <div
                  key={title}
                  style={{
                    padding: "18px 0",
                    borderTop: "1px solid rgba(255,241,219,0.08)",
                    opacity: index === 0 ? 1 : 0.96,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      color: "var(--accent)",
                      marginBottom: 8,
                    }}
                  >
                    {time}
                  </div>
                  <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 6 }}>
                    {title}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      color: "var(--muted)",
                      lineHeight: 1.6,
                      fontSize: 14,
                    }}
                  >
                    {copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "4px 24px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: 18,
          }}
          className="proof-grid"
        >
          <div
            style={{
              padding: 28,
              borderRadius: 24,
              border: "1px solid var(--border)",
              background: "var(--surface)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
              Why buyers trust this
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 14px" }}>
              Private by setup.
            </h2>
            <div style={{ display: "grid", gap: 12, color: "var(--muted)", fontSize: 16, lineHeight: 1.8 }}>
              <p style={{ margin: 0 }}>
                It runs in your environment, not inside a shared OESS platform.
              </p>
              <p style={{ margin: 0 }}>
                You keep the hardware and accounts. We handle setup and support.
              </p>
            </div>
          </div>
          <div
            style={{
              padding: 28,
              borderRadius: 24,
              border: "1px solid var(--border)",
              background:
                "linear-gradient(180deg, rgba(210,170,109,0.1), rgba(255,248,236,0.03))",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
              What stays in your control
            </div>
            <div style={{ display: "grid", gap: 10, color: "var(--muted)", fontSize: 15, lineHeight: 1.8 }}>
              {controlPoints.map((item) => (
                <p key={item} style={{ margin: 0 }}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "2px 24px 34px" }}>
        <div
          style={{
            padding: 28,
            borderRadius: 28,
            border: "1px solid var(--border)",
            background: "rgba(255,248,236,0.03)",
          }}
        >
          <div style={{ maxWidth: 720, marginBottom: 18 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
              Likely first wins
            </div>
            <h2 style={{ fontSize: "clamp(34px, 4.5vw, 54px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 12px" }}>
              Start with work buyers already recognize.
            </h2>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 17, lineHeight: 1.8 }}>
              We start with recurring work that makes the value obvious fast.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="use-case-grid">
            {useCases.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: 22,
                  borderRadius: 22,
                  border: "1px solid rgba(255,241,219,0.08)",
                  background: "var(--surface)",
                }}
              >
                <h3 style={{ fontSize: 22, lineHeight: 1.08, margin: "0 0 10px" }}>{item.title}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 15, lineHeight: 1.75 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "2px 24px 34px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.8fr 1.2fr",
            gap: 28,
            alignItems: "start",
          }}
          className="setup-grid"
        >
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
              How it works
            </div>
            <h2 style={{ fontSize: "clamp(34px, 4.5vw, 54px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 12px" }}>
              Start narrow. Make it useful fast.
            </h2>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 17, lineHeight: 1.8 }}>
              We solve one recurring drag point first, then tighten it in live use.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {process.map(([number, title, body], index) => (
              <div
                key={title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "86px 1fr",
                  gap: 18,
                  padding: "18px 0",
                  borderTop: "1px solid rgba(255,241,219,0.08)",
                  opacity: index === 0 ? 1 : 0.98,
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", color: "var(--accent)", paddingTop: 4 }}>
                  {number}
                </div>
                <div>
                  <h3 style={{ fontSize: 24, lineHeight: 1.12, margin: "0 0 8px" }}>{title}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.8, color: "var(--muted)" }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "4px 24px 34px" }}>
        <div
          style={{
            border: "1px solid var(--border)",
            background: "linear-gradient(180deg, rgba(255,248,236,0.06), rgba(255,248,236,0.02))",
            borderRadius: 28,
            padding: 28,
          }}
        >
          <div style={{ maxWidth: 760, marginBottom: 18 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
              Why not just do this yourself?
            </div>
            <h2 style={{ fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 12px" }}>
              Because the hard part starts after install.
            </h2>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 17, lineHeight: 1.8 }}>
              Most buyers do not need help buying another AI tool. They need help getting a private system working well enough to trust with real operating work.
            </p>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            {comparisonRows.map((row) => (
              <div
                key={row.option}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(180px, 0.7fr) 1fr 1fr",
                  gap: 16,
                  padding: "18px 0",
                  borderTop: "1px solid rgba(255,241,219,0.08)",
                }}
                className="compare-row"
              >
                <div style={{ fontSize: 20, fontWeight: 600 }}>{row.option}</div>
                <div style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.75 }}>{row.fit}</div>
                <div style={{ color: "var(--muted-2)", fontSize: 15, lineHeight: 1.75 }}>{row.tradeoff}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "28px 24px 108px", textAlign: "center" }}>
        <div
          style={{
            padding: "38px 28px",
            borderRadius: 28,
            border: "1px solid var(--border)",
            background:
              "linear-gradient(180deg, rgba(255,248,236,0.06), rgba(255,248,236,0.02))",
            boxShadow: "var(--shadow)",
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 14,
            }}
          >
            Next step
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: "0 0 14px",
            }}
          >
            Start with a free assessment.
          </h2>
          <p
            style={{
              margin: "0 auto 18px",
              maxWidth: 560,
              color: "var(--muted)",
              fontSize: 18,
              lineHeight: 1.7,
            }}
          >
            Tell us what keeps landing back on you. We will tell you if the fit is real and where we would begin.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
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
              {ctaLabel}
            </Link>
            <Link
              href="/pricing"
              style={{
                border: "1px solid var(--border)",
                background: "rgba(255,248,236,0.03)",
                color: "var(--foreground)",
                padding: "15px 24px",
                borderRadius: 999,
                fontWeight: 600,
                fontSize: 15,
                display: "inline-block",
              }}
            >
              Review Pricing
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 920px) {
          .hero-grid,
          .proof-grid,
          .fit-grid,
          .setup-grid,
          .use-case-grid,
          .compare-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
