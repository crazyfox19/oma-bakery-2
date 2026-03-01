"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, ChevronRight, Menu, X } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Our Favorite Cakes that Always Make it to The Best Seller",
    image: "/images/chiffon-cake.jpg",
    excerpt:
      "Discover the secret behind our most popular cakes and why customers keep coming back for more.",
    date: "February 15, 2026",
    author: "Chef Maria",
    slug: "best-seller-cakes",
  },
  {
    id: 2,
    title: "Designing Your Own Customized Dream Birthday Cake",
    image: "/images/birthday-cake.jpg",
    excerpt:
      "Learn how to work with our bakers to create the perfect custom cake for your special day.",
    date: "February 10, 2026",
    author: "Chef David",
    slug: "custom-birthday-cake",
  },
  {
    id: 3,
    title: "Choosing the Right Cake for Any Occasion and Party: A Guide",
    image: "/images/tiramisu.jpg",
    excerpt:
      "Not sure which cake to pick? Our comprehensive guide helps you choose the perfect cake for every event.",
    date: "February 5, 2026",
    author: "Chef Sarah",
    slug: "cake-occasion-guide",
  },
];

const navLinks = [
  { label: "ABOUT", href: "/about" },
  { label: "PRODUCTS", href: "/products" },
  { label: "BLOG", href: "/blog" },
  { label: "CONTACT", href: "/contact" },
];

const playfair = "'Playfair Display', serif";

export default function BlogPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap');`}
      </style>

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 bg-[#FFFBF5] shadow-sm">
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-purple-700 text-2xl font-bold"
            style={{ fontFamily: playfair }}
          >
            Oma Bakery
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-body text-sm tracking-wider text-purple-700 transition-colors hover:text-amber-500 ${
                  link.label === "BLOG"
                    ? "border-b-2 border-amber-500 pb-1"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link href="/cart" className="text-purple-700">
              <ShoppingBag size={22} />
            </Link>
            <Link
              href="/register"
              className="hidden md:inline-block rounded-full bg-purple-700 text-white px-6 py-2 text-sm font-body tracking-wider hover:bg-purple-800 transition-colors"
            >
              REGISTER
            </Link>
            <button
              className="md:hidden text-purple-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className="md:hidden bg-[#FFFBF5] border-t border-purple-100 px-6 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`block py-3 text-sm tracking-wider text-purple-700 font-body ${
                  link.label === "BLOG" ? "text-amber-500 font-bold" : ""
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/register"
              className="block mt-2 text-center rounded-full bg-purple-700 text-white px-6 py-2 text-sm font-body tracking-wider"
              onClick={() => setMobileOpen(false)}
            >
              REGISTER
            </Link>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="bg-purple-50 py-20 relative overflow-hidden">
        {/* Sparkles */}
        <span className="absolute top-8 left-[12%] text-amber-500 text-2xl rotate-12 select-none pointer-events-none">
          ✦
        </span>
        <span className="absolute top-14 right-[15%] text-purple-400 text-xl -rotate-6 select-none pointer-events-none">
          ✧
        </span>
        <span className="absolute bottom-10 left-[25%] text-purple-400 text-lg rotate-[20deg] select-none pointer-events-none">
          ✦
        </span>
        <span className="absolute bottom-6 right-[10%] text-amber-500 text-2xl -rotate-12 select-none pointer-events-none">
          ✧
        </span>

        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <h1
            className="text-5xl md:text-[56px] font-bold text-purple-700 leading-tight"
            style={{ fontFamily: playfair }}
          >
            Our Cake Journal
          </h1>
          <p className="text-gray-500 text-base mt-4 font-body">
            Stories, recipes, and tips from our bakers.
          </p>
        </div>
      </section>

      {/* ── Wave Divider (lavender → cream) ── */}
      <div className="bg-purple-50">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-[70px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C60,65 120,10 200,35 C280,60 340,15 420,40 C500,65 560,20 640,35 C720,50 780,10 860,30 C940,50 1000,15 1080,40 C1160,65 1220,20 1300,35 C1380,50 1420,30 1440,40 L1440,80 L0,80 Z"
            fill="#FFFBF5"
          />
        </svg>
      </div>

      {/* ── Blog Card Grid ── */}
      <section className="bg-[#FFFBF5] py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link key={article.id} href={`/blog/${article.slug}`}>
                <article className="bg-purple-100 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="relative aspect-video">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <p className="text-gray-400 text-[13px] font-body">
                      {article.date} &middot; {article.author}
                    </p>
                    <h3
                      className="text-purple-700 font-bold text-lg mt-2 leading-snug line-clamp-2"
                      style={{ fontFamily: playfair }}
                    >
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-3 font-body">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="inline-flex items-center text-amber-500 text-sm font-bold font-body hover:underline">
                        Read More <ChevronRight size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Wave Divider (cream → dark purple) ── */}
      <div className="bg-[#FFFBF5]">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block w-full h-[70px]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C60,65 120,10 200,35 C280,60 340,15 420,40 C500,65 560,20 640,35 C720,50 780,10 860,30 C940,50 1000,15 1080,40 C1160,65 1220,20 1300,35 C1380,50 1420,30 1440,40 L1440,80 L0,80 Z"
            fill="#581C87"
          />
        </svg>
      </div>

      {/* ── Footer ── */}
      <footer className="bg-purple-900 py-16 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <h3
                className="text-white text-2xl font-bold mb-4"
                style={{ fontFamily: playfair }}
              >
                Oma Bakery
              </h3>
              <p className="text-purple-200 text-sm font-body leading-relaxed">
                +1 (555) 123-4567
              </p>
              <p className="text-purple-200 text-sm font-body leading-relaxed">
                hello@omabakery.com
              </p>
              <p className="text-purple-200 text-sm font-body leading-relaxed">
                123 Baker Street, Sweet Town
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider font-body mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {["About Us", "Shop Cakes", "Testimonials", "Store Locations"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-purple-200 text-sm font-body hover:text-amber-500 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider font-body mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                {["Cake Journal", "Recipes", "Our Story", "Our Values"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-purple-200 text-sm font-body hover:text-amber-500 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider font-body mb-4">
                Legal
              </h4>
              <ul className="space-y-2">
                {["FAQ", "Terms of Service", "Refund Policy", "Privacy Policy"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-purple-200 text-sm font-body hover:text-amber-500 transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-purple-700 mt-12 pt-8">
            <p className="text-purple-300 text-xs text-center font-body">
              &copy; 2026 Oma Bakery. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
