"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, Code2, Cpu, Globe, Rocket } from "lucide-react";
import Hero3D from "@/components/Hero3D";
import MagneticButton from "@/components/MagneticButton";

const projects = [
  { title: "CypAI", desc: "SaaS CRM + Automation Platform.", role: "Founder", icon: <Bot size={32} className="text-accent"/> },
  { title: "Ostra Clips", desc: "AI video clipping & distribution tool.", role: "Lead Engineer", icon: <Globe size={32} className="text-accent"/> },
  { title: "PainPointRadar", desc: "AI-driven market research platform.", role: "Solo Dev", icon: <Code2 size={32} className="text-accent"/> },
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
            <MagneticButton glow onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
              View My Work <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton onClick={() => window.open("mailto:muhanguzirollands@gmail.com")}>
              Contact Me
            </MagneticButton>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. TRUST / PROOF STRIP */}
      <section className="w-full py-10 bg-white/5 border-y border-white/10 overflow-hidden relative flex flex-col items-center">
        <p className="text-gray-500 text-sm font-semibold tracking-widest uppercase mb-6 drop-shadow-md">Built real systems. Not tutorials.</p>
        <div className="relative w-full max-w-7xl flex overflow-hidden">
          <div className="animate-marquee whitespace-nowrap flex space-x-16 items-center px-8">
            {/* Repeated mapping for infinite effect */}
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

      {/* 3. PROJECTS SHOWCASE */}
      <section id="projects" className="w-full max-w-7xl mx-auto py-32 px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold mb-16 text-white"
        >
          Featured <span className="text-accent underline decoration-4 underline-offset-8">Work.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              key={project.title}
              className="group cursor-pointer glass p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[300px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="z-10 bg-background/50 p-4 rounded-2xl w-max inline-block mb-8">
                {project.icon}
              </div>
              <div className="z-10">
                <p className="text-accent text-sm font-mono mb-2">{project.role}</p>
                <h3 className="text-3xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. EXPERIENCE TIMELINE & HOW I THINK */}
      <section className="w-full py-32 px-6 bg-gradient-to-b from-transparent to-[#0A0A0A] relative border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How I Think</h2>
          <p className="text-gray-400 text-xl">Problem &rarr; System &rarr; Automation &rarr; Revenue</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          
          <div className="space-y-12 relative">
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10" />
            
            {[
              { year: "2024", role: "Solo Founder", company: "CypAI", desc: "Built end-to-end SaaS CRM and Chatbot automation systems." },
              { year: "2023", role: "AI Automation Dev", company: "Freelance", desc: "Implemented OpenAI/Claude pipelines for rapid business scaling." },
              { year: "2022", role: "Full-Stack Dev", company: "Digital Products", desc: "Created and launched trading tools and dynamic websites." },
            ].map((exp, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                key={exp.year} 
                className="relative pl-16 group"
              >
                <div className="absolute left-[20px] top-1.5 w-3 h-3 rounded-full bg-white/20 border-2 border-background group-hover:bg-accent group-hover:shadow-[0_0_10px_#10B981] transition-all duration-300" />
                <span className="text-accent font-mono text-sm">{exp.year}</span>
                <h4 className="text-2xl font-bold">{exp.role} @ {exp.company}</h4>
                <p className="text-gray-400 mt-2">{exp.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="glass rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">Core Stack</h3>
            <div className="flex flex-wrap gap-3">
              {["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Supabase", "Vercel", "OpenAI API", "n8n"].map(skill => (
                <span key={skill} className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-accent hover:text-accent transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BIG CTA */}
      <section className="w-full py-40 px-6 flex flex-col items-center text-center relative overflow-hidden bg-black border-t border-white/5">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/40 via-transparent to-transparent pointer-events-none" />
        
        <h2 className="text-5xl md:text-7xl font-black mb-8 relative z-10 max-w-4xl tracking-tight leading-tight">
          Let’s Build Something That <br className="hidden md:block"/> 
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
          <MagneticButton onClick={() => window.open("mailto:muhanguzirollands@gmail.com")}>
            Email Me Instead
          </MagneticButton>
        </motion.div>
      </section>

    </main>
  );
}
