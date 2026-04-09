"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Bot, Globe, Code2, Cpu, Rocket, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/MagneticButton";

const Hero3D = dynamic(() => import("@/components/Hero3D"), { ssr: false });

const stats = [
  { value: "3", label: "Revenue-generating products", icon: <Rocket size={16} className="text-accent" /> },
  { value: "3mo", label: "To acquire first paying users", icon: <TrendingUp size={16} className="text-accent" /> },
  { value: "73+", label: "Automated lead system outreach", icon: <Zap size={16} className="text-accent" /> },
  { value: "Live", label: "SaaS systems in production now", icon: <Cpu size={16} className="text-accent" /> },
];

const projects = [
  {
    title: "CypAI",
    role: "Founder",
    icon: <Bot size={28} className="text-accent" />,
    desc: "SaaS CRM + Automation Platform.",
    tags: ["Next.js", "OpenAI", "Supabase"],
  },
  {
    title: "Ostra Clips",
    role: "Lead Engineer",
    icon: <Globe size={28} className="text-accent" />,
    desc: "AI video clipping & distribution tool.",
    tags: ["AI", "Automation", "React"],
  },
  {
    title: "PainPointRadar",
    role: "Solo Dev",
    icon: <Code2 size={28} className="text-accent" />,
    desc: "AI-driven market research platform.",
    tags: ["LLM", "Next.js", "n8n"],
  },
];

// Floating dashboard card shown in the hero
function FloatingDashCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="absolute bottom-16 right-4 md:right-16 z-20 w-56 md:w-72 glass-strong rounded-2xl p-4 shadow-card-hover"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
        <span className="text-xs font-semibold text-gray-300 tracking-widest uppercase">Live Revenue</span>
      </div>
      <div className="text-3xl font-display font-bold text-white mb-1">$12,480</div>
      <div className="flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full w-[73%] bg-gradient-to-r from-accent to-emerald-400 rounded-full" />
        </div>
        <span className="text-xs text-accent font-semibold">+24%</span>
      </div>
    </motion.div>
  );
}

function FloatingChatCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.7, duration: 0.8 }}
      className="absolute top-32 right-4 md:right-24 z-20 w-52 md:w-64 glass-strong rounded-2xl p-4"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
          <Bot size={12} className="text-accent" />
        </div>
        <span className="text-xs text-gray-400 font-medium">AI Sales Agent</span>
        <span className="ml-auto w-1.5 h-1.5 rounded-full bg-accent pulse-dot" />
      </div>
      <div className="space-y-2">
        <div className="bg-white/5 rounded-xl rounded-tl-none px-3 py-2 text-xs text-gray-300 max-w-[90%]">
          Hey! I noticed you're looking for automation help 👋
        </div>
        <div className="bg-accent/10 border border-accent/20 rounded-xl rounded-tr-none px-3 py-2 text-xs text-accent ml-auto max-w-[80%]">
          Yes! Schedule a call?
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <main className="relative flex flex-col items-center overflow-x-hidden">

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
        <Hero3D />

        {/* Radial glow behind headline */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(16,185,129,0.08),transparent)] pointer-events-none z-10" />

        {/* Floating UI elements */}
        <FloatingChatCard />
        <FloatingDashCard />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-20 flex flex-col items-center text-center max-w-5xl px-6"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass text-sm font-medium text-gray-300 border border-accent/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for new projects · Founder @ CypAI
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.05]"
          >
            <span className="text-white">I Build AI Systems</span>
            <br />
            <span className="text-white">That Make Businesses</span>
            <br />
            <span className="gradient-text-accent">Money While They Sleep.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-light tracking-wide"
          >
            AI SaaS &nbsp;·&nbsp; Automation Systems &nbsp;·&nbsp; Revenue Infrastructure
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/work">
              <MagneticButton glow>
                View Projects <ArrowRight size={17} />
              </MagneticButton>
            </Link>
            <MagneticButton onClick={() => window.open("https://wa.me/905338425559")}>
              Contact on WhatsApp
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-600 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-accent/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── TRUST STRIP ──────────────────────────────────────────── */}
      <section className="w-full py-16 border-y border-white/[0.06] bg-white/[0.015] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 text-xs font-semibold tracking-[0.3em] uppercase mb-10">
            Results. Not Just Experience.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-5 text-center group hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-2">{s.icon}</div>
                <div className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{s.value}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROJECTS PREVIEW ─────────────────────────────────────── */}
      <section className="w-full max-w-7xl mx-auto py-32 px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3">Selected Work</p>
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white">
              Real Systems,<br />
              <span className="gradient-text-accent">Real Results.</span>
            </h2>
          </div>
          <Link href="/work" className="group inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors text-sm font-medium">
            View all projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group glass ring-hover rounded-3xl p-8 relative overflow-hidden card-hover shimmer cursor-default"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent/[0.04] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="mb-6 p-3 bg-accent/10 rounded-2xl w-max">{p.icon}</div>
              <p className="text-accent text-xs font-mono tracking-widest uppercase mb-2">{p.role}</p>
              <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-300">{p.title}</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs border border-white/10 text-gray-500 group-hover:border-accent/30 group-hover:text-gray-400 transition-all">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── HOW I THINK ──────────────────────────────────────────── */}
      <section className="w-full py-32 px-6 border-t border-white/[0.06] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.04),transparent)] pointer-events-none" />
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3">My Process</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">How I Think</h2>
            <p className="text-gray-500 text-lg">Every project follows one objective: Revenue.</p>
          </motion.div>

          {/* Flow diagram */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 relative">
            {[
              { step: "01", label: "Problem", desc: "Identify the exact bottleneck costing the business money or time." },
              { step: "02", label: "System", desc: "Design an automated system architecture tailored to fix it." },
              { step: "03", label: "Automation", desc: "Build and deploy using AI + no-code + custom code pipelines." },
              { step: "04", label: "Revenue", desc: "Measure, optimize, and scale toward measurable output." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative flex flex-col items-start md:items-center text-center"
              >
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-accent/30 to-transparent" />
                )}
                <div className="glass rounded-2xl p-6 w-full group hover:border-accent/30 transition-all duration-300">
                  <div className="text-accent font-mono text-xs mb-3">{item.step}</div>
                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{item.label}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MARQUEE ──────────────────────────────────────────────── */}
      <section className="w-full py-8 border-y border-white/[0.06] overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-16 px-8">
          {[...Array(3)].map((_, gi) => (
            <div key={gi} className="flex items-center gap-16 text-gray-700">
              <span className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap"><Cpu size={14} /> CypAI SaaS</span>
              <span className="text-gray-800">✦</span>
              <span className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap"><Rocket size={14} /> Ostra Clips</span>
              <span className="text-gray-800">✦</span>
              <span className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap"><Zap size={14} /> PainPointRadar</span>
              <span className="text-gray-800">✦</span>
              <span className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap"><Bot size={14} /> AI Automations</span>
              <span className="text-gray-800">✦</span>
              <span className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap"><Globe size={14} /> SMB Web Systems</span>
              <span className="text-gray-800">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="w-full py-40 px-6 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(16,185,129,0.07),transparent)] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-accent/[0.06] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-accent/[0.08] pointer-events-none" />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-accent text-sm font-mono tracking-widest uppercase mb-6"
        >
          Let's Build Together
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl font-bold text-white mb-6 max-w-3xl leading-tight relative z-10"
        >
          Let's Build Something That{" "}
          <span className="gradient-text-accent">Prints Money.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-gray-500 text-lg mb-12 max-w-xl relative z-10"
        >
          Whether you need an AI automation, a SaaS product, or a site that converts — I&apos;ll build it to generate real ROI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 z-10"
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
