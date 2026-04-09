import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work & Projects",
  description:
    "Case studies of AI SaaS platforms, automation systems, and revenue infrastructure built by Rolland Muhanguzi — including CypAI, Ostra Clips, and PainPointRadar.",
  openGraph: {
    title: "Work & Projects | Rolland Muhanguzi",
    description:
      "Real systems, real results. Explore AI SaaS products, automation pipelines, and high-converting web systems built for measurable ROI.",
    url: "https://portifolio-delta-orpin.vercel.app/work",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Rolland Muhanguzi — Work & Projects" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work & Projects | Rolland Muhanguzi",
    description: "Real AI systems, real revenue results. Case studies from CypAI, Ostra Clips, and more.",
    images: ["/og-image.png"],
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
