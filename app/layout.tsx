import type { Metadata } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "OESS | Your Private AI Chief of Staff",
  description:
    "We set up your private AI Chief of Staff so email, meeting prep, research, and follow-through stop eating the best hours of your week.",
  openGraph: {
    title: "OESS | Your Private AI Chief of Staff",
    description: "We set up your private AI Chief of Staff so email, meeting prep, research, and follow-through stop eating the best hours of your week.",
    url: "https://oess.io",
    siteName: "OESS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OESS | Your Private AI Chief of Staff",
    description: "We set up your private AI Chief of Staff so email, meeting prep, research, and follow-through stop eating the best hours of your week.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${dmSans.variable} ${instrumentSerif.variable}`}
        style={{ background: "#0f0d0a", color: "#f4efe6", margin: 0 }}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
