"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Palette, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    title: "Deeper Skillset",
    description: "Comprehensive mastery of modern frontend frameworks and responsive architecture principles.",
    icon: Brain,
    color: "text-primary-container",
    bgColor: "bg-primary-container/10",
    hoverBorder: "hover:border-primary-container/50",
  },
  {
    title: "Creative Work",
    description: "Blending technical precision with artistic vision to create memorable digital narratives.",
    icon: Palette,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    hoverBorder: "hover:border-secondary/50",
  },
  {
    title: "Strong Dedication",
    description: "Commitment to pixel-perfect delivery and continuous iterative improvement on every project.",
    icon: Zap,
    color: "text-on-tertiary-container",
    bgColor: "bg-tertiary-container/10",
    hoverBorder: "hover:border-on-tertiary-container/50",
  },
];

export function FeatureCards() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div 
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 px-8 md:px-16 max-w-7xl mx-auto mb-24"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{ 
            y: -10,
            transition: { duration: 0.3 }
          }}
        >
          <Card
            className={`glass-panel border-white/10 rounded-2xl group ${feature.hoverBorder} transition-all duration-300 bg-transparent shadow-none h-full`}
          >
            <CardHeader>
              <motion.div 
                className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </motion.div>
              <CardTitle className="text-xl text-white uppercase tracking-tight font-bold">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <motion.p 
                className="text-slate-400 text-sm leading-relaxed"
                initial={{ opacity: 0.7 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {feature.description}
              </motion.p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
