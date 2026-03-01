"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { Sparkle } from "@/components/SparkleDecoration";
import { Plus } from "lucide-react";

const tags = [
  "Quality Ingredients",
  "Personalized Designs",
  "On-Time Delivery",
  "Affordable Prices",
  "Values",
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-bakery-mint overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            <ScrollReveal>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bakery-teal leading-tight mb-6">
                Best Choice for
                <br />
                Every Occasion
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-bakery-dark/60 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                At Oma Bakery, we turn simple ingredients into delectable works of
                edible art. Satisfy your cravings with our irresistible pastries
                and baked goods, delivered fresh from the oven for you truly.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-wrap gap-3 items-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full border-2 border-bakery-teal/30 flex items-center justify-center text-bakery-teal hover:bg-bakery-teal hover:text-white transition-all duration-300"
                >
                  <Plus className="w-4 h-4" />
                </motion.button>
                {tags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="px-5 py-2.5 rounded-full bg-bakery-teal text-white text-xs font-semibold uppercase tracking-wider hover:bg-bakery-teal-dark transition-colors cursor-default"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Image */}
          <ScrollReveal direction="right" className="relative">
            <Sparkle className="absolute -top-6 right-10 z-10" size={28} color="#2D6A4F" />
            <Sparkle className="absolute bottom-10 -left-4 z-10" size={20} color="#C1553B" />

            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bakery-display.jpg"
                alt="Delicious pastries from Oma Bakery"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bakery-teal/20 to-transparent" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
