"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import { Sparkle } from "@/components/SparkleDecoration";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="relative py-20 lg:py-32 bg-bakery-sage overflow-hidden">
      <Sparkle className="absolute top-10 left-[10%]" size={24} color="#2D6A4F" />
      <Sparkle className="absolute bottom-20 right-[15%]" size={18} color="#C1553B" />
      <Sparkle className="absolute top-1/2 left-[5%]" size={14} color="#2D6A4F" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal direction="left">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-2/3 aspect-square rounded-3xl overflow-hidden shadow-xl z-10"
              >
                <Image src="/images/danish-pastry.jpg" alt="Danish pastry" fill className="object-cover" sizes="300px" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 right-0 w-2/3 aspect-square rounded-3xl overflow-hidden shadow-xl"
              >
                <Image src="/images/bakery-display.jpg" alt="Bakery display" fill className="object-cover" sizes="300px" />
              </motion.div>
              <div className="absolute top-1/4 right-1/4 w-16 h-16">
                <Sparkle size={32} color="#2D6A4F" />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <h2 className="font-heading text-4xl sm:text-5xl text-bakery-teal leading-tight mb-4">
              Ready to taste
              <br />
              the magic?
            </h2>
            <p className="text-bakery-dark/60 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Take the first step towards sweet satisfaction — place your order
              now or subscribe to our newsletter for updates and promo.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
              <Input
                type="email"
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" variant="accent" className="uppercase tracking-wider text-xs shrink-0">
                Subscribe
              </Button>
            </form>

            {subscribed && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-bakery-teal font-semibold text-sm"
              >
                Thanks for subscribing! Sweet news coming your way.
              </motion.p>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
