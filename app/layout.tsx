import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OESS - AI Chief of Staff, Installed for Founders",
  description:
    "OESS deploys a private AI chief of staff with hardware included in your environment. Email triage, meeting prep, research, and follow-through for founder-led teams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable}`}
        style={{ background: "#0f0d0a", color: "#f4efe6", margin: 0 }}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
