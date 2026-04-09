"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import MagneticButton from "@/components/MagneticButton";

const timeline = [
  {
    year: "2024 – Present",
    role: "Solo Founder",
    company: "CypAI",
    desc: "Building an end-to-end SaaS CRM + AI chatbot platform. Handles lead capture, qualification, and booking automations — all without human input.",
    badge: "Active",
  },
  {
    year: "2023 – 2024",
    role: "AI Automation Dev",
    company: "Freelance",
    desc: "Designed and deployed OpenAI and Claude pipelines for SMB clients. Sales bots, content automation, and CRM integrations.",
    badge: "Completed",
  },
  {
    year: "2022 – 2023",
    role: "Full-Stack Developer",
    company: "Digital Products",
    desc: "Built and launched trading tools, analytics dashboards, and high-converting landing pages for digital product founders.",
    badge: "Completed",
  },
];

const values = [
  { title: "Revenue First", desc: "Every decision I make is filtered through: does this generate or protect revenue?", num: "01" },
  { title: "Ship Fast", desc: "MVPs in days, not months. Then iterate with real user data driving every improvement.", num: "02" },
  { title: "Systems, Not Tasks", desc: "I build things once so they work forever. Automation over repetition, always.", num: "03" },
  { title: "Founder Thinking", desc: "I work like a co-founder — I care about your outcomes, not just your feature list.", num: "04" },
];

export default function About() {
  const router = useRouter();

  return (
    <main className="w-full flex-1 pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">About Me</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              I Build the Systems<br />
              <span className="gradient-text-accent">Businesses Need.</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I&apos;m Rolland — a full-stack developer and AI systems architect. I specialize in turning business problems into automated, revenue-driven solutions.
            </p>
            <p className="text-gray-500 leading-relaxed">
              I don&apos;t just write code. I think like a founder: obsessing over conversion rates, automation leverage, and real-world outcomes. My portfolio isn&apos;t a list of skills — it&apos;s a record of systems that generated real results.
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
              { label: "Lead Systems Built", value: "5+" },
              { label: "AI APIs Integrated", value: "OpenAI, Claude, Whisper" },
              { label: "Current Focus", value: "CypAI SaaS" },
              { label: "Location", value: "Remote / Global" },
              { label: "Status", value: "Open to Projects" },
            ].map((item) => (
              <div key={item.label} className="flex justify-between items-center py-3 border-b border-white/[0.05]">
                <span className="text-gray-500 text-sm">{item.label}</span>
                <span className="text-white text-sm font-medium">{item.value}</span>
              </div>
            ))}

            <div className="mt-6">
              <a
                href="/Rolland_Muhanguzi_CV.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-semibold hover:bg-accent hover:text-black transition-all duration-300 glow-accent-hover"
              >
                Download CV
              </a>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">Experience</p>
          <h2 className="font-display text-4xl font-bold text-white mb-12">Timeline</h2>

          <div className="relative space-y-6">
            {/* Vertical line */}
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
                        {item.role}  <span className="text-gray-500 font-normal">@ {item.company}</span>
                      </h4>
                    </div>
                    <span className={`self-start md:self-auto px-3 py-1 rounded-full text-xs font-medium border ${item.badge === "Active" ? "border-accent/40 text-accent bg-accent/10" : "border-white/10 text-gray-500"}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values */}
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

        {/* CTA */}
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
