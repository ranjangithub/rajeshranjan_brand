import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Rajesh Ranjan",
    default: "Rajesh Ranjan — Enterprise AI · Responsible AI · Agentic SDLC",
  },
  description:
    "Enterprise AI architect. Daily briefings on Generative AI, Responsible AI governance, agentic systems, and AI security — for CTOs, architects, and engineering leaders.",
  keywords: [
    "Rajesh Ranjan", "Enterprise AI", "Responsible AI", "AI Governance", "Agentic AI",
    "AI Security", "NIST AI RMF", "EU AI Act", "Generative AI", "LLM Security",
    "AI Architecture", "Agentic SDLC",
  ],
  authors: [{ name: "Rajesh Ranjan" }],
  openGraph: {
    type: "website",
    siteName: "Rajesh Ranjan",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
