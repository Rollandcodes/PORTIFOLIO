"use client";

import { Linkedin, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 bg-[#050505] border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-gray-400 relative z-10">
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <span className="font-bold text-white tracking-widest"><span className="text-accent">R</span>M.</span>
        <span className="text-sm">&copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>

      <div className="flex items-center gap-6">
        <a 
          href="https://wa.me/905338425559" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          <MessageCircle size={24} />
          <span className="sr-only">WhatsApp</span>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/rolland-muhanguzi-507b6136a/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-accent transition-colors"
        >
          <Linkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </a>

        <a 
          href="mailto:roland@example.com" 
          className="hover:text-accent transition-colors"
        >
          <Mail size={24} />
          <span className="sr-only">Email</span>
        </a>
      </div>
    </footer>
  );
}
