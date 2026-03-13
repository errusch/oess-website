"use client";
import Link from "next/link";

const process = [
  ["01", "Map the drag", "We start with the part of your week that keeps coming back to you: inbox, meeting prep, follow-through, research, or scheduling."],
  ["02", "Install it in your environment", "We set it up in a cloud account or on a Mac Mini you own, connect the right tools, and keep the scope tight enough to matter fast."],
  ["03", "Stay close until it is useful", "We watch the first two weeks closely, fix edge cases, and tune the system around real work so you are not left alone after setup."],
];

const controlPoints = [
  "Runs in a cloud account or on a Mac Mini you own",
  "Your model and app accounts stay yours",
  "Two weeks of hands-on support after setup",
  "No hidden platform in the middle",
];

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
              Reclaim the hours that
              <br />
              actually move
              <br />
              your business.
            </h1>
            <p
              style={{
                fontSize: "clamp(18px, 2.2vw, 24px)",
                lineHeight: 1.55,
                color: "var(--muted)",
                maxWidth: 660,
                margin: "0 0 16px",
              }}
            >
              We install your AI Chief of Staff in your environment so inbox
              cleanup, meeting prep, research, and follow-through stop eating
              the best hours of your week.
            </p>
            <p
              style={{
                margin: "0 0 28px",
                color: "var(--muted-2)",
                fontSize: 15,
                lineHeight: 1.8,
                maxWidth: 620,
              }}
            >
              We handle setup, support, and the messy edge cases that keep most
              people from ever getting this working.
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
                Request an Assessment
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
            <div
              style={{
                display: "flex",
                gap: 18,
                flexWrap: "wrap",
                color: "var(--muted-2)",
                fontSize: 13,
              }}
            >
              <span>Setup starts at $1,500 once</span>
              <span>Ongoing Care is $497/mo</span>
              <span>Installed in 48-72 hours</span>
              <span>Two weeks hands-on support</span>
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
                  "Builds your decision brief",
                  "The day starts with priorities, risks, and the few things that need your attention.",
                ],
                [
                  "Before first meeting",
                  "Pulls the missing context together",
                  "Relevant notes, loose ends, and talking points are already waiting when you sit down.",
                ],
                [
                  "During the day",
                  "Catches follow-through before it slips",
                  "Drafts, reminders, research pulls, and admin cleanup stop falling back on you by default.",
                ],
                [
                  "Overnight",
                  "Keeps background work moving",
                  "Deferred research, inbox cleanup, and prep work keep moving while you are offline.",
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
              Built from the system I wanted for myself first.
            </h2>
            <div style={{ display: "grid", gap: 12, color: "var(--muted)", fontSize: 16, lineHeight: 1.8 }}>
              <p style={{ margin: 0 }}>
                This runs in your environment, not inside another company's
                black box.
              </p>
              <p style={{ margin: 0 }}>
                You keep the hardware and accounts. We do the install work and
                stay close while it proves itself in real use.
              </p>
              <p style={{ margin: 0 }}>
                That is the whole pitch: real help without handing your working
                system to somebody else.
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
              <p style={{ margin: 0, color: "var(--foreground)", fontWeight: 700 }}>
                The goal is simple: buy back time without giving up control.
              </p>
            </div>
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
              Start with one drag point. Make it useful fast.
            </h2>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 17, lineHeight: 1.8 }}>
              You do not need a giant AI transformation project. You need one
              part of the week to stop bouncing back to you.
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
            <div style={{ display: "grid", gap: 10, color: "var(--muted)", fontSize: 15, lineHeight: 1.72 }}>
              <p style={{ margin: 0 }}>Founders and executives who still carry too much coordination work themselves.</p>
              <p style={{ margin: 0 }}>Teams with heavy inbox, calendar, meeting, or follow-through load.</p>
              <p style={{ margin: 0 }}>People who want hands-on help, not another tool to babysit.</p>
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
            <div style={{ display: "grid", gap: 10, color: "var(--muted)", fontSize: 15, lineHeight: 1.72 }}>
              <p style={{ margin: 0 }}>Anyone looking for the cheapest AI tool on the market.</p>
              <p style={{ margin: 0 }}>Teams trying to automate everything at once.</p>
              <p style={{ margin: 0 }}>Buyers who mainly want content generation instead of time back and cleaner execution.</p>
            </div>
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
            Pricing
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              margin: "0 0 14px",
            }}
          >
            Setup starts at $1,500 once.
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
            Ongoing Care is $497/mo. Mac Mini Setup is $2,500 once. We handle
            the setup and support.
          </p>
          <p
            style={{
              margin: "0 auto 28px",
              maxWidth: 560,
              color: "var(--muted-2)",
              fontSize: 15,
              lineHeight: 1.8,
            }}
          >
            If this buys back even a few executive hours each month, the math gets
            clear quickly.
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
              Request an Assessment
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
          .setup-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
