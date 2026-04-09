"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Bot, Globe, Code2, Rocket, X, ExternalLink } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const projects = [
  {
    id: "cypai",
    title: "CypAI",
    role: "Founder & Full-Stack Engineer",
    icon: <Bot size={32} className="text-accent" />,
    tags: ["Next.js 14", "Supabase", "OpenAI", "TypeScript", "n8n"],
    problem: "Businesses were losing leads because their sales processes were entirely manual — no follow-up automation, no AI qualification, no 24/7 coverage.",
    solution: "Built a full SaaS CRM with an embedded AI chatbot that qualifies leads, books calls, and pushes data directly into pipelines — all without human intervention.",
    outcome: "First paying customers acquired within 3 months. System handles 73+ lead outreach sequences autonomously.",
    color: "#10B981",
  },
  {
    id: "ostra",
    title: "Ostra Clips",
    role: "Lead Engineer",
    icon: <Globe size={32} className="text-accent" />,
    tags: ["Python", "Whisper AI", "FFmpeg", "React", "Vercel"],
    problem: "Content creators and brands were spending 4-8 hours per week manually cutting podcasts and long-form videos into short-form clips.",
    solution: "AI pipeline that ingests a long video, uses Whisper to transcribe it, identifies peak engagement moments, and auto-exports platform-ready clips with captions.",
    outcome: "Reduced video editing time by 80%. Clips distributed across TikTok, Instagram Reels, and YouTube Shorts automatically.",
    color: "#6366F1",
  },
  {
    id: "painpoint",
    title: "PainPointRadar",
    role: "Solo Developer",
    icon: <Code2 size={32} className="text-accent" />,
    tags: ["Next.js", "Claude API", "Reddit API", "TypeScript", "n8n"],
    problem: "Founders and marketers had no scalable way to discover what their target audience was actually complaining about online.",
    solution: "Built an AI research tool that scrapes Reddit, Quora, and forums, then uses Claude to synthesize and rank the top customer pain points by frequency and emotional intensity.",
    outcome: "Used internally to validate all three products before building. Saves 20+ hours of customer research per project.",
    color: "#F59E0B",
  },
  {
    id: "automation",
    title: "AI Sales Automation",
    role: "Automation Architect",
    icon: <Rocket size={32} className="text-accent" />,
    tags: ["n8n", "Twilio", "WhatsApp API", "OpenAI", "Make.com"],
    problem: "SMBs couldn't afford a full-time sales team but were losing high-intent customers who messaged after hours.",
    solution: "Custom AI agent deployed on WhatsApp via Twilio. Qualifies leads with NLP, answers product questions, and books calls — 24/7 with human handoff triggers.",
    outcome: "Deployed for 3 clients. Average 40% increase in qualified bookings from initial contact to call scheduled.",
    color: "#EC4899",
  },
];

const skillCategories = [
  {
    cat: "Frontend",
    skills: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    cat: "Backend",
    skills: ["Node.js", "Supabase", "PostgreSQL", "REST APIs", "Webhooks"],
  },
  {
    cat: "AI & ML",
    skills: ["OpenAI API", "Claude API", "Whisper", "LangChain", "Vector DBs"],
  },
  {
    cat: "Automation",
    skills: ["n8n", "Make.com", "Zapier", "Twilio", "WhatsApp API"],
  },
];

type Project = typeof projects[0];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative glass-strong rounded-3xl p-8 md:p-12 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
          style={{ boxShadow: `0 20px 80px ${project.color}20, 0 0 0 1px ${project.color}20` }}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>

          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 rounded-2xl" style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}>
              {project.icon}
            </div>
            <div>
              <p className="text-xs font-mono tracking-widest uppercase mb-1" style={{ color: project.color }}>{project.role}</p>
              <h2 className="font-display text-3xl font-bold text-white">{project.title}</h2>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-5">
              <h4 className="text-xs font-mono tracking-widest uppercase text-red-400 mb-2">The Problem</h4>
              <p className="text-gray-300 leading-relaxed">{project.problem}</p>
            </div>
            <div className="glass rounded-2xl p-5">
              <h4 className="text-xs font-mono tracking-widest uppercase text-blue-400 mb-2">The Solution</h4>
              <p className="text-gray-300 leading-relaxed">{project.solution}</p>
            </div>
            <div className="glass rounded-2xl p-5" style={{ borderColor: `${project.color}30` }}>
              <h4 className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: project.color }}>The Outcome</h4>
              <p className="text-gray-300 leading-relaxed font-medium">{project.outcome}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.tags.map(t => (
              <span key={t} className="px-3 py-1.5 rounded-full text-xs border border-white/10 text-gray-400 bg-white/5">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Work() {
  const router = useRouter();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <main className="w-full flex-1 pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">Portfolio</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Real Systems,<br />
            <span className="gradient-text-accent">Real Results.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Every product here solved a real problem and generated measurable output. Click any card to see the full breakdown.
          </p>
        </motion.div>

        {/* Project cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1 }}
              onClick={() => setActiveProject(p)}
              className="group glass ring-hover rounded-3xl p-8 relative overflow-hidden card-hover cursor-pointer shimmer"
              style={{ "--hover-color": p.color } as React.CSSProperties}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `${p.color}15` }}
              />

              <div className="flex items-start justify-between mb-6">
                <div className="p-3 rounded-2xl" style={{ background: `${p.color}10`, border: `1px solid ${p.color}20` }}>
                  {p.icon}
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-xs text-gray-500">
                  <ExternalLink size={14} /> View case
                </div>
              </div>

              <p className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: p.color }}>{p.role}</p>
              <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">{p.problem}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map(t => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs border border-white/10 text-gray-600">
                    {t}
                  </span>
                ))}
                {p.tags.length > 3 && (
                  <span className="px-3 py-1 rounded-full text-xs border border-white/10 text-gray-600">
                    +{p.tags.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">Tools of the Trade</p>
          <h2 className="font-display text-4xl font-bold text-white mb-12">My Stack</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.cat}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-5 group hover:border-accent/20 transition-all duration-300"
            >
              <h4 className="text-xs font-mono tracking-widest uppercase text-accent mb-4">{cat.cat}</h4>
              <ul className="space-y-2">
                {cat.skills.map(s => (
                  <li key={s} className="text-gray-400 text-sm flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/40 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(16,185,129,0.05),transparent)] pointer-events-none" />
          <div>
            <h3 className="font-display text-3xl font-bold text-white mb-2">Have a project in mind?</h3>
            <p className="text-gray-500">Let&apos;s build a system that works for you round the clock.</p>
          </div>
          <MagneticButton glow onClick={() => router.push("/contact")} className="whitespace-nowrap flex-shrink-0">
            Let&apos;s Talk <ArrowRight size={17} />
          </MagneticButton>
        </motion.div>

      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </main>
  );
}
