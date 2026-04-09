import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Rolland Muhanguzi – AI Engineer & Founder",
  description: "Learn about Rolland Muhanguzi's background, experience timeline, and core tech stack in AI, automation, and SaaS development.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
