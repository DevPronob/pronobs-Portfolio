"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      // Simulate form submission delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

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
                <Mail className="w-6 h-6 text-white" />
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
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                Comilla, Bangladesh
              </div>
            </motion.div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <motion.div
          className="contact-form bg-white dark:bg-card/40 backdrop-blur-sm text-foreground p-12 rounded-[3rem] shadow-2xl shadow-slate-200/30 dark:shadow-none border border-slate-100 dark:border-white/5"
          whileHover={{ y: -5 }}
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center justify-center text-center py-12 space-y-6"
              >
                <div className="w-20 h-20 bg-green-100 dark:bg-green-950/30 text-green-500 dark:text-green-400 rounded-full flex items-center justify-center shadow-inner">
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="w-10 h-10"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </motion.svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium max-w-sm">
                    Thank you for reaching out! Your inquiry has been sent. Pranab will reply to you as soon as possible.
                  </p>
                </div>
                <motion.button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl shadow-md transition-all uppercase tracking-wider text-xs cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form key="form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      Full Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      disabled={status === "sending"}
                      className={cn(
                        "h-14 text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950/20 rounded-xl border px-6 font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all w-full",
                        errors.name ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-slate-200 dark:border-slate-800"
                      )}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 font-semibold mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                      Email Address
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      disabled={status === "sending"}
                      className={cn(
                        "h-14 text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950/20 rounded-xl border px-6 font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all w-full",
                        errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-slate-200 dark:border-slate-800"
                      )}
                    />
                    {errors.email && (
                      <p className="text-xs text-red-500 font-semibold mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Project Collaboration"
                    disabled={status === "sending"}
                    className={cn(
                      "h-14 text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950/20 rounded-xl border px-6 font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all w-full",
                      errors.subject ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-slate-200 dark:border-slate-800"
                    )}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-500 font-semibold mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your project details or message here..."
                    disabled={status === "sending"}
                    className={cn(
                      "min-h-[160px] text-slate-900 dark:text-slate-100 bg-slate-50 dark:bg-slate-950/20 rounded-2xl border p-6 font-medium focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all w-full",
                      errors.message ? "border-red-500 focus:border-red-500 focus:ring-red-500/20" : "border-slate-200 dark:border-slate-800"
                    )}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 font-semibold mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500 font-semibold text-center">
                    Oops! Something went wrong. Please try again.
                  </p>
                )}

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full h-14 bg-primary hover:bg-blue-600 text-white font-bold text-base rounded-xl shadow-lg shadow-primary/20 tracking-wide uppercase flex items-center justify-center gap-2 disabled:opacity-80 cursor-pointer"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Inquiry...
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}