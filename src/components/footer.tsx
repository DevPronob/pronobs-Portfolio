"use client";

import Link from "next/link";
import { Globe, Mail, Link as LinkIcon, ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-section", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-card pt-32 pb-12 px-8 border-t border-border/40 relative overflow-hidden">
      {/* Background Decorative Element */}
      <motion.div 
        className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* Footer CTA Section */}
        <motion.div 
          className="bg-primary p-12 md:p-20 rounded-[3rem] text-primary-foreground flex flex-col md:flex-row justify-between items-center gap-12 shadow-2xl shadow-primary/20 footer-section"
          whileHover={{ scale: 1.01 }}
        >
          <div className="space-y-4 text-center md:text-left">
             <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
               Let's build your <br /> next project together.
             </h2>
             <p className="text-primary-foreground/70 text-lg md:text-xl max-w-md font-medium">
               I'm currently available for freelance work and full-time opportunities.
             </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-white hover:bg-slate-100 text-primary font-black px-12 py-8 text-xl rounded-2xl transition-all shadow-xl group h-auto">
               Get in Touch
               <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 footer-section">
          <div className="space-y-8">
            <div className="text-3xl font-black tracking-tighter text-foreground">
              Pranab<span className="text-primary">.</span>
            </div>
            <p className="text-muted-foreground leading-relaxed font-medium">
              Full Stack Web Developer specialized in building high-performance, scalable web applications using the MERN stack.
            </p>
            <div className="flex gap-4">
               {[
                 { icon: Code, href: "https://github.com/DevPronob" },
                 { icon: LinkIcon, href: "https://www.linkedin.com/in/pranab5/" },
                 { icon: Globe, href: "https://www.facebook.com/pronob.roy.37819" },
                 { icon: Mail, href: "mailto:pranab.dev@gmail.com" }
               ].map((social, i) => (
                 <motion.a 
                    key={i}
                    href={social.href} 
                    target="_blank" 
                    className="w-12 h-12 rounded-2xl bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all shadow-sm"
                    whileHover={{ y: -5, scale: 1.1 }}
                 >
                   <social.icon className="w-5 h-5" />
                 </motion.a>
               ))}
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-foreground">Sitemap</h4>
            <ul className="space-y-4">
              {["Home", "Projects", "Services", "About"].map(link => (
                <li key={link}>
                  <Link href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors font-semibold flex items-center group">
                    <span className="w-0 group-hover:w-4 h-0.5 bg-primary mr-0 group-hover:mr-2 transition-all" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-foreground">Expertise</h4>
            <ul className="space-y-4">
              {["MERN Development", "Database Management", "UI/UX Engineering", "API Integration"].map(item => (
                <li key={item} className="text-muted-foreground font-semibold flex items-center">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-sm font-black uppercase tracking-[0.3em] text-foreground">Say Hello</h4>
            <div className="space-y-2">
              <div className="text-lg font-black text-foreground">pranab.dev@gmail.com</div>
              <div className="text-muted-foreground font-semibold">Comilla, Bangladesh</div>
            </div>
            <div className="pt-4">
               <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Availability</div>
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                 <span className="text-xs font-bold text-muted-foreground">Available for Work</span>
               </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6 footer-section">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
            © 2024 Pranab Roy Bormon. Built with Passion.
          </p>
          <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
             <Link href="#home" className="hover:text-primary transition-colors flex items-center gap-2">
               Scroll to Top
               <ArrowRight className="-rotate-90 w-3 h-3" />
             </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
