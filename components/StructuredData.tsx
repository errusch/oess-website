export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OESS",
    alternateName: "OpenClaw Executive Setup Service",
    url: "https://oess.io",
    logo: "https://oess.io/logo.png",
    description: "We set up your private AI Chief of Staff so email, meeting prep, research, and follow-through stop eating the best hours of your week.",
    areaServed: {
      "@type": "Place",
      name: "United States",
    },
    serviceType: "AI Executive Assistant Setup and Support",
    knowsAbout: [
      "AI Executive Assistants",
      "Private AI Deployment",
      "OpenClaw",
      "AI Chief of Staff",
    ],
    sameAs: [
      "https://twitter.com/oess_io",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
