"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  // Dynamic height based on scroll
  const headerHeight = useTransform(scrollY, [0, 100], ["5rem", "4rem"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    
    // GSAP entrance
    gsap.from(".navbar-item", {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.8
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      style={{ height: headerHeight }}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-border" : "bg-transparent border-transparent"
      )}
    >
      <nav className="flex justify-between items-center h-full px-8 max-w-7xl mx-auto">
        <motion.div 
          className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2 cursor-pointer navbar-item"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-black text-sm">P</div>
          Pranab.
        </motion.div>
        
        <div className="hidden md:flex items-center gap-10">
          {["Home", "Projects", "Services", "About"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="navbar-item"
            >
              <motion.span 
                className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors relative group block"
                whileHover={{ y: -2 }}
              >
                {item}
                <motion.span 
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" 
                />
              </motion.span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 navbar-item">
          <ThemeToggle />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-primary hover:bg-blue-600 text-primary-foreground font-bold px-6 h-10 rounded-full transition-all shadow-lg shadow-primary/20">
              Contact
            </Button>
          </motion.div>
        </div>
      </nav>
    </motion.header>
  );
}
