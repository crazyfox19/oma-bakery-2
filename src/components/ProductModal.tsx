"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { useState } from "react";

export default function ProductModal() {
  const {
    selectedProduct,
    isProductModalOpen,
    closeProductModal,
    addToCart,
  } = useStore();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (!selectedProduct) return;
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: selectedProduct.id,
        name: selectedProduct.name,
        price: selectedProduct.price,
        image: selectedProduct.image,
      });
    }
    setQuantity(1);
    closeProductModal();
  };

  return (
    <AnimatePresence>
      {isProductModalOpen && selectedProduct && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProductModal}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 sm:inset-auto sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-full sm:max-w-2xl sm:max-h-[90vh] bg-white rounded-3xl z-50 shadow-2xl overflow-hidden flex flex-col"
          >
            <button
              onClick={closeProductModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-md"
            >
              <X className="w-5 h-5 text-bakery-dark" />
            </button>

            <div className="overflow-y-auto flex-1">
              <div className="relative h-64 sm:h-80 bg-bakery-peach-light">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 640px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl text-bakery-teal">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-bakery-dark/50 text-sm mt-1">{selectedProduct.details}</p>
                  </div>
                  <span className="font-heading text-3xl text-bakery-teal shrink-0">
                    ${selectedProduct.price}
                  </span>
                </div>

                <p className="text-bakery-dark/60 leading-relaxed mb-8 whitespace-pre-line">
                  {selectedProduct.description}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 bg-bakery-peach-light rounded-full px-4 py-2">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-bakery-mint transition-colors shadow-sm"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-lg w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-bakery-mint transition-colors shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <Button
                    variant="default"
                    size="lg"
                    className="flex-1 uppercase tracking-wider text-sm gap-2"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart — ${(selectedProduct.price * quantity).toFixed(2)}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
