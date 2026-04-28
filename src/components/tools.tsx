"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const tools = [
  { name: "MongoDB", icon: "https://img.icons8.com/color/96/000000/mongodb.png", percent: 95 },
  { name: "MySQL", icon: "https://img.icons8.com/ios-filled/100/000000/mysql-logo.png", percent: 93 },
  { name: "PostgreSQL", icon: "https://img.icons8.com/color/96/000000/postgreesql.png", percent: 88 },
  { name: "Express.js", icon: "https://icon.icepanel.io/Technology/svg/Express.svg", percent: 90 },
  { name: "React", icon: "https://img.icons8.com/color/96/000000/react-native.png", percent: 98 },
  { name: "Node.js", icon: "https://img.icons8.com/color/96/000000/nodejs.png", percent: 92 },
  { name: "Git", icon: "https://img.icons8.com/color/96/000000/git.png", percent: 88 },
  { name: "VS Code", icon: "https://img.icons8.com/color/96/000000/visual-studio-code-2019.png", percent: 94 },
];

gsap.registerPlugin(ScrollTrigger);

export function Tools() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tool-card", {
        opacity: 0,
        scale: 0.8,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="tools" ref={containerRef} className="py-32 px-8 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Technical Proficiency</h4>
          <h2 className="text-4xl md:text-5xl font-black text-foreground leading-tight">
            Advanced <span className="text-primary">Tech Stack</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="tool-card"
              whileHover={{ y: -10 }}
            >
              <Card className="glass-card border-border/40 p-8 rounded-[2.5rem] group hover:bg-primary transition-all duration-500 cursor-default h-full">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <img src={tool.icon} alt={tool.name} className="w-10 h-10 object-contain" />
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-end">
                     <h4 className="text-xl font-bold group-hover:text-white transition-colors">{tool.name}</h4>
                     <span className="text-primary font-black text-2xl group-hover:text-white/80 transition-colors">{tool.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-muted dark:bg-white/10 rounded-full overflow-hidden">
                     <motion.div 
                       className="h-full bg-primary group-hover:bg-white"
                       initial={{ width: 0 }}
                       whileInView={{ width: `${tool.percent}%` }}
                       transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                       viewport={{ once: true }}
                     />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
