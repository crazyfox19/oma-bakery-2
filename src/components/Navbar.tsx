"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const {
    cart,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    openCart,
  } = useStore();

  const pathname = usePathname();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-bakery-cream/90 backdrop-blur-md border-b border-bakery-peach/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2">
              <span className="font-heading text-2xl sm:text-3xl text-bakery-teal">
                Oma Bakery
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 relative group ${
                      isActive
                        ? "text-bakery-teal"
                        : "text-bakery-dark/70 hover:text-bakery-teal"
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-bakery-teal rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              {/* Cart Button */}
              <button
                onClick={openCart}
                className="relative p-2 rounded-full hover:bg-bakery-mint/50 transition-colors duration-300"
              >
                <ShoppingBag className="w-5 h-5 text-bakery-teal" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-bakery-coral text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </button>

              {/* Register Button (Desktop) */}
              <Link href="/contact" className="hidden md:block">
                <Button
                  variant="default"
                  size="sm"
                  className="uppercase tracking-wider text-xs"
                >
                  Register
                </Button>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 rounded-full hover:bg-bakery-mint/50 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-bakery-teal" />
                ) : (
                  <Menu className="w-5 h-5 text-bakery-teal" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay to catch outside taps */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 z-40 bg-black/20 md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-x-0 top-16 sm:top-20 z-50 bg-bakery-cream/95 backdrop-blur-lg border-b border-bakery-peach shadow-xl md:hidden"
            >
              <nav className="flex flex-col p-6 gap-4">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={`text-lg font-semibold transition-colors py-2 border-b border-bakery-peach/30 block ${
                          isActive
                            ? "text-bakery-teal"
                            : "text-bakery-dark/80 hover:text-bakery-teal"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <Link href="/contact" onClick={closeMobileMenu}>
                  <Button variant="default" className="mt-2 uppercase tracking-wider text-sm w-full">
                    Register
                  </Button>
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
