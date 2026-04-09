"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, ArrowRight, Send, Clock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import MagneticButton from "@/components/MagneticButton";

const contactLinks = [
  {
    label: "WhatsApp",
    sub: "+90 533 842 5559  ·  Fastest reply",
    href: "https://wa.me/905338425559",
    icon: <MessageCircle size={26} />,
    color: "#22C55E",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
    external: true,
  },
  {
    label: "Email",
    sub: "muhanguzirollands@gmail.com",
    href: "mailto:muhanguzirollands@gmail.com",
    icon: <Mail size={26} />,
    color: "#60A5FA",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.2)",
    external: false,
  },
  {
    label: "LinkedIn",
    sub: "rolland-muhanguzi-507b6136a",
    href: "https://www.linkedin.com/in/rolland-muhanguzi-507b6136a/",
    icon: <Linkedin size={26} />,
    color: "#38BDF8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.2)",
    external: true,
  },
];

type FormState = { name: string; email: string; type: string; message: string };

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", type: "Project", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[${form.type}] Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Hi Rolland,\n\nName: ${form.name}\nEmail: ${form.email}\nType: ${form.type}\n\n${form.message}`);
    window.open(`mailto:muhanguzirollands@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
  };

  return (
    <main className="w-full flex-1 pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-4">Contact</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Let&apos;s Build<br />
            <span className="gradient-text-accent">Something Great.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl font-light leading-relaxed">
            Whether it&apos;s a new AI product, a revenue automation, or a high-converting website — I&apos;m ready to start immediately.
          </p>
        </motion.div>

        {/* Availability strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl px-6 py-4 flex items-center gap-3 mb-12 w-max"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          <span className="text-sm text-gray-300 font-medium">Available for new projects</span>
          <span className="text-gray-600">·</span>
          <Clock size={14} className="text-gray-500" />
          <span className="text-gray-500 text-sm">Usually replies within 24h</span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="md:col-span-2 space-y-4"
          >
            <h2 className="font-display text-xl font-semibold text-white mb-6">Direct Channels</h2>
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl p-5 border transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: c.bg,
                  borderColor: c.border,
                }}
              >
                <div className="flex-shrink-0" style={{ color: c.color }}>{c.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-white text-sm">{c.label}</p>
                  <p className="text-xs text-gray-500 truncate">{c.sub}</p>
                </div>
                <ArrowRight size={16} className="text-gray-600 group-hover:translate-x-1 group-hover:text-white transition-all duration-200 flex-shrink-0" />
              </a>
            ))}

            {/* CV download */}
            <a
              href="/Rolland_Muhanguzi_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl p-5 border border-accent/20 bg-accent/5 hover:bg-accent hover:border-transparent transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex-shrink-0 text-accent group-hover:text-black transition-colors">
                <CheckCircle2 size={26} />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white group-hover:text-black text-sm transition-colors">Download CV</p>
                <p className="text-xs text-gray-500 group-hover:text-black/60 transition-colors">PDF · Rolland Muhanguzi</p>
              </div>
              <ArrowRight size={16} className="text-accent group-hover:text-black group-hover:translate-x-1 transition-all duration-200" />
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="md:col-span-3 glass-strong rounded-3xl p-8 md:p-10"
          >
            {sent ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-16"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-accent" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">You&apos;re in my inbox.</h3>
                <p className="text-gray-500 max-w-xs">I typically reply within 24 hours. Check your email client — it should have opened with the pre-filled message.</p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-accent text-sm underline underline-offset-4 hover:text-white transition-colors"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handle} className="space-y-5">
                <h2 className="font-display text-xl font-semibold text-white mb-6">Send a Message</h2>

                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <label className="text-xs font-medium text-gray-500 mb-2 block tracking-wide uppercase">Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder-gray-700 focus:outline-none focus:border-accent/50 transition-colors text-sm"
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <label className="text-xs font-medium text-gray-500 mb-2 block tracking-wide uppercase">Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder-gray-700 focus:outline-none focus:border-accent/50 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 mb-2 block tracking-wide uppercase">I need…</label>
                  <div className="flex flex-wrap gap-2">
                    {["Project", "Automation", "Consultation", "Hire Me"].map(t => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm({ ...form, type: t })}
                        className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-200 ${form.type === t ? "bg-accent border-accent text-black" : "border-white/10 text-gray-400 hover:border-white/20"}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 mb-2 block tracking-wide uppercase">Tell me more</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project, goals, and timeline..."
                    className="w-full bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white placeholder-gray-700 focus:outline-none focus:border-accent/50 transition-colors text-sm resize-none"
                  />
                </div>

                <MagneticButton glow type="submit" className="w-full justify-center">
                  Send Message <Send size={15} />
                </MagneticButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
