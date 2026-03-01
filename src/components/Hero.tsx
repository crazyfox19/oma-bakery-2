"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sparkle } from "@/components/SparkleDecoration";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const heroSlides = [
  {
    image: "/images/croissant.jpg",
    title: "Delight in",
    titleAccent: "every bite!",
    subtitle: "Choco Croissant",
    price: "$0.6",
    description:
      "Experience the joy of perfectly baked pastries, made with love and crafted to bring a smile to every celebration.",
  },
  {
    image: "/images/chiffon-cake.jpg",
    title: "Sweetness in",
    titleAccent: "every cup!",
    subtitle: "Vanilla Chiffon Cake",
    price: "$25",
    description:
      "Handcrafted cakes with delicate frosting, perfect for birthdays, parties, or a sweet everyday treat.",
  },
  {
    image: "/images/cinnamon-rolls.jpg",
    title: "Fresh from",
    titleAccent: "the oven!",
    subtitle: "Cinnamon Rolls",
    price: "$12",
    description:
      "Warm, gooey cinnamon rolls baked fresh daily with the finest ingredients and traditional family recipes.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slide = heroSlides[currentSlide];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );

  return (
    <section className="relative min-h-screen pt-20 bg-bakery-mint overflow-hidden">
      {/* Background decorative blob */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-bakery-peach/60 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left: Image */}
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            {/* Sparkles */}
            <Sparkle className="absolute -top-4 right-[15%] z-20" size={22} color="#2D6A4F" />
            <Sparkle className="absolute top-[20%] -left-2 z-20" size={16} color="#C1553B" />
            <Sparkle className="absolute bottom-[10%] right-[10%] z-20" size={18} color="#2D6A4F" />

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]"
            >
              <div className="absolute inset-0 rounded-full bg-bakery-peach/70" />
              <Image
                src={slide.image}
                alt={slide.subtitle}
                fill
                className="object-cover rounded-full p-3"
                sizes="(max-width: 768px) 300px, 450px"
                priority
              />
            </motion.div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 text-bakery-teal"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-white hover:scale-110 transition-all duration-300 text-bakery-teal"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Product Label */}
            <motion.div
              key={`label-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-0 left-8 bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg"
            >
              <p className="text-sm text-bakery-dark/60 flex items-center gap-2">
                <span className="w-6 h-px bg-bakery-teal inline-block" />
                {slide.subtitle} ({slide.price})
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-bakery-teal leading-[1.1] mb-6">
              {slide.title}
              <br />
              <span className="text-bakery-teal-dark">{slide.titleAccent}</span>
            </h1>

            <p className="text-bakery-dark/60 text-base sm:text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              {slide.description}
            </p>

            <Link href="/products">
              <Button variant="accent" size="lg" className="uppercase tracking-widest text-sm">
                Shop Now
              </Button>
            </Link>

            {/* Slide indicators */}
            <div className="flex gap-2 mt-8 justify-center lg:justify-start">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentSlide ? "w-8 bg-bakery-teal" : "w-2 bg-bakery-teal/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
