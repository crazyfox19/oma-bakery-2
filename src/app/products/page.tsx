"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import ProductModal from "@/components/ProductModal";
import PageTransition from "@/components/PageTransition";
import WaveDivider from "@/components/WaveDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import Image from "next/image";
import { ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { useStore } from "@/store/useStore";
import { products } from "@/components/SignatureProducts";
import { useState } from "react";

const allProducts = [
  ...products,
  {
    id: 7,
    name: "Danish Pastry",
    price: 10,
    image: "/images/danish-pastry.jpg",
    details: "Flaky pastry with fruit filling",
    description:
      "Our Danish Pastries feature layers of buttery, flaky dough filled with seasonal fruit compote and finished with a sweet glaze. Baked fresh every morning for the perfect breakfast treat.",
  },
  {
    id: 8,
    name: "Tiramisu Cake",
    price: 28,
    image: "/images/tiramisu.jpg",
    details: "Classic Italian coffee-flavored dessert",
    description:
      "Our Tiramisu Cake layers espresso-soaked ladyfingers with rich mascarpone cream, dusted with premium cocoa powder. A sophisticated dessert that captures the essence of the Italian classic.",
  },
  {
    id: 9,
    name: "Artisan Sourdough Bread",
    price: 12,
    image: "/images/bread.jpg",
    details: "Crusty artisan sourdough loaf",
    description:
      "Our signature sourdough bread is made from a 3-year-old starter culture, slow-fermented for 24 hours to develop deep, complex flavors. The result is a beautifully crusty exterior with a soft, airy interior.",
  },
];

const PRODUCTS_PER_PAGE = 6;

export default function ProductsPage() {
  const addToCart = useStore((s) => s.addToCart);
  const openProductModal = useStore((s) => s.openProductModal);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = allProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);

  return (
    <>
      <Navbar />
      <CartDrawer />
      <ProductModal />

      <PageTransition>
        <main className="pt-20">
          <section className="bg-bakery-peach py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <ScrollReveal>
                <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-bakery-teal mb-4">
                  Our Products
                </h1>
                <p className="text-bakery-dark/50 text-lg max-w-2xl mx-auto">
                  From signature cakes to artisan breads, every item is baked
                  fresh daily with the finest ingredients.
                </p>
              </ScrollReveal>
            </div>
          </section>

          <WaveDivider fillColor="#FFF8F0" bgColor="#FDDCC8" />

          <section className="py-16 bg-bakery-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentProducts.map((product, i) => (
                  <ScrollReveal key={product.id} delay={i * 0.1}>
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
                            <p className="text-bakery-dark/50 text-sm mb-2">{product.details}</p>
                            <p className="text-bakery-teal text-2xl font-bold">${product.price}</p>
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
                      </div>
                    </motion.div>
                  </ScrollReveal>
                ))}
              </div>

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

          <WaveDivider fillColor="#2D6A4F" bgColor="#FFF8F0" />
        </main>

        <Footer />
      </PageTransition>
    </>
  );
}
