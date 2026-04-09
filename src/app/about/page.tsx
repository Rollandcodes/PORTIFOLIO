"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import MagneticButton from "@/components/MagneticButton";

export default function About() {
  const router = useRouter();

  return (
    <main className="w-full flex-1 pt-32 pb-24 px-6 flex flex-col items-center min-h-screen">
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center md:text-left mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 text-white"
          >
            How I <span className="text-accent underline decoration-4 underline-offset-8">Think.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 font-light"
          >
            Problem &rarr; System &rarr; Automation &rarr; <span className="text-accent font-semibold">Revenue</span>
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative">
          
          <div className="space-y-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-2 bottom-2 w-[2px] bg-white/10" />
            
            {[
              { year: "2024 - Present", role: "Solo Founder", company: "CypAI", desc: "Building an end-to-end SaaS CRM and Chatbot automation platform to help businesses manage and close leads autonomously." },
              { year: "2023 - 2024", role: "AI Automation Dev", company: "Freelance", desc: "Designed and implemented seamless OpenAI/Claude pipelines for rapid business scaling and lead qualification." },
              { year: "2022 - 2023", role: "Full-Stack Dev", company: "Digital Products", desc: "Created, tested, and launched various digital trading tools and highly dynamic modern web applications." },
            ].map((exp, i) => (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + (i * 0.2) }}
                key={exp.year} 
                className="relative pl-16 group"
              >
                <div className="absolute left-[20px] top-1.5 w-3 h-3 rounded-full bg-white/20 border-2 border-background group-hover:bg-accent group-hover:shadow-[0_0_10px_#10B981] transition-all duration-300" />
                <span className="text-accent font-mono text-sm">{exp.year}</span>
                <h4 className="text-2xl font-bold mt-1">{exp.role} @ {exp.company}</h4>
                <p className="text-gray-400 mt-3 leading-relaxed">{exp.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 sticky top-32">
              <h3 className="text-2xl font-bold mb-6 border-b border-white/10 pb-4">My Core Stack</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                I don't just write code; I select the best tools to build reliable, high-performance systems and automations that scale effortlessly.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js", "Supabase", "Vercel", "OpenAI API", "n8n", "Node.js"].map(skill => (
                  <span key={skill} className="px-4 py-2 rounded-full border border-white/10 text-gray-300 bg-white/5 hover:border-accent hover:text-accent transition-colors cursor-default text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>

              <MagneticButton onClick={() => router.push('/work')} className="w-full">
                See What I've Built
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
