"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1 font-display font-bold text-xl tracking-[0.15em] group"
          >
            <span className="text-accent group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] transition-all duration-300">R</span>
            <span className="text-white">M.</span>
          </Link>

          {/* Desktop nav */}
          <nav
            className={`hidden md:flex items-center gap-1 transition-all duration-500 ${
              scrolled ? "glass px-5 py-2.5 rounded-full" : "px-6 py-3"
            }`}
          >
            {navLinks.map(({ label, href }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    active ? "text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a
              href="/Rolland_Muhanguzi_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-accent border border-accent/30 bg-accent/5 hover:bg-accent hover:text-black hover:border-transparent transition-all duration-300 hover:shadow-accent-sm"
            >
              Download CV
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 glass rounded-full"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`font-display text-4xl font-bold transition-colors ${pathname === href ? "text-accent" : "text-gray-400 hover:text-white"}`}
              >
                {label}
              </Link>
            ))}
            <a href="/Rolland_Muhanguzi_CV.pdf" download target="_blank" rel="noopener noreferrer" className="mt-4 px-8 py-3 rounded-full bg-accent text-black font-semibold text-sm">
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
