"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Mike Johnson",
    text: "Oma Bakery made my daughter's birthday special with a cake that tasted as good as it looked!",
  },
  {
    id: 2,
    name: "Sarah Williams",
    text: "Their chocolate cake is the best I have ever tasted in town. Keep up the amazing work!",
  },
  {
    id: 3,
    name: "David Chen",
    text: "The cupcakes were absolutely divine! Perfect for our office party. Everyone was impressed.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="relative py-20 lg:py-32 bg-bakery-mint overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bakery-teal mb-4">
            What People Say
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={false}
                animate={{
                  opacity: i === activeIndex ? 1 : 0,
                  scale: i === activeIndex ? 1 : 0.95,
                  position: i === activeIndex ? "relative" : "absolute",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`bg-white rounded-3xl p-8 sm:p-10 shadow-md text-center ${
                  i !== activeIndex ? "inset-0 pointer-events-none" : ""
                }`}
              >
                <svg
                  className="w-10 h-10 text-bakery-peach mx-auto mb-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.291 0-2.431-.692-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.166 21 15c0 1.933-1.567 3.5-3.5 3.5-1.291 0-2.431-.692-2.917-1.179z" />
                </svg>
                <p className="text-bakery-dark/70 text-lg sm:text-xl leading-relaxed mb-6 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="font-heading text-bakery-teal text-lg">
                  {t.name}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-8 bg-bakery-teal" : "w-2.5 bg-bakery-teal/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
