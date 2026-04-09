"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, Code2, Cpu, Globe, Rocket } from "lucide-react";
import Link from "next/link";
import Hero3D from "@/components/Hero3D";
import MagneticButton from "@/components/MagneticButton";

const highlights = [
  { title: "CypAI", desc: "SaaS CRM + Automation Platform.", icon: <Bot size={28} className="text-accent"/> },
  { title: "Ostra Clips", desc: "AI video clipping & distribution tool.", icon: <Globe size={28} className="text-accent"/> },
  { title: "PainPointRadar", desc: "AI-driven market research platform.", icon: <Code2 size={28} className="text-accent"/> },
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <main className="relative flex flex-col items-center">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <Hero3D />
        
        <motion.div 
          style={{ y, opacity }}
          className="relative z-20 flex flex-col items-center text-center max-w-5xl px-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-gray-300"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-6 leading-tight drop-shadow-2xl"
          >
            I Build AI Systems That Make Businesses Money <br className="hidden md:block"/> 
            <span className="italic font-serif font-medium text-gray-400">While They Sleep.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl font-light"
          >
            AI SaaS &middot; Automations &middot; High-Converting Websites &middot; Revenue Systems
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/work">
              <MagneticButton glow>
                View My Work <ArrowRight size={18} />
              </MagneticButton>
            </Link>
            <Link href="/contact">
              <MagneticButton>
                Contact Me
              </MagneticButton>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. TRUST / PROOF STRIP */}
      <section className="w-full py-10 bg-white/5 border-y border-white/10 overflow-hidden relative flex flex-col items-center">
        <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-6 drop-shadow-md">Built real systems. Not tutorials.</p>
        <div className="relative w-full max-w-7xl flex overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex space-x-16 items-center px-8">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="flex space-x-16 opacity-50 grayscale hover:grayscale-0 transition duration-500">
                <span className="text-2xl font-bold flex items-center gap-2"><Cpu /> CypAI</span>
                <span className="text-2xl font-bold flex items-center gap-2"><Rocket /> Ostra Clips</span>
                <span className="text-2xl font-bold flex items-center gap-2"><Globe /> PainPointRadar</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROJECT HIGHLIGHTS */}
      <section className="w-full max-w-7xl mx-auto py-32 px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            Featured <span className="text-accent underline decoration-4 underline-offset-8">Work.</span>
          </h2>
          <Link href="/work" className="text-accent font-medium flex items-center gap-2 hover:gap-4 transition-all duration-300 text-lg group">
            See all projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((project, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              key={project.title}
              className="group cursor-pointer glass p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[260px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="z-10 bg-background/50 p-4 rounded-2xl w-max inline-block mb-8">
                {project.icon}
              </div>
              <div className="z-10">
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. BIG CTA */}
      <section className="w-full py-40 px-6 flex flex-col items-center text-center relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent pointer-events-none" />
        
        <h2 className="text-5xl md:text-7xl font-black mb-8 relative z-10 max-w-4xl tracking-tight leading-tight">
          Let&apos;s Build Something That <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-300">Prints Money.</span>
        </h2>
        
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 z-10"
        >
          <MagneticButton glow onClick={() => window.open("https://wa.me/905338425559")}>
            Chat on WhatsApp
          </MagneticButton>
          <Link href="/contact">
            <MagneticButton>
              Send a Message
            </MagneticButton>
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
