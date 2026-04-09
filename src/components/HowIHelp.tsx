"use client";

import { motion } from "framer-motion";
import { Globe, Workflow, Bot, BarChart3, FileText, Zap } from "lucide-react";

const services = [
  {
    icon: <Globe size={22} />,
    title: "Website Design & Dev",
    tools: "Webflow · Framer · Next.js",
    desc: "Premium websites that convert visitors into leads. Built on Webflow or Framer for fast delivery, or custom Next.js for full-stack power.",
    color: "#10B981",
    result: "3–5× more leads from organic traffic",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "CRM & GoHighLevel Setup",
    tools: "GoHighLevel · Make · Zapier",
    desc: "Complete CRM configuration with pipelines, automated follow-up sequences, appointment booking, and reputation management — all connected.",
    color: "#6366F1",
    result: "40% increase in qualified bookings",
  },
  {
    icon: <Workflow size={22} />,
    title: "Automation Systems",
    tools: "n8n · Make.com · Webhooks",
    desc: "End-to-end automation workflows that eliminate manual work. Lead routing, email sequences, data sync, reporting — all on autopilot.",
    color: "#F59E0B",
    result: "10–30 hours/week saved per client",
  },
  {
    icon: <Bot size={22} />,
    title: "AI Chatbot Integration",
    tools: "OpenAI · Claude · WhatsApp API",
    desc: "Conversational AI agents deployed on your website, WhatsApp, or CRM. Qualifies leads, answers questions, and books calls around the clock.",
    color: "#EC4899",
    result: "24/7 lead qualification with 0 staff",
  },
  {
    icon: <FileText size={22} />,
    title: "Landing Pages That Convert",
    tools: "Webflow · Framer · Next.js",
    desc: "High-converting landing pages designed around your offer. Copywriting, design, and CRO built-in from day one — not bolted on after.",
    color: "#8B5CF6",
    result: "2–4× conversion rate vs templates",
  },
  {
    icon: <Zap size={22} />,
    title: "Full Business Stacks",
    tools: "End-to-end custom build",
    desc: "Website → CRM → Automation → AI. Full digital infrastructure built from scratch so every system talks to every other system.",
    color: "#06B6D4",
    result: "Complete revenue system in 30 days",
  },
];

export default function HowIHelp() {
  return (
    <section className="w-full py-32 px-6 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3">
            Services
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
              How I Help<br />
              <span className="gradient-text-accent">Businesses Grow.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-sm leading-relaxed">
              Every service below is focused on one outcome: more revenue with less manual work.
            </p>
          </div>
        </motion.div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass rounded-3xl p-7 relative overflow-hidden card-hover flex flex-col"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at bottom left, ${s.color}08, transparent 70%)` }}
              />

              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                style={{ background: `${s.color}12`, border: `1px solid ${s.color}25`, color: s.color }}
              >
                {s.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-bold text-white mb-1.5 group-hover:text-white transition-colors">
                {s.title}
              </h3>
              <p className="text-xs font-mono tracking-widest mb-3" style={{ color: s.color }}>
                {s.tools}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                {s.desc}
              </p>

              {/* Result pill */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium self-start"
                style={{ background: `${s.color}10`, border: `1px solid ${s.color}25`, color: s.color }}
              >
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: s.color }} />
                {s.result}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
