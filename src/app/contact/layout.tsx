import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Rolland Muhanguzi – Let's Build Together",
  description: "Get in touch with Rolland Muhanguzi to discuss AI automation, SaaS projects, or high-converting web development.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
