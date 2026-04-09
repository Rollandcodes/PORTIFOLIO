"use client";

import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
    >
      <div className="glass px-6 py-3 rounded-full flex items-center gap-2 cursor-pointer font-bold tracking-widest text-lg" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        <span className="text-accent">R</span>M.
      </div>

      <nav className="hidden md:flex items-center gap-8 glass px-8 py-3 rounded-full font-medium text-sm text-gray-300">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-white transition-colors">Home</button>
        <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="hover:text-white transition-colors">Work</button>
        <button onClick={() => window.open("mailto:muhanguzirollands@gmail.com")} className="hover:text-white transition-colors">Contact</button>
      </nav>

      <div className="flex items-center gap-4">
        <MagneticButton glow onClick={() => window.open("/cv.pdf", "_blank")} className="px-6 py-2 text-sm !rounded-full">
          Download CV
        </MagneticButton>
      </div>
    </motion.header>
  );
}
