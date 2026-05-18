import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Rajesh Ranjan Kumar",
    default: "Rajesh Ranjan Kumar — Enterprise AI · Responsible AI · Agentic SDLC",
  },
  description:
    "Rajesh Ranjan Kumar writes on Generative AI, Agentic SDLC, Responsible AI governance, AI security, and enterprise architecture. Daily GenAI intel for CTOs and engineering leaders.",
  keywords: [
    "Generative AI", "Responsible AI", "AI Governance", "Agentic AI", "SDLC", "Enterprise AI",
    "AI Security", "LangChain", "RAG", "MLOps", "AI Architecture", "Rajesh Ranjan Kumar",
  ],
  authors: [{ name: "Rajesh Ranjan Kumar" }],
  openGraph: {
    type: "website",
    siteName: "Rajesh Ranjan Kumar",
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
