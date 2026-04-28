"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-info > *", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-info",
          start: "top 80%",
        },
      });

      gsap.from(".contact-form", {
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-32 px-8 bg-slate-50 dark:bg-midnight/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* LEFT SIDE */}
        <div className="contact-info space-y-12">
          <div className="space-y-6">
            <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">
              Connectivity
            </h4>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              Let&apos;s build your <br />
              <span className="text-primary">Next Project</span>
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium max-w-md">
              Available for full-time opportunities or high-impact freelance collaborations.
            </p>
          </div>

          <div className="space-y-8">
            <motion.div
              className="flex items-center gap-6 group cursor-pointer"
              whileHover={{ x: 10 }}
            >
              <div className="w-14 h-14 bg-black dark:bg-card rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200 dark:shadow-none group-hover:bg-primary group-hover:text-white transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                pranab.dev@gmail.com
              </div>
            </motion.div>

            <motion.div
              className="flex items-center gap-6 group cursor-pointer"
              whileHover={{ x: 10 }}
            >
              <div className="w-14 h-14 bg-black dark:bg-card rounded-2xl flex items-center justify-center shadow-xl shadow-slate-200 dark:shadow-none group-hover:bg-primary group-hover:text-white transition-all">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                +880 123 456 789
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          className="contact-form bg-white dark:bg-card text-black dark:text-white p-12 rounded-[3rem] shadow-2xl shadow-slate-200/50 dark:shadow-none space-y-8 border border-slate-100 dark:border-white/5"
          whileHover={{ y: -5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Full Name
              </label>
              <Input className="h-14 text-black rounded-xl border border-slate-300 dark: bg-white dark:bg-white/5 px-6 font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                Email Address
              </label>
              <Input className="h-14 text-black rounded-xl border border-slate-300 dark: bg-white dark:bg-white/5 px-6 font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
            </div>

          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Subject
            </label>
            <Input className="h-14 text-black rounded-xl border border-slate-300 dark: dark:bg-white/5 px-6 font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Message
            </label>
            <Textarea className="min-h-[160px] text-black rounded-2xl border border-slate-300  bg-white dark:bg-white/5 p-6 font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
          </div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full h-14 bg-primary hover:bg-blue-600 text-white font-bold text-base rounded-xl shadow-lg shadow-primary/20 tracking-wide uppercase flex items-center justify-center gap-2">
              Send Inquiry
              <Send className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}