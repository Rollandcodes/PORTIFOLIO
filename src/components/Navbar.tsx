"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MagneticButton from "./MagneticButton";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
    >
      <Link href="/" className="glass px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer font-bold tracking-widest text-lg hover:text-accent transition-colors">
        <span className="text-accent">R</span>M.
      </Link>

      <nav className="hidden md:flex items-center gap-8 glass px-8 py-3 rounded-full font-medium text-sm text-gray-300">
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className={`hover:text-white transition-colors ${pathname === href ? "text-accent font-semibold" : ""}`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <MagneticButton glow onClick={() => window.open("/cv.pdf", "_blank")} className="px-6 py-2 text-sm !rounded-full">
          Download CV
        </MagneticButton>
      </div>
    </motion.header>
  );
}
