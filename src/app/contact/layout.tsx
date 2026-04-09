import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rolland Muhanguzi to discuss AI automation, SaaS development, or building a revenue-generating digital system for your business.",
  openGraph: {
    title: "Contact | Rolland Muhanguzi",
    description:
      "Ready to build something that generates real ROI? Reach out via WhatsApp, email, or the contact form. Rolland typically replies within 24 hours.",
    url: "https://portifolio-delta-orpin.vercel.app/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Contact Rolland Muhanguzi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Rolland Muhanguzi",
    description: "Let's build something that prints money. Reach out to Rolland via WhatsApp or email.",
    images: ["/og-image.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
