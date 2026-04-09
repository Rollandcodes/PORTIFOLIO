"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Rolland built our entire CRM automation in two weeks. We went from manually following up with 10 leads a day to the system handling 70+ outreach sequences on autopilot. Revenue impact was immediate.",
    name: "Sarah K.",
    role: "Founder, E-commerce Brand",
    avatar: "SK",
    color: "#10B981",
  },
  {
    quote: "The AI chatbot he integrated on our site books calls while we sleep. It's replaced what would have been a part-time sales hire. The ROI in the first month alone was 4x the project cost.",
    name: "Marcus T.",
    role: "CEO, Digital Agency",
    avatar: "MT",
    color: "#6366F1",
  },
  {
    quote: "I've worked with many developers, but Rolland thinks like a founder. He doesn't just ask 'what do you want built?' — he asks 'what problem are we really solving?' That mindset shows in every deliverable.",
    name: "Priya M.",
    role: "Product Manager, SaaS startup",
    avatar: "PM",
    color: "#F59E0B",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full py-28 px-6 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent text-sm font-mono tracking-widest uppercase mb-3">
            Social Proof
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white">
            Results Backed by{" "}
            <span className="gradient-text-accent">Real People.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group glass rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden card-hover"
            >
              {/* Top quote mark */}
              <div
                className="absolute top-5 right-7 text-6xl font-serif leading-none opacity-10 select-none pointer-events-none"
                style={{ color: t.color }}
              >
                &ldquo;
              </div>

              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top right, ${t.color}08, transparent 70%)` }}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} className="w-4 h-4" viewBox="0 0 20 20" fill={t.color}>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 text-sm leading-7 mb-8 relative z-10 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 relative z-10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold text-black flex-shrink-0"
                  style={{ background: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{t.name}</p>
                  <p className="text-gray-600 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
