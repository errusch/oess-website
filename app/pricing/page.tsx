"use client";
import Link from "next/link";

const tiers = [
  {
    name: "Foundation",
    monthly: "$297/mo",
    tag: "For founders starting lean",
    ideal: "Best for solo operators and senior individual contributors",
    description:
      "A managed single-agent chief-of-staff setup with hardware included for the core daily loop.",
    features: [
      "Hardware included",
      "Morning briefing",
      "Inbox triage",
      "Meeting prep",
      "Managed setup and tuning",
      "Email support",
    ],
  },
  {
    name: "Professional",
    monthly: "$597/mo",
    tag: "Best place to start",
    ideal: "Best for founders, presidents, and fractional executives",
    description:
      "The strongest fit for most founder-led teams. More depth, more workflow coverage, and better continuity.",
    features: [
      "Everything in Foundation",
      "Hardware included",
      "Multi-model routing",
      "Research and follow-through support",
      "Workflow expansion",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Executive",
    monthly: "$997/mo",
    tag: "Hardware + support included",
    ideal: "Best for CEOs, partners, and operators with heavier complexity",
    description:
      "A deeper executive operating system with hardware included, broader workflow coverage, and a heavier support layer.",
    features: [
      "Dedicated hardware included",
      "Four-agent executive setup",
      "Overnight workflows",
      "Security monitoring",
      "Ongoing tuning and support",
    ],
  },
  {
    name: "Command",
    monthly: "Custom",
    tag: "For heavier operations",
    ideal: "Best for clients who need broader workflow design and custom support",
    description:
      "For teams that want deeper workflow design, more aggressive automation coverage, and a more hands-on operating relationship.",
    features: [
      "Dedicated hardware included",
      "Extended workflow buildout",
      "Larger operational surface area",
      "Higher-touch support",
      "Custom deployment scope",
    ],
  },
];

export default function Pricing() {
  return (
    <div style={{ maxWidth: 1120, margin: "0 auto", padding: "82px 24px 100px" }}>
      <section style={{ maxWidth: 760, marginBottom: 44 }}>
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--accent)",
            marginBottom: 16,
          }}
        >
          Pricing
        </div>
        <h1
          style={{
            fontSize: "clamp(42px, 6vw, 72px)",
            lineHeight: 0.98,
            letterSpacing: "-0.04em",
            margin: "0 0 18px",
          }}
        >
          Managed monthly pricing.
        </h1>
        <p
          style={{
            margin: 0,
            color: "var(--muted)",
            fontSize: 20,
            lineHeight: 1.8,
            maxWidth: 700,
          }}
        >
          OESS is not just software. It is the machine, the setup, the tuning,
          and the support layer that keeps it useful. The monthly price is the
          operating relationship, not a license fee. The goal is to give busy
          executives and founders 15-20 hours back each week.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(255px, 1fr))",
          gap: 20,
          marginBottom: 34,
        }}
      >
        {tiers.map((tier) => (
          <div
            key={tier.name}
            style={{
              border: `1px solid ${tier.highlight ? "rgba(210,170,109,0.42)" : "var(--border)"}`,
              background: tier.highlight
                ? "linear-gradient(180deg, rgba(210,170,109,0.12), rgba(255,248,236,0.04))"
                : "var(--surface)",
              borderRadius: 28,
              padding: 28,
              boxShadow: tier.highlight ? "var(--shadow)" : "none",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 10,
              }}
            >
              {tier.tag}
            </div>
            <h2
              style={{
                fontSize: 34,
                lineHeight: 1,
                letterSpacing: "-0.03em",
                margin: "0 0 8px",
              }}
            >
              {tier.name}
            </h2>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: tier.highlight ? "var(--accent-strong)" : "var(--foreground)",
                marginBottom: 14,
              }}
            >
              {tier.monthly}
            </div>
            <p
              style={{
                margin: "0 0 10px",
                color: "var(--muted)",
                lineHeight: 1.75,
                fontSize: 15,
              }}
            >
              {tier.description}
            </p>
            <p style={{ margin: "0 0 20px", color: "var(--muted-2)", lineHeight: 1.6, fontSize: 13 }}>
              {tier.ideal}
            </p>
            <div style={{ display: "grid", gap: 10, flex: 1 }}>
              {tier.features.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    color: "var(--muted)",
                    fontSize: 14,
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: "var(--accent)", fontWeight: 700 }}>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <section
        style={{
          border: "1px solid var(--border)",
          background: "rgba(255,248,236,0.03)",
          borderRadius: 28,
          padding: 28,
          marginBottom: 34,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: 28,
          }}
          className="pricing-grid"
        >
          <div>
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
              Why monthly
            </div>
            <h3
              style={{
                fontSize: "clamp(30px, 4vw, 48px)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                margin: "0 0 14px",
              }}
            >
              The lease and the support are part of the offer.
            </h3>
            <p
              style={{
                margin: 0,
                color: "var(--muted)",
                fontSize: 17,
                lineHeight: 1.8,
              }}
            >
              Every plan includes the hardware, the deployment work, and
              the support layer required to keep the system aligned with real
              work. The higher tiers buy depth, coverage, and speed of support,
              not a different business model.
            </p>
          </div>
          <div
            style={{
              border: "1px solid var(--border)",
              borderRadius: 22,
              padding: 20,
              background: "var(--surface)",
              alignSelf: "start",
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
              Fit check
            </div>
            <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.8, fontSize: 15 }}>
              If you mainly want a cheap AI toy, this will feel expensive. If you
              want real operational relief with someone actually standing behind
              the deployment, the pricing will make more sense.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          border: "1px solid var(--border)",
          background: "var(--surface)",
          borderRadius: 28,
          padding: 28,
          marginBottom: 34,
        }}
      >
        <div style={{ maxWidth: 760, marginBottom: 20 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
            Comparison
          </div>
          <h3 style={{ fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 12px" }}>
            This sits between DIY and a human assistant.
          </h3>
          <p style={{ margin: 0, color: "var(--muted)", fontSize: 16, lineHeight: 1.8 }}>
            The point is not to pretend software replaces a great human chief of
            staff. The point is to remove a large class of executive drag for far
            less cost and far less setup pain.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}
        >
          {[
            {
              title: "DIY AI stack",
              price: "$50-$500/mo",
              body: "Cheap on paper, but the setup tax lands on the buyer. Most overloaded operators do not need another project.",
            },
            {
              title: "Virtual assistant",
              price: "$1,800-$3,600/mo",
              body: "Useful, but bounded by availability, management overhead, and one-person throughput.",
            },
            {
              title: "Executive assistant",
              price: "$6,000+/mo",
              body: "High-value, but materially more expensive and slower to hire well.",
            },
            {
              title: "OESS",
              price: "$297-$997/mo",
              body: "Dedicated machine, managed deployment, direct support, and a focused chief-of-staff workflow from day one.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: 22,
                borderRadius: 22,
                border: "1px solid var(--border)",
                background: item.title === "OESS" ? "linear-gradient(180deg, rgba(210,170,109,0.12), rgba(255,248,236,0.04))" : "rgba(255,248,236,0.03)",
              }}
            >
              <div style={{ fontSize: 22, lineHeight: 1.1, marginBottom: 8 }}>{item.title}</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: item.title === "OESS" ? "var(--accent-strong)" : "var(--foreground)", marginBottom: 10 }}>
                {item.price}
              </div>
              <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.75, fontSize: 14 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          border: "1px solid var(--border)",
          background: "rgba(255,248,236,0.03)",
          borderRadius: 28,
          padding: 28,
          marginBottom: 34,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 18,
          }}
          className="roi-grid"
        >
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 12 }}>
              ROI framing
            </div>
            <h3 style={{ fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.02, letterSpacing: "-0.03em", margin: "0 0 12px" }}>
              The math is usually simple.
            </h3>
            <p style={{ margin: 0, color: "var(--muted)", fontSize: 16, lineHeight: 1.8 }}>
              If an executive’s time is worth roughly $150/hour, recovering even
              10 hours in a month creates more value than the lower tiers cost.
              The real upside is not just saved time. It is better use of the
              executive’s attention.
            </p>
          </div>
          <div
            style={{
              padding: 20,
              borderRadius: 22,
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ display: "grid", gap: 10, color: "var(--muted)", fontSize: 15, lineHeight: 1.75 }}>
              <p style={{ margin: 0 }}>$150/hour executive time</p>
              <p style={{ margin: 0 }}>10 hours recovered per month = $1,500 value</p>
              <p style={{ margin: 0 }}>15 hours recovered per month = $2,250 value</p>
              <p style={{ margin: 0 }}>20 hours recovered per month = $3,000 value</p>
              <p style={{ margin: 0, color: "var(--foreground)", fontWeight: 700 }}>
                OESS is not sold on novelty. It is sold on recovered executive leverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <h3
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            margin: "0 0 12px",
          }}
        >
          If you are unsure where you fit, ask.
        </h3>
        <p
          style={{
            margin: "0 auto 24px",
            maxWidth: 560,
            color: "var(--muted)",
            fontSize: 17,
            lineHeight: 1.8,
          }}
        >
          The right starting point matters more than squeezing you into the
          largest package.
        </p>
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
          Talk to Eric
        </Link>
      </section>

      <style>{`
        @media (max-width: 860px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
          .roi-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
