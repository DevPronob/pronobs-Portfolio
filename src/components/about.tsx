"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { User, Code2, Rocket, Heart, CheckCircle2, ShieldCheck, Award } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const metrics = [
    { label: "Technical Precision", value: "High-level architecture and clean code practices." },
    { label: "Scalable Solutions", value: "Building applications that grow with your business." },
    { label: "User Experience", value: "Seamless interactions and intuitive design flows." },
    { label: "Deadline Driven", value: "Consistent delivery of high-impact digital products." },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-32 px-8 bg-midnight/5 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={contentRef} className="space-y-16">
          
          <div className="space-y-6 max-w-3xl">
            <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Professional Summary</h4>
            <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight tracking-tight">
              Bridging the gap between <span className="text-primary">Vision</span> and <span className="text-primary">Reality</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <p className="text-muted-foreground text-xl leading-relaxed font-medium">
                I am a Full Stack Developer based in Comilla, Bangladesh, with over 3 years of experience in creating robust web solutions. My expertise lies in the MERN stack, where I combine backend efficiency with frontend elegance to deliver products that stand out in the digital landscape.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                My professional journey is defined by a commitment to continuous learning and a passion for solving complex technical challenges. I prioritize performance, security, and scalability in every line of code I write.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                 <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
                    <ShieldCheck className="w-4 h-4 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">Certified Expert</span>
                 </div>
                 <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Award Winning Projects</span>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metrics.map((item, i) => (
                <motion.div 
                  key={i}
                  className="glass-card p-8 rounded-[2rem] border-white/5 space-y-4 hover:border-primary/30 transition-all"
                  whileHover={{ y: -5 }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-black text-foreground tracking-tight">{item.label}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-12 border-t border-white/5">
             <div className="flex items-center gap-8">
                <div className="text-center">
                   <div className="text-4xl font-black text-foreground">3+</div>
                   <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Years Exp.</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                   <div className="text-4xl font-black text-foreground">20+</div>
                   <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Projects</div>
                </div>
                <div className="w-px h-12 bg-white/10" />
                <div className="text-center">
                   <div className="text-4xl font-black text-foreground">100%</div>
                   <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">Commitment</div>
                </div>
             </div>
             
             <motion.div
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <a 
                 href="#contact" 
                 className="bg-primary text-white font-bold px-12 py-6 rounded-2xl shadow-2xl shadow-primary/20 hover:bg-blue-600 transition-all"
               >
                 Let's Connect
               </a>
             </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle patterns */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent opacity-30" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
    </section>
  );
}
