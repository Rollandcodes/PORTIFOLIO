import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Rolland Muhanguzi — Full-Stack Developer, AI systems architect, and SaaS founder. Discover his experience timeline, values, and the tech stack behind his work.",
  openGraph: {
    title: "About | Rolland Muhanguzi",
    description:
      "Rolland builds systems, not just websites. Founder of CypAI, AI automation specialist, and full-stack developer with a revenue-first mindset.",
    url: "https://portifolio-delta-orpin.vercel.app/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "About Rolland Muhanguzi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Rolland Muhanguzi",
    description: "Founder of CypAI. AI systems builder. Full-stack developer with a revenue-first mindset.",
    images: ["/og-image.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
