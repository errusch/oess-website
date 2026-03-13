"use client";
import Link from "next/link";

const setupOptions = [
  {
    name: "Private Cloud Setup",
    price: "$1,500",
    description:
      "Fastest path to launch. We install your AI Chief of Staff in a cloud account you own and focus the first pass on the highest-friction part of your week.",
    bullets: [
      "Best when speed matters most",
      "Starts with one executive bottleneck",
      "Includes two weeks of hands-on support after install",
    ],
  },
  {
    name: "Mac Mini Setup",
    price: "$2,500",
    description:
      "For buyers who want the system running on hardware they physically control. You buy the Mac Mini directly and we handle setup and configuration.",
    bullets: [
      "Best when local control matters most",
      "Often right when local integrations matter",
      "Includes two weeks of hands-on support after install",
    ],
  },
];

const ongoingCare = [
  "Monitoring and break-fix support",
  "Workflow tuning as priorities change",
  "Updates and upkeep",
  "Help when edge cases show up in live work",
];

export default function Pricing() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "82px 24px 100px" }}>
      <section style={{ maxWidth: 760, marginBottom: 34 }}>
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
          Clear setup pricing.
        </h1>
        <p
          style={{
            margin: 0,
            color: "var(--muted-2)",
            fontSize: 15,
            lineHeight: 1.8,
            maxWidth: 700,
          }}
        >
          Pick the setup path that fits your control model, then decide if you want ongoing support.
        </p>
      </section>

      <section style={{ display: "grid", gap: 22, marginBottom: 28 }}>
        {setupOptions.map((offer, index) => (
          <article
            key={offer.name}
            style={{
              border: `1px solid ${index === 0 ? "rgba(210,170,109,0.42)" : "var(--border)"}`,
              background:
                index === 0
                  ? "linear-gradient(180deg, rgba(210,170,109,0.12), rgba(255,248,236,0.04))"
                  : "rgba(255,248,236,0.03)",
              borderRadius: 28,
              padding: 28,
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) auto",
                gap: 16,
                alignItems: "start",
                marginBottom: 14,
              }}
              className="pricing-topline"
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    marginBottom: 8,
                  }}
                >
                  {index === 0 ? "Start here" : "Local-hardware option"}
                </div>
                <h2
                  style={{
                    fontSize: 34,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                    margin: 0,
                  }}
                >
                  {offer.name}
                </h2>
              </div>
              <div
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: index === 0 ? "var(--accent-strong)" : "var(--foreground)",
                }}
              >
                {offer.price}
              </div>
            </div>
            <p
              style={{
                margin: "0 0 18px",
                color: "var(--muted)",
                lineHeight: 1.75,
                fontSize: 16,
                maxWidth: 700,
              }}
            >
              {offer.description}
            </p>
            <div style={{ display: "grid", gap: 10 }}>
              {offer.bullets.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                    color: "var(--muted)",
                    fontSize: 15,
                    lineHeight: 1.7,
                  }}
                >
                  <span style={{ color: "var(--accent)", fontWeight: 700 }}>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section
        style={{
          border: "1px solid var(--border)",
          background: "var(--surface)",
          borderRadius: 28,
          padding: 28,
          marginBottom: 28,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) auto",
            gap: 16,
            alignItems: "end",
            marginBottom: 12,
          }}
          className="pricing-topline"
        >
          <div>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 8,
              }}
            >
              Monthly Support
            </div>
            <h2
              style={{
                fontSize: "clamp(30px, 4vw, 42px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
                margin: 0,
              }}
            >
              Ongoing Care
            </h2>
          </div>
          <div
            style={{
              fontSize: "clamp(28px, 4vw, 40px)",
              fontWeight: 700,
              color: "var(--accent-strong)",
            }}
          >
            $497/mo
          </div>
        </div>
        <p
          style={{
            margin: "0 0 18px",
            color: "var(--muted)",
            lineHeight: 1.8,
            fontSize: 16,
            maxWidth: 720,
          }}
        >
          Choose this if you want ongoing support after setup.
        </p>
        <div style={{ display: "grid", gap: 10 }}>
          {ongoingCare.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                gap: 10,
                alignItems: "flex-start",
                color: "var(--muted)",
                fontSize: 15,
                lineHeight: 1.75,
              }}
            >
              <span style={{ color: "var(--accent)", fontWeight: 700 }}>•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 680, margin: "0 auto", textAlign: "center" }}>
        <h3
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            margin: "0 0 12px",
          }}
        >
          Not sure where to start?
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
          Tell us what keeps landing back on you and whether you want cloud or Mac Mini. We will tell you the cleanest place to start.
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
          Request a Free Assessment
        </Link>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .pricing-topline {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
