"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { useState } from "react";
import Link from "next/link";

const categories = ["Tips & Tricks", "New Articles", "Promotions"];

export const articles = [
  {
    id: 1,
    slug: "best-seller-cakes",
    title: "Our Favorite Cakes that Always Make it to The Best Seller",
    image: "/images/chiffon-cake.jpg",
    category: "Tips & Tricks",
    excerpt:
      "Discover the secret behind our most popular cakes and why customers keep coming back for more.",
    content:
      "Every bakery has its stars — the cakes that fly off the shelves faster than we can bake them. At Oma Bakery, our Classic Vanilla Cake has reigned supreme since day one. But what makes it so special? It all starts with our signature vanilla bean paste, sourced directly from Madagascar.\n\nOur Red Velvet has become a close second, with its deep cocoa flavor and tangy cream cheese frosting creating a perfect balance. And let's not forget our Chocolate Fudge Cake — three layers of rich, dense chocolate sponge that's been called 'a hug in cake form' by our regulars.\n\nThe secret to our best sellers isn't just the recipes — it's the love and attention that goes into every single bake. We never rush our process, and we always use the freshest, highest-quality ingredients available.",
    date: "February 15, 2026",
    author: "Chef Maria",
  },
  {
    id: 2,
    slug: "custom-birthday-cake",
    title: "Designing Your Own Customized Dream Birthday Cake",
    image: "/images/birthday-cake.jpg",
    category: "New Articles",
    excerpt:
      "Learn how to work with our bakers to create the perfect custom cake for your special day.",
    content:
      "Your birthday cake should be as unique as you are. At Oma Bakery, we believe every celebration deserves a cake that tells a story. Here's how our custom cake process works:\n\nFirst, schedule a tasting consultation with our head baker. You'll sample our most popular flavors and discuss your vision. Whether it's a three-tier galaxy cake or a simple elegant design, we're here to make it happen.\n\nNext, our design team creates a sketch based on your ideas. We'll work with you on colors, decorations, and any special elements you want to include. From fondant figurines to edible flowers, the possibilities are endless.\n\nFinally, we bring your dream cake to life. Our bakers spend hours crafting every detail, ensuring your cake is not just beautiful but absolutely delicious. We recommend ordering at least two weeks in advance for custom designs.",
    date: "February 10, 2026",
    author: "Chef David",
  },
  {
    id: 3,
    slug: "choosing-right-cake",
    title: "Choosing the Right Cake for Any Occasion and Party: A Guide",
    image: "/images/tiramisu.jpg",
    category: "Promotions",
    excerpt:
      "Not sure which cake to pick? Our comprehensive guide helps you choose the perfect cake for every event.",
    content:
      "Choosing the right cake can feel overwhelming with so many options available. But don't worry — we've put together this handy guide to help you pick the perfect cake for any occasion.\n\nFor weddings, consider our elegant tiered cakes with buttercream or fondant finish. Our most popular wedding flavor is our Champagne Cake with raspberry filling.\n\nFor children's birthdays, fun shapes and bright colors are key. Our character cakes and themed designs are always a hit with the little ones.\n\nFor corporate events, opt for our sheet cakes or cupcake towers that are easy to serve and look professional. We can customize with company logos and brand colors.\n\nFor intimate gatherings, our 6-inch round cakes serve 8-10 and come in any flavor combination. They're the perfect size for a dinner party dessert.\n\nRemember, we also offer gluten-free and vegan options for all our cake styles!",
    date: "February 5, 2026",
    author: "Chef Sarah",
  },
];

export default function CakeJournal() {
  const [activeCategory, setActiveCategory] = useState("Tips & Tricks");

  return (
    <section id="journal" className="relative py-20 lg:py-32 bg-bakery-mint">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bakery-teal mb-8">
            Cake Journal
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300 border-2 ${
                  activeCategory === cat
                    ? "bg-bakery-teal text-white border-bakery-teal"
                    : "bg-transparent text-bakery-teal border-bakery-teal/30 hover:border-bakery-teal"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <ScrollReveal key={article.id} delay={i * 0.15}>
              <Link href={`/blog/${article.slug}`}>
                <motion.article whileHover={{ y: -5 }} className="group cursor-pointer">
                  <div className="relative h-56 sm:h-64 rounded-3xl overflow-hidden mb-5 shadow-md">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <h3 className="font-heading text-lg text-bakery-dark leading-snug mb-3 group-hover:text-bakery-teal transition-colors">
                    {article.title}
                  </h3>
                  <span className="text-bakery-teal text-sm font-semibold underline underline-offset-4 decoration-bakery-teal/30 hover:decoration-bakery-teal transition-colors">
                    Read More
                  </span>
                </motion.article>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
