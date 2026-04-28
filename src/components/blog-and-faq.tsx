"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const blogs = [
  {
    title: "Minimal 3D Design Trends in Web",
    category: "Design",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
    date: "Dec 10, 2024",
  },
  {
    title: "How to Build a Scalable MERN App",
    category: "Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    date: "Dec 08, 2024",
  },
  {
    title: "The Future of Web Development",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    date: "Dec 05, 2024",
  },
];

const faqs = [
  {
    question: "What technologies do you use for web development?",
    answer: "I primarily use the MERN stack (MongoDB, Express, React, Node.js) along with Next.js, TypeScript, and Tailwind CSS for building modern web applications.",
  },
  {
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity. A simple website might take 2 weeks, while a complex web application could take 2-3 months.",
  },
  {
    question: "Do you provide maintenance and support?",
    answer: "Yes, I offer ongoing maintenance and support packages to ensure your application stays up-to-date and performs optimally.",
  },
  {
    question: "Can you help with UI/UX design?",
    answer: "Absolutely! I have experience in crafting intuitive user interfaces and experiences using tools like Figma before moving to development.",
  },
];

export function BlogAndFAQ() {
  return (
    <>
      {/* Blog Section */}
      <section id="blog" className="bg-white py-24 px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h3 className="text-gold font-bold uppercase tracking-[0.3em] text-sm">Our Blog</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-forest-800">
              Our Latest <span className="text-gold">News & Blogs</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogs.map((blog, index) => (
              <Card key={index} className="group border-none shadow-xl shadow-gray-200/50 rounded-[2.5rem] overflow-hidden bg-white hover:-translate-y-2 transition-all duration-300">
                <div className="h-56 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <Badge className="bg-gold/10 text-gold border-none px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {blog.category}
                    </Badge>
                    <span className="text-xs text-gray-400 font-medium">{blog.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-forest-800 group-hover:text-gold transition-colors leading-tight">
                    {blog.title}
                  </h4>
                  <a href="#" className="inline-block text-sm font-bold text-forest-800 hover:text-gold transition-colors">Read More</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-forest-800 py-24 px-8 text-white">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h3 className="text-gold font-bold uppercase tracking-[0.3em] text-sm">Common Questions</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold">
              Questions? <span className="text-gold">Look Here</span>
            </h2>
          </div>

          <Accordion className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-none bg-forest-900/50 rounded-2xl px-8 overflow-hidden">
                <AccordionTrigger className="text-lg font-bold hover:no-underline hover:text-gold text-left py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
