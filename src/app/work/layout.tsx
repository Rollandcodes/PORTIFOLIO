import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Rolland Muhanguzi – AI & SaaS Portfolio",
  description: "A showcase of AI SaaS platforms, automation systems, and high-converting websites built by Rolland Muhanguzi.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
