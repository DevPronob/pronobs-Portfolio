"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "MERN Stack", color: "text-primary" },
  { name: "Next.js 15", color: "text-blue-400" },
  { name: "TypeScript", color: "text-blue-600" },
  { name: "Tailwind CSS", color: "text-cyan-400" },
  { name: "PostgreSQL", color: "text-indigo-400" },
  { name: "GSAP & Motion", color: "text-primary" },
];

export function SkillChips() {
  return (
    <div className="relative flex overflow-hidden py-12 border-y border-white/5 bg-slate-950/20 backdrop-blur-md mt-20">
      <motion.div 
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {/* Render twice for infinite effect */}
        {[...skills, ...skills].map((skill, index) => (
          <div
            key={index}
            className="flex items-center gap-12 px-6"
          >
            <span className={`text-4xl opacity-20 uppercase tracking-widest font-black ${skill.color} hover:opacity-100 transition-opacity cursor-default`}>
              {skill.name}
            </span>
            <div className="w-3 h-3 bg-primary/20 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
