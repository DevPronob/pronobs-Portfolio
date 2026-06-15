"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Portrait
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2
      });

      // Reveal Text Elements
      if (textRef.current) {
        const textElements = textRef.current.querySelectorAll("h4, h1, p, .grid, .flex");
        gsap.from(textElements, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { label: "Projects", value: "20+" },
    { label: "Years Exp", value: "3+" },
    { label: "Success", value: "98%" },
  ];

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-8 hero-gradient">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Portrait Left */}
        <div ref={imageRef} className="lg:col-span-5 relative group">
          <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl group-hover:bg-primary/30 transition-all" />
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-yellow-400 shadow-2xl">
            <motion.img 
              src="https://i.ibb.co.com/gMLP3vcT/unnamed-2-1.png" 
              alt="Pranab Roy Bormon" 
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/40 via-transparent to-transparent opacity-60" />
          </div>
          
          {/* Decorative Elements */}
          <motion.div 
            className="absolute -bottom-6 -left-6 w-32 h-32 border-l-4 border-b-4 border-primary/40 rounded-bl-3xl"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.6, 0.4] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute -top-6 -right-6 w-32 h-32 border-r-4 border-t-4 border-primary/40 rounded-tr-3xl"
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.6, 0.4] 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </div>

        {/* Content Right */}
        <div ref={textRef} className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Full Stack Web Developer</h4>
            <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
              Pranab Roy <br />
              <span className="text-gradient">Bormon</span>
            </h1>
          </div>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
            I’m a Full Stack Web Developer from Comilla, Bangladesh with over 3 years of experience. I build modern, scalable web applications using the MERN stack and have strong knowledge of both SQL and NoSQL databases.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-4">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + (i * 0.1), duration: 0.5 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)" }}
                className="glass-card p-6 rounded-2xl border-white/5 cursor-default transition-colors"
              >
                <div className="text-3xl font-black text-foreground">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-5 pt-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="bg-primary hover:bg-blue-600 text-white font-bold px-10 py-7 text-lg rounded-2xl shadow-xl shadow-primary/30 group">
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="https://drive.google.com/file/d/1GiIraou43LYplwUZbenvVsGD9LIAaLuY/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="border-border text-foreground hover:bg-muted font-bold px-10 py-7 text-lg rounded-2xl bg-transparent w-full md:w-auto">
                  <Download className="mr-2 w-5 h-5" />
                  Get Resume
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
