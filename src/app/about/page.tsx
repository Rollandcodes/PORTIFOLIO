"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import MagneticButton from "@/components/MagneticButton";
import { GraduationCap, BookOpen, Lightbulb, Award } from "lucide-react";

const timeline = [
  {
    year: "2024 – Present",
    role: "Solo Founder",
    company: "CypAI",
    desc: "Building an end-to-end SaaS CRM + AI chatbot platform. Handles lead capture, qualification, and booking automations — all without human input.",
    badge: "Active",
    tools: ["Next.js", "Supabase", "OpenAI", "n8n"],
  },
  {
    year: "2023 – 2024",
    role: "AI & Automation Specialist",
    company: "Freelance",
    desc: "Designed Webflow & Framer websites, deployed OpenAI/Claude pipelines, and set up GoHighLevel CRMs for SMB clients globally.",
    badge: "Completed",
    tools: ["Webflow", "Framer", "GoHighLevel", "Claude"],
  },
  {
    year: "2022 – 2023",
    role: "Full-Stack Developer",
    company: "Digital Products",
    desc: "Built trading tools, analytics dashboards, and high-converting Webflow landing pages for digital product founders and SaaS startups.",
    badge: "Completed",
    tools: ["React", "Webflow", "Figma", "Canva"],
  },
];

const values = [
  { title: "Revenue First", desc: "Every decision I make is filtered through: does this generate or protect revenue?", num: "01" },
  { title: "Ship Fast", desc: "MVPs in days, not months. Then iterate with real user data driving every improvement.", num: "02" },
  { title: "Systems, Not Tasks", desc: "I build things once so they work forever. Automation over repetition, always.", num: "03" },
  { title: "Founder Thinking", desc: "I work like a co-founder — I care about your outcomes, not just your feature list.", num: "04" },
];

const skillGroups = [
  {
    label: "Development",
    color: "#10B981",
    skills: ["Next.js", "React", "TypeScript", "Node.js", "Supabase", "PostgreSQL"],
  },
  {
    label: "Design & No-Code",
    color: "#6366F1",
    skills: ["Webflow", "Framer", "Figma", "Canva", "UI/UX Design", "Wireframing"],
  },
  {
    label: "AI & Automation",
    color: "#F59E0B",
    skills: ["OpenAI API", "Claude API", "Prompt Engineering", "n8n", "Make.com", "Whisper AI"],
  },
  {
    label: "Business Tools",
    color: "#EC4899",
    skills: ["GoHighLevel", "CRM Setup", "WhatsApp API", "Lead Gen", "Twilio", "Zapier"],
  },
];

export default function About() {
  const router = useRouter();

  return (
    <main className="w-full flex-1 pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* ─── HEADER ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">About Me</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              I Build, Design &<br />
              <span className="gradient-text-accent">Automate Everything.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-4">
              I&apos;m Rolland — an AI product builder, full-stack developer, and automation specialist. I work with Webflow, Framer, Next.js, GoHighLevel, and AI APIs to build complete digital systems for businesses.
            </p>
            <p className="text-gray-500 leading-relaxed">
              I don&apos;t just write code or design pages in isolation. I think in complete systems: website → CRM → automation → AI. Every piece connected, every step generating measurable output.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-strong rounded-3xl p-8"
          >
            <h3 className="font-display text-lg font-semibold text-white mb-6 pb-4 border-b border-white/10">Quick Stats</h3>
            {[
              { label: "Products Shipped", value: "3+" },
              { label: "Design Tools", value: "Webflow, Framer, Figma, Canva" },
              { label: "AI APIs Integrated", value: "OpenAI, Claude, Whisper" },
              { label: "Business Systems", value: "GoHighLevel, n8n, Make" },
              { label: "Current Focus", value: "CypAI SaaS" },
              { label: "Status", value: "Open to Projects" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/[0.05]">
                <span className="text-gray-500 text-sm">{item.label}</span>
                <span className="text-white text-sm font-medium text-right max-w-[55%]">{item.value}</span>
              </div>
            ))}

            <div className="mt-6">
              <a
                href="/Rolland_Muhanguzi_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold hover:bg-accent hover:text-black transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* ─── EXPERIENCE TIMELINE ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">Experience</p>
          <h2 className="font-display text-4xl font-bold text-white mb-12">Timeline</h2>

          <div className="relative space-y-6">
            <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-accent/40 via-white/10 to-transparent" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative pl-16 group"
              >
                <div className="absolute left-[22px] top-2.5 w-2.5 h-2.5 rounded-full bg-background border-2 border-white/20 group-hover:border-accent group-hover:shadow-accent-sm transition-all duration-300" />
                <div className="glass rounded-2xl p-6 group-hover:border-white/15 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-accent font-mono text-xs tracking-widest">{item.year}</span>
                      <h4 className="font-display text-xl font-bold text-white mt-1">
                        {item.role} <span className="text-gray-500 font-normal">@ {item.company}</span>
                      </h4>
                    </div>
                    <span className={`self-start md:self-auto px-3 py-1 rounded-full text-xs font-medium border ${item.badge === "Active" ? "border-accent/40 text-accent bg-accent/10" : "border-white/10 text-gray-500"}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map(tool => (
                      <span key={tool} className="px-2.5 py-1 rounded-full text-xs border border-white/10 text-gray-600">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── EDUCATION ────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">Education</p>
          <h2 className="font-display text-4xl font-bold text-white mb-10">Academic Background</h2>

          <div className="glass rounded-3xl p-8 md:p-10 group hover:border-white/15 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row gap-8">
              {/* Degree block */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <GraduationCap size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-accent text-xs font-mono tracking-widest uppercase">2022 – Present</p>
                    <p className="text-gray-500 text-xs">In Progress</p>
                  </div>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-1">
                  BSc Information Systems & Technologies
                </h3>
                <p className="text-gray-400 text-lg mb-6">European University of Lefke</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <BookOpen size={15} className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-gray-500 text-sm leading-relaxed">
                      <span className="text-gray-300 font-medium">Relevant Coursework: </span>
                      Database Systems, Software Engineering, AI Fundamentals, Web Technologies, Systems Analysis & Design, Network Infrastructure
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Lightbulb size={15} className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-gray-500 text-sm leading-relaxed">
                      <span className="text-gray-300 font-medium">Applied Learning: </span>
                      Built CypAI, PainPointRadar, and Ostra Clips while studying — applying academic theory directly to real-world product development and client work.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award size={15} className="text-accent flex-shrink-0 mt-0.5" />
                    <p className="text-gray-500 text-sm leading-relaxed">
                      <span className="text-gray-300 font-medium">Key Focus: </span>
                      Bridges information systems theory with practical AI tools and automation — building the technical foundation that underpins every client project.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mini stats */}
              <div className="flex flex-row md:flex-col gap-4 md:w-48">
                {[
                  { label: "Year", value: "3rd Year" },
                  { label: "Mode", value: "Full-Time" },
                  { label: "Location", value: "Lefke, Cyprus" },
                ].map(item => (
                  <div key={item.label} className="glass rounded-2xl p-4 text-center flex-1 md:flex-none">
                    <div className="text-white font-display font-bold text-lg">{item.value}</div>
                    <div className="text-gray-600 text-xs mt-0.5">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* ─── SKILLS ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">Toolkit</p>
          <h2 className="font-display text-4xl font-bold text-white mb-12">Skills & Tools</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillGroups.map((group, i) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 group hover:border-white/15 transition-all duration-300 relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at top left, ${group.color}07, transparent 60%)` }}
                />
                <h4
                  className="text-xs font-mono tracking-widest uppercase mb-5 font-semibold"
                  style={{ color: group.color }}
                >
                  {group.label}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 hover:scale-105 cursor-default"
                      style={{
                        background: `${group.color}08`,
                        borderColor: `${group.color}25`,
                        color: "#d1d5db",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── VALUES ──────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">How I Operate</p>
          <h2 className="font-display text-4xl font-bold text-white mb-12">My Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 group hover:border-accent/20 card-hover"
              >
                <span className="text-gray-800 font-display font-bold text-4xl block mb-4">{v.num}</span>
                <h4 className="font-display text-lg font-bold text-white mb-2 group-hover:text-accent transition-colors">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ─── CTA ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <MagneticButton glow onClick={() => router.push("/contact")} className="mx-auto">
            Work With Me
          </MagneticButton>
        </motion.div>

      </div>
    </main>
  );
}
