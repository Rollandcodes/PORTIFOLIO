import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://portifolio-delta-orpin.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rolland Muhanguzi | AI Systems Builder & SaaS Founder",
    template: "%s | Rolland Muhanguzi",
  },
  description:
    "I build AI automation systems, SaaS platforms, and revenue infrastructure that make businesses money while they sleep. Founder of CypAI. Available for projects.",
  keywords: [
    "AI developer",
    "SaaS founder",
    "automation systems",
    "Next.js developer",
    "OpenAI integration",
    "n8n automation",
    "full-stack developer",
    "CypAI",
    "Rolland Muhanguzi",
  ],
  authors: [{ name: "Rolland Muhanguzi", url: siteUrl }],
  creator: "Rolland Muhanguzi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rolland Muhanguzi",
    title: "Rolland Muhanguzi | AI Systems Builder & SaaS Founder",
    description:
      "I build AI automation systems, SaaS platforms, and revenue infrastructure that make businesses money while they sleep.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rolland Muhanguzi — AI Systems Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolland Muhanguzi | AI Systems Builder & SaaS Founder",
    description:
      "I build AI automation systems, SaaS platforms, and revenue infrastructure that make businesses money while they sleep.",
    images: ["/og-image.png"],
    creator: "@rollandcodes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased bg-background text-foreground min-h-screen selection:bg-accent/30 selection:text-white flex flex-col">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
