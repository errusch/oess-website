"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "84px 24px 40px",
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
              For busy executives and founders
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
                maxWidth: 640,
                margin: "0 0 28px",
              }}
            >
              OESS gives you a private AI chief of staff with hardware included
              in your environment, so email, meeting prep, research, and
              follow-through stop eating the best hours of your week.
            </p>
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                marginBottom: 24,
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
              style={{
                display: "flex",
                gap: 18,
                flexWrap: "wrap",
                color: "var(--muted-2)",
                fontSize: 13,
              }}
            >
              <span>Installed in 48-72 hours</span>
              <span>Hardware included</span>
              <span>15-20 hours back per week</span>
              <span>No SaaS lock-in</span>
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
                What the system actually does
              </div>
              {[
                [
                  "6:30 AM",
                  "Builds your morning brief",
                  "What matters today, what slipped, what needs a decision.",
                ],
                [
                  "Before first meeting",
                  "Preps the room for you",
                  "Relevant context, open loops, and draft replies already waiting.",
                ],
                [
                  "During the day",
                  "Handles the administrative drag",
                  "Inbox triage, scheduling friction, research pulls, follow-up capture.",
                ],
                [
                  "Overnight",
                  "Keeps moving while you're offline",
                  "Research batches, workflow cleanup, and deferred tasks run in the background.",
                ],
              ].map(([time, title, copy], index) => (
                <div
                  key={title}
                  style={{
                    padding: "18px 0",
                    borderTop:
                      index === 0 ? "1px solid rgba(255,241,219,0.08)" : "1px solid rgba(255,241,219,0.08)",
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
                  <div
                    style={{
                      fontSize: 20,
                      fontWeight: 500,
                      marginBottom: 6,
                    }}
                  >
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

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "28px 24px 10px" }}>
        <p
          style={{
            fontSize: "clamp(26px, 4vw, 42px)",
            lineHeight: 1.32,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          This is for founders, CEOs, presidents, managing partners, and other
          operators who are still losing hours every day to inbox management,
          scheduling, meeting prep, follow-up, and low-level coordination.
        </p>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "42px 24px" }}>
        <div style={{ color: "var(--muted)", fontSize: 18, lineHeight: 1.9 }}>
          <p>
            Most people do not need “more AI tools.” They need someone to take
            work off their plate without creating another dashboard to babysit.
          </p>
          <p>
            That is the gap OESS is built for. I deploy the system, wire it to
            your real workflow, and make it useful fast. The machine is part of
            the service. Your accounts stay yours. You are not buying another
            SaaS subscription and you are not paying a setup tax to figure it
            out yourself.
          </p>
          <p>
            You are buying back focus and decision time.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "4px 24px 28px" }}>
        <div
          style={{
            padding: "26px 28px",
            borderRadius: 24,
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
              marginBottom: 12,
            }}
          >
            Why this is different
          </div>
          <p style={{ margin: "0 0 12px", color: "var(--muted)", fontSize: 17, lineHeight: 1.8 }}>
            OESS is not coming from someone who only knows prompts or only knows
            operations. I started in IT and moved deeper into business operations
            over time, which means I care about both sides of the problem:
            getting the system to work and making sure it actually helps the business.
          </p>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: 17, lineHeight: 1.8 }}>
            That matters because busy executives do not need more tooling. They
            need someone who can translate technical capability into practical
            operating relief.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "22px 24px 28px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 18,
          }}
        >
          {[
            [
              "Morning briefings",
              "A clean read on priorities, deadlines, and unresolved threads before the day starts.",
            ],
            [
              "Inbox triage",
              "Drafts, urgency sorting, and noise reduction before you touch your email.",
            ],
            [
              "Meeting prep",
              "Context packets, talking points, and follow-up capture so meetings do not die in your notes.",
            ],
            [
              "Private deployment",
              "Runs on a dedicated machine in your environment with your accounts, not inside somebody else's product.",
            ],
          ].map(([title, copy]) => (
            <div
              key={title}
              style={{
                padding: 24,
                borderRadius: 24,
                border: "1px solid var(--border)",
                background: "var(--surface)",
              }}
            >
              <h3
                style={{
                  fontSize: 24,
                  lineHeight: 1.15,
                  margin: "0 0 10px",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: 1.7,
                  color: "var(--muted)",
                }}
              >
                {copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "26px 24px 28px" }}>
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
            What you actually get
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
            A real system should produce real outputs.
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 18,
            }}
          >
            {[
              {
                title: "Morning briefing",
                body: "Top priorities, calendar risks, unresolved threads, and the handful of messages that actually matter before the day starts.",
                sample: "Today: 3 decisions, 1 meeting risk, 4 emails worth reading, 2 follow-ups overdue.",
              },
              {
                title: "Inbox triage",
                body: "A filtered view of what needs your answer, what can be drafted for review, and what should be ignored or delegated.",
                sample: "Urgent: board counsel. Draft ready: client renewal. Ignore: vendor spam. Delegate: scheduling chain.",
              },
              {
                title: "Meeting prep",
                body: "Context, prior conversations, open loops, and talking points before you walk into the room.",
                sample: "Meeting with Acme: last contact 9 days ago, pricing objection unresolved, decision maker joining today.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  padding: 24,
                  borderRadius: 24,
                  border: "1px solid var(--border)",
                  background: "var(--surface)",
                }}
              >
                <h3 style={{ fontSize: 24, lineHeight: 1.08, margin: "0 0 10px" }}>{item.title}</h3>
                <p style={{ margin: "0 0 14px", color: "var(--muted)", lineHeight: 1.7, fontSize: 15 }}>
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
                  {item.sample}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "4px 24px 26px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
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
              What improvement looks like
            </div>
            <h3 style={{ fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 14px" }}>
              The first win should be obvious.
            </h3>
            <p style={{ margin: "0 0 14px", color: "var(--muted)", fontSize: 16, lineHeight: 1.8 }}>
              A serious deployment should make the executive feel relief fast. The
              first week is not about proving artificial general intelligence. It
              is about making the workday less fragmented.
            </p>
            <div style={{ display: "grid", gap: 10, color: "var(--muted)", fontSize: 15, lineHeight: 1.75 }}>
              <p style={{ margin: 0 }}>Monday morning starts with a usable briefing instead of a blank inbox.</p>
              <p style={{ margin: 0 }}>Important messages are surfaced, draftable work is separated, and noise is reduced.</p>
              <p style={{ margin: 0 }}>Meetings stop feeling like context resets because the prep is already there.</p>
            </div>
          </div>
          <div
            style={{
              padding: 28,
              borderRadius: 24,
              border: "1px solid var(--border)",
              background: "linear-gradient(180deg, rgba(210,170,109,0.1), rgba(255,248,236,0.03))",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
              Example outcome
            </div>
            <div style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8 }}>
              <p style={{ marginTop: 0 }}>
                Founder with a heavy meeting calendar and constant inbox churn:
              </p>
              <p>
                week one focuses on morning briefing, inbox triage, and meeting prep;
                the result is fewer context resets, faster replies, and cleaner
                follow-through.
              </p>
              <p style={{ marginBottom: 0 }}>
                That is the standard. If the first week does not feel like visible
                operational relief, the deployment is not finished.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1120, margin: "0 auto", padding: "18px 24px 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
          }}
          className="fit-grid"
        >
          <div
            style={{
              padding: 26,
              borderRadius: 24,
              border: "1px solid var(--border)",
              background: "var(--surface)",
            }}
          >
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
              Best fit
            </div>
            <div style={{ display: "grid", gap: 10, color: "var(--muted)", fontSize: 15, lineHeight: 1.7 }}>
              <p style={{ margin: 0 }}>Founder-operators carrying too much coordination work themselves.</p>
              <p style={{ margin: 0 }}>CEOs and presidents with fragmented calendars, noisy inboxes, and weak follow-through systems.</p>
              <p style={{ margin: 0 }}>Managing partners and fractional executives who need context recovery fast.</p>
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
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
              Probably not fit
            </div>
            <div style={{ display: "grid", gap: 10, color: "var(--muted)", fontSize: 15, lineHeight: 1.7 }}>
              <p style={{ margin: 0 }}>People looking for the cheapest possible AI toy.</p>
              <p style={{ margin: 0 }}>Teams wanting a broad enterprise software rollout before proving one real workflow.</p>
              <p style={{ margin: 0 }}>Buyers who mainly want content generation instead of executive operating relief.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "46px 24px 18px" }}>
        <div
          style={{
            padding: "28px 30px",
            borderRadius: 28,
            background: "rgba(255,248,236,0.03)",
            border: "1px solid var(--border)",
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
            What the setup looks like
          </div>
          <div style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.8 }}>
            <p style={{ marginTop: 0 }}>
              We map your current workflow, install the agent system, connect the
              right accounts, and tune it around the highest-friction parts of
              your week first.
            </p>
            <p style={{ marginBottom: 0 }}>
              The goal is not to automate everything. The goal is to remove the
              specific work that should not require your attention in the first
              place. Two cables. Power and ethernet. Then we handle the rest.
            </p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px 20px" }}>
        <h2
          style={{
            fontSize: "clamp(34px, 5vw, 56px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            margin: "0 0 18px",
          }}
        >
          Not a chatbot.
          <br />
          Not another app.
        </h2>
        <p style={{ margin: 0, color: "var(--muted)", fontSize: 18, lineHeight: 1.8 }}>
          A private operating layer for the executive or founder who is tired of
          carrying too much of the business in their own head.
        </p>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "44px 24px 108px", textAlign: "center" }}>
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
            Plans start at $297/mo.
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
            Managed monthly pricing covers the machine, the setup, and the support
            layer behind it. If the problem is real, the next step is the fit call,
            not another week of research.
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
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 900px) {
          .proof-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 860px) {
          .fit-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
