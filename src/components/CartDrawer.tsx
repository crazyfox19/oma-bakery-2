"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";

export default function CartDrawer() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, cartTotal } =
    useStore();

  const total = cartTotal();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-bakery-cream z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-bakery-peach">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-bakery-teal" />
                <h2 className="font-heading text-2xl text-bakery-teal">Your Cart</h2>
              </div>
              <button
                onClick={closeCart}
                className="w-10 h-10 rounded-full bg-bakery-mint/50 flex items-center justify-center hover:bg-bakery-mint transition-colors"
              >
                <X className="w-5 h-5 text-bakery-teal" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingBag className="w-16 h-16 text-bakery-peach mx-auto mb-4" />
                  <p className="text-bakery-dark/50 font-medium">Your cart is empty</p>
                  <p className="text-bakery-dark/30 text-sm mt-1">Add some delicious treats!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {cart.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4 bg-white rounded-2xl p-4 shadow-sm"
                      >
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                          <Image src={item.image} alt={item.name} fill className="object-cover" sizes="80px" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading text-bakery-teal text-sm truncate">{item.name}</h3>
                          <p className="text-bakery-teal font-bold mt-1">${item.price}</p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-lg bg-bakery-mint/50 flex items-center justify-center hover:bg-bakery-mint transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-lg bg-bakery-mint/50 flex items-center justify-center hover:bg-bakery-mint transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="self-start p-1.5 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-bakery-peach bg-white/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-bakery-dark/60 font-medium">Total</span>
                  <span className="font-heading text-2xl text-bakery-teal">${total.toFixed(2)}</span>
                </div>
                <Button variant="default" size="lg" className="w-full uppercase tracking-wider">
                  Checkout
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
