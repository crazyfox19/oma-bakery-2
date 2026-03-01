"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import { useStore } from "@/store/useStore";
import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const products = [
  {
    id: 1,
    name: "Descendant Choco Chips",
    price: 18,
    image: "/images/choco-chips.jpg",
    details: "Crunchy chocolate chip cookies",
    description:
      "Our Descendant Choco Chips cookies are loaded with premium Belgian chocolate chips, baked to a perfect golden crisp on the outside while staying chewy on the inside. A timeless classic that pairs perfectly with a glass of cold milk.",
  },
  {
    id: 2,
    name: "Classic Vanilla Chiffon Cake",
    price: 25,
    image: "/images/chiffon-cake.jpg",
    details: "Light and fluffy chiffon cake",
    description:
      "Our Classic Vanilla Chiffon Cake is incredibly light and airy, made with premium Madagascar vanilla extract. Each slice offers a cloud-like texture that melts in your mouth. Perfect for celebrations or an elegant afternoon tea.",
  },
  {
    id: 3,
    name: "Choco Mousse Extravaganza",
    price: 30,
    image: "/images/choco-mousse.jpg",
    details: "Rich chocolate mousse cake",
    description:
      "Indulge in layers of velvety chocolate mousse atop a decadent brownie base, finished with a glossy chocolate mirror glaze. This is the ultimate dessert for serious chocolate lovers.",
  },
  {
    id: 4,
    name: "Buttery Croissant",
    price: 8,
    image: "/images/croissant.jpg",
    details: "Flaky French-style croissant",
    description:
      "Our signature croissants are made with imported French butter, laminated to 81 layers of flaky, golden perfection. Crispy on the outside, soft and airy on the inside.",
  },
  {
    id: 5,
    name: "Cinnamon Rolls",
    price: 12,
    image: "/images/cinnamon-rolls.jpg",
    details: "Warm gooey cinnamon rolls",
    description:
      "Freshly baked cinnamon rolls swirled with a fragrant cinnamon-sugar filling and topped with a generous drizzle of cream cheese glaze. Best enjoyed warm from the oven.",
  },
  {
    id: 6,
    name: "French Macarons",
    price: 20,
    image: "/images/macarons.jpg",
    details: "Box of 12 assorted macarons",
    description:
      "A beautiful assortment of 12 handcrafted French macarons in flavors including raspberry, pistachio, salted caramel, and lavender. Each macaron features a crisp shell and luscious ganache filling.",
  },
];

const PRODUCTS_PER_PAGE = 6;

export default function SignatureProducts() {
  const addToCart = useStore((s) => s.addToCart);
  const openProductModal = useStore((s) => s.openProductModal);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <section id="products" className="relative py-20 lg:py-32 bg-bakery-peach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bakery-teal mb-4">
            Our Signature
          </h2>
          <p className="text-bakery-dark/50 text-lg">
            Handcrafted with love, baked to perfection
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProducts.map((product, i) => (
            <ScrollReveal key={product.id} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
                onClick={() => openProductModal(product)}
              >
                <div className="relative h-64 sm:h-72 overflow-hidden bg-bakery-mint">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading text-xl text-bakery-teal mb-1">
                        {product.name}
                      </h3>
                      <p className="text-bakery-teal text-2xl font-bold">
                        ${product.price}
                      </p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.85 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                        });
                      }}
                      className="w-12 h-12 rounded-2xl bg-bakery-teal flex items-center justify-center text-white hover:bg-bakery-teal-dark transition-colors shrink-0 shadow-md"
                    >
                      <ShoppingBag className="w-5 h-5" />
                    </motion.button>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openProductModal(product);
                    }}
                    className="inline-block mt-3 text-sm text-bakery-dark/50 hover:text-bakery-teal transition-colors underline underline-offset-2"
                  >
                    More Details
                  </button>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-full border-2 border-bakery-teal/30 flex items-center justify-center text-bakery-teal hover:bg-bakery-teal hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full text-sm font-semibold transition-all ${
                  page === currentPage
                    ? "bg-bakery-teal text-white"
                    : "border-2 border-bakery-teal/30 text-bakery-teal hover:bg-bakery-teal hover:text-white"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-full border-2 border-bakery-teal/30 flex items-center justify-center text-bakery-teal hover:bg-bakery-teal hover:text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
