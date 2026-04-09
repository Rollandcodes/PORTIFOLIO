"use client";

import { Linkedin, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const links = [
  {
    section: "Pages",
    items: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    section: "Contact",
    items: [
      { label: "WhatsApp", href: "https://wa.me/905338425559", external: true },
      { label: "Email", href: "mailto:muhanguzirollands@gmail.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rolland-muhanguzi-507b6136a/", external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#020202] px-6 pt-16 pb-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display font-bold text-2xl tracking-widest mb-4">
              <span className="text-accent">R</span>M.
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Full-Stack Developer · AI Product Builder · SaaS Founder.<br />
              Building systems that generate revenue while you sleep.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://wa.me/905338425559"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-full hover:border-accent/40 hover:text-accent transition-all duration-300"
              >
                <MessageCircle size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/rolland-muhanguzi-507b6136a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 glass rounded-full hover:border-accent/40 hover:text-accent transition-all duration-300"
              >
                <Linkedin size={17} />
              </a>
              <a
                href="mailto:muhanguzirollands@gmail.com"
                className="p-2.5 glass rounded-full hover:border-accent/40 hover:text-accent transition-all duration-300"
              >
                <Mail size={17} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {links.map((col) => (
            <div key={col.section}>
              <h4 className="text-xs font-mono tracking-widest uppercase text-gray-600 mb-5">{col.section}</h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    {"external" in item && item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-1 group"
                      >
                        {item.label}
                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <Link href={item.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/[0.05]">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Rolland Muhanguzi. All rights reserved.
          </p>
          <a
            href="/Rolland_Muhanguzi_CV.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-600 hover:text-accent transition-colors underline underline-offset-4"
          >
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}
