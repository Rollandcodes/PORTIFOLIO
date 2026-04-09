"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Code2, Globe, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";
import MagneticButton from "@/components/MagneticButton";

const projects = [
  { title: "CypAI", desc: "SaaS CRM + Automation Platform. Helping businesses manage leads and automate workflows.", role: "Founder", icon: <Bot size={32} className="text-accent"/> },
  { title: "Ostra Clips", desc: "AI video clipping & distribution tool. Turn long-form podcasts into viral shorts.", role: "Lead Engineer", icon: <Globe size={32} className="text-accent"/> },
  { title: "PainPointRadar", desc: "AI-driven market research platform. Find what customers are complaining about.", role: "Solo Dev", icon: <Code2 size={32} className="text-accent"/> },
  { title: "AI Sales Reps", desc: "Custom conversational AI agents integrated with Twilio and WhatsApp to capture and qualify leads 24/7.", role: "Automation Architect", icon: <Rocket size={32} className="text-accent"/> },
];

export default function Work() {
  const router = useRouter();

  return (
    <main className="w-full flex-1 pt-32 pb-24 px-6 flex flex-col items-center min-h-screen">
      <div className="w-full max-w-7xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6 text-white"
        >
          Featured <span className="text-accent underline decoration-4 underline-offset-8">Work.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-16 max-w-2xl font-light"
        >
          A selection of platforms, SaaS applications, and AI automations I've engineered to generate revenue and save time.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              whileHover={{ y: -10 }}
              key={project.title}
              className="group cursor-default glass p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[350px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="z-10 bg-background/50 p-4 rounded-2xl w-max inline-block mb-8">
                {project.icon}
              </div>
              <div className="z-10 mt-auto">
                <p className="text-accent text-sm font-mono mb-3">{project.role}</p>
                <h3 className="text-3xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row items-center justify-between glass p-10 rounded-3xl border border-white/5"
        >
          <div className="mb-8 md:mb-0 text-center md:text-left">
             <h3 className="text-3xl font-bold mb-2">Have a project in mind?</h3>
             <p className="text-gray-400">Let's build a system that works for you round the clock.</p>
          </div>
          <div className="flex w-full md:w-auto justify-center">
             <MagneticButton glow onClick={() => router.push('/contact')}>
               Let's Talk <ArrowRight size={18} />
             </MagneticButton>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
