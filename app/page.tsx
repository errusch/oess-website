"use client";
import Link from "next/link";

const trustStrip = [
  "Private deployment inside your environment",
  "Setup, hardening, and rollout handled for you",
  "First workflow live within 14 days",
  "Ongoing tuning and support included",
];

const workflowCards = [
  {
    title: "Morning briefing",
    body: "Starts the day with priorities, risks, deadlines, and unresolved threads already surfaced.",
    artifact:
      "Today: 3 decisions, 1 meeting risk, 4 emails worth reading, 2 overdue follow-ups.",
  },
  {
    title: "Inbox triage",
    body: "Separates what needs your answer, what can be drafted, and what should be ignored or delegated.",
    artifact:
      "Urgent: board counsel. Draft ready: client renewal. Ignore: vendor spam. Delegate: scheduling chain.",
  },
  {
    title: "Meeting prep",
    body: "Pulls prior context, open loops, and talking points before you walk into the room.",
    artifact:
      "Meeting with Acme: pricing objection unresolved, decision maker joining today, last contact 9 days ago.",
  },
  {
    title: "Follow-up tracking",
    body: "Catches commitments, next actions, and dropped threads so momentum does not die after the call.",
    artifact:
      "Follow up with CFO by Thursday. Draft response ready. Contract review still pending legal.",
  },
];

const heroBriefing = {
  dateLabel: "Wednesday · 7:10 AM",
  owner: "Executive morning briefing",
  summary: "You have 3 decisions worth attention before 10:30, 1 meeting risk, and 2 follow-ups that will slip if they do not go out today.",
  items: [
    ["Board counsel", "Reply today", "Draft ready. Waiting on your approval."],
    ["Acme renewal", "Meeting risk", "Pricing objection still unresolved before 2 PM call."],
    ["CFO follow-up", "Send by noon", "Commitment from Monday still open."],
  ],
};

const rolloutSteps = [
  [
    "Fit + scope",
    "We decide which role should go live first and what support it actually needs.",
  ],
  [
    "Deploy + harden",
    "Environment, access, and account connections get set up without turning this into your side project.",
  ],
  [
    "Launch + tune",
    "The first workflows go live quickly, then we tighten them until the relief is real in your week.",
  ],
];

const objections = [
  {
    q: "Why not just do this myself with ChatGPT or Claude?",
    a: "Because the bottleneck is not model access. It is deployment, permissions, workflow design, hardening, tuning, and ongoing upkeep. OESS handles the operating layer so the system is actually useful in production.",
  },
  {
    q: "How much do I need to manage after launch?",
    a: "Very little. You review outputs, approve sensitive actions, and give feedback on what is or is not useful. OESS handles the environment, tuning, and support behind it.",
  },
  {
    q: "What happens if the workflow changes?",
    a: "Then the system changes with it. The engagement includes tuning and iteration so the setup does not freeze the moment your priorities shift.",
  },
  {
    q: "What if it makes mistakes?",
    a: "Sensitive workflows stay human-in-the-loop by default. The goal is operational relief with clean guardrails, not blind autonomy for its own sake.",
  },
];

const whyOess = [
  [
    "Managed, not DIY",
    "You are not buying another dashboard to babysit. OESS installs, configures, hardens, and tunes the system for you.",
  ],
  [
    "Private by default",
    "Your credentials stay local, your data is not used to train our models, and the system runs in your environment instead of ours.",
  ],
  [
    "Built around operational relief",
    "The standard is not novelty. The standard is getting hours back each week and tightening follow-through where work normally slips.",
  ],
];

const fitDetails = {
  fit: [
    "Founder-operators carrying too much coordination work themselves.",
    "CEOs and presidents with fragmented calendars, noisy inboxes, and weak follow-through systems.",
    "Managing partners and fractional executives who need context recovery fast.",
  ],
  notFit: [
    "People looking for the cheapest possible AI toy.",
    "Teams wanting a broad enterprise rollout before proving one real workflow.",
    "Buyers who mainly want content generation instead of executive operating relief.",
  ],
};

const pricingExplainers = [
  {
    title: "Start small",
    body: "Most buyers begin with one executive lead role plus one or two support workflows. Prove the first relief before expanding the stack.",
  },
  {
    title: "What monthly includes",
    body: "Managed pricing covers the machine path, setup, hardening, tuning, and ongoing support. It is not just raw model access.",
  },
  {
    title: "What counts as an agent",
    body: "An agent is one operating role with a clear job, instruction set, and permission boundary. Briefings, inbox triage, and meeting prep can work together, but they are not the same role.",
  },
  {
    title: "Expand only when useful",
    body: "Pricing scales when you add real workflow coverage and new role boundaries, not because you crossed an arbitrary usage line.",
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
              Private executive operating systems
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
              Stop being the
              <br />
              bottleneck in
              <br />
              your own business.
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
              We install a private executive operating system into your real workflow
              so inbox triage, meeting prep, follow-through, and coordination stop
              consuming the sharpest hours of your week.
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
              OESS handles deployment, security hardening, workflow tuning, and
              support. You get operational leverage without turning yourself into the
              IT department.
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
                <div style={{ fontSize: 12, color: "var(--muted-2)" }}>{heroBriefing.dateLabel}</div>
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
                <div style={{ fontSize: 12, color: "var(--accent)", fontWeight: 700, letterSpacing: "0.08em", marginBottom: 8 }}>
                  {heroBriefing.owner}
                </div>
                <p style={{ margin: 0, color: "var(--foreground)", fontSize: 15, lineHeight: 1.75 }}>
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
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginBottom: 6 }}>
                      <div style={{ fontSize: 16, fontWeight: 600 }}>{title}</div>
                      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", color: "var(--accent)", textTransform: "uppercase" }}>
                        {status}
                      </div>
                    </div>
                    <div style={{ color: "var(--muted)", fontSize: 13, lineHeight: 1.7 }}>{note}</div>
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
                Delivered before breakfast: the priorities, risks, and follow-ups most likely to change today.
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
          Built for executives who are still carrying too much of the coordination
          load themselves.
        </p>
        <div style={{ color: "var(--muted)", fontSize: 18, lineHeight: 1.85 }}>
          <p>
            If your inbox dictates the day, meetings start without enough context,
            and follow-through depends on your memory, the system is underbuilt.
          </p>
          <p style={{ marginBottom: 0 }}>
            OESS fixes that with a managed operating layer wired into the workflow
            you already use.
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
            The view from the cockpit
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
            See the work before you buy the service.
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
            The point is simple: you should know what shows up on your desk. These
            are the kinds of operational outputs OESS is built to deliver every week.
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
              A managed engagement, not just software access.
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
            Buy the managed engagement first. Expand only after it earns the right.
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
            Pricing follows scope, roles, and security boundaries.
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
            deployment, how much workflow coverage you need, and how much setup and
            hardening is required to keep the system clean.
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
            The main buying questions, answered directly.
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
            Start with one role at $297/mo.
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
            Managed monthly pricing covers the machine path, deployment, and ongoing
            support. If the operational pain is real, the next move is the fit call.
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
