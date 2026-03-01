"use client";

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Shop Cakes", href: "/products" },
      { label: "Testimonials", href: "/#testimonials" },
      { label: "Store Locations", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Cake Journal", href: "/blog" },
      { label: "Recipes", href: "/blog" },
      { label: "Our Story", href: "/about" },
      { label: "Our Values", href: "/about" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "FAQ", href: "/contact" },
      { label: "Terms of Service", href: "/contact" },
      { label: "Refund Policy", href: "/contact" },
      { label: "Privacy Policy", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-bakery-teal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <ScrollReveal className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="font-heading text-3xl text-white">Oma Bakery</span>
            </Link>
            <div className="space-y-2 text-white/70 text-sm">
              <p>(+234) 812 345 6789</p>
              <p>info@omabakery.com</p>
              <p>123 Bakery Street, Sweet City</p>
            </div>
          </ScrollReveal>

          {footerLinks.map((col, i) => (
            <ScrollReveal key={col.title} delay={0.1 * (i + 1)}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/90">
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/50 text-sm">
            <p>&copy; {new Date().getFullYear()} Oma Bakery. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
