"use client";

import { Card } from "@/components/ui/card";
import { Monitor, Cpu, Layout, Smartphone, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const services = [
  {
    title: "Website Design",
    description: "I craft professional, high-end websites that represent your brand with precision and modern aesthetics.",
    icon: Monitor,
    features: ["Custom UI/UX", "Modern Typography", "Brand Alignment"]
  },
  {
    title: "API Integration",
    description: "Expertise in connecting frontends with robust backend services and third-party APIs for complex functionality.",
    icon: Cpu,
    features: ["RESTful APIs", "External Services", "Data Orchestration"]
  },
  {
    title: "UI/UX Design",
    description: "User-centric design systems that focus on usability, accessibility, and high conversion rates.",
    icon: Layout,
    features: ["Prototyping", "User Flow", "Wireframing"]
  },
  {
    title: "Responsive Design",
    description: "Flawless performance and layout across all devices, from high-res monitors to mobile screens.",
    icon: Smartphone,
    features: ["Mobile First", "Cross-browser", "Adaptive Layouts"]
  },
];

gsap.registerPlugin(ScrollTrigger);

export function Services() {
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          opacity: 0,
          x: -30,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" className="py-32 px-8 bg-background relative overflow-hidden">
      {/* Decorative Glow */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-border pb-12">
          <div className="space-y-4">
            <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Professional Offerings</h4>
            <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight">
              What I <span className="text-primary">Deliver</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-lg font-medium leading-relaxed">
            High-performance solutions tailored to bridge the gap between business goals and technical reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="glass-card border-border/40 p-12 rounded-[3rem] group hover:bg-primary transition-all duration-700 flex flex-col lg:flex-row gap-10 items-start cursor-default">
                <motion.div 
                  className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-white/20 transition-colors"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <service.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </motion.div>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="text-2xl font-black group-hover:text-white transition-colors tracking-tight">{service.title}</h4>
                    <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed font-medium">
                      {service.description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                     {service.features.map((feature, i) => (
                       <motion.div 
                         key={feature} 
                         className="flex items-center gap-2 text-sm font-bold text-foreground group-hover:text-white transition-colors"
                         initial={{ opacity: 0, x: -10 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ delay: 0.5 + (i * 0.1) }}
                       >
                         <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-white" />
                         {feature}
                       </motion.div>
                     ))}
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
