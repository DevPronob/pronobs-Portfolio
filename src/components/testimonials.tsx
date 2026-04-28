"use client";

import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at InnovateX",
    text: "Pranab is an exceptional engineer. He took our complex requirements and delivered a product that exceeded our expectations in every way.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    text: "Working with Pranab was a breeze. His attention to detail and proactive communication made the entire development process smooth and efficient.",
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
  {
    name: "Emily Davis",
    role: "Design Lead",
    text: "The bridge between design and code is where Pranab shines. He perfectly translated our Figma designs into a high-performance web experience.",
    avatar: "https://i.pravatar.cc/150?u=emily",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="text-center space-y-4">
          <h4 className="text-primary font-bold uppercase tracking-[0.4em] text-xs">Testimonials</h4>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <Card key={index} className="border-none shadow-xl shadow-slate-200/50 dark:shadow-none dark:bg-card rounded-[2.5rem] overflow-hidden group hover:-translate-y-2 transition-all duration-500">
              <CardContent className="p-10 space-y-8 relative">
                <Quote className="absolute top-10 right-10 w-12 h-12 text-primary/5 group-hover:text-primary/10 transition-colors" />
                <p className="text-muted-foreground italic leading-relaxed text-lg relative z-10">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-muted">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-muted">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="text-lg font-black text-foreground tracking-tight">{t.name}</div>
                    <div className="text-xs font-bold uppercase tracking-widest text-primary">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
