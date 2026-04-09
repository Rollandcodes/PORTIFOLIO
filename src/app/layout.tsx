import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rolland Muhanguzi | Full-Stack Developer & Solo Founder",
  description: "I Build AI Systems That Make Businesses Money While They Sleep. SaaS, Automations, and Premium Websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-background text-foreground min-h-screen selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
