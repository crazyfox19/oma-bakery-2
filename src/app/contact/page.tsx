"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductModal from "@/components/ProductModal";
import PageTransition from "@/components/PageTransition";
import WaveDivider from "@/components/WaveDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Sparkle } from "@/components/SparkleDecoration";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["123 Bakery Street", "Sweet City, SC 12345"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["(+234) 812 345 6789", "Mon-Sat: 7am - 8pm"],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@omabakery.com", "orders@omabakery.com"],
  },
  {
    icon: Clock,
    title: "Opening Hours",
    details: ["Mon-Fri: 7am - 8pm", "Sat-Sun: 8am - 6pm"],
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <Navbar />
      <CartDrawer />
      <ProductModal />

      <PageTransition>
        <main className="pt-20">
          <section className="relative bg-bakery-peach py-16 sm:py-24 overflow-hidden">
            <Sparkle className="absolute top-10 right-[20%]" size={20} color="#2D6A4F" />
            <Sparkle className="absolute bottom-10 left-[15%]" size={16} color="#C1553B" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <ScrollReveal>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bakery-teal mb-4">
                  Get in Touch
                </h1>
                <p className="text-bakery-dark/50 text-lg max-w-2xl mx-auto">
                  Have a question, custom order request, or just want to say hello?
                  We&apos;d love to hear from you!
                </p>
              </ScrollReveal>
            </div>
          </section>

          <WaveDivider fillColor="#FFF8F0" bgColor="#FDDCC8" />

          <section className="py-16 sm:py-24 bg-bakery-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <div>
                  <ScrollReveal>
                    <h2 className="font-heading text-3xl text-bakery-teal mb-8">Contact Information</h2>
                  </ScrollReveal>

                  <div className="grid sm:grid-cols-2 gap-6">
                    {contactInfo.map((item, i) => (
                      <ScrollReveal key={item.title} delay={i * 0.1}>
                        <motion.div whileHover={{ y: -3 }} className="bg-white rounded-2xl p-6 shadow-sm">
                          <div className="w-12 h-12 rounded-2xl bg-bakery-mint flex items-center justify-center mb-4">
                            <item.icon className="w-6 h-6 text-bakery-teal" />
                          </div>
                          <h3 className="font-heading text-lg text-bakery-teal mb-2">{item.title}</h3>
                          {item.details.map((detail) => (
                            <p key={detail} className="text-bakery-dark/50 text-sm">{detail}</p>
                          ))}
                        </motion.div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>

                <ScrollReveal direction="right">
                  <div className="bg-white rounded-3xl p-8 shadow-md">
                    <h2 className="font-heading text-2xl text-bakery-teal mb-6">Send Us a Message</h2>

                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-12"
                      >
                        <div className="w-16 h-16 rounded-full bg-bakery-teal/10 flex items-center justify-center mx-auto mb-4">
                          <Sparkle size={32} color="#2D6A4F" />
                        </div>
                        <h3 className="font-heading text-xl text-bakery-teal mb-2">Message Sent!</h3>
                        <p className="text-bakery-dark/50 text-sm">
                          We&apos;ll get back to you as soon as possible.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-sm font-semibold text-bakery-dark/70 mb-1.5 block">First Name</label>
                            <Input type="text" placeholder="John" required className="rounded-xl" />
                          </div>
                          <div>
                            <label className="text-sm font-semibold text-bakery-dark/70 mb-1.5 block">Last Name</label>
                            <Input type="text" placeholder="Doe" required className="rounded-xl" />
                          </div>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-bakery-dark/70 mb-1.5 block">Email</label>
                          <Input type="email" placeholder="john@example.com" required className="rounded-xl" />
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-bakery-dark/70 mb-1.5 block">Subject</label>
                          <Input type="text" placeholder="Custom cake order" required className="rounded-xl" />
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-bakery-dark/70 mb-1.5 block">Message</label>
                          <textarea
                            placeholder="Tell us about your order or question..."
                            required
                            rows={4}
                            className="flex w-full rounded-xl border-2 border-bakery-peach-dark/50 bg-white px-5 py-3 text-sm font-body text-bakery-dark placeholder:text-bakery-dark/40 focus:outline-none focus:border-bakery-teal focus:ring-2 focus:ring-bakery-teal/20 transition-all duration-300 resize-none"
                          />
                        </div>

                        <Button type="submit" variant="default" size="lg" className="w-full uppercase tracking-wider text-sm">
                          Send Message
                        </Button>
                      </form>
                    )}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>

          <WaveDivider fillColor="#2D6A4F" bgColor="#FFF8F0" />
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}
