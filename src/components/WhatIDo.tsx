"use client";

import { motion } from "framer-motion";
import {
  Code2, Palette, Bot, Settings,
  Globe, Layout, Figma, Layers,
  Cpu, MessageSquare, Zap, Workflow,
  BarChart3, Users, Phone, Mail
} from "lucide-react";

const expertise = [
  {
    category: "Web Development",
    icon: <Code2 size={20} />,
    color: "#10B981",
    tagline: "Full-stack systems built to scale",
    tools: [
      { name: "Next.js", desc: "Full-stack React apps & SaaS", icon: <Globe size={14} /> },
      { name: "React", desc: "Component-driven UIs", icon: <Layout size={14} /> },
      { name: "TypeScript", desc: "Type-safe, reliable code", icon: <Code2 size={14} /> },
      { name: "Supabase", desc: "Auth, DB & storage backends", icon: <Layers size={14} /> },
    ],
  },
  {
    category: "No-Code & Design",
    icon: <Palette size={20} />,
    color: "#6366F1",
    tagline: "Premium design without compromise",
    tools: [
      { name: "Webflow", desc: "Production-grade web design", icon: <Globe size={14} /> },
      { name: "Framer", desc: "Animated & interactive sites", icon: <Zap size={14} /> },
      { name: "Figma", desc: "UI/UX design & prototyping", icon: <Figma size={14} /> },
      { name: "Canva", desc: "Brand assets & marketing", icon: <Palette size={14} /> },
    ],
  },
  {
    category: "AI & Automation",
    icon: <Bot size={20} />,
    color: "#F59E0B",
    tagline: "Systems that work while you sleep",
    tools: [
      { name: "Prompt Engineering", desc: "Structured AI pipelines", icon: <MessageSquare size={14} /> },
      { name: "OpenAI / Claude", desc: "LLM-powered features", icon: <Cpu size={14} /> },
      { name: "n8n", desc: "Workflow automation", icon: <Workflow size={14} /> },
      { name: "AI Chatbots", desc: "24/7 lead qualification", icon: <Bot size={14} /> },
    ],
  },
  {
    category: "Business Systems",
    icon: <Settings size={20} />,
    color: "#EC4899",
    tagline: "End-to-end revenue infrastructure",
    tools: [
      { name: "GoHighLevel", desc: "CRM setup & pipelines", icon: <BarChart3 size={14} /> },
      { name: "CRM Automation", desc: "Follow-up & nurture flows", icon: <Users size={14} /> },
      { name: "Lead Gen Systems", desc: "Outreach that scales", icon: <Mail size={14} /> },
      { name: "WhatsApp Automation", desc: "AI-powered messaging", icon: <Phone size={14} /> },
    ],
  },
];

export default function WhatIDo() {
  return (
    <section className="w-full py-32 px-6 border-t border-white/[0.06] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_100%,rgba(16,185,129,0.04),transparent)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3">
            Full Capabilities
          </p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight">
              What I Do —<br />
              <span className="gradient-text-accent">All of It.</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-md leading-relaxed">
              From design to deployment to automation — I can build, design, and automate your entire digital business.
            </p>
          </div>
        </motion.div>

        {/* Expertise grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertise.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-3xl p-8 relative overflow-hidden card-hover"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${cat.color}08, transparent 70%)` }}
              />

              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}25`, color: cat.color }}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3
                    className="font-display text-lg font-bold"
                    style={{ color: cat.color }}
                  >
                    {cat.category}
                  </h3>
                  <p className="text-gray-600 text-xs">{cat.tagline}</p>
                </div>
              </div>

              {/* Tools list */}
              <div className="grid grid-cols-2 gap-3">
                {cat.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-white/10 transition-colors duration-200 group/tool"
                  >
                    <span
                      className="mt-0.5 flex-shrink-0 opacity-60 group-hover/tool:opacity-100 transition-opacity"
                      style={{ color: cat.color }}
                    >
                      {tool.icon}
                    </span>
                    <div>
                      <p className="text-white text-xs font-semibold leading-tight">{tool.name}</p>
                      <p className="text-gray-600 text-[10px] leading-tight mt-0.5">{tool.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
