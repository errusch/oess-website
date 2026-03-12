"use client";
import Link from "next/link";

const trustStrip = [
  "Daily briefings before the day gets noisy",
  "Meeting prep and context recovery handled",
  "Follow-up coverage so commitments stop slipping",
  "Overnight execution inside your private environment",
];

const workflowCards = [
  {
    title: "Daily briefing",
    body: "The day starts with decisions, deadlines, meeting risk, and loose ends already surfaced in one operator-ready brief.",
    artifact:
      "Today: 3 decisions before 10:30, 1 meeting risk, 2 follow-ups at risk of slipping, 4 messages worth your attention.",
  },
  {
    title: "Meeting prep",
    body: "Before you walk into the room, the system pulls prior context, open loops, talking points, and anything likely to create friction.",
    artifact:
      "Acme renewal: pricing objection unresolved, CFO joining, last outbound 9 days ago, decision path still unclear.",
  },
  {
    title: "Follow-up coverage",
    body: "Commitments, next steps, and reply obligations get tracked so your week is not held together by memory and guilt.",
    artifact:
      "Send CFO note by noon. Legal still owes contract review. Board counsel draft ready for approval.",
  },
  {
    title: "Overnight execution",
    body: "While you sleep, the system can prep briefs, clean queues, organize priorities, and tee up the next day’s highest-leverage work.",
    artifact:
      "Prepared morning brief, surfaced stale threads, drafted two follow-ups, and flagged one deadline risk before 7:00 AM.",
  },
];

const heroBriefing = {
  dateLabel: "Thursday · 7:10 AM",
  owner: "Executive operating brief",
  summary:
    "Before breakfast: 3 decisions need attention, 1 meeting is at risk, and 2 commitments will slip today if nobody closes them.",
  items: [
    ["Board counsel", "Reply today", "Draft is ready. Waiting on your approval."],
    ["Acme renewal", "Meeting risk", "Pricing objection unresolved before the 2 PM call."],
    ["CFO follow-up", "Send by noon", "Commitment from Monday is still open."],
  ],
};

const outcomePillars = [
  [
    "You get your mornings back",
    "Instead of rebuilding context from inbox and memory, you start with a clean briefing on priorities, risks, and decisions.",
  ],
  [
    "Meetings stop starting cold",
    "Prep is assembled before the room, so you are not burning the first ten minutes recovering context out loud.",
  ],
  [
    "Follow-through gets tighter",
    "Commitments, drafts, and next actions stay visible after the call instead of dying in someone’s head.",
  ],
];

const rolloutSteps = [
  [
    "Find the drag",
    "We identify where executive time is leaking now: inbox triage, meeting prep, follow-up, coordination, or all of the above.",
  ],
  [
    "Install the operating layer",
    "OESS handles deployment, hardening, permissions, and workflow setup inside your environment instead of turning this into your side project.",
  ],
  [
    "Tune until it earns the right to stay",
    "The system ships outputs quickly, then gets tightened until the relief is obvious in the week, not just in a demo.",
  ],
];

const objections = [
  {
    q: "Why not just use ChatGPT or Claude directly?",
    a: "Because the hard part is not opening a model. The hard part is wiring the workflow, setting permissions, hardening the environment, keeping the outputs useful, and maintaining the system once the novelty wears off. OESS handles that operating layer.",
  },
  {
    q: "What actually shows up for me each day?",
    a: "Usually some mix of a morning briefing, meeting prep, follow-up coverage, queue cleanup, and overnight output summaries. The standard is practical operator relief, not AI theater.",
  },
  {
    q: "How much do I need to manage after launch?",
    a: "Very little. You review outputs, approve sensitive actions, and give feedback on what is helping or missing. OESS handles deployment, tuning, and support behind the scenes.",
  },
  {
    q: "What if the workflow changes?",
    a: "Then the system changes with it. This is a managed engagement, not a frozen setup. We tune the operating layer as your priorities, team shape, and pressure points move.",
  },
];

const whyOess = [
  [
    "Managed, not DIY",
    "You are not buying another dashboard to babysit. OESS installs, configures, hardens, and tunes the system until it produces useful work in production.",
  ],
  [
    "Private by default",
    "Your credentials stay in your environment, your data is not used to train our models, and sensitive actions stay behind clear guardrails.",
  ],
  [
    "Built for executive outcomes",
    "The win is fewer dropped threads, better prepared conversations, faster context recovery, and more executive time spent on real decisions.",
  ],
];

const fitDetails = {
  fit: [
    "Founder-operators who are still acting as the human glue for every loose end.",
    "CEOs and presidents with fragmented calendars, noisy inboxes, and weak follow-through coverage.",
    "Managing partners and fractional executives who need fast context recovery across multiple threads.",
  ],
  notFit: [
    "People looking for the cheapest possible AI toy.",
    "Teams wanting a broad enterprise rollout before one real executive workflow proves value.",
    "Buyers who mainly want generic content generation instead of executive operating relief.",
  ],
};

const pricingExplainers = [
  {
    title: "Start with one real bottleneck",
    body: "Most engagements begin with one executive role and one high-friction workflow. Prove real relief before expanding the system.",
  },
  {
    title: "What monthly covers",
    body: "Managed pricing includes deployment, hardening, workflow design, tuning, and ongoing support — not just raw model access.",
  },
  {
    title: "How scope grows",
    body: "Pricing expands when you add new operating roles, more workflow coverage, or heavier security and systems complexity.",
  },
  {
    title: "What you are buying",
    body: "You are buying executive leverage: cleaner mornings, tighter meetings, better follow-through, and less time spent acting as the coordination layer yourself.",
  },
];

export default function Home() {
  return (
    <div>
      <section
        className="hero-section"
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "84px 24px 32px",
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
          <div className="hero-copy">
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
              Managed AI executive operating system
            </div>
            <h1
              style={{
                fontSize: "clamp(50px, 8vw, 94px)",
                lineHeight: 0.96,
                letterSpacing: "-0.04em",
                margin: "0 0 22px",
                maxWidth: 760,
              }}
            >
              Stop running the business
              <br />
              from memory, inbox chaos,
              <br />
              and manual follow-up.
            </h1>
            <p
              style={{
                fontSize: "clamp(18px, 2.2vw, 24px)",
                lineHeight: 1.55,
                color: "var(--muted)",
                maxWidth: 680,
                margin: "0 0 18px",
              }}
            >
              OESS installs and manages a private executive operating system that
              delivers daily briefings, meeting prep, follow-up coverage, and
              overnight execution inside your real workflow.
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.8,
                color: "var(--muted-2)",
                maxWidth: 640,
                margin: "0 0 28px",
              }}
            >
              We handle deployment, security hardening, workflow design, and
              tuning inside your environment so you stop being the human glue
              layer for every open loop in the business.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginBottom: 20,
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
                Request Assessment
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
                See Pricing
              </Link>
            </div>
            <p
              style={{
                margin: "0 0 24px",
                color: "var(--muted-2)",
                fontSize: 13,
                lineHeight: 1.7,
              }}
            >
              The assessment covers fit, workflow scope, and the first deployment
              plan so you know exactly what gets installed first.
            </p>
            <div
              className="trust-strip"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                gap: 10,
                maxWidth: 760,
              }}
            >
              {trustStrip.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 16,
                    border: "1px solid rgba(255,241,219,0.08)",
                    background: "rgba(255,248,236,0.03)",
                    color: "var(--muted-2)",
                    fontSize: 13,
                    lineHeight: 1.5,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            className="hero-card"
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
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 10,
                  alignItems: "center",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                  }}
                >
                  Sample output
                </div>
                <div style={{ fontSize: 12, color: "var(--muted-2)" }}>
                  {heroBriefing.dateLabel}
                </div>
              </div>
              <div
                style={{
                  padding: 18,
                  borderRadius: 20,
                  border: "1px solid rgba(255,241,219,0.08)",
                  background: "rgba(12,9,6,0.35)",
                  marginBottom: 16,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: "var(--accent)",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    marginBottom: 8,
                  }}
                >
                  {heroBriefing.owner}
                </div>
                <p
                  style={{
                    margin: 0,
                    color: "var(--foreground)",
                    fontSize: 15,
                    lineHeight: 1.75,
                  }}
                >
                  {heroBriefing.summary}
                </p>
              </div>
              <div style={{ display: "grid", gap: 12 }}>
                {heroBriefing.items.map(([title, status, note]) => (
                  <div
                    key={title}
                    style={{
                      padding: 16,
                      borderRadius: 18,
                      border: "1px solid rgba(255,241,219,0.08)",
                      background: "rgba(255,248,236,0.03)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 12,
                        marginBottom: 6,
                      }}
                    >
                      <div style={{ fontSize: 16, fontWeight: 600 }}>{title}</div>
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: "0.08em",
                          color: "var(--accent)",
                          textTransform: "uppercase",
                        }}
                      >
                        {status}
                      </div>
                    </div>
                    <div style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7 }}>
                      {note}
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  marginTop: 16,
                  padding: 14,
                  borderRadius: 18,
                  border: "1px solid rgba(255,241,219,0.08)",
                  background: "rgba(255,248,236,0.03)",
                  color: "var(--muted-2)",
                  fontSize: 13,
                  lineHeight: 1.7,
                }}
              >
                Delivered before the day gets noisy: what matters, what might slip,
                and what needs your attention first.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 880, margin: "0 auto", padding: "18px 24px 8px" }}>
        <p
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            margin: "0 0 18px",
          }}
        >
          Built for executives who are tired of being the coordination system.
        </p>
        <div style={{ color: "var(--muted)", fontSize: 18, lineHeight: 1.85 }}>
          <p>
            If the inbox dictates the day, meetings start without enough context,
            and follow-through depends on your memory, the business is leaning on
            the wrong layer.
          </p>
          <p style={{ marginBottom: 0 }}>
            OESS installs that missing layer and manages it for you.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "34px 24px 24px" }}>
        <div
          style={{
            padding: "30px 30px 32px",
            borderRadius: 28,
            border: "1px solid var(--border)",
            background: "rgba(255,248,236,0.03)",
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
            What this changes
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: "0 0 18px",
              maxWidth: 760,
            }}
          >
            Executive leverage that shows up in the calendar, inbox, and follow-up chain.
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 17,
              lineHeight: 1.8,
              maxWidth: 820,
              margin: "0 0 22px",
            }}
          >
            OESS is designed to remove coordination drag from the week, not add a
            new tool for you to manage. These are the first places operators feel
            the relief.
          </p>
          <div
            className="workflow-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {workflowCards.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: 24,
                  borderRadius: 24,
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <h3 style={{ fontSize: 24, lineHeight: 1.08, margin: "0 0 10px" }}>
                  {item.title}
                </h3>
                <p
                  style={{
                    margin: "0 0 14px",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    fontSize: 15,
                  }}
                >
                  {item.body}
                </p>
                <div
                  style={{
                    borderRadius: 18,
                    padding: "14px 16px",
                    background: "rgba(255,248,236,0.03)",
                    border: "1px solid rgba(255,241,219,0.08)",
                    color: "var(--muted-2)",
                    fontSize: 13,
                    lineHeight: 1.7,
                  }}
                >
                  {item.artifact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "10px 24px 24px" }}>
        <div
          className="why-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 0.95fr) minmax(0, 1.05fr)",
            gap: 18,
          }}
        >
          <div
            style={{
              padding: 28,
              borderRadius: 28,
              border: "1px solid var(--border)",
              background:
                "linear-gradient(180deg, rgba(210,170,109,0.1), rgba(255,248,236,0.03))",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 12,
              }}
            >
              Why OESS works
            </div>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 46px)",
                lineHeight: 1.06,
                letterSpacing: "-0.03em",
                margin: "0 0 12px",
              }}
            >
              A managed operating layer for executive work.
            </h2>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 16, lineHeight: 1.8 }}>
              You are not buying access to a model. You are buying deployment,
              workflow integration, hardening, tuning, and support until the system
              is producing visible operational relief.
            </p>
          </div>
          <div style={{ display: "grid", gap: 14 }}>
            {whyOess.map(([title, copy]) => (
              <div
                key={title}
                style={{
                  padding: 22,
                  borderRadius: 22,
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <h3 style={{ fontSize: 22, lineHeight: 1.15, margin: "0 0 8px" }}>
                  {title}
                </h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 15, lineHeight: 1.72 }}>
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "4px 24px 24px" }}>
        <div
          style={{
            padding: "30px 30px 32px",
            borderRadius: 28,
            border: "1px solid var(--border)",
            background: "rgba(255,248,236,0.03)",
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
            Outcome pillars
          </div>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 46px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              margin: "0 0 16px",
              maxWidth: 760,
            }}
          >
            The system earns trust by making the week cleaner.
          </h2>
          <div
            className="rollout-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {outcomePillars.map(([title, copy]) => (
              <div
                key={title}
                style={{
                  padding: 24,
                  borderRadius: 24,
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <h3 style={{ fontSize: 22, lineHeight: 1.14, margin: "0 0 10px" }}>{title}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 15, lineHeight: 1.75 }}>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "4px 24px 24px" }}>
        <div
          style={{
            padding: "30px 30px 32px",
            borderRadius: 28,
            border: "1px solid var(--border)",
            background: "rgba(255,248,236,0.03)",
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
            Service model
          </div>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 46px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              margin: "0 0 16px",
              maxWidth: 760,
            }}
          >
            Start with one real bottleneck. Expand only after it earns the right.
          </h2>
          <div
            className="rollout-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {rolloutSteps.map(([title, copy], index) => (
              <div
                key={title}
                style={{
                  padding: 24,
                  borderRadius: 24,
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 10 }}>
                  Step {index + 1}
                </div>
                <h3 style={{ fontSize: 22, lineHeight: 1.14, margin: "0 0 10px" }}>{title}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 15, lineHeight: 1.75 }}>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "4px 24px 24px" }}>
        <div
          className="fit-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
          }}
        >
          <div
            style={{
              padding: 26,
              borderRadius: 24,
              border: "1px solid var(--border)",
              background: "var(--surface)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 12,
              }}
            >
              Best fit
            </div>
            <div style={{ display: "grid", gap: 10, color: "var(--muted)", fontSize: 15, lineHeight: 1.7 }}>
              {fitDetails.fit.map((item) => (
                <p key={item} style={{ margin: 0 }}>
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div
            style={{
              padding: 26,
              borderRadius: 24,
              border: "1px solid var(--border)",
              background: "var(--surface)",
            }}
          >
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 12,
              }}
            >
              Probably not fit
            </div>
            <div style={{ display: "grid", gap: 10, color: "var(--muted)", fontSize: 15, lineHeight: 1.7 }}>
              {fitDetails.notFit.map((item) => (
                <p key={item} style={{ margin: 0 }}>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "8px 24px 28px" }}>
        <div
          style={{
            padding: "30px 30px 32px",
            borderRadius: 28,
            border: "1px solid var(--border)",
            background: "rgba(255,248,236,0.03)",
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
            Pricing clarity
          </div>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 46px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              margin: "0 0 16px",
              maxWidth: 780,
            }}
          >
            Pricing follows workflow coverage, role count, and security scope.
          </h2>
          <p
            style={{
              color: "var(--muted)",
              fontSize: 17,
              lineHeight: 1.8,
              maxWidth: 860,
              margin: "0 0 22px",
            }}
          >
            OESS pricing is based on how many operating roles are in the
            deployment, how much executive workflow coverage you need, and how much
            setup and hardening is required to keep the system clean.
          </p>
          <div
            className="pricing-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 18,
            }}
          >
            {pricingExplainers.map((item) => (
              <div
                key={item.title}
                style={{
                  padding: 24,
                  borderRadius: 24,
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <h3 style={{ fontSize: 22, lineHeight: 1.14, margin: "0 0 10px" }}>
                  {item.title}
                </h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 15, lineHeight: 1.75 }}>
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px 28px" }}>
        <div
          style={{
            padding: "30px 30px 32px",
            borderRadius: 28,
            border: "1px solid var(--border)",
            background: "rgba(255,248,236,0.03)",
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
            Common objections
          </div>
          <h2
            style={{
              fontSize: "clamp(30px, 4vw, 46px)",
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              margin: "0 0 18px",
              maxWidth: 820,
            }}
          >
            The buying questions, answered without fluff.
          </h2>
          <div className="objection-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 }}>
            {objections.map((item) => (
              <div
                key={item.q}
                style={{
                  padding: 24,
                  borderRadius: 24,
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <h3 style={{ fontSize: 22, lineHeight: 1.16, margin: "0 0 10px" }}>{item.q}</h3>
                <p style={{ margin: 0, color: "var(--muted)", fontSize: 15, lineHeight: 1.75 }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 760,
          margin: "0 auto",
          padding: "44px 24px 108px",
          textAlign: "center",
        }}
      >
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
            Starting point
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: "0 0 14px",
            }}
          >
            Beta pricing starts at $497/mo.
          </h2>
          <p
            style={{
              margin: "0 auto 28px",
              maxWidth: 560,
              color: "var(--muted)",
              fontSize: 18,
              lineHeight: 1.7,
            }}
          >
            If the coordination pain is real, the next move is the fit call. We’ll
            scope the first operating layer, install it privately, and tune it until
            the output is useful in production.
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
              Request Assessment
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
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 920px) {
          .hero-grid,
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 680px) {
          .hero-section {
            padding: 56px 18px 20px !important;
          }
          .hero-copy h1 {
            font-size: 52px !important;
            line-height: 0.98 !important;
            margin-bottom: 18px !important;
          }
          .hero-copy p {
            font-size: 18px !important;
            line-height: 1.6 !important;
          }
          .hero-card {
            padding: 18px !important;
            border-radius: 22px !important;
          }
          .trust-strip,
          .workflow-grid,
          .rollout-grid,
          .fit-grid,
          .pricing-grid,
          .objection-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 860px) {
          .fit-grid,
          .objection-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
