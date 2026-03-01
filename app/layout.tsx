import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OESS – OpenClaw Executive Setup Service",
  description: "Get 40 hours back every week. OESS wires OpenClaw into your daily operations. AI agents handle email, calendar, research, and workflows.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: "#0a0a0a", color: "#ededed", margin: 0 }}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
