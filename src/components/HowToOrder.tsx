"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: 1,
    title: "Choose",
    description: "Pick your favorite cake flavor and design.",
  },
  {
    number: 2,
    title: "Order",
    description: "Place and pay your order via online.",
  },
  {
    number: 3,
    title: "Customize",
    description: "Add personal touches and special requests.",
  },
  {
    number: 4,
    title: "Deliver",
    description: "Your order delivered fresh to your door.",
  },
];

export default function HowToOrder() {
  return (
    <section className="relative py-20 lg:py-32 bg-bakery-peach overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bakery-teal">
            How to Order
          </h2>
        </ScrollReveal>

        {/* Desktop: Zigzag Layout */}
        <div className="hidden md:block relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-bakery-teal/20 -translate-x-1/2" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            return (
              <ScrollReveal
                key={step.number}
                delay={i * 0.15}
                direction={isLeft ? "left" : "right"}
                className={`relative flex items-center mb-16 last:mb-0 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring" }}
                  className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-white text-bakery-teal flex items-center justify-center z-10 shadow-lg"
                  style={{ borderWidth: "3px", borderColor: "#2D6A4F", borderStyle: "solid" }}
                >
                  <span className="font-heading text-2xl">{step.number}</span>
                </motion.div>

                <div
                  className={`w-[42%] bg-white rounded-3xl p-8 shadow-md ${
                    isLeft ? "text-right mr-auto" : "text-left ml-auto"
                  }`}
                >
                  <h3 className="font-heading text-2xl text-bakery-teal mb-2">
                    {step.title}
                  </h3>
                  <p className="text-bakery-dark/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Mobile: Vertical Layout */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="flex items-start gap-5">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-14 h-14 rounded-full bg-white text-bakery-teal flex items-center justify-center shrink-0 shadow-lg"
                  style={{ borderWidth: "3px", borderColor: "#2D6A4F", borderStyle: "solid" }}
                >
                  <span className="font-heading text-xl">{step.number}</span>
                </motion.div>
                <div className="bg-white rounded-2xl p-6 shadow-md flex-1">
                  <h3 className="font-heading text-xl text-bakery-teal mb-1">
                    {step.title}
                  </h3>
                  <p className="text-bakery-dark/60 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
