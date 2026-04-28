"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ExternalLink, Code } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  {
    title: "Elo - Ride Sharing App",
    tags: ["UX/UI Design", "Frontend", "Backend"],
    imgSrc: "https://i.ibb.co/ZzcMtWYd/Vite-React-TS-4.png",
    liveDemo: "https://ride-booking-system-frontend-ten.vercel.app/",
    frontendRepo: "https://github.com/DevPronob/ride-sharing-app-client",
    backendRepo: "https://github.com/DevPronob/ride-sharing-app-server",
  },
  {
    title: "Campers Shop",
    tags: ["Web Design", "Frontend", "API Integration", "Backend"],
    imgSrc: "https://i.ibb.co/KpmX7Vb2/Vite-React-TS-5.png",
    liveDemo: "https://campers-ecom-frontend.vercel.app/",
    frontendRepo: "https://github.com/DevPronob/campers-shop-frontend",
    backendRepo: "https://github.com/DevPronob/campers-shop-backend",
  },
  {
    title: "EventHub - Event Management App",
    tags: ["UX/UI Design", "Next.js", "Node.js"],
    imgSrc: "https://i.ibb.co.com/Z6YCBWGT/Screenshot-48.png",
    liveDemo: "https://eventhub-lac-omega.vercel.app/",
    frontendRepo: "https://github.com/DevPronob/EventHub",
    backendRepo: "https://github.com/DevPronob/EventHub",
  },
  {
    title: "BD-Tool App",
    tags: ["UX/UI Design", "React", "Node.js", "Stripe"],
    imgSrc: "https://i.ibb.co/B5kSX13s/React-App.png",
    liveDemo: "https://bd-mart-manufacture-client.vercel.app/",
    frontendRepo: "https://github.com/DevPronob/BD-Tool-manufacture-app-frontend",
    backendRepo: "https://github.com/DevPronob/BD-Tool-manufacture-app-backend",
  },
  {
    title: "Library Management App",
    tags: ["Web Design", "Responsive", "MongoDB", "React", "Node.js"],
    imgSrc: "https://i.ibb.co/8g52H1Ls/Vite-React-TS-6.png",
    liveDemo: "https://library-frontend-black.vercel.app/",
    frontendRepo: "https://github.com/DevPronob/library-management-system-frontend",
    backendRepo: "https://github.com/DevPronob/library-management-system-backend",
  },
];

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.from(titleRef.current.querySelectorAll("*"), {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-8 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        <div ref={titleRef} className="text-center space-y-6">
          <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Full Stack Portfolio</h4>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Latest <span className="text-primary font-black">Work</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="group border-none shadow-xl shadow-slate-200/40 dark:shadow-none dark:bg-card rounded-[2.5rem] overflow-hidden bg-white flex flex-col transition-all duration-500 h-full relative">
                <div className="aspect-[16/10] relative overflow-hidden bg-muted">
                  <motion.img 
                    src={project.imgSrc} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="bg-white/90 dark:bg-black/90 p-4 rounded-full"
                    >
                      <ExternalLink className="w-6 h-6 text-primary" />
                    </motion.div>
                  </div>
                </div>
                
                <CardContent className="p-8 flex-1 flex flex-col space-y-6">
                  <div className="space-y-4">
                    <h4 className="text-xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <motion.div
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + (i * 0.05) }}
                        >
                          <Badge variant="secondary" className="bg-muted/50 text-muted-foreground border-none px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest">
                            {tag}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 grid grid-cols-1 gap-3 mt-auto">
                    <motion.a 
                      href={project.liveDemo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: "default" }), "w-full h-11 rounded-xl shadow-lg shadow-primary/20 font-bold flex items-center justify-center")}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      Live Demo
                    </motion.a>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.a 
                        href={project.frontendRepo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "outline" }), "font-bold h-11 rounded-xl flex items-center justify-center")}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                         <Code className="w-4 h-4 mr-2" />
                         Frontend
                      </motion.a>
                      <motion.a 
                        href={project.backendRepo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={cn(buttonVariants({ variant: "outline" }), "font-bold h-11 rounded-xl flex items-center justify-center")}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                         <Code className="w-4 h-4 mr-2" />
                         Backend
                      </motion.a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
