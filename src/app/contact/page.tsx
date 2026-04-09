"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, ArrowRight, Send } from "lucide-react";
import { useState } from "react";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:muhanguzirollands@gmail.com?subject=${subject}&body=${body}`);
    setSubmitted(true);
  };

  return (
    <main className="w-full flex-1 pt-32 pb-24 px-6 flex flex-col items-center min-h-screen">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white">
            Let&apos;s <span className="text-accent underline decoration-4 underline-offset-8">Connect.</span>
          </h1>
          <p className="text-xl text-gray-400 font-light max-w-2xl">
            Ready to build something that generates real revenue? Drop me a message
            and I&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Left: Direct Contact Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
            className="md:col-span-2 flex flex-col gap-5"
          >
            <h2 className="text-2xl font-bold text-white mb-2">Direct Links</h2>

            <a
              href="https://wa.me/905338425559"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 glass p-6 rounded-2xl hover:border-accent border border-transparent transition-all duration-300"
            >
              <div className="bg-green-500/10 p-3 rounded-xl group-hover:bg-green-500/20 transition-colors">
                <MessageCircle size={28} className="text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-white">WhatsApp</p>
                <p className="text-gray-400 text-sm">Chat directly, fastest reply</p>
              </div>
              <ArrowRight size={18} className="ml-auto text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" />
            </a>

            <a
              href="mailto:muhanguzirollands@gmail.com"
              className="group flex items-center gap-5 glass p-6 rounded-2xl hover:border-accent border border-transparent transition-all duration-300"
            >
              <div className="bg-blue-500/10 p-3 rounded-xl group-hover:bg-blue-500/20 transition-colors">
                <Mail size={28} className="text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-gray-400 text-sm">muhanguzirollands@gmail.com</p>
              </div>
              <ArrowRight size={18} className="ml-auto text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" />
            </a>

            <a
              href="https://www.linkedin.com/in/rolland-muhanguzi-507b6136a/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 glass p-6 rounded-2xl hover:border-accent border border-transparent transition-all duration-300"
            >
              <div className="bg-sky-500/10 p-3 rounded-xl group-hover:bg-sky-500/20 transition-colors">
                <Linkedin size={28} className="text-sky-400" />
              </div>
              <div>
                <p className="font-semibold text-white">LinkedIn</p>
                <p className="text-gray-400 text-sm">Connect professionally</p>
              </div>
              <ArrowRight size={18} className="ml-auto text-gray-500 group-hover:text-accent group-hover:translate-x-1 transition-all duration-200" />
            </a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="md:col-span-3 glass rounded-3xl p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="text-6xl mb-6">🚀</div>
                <h3 className="text-3xl font-bold mb-3">Message Sent!</h3>
                <p className="text-gray-400">Your email client has opened. I&apos;ll reply within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-accent underline underline-offset-4 hover:text-white transition-colors text-sm"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h2 className="text-2xl font-bold text-white mb-2">Send a Message</h2>

                <div>
                  <label className="text-sm font-medium text-gray-400 mb-2 block">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-400 mb-2 block">Your Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-400 mb-2 block">Tell me about your project</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="I'm looking to build an AI automation for my sales team..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>

                <MagneticButton glow type="submit" className="w-full justify-center">
                  Send Message <Send size={16} />
                </MagneticButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
