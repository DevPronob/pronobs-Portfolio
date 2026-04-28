"use client";

import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "TechNova Solutions",
    role: "Senior Full Stack Engineer",
    period: "2023 - Present",
    description: "Leading the development of enterprise-scale web applications, optimizing performance by 40% and mentoring junior developers.",
  },
  {
    company: "Digital Pulse Agency",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Built and maintained over 15+ client projects, ranging from e-commerce platforms to real-time collaboration tools.",
  },
  {
    company: "Creative Coders",
    role: "Junior Web Developer",
    period: "2020 - 2021",
    description: "Specialized in frontend design systems and responsive web implementation using modern CSS frameworks.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-32 px-8 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Career Path</h4>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Professional <span className="text-primary">Journey</span>
          </h2>
        </div>

        <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[11px] top-1 w-5 h-5 bg-background border-4 border-primary rounded-full group-hover:scale-125 transition-transform" />
              
              <div className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <h4 className="text-2xl font-black text-foreground tracking-tight">{exp.role}</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <div className="text-lg font-bold text-muted-foreground">{exp.company}</div>
                <p className="text-muted-foreground leading-relaxed max-w-2xl font-medium">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
